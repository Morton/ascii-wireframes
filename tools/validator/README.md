# ASCII Wireframe Validator

A basic validation tool for ASCII wireframes, following the principle of **Automatic Validation First**.

## Installation

```bash
cd tools/validator
npm install  # (currently no dependencies)
```

## Usage

### Validate a single file

```bash
node index.js ../../examples/01-login-form.txt
```

### Run tests

```bash
npm test
```

## What it checks

The validator currently performs these checks:

1. **Box-drawing consistency** - Warns if mixing ASCII characters (|, -) with box-drawing characters (│, ─)
2. **Balanced brackets** - Warns if square brackets are unbalanced on any line
3. **Line length** - Warns if lines exceed 120 characters

## Validation Levels

- **Errors**: Critical issues that prevent the wireframe from being valid
- **Warnings**: Style inconsistencies or potential issues (doesn't fail validation)

## Future Enhancements

Following the principle of **Incremental Value Delivery**, future versions may add:

- Interactive element validation
- Layout structure verification
- Accessibility hints validation
- Auto-formatting capabilities
- Integration with editors (VS Code extension)

## Philosophy

This tool is intentionally minimal to start, focusing on the most common and valuable checks. As the spec evolves and real-world usage patterns emerge, the validator will grow accordingly.
