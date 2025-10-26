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

<div style="border: 1px solid black;">
  <div style="padding: 8px; border-bottom: 1px solid black;">
    MyBlog                            Home  About  [≡]
  </div>
  <div style="display: flex; border: 1px solid black;">
  <nav style="border-right: 1px solid black; padding: 16px; min-width: 120px;">
    <p style="margin: 1em 0;">┌─────────────────────────────────────────────────┐</p>
    <p style="margin: 1em 0;">└─────────────────────────────────────────────────┘</p>
    <p style="margin: 1em 0;">┌─────────────────────────────────────────────────┐</p>
    <p style="margin: 1em 0;">└─────────────────────────────────────────────────┘</p>
    <p style="margin: 1em 0;">┌─────────────────────────────────────────────────┐</p>
    <p style="margin: 1em 0;">└─────────────────────────────────────────────────┘</p>
    <p style="margin: 1em 0;">┌─────────────────────────────────────────────────┐</p>
    <p style="margin: 1em 0;">└─────────────────────────────────────────────────┘</p>
  </nav>

  <main style="padding: 16px; flex: 1;">
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Featured Image</button>
    <p style="margin: 1em 0;">Article content goes here. This would be a</p>
    <p style="margin: 1em 0;">long-form blog post with multiple paragraphs</p>
    <p style="margin: 1em 0;">and formatting.</p>
    <h2 style="font-size: 1.5em; font-weight: bold; margin: 0.75em 0;">Section Heading</h2>
    <p style="margin: 1em 0;">More content here with examples and</p>
    <p style="margin: 1em 0;">explanations...</p>
    <p style="margin: 1em 0;">@alice • 2 hours ago</p>
    <p style="margin: 1em 0;">Great article! Very helpful for beginners.</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Reply</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">♥ 5</button>
    <p style="margin: 1em 0;">@bob • 5 hours ago</p>
    <p style="margin: 1em 0;">Where can I find more examples?</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Reply</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">♥ 2</button>
  </main>
</div>
    <p style="margin: 1em 0;">Getting Started with ASCII Wireframes</p>
    <p style="margin: 1em 0;">By Jane Doe • Oct 26, 2025 • 5 min read</p>
    <p style="margin: 1em 0;">Tags: #tutorial #design #ascii</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">♥ 42</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">💬 12 Comments</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">→ Share</button>
    <p style="margin: 1em 0;">───────────────────────────────────────────────────</p>
    <p style="margin: 1em 0;">Comments (12)</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Load More Comments</button>
</div>

#### **HTML Code**

```html
<div style="border: 1px solid black;">
  <div style="padding: 8px; border-bottom: 1px solid black;">
    MyBlog                            Home  About  [≡]
  </div>
  <div style="display: flex; border: 1px solid black;">
  <nav style="border-right: 1px solid black; padding: 16px; min-width: 120px;">
    <p style="margin: 1em 0;">┌─────────────────────────────────────────────────┐</p>
    <p style="margin: 1em 0;">└─────────────────────────────────────────────────┘</p>
    <p style="margin: 1em 0;">┌─────────────────────────────────────────────────┐</p>
    <p style="margin: 1em 0;">└─────────────────────────────────────────────────┘</p>
    <p style="margin: 1em 0;">┌─────────────────────────────────────────────────┐</p>
    <p style="margin: 1em 0;">└─────────────────────────────────────────────────┘</p>
    <p style="margin: 1em 0;">┌─────────────────────────────────────────────────┐</p>
    <p style="margin: 1em 0;">└─────────────────────────────────────────────────┘</p>
  </nav>

  <main style="padding: 16px; flex: 1;">
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Featured Image</button>
    <p style="margin: 1em 0;">Article content goes here. This would be a</p>
    <p style="margin: 1em 0;">long-form blog post with multiple paragraphs</p>
    <p style="margin: 1em 0;">and formatting.</p>
    <h2 style="font-size: 1.5em; font-weight: bold; margin: 0.75em 0;">Section Heading</h2>
    <p style="margin: 1em 0;">More content here with examples and</p>
    <p style="margin: 1em 0;">explanations...</p>
    <p style="margin: 1em 0;">@alice • 2 hours ago</p>
    <p style="margin: 1em 0;">Great article! Very helpful for beginners.</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Reply</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">♥ 5</button>
    <p style="margin: 1em 0;">@bob • 5 hours ago</p>
    <p style="margin: 1em 0;">Where can I find more examples?</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Reply</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">♥ 2</button>
  </main>
</div>
    <p style="margin: 1em 0;">Getting Started with ASCII Wireframes</p>
    <p style="margin: 1em 0;">By Jane Doe • Oct 26, 2025 • 5 min read</p>
    <p style="margin: 1em 0;">Tags: #tutorial #design #ascii</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">♥ 42</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">💬 12 Comments</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">→ Share</button>
    <p style="margin: 1em 0;">───────────────────────────────────────────────────</p>
    <p style="margin: 1em 0;">Comments (12)</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Load More Comments</button>
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
