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
  boxHeader: 'padding: 8px; border-bottom: 1px solid black;',
  boxContent: 'padding: 8px; display: flex; gap: 8px;',
  button: 'border: 1px solid black; padding: 4px 12px; background: white;',
  input: 'border: 1px solid black; padding: 4px;',
  select: 'border: 1px solid black; padding: 4px;',
  link: 'color: black; text-decoration: underline;',
  header: 'border: 1px solid black; padding: 12px; display: flex; justify-content: space-between; align-items: center;',
  form: 'border: 1px solid black;',
  flexContainer: 'display: flex; gap: 8px;',
  list: 'list-style: disc; padding-left: 20px;',
  h1: 'font-size: 2em; font-weight: bold; margin: 0.67em 0;',
  h2: 'font-size: 1.5em; font-weight: bold; margin: 0.75em 0;',
  paragraph: 'margin: 1em 0;',
  icon: 'border: 1px solid black; padding: 2px 6px;',
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

  // Detect and transform patterns
  let html = transformPatterns(lines, styled, finalStyles);

  return html.trim();
}

/**
 * Transform detected patterns into HTML
 */
function transformPatterns(lines, styled, styles) {
  // Check if this is a box structure
  if (isBox(lines)) {
    return transformBoxStructure(lines, styled, styles);
  }

  // Check if it's a list
  if (lines.some(line => line.trim().startsWith('-'))) {
    const listStartIdx = lines.findIndex(line => line.trim().startsWith('-'));
    const beforeList = lines.slice(0, listStartIdx);
    const listLines = [];
    let i = listStartIdx;
    while (i < lines.length && lines[i].trim().startsWith('-')) {
      listLines.push(lines[i]);
      i++;
    }
    const afterList = lines.slice(i);

    let html = '';
    if (beforeList.length > 0) {
      html += transformPatterns(beforeList, styled, styles) + '\n';
    }
    html += transformList(listLines, styled);
    if (afterList.length > 0) {
      html += '\n' + transformPatterns(afterList, styled, styles);
    }
    return html;
  }

  // Transform line by line for inline patterns
  return lines
    .map(line => transformLine(line.trim(), styled, styles))
    .filter(line => line.length > 0)
    .join('\n');
}

/**
 * Transform a single line
 */
function transformLine(line, styled, styles) {
  if (!line) return '';

  // Check for headings first
  if (line.startsWith('#')) {
    return transformHeading(line, styled, styles);
  }

  // Check for buttons (but not checkboxes or inputs)
  // Buttons are [ Text ] where Text doesn't contain underscores or is not a single space/x
  if (line.includes('[') && line.includes(']')) {
    // Check if it's a checkbox pattern
    if (/\[\s*\]/.test(line) || /\[x\]/i.test(line)) {
      return transformCheckbox(line);
    }

    // Check if it's a radio pattern
    if (/\(\s*\)/.test(line) || /\(•\)/.test(line)) {
      return transformRadio(line);
    }

    // Check if it contains input fields (underscores)
    if (/\[_{4,}\]/.test(line)) {
      return transformInput(line, styled, styles);
    }

    // Check for dropdown pattern (contains ▾)
    if (line.includes('▾')) {
      return transformDropdown(line, styled, styles);
    }

    // Check for icon pattern (single emoji/symbol in brackets)
    if (/\[[🔍≡⚙]\]/.test(line)) {
      return transformIcons(line, styled, styles);
    }

    // Otherwise treat as buttons or placeholders
    let result = line;

    // Check for placeholders with ...
    if (/\[\s*[^_\]]+?\.\.\.[^\]]*\]/.test(line)) {
      result = transformInputPlaceholder(result, styled, styles);
    } else {
      // Transform as buttons
      result = transformButton(result, styled, styles);
    }

    return result;
  }

  // Check for links (arrows)
  if (line.includes('→')) {
    return transformLink(line, styled, styles);
  }

  // Check for radio buttons
  if (line.includes('(') && (line.includes('( )') || line.includes('(•)'))) {
    return transformRadio(line);
  }

  // Regular text becomes paragraph
  if (line.length > 0) {
    const styleAttr = styled ? ` style="${styles.paragraph}"` : '';
    return `<p${styleAttr}>${line}</p>`;
  }

  return '';
}

