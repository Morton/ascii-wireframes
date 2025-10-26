# Plugin Demo

This page demonstrates the **docsify-ascii-wireframes** plugin in action. The plugin automatically transforms ASCII wireframe code blocks into interactive HTML previews.

## How it Works

Simply write a code block with the `wireframe` language identifier, and the plugin will:
1. Transform the ASCII to HTML
2. Display a live preview
3. Add a collapsible "View ASCII Source" section

## Example 1: Login Form

Here's a simple login form wireframe:

```wireframe
┌─────────────────────┐
│     Login Form      │
├─────────────────────┤
│ Email:              │
│ [________________]  │
│                     │
│ Password:           │
│ [________________]  │
│                     │
│ [ ] Remember me     │
│                     │
│    [ Login ]        │
│                     │
│ → Forgot password?  │
└─────────────────────┘
```

## Example 2: Simple Box

A basic box with text:

```wireframe
┌─────────────┐
│   Content   │
└─────────────┘
```

## Example 3: Nested Structure

A wireframe with nested boxes:

```wireframe
┌───────────────────────┐
│      Dashboard        │
├───────────────────────┤
│                       │
│ ┌─────────────────┐   │
│ │  Welcome Back!  │   │
│ └─────────────────┘   │
│                       │
│ - Task 1              │
│ - Task 2              │
│ - Task 3              │
│                       │
│     [ View All ]      │
│                       │
└───────────────────────┘
```

## Example 4: Contact Form

A more complex form with multiple fields:

```wireframe
┌──────────────────────┐
│   Contact Us         │
├──────────────────────┤
│ Name:                │
│ [_________________]  │
│                      │
│ Email:               │
│ [_________________]  │
│                      │
│ Message:             │
│ [_________________]  │
│ [_________________]  │
│ [_________________]  │
│                      │
│    [ Send Message ]  │
└──────────────────────┘
```

## Example 5: Interactive Elements

Showcasing different interactive components:

```wireframe
┌────────────────────────┐
│  Interactive Elements  │
├────────────────────────┤
│                        │
│ Button: [ Click Me ]   │
│                        │
│ Checkbox: [x] Selected │
│           [ ] Option 2 │
│                        │
│ Radio: (•) Option A    │
│        ( ) Option B    │
│                        │
│ Link: → Learn More     │
│                        │
└────────────────────────┘
```

## Example 6: Settings Panel

```wireframe
┌──────────────────────────┐
│      Settings            │
├──────────────────────────┤
│                          │
│ # Account                │
│                          │
│ Username: [__________]   │
│                          │
│ [x] Email notifications  │
│ [ ] SMS notifications    │
│                          │
│ # Privacy                │
│                          │
│ Profile visibility:      │
│ (•) Public               │
│ ( ) Friends only         │
│ ( ) Private              │
│                          │
│  [ Save ]  [ Cancel ]    │
│                          │
└──────────────────────────┘
```

## Try It Yourself!

The plugin works with any valid ASCII wireframe from the [specification](../spec/v0.1-draft.md).

To use it in your own docsify site, check out the [plugin documentation](../tools/docsify-plugin/README.md).
