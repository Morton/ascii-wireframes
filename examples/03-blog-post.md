# Blog Post Example

A complete blog post layout with featured image, article content, engagement buttons, and comments section.

## Features

- Site header with navigation
- Featured image placeholder
- Article title and metadata (author, date, reading time)
- Content area for article body
- Tags for categorization
- Engagement actions (like, comment, share)
- Comments section with nested interactions
- "Load More" pagination for comments

## Wireframe

<!-- tabs:start -->

#### **ASCII Wireframe**

```
┌─────────────────────────────────────────────────────────┐
│ MyBlog                            Home  About  [≡]     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [Featured Image]                                │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Getting Started with ASCII Wireframes                 │
│  By Jane Doe • Oct 26, 2025 • 5 min read               │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │   │
│  │  Article content goes here. This would be a    │   │
│  │  long-form blog post with multiple paragraphs  │   │
│  │  and formatting.                               │   │
│  │                                                 │   │
│  │  ## Section Heading                            │   │
│  │                                                 │   │
│  │  More content here with examples and           │   │
│  │  explanations...                               │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Tags: #tutorial #design #ascii                        │
│                                                         │
│  [ ♥ 42 ]  [ 💬 12 Comments ]  [ → Share ]            │
│                                                         │
│  ───────────────────────────────────────────────────   │
│                                                         │
│  Comments (12)                                          │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ @alice • 2 hours ago                            │   │
│  │ Great article! Very helpful for beginners.      │   │
│  │ [ Reply ]  [ ♥ 5 ]                              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ @bob • 5 hours ago                              │   │
│  │ Where can I find more examples?                 │   │
│  │ [ Reply ]  [ ♥ 2 ]                              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [ Load More Comments ]                                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### **HTML Preview**

<div style="border: 1px solid black; max-width: 800px; margin: 0 auto;">
  <header style="padding: 16px; border-bottom: 1px solid black; display: flex; justify-content: space-between; align-items: center;">
    <strong>MyBlog</strong>
    <nav style="display: flex; gap: 16px; align-items: center;">
      <a href="#" style="color: black; text-decoration: none;">Home</a>
      <a href="#" style="color: black; text-decoration: none;">About</a>
      <button style="border: 1px solid black; padding: 4px 8px; background: white;">≡</button>
    </nav>
  </header>

  <article style="padding: 24px;">
    <div style="border: 1px solid black; padding: 80px; margin-bottom: 24px; text-align: center; background: #f5f5f5;">
      Featured Image
    </div>

    <h1 style="font-size: 2em; font-weight: bold; margin-bottom: 8px;">Getting Started with ASCII Wireframes</h1>
    <div style="color: #666; margin-bottom: 24px;">By Jane Doe • Oct 26, 2025 • 5 min read</div>

    <div style="border: 1px solid black; padding: 24px; margin-bottom: 24px;">
      <p style="margin-bottom: 16px;">Article content goes here. This would be a long-form blog post with multiple paragraphs and formatting.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-bottom: 12px;">Section Heading</h2>

      <p>More content here with examples and explanations...</p>
    </div>

    <div style="margin-bottom: 16px;">
      Tags: <span style="color: #666;">#tutorial #design #ascii</span>
    </div>

    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
      <button style="border: 1px solid black; padding: 6px 12px; background: white;">♥ 42</button>
      <button style="border: 1px solid black; padding: 6px 12px; background: white;">💬 12 Comments</button>
      <button style="border: 1px solid black; padding: 6px 12px; background: white;">→ Share</button>
    </div>

    <hr style="border: none; border-top: 1px solid black; margin: 24px 0;">

    <h3 style="font-size: 1.2em; margin-bottom: 16px;">Comments (12)</h3>

    <div style="border: 1px solid black; padding: 16px; margin-bottom: 16px;">
      <div style="font-weight: bold; margin-bottom: 8px;">@alice • 2 hours ago</div>
      <div style="margin-bottom: 12px;">Great article! Very helpful for beginners.</div>
      <div style="display: flex; gap: 12px;">
        <button style="border: 1px solid black; padding: 4px 12px; background: white; font-size: 0.9em;">Reply</button>
        <button style="border: 1px solid black; padding: 4px 12px; background: white; font-size: 0.9em;">♥ 5</button>
      </div>
    </div>

    <div style="border: 1px solid black; padding: 16px; margin-bottom: 16px;">
      <div style="font-weight: bold; margin-bottom: 8px;">@bob • 5 hours ago</div>
      <div style="margin-bottom: 12px;">Where can I find more examples?</div>
      <div style="display: flex; gap: 12px;">
        <button style="border: 1px solid black; padding: 4px 12px; background: white; font-size: 0.9em;">Reply</button>
        <button style="border: 1px solid black; padding: 4px 12px; background: white; font-size: 0.9em;">♥ 2</button>
      </div>
    </div>

    <button style="border: 1px solid black; padding: 8px 16px; background: white; width: 100%;">Load More Comments</button>
  </article>
</div>

#### **HTML Code**

```html
<div style="border: 1px solid black; max-width: 800px; margin: 0 auto;">
  <!-- Header -->
  <header style="padding: 16px; border-bottom: 1px solid black; display: flex; justify-content: space-between; align-items: center;">
    <strong>MyBlog</strong>
    <nav style="display: flex; gap: 16px; align-items: center;">
      <a href="#" style="color: black; text-decoration: none;">Home</a>
      <a href="#" style="color: black; text-decoration: none;">About</a>
      <button style="border: 1px solid black; padding: 4px 8px; background: white;">≡</button>
    </nav>
  </header>

  <!-- Article -->
  <article style="padding: 24px;">
    <!-- Featured image -->
    <div style="border: 1px solid black; padding: 80px; margin-bottom: 24px; text-align: center; background: #f5f5f5;">
      Featured Image
    </div>

    <!-- Article header -->
    <h1 style="font-size: 2em; font-weight: bold; margin-bottom: 8px;">Getting Started with ASCII Wireframes</h1>
    <div style="color: #666; margin-bottom: 24px;">By Jane Doe • Oct 26, 2025 • 5 min read</div>

    <!-- Article content -->
    <div style="border: 1px solid black; padding: 24px; margin-bottom: 24px;">
      <p style="margin-bottom: 16px;">Article content goes here. This would be a long-form blog post with multiple paragraphs and formatting.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-bottom: 12px;">Section Heading</h2>

      <p>More content here with examples and explanations...</p>
    </div>

    <!-- Tags -->
    <div style="margin-bottom: 16px;">
      Tags: <span style="color: #666;">#tutorial #design #ascii</span>
    </div>

    <!-- Engagement buttons -->
    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
      <button style="border: 1px solid black; padding: 6px 12px; background: white;">♥ 42</button>
      <button style="border: 1px solid black; padding: 6px 12px; background: white;">💬 12 Comments</button>
      <button style="border: 1px solid black; padding: 6px 12px; background: white;">→ Share</button>
    </div>

    <hr style="border: none; border-top: 1px solid black; margin: 24px 0;">

    <!-- Comments section -->
    <h3 style="font-size: 1.2em; margin-bottom: 16px;">Comments (12)</h3>

    <!-- Comment 1 -->
    <div style="border: 1px solid black; padding: 16px; margin-bottom: 16px;">
      <div style="font-weight: bold; margin-bottom: 8px;">@alice • 2 hours ago</div>
      <div style="margin-bottom: 12px;">Great article! Very helpful for beginners.</div>
      <div style="display: flex; gap: 12px;">
        <button style="border: 1px solid black; padding: 4px 12px; background: white; font-size: 0.9em;">Reply</button>
        <button style="border: 1px solid black; padding: 4px 12px; background: white; font-size: 0.9em;">♥ 5</button>
      </div>
    </div>

    <!-- Comment 2 -->
    <div style="border: 1px solid black; padding: 16px; margin-bottom: 16px;">
      <div style="font-weight: bold; margin-bottom: 8px;">@bob • 5 hours ago</div>
      <div style="margin-bottom: 12px;">Where can I find more examples?</div>
      <div style="display: flex; gap: 12px;">
        <button style="border: 1px solid black; padding: 4px 12px; background: white; font-size: 0.9em;">Reply</button>
        <button style="border: 1px solid black; padding: 4px 12px; background: white; font-size: 0.9em;">♥ 2</button>
      </div>
    </div>

    <!-- Load more -->
    <button style="border: 1px solid black; padding: 8px 16px; background: white; width: 100%;">Load More Comments</button>
  </article>
