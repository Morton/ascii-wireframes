/**
 * Lexer - Tokenizes ASCII wireframe input
 *
 * Converts character stream into tokens that represent meaningful elements
 */

/**
 * Token types
 */
export const TokenType = {
  // Box drawing characters
  BOX_TOP_LEFT: 'BOX_TOP_LEFT',           // ┌
  BOX_TOP_RIGHT: 'BOX_TOP_RIGHT',         // ┐
  BOX_BOTTOM_LEFT: 'BOX_BOTTOM_LEFT',     // └
  BOX_BOTTOM_RIGHT: 'BOX_BOTTOM_RIGHT',   // ┘
  BOX_HORIZONTAL: 'BOX_HORIZONTAL',       // ─
  BOX_VERTICAL: 'BOX_VERTICAL',           // │
  BOX_DIVIDER_LEFT: 'BOX_DIVIDER_LEFT',   // ├
  BOX_DIVIDER_RIGHT: 'BOX_DIVIDER_RIGHT', // ┤
  BOX_DIVIDER_TOP: 'BOX_DIVIDER_TOP',     // ┬
  BOX_DIVIDER_BOTTOM: 'BOX_DIVIDER_BOTTOM', // ┴
  BOX_DIVIDER_CROSS: 'BOX_DIVIDER_CROSS', // ┼

  // Interactive pattern markers
  BRACKET_OPEN: 'BRACKET_OPEN',           // [
  BRACKET_CLOSE: 'BRACKET_CLOSE',         // ]
  PAREN_OPEN: 'PAREN_OPEN',               // (
  PAREN_CLOSE: 'PAREN_CLOSE',             // )
  ARROW: 'ARROW',                         // →
  DROPDOWN_MARKER: 'DROPDOWN_MARKER',     // ▾
  BULLET: 'BULLET',                       // •

  // Text markers
  HASH: 'HASH',                           // #
  DASH: 'DASH',                           // -
  UNDERSCORE: 'UNDERSCORE',               // _

  // Content
  TEXT: 'TEXT',
  WHITESPACE: 'WHITESPACE',
  NEWLINE: 'NEWLINE',

  // Special
  EOF: 'EOF',
};

/**
 * Tokenize input string
 *
 * @param {string} input - ASCII wireframe text
 * @returns {Array<Token>} Array of tokens
 */
export function lex(input) {
  const tokens = [];
  const lines = input.split('\n');

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];
    let col = 0;

    while (col < line.length) {
      const char = line[col];
      const pos = { line: lineNum, col };

      // Box drawing characters
      if (char === '┌') {
        tokens.push({ type: TokenType.BOX_TOP_LEFT, pos });
        col++;
      } else if (char === '┐') {
        tokens.push({ type: TokenType.BOX_TOP_RIGHT, pos });
        col++;
      } else if (char === '└') {
        tokens.push({ type: TokenType.BOX_BOTTOM_LEFT, pos });
        col++;
      } else if (char === '┘') {
        tokens.push({ type: TokenType.BOX_BOTTOM_RIGHT, pos });
        col++;
      } else if (char === '─') {
        tokens.push({ type: TokenType.BOX_HORIZONTAL, pos });
        col++;
      } else if (char === '│') {
        tokens.push({ type: TokenType.BOX_VERTICAL, pos });
        col++;
      } else if (char === '├') {
        tokens.push({ type: TokenType.BOX_DIVIDER_LEFT, pos });
        col++;
      } else if (char === '┤') {
        tokens.push({ type: TokenType.BOX_DIVIDER_RIGHT, pos });
        col++;
      } else if (char === '┬') {
        tokens.push({ type: TokenType.BOX_DIVIDER_TOP, pos });
        col++;
      } else if (char === '┴') {
        tokens.push({ type: TokenType.BOX_DIVIDER_BOTTOM, pos });
        col++;
      } else if (char === '┼') {
        tokens.push({ type: TokenType.BOX_DIVIDER_CROSS, pos });
        col++;
      }

      // Interactive pattern markers
      else if (char === '[') {
        tokens.push({ type: TokenType.BRACKET_OPEN, pos });
        col++;
      } else if (char === ']') {
        tokens.push({ type: TokenType.BRACKET_CLOSE, pos });
        col++;
      } else if (char === '(') {
        tokens.push({ type: TokenType.PAREN_OPEN, pos });
        col++;
      } else if (char === ')') {
        tokens.push({ type: TokenType.PAREN_CLOSE, pos });
        col++;
      } else if (char === '→') {
        tokens.push({ type: TokenType.ARROW, pos });
        col++;
      } else if (char === '▾') {
        tokens.push({ type: TokenType.DROPDOWN_MARKER, pos });
        col++;
      } else if (char === '•') {
        tokens.push({ type: TokenType.BULLET, pos });
        col++;
      }

      // Text markers
      else if (char === '#') {
        tokens.push({ type: TokenType.HASH, pos });
        col++;
      } else if (char === '-') {
        tokens.push({ type: TokenType.DASH, pos });
        col++;
      } else if (char === '_') {
        tokens.push({ type: TokenType.UNDERSCORE, pos });
        col++;
      }

      // Whitespace
      else if (char === ' ' || char === '\t') {
        let spaces = '';
        const startCol = col;
        while (col < line.length && (line[col] === ' ' || line[col] === '\t')) {
          spaces += line[col];
          col++;
        }
        tokens.push({ type: TokenType.WHITESPACE, value: spaces, pos: { line: lineNum, col: startCol } });
      }

      // Text content
      else {
        let text = '';
        const startCol = col;
        while (col < line.length && !isSpecialChar(line[col])) {
          text += line[col];
          col++;
        }
        if (text) {
          tokens.push({ type: TokenType.TEXT, value: text, pos: { line: lineNum, col: startCol } });
        }
      }
    }

    tokens.push({ type: TokenType.NEWLINE, pos: { line: lineNum, col: line.length } });
  }

  tokens.push({ type: TokenType.EOF, pos: { line: lines.length, col: 0 } });

  return tokens;
}

/**
 * Check if character is special (needs its own token)
 */
function isSpecialChar(char) {
  return (
    char === '┌' || char === '┐' || char === '└' || char === '┘' ||
    char === '─' || char === '│' ||
    char === '├' || char === '┤' || char === '┬' || char === '┴' || char === '┼' ||
    char === '[' || char === ']' ||
    char === '(' || char === ')' ||
    char === '→' || char === '▾' || char === '•' ||
    char === '#' || char === '-' || char === '_' ||
    char === ' ' || char === '\t'
  );
}
