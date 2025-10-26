#!/usr/bin/env node

/**
 * Update documentation with actual transformer output
 *
 * This script:
 * 1. Finds all ASCII wireframe examples in markdown files
 * 2. Runs them through the transformer
 * 3. Replaces HTML Preview and HTML Code sections with actual output
 */

import { readFileSync, writeFileSync } from 'fs';
import { transform } from './index.js';

/**
 * Update a single markdown file with transformer output
 */
function updateMarkdownFile(filePath) {
  console.log(`\nProcessing: ${filePath}`);

  const content = readFileSync(filePath, 'utf-8');
  let updatedContent = content;
  let updateCount = 0;

  // Pattern to match the complete tab structure:
  // #### **ASCII Wireframe**
  // ```
  // [ascii content]
  // ```
  // #### **HTML Preview**
  // [html content]
  // #### **HTML Code**
  // ```html
  // [html code]
  // ```

  const tabPattern = /#### \*\*ASCII Wireframe\*\*\n\n```\n([\s\S]*?)\n```\n\n#### \*\*HTML Preview\*\*\n\n([\s\S]*?)\n\n#### \*\*HTML Code\*\*\n\n```html\n([\s\S]*?)\n```/g;

  updatedContent = updatedContent.replace(tabPattern, (match, asciiContent, htmlPreview, htmlCode) => {
    updateCount++;

    // Transform the ASCII wireframe
    const transformedHtml = transform(asciiContent.trim());

    // Create the new sections
    const newHtmlPreview = transformedHtml;
    const newHtmlCode = transformedHtml;

    console.log(`  ✓ Updated wireframe #${updateCount}`);

    // Return the updated tab structure
    return `#### **ASCII Wireframe**

\`\`\`
${asciiContent}
\`\`\`

#### **HTML Preview**

${newHtmlPreview}

#### **HTML Code**

\`\`\`html
${newHtmlCode}
\`\`\``;
  });

  if (updateCount > 0) {
    writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`  ✓ Saved ${filePath} (${updateCount} wireframes updated)`);
  } else {
    console.log(`  ⚠ No wireframes found in ${filePath}`);
  }

  return updateCount;
}

/**
 * Main execution
 */
function main() {
  const files = process.argv.slice(2);

  if (files.length === 0) {
    console.error('Usage: node update-docs.js <file1.md> [file2.md ...]');
    process.exit(1);
  }

  let totalUpdates = 0;

  for (const file of files) {
    try {
      totalUpdates += updateMarkdownFile(file);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n✓ Complete! Updated ${totalUpdates} wireframes across ${files.length} files.`);
}

main();
