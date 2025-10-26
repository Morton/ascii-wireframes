#!/usr/bin/env node

/**
 * ASCII Wireframe Validator
 *
 * Basic validation tool for checking ASCII wireframe syntax
 * Following principle: "Automatic Validation First"
 */

import { readFileSync } from 'fs';

class WireframeValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
  }

  /**
   * Validate a wireframe file
   */
  validate(content) {
    this.errors = [];
    this.warnings = [];

    this.checkBoxDrawingConsistency(content);
    this.checkBalancedBrackets(content);
    this.checkLineLength(content);

    return {
      valid: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings
    };
  }

  /**
   * Check if box-drawing characters are used consistently
   */
  checkBoxDrawingConsistency(content) {
    const lines = content.split('\n');
    const boxChars = ['┌', '┐', '└', '┘', '─', '│', '├', '┤', '┬', '┴', '┼'];

    lines.forEach((line, idx) => {
      // Check for mixing ASCII and box-drawing characters in borders
      if (line.includes('|') && boxChars.some(char => line.includes(char))) {
        this.warnings.push({
          line: idx + 1,
          message: 'Mixing ASCII pipe "|" with box-drawing characters. Consider using "│" for consistency.'
        });
      }

      if (line.includes('-') && line.includes('─')) {
        const dashCount = (line.match(/-/g) || []).length;
        const boxDashCount = (line.match(/─/g) || []).length;
        if (dashCount > 2 && boxDashCount > 2) {
          this.warnings.push({
            line: idx + 1,
            message: 'Mixing ASCII dash "-" with box-drawing "─". Consider consistency.'
          });
        }
      }
    });
  }

  /**
   * Check if brackets are balanced
   */
  checkBalancedBrackets(content) {
    const lines = content.split('\n');

    lines.forEach((line, idx) => {
      const squareOpen = (line.match(/\[/g) || []).length;
      const squareClose = (line.match(/\]/g) || []).length;

      if (squareOpen !== squareClose) {
        this.warnings.push({
          line: idx + 1,
          message: `Unbalanced square brackets: ${squareOpen} open, ${squareClose} close`
        });
      }
    });
  }

  /**
   * Check line length for readability
   */
  checkLineLength(content) {
    const lines = content.split('\n');
    const maxRecommended = 120;

    lines.forEach((line, idx) => {
      if (line.length > maxRecommended) {
        this.warnings.push({
          line: idx + 1,
          message: `Line length ${line.length} exceeds recommended ${maxRecommended} characters`
        });
      }
    });
  }
}

export { WireframeValidator };

// CLI interface - only run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  if (process.argv[2]) {
    const filePath = process.argv[2];

    try {
      const content = readFileSync(filePath, 'utf-8');
      const validator = new WireframeValidator();
      const result = validator.validate(content);

      console.log(`\nValidating: ${filePath}\n`);

      if (result.errors.length > 0) {
        console.log('❌ ERRORS:');
        result.errors.forEach(err => {
          console.log(`  Line ${err.line}: ${err.message}`);
        });
      }

      if (result.warnings.length > 0) {
        console.log('\n⚠️  WARNINGS:');
        result.warnings.forEach(warn => {
          console.log(`  Line ${warn.line}: ${warn.message}`);
        });
      }

      if (result.valid && result.warnings.length === 0) {
        console.log('✅ No issues found!\n');
      } else if (result.valid) {
        console.log('\n✅ Valid (with warnings)\n');
      } else {
        console.log('\n❌ Validation failed\n');
        process.exit(1);
      }

    } catch (error) {
      console.error(`Error reading file: ${error.message}`);
      process.exit(1);
    }
  } else {
    console.log('Usage: node index.js <wireframe-file>');
    console.log('Example: node index.js ../../examples/01-login-form.txt');
  }
}
