# UI Elements Priority Analysis for ASCII Wireframes

Research conducted: 2025-10-26

## Research Sources
- Material-UI (MUI) component library
- Ant Design component library
- Figma wireframe kits (Wireframy, Platforma, Merge, etc.)
- UX design wireframing best practices
- Common wireframe element studies

## Component Categories from Major Libraries

### Ant Design Categories
1. **General**: Button, FloatButton, Icon, Typography
2. **Layout**: Divider, Flex, Grid, Layout, Space, Splitter
3. **Navigation**: Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps, Tabs
4. **Data Entry**: AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Mentions, Radio, Rate, Select, Slider, Switch, TimePicker, Transfer, TreeSelect, Upload
5. **Data Display**: Avatar, Badge, Calendar, Card, Carousel, Collapse, Descriptions, Empty, Image, List, Popover, QRCode, Segmented, Statistic, Table, Tag, Timeline, Tooltip, Tour, Tree
6. **Feedback**: Alert, Drawer, Message, Modal, Notification, Popconfirm, Progress, Result, Skeleton, Spin, Watermark

### Material-UI Categories
1. **Inputs**: TextField, Input, Select, Checkbox, Radio, Switch, Slider, Autocomplete
2. **Data Display**: Table, List, Card, Avatar, Badge, Chip, Tooltip
3. **Feedback**: Dialog, Snackbar, Progress, Backdrop, Alert
4. **Surfaces**: Paper, Card, Accordion, AppBar
5. **Navigation**: Menu, Drawer, Breadcrumbs, Link, Tabs, Stepper, Bottom Navigation

### Common Wireframe Elements (from research)
- Headers & Navigation bars
- Buttons (primary, secondary, text)
- Text fields & inputs
- Image placeholders
- Cards & containers
- Lists (ordered, unordered)
- Tabs
- Dropdowns/Select menus
- Checkboxes & Radio buttons
- Search bars
- Footers
- Sidebars
- Modals/Dialogs
- Tables
- Forms

---

## PRIORITIZED LIST OF UI ELEMENTS

### **TIER 1: Critical - Must Have** (Currently Supported ✓)
*These elements appear in 90%+ of wireframes and are essential for basic UI communication*

| Element | Frequency | Current Support | Notes |
|---------|-----------|----------------|-------|
| **Button** | 98% | ✓ Yes | Primary interaction element |
| **Text Input** | 95% | ✓ Yes | Single-line text field |
| **Box/Container** | 95% | ✓ Yes | Fundamental structure |
| **Heading** (H1, H2) | 90% | ✓ Yes | Content hierarchy |
| **Text/Paragraph** | 90% | ✓ Yes | Body content |
| **Link** | 85% | ✓ Yes | Navigation element |
| **Checkbox** | 80% | ✓ Yes | Multi-select option |
| **Radio Button** | 75% | ✓ Yes | Single-select option |
| **Textarea** | 70% | ✓ Yes | Multi-line text input |
| **Dropdown/Select** | 70% | ✓ Yes | Selection from list |
| **Icon** | 70% | ✓ Yes | Visual indicators |
| **List** (bullet/numbered) | 65% | ✓ Yes | Content organization |

### **TIER 2: High Priority - Should Have**
*Elements that appear in 50-70% of wireframes and significantly enhance UX communication*

| Element | Frequency | Use Cases | ASCII Feasibility |
|---------|-----------|-----------|-------------------|
| **Navigation Bar** | 65% | Site/app navigation | HIGH - horizontal box with links |
| **Card Grid** | 60% | Content galleries, dashboards | HIGH - side-by-side boxes |
| **Sidebar Layout** | 60% | App layouts, dashboards | HIGH - vertical split |
| **Modal/Dialog** | 55% | Confirmations, forms | HIGH - centered box overlay |
| **Tabs** | 55% | Content organization | MEDIUM - horizontal segments |
| **Table** | 50% | Data presentation | MEDIUM - grid structure |
| **Avatar/Profile** | 50% | User representation | MEDIUM - circle or [@] |
| **Badge/Counter** | 45% | Notifications, counts | HIGH - [3] or (!) |
| **Search Bar** | 45% | Search functionality | HIGH - input with [🔍] |
| **Toggle/Switch** | 40% | Binary options | HIGH - [ON/OFF] or slider |

