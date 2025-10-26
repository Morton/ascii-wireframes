# Dashboard Example

An admin dashboard with metrics cards, activity feed, and quick actions.

## Features

- Header with search, user menu, settings, and navigation
- Metrics cards with trend indicators (↑ ↓)
- Recent activity feed with timestamps
- Quick action buttons
- Clean, organized layout

## Wireframe

<!-- tabs:start -->

#### **ASCII Wireframe**

```
┌────────────────────────────────────────────────────────────────┐
│ Dashboard                    [🔍 Search...]  [@user] [⚙] [≡]  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Overview                                                      │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │ Total Users  │  │ Revenue      │  │ Active       │        │
│  │              │  │              │  │              │        │
│  │   12,543     │  │   $45,231    │  │   1,829      │        │
│  │   ↑ 12%      │  │   ↑ 8%       │  │   ↓ 3%       │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
│  Recent Activity                                               │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ • New user registration: john@example.com        2m ago  │ │
│  │ • Payment received: $99.00                       5m ago  │ │
│  │ • Support ticket created: #12345                15m ago  │ │
│  │ • New blog post published: "Getting Started"    1h ago  │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  Quick Actions                                                 │
│  [ + New User ]  [ + New Post ]  [ View Reports ]            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **HTML Preview**

<div style="border: 1px solid black;">
  <div style="padding: 8px; border-bottom: 1px solid black;">
    Dashboard                    [🔍 Search...]  [@user] [⚙] [≡]
  </div>
  <div style="display: flex; gap: 8px;">
  <div style="border: 1px solid black; padding: 16px; flex: 1;">
      <p style="margin: 1em 0;">│ Total Users  │  │ Revenue      │  │ Active       │</p>
      <p style="margin: 1em 0;">│              │  │              │  │              │</p>
      <p style="margin: 1em 0;">│   12,543     │  │   $45,231    │  │   1,829      │</p>
      <p style="margin: 1em 0;">│   ↑ 12%      │  │   ↑ 8%       │  │   ↓ 3%       │</p>
  </div>
  <div style="border: 1px solid black; padding: 16px; flex: 1;">
      <p style="margin: 1em 0;">│ • New user registration: john@example.com        2m ago  │</p>
      <p style="margin: 1em 0;">│ • Payment received: $99.00                       5m ago  │</p>
      <p style="margin: 1em 0;">│ • Support ticket created: #12345                15m ago  │</p>
      <p style="margin: 1em 0;">│ • New blog post published: "Getting Started"    1h ago  │</p>
  </div>
</div>
    <p style="margin: 1em 0;">Overview</p>
    <p style="margin: 1em 0;">Recent Activity</p>
    <p style="margin: 1em 0;">Quick Actions</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">+ New User</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">+ New Post</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">View Reports</button>
</div>

#### **HTML Code**

```html
<div style="border: 1px solid black;">
  <div style="padding: 8px; border-bottom: 1px solid black;">
    Dashboard                    [🔍 Search...]  [@user] [⚙] [≡]
  </div>
  <div style="display: flex; gap: 8px;">
  <div style="border: 1px solid black; padding: 16px; flex: 1;">
      <p style="margin: 1em 0;">│ Total Users  │  │ Revenue      │  │ Active       │</p>
      <p style="margin: 1em 0;">│              │  │              │  │              │</p>
      <p style="margin: 1em 0;">│   12,543     │  │   $45,231    │  │   1,829      │</p>
      <p style="margin: 1em 0;">│   ↑ 12%      │  │   ↑ 8%       │  │   ↓ 3%       │</p>
  </div>
  <div style="border: 1px solid black; padding: 16px; flex: 1;">
      <p style="margin: 1em 0;">│ • New user registration: john@example.com        2m ago  │</p>
      <p style="margin: 1em 0;">│ • Payment received: $99.00                       5m ago  │</p>
      <p style="margin: 1em 0;">│ • Support ticket created: #12345                15m ago  │</p>
      <p style="margin: 1em 0;">│ • New blog post published: "Getting Started"    1h ago  │</p>
  </div>
</div>
    <p style="margin: 1em 0;">Overview</p>
    <p style="margin: 1em 0;">Recent Activity</p>
    <p style="margin: 1em 0;">Quick Actions</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">+ New User</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">+ New Post</button>  <button style="border: 1px solid black; padding: 4px 12px; background: white;">View Reports</button>
</div>
```

<!-- tabs:end -->

## Use Case

Ideal for admin dashboards, analytics views, and data overview pages. Common in:
- SaaS admin panels
- Analytics dashboards
- Project management tools
- E-commerce backends

## Implementation Notes

When implementing this wireframe:
- Use real-time data updates for metrics
- Consider pagination for activity feed
- Add loading states for data fetching
- Implement responsive grid for metric cards
- Use appropriate icon library for emojis/symbols

## Components

- **Metrics Cards**: Display KPIs with trend indicators
- **Activity Feed**: Chronological list of recent events
- **Header Bar**: Navigation, search, and user controls
- **Action Buttons**: Common operations for quick access

---

[Download as text file](02-dashboard.txt) | [Back to Examples](README.md)
