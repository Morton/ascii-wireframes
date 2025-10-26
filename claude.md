# Claude Code Instructions

This repository defines the ASCII Wireframes specification and tooling.

## Project Overview

ASCII wireframes are a plain-text format for describing user interfaces to AI coding assistants. This mono-repo contains:

- **spec/**: The formal specification for ASCII wireframes
- **tools/**: Validation and development tools
- **examples/**: Reference implementations and examples
- **docs/**: Additional documentation

## Development Principles

When working on this project, always follow these principles:

1. **Start Small, Learn Fast**: Implement MVPs and iterate
2. **Less is More**: Favor simplicity over completeness
3. **Automatic Validation First**: Build tooling alongside specs
4. **Incremental Value Delivery**: Each change should add immediate value

## Guidelines

### When adding to the spec:
- Keep examples simple and clear
- Focus on common, proven patterns
- Document both syntax and semantic meaning
- Include visual examples

### When building tools:
- Start with basic validation
- Provide helpful error messages
- Support incremental adoption
- Keep dependencies minimal

### When adding examples:
- Use real-world scenarios
- Show progressive complexity
- Include both good and edge cases
- Document the use case

## Common Tasks

- Run transformer tests: `cd tools/transformer && npm test`
- Transform ASCII to HTML: `cd tools/transformer && node -e "import('./index.js').then(m => console.log(m.transform(\`[your wireframe]\`)))"`
- View documentation: Open `index.html` in a browser (GitHub Pages)