/**
 * Transform a box structure to HTML
 */
function transformBoxStructure(lines, styled, styles) {
  if (lines.length < 3) return '';

  // Check if there's a horizontal divider (├─┤)
  const dividerIdx = lines.findIndex(line => line.includes('├') && line.includes('┤'));

  if (dividerIdx > 0) {
    // Box with header
    const headerLines = lines.slice(1, dividerIdx);
    const contentLines = lines.slice(dividerIdx + 1, -1);

    const headerContent = headerLines
      .map(line => cleanBoxLine(line))
      .filter(line => line.length > 0)
      .join(' ');

    const bodyContent = transformBoxContent(contentLines, styled, styles);

    const headerStyleAttr = styled ? ` style="${styles.boxHeader}"` : '';
    const boxStyleAttr = styled ? ` style="border: 1px solid black;"` : '';

    // Check if header looks like navigation
    if (headerContent.includes('Logo') || headerContent.includes('Home') ||
        (headerContent.split(/\s+/).length > 3)) {
      return `<header${boxStyleAttr}>
  <div${headerStyleAttr}>
    ${transformLine(headerContent, styled, styles)}
  </div>
  ${bodyContent}
</header>`.trim();
    }

    // Check if it's a form (contains "Form" in header)
    if (headerContent.includes('Form')) {
      const formStyleAttr = styled ? ` style="${styles.form}"` : '';
      return `<form${formStyleAttr}>
  <div${headerStyleAttr}>
    <strong>${headerContent}</strong>
  </div>
  <div style="padding: 16px;">
    ${bodyContent}
  </div>
</form>`.trim();
    }

    return `<div${boxStyleAttr}>
  <div${headerStyleAttr}>
    ${headerContent}
  </div>
  ${bodyContent}
</div>`.trim();
  }

  // Simple box without divider
  const contentLines = lines.slice(1, -1);
  const content = transformBoxContent(contentLines, styled, styles);

  const styleAttr = styled ? ` style="${styles.box}"` : '';
  return `<div${styleAttr}>
  ${content}
</div>`.trim();
}

/**
 * Transform content within a box
 */
function transformBoxContent(lines, styled, styles) {
  const cleanedLines = lines.map(line => cleanBoxLine(line));

  // Check if there are nested boxes
  const hasNestedBoxes = cleanedLines.some(line => line.includes('┌') || line.includes('└'));

  if (hasNestedBoxes) {
    return transformNestedBoxes(lines, styled, styles);
  }

  // Check if there's a vertical divider (sidebar pattern)
  const hasSidebar = lines.some(line => line.includes('│') && line.split('│').length > 3);

  if (hasSidebar) {
    return transformSidebarLayout(lines, styled, styles);
  }

  // Transform each line
  return cleanedLines
    .map(line => transformLine(line, styled, styles))
    .filter(line => line.length > 0)
    .join('\n    ');
}

/**
 * Transform nested boxes (card grids)
 */
function transformNestedBoxes(lines, styled, styles) {
  const cleanedLines = lines.map(line => cleanBoxLine(line));
  const text = cleanedLines.join('\n');

  // Detect multiple boxes side by side (card grid)
  const boxCount = (text.match(/┌/g) || []).length;

  if (boxCount >= 2) {
    // It's a card grid
    const flexStyleAttr = styled ? ` style="${styles.flexContainer}"` : '';
    const cardStyleAttr = styled ? ` style="border: 1px solid black; padding: 16px; flex: 1;"` : '';

    // Extract card content (simplified)
    const cards = [];
    let currentCard = [];

    for (const line of cleanedLines) {
      if (line.includes('┌')) {
        if (currentCard.length > 0) {
          cards.push(currentCard);
        }
        currentCard = [];
      } else if (line.includes('└')) {
        cards.push(currentCard);
        currentCard = [];
      } else if (currentCard.length >= 0) {
        currentCard.push(line);
      }
    }

    const cardHtml = cards.map(cardLines => {
      const content = cardLines
        .filter(l => l.length > 0)
        .map(l => transformLine(l, styled, styles))
        .join('\n      ');
      return `  <div${cardStyleAttr}>
      ${content}
  </div>`;
    }).join('\n');

    return `<div${flexStyleAttr}>
${cardHtml}
</div>`;
  }

  // Single nested box
  const nestedContent = cleanedLines
    .map(line => transformLine(line, styled, styles))
    .filter(line => line.length > 0)
    .join('\n      ');

  const nestedStyleAttr = styled ? ` style="border: 1px solid black; padding: 16px; margin-top: 16px;"` : '';

  return `<div${nestedStyleAttr}>
      ${nestedContent}
    </div>`;
}

