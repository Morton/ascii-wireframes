/**
 * Spec Examples Validation Test
 *
 * Validates that all ASCII wireframe examples in the specification
 * can be successfully transformed to HTML.
 *
 * This ensures "truth in documentation" - spec examples actually work.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'fs';
import { transform } from './index.js';

/**
 * Extract wireframes from markdown spec file
 */
function extractWireframesFromSpec(content) {
  const wireframes = [];

  // Pattern to match ASCII wireframe code blocks in tabs
  const pattern = /#### \*\*ASCII Wireframe\*\*\n\n```\n([\s\S]*?)\n```/g;

  let match;
  let index = 0;
  while ((match = pattern.exec(content)) !== null) {
    const ascii = match[1];
    wireframes.push({
      index: ++index,
      ascii: ascii,
      // Try to extract section name for better error messages
      section: extractSectionName(content, match.index)
    });
  }

  return wireframes;
}

/**
 * Extract section name from context
 */
function extractSectionName(content, matchIndex) {
  // Look backward for the nearest heading
  const before = content.substring(0, matchIndex);
  const headingMatch = before.match(/###?\s+([^\n]+)\n[^#]*$/);
  return headingMatch ? headingMatch[1] : 'Unknown';
}

/**
 * Load spec content
 */
const specPath = '../../spec/v0.1-draft.md';
const specContent = readFileSync(specPath, 'utf-8');
const wireframes = extractWireframesFromSpec(specContent);

console.log(`\nFound ${wireframes.length} wireframe examples in spec\n`);

describe('Spec Examples Validation', () => {
  it('should have wireframe examples in spec', () => {
    assert.ok(wireframes.length > 0, 'Spec should contain wireframe examples');
  });

  wireframes.forEach((wf) => {
    it(`should transform spec example #${wf.index} (${wf.section})`, () => {
      const result = transform(wf.ascii);

      // Basic validation: should produce HTML output
      assert.ok(result, 'Should produce output');
      assert.ok(result.length > 0, 'Output should not be empty');

      // Should contain valid HTML tags
      assert.ok(
        result.includes('<') && result.includes('>'),
        'Output should contain HTML tags'
      );

      // Should not throw errors or produce error messages
      assert.ok(
        !result.includes('error') && !result.includes('Error'),
        'Output should not contain error messages'
      );
    });
  });
});
