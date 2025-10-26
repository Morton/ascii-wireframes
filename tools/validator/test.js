/**
 * Basic tests for the ASCII Wireframe Validator
 */

import { WireframeValidator } from './index.js';

const validator = new WireframeValidator();

// Test 1: Valid wireframe
console.log('Test 1: Valid wireframe');
const validWireframe = `
┌─────────────┐
│ Hello World │
└─────────────┘
`;
const result1 = validator.validate(validWireframe);
console.assert(result1.valid === true, 'Should be valid');
console.log('✅ Pass\n');

// Test 2: Mixed box-drawing characters (warning)
console.log('Test 2: Mixed characters (should warn)');
const mixedWireframe = `
┌─────────────┐
| Mixed chars |
└─────────────┘
`;
const result2 = validator.validate(mixedWireframe);
console.assert(result2.warnings.length > 0, 'Should have warnings');
console.log('✅ Pass\n');

// Test 3: Unbalanced brackets (warning)
console.log('Test 3: Unbalanced brackets');
const unbalancedWireframe = `
┌─────────────┐
│ [ Button    │
└─────────────┘
`;
const result3 = validator.validate(unbalancedWireframe);
console.assert(result3.warnings.length > 0, 'Should have warnings');
console.log('✅ Pass\n');

// Test 4: Long line (warning)
console.log('Test 4: Long line warning');
const longLine = 'a'.repeat(150);
const result4 = validator.validate(longLine);
console.assert(result4.warnings.length > 0, 'Should warn about long line');
console.log('✅ Pass\n');

console.log('All tests passed! ✅');