/**
 * Transform sidebar layout (with vertical divider)
 */
function transformSidebarLayout(lines, styled, styles) {
  const cleanedLines = lines.map(line => cleanBoxLine(line));

  // Split by the middle divider
  const parts = cleanedLines.map(line => {
    const sections = line.split(/\s*│\s*/);
    return {
      left: sections[0] || '',
      right: sections[1] || '',
    };
  });

  const leftContent = parts
    .map(p => p.left)
    .filter(l => l.length > 0)
    .map(l => transformLine(l, styled, styles))
    .join('\n    ');

  const rightContent = parts
    .map(p => p.right)
    .filter(r => r.length > 0)
    .map(r => transformLine(r, styled, styles))
    .join('\n    ');

  const navStyleAttr = styled ? ` style="border-right: 1px solid black; padding: 16px; min-width: 120px;"` : '';
  const mainStyleAttr = styled ? ` style="padding: 16px; flex: 1;"` : '';
  const flexStyleAttr = styled ? ` style="display: flex; border: 1px solid black;"` : '';

  return `<div${flexStyleAttr}>
  <nav${navStyleAttr}>
    ${leftContent}
  </nav>

  <main${mainStyleAttr}>
    ${rightContent}
  </main>
</div>`;
}

/**
 * Clean box line by removing box drawing characters
 */
function cleanBoxLine(line) {
  return line.replace(/^[│├┤]\s*/, '').replace(/\s*[│├┤]$/, '').trim();
}

/**
 * Detect if lines form a box structure
 */
function isBox(lines) {
  if (lines.length < 3) return false;

  const firstLine = lines[0];
  const lastLine = lines[lines.length - 1];

  return firstLine.includes('┌') && lastLine.includes('└');
}

/**
 * Transform button pattern [ Text ] to HTML
 */
function transformButton(text, styled, styles) {
  // Match buttons but avoid matching checkboxes and specific patterns
  const buttonRegex = /\[\s*([^\]_]+?)\s*\]/g;

  return text.replace(buttonRegex, (match, label) => {
    const trimmed = label.trim();

    // Skip if it's empty or just whitespace
    if (!trimmed) return match;

    // Skip if it's an icon or single character
    if (/^[🔍≡⚙]$/.test(trimmed)) {
      const styleAttr = styled ? ` style="${styles.icon}"` : '';
      return `<span${styleAttr}>${trimmed}</span>`;
    }

    const styleAttr = styled ? ` style="${styles.button}"` : '';
    return `<button${styleAttr}>${trimmed}</button>`;
  });
}

/**
 * Transform input field pattern
 */
function transformInput(text, styled, styles) {
  const inputRegex = /\[_{4,}\]/g; // Matches [____] with 4+ underscores

  const styleAttr = styled ? ` style="${styles.input}"` : '';

  // Handle underscores (empty inputs)
  text = text.replace(inputRegex, `<input type="text"${styleAttr}>`);

  return text;
}

/**
 * Transform input with placeholder
 */
function transformInputPlaceholder(text, styled, styles) {
  const placeholderRegex = /\[\s*([^_\]]+?\.\.\.[^\]]*?)\s*\]/g;

  const styleAttr = styled ? ` style="${styles.input}"` : '';

  return text.replace(placeholderRegex, (match, placeholder) => {
    return `<input type="text" placeholder="${placeholder.trim()}"${styleAttr}>`;
  });
}

