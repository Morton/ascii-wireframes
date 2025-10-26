/**
 * HTML Generator - Transforms AST to HTML
 *
 * Converts Abstract Syntax Tree into HTML string output
 */

import { NodeType } from './ast.js';

/**
 * Default styles
 */
const DEFAULT_STYLES = {
  box: 'border: 1px solid black; padding: 8px;',
  boxHeader: 'padding: 8px; border-bottom: 1px solid black;',
  button: 'border: 1px solid black; padding: 4px 12px; background: white;',
  input: 'border: 1px solid black; padding: 4px;',
  select: 'border: 1px solid black; padding: 4px;',
  link: 'color: black; text-decoration: underline;',
  flexContainer: 'display: flex; gap: 8px;',
  card: 'border: 1px solid black; padding: 16px; flex: 1;',
  sidebar: 'display: flex; border: 1px solid black;',
  sidebarLeft: 'border-right: 1px solid black; padding: 16px; min-width: 120px;',
  sidebarRight: 'padding: 16px; flex: 1;',
  list: 'list-style: disc; padding-left: 20px;',
  h1: 'font-size: 2em; font-weight: bold; margin: 0.67em 0;',
  h2: 'font-size: 1.5em; font-weight: bold; margin: 0.75em 0;',
  paragraph: 'margin: 1em 0;',
  icon: 'border: 1px solid black; padding: 2px 6px;',
};

/**
 * Generate HTML from AST
 *
 * @param {ASTNode} ast - Root AST node
 * @param {Object} options - Generation options
 * @param {boolean} options.styled - Include inline styles
 * @param {Object} options.styles - Custom style overrides
 * @returns {string} HTML string
 */
export function generate(ast, options = {}) {
  const { styled = true, styles = {} } = options;
  const finalStyles = { ...DEFAULT_STYLES, ...styles };

  return generateNode(ast, styled, finalStyles, 0);
}

/**
 * Generate HTML for a single node
 */
function generateNode(node, styled, styles, indent) {
  if (!node) return '';

  switch (node.type) {
    case NodeType.DOCUMENT:
      return generateDocument(node, styled, styles, indent);

    case NodeType.BOX:
      return generateBox(node, styled, styles, indent);

    case NodeType.CARD_GRID:
      return generateCardGrid(node, styled, styles, indent);

    case NodeType.SIDEBAR:
      return generateSidebar(node, styled, styles, indent);

    case NodeType.CONTAINER:
      return generateContainer(node, styled, styles, indent);

    case NodeType.TEXT:
      return generateText(node, indent);

    case NodeType.HEADING:
      return generateHeading(node, styled, styles, indent);

    case NodeType.PARAGRAPH:
      return generateParagraph(node, styled, styles, indent);

    case NodeType.LIST:
      return generateList(node, styled, styles, indent);

    case NodeType.LIST_ITEM:
      return generateListItem(node, indent);

    case NodeType.BUTTON:
      return generateButton(node, styled, styles);

    case NodeType.INPUT:
      return generateInput(node, styled, styles);

    case NodeType.TEXTAREA:
      return generateTextarea(node, styled, styles);

    case NodeType.CHECKBOX:
      return generateCheckbox(node);

    case NodeType.RADIO:
      return generateRadio(node);

    case NodeType.DROPDOWN:
      return generateDropdown(node, styled, styles);

    case NodeType.LINK:
      return generateLink(node, styled, styles);

    case NodeType.ICON:
      return generateIcon(node, styled, styles);

    case NodeType.INLINE_CONTENT:
      return generateInlineContent(node, styled, styles);

    default:
      return '';
  }
}

/**
 * Generate document
 */
function generateDocument(node, styled, styles, indent) {
  return node.children
    .map(child => generateNode(child, styled, styles, indent))
    .filter(html => html.length > 0)
    .join('\n');
}

/**
 * Generate box
 */
function generateBox(node, styled, styles, indent) {
  const spaces = '  '.repeat(indent);
  const styleAttr = styled ? ` style="border: 1px solid black;"` : '';

  if (node.hasHeader) {
    const headerStyleAttr = styled ? ` style="${styles.boxHeader}"` : '';
    const headerHtml = generateNode(node.header, styled, styles, indent + 1);
    const bodyHtml = generateNode(node.body, styled, styles, indent + 1);

    return `${spaces}<div${styleAttr}>
${spaces}  <div${headerStyleAttr}>
${spaces}    ${headerHtml}
${spaces}  </div>
${bodyHtml}
${spaces}</div>`;
  } else {
    const contentStyleAttr = styled ? ` style="${styles.box}"` : '';
    const contentHtml = generateNode(node.body, styled, styles, indent + 1);

    return `${spaces}<div${contentStyleAttr}>
${contentHtml}
${spaces}</div>`;
  }
}

/**
 * Generate card grid
 */
