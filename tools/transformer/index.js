/**
 * ASCII Wireframe to HTML Transformer
 *
 * Transpiler architecture:
 * Input → Lexer → Parser → AST → HTML Generator → HTML Output
 */

import { lex } from './lexer.js';
import { parse } from './parser.js';
import { generate } from './html-generator.js';

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
  if (!input || input.trim() === '') {
    return '';
  }

  // Phase 1: Lexical analysis (tokenization)
  const tokens = lex(input);

  // Phase 2: Syntax analysis (parsing to AST)
  const ast = parse(tokens);

  // Phase 3: Code generation (AST to HTML)
  const html = generate(ast, options);

  return html.trim();
}

/**
 * Export helper functions for debugging
 */
export { lex } from './lexer.js';
export { parse } from './parser.js';
export { generate } from './html-generator.js';
