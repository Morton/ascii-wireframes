/**
 * ASCII Wireframe to HTML Transformer
 *
 * Transforms ASCII wireframes into HTML code based on the ASCII Wireframes specification.
 */

/**
 * Default styles for HTML elements
 */
const DEFAULT_STYLES = {
  box: 'border: 1px solid black; padding: 8px;',
  button: 'border: 1px solid black; padding: 4px 12px; background: white;',
  input: 'border: 1px solid black; padding: 4px;',
  select: 'border: 1px solid black; padding: 4px;',
  link: 'color: black; text-decoration: underline;',
  header: 'padding: 12px; display: flex; justify-content: space-between; align-items: center;',
  form: 'border: 1px solid black;',
  flexContainer: 'display: flex; gap: 8px;',
};

/**
 * Transform ASCII wireframe to HTML
 *
 * @param {string} input - ASCII wireframe text
 * @param {Object} options - Transformation options
 * @param {boolean} options.styled - Whether to include inline styles (default: true)
 * @param {Object} options.styles - Custom style overrides
 * @returns {string} HTML output
 */
export function transform(input, options = {}) {
  const { styled = true, styles = {} } = options;

  if (!input || input.trim() === '') {
    return '';
  }

  // Merge custom styles with defaults
  const finalStyles = { ...DEFAULT_STYLES, ...styles };

  // Parse the input
  const lines = input.split('\n');

  // TODO: Implement full transformation logic
  // For now, this is a basic skeleton that will be expanded

  let html = '';

  // Detect and transform different patterns
  html = transformPatterns(lines, styled, finalStyles);

  return html;
}

/**
 * Transform detected patterns into HTML
 */
function transformPatterns(lines, styled, styles) {
  let html = '';

  // TODO: Implement pattern detection and transformation
  // This will be expanded to handle:
  // 1. Box drawing
  // 2. Interactive elements
  // 3. Lists and grids
  // 4. Text hierarchy
  // 5. Layouts
  // 6. Common patterns

  return html;
}

/**
 * Detect if lines form a box structure
 */
function isBox(lines) {
  if (lines.length < 3) return false;

  const firstLine = lines[0];
  const lastLine = lines[lines.length - 1];

  return firstLine.startsWith('┌') && lastLine.startsWith('└');
}

/**
 * Transform a box structure to HTML
 */
function transformBox(lines, styled, styles) {
  // Extract content from box
  const content = extractBoxContent(lines);

  const styleAttr = styled ? ` style="${styles.box}"` : '';

  return `<div${styleAttr}>
  ${content}
</div>`;
}

/**
 * Extract content from within box borders
 */
function extractBoxContent(lines) {
  if (lines.length < 3) return '';

  // Skip first and last lines (borders)
  const contentLines = lines.slice(1, -1);

  return contentLines
    .map(line => {
      // Remove box characters (│) and trim
      return line.replace(/^│\s*/, '').replace(/\s*│$/, '').trim();
    })
    .filter(line => line.length > 0)
    .join('\n  ');
}

/**
 * Transform button pattern [ Text ] to HTML
 */
function transformButton(text, styled, styles) {
  const buttonRegex = /\[\s*([^\]]+?)\s*\]/g;

  return text.replace(buttonRegex, (match, label) => {
    const styleAttr = styled ? ` style="${styles.button}"` : '';
    return `<button${styleAttr}>${label.trim()}</button>`;
  });
}

/**
 * Transform input field pattern
 */
function transformInput(text, styled, styles) {
  const inputRegex = /\[_{4,}\]/g; // Matches [____] with 4+ underscores
  const placeholderRegex = /\[\s*([^_\]]+?)\s*\]/g; // Matches [ text... ]

  const styleAttr = styled ? ` style="${styles.input}"` : '';

  // First handle underscores (empty inputs)
  text = text.replace(inputRegex, `<input type="text"${styleAttr}>`);

  // Then handle placeholders
  text = text.replace(placeholderRegex, (match, placeholder) => {
    if (placeholder.includes('...')) {
      return `<input type="text" placeholder="${placeholder.trim()}"${styleAttr}>`;
    }
    return match; // Not an input, leave as is
  });

  return text;
}

/**
 * Transform checkbox pattern
 */
function transformCheckbox(text) {
  // [ ] for unchecked
  text = text.replace(/\[\s*\]\s*([^\n]+)/g, (match, label) => {
    return `<label><input type="checkbox"> ${label.trim()}</label>`;
  });

  // [x] for checked
  text = text.replace(/\[x\]\s*([^\n]+)/gi, (match, label) => {
    return `<label><input type="checkbox" checked> ${label.trim()}</label>`;
  });

  return text;
}

/**
 * Transform radio button pattern
 */
function transformRadio(text) {
  // ( ) for unselected
  text = text.replace(/\(\s*\)\s*([^\n]+)/g, (match, label) => {
    return `<label><input type="radio" name="choice"> ${label.trim()}</label>`;
  });

  // (•) for selected
  text = text.replace(/\(•\)\s*([^\n]+)/g, (match, label) => {
    return `<label><input type="radio" name="choice" checked> ${label.trim()}</label>`;
  });

  return text;
}

/**
 * Transform link pattern
 */
function transformLink(text, styled, styles) {
  const linkRegex = /→\s*([^\n]+)|([^\n]+?)\s*→/g;

  const styleAttr = styled ? ` style="${styles.link}"` : '';

  return text.replace(linkRegex, (match, afterArrow, beforeArrow) => {
    const linkText = afterArrow || beforeArrow;
    if (afterArrow) {
      return `<a href="#"${styleAttr}>→ ${linkText.trim()}</a>`;
    } else {
      return `<a href="#"${styleAttr}>${linkText.trim()} →</a>`;
    }
  });
}

/**
 * Transform list pattern
 */
function transformList(lines) {
  const listItems = [];
  let inList = false;

  for (const line of lines) {
    if (line.trim().startsWith('-')) {
      inList = true;
      const content = line.trim().substring(1).trim();
      listItems.push(`  <li>${content}</li>`);
    } else if (inList) {
      break;
    }
  }

  if (listItems.length === 0) return '';

  return `<ul style="list-style: disc; padding-left: 20px;">
${listItems.join('\n')}
</ul>`;
}

/**
 * Transform heading pattern
 */
function transformHeading(text, styled) {
  // # Large heading -> h1
  text = text.replace(/^#\s+(.+)$/gm, (match, heading) => {
    const styleAttr = styled ? ' style="font-size: 2em; font-weight: bold; margin: 0.67em 0;"' : '';
    return `<h1${styleAttr}>${heading.trim()}</h1>`;
  });

  // ## Medium heading -> h2
  text = text.replace(/^##\s+(.+)$/gm, (match, heading) => {
    const styleAttr = styled ? ' style="font-size: 1.5em; font-weight: bold; margin: 0.75em 0;"' : '';
    return `<h2${styleAttr}>${heading.trim()}</h2>`;
  });

  return text;
}

// Export helper functions for testing
export {
  transformButton,
  transformInput,
  transformCheckbox,
  transformRadio,
  transformLink,
  transformList,
  transformHeading,
  transformBox,
  extractBoxContent,
  isBox,
};
