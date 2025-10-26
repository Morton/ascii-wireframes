# Docsify ASCII Wireframes Plugin

A docsify plugin that automatically transforms ASCII wireframe code blocks into interactive HTML previews.

## Features

- **Automatic transformation**: Write ASCII wireframes in markdown, get live HTML previews
- **Collapsible source**: View the original ASCII source with expandable details
- **Styled output**: Beautiful rendering with inline styles from the transformer
- **Zero configuration**: Just add the script tag and start using

## Installation

### 1. Add the plugin to your docsify site

Add this script tag to your `index.html` before the closing `</body>` tag:

```html
<!-- ASCII Wireframes plugin -->
<script src="https://raw.githubusercontent.com/Morton/ascii-wireframes/main/tools/docsify-plugin/docsify-ascii-wireframes.js"></script>
```

Or if you're hosting the plugin locally:

```html
<script src="tools/docsify-plugin/docsify-ascii-wireframes.js"></script>
```

### 2. That's it!

The plugin will automatically load the transformer and start converting ASCII wireframes.

## Usage

In your markdown files, use code blocks with the `wireframe` language identifier:

````markdown
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
````

The plugin will automatically:
1. Detect the `wireframe` code block
2. Transform the ASCII to HTML using the transformer
3. Display a rendered preview
4. Add a collapsible "View ASCII Source" section

## Example Output

The rendered wireframe will appear as an interactive HTML preview with:
- A preview container with the transformed HTML
- Inline styles for proper rendering
- A collapsible details section showing the original ASCII source
- Proper error handling if transformation fails

## Configuration

Currently, the plugin uses these default transformer options:

```javascript
{
  styled: true  // Include inline styles in output
}
```

Future versions may support custom configuration through `window.$docsify.asciiWireframes`.

## Browser Support

The plugin works in all modern browsers that support:
- ES6 modules (`import`)
- `async/await`
- `<details>` element

## How it Works

1. **Plugin loads** on docsify initialization
2. **Transformer imports** dynamically using ES6 modules
3. **beforeEach hook** processes markdown before rendering
4. **Pattern matching** finds all `wireframe` code blocks
5. **Transformation** converts ASCII to HTML using the transformer
6. **Preview generation** wraps output in styled containers
7. **Styles added** via mounted hook for consistent appearance

## Troubleshooting

### Plugin not working

**Check the console** for error messages:
```
Failed to load ASCII wireframes transformer
```

This means the transformer module couldn't be loaded. Ensure:
- The transformer is in `tools/transformer/index.js`
- Your server allows ES6 module imports
- You're not viewing the file directly (use `file://` - use a local server)

### Wireframe not rendering

If a wireframe doesn't render:
1. Check that you used the `wireframe` language identifier
2. Open the "View ASCII Source" to verify the ASCII is correct
3. Check the browser console for transformation errors
4. Validate your ASCII wireframe matches the spec

### Styles not applied

If styles are missing:
1. Check for CSS conflicts with your docsify theme
2. Look for console errors during plugin initialization
3. Verify the plugin loaded after docsify core

## Development

To modify or extend the plugin:

1. **Edit the plugin file**: `tools/docsify-plugin/docsify-ascii-wireframes.js`
2. **Modify transformer options**: Update the `transform()` call options
3. **Customize styles**: Edit the CSS in the `hook.mounted()` section
4. **Add features**: Use additional docsify lifecycle hooks

### Plugin Architecture

```javascript
(function () {
  // Module caching
  let transformerModule = null;

  // Load transformer once
  async function loadTransformer() { ... }

  var asciiWireframesPlugin = function (hook, vm) {
    // Initialize transformer
    hook.init(function () { ... });

    // Transform wireframes before markdown processing
    hook.beforeEach(function (markdown, next) { ... });

    // Add styles after mounting
    hook.mounted(function () { ... });
  };

  // Register plugin
  window.$docsify.plugins = [].concat(
    asciiWireframesPlugin,
    window.$docsify.plugins || []
  );
})();
```

## Future Enhancements

- [ ] Configuration options via `window.$docsify.asciiWireframes`
- [ ] Custom style overrides
- [ ] Multiple rendering modes (styled, unstyled, inline)
- [ ] Copy-to-clipboard buttons
- [ ] Edit-in-place functionality
- [ ] Side-by-side ASCII/HTML view
- [ ] Export to standalone HTML
- [ ] Integration with docsify tabs plugin

## Related

- [ASCII Wireframes Specification](../../spec/v0.1-draft.md)
- [Transformer Tool](../transformer/README.md)
- [Quick Start Guide](../../docs/QUICK-START.md)
- [AI Integration Guide](../../docs/AI-INTEGRATION.md)

## License

MIT