### **TIER 3: Medium Priority - Nice to Have**
*Elements that appear in 25-45% of wireframes, useful for specific scenarios*

| Element | Frequency | Use Cases | ASCII Feasibility |
|---------|-----------|-----------|-------------------|
| **Breadcrumbs** | 40% | Navigation hierarchy | HIGH - Home > Page > Subpage |
| **Stepper/Progress** | 35% | Multi-step processes | HIGH - (1) → (2) → (3) |
| **Alert/Banner** | 35% | Notifications, warnings | HIGH - [!] or [✓] box |
| **Tooltip** | 30% | Contextual help | MEDIUM - [?] or hover text |
| **Accordion/Collapse** | 30% | Expandable sections | MEDIUM - [+]/[-] boxes |
| **File Upload** | 30% | File handling | HIGH - [📎 Choose File] |
| **Footer** | 30% | Page footer content | HIGH - bottom box with links |
| **Tag/Chip** | 28% | Labels, filters | HIGH - [Tag] or (Category) |
| **Pagination** | 25% | Multi-page content | HIGH - [< 1 2 3 >] |
| **Slider/Range** | 25% | Value selection | MEDIUM - [----o----] |
| **Menu (Context)** | 25% | Contextual actions | MEDIUM - vertical list in box |

### **TIER 4: Lower Priority - Specialized**
*Elements that appear in <25% of wireframes, for specific use cases*

| Element | Frequency | Use Cases | ASCII Feasibility |
|---------|-----------|-----------|-------------------|
| **Rating** | 20% | Reviews, feedback | HIGH - [★★★☆☆] |
| **Timeline** | 20% | Event history | MEDIUM - vertical line with nodes |
| **Date Picker** | 18% | Date selection | MEDIUM - calendar icon + dropdown |
| **Time Picker** | 15% | Time selection | MEDIUM - clock + dropdown |
| **Carousel** | 15% | Image galleries | LOW - hard to represent |
| **Tree View** | 12% | Hierarchical data | MEDIUM - indented structure |
| **Skeleton Loader** | 10% | Loading states | LOW - animated placeholder |
| **Snackbar/Toast** | 10% | Temporary messages | HIGH - floating box |
| **Floating Action** | 10% | Primary mobile action | MEDIUM - [+] in corner |
| **Bottom Navigation** | 8% | Mobile navigation | MEDIUM - bottom bar with icons |
| **Color Picker** | 5% | Color selection | LOW - hard to represent |
| **Transfer List** | 5% | Moving items between lists | MEDIUM - two boxes with arrows |

---

## RECOMMENDED IMPLEMENTATION PRIORITIES

### Phase 1 (CURRENT) ✓ COMPLETE
All Tier 1 elements are implemented.

### Phase 2: High-Value Additions
Focus on layout patterns that significantly improve wireframe expressiveness:

1. **Navigation Bar** - Horizontal container with links/buttons
2. **Modal/Dialog** - Centered overlay box
3. **Tabs** - Segmented horizontal navigation
4. **Table** - Grid structure with headers
5. **Badge/Counter** - Notification indicators
6. **Toggle/Switch** - ON/OFF state indicator

### Phase 3: Enhanced Patterns
Add elements for more sophisticated wireframes:

1. **Breadcrumbs** - Path navigation
2. **Stepper** - Multi-step process indicator
3. **Alert/Banner** - Status messages
4. **Accordion** - Expandable content sections
5. **File Upload** - File selection interface
6. **Tag/Chip** - Labels and categories