function generateCardGrid(node, styled, styles, indent) {
  const spaces = '  '.repeat(indent);
  const flexStyleAttr = styled ? ` style="${styles.flexContainer}"` : '';

  const cardsHtml = node.cards
    .map(card => {
      const cardHtml = generateNode(card, styled, styles, indent + 1);
      return cardHtml;
    })
    .join('\n');

  return `${spaces}<div${flexStyleAttr}>
${cardsHtml}
${spaces}</div>`;
}

/**
 * Generate sidebar
 */
function generateSidebar(node, styled, styles, indent) {
  const spaces = '  '.repeat(indent);
  const containerStyleAttr = styled ? ` style="${styles.sidebar}"` : '';
  const leftStyleAttr = styled ? ` style="${styles.sidebarLeft}"` : '';
  const rightStyleAttr = styled ? ` style="${styles.sidebarRight}"` : '';

  const leftHtml = generateNode(node.left, styled, styles, indent + 2);
  const rightHtml = generateNode(node.right, styled, styles, indent + 2);

  return `${spaces}<div${containerStyleAttr}>
${spaces}  <nav${leftStyleAttr}>
${spaces}    ${leftHtml}
${spaces}  </nav>

${spaces}  <main${rightStyleAttr}>
${spaces}    ${rightHtml}
${spaces}  </main>
${spaces}</div>`;
}

/**
 * Generate container
 */
function generateContainer(node, styled, styles, indent) {
  return node.children
    .map(child => generateNode(child, styled, styles, indent))
    .filter(html => html.length > 0)
    .join('\n    ');
}

/**
 * Generate text
 */
function generateText(node, indent) {
  return node.value;
}

/**
 * Generate heading
 */
function generateHeading(node, styled, styles, indent) {
  const tag = node.level === 1 ? 'h1' : 'h2';
  const styleKey = node.level === 1 ? 'h1' : 'h2';
  const styleAttr = styled ? ` style="${styles[styleKey]}"` : '';

  return `<${tag}${styleAttr}>${node.value}</${tag}>`;
}

/**
 * Generate paragraph
 */
function generateParagraph(node, styled, styles, indent) {
  const styleAttr = styled ? ` style="${styles.paragraph}"` : '';
  return `<p${styleAttr}>${node.content}</p>`;
}

/**
 * Generate list
 */
function generateList(node, styled, styles, indent) {
  const spaces = '  '.repeat(indent);
  const styleAttr = styled ? ` style="${styles.list}"` : '';

  const itemsHtml = node.items
    .map(item => generateNode(item, styled, styles, indent + 1))
    .join('\n');

  return `${spaces}<ul${styleAttr}>
${itemsHtml}
${spaces}</ul>`;
}

/**
 * Generate list item
 */
function generateListItem(node, indent) {
  const spaces = '  '.repeat(indent);
  return `${spaces}<li>${node.content}</li>`;
}

/**
 * Generate button
 */
function generateButton(node, styled, styles) {
  const styleAttr = styled ? ` style="${styles.button}"` : '';
  return `<button${styleAttr}>${node.label}</button>`;
}

/**
 * Generate input
 */
function generateInput(node, styled, styles) {
  const styleAttr = styled ? ` style="${styles.input}"` : '';
  const placeholder = node.placeholder ? ` placeholder="${node.placeholder}"` : '';
  return `<input type="text"${placeholder}${styleAttr}>`;
}

/**
 * Generate textarea
 */
function generateTextarea(node, styled, styles) {
  const styleAttr = styled ? ` style="${styles.input}"` : '';
  return `<textarea rows="${node.rows}"${styleAttr}></textarea>`;
}

/**
 * Generate checkbox
 */
function generateCheckbox(node) {
  const checked = node.checked ? ' checked' : '';
  return `<label><input type="checkbox"${checked}> ${node.label}</label>`;
}

/**
 * Generate radio
 */
function generateRadio(node) {
  const checked = node.selected ? ' checked' : '';
  return `<label><input type="radio" name="choice"${checked}> ${node.label}</label>`;
}

/**
 * Generate dropdown
 */
function generateDropdown(node, styled, styles) {
  const styleAttr = styled ? ` style="${styles.select}"` : '';
  const optionsHtml = node.options
    .map(opt => `  <option>${opt}</option>`)
    .join('\n');

  return `<select${styleAttr}>
${optionsHtml}
</select>`;
}

/**
 * Generate link
 */
function generateLink(node, styled, styles) {
  const styleAttr = styled ? ` style="${styles.link}"` : '';

  if (node.arrowPosition === 'before') {
    return `<a href="#"${styleAttr}>→ ${node.text}</a>`;
  } else {
    return `<a href="#"${styleAttr}>${node.text} →</a>`;
  }
}

/**
 * Generate icon
 */
function generateIcon(node, styled, styles) {
  const styleAttr = styled ? ` style="${styles.icon}"` : '';
  return `<span${styleAttr}>${node.symbol}</span>`;
}

/**
 * Generate inline content
 */
function generateInlineContent(node, styled, styles) {
  return node.children
    .map(child => generateNode(child, styled, styles, 0))
    .join('');
}