/**
 * Transform checkbox pattern
 */
function transformCheckbox(text) {
  // [x] for checked (case insensitive)
  text = text.replace(/\[x\]\s*([^\n]+)/gi, (match, label) => {
    return `<label><input type="checkbox" checked> ${label.trim()}</label>`;
  });

  // [ ] for unchecked
  text = text.replace(/\[\s*\]\s*([^\n]+)/g, (match, label) => {
    return `<label><input type="checkbox"> ${label.trim()}</label>`;
  });

  return text;
}

/**
 * Transform radio button pattern
 */
function transformRadio(text) {
  // (•) for selected
  text = text.replace(/\(•\)\s*([^\n]+)/g, (match, label) => {
    return `<label><input type="radio" name="choice" checked> ${label.trim()}</label>`;
  });

  // ( ) for unselected
  text = text.replace(/\(\s*\)\s*([^\n]+)/g, (match, label) => {
    return `<label><input type="radio" name="choice"> ${label.trim()}</label>`;
  });

  return text;
}

/**
 * Transform dropdown pattern
 */
function transformDropdown(text, styled, styles) {
  const dropdownRegex = /\[\s*([^\]]+?)\s*▾\s*\]/g;

  const styleAttr = styled ? ` style="${styles.select}"` : '';

  return text.replace(dropdownRegex, (match, optionText) => {
    return `<select${styleAttr}>
  <option>${optionText.trim()}</option>
</select>`;
  });
}

/**
 * Transform icon pattern
 */
function transformIcons(text, styled, styles) {
  const iconRegex = /\[([🔍≡⚙])\]/g;

  const styleAttr = styled ? ` style="${styles.icon}"` : '';

  return text.replace(iconRegex, (match, icon) => {
    return `<span${styleAttr}>${icon}</span>`;
  });
}

/**
 * Transform link pattern
 */
function transformLink(text, styled, styles) {
  const styleAttr = styled ? ` style="${styles.link}"` : '';

  // Match → followed by text (arrow first)
  text = text.replace(/→\s*([^\n]+?)(?=\s*$|<)/g, (match, linkText) => {
    return `<a href="#"${styleAttr}>→ ${linkText.trim()}</a>`;
  });

  // Match text followed by → (arrow last)
  text = text.replace(/([^\n>]+?)\s*→/g, (match, linkText) => {
    // Avoid double-transforming
    if (linkText.includes('<a')) return match;
    return `<a href="#"${styleAttr}>${linkText.trim()} →</a>`;
  });

  return text;
}

/**
 * Transform list pattern
 */
function transformList(lines, styled) {
  const listItems = [];

  for (const line of lines) {
    if (line.trim().startsWith('-')) {
      const content = line.trim().substring(1).trim();
      listItems.push(`  <li>${content}</li>`);
    }
  }

  if (listItems.length === 0) return '';

  const styleAttr = styled ? ` style="${DEFAULT_STYLES.list}"` : '';

  return `<ul${styleAttr}>
${listItems.join('\n')}
</ul>`;
}

/**
 * Transform heading pattern
 */
function transformHeading(text, styled, styles) {
  // ## Medium heading -> h2
  if (text.startsWith('##')) {
    const heading = text.substring(2).trim();
    const styleAttr = styled ? ` style="${styles.h2}"` : '';
    return `<h2${styleAttr}>${heading}</h2>`;
  }

  // # Large heading -> h1
  if (text.startsWith('#')) {
    const heading = text.substring(1).trim();
    const styleAttr = styled ? ` style="${styles.h1}"` : '';
    return `<h1${styleAttr}>${heading}</h1>`;
  }

  return text;
}

/**
 * Extract content from within box borders
 */
export function extractBoxContent(lines) {
  if (lines.length < 3) return '';

  // Skip first and last lines (borders)
  const contentLines = lines.slice(1, -1);

  return contentLines
    .map(line => cleanBoxLine(line))
    .filter(line => line.length > 0)
    .join('\n  ');
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
  isBox,
};
