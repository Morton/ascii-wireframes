# ASCII Wireframes

A specification and tooling mono-repo for ASCII wireframes - the de facto standard for communicating UX/UI design with AI coding assistants.

## Why ASCII Wireframes?

ASCII wireframes have emerged as a powerful, universal format for describing user interfaces to AI coding assistants like Claude Code, GitHub Copilot, and OpenAI Codex. They are:

- **Human-readable**: Easy to write and understand
- **Version-controllable**: Plain text format works seamlessly with Git
- **AI-friendly**: Natural language structure that LLMs excel at interpreting
- **Portable**: Works across any platform, editor, or terminal
- **Fast**: Quick to sketch and iterate on designs

## Project Structure

```
ascii-wireframes/
├── spec/           # Specification documents
├── tools/          # Development tooling
│   └── transformer/  # ASCII to HTML transformation
├── examples/       # Example ASCII wireframes
├── docs/           # Additional documentation
└── claude.md       # Instructions for Claude Code
```

## Guiding Principles

### I. Start Small, Learn Fast
Begin with minimal viable implementations and iterate based on real-world usage.

### II. Less is More
Favor simplicity and clarity over feature completeness. The spec should be easy to adopt.

### III. Automatic Validation First
Build validation and tooling from the start to ensure quality and consistency.

### IV. Incremental Value Delivery
Each addition should provide immediate, tangible value to users.

## Documentation

📚 **[View the full documentation site](https://morton.github.io/ascii-wireframes/)** (powered by Docsify)

The documentation includes:
- Complete specification (v0.1)
- Interactive examples with HTML transformation
- Quick Start guide and AI integration guide
- Contribution guidelines
- Branch preview setup (Vercel)

## Quick Start

### 📚 New to ASCII Wireframes?

👉 **[Quick Start Guide](https://morton.github.io/ascii-wireframes/#/docs/QUICK-START)** - Get up and running in 5 minutes

👉 **[AI Integration Guide](https://morton.github.io/ascii-wireframes/#/docs/AI-INTEGRATION)** - Use with Claude Code, Copilot, and ChatGPT

### Writing Your First ASCII Wireframe

Create a simple login form:

```
┌─────────────────────────┐
│ Login                   │
├─────────────────────────┤
│                         │
│  Email:                 │
│  [_________________]    │
│                         │
│  Password:              │
│  [_________________]    │
│                         │
│  [ ] Remember me        │
│                         │
│  [ Login ]              │
│                         │
└─────────────────────────┘
```

**Box-drawing characters**: `┌ ┐ └ ┘ ─ │ ├ ┤`
**Interactive elements**: `[ Button ]` `[________]` `[ ]` `[x]`

### Using the Tools

**Transform to HTML**:
```bash
cd tools/transformer
npm test  # Run all tests
```

**Transform programmatically**:
```javascript
import { transform } from './tools/transformer/index.js';

const html = transform(`
┌──────────┐
│ [Button] │
└──────────┘
`);
// Output: <div style="..."><button>Button</button></div>
```

### Use with AI Assistants

**With Claude Code**:
```
Create a React component from this wireframe:

┌─────────────────────────┐
│ User Profile       [⚙]  │
├─────────────────────────┤
│ Name: [___________]     │
│ Email: [__________]     │
│ [ Save ]  [ Cancel ]    │
└─────────────────────────┘
```

**With GitHub Copilot** - Add wireframes in JSDoc comments:
```javascript
/**
 * ┌─────────────┐
 * │ Login  [×]  │
 * ├─────────────┤
 * │ [_________] │
 * │ [ Submit ]  │
 * └─────────────┘
 */
function LoginModal() {
  // Copilot autocompletes based on wireframe
}
```

## Status

🚧 **Early Development** - This project is in its initial bootstrap phase. Contributions and feedback are welcome!

## Contributing

This project follows the principle of **Start Small, Learn Fast**. We're gathering real-world use cases and patterns before formalizing the spec.

If you have ASCII wireframe patterns you'd like to share, please submit them in the discussions or as example PRs.

## License

MIT - See [LICENSE](LICENSE) for details