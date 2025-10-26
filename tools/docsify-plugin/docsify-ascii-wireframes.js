/**
 * docsify-ascii-wireframes
 *
 * A docsify plugin that automatically transforms ASCII wireframe code blocks
 * into interactive HTML previews using the ASCII Wireframes transformer.
 *
 * Usage:
 *   Add to your index.html:
 *   <script src="tools/transformer/index.js" type="module"></script>
 *   <script src="tools/docsify-plugin/docsify-ascii-wireframes.js"></script>
 *
 * Then use in your markdown:
 *   ```wireframe
 *   ┌─────────────┐
 *   │   Content   │
 *   └─────────────┘
 *   ```
 */

(function () {
  let transformerModule = null;

  // Load the transformer module
  async function loadTransformer() {
    if (transformerModule) return transformerModule;

    try {
      // Use absolute path from document root
      // This works because the plugin is loaded from the root index.html
      const transformerPath = '/tools/transformer/index.js';

      // Import the transformer module
      const module = await import(transformerPath);
      transformerModule = module;
      return module;
    } catch (err) {
      console.error('Failed to load ASCII wireframes transformer:', err);
      console.error('Attempted to import from:', transformerPath);
      return null;
    }
  }

  var asciiWireframesPlugin = function (hook, vm) {
    // Initialize and load transformer
    hook.init(function () {
      loadTransformer().then(module => {
        if (module) {
          console.log('ASCII Wireframes plugin initialized');
        }
      });
    });

    // Transform ASCII wireframes before markdown processing
    hook.beforeEach(function (markdown, next) {
      loadTransformer()
        .then(module => {
          if (!module || !module.transform) {
            next(markdown);
            return;
          }

          try {
            // Find all code blocks with 'wireframe' language
            const wireframePattern = /```wireframe\n([\s\S]*?)```/g;
            let transformedMarkdown = markdown;
            let match;
            const matches = [];

            // Collect all matches first
            while ((match = wireframePattern.exec(markdown)) !== null) {
              matches.push({
                fullMatch: match[0],
                ascii: match[1],
                index: match.index
              });
            }

            // Transform each wireframe (in reverse to maintain indices)
            for (let i = matches.length - 1; i >= 0; i--) {
              const { fullMatch, ascii } = matches[i];

              try {
                // Transform the ASCII wireframe to HTML
                const html = module.transform(ascii, { styled: true });

                // Create a preview container with both source and rendered output
                const preview = [
                  '<div class="ascii-wireframe-preview">',
                  '  <div class="ascii-wireframe-rendered">',
                  '    ' + html,
                  '  </div>',
                  '  <details class="ascii-wireframe-source">',
                  '    <summary>View ASCII Source</summary>',
                  '    <pre><code>' + escapeHtml(ascii) + '</code></pre>',
                  '  </details>',
                  '</div>'
                ].join('\n');

                transformedMarkdown = transformedMarkdown.replace(fullMatch, preview);
              } catch (err) {
                console.error('Failed to transform wireframe:', err);
                // Leave the original code block if transformation fails
              }
            }

            next(transformedMarkdown);
          } catch (err) {
            console.error('Error processing ASCII wireframes:', err);
            next(markdown);
          }
        })
        .catch(err => {
          console.error('Error loading transformer:', err);
          next(markdown);
        });
    });

    // Add custom styles for the preview
    hook.mounted(function () {
      const style = document.createElement('style');
      style.textContent = `
        .ascii-wireframe-preview {
          margin: 1em 0;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .ascii-wireframe-rendered {
          padding: 1.5em;
          background: #fafafa;
          border-bottom: 1px solid #e0e0e0;
        }

        .ascii-wireframe-source {
          background: #f5f5f5;
        }

        .ascii-wireframe-source summary {
          padding: 0.75em 1em;
          cursor: pointer;
          user-select: none;
          font-size: 0.9em;
          color: #666;
          background: #f9f9f9;
        }

        .ascii-wireframe-source summary:hover {
          background: #f0f0f0;
        }

        .ascii-wireframe-source pre {
          margin: 0;
          padding: 1em;
          background: #f5f5f5;
          border-top: 1px solid #e0e0e0;
        }

        .ascii-wireframe-source code {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
          font-size: 0.85em;
          color: #333;
        }
      `;
      document.head.appendChild(style);
    });
  };

  // Helper function to escape HTML in code blocks
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Add plugin to docsify's plugin array
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(asciiWireframesPlugin, window.$docsify.plugins || []);
})();
