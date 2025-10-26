/**
 * AST Node Types
 *
 * Defines the structure of the Abstract Syntax Tree
 */

export const NodeType = {
  // Root
  DOCUMENT: 'Document',

  // Structural containers
  BOX: 'Box',
  CONTAINER: 'Container',

  // Content nodes
  TEXT: 'Text',
  HEADING: 'Heading',
  PARAGRAPH: 'Paragraph',
  LIST: 'List',
  LIST_ITEM: 'ListItem',

  // Interactive elements
  BUTTON: 'Button',
  INPUT: 'Input',
  TEXTAREA: 'Textarea',
  CHECKBOX: 'Checkbox',
  RADIO: 'Radio',
  DROPDOWN: 'Dropdown',
  LINK: 'Link',
  ICON: 'Icon',

  // Special
  INLINE_CONTENT: 'InlineContent',
};

/**
 * Create AST node
 */
export function createNode(type, properties = {}) {
  return {
    type,
    ...properties,
  };
}

/**
 * Create Document node (root)
 */
export function createDocument(children = []) {
  return createNode(NodeType.DOCUMENT, { children });
}

/**
 * Create Box node
 */
export function createBox(properties) {
  return createNode(NodeType.BOX, {
    hasHeader: false,
    header: null,
    body: null,
    ...properties,
  });
}

/**
 * Create Container node
 */
export function createContainer(children = []) {
  return createNode(NodeType.CONTAINER, { children });
}

/**
 * Create Text node
 */
export function createText(value) {
  return createNode(NodeType.TEXT, { value });
}

/**
 * Create Heading node
 */
export function createHeading(level, value) {
  return createNode(NodeType.HEADING, { level, value });
}

/**
 * Create Paragraph node
 */
export function createParagraph(content) {
  return createNode(NodeType.PARAGRAPH, { content });
}

/**
 * Create List node
 */
export function createList(items = []) {
  return createNode(NodeType.LIST, { items });
}

/**
 * Create ListItem node
 */
export function createListItem(content) {
  return createNode(NodeType.LIST_ITEM, { content });
}

/**
 * Create Button node
 */
export function createButton(label) {
  return createNode(NodeType.BUTTON, { label });
}

/**
 * Create Input node
 */
export function createInput(placeholder = null) {
  return createNode(NodeType.INPUT, { placeholder });
}

/**
 * Create Textarea node
 */
export function createTextarea(rows) {
  return createNode(NodeType.TEXTAREA, { rows });
}

/**
 * Create Checkbox node
 */
export function createCheckbox(label, checked = false) {
  return createNode(NodeType.CHECKBOX, { label, checked });
}

/**
 * Create Radio node
 */
export function createRadio(label, selected = false) {
  return createNode(NodeType.RADIO, { label, selected });
}

/**
 * Create Dropdown node
 */
export function createDropdown(options) {
  return createNode(NodeType.DROPDOWN, { options });
}

/**
 * Create Link node
 */
export function createLink(text, arrowPosition = 'before') {
  return createNode(NodeType.LINK, { text, arrowPosition });
}

/**
 * Create Icon node
 */
export function createIcon(symbol) {
  return createNode(NodeType.ICON, { symbol });
}

/**
 * Create InlineContent node (mixed content on same line)
 */
export function createInlineContent(children = []) {
  return createNode(NodeType.INLINE_CONTENT, { children });
}
