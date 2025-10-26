/**
 * Parser - Constructs AST from tokens
 *
 * Converts token stream into Abstract Syntax Tree
 */

import { TokenType } from './lexer.js';
import * as AST from './ast.js';

/**
 * Parser class
 */
class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.cursor = 0;
  }

  /**
   * Get current token
   */
  current() {
    return this.tokens[this.cursor];
  }

  /**
   * Get next token without advancing
   */
  peek(offset = 1) {
    return this.tokens[this.cursor + offset];
  }

  /**
   * Advance cursor and return previous token
   */
  advance() {
    return this.tokens[this.cursor++];
  }

  /**
   * Check if current token matches type
   */
  check(type) {
    return this.current().type === type;
  }

  /**
   * Check if we're at end
   */
  isAtEnd() {
    return this.check(TokenType.EOF);
  }

  /**
   * Get tokens from current line
   */
  getLineTokens(lineNum) {
    const lineTokens = [];
    let i = 0;
    while (i < this.tokens.length) {
      const token = this.tokens[i];
      if (token.pos.line === lineNum && token.type !== TokenType.NEWLINE) {
        lineTokens.push(token);
      }
      if (token.pos.line > lineNum) break;
      i++;
    }
    return lineTokens;
  }

  /**
   * Parse entire document
   */
  parse() {
    const children = [];

    while (!this.isAtEnd()) {
      const node = this.parseTopLevel();
      if (node) {
        children.push(node);
      }
    }

    return AST.createDocument(children);
  }

  /**
   * Parse top-level element
   */
  parseTopLevel() {
    // Skip newlines
    while (this.check(TokenType.NEWLINE)) {
      this.advance();
    }

    if (this.isAtEnd()) return null;

    // Check for box
    if (this.check(TokenType.BOX_TOP_LEFT)) {
      return this.parseBox();
    }

    // Check for list
    if (this.check(TokenType.DASH) && this.peek()?.type === TokenType.WHITESPACE) {
      return this.parseList();
    }

    // Check for heading
    if (this.check(TokenType.HASH)) {
      return this.parseHeading();
    }

    // Parse line content
    return this.parseLine();
  }

  /**
   * Parse a box structure
   */
  parseBox() {
    const startLine = this.current().pos.line;

    // Find the closing line of this box
    let endLine = startLine;
    let depth = 0;
    let i = this.cursor;

    while (i < this.tokens.length) {
      const token = this.tokens[i];

      if (token.type === TokenType.BOX_TOP_LEFT) {
        depth++;
      } else if (token.type === TokenType.BOX_BOTTOM_LEFT) {
        depth--;
        if (depth === 0) {
          endLine = token.pos.line;
          break;
        }
      }
      i++;
    }

    // Extract all tokens for this box
    const boxTokens = [];
    while (this.cursor < this.tokens.length && this.current().pos.line <= endLine) {
      boxTokens.push(this.advance());
    }

    // Parse box content
    return this.parseBoxContent(boxTokens, startLine, endLine);
  }

  /**
   * Parse box content
   */
  parseBoxContent(boxTokens, startLine, endLine) {
    // Check for header divider (├─...─┤)
    let dividerLine = -1;
    for (let i = 0; i < boxTokens.length; i++) {
      if (boxTokens[i].type === TokenType.BOX_DIVIDER_LEFT &&
          boxTokens[i].pos.line > startLine &&
          boxTokens[i].pos.line < endLine) {
        dividerLine = boxTokens[i].pos.line;
        break;
      }
    }

    if (dividerLine > 0) {
      // Box with header
      const headerTokens = boxTokens.filter(t =>
        t.pos.line > startLine && t.pos.line < dividerLine
      );
      const bodyTokens = boxTokens.filter(t =>
        t.pos.line > dividerLine && t.pos.line < endLine
      );

      const header = this.parseInlineTokens(headerTokens);
      const body = this.parseBodyContent(bodyTokens);

      return AST.createBox({
        hasHeader: true,
        header,
        body,
      });
    } else {
      // Simple box
      const contentTokens = boxTokens.filter(t =>
        t.pos.line > startLine && t.pos.line < endLine
      );

      // Check for textarea pattern (all underscores)
      const isTextarea = this.isTextareaPattern(contentTokens);
      if (isTextarea) {
        const rows = endLine - startLine - 1;
        return AST.createTextarea(rows);
      }

      const content = this.parseBodyContent(contentTokens);

      return AST.createBox({
        hasHeader: false,
        body: content,
      });
    }
  }

  /**
   * Check if tokens represent textarea pattern
   */
  isTextareaPattern(tokens) {
    const lines = {};

    // Group tokens by line
    for (const token of tokens) {
      if (!lines[token.pos.line]) {
        lines[token.pos.line] = [];
      }
      lines[token.pos.line].push(token);
    }

    // Check if all lines contain only underscores
    const lineNums = Object.keys(lines);
    if (lineNums.length < 2) return false;

    for (const lineNum of lineNums) {
      const lineTokens = lines[lineNum];
      const hasOnlyUnderscores = lineTokens.every(t =>
        t.type === TokenType.UNDERSCORE ||
        t.type === TokenType.BOX_VERTICAL ||
        t.type === TokenType.WHITESPACE
      );

      const hasAtLeastOneUnderscore = lineTokens.some(t =>
        t.type === TokenType.UNDERSCORE
      );

      if (!hasOnlyUnderscores || !hasAtLeastOneUnderscore) {
        return false;
      }
    }

    return true;
  }

  /**
   * Parse body content (can contain nested boxes)
   */
  parseBodyContent(tokens) {
    // Check for nested boxes
    const hasNestedBoxes = tokens.some(t =>
      t.type === TokenType.BOX_TOP_LEFT || t.type === TokenType.BOX_BOTTOM_LEFT
    );

    if (hasNestedBoxes) {
      return this.parseNestedContent(tokens);
    }

    // Check for sidebar pattern (vertical divider ┬...┴ or multiple │)
    const hasSidebar = this.hasSidebarPattern(tokens);
    if (hasSidebar) {
      return this.parseSidebarContent(tokens);
    }

    // Parse as inline content
    return this.parseInlineTokens(tokens);
  }

  /**
   * Parse nested content (boxes within boxes)
   */
  parseNestedContent(tokens) {
    // Group tokens by line
    const lines = {};
    for (const token of tokens) {
      if (!lines[token.pos.line]) {
        lines[token.pos.line] = [];
      }
      lines[token.pos.line].push(token);
    }

    const lineNums = Object.keys(lines).map(Number).sort((a, b) => a - b);

    // Check if first line has multiple boxes (card grid)
    const firstLineTokens = lines[lineNums[0]];
    const boxCount = firstLineTokens.filter(t => t.type === TokenType.BOX_TOP_LEFT).length;

    if (boxCount >= 2) {
      // Card grid - extract individual cards
      return this.parseCardGrid(tokens);
    }

    // Single nested structure - parse recursively
    const children = [];
    let currentBoxTokens = [];
    let inBox = false;
    let boxDepth = 0;

    for (const token of tokens) {
      if (token.type === TokenType.BOX_TOP_LEFT) {
        if (boxDepth === 0) {
          inBox = true;
        }
        boxDepth++;
      }

      if (inBox) {
        currentBoxTokens.push(token);
      } else if (token.type !== TokenType.BOX_VERTICAL && token.type !== TokenType.WHITESPACE) {
        // Non-box content
        children.push(this.parseTokenAsNode(token));
      }

      if (token.type === TokenType.BOX_BOTTOM_LEFT) {
        boxDepth--;
        if (boxDepth === 0) {
          // Complete box found
          const boxNode = this.parseBoxTokens(currentBoxTokens);
          if (boxNode) {
            children.push(boxNode);
          }
          currentBoxTokens = [];
          inBox = false;
        }
      }
    }

    return AST.createContainer(children.filter(Boolean));
  }

  /**
   * Parse tokens as a box
   */
  parseBoxTokens(tokens) {
    if (tokens.length === 0) return null;

    const startLine = tokens[0].pos.line;
    const endLine = tokens[tokens.length - 1].pos.line;

    return this.parseBoxContent(tokens, startLine, endLine);
  }

  /**
   * Parse card grid
   */
  parseCardGrid(tokens) {
    const cards = [];
    let currentCardTokens = [];
    let inCard = false;
    let cardDepth = 0;

    for (const token of tokens) {
      if (token.type === TokenType.BOX_TOP_LEFT) {
        if (!inCard) {
          inCard = true;
          cardDepth = 0;
        }
        cardDepth++;
      }

      if (inCard) {
        currentCardTokens.push(token);
      }

      if (token.type === TokenType.BOX_BOTTOM_LEFT) {
        cardDepth--;
        if (cardDepth === 0) {
          // Complete card
          const cardNode = this.parseBoxTokens(currentCardTokens);
          if (cardNode) {
            cards.push(cardNode);
          }
          currentCardTokens = [];
          inCard = false;
        }
      }
    }

    return AST.createCardGrid(cards);
  }

  /**
   * Check if tokens contain sidebar pattern
   */
  hasSidebarPattern(tokens) {
    // Check for vertical dividers (┬ or ┴ or multiple │ on same line)
    const lines = {};
    for (const token of tokens) {
      if (!lines[token.pos.line]) {
        lines[token.pos.line] = [];
      }
      lines[token.pos.line].push(token);
    }

    for (const lineTokens of Object.values(lines)) {
      const hasTopDivider = lineTokens.some(t => t.type === TokenType.BOX_DIVIDER_TOP);
      const hasBottomDivider = lineTokens.some(t => t.type === TokenType.BOX_DIVIDER_BOTTOM);
      const verticalCount = lineTokens.filter(t => t.type === TokenType.BOX_VERTICAL).length;

      if (hasTopDivider || hasBottomDivider || verticalCount > 2) {
        return true;
      }
    }

    return false;
  }

  /**
   * Parse sidebar content
   */
  parseSidebarContent(tokens) {
    // Split tokens by middle divider
    // This is simplified - assumes single vertical divider
    const lines = {};
    for (const token of tokens) {
      if (!lines[token.pos.line]) {
        lines[token.pos.line] = [];
      }
      lines[token.pos.line].push(token);
    }

    const leftTokens = [];
    const rightTokens = [];

    for (const [lineNum, lineTokens] of Object.entries(lines)) {
      // Find middle vertical divider
      const verticals = lineTokens.filter(t => t.type === TokenType.BOX_VERTICAL);
      if (verticals.length >= 2) {
        const middleCol = verticals[Math.floor(verticals.length / 2)].pos.col;

        for (const token of lineTokens) {
          if (token.pos.col < middleCol) {
            leftTokens.push(token);
          } else if (token.pos.col > middleCol) {
            rightTokens.push(token);
          }
        }
      }
    }

    const left = this.parseInlineTokens(leftTokens);
    const right = this.parseInlineTokens(rightTokens);

    return AST.createSidebar(left, right);
  }

  /**
   * Parse inline tokens into content nodes
   */
  parseInlineTokens(tokens) {
    // Filter out box characters
    const contentTokens = tokens.filter(t =>
      t.type !== TokenType.BOX_VERTICAL &&
      t.type !== TokenType.BOX_DIVIDER_LEFT &&
      t.type !== TokenType.BOX_DIVIDER_RIGHT &&
      t.type !== TokenType.NEWLINE
    );

    if (contentTokens.length === 0) {
      return AST.createText('');
    }

    // Group by line
    const lines = {};
    for (const token of contentTokens) {
      if (!lines[token.pos.line]) {
        lines[token.pos.line] = [];
      }
      lines[token.pos.line].push(token);
    }

    const children = [];
    for (const lineTokens of Object.values(lines)) {
      const lineNode = this.parseLineTokens(lineTokens);
      if (lineNode) {
        children.push(lineNode);
      }
    }

    if (children.length === 0) {
      return AST.createText('');
    }

    if (children.length === 1) {
      return children[0];
    }

    return AST.createContainer(children);
  }

  /**
   * Parse single line of tokens
   */
  parseLineTokens(tokens) {
    const nodes = [];
    let i = 0;

    while (i < tokens.length) {
      const token = tokens[i];

      // Button, input, checkbox, etc.
      if (token.type === TokenType.BRACKET_OPEN) {
        const result = this.parseBracketContent(tokens, i);
        nodes.push(result.node);
        i = result.nextIndex;
      }
      // Radio button
      else if (token.type === TokenType.PAREN_OPEN) {
        const result = this.parseParenContent(tokens, i);
        nodes.push(result.node);
        i = result.nextIndex;
      }
      // Link
      else if (token.type === TokenType.ARROW) {
        const result = this.parseArrowLink(tokens, i);
        nodes.push(result.node);
        i = result.nextIndex;
      }
      // Text
      else if (token.type === TokenType.TEXT) {
        nodes.push(AST.createText(token.value));
        i++;
      }
      // Whitespace
      else if (token.type === TokenType.WHITESPACE) {
        if (nodes.length > 0) {
          nodes.push(AST.createText(token.value));
        }
        i++;
      }
      else {
        i++;
      }
    }

    if (nodes.length === 0) {
      return null;
    }

    if (nodes.length === 1) {
      return nodes[0];
    }

    return AST.createInlineContent(nodes);
  }

  /**
   * Parse bracket content [ ... ]
   */
  parseBracketContent(tokens, startIndex) {
    let i = startIndex + 1;
    const contentTokens = [];

    while (i < tokens.length && tokens[i].type !== TokenType.BRACKET_CLOSE) {
      contentTokens.push(tokens[i]);
      i++;
    }

    // Consume closing bracket
    if (i < tokens.length) {
      i++;
    }

    // Determine what kind of element this is
    const hasUnderscores = contentTokens.some(t => t.type === TokenType.UNDERSCORE);
    const hasDropdown = contentTokens.some(t => t.type === TokenType.DROPDOWN_MARKER);
    const hasOnlySpace = contentTokens.every(t => t.type === TokenType.WHITESPACE);
    const hasX = contentTokens.some(t =>
      t.type === TokenType.TEXT && t.value.toLowerCase() === 'x'
    );
    const hasEllipsis = contentTokens.some(t =>
      t.type === TokenType.TEXT && t.value.includes('...')
    );

    // Checkbox
    if (hasOnlySpace || hasX) {
      // Look for label after bracket
      let label = '';
      while (i < tokens.length && tokens[i].type !== TokenType.BRACKET_OPEN &&
             tokens[i].pos.line === tokens[startIndex].pos.line) {
        if (tokens[i].type === TokenType.TEXT) {
          label += tokens[i].value;
        } else if (tokens[i].type === TokenType.WHITESPACE) {
          if (label) break; // Stop at whitespace after text
        }
        i++;
      }

      return {
        node: AST.createCheckbox(label.trim(), hasX),
        nextIndex: i,
      };
    }

    // Input with underscores
    if (hasUnderscores) {
      return {
        node: AST.createInput(null),
        nextIndex: i,
      };
    }

    // Dropdown
    if (hasDropdown) {
      const text = contentTokens
        .filter(t => t.type === TokenType.TEXT || t.type === TokenType.WHITESPACE)
        .map(t => t.value || '')
        .join('');

      return {
        node: AST.createDropdown([text.trim()]),
        nextIndex: i,
      };
    }

    // Input with placeholder
    if (hasEllipsis) {
      const text = contentTokens
        .filter(t => t.type === TokenType.TEXT || t.type === TokenType.WHITESPACE)
        .map(t => t.value || '')
        .join('');

      return {
        node: AST.createInput(text.trim()),
        nextIndex: i,
      };
    }

    // Icon (single emoji)
    const text = contentTokens
      .filter(t => t.type === TokenType.TEXT)
      .map(t => t.value)
      .join('');

    if (text === '🔍' || text === '≡' || text === '⚙') {
      return {
        node: AST.createIcon(text),
        nextIndex: i,
      };
    }

    // Button
    const buttonText = contentTokens
      .filter(t => t.type === TokenType.TEXT || t.type === TokenType.WHITESPACE)
      .map(t => t.value || '')
      .join('');

    return {
      node: AST.createButton(buttonText.trim()),
      nextIndex: i,
    };
  }

  /**
   * Parse paren content ( ... )
   */
  parseParenContent(tokens, startIndex) {
    let i = startIndex + 1;
    const contentTokens = [];

    while (i < tokens.length && tokens[i].type !== TokenType.PAREN_CLOSE) {
      contentTokens.push(tokens[i]);
      i++;
    }

    // Consume closing paren
    if (i < tokens.length) {
      i++;
    }

    const hasSpace = contentTokens.every(t => t.type === TokenType.WHITESPACE);
    const hasBullet = contentTokens.some(t => t.type === TokenType.BULLET);

    // Look for label
    let label = '';
    while (i < tokens.length && tokens[i].type !== TokenType.PAREN_OPEN &&
           tokens[i].pos.line === tokens[startIndex].pos.line) {
      if (tokens[i].type === TokenType.TEXT) {
        label += tokens[i].value;
      } else if (tokens[i].type === TokenType.WHITESPACE) {
        if (label) break;
      }
      i++;
    }

    return {
      node: AST.createRadio(label.trim(), hasBullet),
      nextIndex: i,
    };
  }

  /**
   * Parse arrow link
   */
  parseArrowLink(tokens, startIndex) {
    let i = startIndex + 1;
    let text = '';

    // Skip whitespace
    while (i < tokens.length && tokens[i].type === TokenType.WHITESPACE) {
      i++;
    }

    // Collect text until separator or end of line
    while (i < tokens.length && tokens[i].pos.line === tokens[startIndex].pos.line) {
      if (tokens[i].type === TokenType.TEXT) {
        // Stop at separators
        if (tokens[i].value.trim() === 'or' || tokens[i].value.trim() === 'and') {
          break;
        }
        text += tokens[i].value;
      } else if (tokens[i].type === TokenType.WHITESPACE) {
        text += tokens[i].value;
      } else if (tokens[i].type === TokenType.ARROW) {
        break;
      } else {
        break;
      }
      i++;
    }

    return {
      node: AST.createLink(text.trim(), 'before'),
      nextIndex: i,
    };
  }

  /**
   * Parse a token as a single node
   */
  parseTokenAsNode(token) {
    if (token.type === TokenType.TEXT) {
      return AST.createText(token.value);
    }
    return null;
  }

  /**
   * Parse a line (for non-box content)
   */
  parseLine() {
    const lineNum = this.current().pos.line;
    const lineTokens = [];

    while (!this.isAtEnd() && this.current().pos.line === lineNum) {
      lineTokens.push(this.advance());
    }

    // Consume newline
    if (this.check(TokenType.NEWLINE)) {
      this.advance();
    }

    return this.parseLineTokens(lineTokens);
  }

  /**
   * Parse a list
   */
  parseList() {
    const items = [];

    while (!this.isAtEnd() && this.check(TokenType.DASH)) {
      this.advance(); // consume dash

      // Skip whitespace
      if (this.check(TokenType.WHITESPACE)) {
        this.advance();
      }

      // Collect line content
      const lineNum = this.current().pos.line;
      const contentTokens = [];

      while (!this.isAtEnd() && this.current().pos.line === lineNum) {
        contentTokens.push(this.advance());
      }

      // Consume newline
      if (this.check(TokenType.NEWLINE)) {
        this.advance();
      }

      const content = contentTokens
        .filter(t => t.type === TokenType.TEXT)
        .map(t => t.value)
        .join('');

      items.push(AST.createListItem(content));
    }

    return AST.createList(items);
  }

  /**
   * Parse a heading
   */
  parseHeading() {
    let level = 0;

    while (this.check(TokenType.HASH)) {
      level++;
      this.advance();
    }

    // Skip whitespace
    if (this.check(TokenType.WHITESPACE)) {
      this.advance();
    }

    // Get heading text
    const lineNum = this.current().pos.line;
    let text = '';

    while (!this.isAtEnd() && this.current().pos.line === lineNum) {
      if (this.current().type === TokenType.TEXT) {
        text += this.current().value;
      }
      this.advance();
    }

    // Consume newline
    if (this.check(TokenType.NEWLINE)) {
      this.advance();
    }

    return AST.createHeading(level, text.trim());
  }
}

/**
 * Parse tokens into AST
 *
 * @param {Array<Token>} tokens - Token array from lexer
 * @returns {ASTNode} Root document node
 */
export function parse(tokens) {
  const parser = new Parser(tokens);
  return parser.parse();
}
