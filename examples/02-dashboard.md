# Dashboard Example

An admin dashboard with metrics, activity feed, and quick actions.

## Features

- Header with search, user menu, settings, and navigation
- Metrics with trend indicators (↑ ↓)
- Recent activity feed with timestamps
- Quick action buttons
- Clean, organized layout

## Wireframe

<!-- tabs:start -->

#### **ASCII Wireframe**

```wireframe-src
┌──────────────────────────────────────────────────────────┐
│ Dashboard              [🔍 Search...]  [@user] [⚙] [≡]  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Total Users: 12,543  (↑ 12%)                           │
│  Revenue: $45,231  (↑ 8%)                               │
│  Active: 1,829  (↓ 3%)                                  │
│                                                          │
│  Recent Activity                                         │
│  ┌────────────────────────────────────────────────────┐ │
│  │ • New user: john@example.com             2m ago   │ │
│  │ • Payment received: $99.00               5m ago   │ │
│  │ • Support ticket: #12345                15m ago   │ │
│  │ • Blog post: "Getting Started"           1h ago   │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  [ + New User ]  [ + New Post ]  [ View Reports ]      │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

#### **HTML Preview**

<div style="border: 1px solid black;">
  <div style="padding: 8px; border-bottom: 1px solid black;">
    Dashboard              <input type="text" placeholder="🔍 Search..." style="border: 1px solid black; padding: 4px;">  <button style="border: 1px solid black; padding: 4px 12px; background: white;">@user</button> <span style="border: 1px solid black; padding: 2px 6px;">⚙</span> <span style="border: 1px solid black; padding: 2px 6px;">≡</span>
  </div>
  Total
  Users:
  12,543
  ↑
  12%
  Revenue:
  $45,231
  ↑
  8%
  Active:
  1,829
  ↓
  3%
  Recent
  Activity
  <div style="border: 1px solid black; padding: 8px;">
    New user: john@example.com             2m ago
    Payment received: $99.00               5m ago
    Support ticket: 12345                15m ago
    Blog post: "Getting Started"           1h ago
  </div>
  +
  New
  User
  +
  New
  Post
  View
  Reports
</div>

#### **HTML Code**

```html
<div style="border: 1px solid black;">
  <div style="padding: 8px; border-bottom: 1px solid black;">
    Dashboard              <input type="text" placeholder="🔍 Search..." style="border: 1px solid black; padding: 4px;">  <button style="border: 1px solid black; padding: 4px 12px; background: white;">@user</button> <span style="border: 1px solid black; padding: 2px 6px;">⚙</span> <span style="border: 1px solid black; padding: 2px 6px;">≡</span>
  </div>
  Total
  Users:
  12,543
  ↑
  12%
  Revenue:
  $45,231
  ↑
  8%
  Active:
  1,829
  ↓
  3%
  Recent
  Activity
  <div style="border: 1px solid black; padding: 8px;">
    New user: john@example.com             2m ago
    Payment received: $99.00               5m ago
    Support ticket: 12345                15m ago
    Blog post: "Getting Started"           1h ago
  </div>
  +
  New
  User
  +
  New
  Post
  View
  Reports
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
