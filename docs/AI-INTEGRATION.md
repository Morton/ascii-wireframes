# AI Integration Guide

How to use ASCII Wireframes with AI coding assistants for maximum productivity.

## Why ASCII Wireframes Work Well with AI

AI assistants like Claude Code, GitHub Copilot, and ChatGPT excel at understanding structured text formats. ASCII wireframes provide:

- **Clear Structure**: Box-drawing characters create unambiguous visual hierarchy
- **Universal Format**: Plain text works across all AI platforms
- **Context-Rich**: Combines visual layout with semantic labels
- **Version-Friendly**: Easy to iterate and refine with AI feedback

## Integration Patterns

### Pattern 1: Direct Component Generation

**Best for**: Creating new UI components from scratch

```wireframe-src
Prompt: "Create a React component from this wireframe:"

┌─────────────────────────────┐
│ User Profile          [⚙]  │
├─────────────────────────────┤
│                             │
│  Name: [_______________]    │
│  Email: [______________]    │
│  Bio:                       │
│  ┌───────────────────────┐  │
│  │_______________________│  │
│  │_______________________│  │
│  └───────────────────────┘  │
│                             │
│  [ Save Changes ] [ Cancel ]│
│                             │
└─────────────────────────────┘
```

**AI Output**: Full React component with:
- State management (useState)
- Form handling
- Validation logic
- Proper styling
- Accessibility attributes

### Pattern 2: Inline Documentation

**Best for**: Explaining complex UI to future maintainers or AI assistants

```javascript
/**
 * SearchResults Component
 *
 * ┌──────────────────────────────────┐
 * │ Search: [_____________] [🔍]    │
 * ├──────────────────────────────────┤
 * │ ┌──────────────────────────────┐ │
 * │ │ Result 1              →      │ │
 * │ │ Description...               │ │
 * │ └──────────────────────────────┘ │
 * │ ┌──────────────────────────────┐ │
 * │ │ Result 2              →      │ │
 * │ │ Description...               │ │
 * │ └──────────────────────────────┘ │
 * │ [ Load More ]                    │
 * └──────────────────────────────────┘
 */
export function SearchResults({ query, results }) {
  // AI can see the intended structure and autocomplete accordingly
}
```

### Pattern 3: Specification-Driven Development

**Best for**: Planning features before implementation

````markdown
## Feature: User Dashboard

### Wireframe
```wireframe-src
┌────────────────────────────────────────┐
│ Dashboard               [@user] [⚙]   │
├────────────────────────────────────────┤
│                                        │
│  Welcome back, John!                   │
│                                        │
│  Active Projects: 3                    │
│  Pending Tasks: 12                     │
│                                        │
│  Recent Activity                       │
│  ┌──────────────────────────────────┐  │
│  │ • Project updated         2h ago │  │
│  │ • Task completed          5h ago │  │
│  │ • New comment            1d ago  │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [ View All Projects ]                 │
│                                        │
└────────────────────────────────────────┘
```

### Requirements
- Real-time activity updates
- Click project name to navigate
- User dropdown in header
````

**AI Task**: "Implement this dashboard following the wireframe structure"

### Pattern 4: Iterative Refinement

**Best for**: Improving existing components

```wireframe-src
Prompt: "Refactor this component to match the wireframe:"

Current:
<SimpleForm>
  <Input name="email" />
  <Input name="password" />
  <Button>Submit</Button>
</SimpleForm>

Target:
┌─────────────────────────────┐
│ Sign In                     │
├─────────────────────────────┤
│                             │
│  Email                      │
│  [___________________]      │
│  ✓ Valid                    │
│                             │
│  Password                   │
│  [___________________]      │
│  → Forgot password?         │
│                             │
│  [x] Remember me            │
│                             │
│  [ Sign In ]                │
│                             │
│  Don't have an account?     │
│  → Sign up                  │
│                             │
└─────────────────────────────┘
```

AI will understand the structural changes needed.

## Platform-Specific Tips

### Claude Code

**Strengths**: Excellent at understanding complex layouts and generating complete implementations

**Best Practices**:
```
1. Include wireframe in your initial prompt
2. Be specific about framework (React, Vue, Svelte)
3. Mention styling approach (Tailwind, CSS Modules, styled-components)
4. Request tests or accessibility features upfront
```

**Example Prompt**:
```
Using this wireframe, create a Next.js component with:
- TypeScript
- Tailwind CSS
- React Hook Form for validation
- Accessibility (ARIA labels, keyboard navigation)

┌─────────────────────┐
│ [Your wireframe]    │
└─────────────────────┘
```

### GitHub Copilot

**Strengths**: Inline autocomplete based on context

**Best Practices**:
```javascript
// 1. Add wireframe in JSDoc comment above component
/**
 * ┌─────────┐
 * │ [Modal] │
 * └─────────┘
 */

// 2. Start typing component structure
function Modal() {
  // Copilot will suggest based on wireframe

// 3. Use descriptive variable names matching wireframe
const handleSubmit = // Copilot knows this relates to the wireframe
```

### ChatGPT / OpenAI

**Strengths**: Conversational refinement and explanation

**Best Practices**:
```
1. Share wireframe
2. Ask for component generation
3. Iterate with feedback:
   - "Make the header sticky"
   - "Add loading state"
   - "Extract form logic to custom hook"
4. Request documentation/tests
```