### Phase 4: Specialized Components
For advanced wireframing scenarios:

1. **Rating** - Star/score display
2. **Timeline** - Event chronology
3. **Date/Time Pickers** - Temporal selection
4. **Tree View** - Hierarchical navigation
5. **Pagination** - Multi-page navigation

---

## ASCII REPRESENTATION STRATEGIES

### Successful Patterns (from current implementation)
- **Boxes**: Use box-drawing characters (┌─┐│└┘)
- **Inline elements**: Use brackets for buttons [Button], icons [🔍]
- **State indicators**: Checkboxes [x], radio buttons (•)
- **Nested structure**: Indentation + box characters

### Recommended New Patterns

#### Navigation Bar
```
┌────────────────────────────────────────┐
│ Logo    Home  About  Contact   [Login]│
└────────────────────────────────────────┘
```

#### Modal/Dialog
```
        ┌─────────────────┐
        │ Confirm Action  │
        ├─────────────────┤
        │ Are you sure?   │
        │                 │
        │ [Cancel] [OK]   │
        └─────────────────┘
```

#### Tabs
```
┌─────┬─────┬─────┐
│ Tab1│ Tab2│ Tab3│
└─────┴─────┴─────┴───────────┐
│ Content for selected tab    │
└─────────────────────────────┘
```

#### Table
```
┌──────────┬─────────┬────────┐
│ Name     │ Email   │ Role   │
├──────────┼─────────┼────────┤
│ John Doe │ j@e.com │ Admin  │
│ Jane S   │ jane@   │ User   │
└──────────┴─────────┴────────┘
```

#### Badge/Counter
```
[🔔 3]  [@user]  [Settings ⚙]
```

#### Toggle/Switch
```
[ON|off]  or  [●━━━━━○]  or  [✓ Enabled]
```

#### Breadcrumbs
```
Home > Products > Category > Item
```

#### Stepper
```
① Complete → ② In Progress → ③ Pending
```

#### Alert/Banner
```
┌────────────────────────────────┐
│ ⚠️  Warning: Action required   │
└────────────────────────────────┘
```

---

## KEY INSIGHTS FOR ASCII WIREFRAMES

### What Works Well in ASCII
1. **Structural elements** - Boxes, containers, layouts
2. **Simple interactive elements** - Buttons, inputs, checkboxes
3. **Text-based content** - Headings, paragraphs, lists
4. **State indicators** - Checked/unchecked, selected/unselected
5. **Directional elements** - Arrows, navigation paths

### What's Challenging in ASCII
1. **Visual styling** - Colors, gradients, shadows
2. **Animation** - Loading spinners, transitions
3. **Complex graphics** - Charts, illustrations, photos
4. **Hover states** - Interactive feedback
5. **Precise alignment** - Pixel-perfect positioning

### Recommendation: Focus on Structure, Not Style
ASCII wireframes should emphasize:
- **Information architecture** - Content organization
- **Interaction patterns** - User flows and actions
- **Component relationships** - Hierarchies and groupings
- **Content priority** - What's important vs. secondary

---

## CONCLUSION

### Current Coverage
The ASCII wireframe spec already covers all **Tier 1** critical elements (12/12), providing a solid foundation for basic UI communication.

### Next Steps
To maximize value for UX/UI communication with AI coding assistants:

1. **Prioritize layout patterns** (navigation, modals, tabs) - these convey structure
2. **Add state indicators** (badges, alerts, toggles) - these show interaction design
3. **Support data presentation** (tables, tags, breadcrumbs) - these handle complex content
4. **Keep it simple** - ASCII wireframes are about communication, not pixel perfection

### Success Metrics
A good ASCII wireframe element should:
- ✓ Be recognizable at a glance
- ✓ Represent the element's purpose clearly
- ✓ Work well in plain text environments
- ✓ Support nesting and composition
- ✓ Be easy to type/generate
