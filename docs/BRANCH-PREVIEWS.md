# Branch Preview Documentation

This repository supports automatic branch preview deployments using Vercel.

## What Are Branch Previews?

Branch previews automatically deploy every branch and pull request to a unique URL, allowing you to:

- ✅ Preview documentation changes before merging
- ✅ Share work-in-progress with collaborators
- ✅ Test changes in a production-like environment
- ✅ Review PRs with live previews

## Setup (One-Time)

### Option 1: Vercel (Recommended)

**Why Vercel?**
- ✅ Automatic branch previews for every PR/branch
- ✅ Zero configuration needed (auto-detects static sites)
- ✅ Blazing fast deployments (~5-15 seconds)
- ✅ Excellent DX with great CLI and dashboard
- ✅ Free tier is generous, Pro tier adds team features
- ✅ Edge network for global performance

**Steps:**

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your `ascii-wireframes` repository from GitHub
   - Vercel auto-detects it's a static site
   - Click "Deploy"

2. **That's it!**
   - Every branch automatically gets a preview URL
   - Every PR gets a comment with the preview link
   - No additional configuration needed
   - Branch deploys and PR previews are enabled by default

**Optional: Vercel CLI**
```bash
# Install globally
npm i -g vercel

# Deploy from command line
vercel

# Preview locally with Vercel's dev server
vercel dev
```

### Option 2: Netlify

Alternative option with similar features:

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Import your repository
4. Click "Deploy"
5. All branches/PRs automatically get preview URLs

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

### Vercel Flow

```
1. Push to branch 'feature-x'
   ↓
2. Vercel detects push
   ↓
3. Builds & deploys in ~5-15 seconds
   ↓
4. Creates URL: ascii-wireframes-git-feature-x-yourname.vercel.app
   ↓
5. Comments on PR with preview link
```

### Preview URLs

- **Production**: `https://ascii-wireframes.vercel.app`
- **Branch**: `https://ascii-wireframes-git-branch-name-yourname.vercel.app`
- **PR #42**: Unique URL automatically generated and commented on PR

## Using Branch Previews

### As a Developer

When you create a PR:

1. Push your branch
2. Create PR on GitHub
3. Vercel bot comments with preview URL within seconds
4. Click URL to view your changes live
5. Share URL with reviewers
6. Every new push updates the preview automatically

### As a Reviewer

1. Open the PR
2. Find Vercel's comment (usually near the top)
3. Click "Visit Preview" to see the live site
4. Review the documentation changes in context
5. See updates in real-time as developer pushes changes

## Comparison: GitHub Pages vs Vercel

| Feature | GitHub Pages | Vercel | Netlify |
|---------|--------------|--------|---------|
| Branch previews | ❌ No (main only) | ✅ Automatic | ✅ Automatic |
| PR previews | ❌ No | ✅ Automatic | ✅ Automatic |
| Setup complexity | Medium | Very Easy | Very Easy |
| Deploy speed | ~2-3 min | ~5-15 sec | ~10-20 sec |
| Custom domains | ✅ Yes | ✅ Yes | ✅ Yes |
| HTTPS | ✅ Yes | ✅ Yes | ✅ Yes |
| CDN | ✅ Yes | ✅ Global Edge | ✅ Yes |
| CLI | ❌ No | ✅ Excellent | ✅ Good |
| Cost | Free | Free + Pro tiers | Free + Pro tiers |

**Recommendation**: Use **both**:
- **GitHub Pages**: Official documentation at `morton.github.io/ascii-wireframes`
- **Vercel**: Branch previews and faster iteration

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

1. Check Vercel deployment logs in the dashboard
2. Hard refresh your browser (Cmd/Ctrl + Shift + R)
3. Verify the deployment succeeded (check for green checkmark)
4. Look for build errors in the Vercel dashboard

### Preview shows 404?

- Ensure `index.html` is in the root directory
- Check Vercel's auto-detected settings (should be "Other" framework)
- Verify no custom build commands are interfering

### Want to disable previews?

In Vercel project settings:
- Go to **Settings** → **Git**
- Under "Ignored Build Step", you can configure when to build
- Or disable automatic deployments for specific branches

### Deployment failed?

- Check the build logs in Vercel dashboard
- For this static site, there should be no build step needed
- Ensure the repo has `index.html` in the root

## Principles Alignment

This setup follows our core principles:

- **Start Small, Learn Fast**: One-click setup, immediate feedback
- **Less is More**: Automatic, zero configuration needed
- **Automatic Validation First**: Every change gets a preview
- **Incremental Value Delivery**: See changes live instantly

## Next Steps

1. Set up Vercel (5 minutes)
2. Create a test PR to see preview in action
3. Share preview URLs with team for feedback
4. Iterate faster with instant previews
5. (Optional) Install Vercel CLI for local dev: `npm i -g vercel`

---

**Questions?** See [Vercel's deployment documentation](https://vercel.com/docs/deployments/overview)