## Advanced Techniques

### Multi-View Wireframes

Show different states or responsive layouts:

```
Desktop:
┌─────────────────────────────────────┐
│ Logo    Home  About  Contact  [🔍] │
├─────────────────────────────────────┤
│ [Main content area]                 │
└─────────────────────────────────────┘

Mobile:
┌───────────┐
│ [≡]  Logo │
├───────────┤
│ [Search]  │
├───────────┤
│ [Content] │
└───────────┘
```

Prompt: "Create responsive component that matches these layouts"

### State Annotations

Show different UI states inline:

```
Loading:
┌──────────────┐
│ ⟳ Loading... │
└──────────────┘

Success:
┌────────────────┐
│ ✓ Saved!       │
│ [OK]           │
└────────────────┘

Error:
┌────────────────────┐
│ ⚠ Error occurred   │
│ [Retry] [Cancel]   │
└────────────────────┘
```

### Flow Diagrams

Combine wireframes with flow:

```
Login Flow:

Step 1: Initial
┌─────────────┐
│ [Email]     │ ──→ Invalid
│ [Password]  │      ↓
│ [Login]     │     Show error
└─────────────┘      ↓
      ↓            [Retry]
    Valid
      ↓
Step 2: Success
┌─────────────┐
│ Welcome!    │
│ [Continue]  │
└─────────────┘
```

## Common Patterns Library

### Authentication

```wireframe-src
┌─────────────────────────────┐
│ Sign In                     │
├─────────────────────────────┤
│ [ Continue with Google ]    │
│ [ Continue with GitHub ]    │
│                             │
│ ──────── OR ────────        │
│                             │
│ Email:                      │
│ [___________________]       │
│                             │
│ Password:                   │
│ [___________________]       │
│                             │
│ [ Sign In ]                 │
│                             │
│ → Forgot password?          │
│ → Create account            │
└─────────────────────────────┘
```

### Data Table (Simplified for Tier 1)

```
Users:

- john@example.com     Admin      → Edit
- jane@example.com     User       → Edit
- bob@example.com      User       → Edit

[ + Add User ]
```

### Settings Panel

```wireframe-src
┌─────────────────────────────┐
│ Settings               [×]  │
├─────────────────────────────┤
│                             │
│ Notifications               │
│ [x] Email notifications     │
│ [ ] Push notifications      │
│ [x] Weekly summary          │
│                             │
│ Privacy                     │
│ Profile visibility:         │
│ [ Public ▾ ]                │
│                             │
│ [ Save ] [ Cancel ]         │
│                             │
└─────────────────────────────┘
```

### Wizard / Multi-Step Form

```
Step 1 of 3: Account Info
┌─────────────────────────────┐
│ Create Account        (1/3) │
├─────────────────────────────┤
│                             │
│ Full Name:                  │
│ [___________________]       │
│                             │
│ Email:                      │
│ [___________________]       │
│                             │
│ Password:                   │
│ [___________________]       │
│                             │
│          [ Next → ]         │
│                             │
└─────────────────────────────┘
```

## Troubleshooting

### AI Doesn't Understand Layout

❌ **Problem**: AI generates different structure

```
You provided:
┌────┐  ┌────┐
│ A  │  │ B  │
└────┘  └────┘

AI generated vertical stack instead of horizontal
```

✅ **Solution**: Add explicit annotation

```
Horizontal layout (side-by-side):

┌────┐  ┌────┐
│ A  │  │ B  │
└────┘  └────┘

Use flexbox with flex-direction: row
```

### AI Adds Unsupported Features

❌ **Problem**: AI adds tables, tabs, or complex grids

✅ **Solution**: Reference v0.1 limitations

```
Following ASCII Wireframes v0.1 (Tier 1 elements only),
create this WITHOUT using tables or tabs:

[Your wireframe]

Use lists and vertical stacking for data display.
```

### Inconsistent Styling

❌ **Problem**: Generated components don't match

✅ **Solution**: Provide style reference

```
Match this exact styling:
- Borders: 1px solid black
- Padding: 8px
- Buttons: padding 4px 12px
- Inputs: padding 4px

[Wireframe...]
```

## Pro Tips

### 1. Version Your Wireframes

```markdown
## Login Form v2

v1 → v2 changes:
- Added "Remember me" checkbox
- Added social login buttons
- Moved "Forgot password" link

[Wireframe here]
```

### 2. Combine with Requirements

```markdown
## Shopping Cart

Requirements:
- Real-time total calculation
- Quantity can't be < 1
- Remove item confirmation dialog
- Auto-save to localStorage

Wireframe:
[...]
```

### 3. Request Specific Patterns

```
Using React Hook Form and Zod validation,
implement this form:

[Wireframe...]

Requirements:
- Client-side validation
- Error messages below fields
- Disable submit until valid
```

### 4. Ask for Explanations

```
Explain how you would implement this component,
including state management and data flow:

[Wireframe...]
```

## Next Steps

- 📖 Review [Quick Start Guide](QUICK-START.md)
- 🎯 See [Examples](../examples/README.md) with AI prompts
- 📋 Check [Specification](../spec/v0.1-draft.md) for supported elements
- 🔧 Use [Transformer](../tools/transformer/README.md) to validate your wireframes

---

**Happy AI-Assisted Development!** 🤖✨
