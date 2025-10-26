# Dashboard Example

An admin dashboard with metrics cards, activity feed, and quick actions.

## Features

- Header with search, user menu, settings, and navigation
- Metrics cards with trend indicators (↑ ↓)
- Recent activity feed with timestamps
- Quick action buttons
- Clean, organized layout

## Wireframe

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