</div>
```

#### **Unstyled HTML**

```html
<div>
  <!-- Header -->
  <header>
    <strong>MyBlog</strong>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <button>≡</button>
    </nav>
  </header>

  <!-- Article -->
  <article>
    <!-- Featured image -->
    <div>
      Featured Image
    </div>

    <!-- Article header -->
    <h1>Getting Started with ASCII Wireframes</h1>
    <div>By Jane Doe • Oct 26, 2025 • 5 min read</div>

    <!-- Article content -->
    <div>
      <p>Article content goes here. This would be a long-form blog post with multiple paragraphs and formatting.</p>

      <h2>Section Heading</h2>

      <p>More content here with examples and explanations...</p>
    </div>

    <!-- Tags -->
    <div>
      Tags: <span>#tutorial #design #ascii</span>
    </div>

    <!-- Engagement buttons -->
    <div>
      <button>♥ 42</button>
      <button>💬 12 Comments</button>
      <button>→ Share</button>
    </div>

    <hr>

    <!-- Comments section -->
    <h3>Comments (12)</h3>

    <!-- Comment 1 -->
    <div>
      <div>@alice • 2 hours ago</div>
      <div>Great article! Very helpful for beginners.</div>
      <div>
        <button>Reply</button>
        <button>♥ 5</button>
      </div>
    </div>

    <!-- Comment 2 -->
    <div>
      <div>@bob • 5 hours ago</div>
      <div>Where can I find more examples?</div>
      <div>
        <button>Reply</button>
        <button>♥ 2</button>
      </div>
    </div>

    <!-- Load more -->
    <button>Load More Comments</button>
  </article>
</div>
```

<!-- tabs:end -->

## Use Case

Perfect for blog platforms, article pages, and content sites. Works well for:
- Personal blogs
- News articles
- Documentation with comments
- Community posts
- Medium-style platforms

## Implementation Notes

When implementing this wireframe:
- Use responsive images for featured image
- Implement markdown/rich text for article content
- Add SEO metadata (Open Graph, Twitter Cards)
- Consider lazy loading for comments
- Add authentication for comment interactions
- Implement spam protection for comments
- Add accessibility labels for action buttons

## Components

- **Header**: Site branding and navigation
- **Featured Image**: Hero image for the article
- **Article Meta**: Author, date, reading time
- **Content Area**: Main article body with formatting
- **Tags**: Category/topic tags
- **Engagement Bar**: Like, comment, share actions
- **Comments Thread**: User comments with interactions
- **Pagination**: Load more functionality

---

[Download as text file](03-blog-post.txt) | [Back to Examples](README.md)
