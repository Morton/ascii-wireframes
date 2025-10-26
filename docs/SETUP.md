# GitHub Pages Setup

This repository is configured to automatically deploy to GitHub Pages using Docsify.

## Enabling GitHub Pages

If you've forked this repository and want to enable the documentation site:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. The workflow will automatically run on the next push to `main`/`master`

Your documentation site will be available at:
```
https://[your-username].github.io/ascii-wireframes/
```

## How It Works

This setup uses **Docsify** - a lightweight documentation generator that:

- ✅ **No build process** - renders markdown on the fly in the browser
- ✅ **Single HTML file** - minimal setup with `index.html`
- ✅ **Uses existing markdown** - no need to restructure your docs
- ✅ **Zero dependencies** - pure client-side rendering

## Project Files

- `index.html` - Docsify configuration
- `_sidebar.md` - Navigation sidebar
- `.nojekyll` - Tells GitHub Pages to skip Jekyll processing
- `.github/workflows/pages.yml` - GitHub Actions deployment workflow

## Local Development

To preview the docs locally:

```bash
# Option 1: Using Python
python3 -m http.server 3000

# Option 2: Using Node.js
npx serve

# Option 3: Using Docsify CLI (optional)
npx docsify-cli serve
```

Then open http://localhost:3000 in your browser.

## Customization

### Changing the Theme

Edit `index.html` and change the stylesheet:

```html
<!-- Available themes: vue, buble, dark, pure -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
```

### Updating Navigation

Edit `_sidebar.md` to modify the sidebar navigation structure.

### Adding Plugins

Add plugin scripts before the closing `</body>` tag in `index.html`. See [Docsify plugins](https://docsify.js.org/#/plugins).

## Principles Alignment

This setup follows our core principles:

- **Start Small, Learn Fast**: Minimal configuration, instant deployment
- **Less is More**: Single HTML file, no complex build process
- **Automatic Validation First**: Workflow validates on every push
- **Incremental Value Delivery**: Documentation is immediately accessible

---

For more information, see the [Docsify documentation](https://docsify.js.org/).
