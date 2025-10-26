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
  <header style="padding: 16px; border-bottom: 1px solid black; display: flex; justify-content: space-between; align-items: center;">
    <strong>Dashboard</strong>
    <div style="display: flex; gap: 16px; align-items: center;">
      <input type="text" placeholder="🔍 Search..." style="border: 1px solid black; padding: 4px 8px;">
      <span style="border: 1px solid black; padding: 4px 8px;">@user</span>
      <button style="border: 1px solid black; padding: 4px 8px; background: white;">⚙</button>
      <button style="border: 1px solid black; padding: 4px 8px; background: white;">≡</button>
    </div>
  </header>

  <div style="padding: 24px;">
    <h3 style="margin-bottom: 16px;">Overview</h3>

    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
      <div style="border: 1px solid black; padding: 16px; flex: 1; text-align: center;">
        <div style="font-size: 0.9em; margin-bottom: 8px;">Total Users</div>
        <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 4px;">12,543</div>
        <div style="color: green;">↑ 12%</div>
      </div>
      <div style="border: 1px solid black; padding: 16px; flex: 1; text-align: center;">
        <div style="font-size: 0.9em; margin-bottom: 8px;">Revenue</div>
        <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 4px;">$45,231</div>
        <div style="color: green;">↑ 8%</div>
      </div>
      <div style="border: 1px solid black; padding: 16px; flex: 1; text-align: center;">
        <div style="font-size: 0.9em; margin-bottom: 8px;">Active</div>
        <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 4px;">1,829</div>
        <div style="color: red;">↓ 3%</div>
      </div>
    </div>

    <h3 style="margin-bottom: 12px;">Recent Activity</h3>
    <div style="border: 1px solid black; padding: 16px; margin-bottom: 24px;">
      <div style="margin-bottom: 8px;">• New user registration: john@example.com <span style="float: right;">2m ago</span></div>
      <div style="margin-bottom: 8px;">• Payment received: $99.00 <span style="float: right;">5m ago</span></div>
      <div style="margin-bottom: 8px;">• Support ticket created: #12345 <span style="float: right;">15m ago</span></div>
      <div>• New blog post published: "Getting Started" <span style="float: right;">1h ago</span></div>
    </div>

    <h3 style="margin-bottom: 12px;">Quick Actions</h3>
    <div style="display: flex; gap: 8px;">
      <button style="border: 1px solid black; padding: 8px 16px; background: white;">+ New User</button>
      <button style="border: 1px solid black; padding: 8px 16px; background: white;">+ New Post</button>
      <button style="border: 1px solid black; padding: 8px 16px; background: white;">View Reports</button>
    </div>
  </div>
</div>

#### **HTML Code**

```html
<div style="border: 1px solid black;">
  <!-- Header -->
  <header style="padding: 16px; border-bottom: 1px solid black; display: flex; justify-content: space-between; align-items: center;">
    <strong>Dashboard</strong>
    <div style="display: flex; gap: 16px; align-items: center;">
      <input type="text" placeholder="🔍 Search..." style="border: 1px solid black; padding: 4px 8px;">
      <span style="border: 1px solid black; padding: 4px 8px;">@user</span>
      <button style="border: 1px solid black; padding: 4px 8px; background: white;">⚙</button>
      <button style="border: 1px solid black; padding: 4px 8px; background: white;">≡</button>
    </div>
  </header>

  <!-- Main content -->
  <div style="padding: 24px;">
    <h3 style="margin-bottom: 16px;">Overview</h3>

    <!-- Metrics cards -->
    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
      <div style="border: 1px solid black; padding: 16px; flex: 1; text-align: center;">
        <div style="font-size: 0.9em; margin-bottom: 8px;">Total Users</div>
        <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 4px;">12,543</div>
        <div style="color: green;">↑ 12%</div>
      </div>
      <div style="border: 1px solid black; padding: 16px; flex: 1; text-align: center;">
        <div style="font-size: 0.9em; margin-bottom: 8px;">Revenue</div>
        <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 4px;">$45,231</div>
        <div style="color: green;">↑ 8%</div>
      </div>
      <div style="border: 1px solid black; padding: 16px; flex: 1; text-align: center;">
        <div style="font-size: 0.9em; margin-bottom: 8px;">Active</div>
        <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 4px;">1,829</div>
        <div style="color: red;">↓ 3%</div>
      </div>
    </div>

    <!-- Recent activity -->
    <h3 style="margin-bottom: 12px;">Recent Activity</h3>
    <div style="border: 1px solid black; padding: 16px; margin-bottom: 24px;">
      <div style="margin-bottom: 8px;">• New user registration: john@example.com <span style="float: right;">2m ago</span></div>
      <div style="margin-bottom: 8px;">• Payment received: $99.00 <span style="float: right;">5m ago</span></div>
      <div style="margin-bottom: 8px;">• Support ticket created: #12345 <span style="float: right;">15m ago</span></div>
      <div>• New blog post published: "Getting Started" <span style="float: right;">1h ago</span></div>
    </div>

    <!-- Quick actions -->
    <h3 style="margin-bottom: 12px;">Quick Actions</h3>
    <div style="display: flex; gap: 8px;">
      <button style="border: 1px solid black; padding: 8px 16px; background: white;">+ New User</button>
      <button style="border: 1px solid black; padding: 8px 16px; background: white;">+ New Post</button>
      <button style="border: 1px solid black; padding: 8px 16px; background: white;">View Reports</button>
    </div>
  </div>
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
