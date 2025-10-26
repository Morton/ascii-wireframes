# ASCII Wireframe Transformer

Transform ASCII wireframes into HTML code based on the [ASCII Wireframes specification](../../spec/v0.1-draft.md).

## Status

🚧 **In Development** - This tool is currently being built. See test cases for planned functionality.

## Installation

```bash
cd tools/transformer
npm install  # No dependencies needed - uses Node.js built-ins
```

## Usage

### As a Module

```javascript
import { transform } from './index.js';

// Basic transformation with inline styles
const ascii = `┌─────────┐
│ Content │
└─────────┘`;

const html = transform(ascii);
console.log(html);
// Output: <div style="border: 1px solid black; padding: 8px;">
//           Content
//         </div>

// Transform without styles (semantic HTML only)
const unstyled = transform(ascii, { styled: false });
console.log(unstyled);
// Output: <div>
//           Content
//         </div>

// Transform with custom styles
const customStyled = transform(ascii, {
  styled: true,
  styles: {
    box: 'border: 2px solid blue; padding: 16px;'
  }
});
```

### Command Line (Coming Soon)

```bash
# Transform a file
node transformer.js input.txt > output.html

# Transform with options
node transformer.js input.txt --unstyled > output.html
```

## Supported Patterns

Based on the [ASCII Wireframes v0.1 specification](../../spec/v0.1-draft.md):

### 1. Box Drawing
- ✅ Basic boxes (`┌─┐│└┘`)
- ✅ Nested boxes with headers
- 🚧 Complex nested layouts

### 2. Interactive Elements
- ✅ Buttons: `[ Submit ]`
- ✅ Input fields: `[____________]` or `[ placeholder... ]`
- ✅ Checkboxes: `[ ]` unchecked, `[x]` checked
- ✅ Radio buttons: `( )` unselected, `(•)` selected
- 🚧 Dropdowns: `[ Select... ▾ ]`
- ✅ Links: `→ Learn More` or `Learn More →`
- 🚧 Icons: `[🔍]`, `[≡]`, `[⚙]`

### 3. Lists
- ✅ Simple lists: `- Item`

### 4. Text Hierarchy
- ✅ Large headings: `# Heading`
- ✅ Medium headings: `## Heading`
- ✅ Regular text

### 5. Layout and Spacing
- 🚧 Nested structures with proper hierarchy
- 🚧 Spacing preservation

### 6. Common Patterns
- ✅ Form layouts
- ❌ Navigation headers (Tier 2 - deferred)
- ❌ Card grids (Tier 2 - deferred)
- ❌ Sidebar layouts (Tier 2 - deferred)

Legend: ✅ Implemented | 🚧 Planned | ❌ Not yet started

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Test Cases

The transformer includes comprehensive test cases covering:

1. **Box Drawing** - Basic and nested boxes
2. **Interactive Elements** - Buttons, inputs, checkboxes, radios, dropdowns, links, icons
3. **Lists and Grids** - Simple lists and card grids
4. **Text Hierarchy** - Headings and paragraphs
5. **Layout and Spacing** - Nested structures
6. **Common Patterns** - Navigation, forms, cards, sidebars
7. **Edge Cases** - Empty input, plain text, multiline content
8. **Complete Examples** - Login form, dashboard
9. **Configuration Options** - Styled/unstyled output, custom styles

See [transformer.test.js](./transformer.test.js) for all test cases.

## API

### `transform(input, options)`

Transform ASCII wireframe to HTML.

**Parameters:**
- `input` (string) - ASCII wireframe text
- `options` (object) - Optional configuration
  - `styled` (boolean) - Include inline styles (default: `true`)
  - `styles` (object) - Custom style overrides for elements

**Returns:** (string) HTML output

**Example:**

```javascript
transform('[ Submit ]', { styled: false });
// Returns: <button>Submit</button>

transform('[ Submit ]', {
  styled: true,
  styles: {
    button: 'border: 2px solid blue; padding: 10px;'
  }
});
// Returns: <button style="border: 2px solid blue; padding: 10px;">Submit</button>
```

## Development Approach

This tool is being developed using **Test-Driven Development (TDD)**:

1. ✅ Write comprehensive test cases based on the specification
2. ✅ Implement transformation logic for Tier 1 elements
3. ✅ Refactor to transpiler architecture (Lexer → Parser → AST → Generator)
4. 🚧 Add CLI interface

## Contributing

When adding new patterns:

1. Add test cases to `transformer.test.js`
2. Implement the transformation in `index.js`
3. Run tests to verify: `npm test`
4. Update this README with the new pattern

## Architecture

The transformer uses a multi-stage pipeline:

1. **Parse** - Split input into lines and detect patterns
2. **Analyze** - Identify box structures, interactive elements, layouts
3. **Transform** - Convert patterns to HTML with appropriate elements
4. **Style** - Apply inline styles or output semantic HTML
5. **Format** - Pretty-print the output

## Future Enhancements

- [ ] CLI interface with file I/O
- [ ] Support for custom component mapping
- [ ] Multiple output formats (React JSX, Vue templates, etc.)
- [ ] VS Code extension integration
- [ ] Real-time preview in browser
- [ ] Tier 2 elements (navigation, card grids, sidebars, tables)

## License

MIT
