# Transformer Architecture

## Overview

The ASCII Wireframe transformer has been refactored to use a proper transpiler architecture with clean separation of concerns.

## Architecture Phases

```
Input String
    ↓
┌─────────────┐
│   LEXER     │  Tokenization
│  (lexer.js) │  Character stream → Tokens
└─────────────┘
    ↓
┌─────────────┐
│   PARSER    │  Syntax Analysis
│ (parser.js) │  Tokens → AST
└─────────────┘
    ↓
┌──────────────────┐
│  HTML GENERATOR  │  Code Generation
│ (html-generator  │  AST → HTML
│     .js)         │
└──────────────────┘
    ↓
HTML String
```

## Files

- **index.js** - Main entry point, wires together all phases
- **lexer.js** - Tokenizes input into meaningful symbols
- **ast.js** - AST node type definitions and factory functions
- **parser.js** - Parses tokens into Abstract Syntax Tree
- **html-generator.js** - Generates HTML from AST
- **index.old.js** - Backup of previous implementation

## Token Types

Box drawing: `BOX_TOP_LEFT`, `BOX_HORIZONTAL`, `BOX_VERTICAL`, etc.
Interactive: `BRACKET_OPEN`, `BRACKET_CLOSE`, `ARROW`, `DROPDOWN_MARKER`
Text: `TEXT`, `WHITESPACE`, `NEWLINE`
Markers: `HASH`, `DASH`, `UNDERSCORE`

## AST Node Types

Structural: `Document`, `Box`, `CardGrid`, `Sidebar`, `Container`
Content: `Text`, `Heading`, `Paragraph`, `List`, `ListItem`
Interactive: `Button`, `Input`, `Textarea`, `Checkbox`, `Radio`, `Dropdown`, `Link`, `Icon`

## Benefits of This Architecture

### ✅ Handles Nesting Recursively
The parser naturally handles any level of nesting by recursively parsing box content.

### ✅ Clean Separation of Concerns
- Lexer: Character recognition
- Parser: Structure recognition
- Generator: Output formatting

### ✅ Easier to Debug
Can inspect tokens and AST at each stage:
```javascript
const tokens = lex(input);
const ast = parse(tokens);
const html = generate(ast);
```

### ✅ Easier to Extend
Adding new patterns requires changes in specific places:
1. Add token type to lexer
2. Add AST node type to ast.js
3. Add parsing logic to parser
4. Add generation logic to html-generator

### ✅ More Deterministic
AST is an intermediate representation - same input always produces same AST.

## Current Status

**Test Results:** 17/29 passing (59%)

This is a work-in-progress refactor. The architecture is sound but needs debugging.

## Known Issues

### 1. Whitespace/Indentation
**Problem:** Content indentation and trailing whitespace not handled correctly
**Example:**
```
Expected: <div>\n  Content\n</div>
Actual:   <div>\nContent \n</div>
```

**Fix:** Update HTML generator to:
- Properly indent inline content
- Trim trailing whitespace from text nodes
- Handle blank lines correctly

### 2. Textarea Detection
**Problem:** Textarea pattern (box with underscores) not detected
**Root Cause:** Parser's `parseLineTokens` doesn't handle UNDERSCORE tokens
**Fix:** Check for textarea pattern BEFORE calling `parseInlineTokens` in `parseBoxContent`

### 3. Some Interactive Patterns
**Problem:** Complex inline patterns may not parse correctly
**Fix:** Debug `parseLineTokens` and `parseBracketContent` for edge cases

## Next Steps

1. **Fix textarea detection** - Highest priority, affects spec examples
2. **Fix whitespace handling** - Affects many tests
3. **Debug inline pattern parsing** - Handle edge cases
4. **Add more comprehensive tests** - Test each phase independently
5. **Performance optimization** - Currently slower than old implementation

## Debugging Tools

### Inspect Tokens
```javascript
import { lex } from './index.js';
const tokens = lex(input);
console.log(tokens);
```

### Inspect AST
```javascript
import { lex, parse } from './index.js';
const tokens = lex(input);
const ast = parse(tokens);
console.log(JSON.stringify(ast, null, 2));
```

### Inspect Each Phase
```javascript
import { transform, lex, parse, generate } from './index.js';

const tokens = lex(input);
console.log('TOKENS:', tokens);

const ast = parse(tokens);
console.log('AST:', JSON.stringify(ast, null, 2));

const html = generate(ast);
console.log('HTML:', html);
```

## Migration Notes

The public API (`transform` function) remains unchanged:
```javascript
const html = transform(asciiWireframe, { styled: true });
```

All existing code using the transformer continues to work without changes.
