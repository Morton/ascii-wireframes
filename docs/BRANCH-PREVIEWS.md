# Branch Preview Documentation

This repository supports automatic branch preview deployments using Netlify.

## What Are Branch Previews?

Branch previews automatically deploy every branch and pull request to a unique URL, allowing you to:

- ✅ Preview documentation changes before merging
- ✅ Share work-in-progress with collaborators
- ✅ Test changes in a production-like environment
- ✅ Review PRs with live previews

## Setup (One-Time)

### Option 1: Netlify (Recommended)

**Why Netlify?**
- ✅ Automatic branch previews for every PR/branch
- ✅ Zero configuration needed (works with our `netlify.toml`)
- ✅ Free tier is generous
- ✅ Fast global CDN
- ✅ Instant rollbacks

**Steps:**

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your `ascii-wireframes` repository
   - Netlify will auto-detect the settings from `netlify.toml`
   - Click "Deploy site"

2. **Configure Branch Deploys**
   - Go to **Site settings** → **Build & deploy** → **Deploy contexts**
   - Enable:
     - ✅ **Branch deploys**: Deploy all branches
     - ✅ **Deploy previews**: Deploy pull requests

3. **Done!**
   - Every branch gets a URL like: `branch-name--your-site.netlify.app`
   - Every PR gets a preview comment with the URL

### Option 2: Vercel

Similar to Netlify with automatic previews:

1. Go to [vercel.com](https://vercel.com)
2. Import your repository
3. Click "Deploy"
4. All branches/PRs automatically get preview URLs

### Option 3: GitHub Actions (Advanced)

Keep everything on GitHub by deploying branches to subdirectories:

```yaml
# .github/workflows/branch-preview.yml
name: Branch Preview

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      # Deploy to: username.github.io/ascii-wireframes/preview/<branch-name>
      # Requires additional setup - see GitHub Pages documentation
```

> **Note**: This approach is more complex and requires additional configuration.

## How It Works

### Netlify Flow

```
1. Push to branch 'feature-x'
   ↓
2. Netlify detects push
   ↓
3. Deploys to: feature-x--ascii-wireframes.netlify.app
   ↓
4. Updates PR comment with preview link
```

### Preview URLs

- **Production**: `https://ascii-wireframes.netlify.app`
- **Branch**: `https://branch-name--ascii-wireframes.netlify.app`
- **PR #42**: `https://deploy-preview-42--ascii-wireframes.netlify.app`

## Using Branch Previews

### As a Developer

When you create a PR:

1. Push your branch
2. Create PR on GitHub
3. Netlify bot comments with preview URL
4. Click URL to view your changes live
5. Share URL with reviewers

### As a Reviewer

1. Open the PR
2. Find Netlify's comment (usually near the top)
3. Click "Visit Preview" to see the live site
4. Review the documentation changes in context

## Comparison: GitHub Pages vs Netlify

| Feature | GitHub Pages | Netlify |
|---------|--------------|---------|
| Branch previews | ❌ No (main only) | ✅ Automatic |
| PR previews | ❌ No | ✅ Automatic |
| Setup complexity | Medium | Very Easy |
| Deploy speed | ~2-3 min | ~10-20 sec |
| Custom domains | ✅ Yes | ✅ Yes |
| HTTPS | ✅ Yes | ✅ Yes |
| CDN | ✅ Yes | ✅ Yes (faster) |
| Cost | Free | Free (generous) |

**Recommendation**: Use **both**:
- **GitHub Pages**: Official documentation at `morton.github.io/ascii-wireframes`
- **Netlify**: Branch previews and faster iteration

## Local Preview (No Deploy Needed)

For quick checks, preview locally:

```bash
# Python (built-in)
python3 -m http.server 3000

# Node.js
npx serve

# Docsify CLI (optional)
npx docsify-cli serve
```

Then open http://localhost:3000

## Troubleshooting

### Preview not updating?

1. Check Netlify deploy logs
2. Hard refresh your browser (Cmd/Ctrl + Shift + R)
3. Check if branch is building under "Deploys" tab

### Preview shows 404?

- Ensure `index.html` is in the root directory
- Check `netlify.toml` publish directory is set to `"."`

### Want to disable previews?

In Netlify settings:
- **Site settings** → **Build & deploy** → **Deploy contexts**
- Disable "Deploy previews" or "Branch deploys"

## Principles Alignment

This setup follows our core principles:

- **Start Small, Learn Fast**: One-click setup, immediate feedback
- **Less is More**: Automatic, zero configuration needed
- **Automatic Validation First**: Every change gets a preview
- **Incremental Value Delivery**: See changes live instantly

## Next Steps

1. Set up Netlify (5 minutes)
2. Create a test PR to see preview in action
3. Share preview URLs with team for feedback
4. Iterate faster with instant previews

---

**Questions?** See [Netlify's branch deploy docs](https://docs.netlify.com/site-deploys/overview/#branch-deploy-controls)
