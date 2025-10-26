# Quick Start Guide

Get up and running with ASCII Wireframes in 5 minutes.

## What Are ASCII Wireframes?

ASCII wireframes are plain-text diagrams that represent user interfaces using box-drawing characters and simple text patterns. They're perfect for:

- **Communicating with AI**: Claude Code, GitHub Copilot, and other AI assistants understand them natively
- **Quick sketching**: No special tools needed - just your keyboard
- **Version control**: Plain text works perfectly with Git
- **Documentation**: Embeddable in README files, specs, and comments

## Step 1: Write Your First Wireframe

Create a simple login form:

```wireframe-src
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

**Box Drawing Characters** (copy these):
- Corners: `┌ ┐ └ ┘`
- Lines: `─ │`
- Dividers: `├ ┤`

**Interactive Elements**:
- Buttons: `[ Login ]`
- Text inputs: `[___________]`
- Checkboxes: `[ ]` (unchecked) or `[x]` (checked)

## Step 2: Transform to HTML

```bash
cd tools/transformer
node -e "import('./index.js').then(m => console.log(m.transform(\`
┌──────────┐
│ [Button] │
└──────────┘
\`)))"
```

Output:
```html
<div style="border: 1px solid black; padding: 8px;">
  <button style="border: 1px solid black; padding: 4px 12px; background: white;">Button</button>
</div>
```

## Step 3: Use with AI Assistants

### With Claude Code

```wireframe-src
Create a React component from this wireframe:

┌─────────────────────────┐
│ User Profile       [⚙]  │
├─────────────────────────┤
│                         │
│  Name: [___________]    │
│  Email: [__________]    │
│                         │
│  [ Save ]  [ Cancel ]   │
│                         │
└─────────────────────────┘
```

Claude will understand the structure and generate a complete component with proper styling and state management.

### With GitHub Copilot

Add wireframes in code comments:

```javascript
/**
 * Login Modal
 *
 * ┌─────────────────┐
 * │ Login      [×]  │
 * ├─────────────────┤
 * │ [___________]   │
 * │ [___________]   │
 * │ [ Submit ]      │
 * └─────────────────┘
 */
function LoginModal() {
  // Copilot will autocomplete based on the wireframe
}
```

## Supported Elements (v0.1)

### Containers
- **Box**: `┌─┐ │ └─┘` - Basic container with border
- **Box with header**: `├─┤` - Divider creates header section

### Interactive Elements
- **Button**: `[ Label ]` - Clickable button
- **Text Input**: `[___________]` - Single-line input
- **Text Input with placeholder**: `[ Enter text... ]`
- **Textarea**: Box filled with underscores
  ```
  ┌───────────┐
  │___________│
  │___________│
  └───────────┘
  ```
- **Checkbox**: `[ ]` unchecked, `[x]` checked
- **Radio**: `( )` unselected, `(•)` selected
- **Dropdown**: `[ Select... ▾ ]`
- **Link**: `→ Text` or `Text →`
- **Icon**: `[🔍]` `[⚙]` `[≡]`

### Text & Content
- **Heading (large)**: `# Heading`
- **Heading (medium)**: `## Heading`
- **Paragraph**: Regular text
- **List**: `- Item 1`

## Tips & Best Practices

### ✅ Do
- **Keep it simple**: Focus on structure, not pixel-perfect design
- **Add labels**: Make interactive elements clear
- **Use consistent spacing**: Align elements visually
- **Add annotations**: Use comments for clarification

```wireframe-src
┌─────────────────┐
│ Dashboard       │  ← Header with title
├─────────────────┤
│ Users: 1,234    │  ← Metric display
│ Active: 567     │
└─────────────────┘
```

### ❌ Don't
- **Over-complicate**: Don't try to show exact pixel layouts
- **Mix characters**: Don't mix `|` with `│` or `-` with `─`
- **Add too much detail**: Colors, shadows, exact sizes aren't needed

### 🎨 Style Guide
```wireframe-src
// Good - Clear and simple
┌──────────┐
│ [Submit] │
└──────────┘

// Avoid - Too detailed
╔══════════╗
║▐█ Submit █▌║
╚══════════╝
```

## Common Patterns

### Form with Validation
```wireframe-src
┌─────────────────────────┐
│ Register                │
├─────────────────────────┤
│                         │
│  Email:                 │
│  [user@example.com___]  │
│  ✓ Valid email          │
│                         │
│  Password:              │
│  [___________________]  │
│  ⚠ Must be 8+ characters│
│                         │
│  [ Register ]           │
│                         │
└─────────────────────────┘
```

### Dashboard Metrics
```wireframe-src
┌──────────────────────────────┐
│ Analytics Dashboard     [⚙]  │
├──────────────────────────────┤
│                              │
│  Total Users: 12,543 (↑ 12%) │
│  Revenue: $45,231 (↑ 8%)     │
│  Active Now: 1,829 (↓ 3%)    │
│                              │
└──────────────────────────────┘
```

### Nested Content
```wireframe-src
┌─────────────────────────────┐
│ Messages               [+]  │
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │ John Doe         2h   │  │
│  │ Hey, are you free?    │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ Jane Smith       5h   │  │
│  │ Meeting at 3pm        │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

## What's Not Supported (Yet)

v0.1 focuses on **Tier 1 critical elements** only. The following are deferred to future versions:

- Card grids (side-by-side boxes)
- Sidebar layouts (split layouts)
- Navigation bars
- Tables
- Tabs
- Modals / Dialogs
- Badges / Counters
- Complex horizontal layouts

For these, use workarounds:
- **Card grids**: Stack vertically instead
- **Sidebars**: Describe in annotations
- **Tables**: Use lists or describe structure in comments

See [Known Limitations](../spec/v0.1-draft.md#known-limitations) for details.

## Next Steps

- 📖 Read the [Full Specification](../spec/v0.1-draft.md)
- 🔍 Browse [Examples](../examples/README.md)
- 🛠️ Explore [Transformer Tool](../tools/transformer/README.md)
- 💡 Check [UI Elements Priority Analysis](../research/ui-elements-priority-analysis.md)

## Getting Help

- **Specification questions**: See [spec/v0.1-draft.md](../spec/v0.1-draft.md)
- **Transformer tool**: Check [tools/transformer/README.md](../tools/transformer/README.md)
- **Examples**: Browse [examples/](../examples/)
- **Contribute**: See [claude.md](../claude.md)

---

**Ready to start wireframing!** 🎉
