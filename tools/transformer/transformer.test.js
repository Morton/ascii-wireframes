import { describe, it } from 'node:test';
import assert from 'node:assert';
import { transform } from './index.js';

describe('ASCII Wireframe Transformer', () => {
  describe('1. Box Drawing', () => {
    it('should transform a basic box', () => {
      const input = `┌─────────┐
│ Content │
└─────────┘`;

      const expected = `<div style="border: 1px solid black; padding: 8px;">
  Content
</div>`;

      const result = transform(input);
      assert.strictEqual(result.trim(), expected.trim());
    });

    it('should transform nested boxes', () => {
      const input = `┌─────────────────────┐
│ Header              │
├─────────────────────┤
│ ┌─────┐  ┌─────┐   │
│ │ Box │  │ Box │   │
│ └─────┘  └─────┘   │
└─────────────────────┘`;

      const result = transform(input);

      // Should contain outer container
      assert.match(result, /<div style="border: 1px solid black;">/);
      // Should contain header section
      assert.match(result, /Header/);
      // Should contain nested boxes
      assert.match(result, /Box/g);
    });
  });

  describe('2. Interactive Elements', () => {
    it('should transform buttons', () => {
      const input = `[ Submit ]  [ Cancel ]`;

      const result = transform(input);

      assert.match(result, /<button[^>]*>Submit<\/button>/);
      assert.match(result, /<button[^>]*>Cancel<\/button>/);
    });

    it('should transform input fields', () => {
      const input = `[____________]`;

      const result = transform(input);
      assert.match(result, /<input[^>]*type="text"[^>]*>/);
    });

    it('should transform input fields with placeholder', () => {
      const input = `[ Enter text...    ]`;

      const result = transform(input);
      assert.match(result, /<input[^>]*placeholder="Enter text\.\.\."[^>]*>/);
    });

    it('should transform textarea pattern (box with underscores)', () => {
      const input = `┌───────────────────────────────┐
│_______________________________│
│_______________________________│
│_______________________________│
└───────────────────────────────┘`;

      const result = transform(input);
      assert.match(result, /<textarea[^>]*rows="3"[^>]*><\/textarea>/);
    });

    it('should transform checkboxes', () => {
      const input = `[ ] Unchecked    [x] Checked`;

      const result = transform(input);

      // Should have two checkboxes
      assert.match(result, /<input[^>]*type="checkbox"[^>]*>/);
      // One should be checked
      assert.match(result, /<input[^>]*type="checkbox"[^>]*checked[^>]*>/);
      // Should have labels
      assert.match(result, /Unchecked/);
      assert.match(result, /Checked/);
    });

    it('should transform radio buttons', () => {
      const input = `( ) Unselected   (•) Selected`;

      const result = transform(input);

      // Should have two radio buttons
      assert.match(result, /<input[^>]*type="radio"[^>]*>/);
      // One should be checked
      assert.match(result, /<input[^>]*type="radio"[^>]*checked[^>]*>/);
      assert.match(result, /Unselected/);
      assert.match(result, /Selected/);
    });

    it('should transform dropdowns', () => {
      const input = `[ Select...  ▾ ]`;

      const result = transform(input);
      assert.match(result, /<select[^>]*>/);
      assert.match(result, /<option>Select\.\.\.<\/option>/);
    });

    it('should transform links with arrow', () => {
      const input = `→ Learn More`;

      const result = transform(input);
      assert.match(result, /<a[^>]*href="#"[^>]*>→ Learn More<\/a>/);
    });

    it('should transform links with trailing arrow', () => {
      const input = `Learn More →`;

      const result = transform(input);
      assert.match(result, /<a[^>]*href="#"[^>]*>Learn More →<\/a>/);
    });

    it('should transform icons', () => {
      const input = `[🔍] [≡] [⚙]`;

      const result = transform(input);
      assert.match(result, /🔍/);
      assert.match(result, /≡/);
      assert.match(result, /⚙/);
    });
  });

  describe('3. Lists', () => {
    it('should transform simple lists', () => {
      const input = `- Item 1
- Item 2
- Item 3`;

      const result = transform(input);

      assert.match(result, /<ul[^>]*>/);
      assert.match(result, /<li>Item 1<\/li>/);
      assert.match(result, /<li>Item 2<\/li>/);
      assert.match(result, /<li>Item 3<\/li>/);
      assert.match(result, /<\/ul>/);
    });
  });

  describe('4. Text Hierarchy', () => {
    it('should transform large headings', () => {
      const input = `# Large Heading`;

      const result = transform(input);
      assert.match(result, /<h1[^>]*>Large Heading<\/h1>/);
    });

    it('should transform medium headings', () => {
      const input = `## Medium Heading`;

      const result = transform(input);
      assert.match(result, /<h2[^>]*>Medium Heading<\/h2>/);
    });

    it('should transform regular text', () => {
      const input = `Regular body text`;

      const result = transform(input);
      assert.match(result, /<p[^>]*>Regular body text<\/p>/);
    });
  });

  describe('5. Layout and Spacing', () => {
    it('should preserve nested structure hierarchy', () => {
      const input = `┌─────────────────────────────┐
│ App                         │
├─────────────────────────────┤
│                             │
│  Main Content Area          │
│                             │
│  ┌──────────────────────┐   │
│  │ Nested Component     │   │
│  └──────────────────────┘   │
└─────────────────────────────┘`;

      const result = transform(input);

      // Should have nested structure
      assert.match(result, /Main Content Area/);
      assert.match(result, /Nested Component/);
    });
  });

  describe('6. Common Patterns', () => {
    describe('Navigation Header', () => {
      it('should transform navigation header', () => {
        const input = `┌─────────────────────────────────────┐
│ Logo        Home  About  Contact [≡]│
└─────────────────────────────────────┘`;

        const result = transform(input);

        assert.match(result, /<header[^>]*>/);
        assert.match(result, /Logo/);
        assert.match(result, /Home/);
        assert.match(result, /About/);
        assert.match(result, /Contact/);
      });
    });

    describe('Form Layout', () => {
      it('should transform a contact form', () => {
        const input = `┌─────────────────────────────────────┐
│ Contact Form                        │
├─────────────────────────────────────┤
│                                     │
│  Name: [____________________]       │
│                                     │
│  Email: [____________________]      │
│                                     │
│  [ ] Subscribe to newsletter        │
│                                     │
│  [ Submit ]         [ Cancel ]      │
│                                     │
└─────────────────────────────────────┘`;

        const result = transform(input);

        assert.match(result, /<form[^>]*>/);
        assert.match(result, /Contact Form/);
        assert.match(result, /Name:/);
        assert.match(result, /Email:/);
        assert.match(result, /<input[^>]*type="text"[^>]*>/);
        assert.match(result, /<input[^>]*type="checkbox"[^>]*>/);
        assert.match(result, /<button[^>]*>Submit<\/button>/);
        assert.match(result, /<button[^>]*>Cancel<\/button>/);
      });
    });

    describe('Card Layout', () => {
      it('should transform card layout with images and buttons', () => {
        const input = `┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ [Image]      │  │ [Image]      │  │ [Image]      │
│              │  │              │  │              │
│ Title        │  │ Title        │  │ Title        │
│ Description  │  │ Description  │  │ Description  │
│              │  │              │  │              │
│ [ View ]     │  │ [ View ]     │  │ [ View ]     │
└──────────────┘  └──────────────┘  └──────────────┘`;

        const result = transform(input);

        assert.match(result, /Title/);
        assert.match(result, /Description/);
        assert.match(result, /<button[^>]*>View<\/button>/);
      });
    });
  });

  describe('7. Edge Cases', () => {
    it('should handle empty input', () => {
      const input = '';
      const result = transform(input);
      assert.strictEqual(result, '');
    });

    it('should handle plain text without ASCII art', () => {
      const input = 'Just some plain text';
      const result = transform(input);
      assert.match(result, /<p[^>]*>Just some plain text<\/p>/);
    });

    it('should handle multiline text content', () => {
      const input = `┌─────────────────────┐
│ First line          │
│ Second line         │
│ Third line          │
└─────────────────────┘`;

      const result = transform(input);
      assert.match(result, /First line/);
      assert.match(result, /Second line/);
      assert.match(result, /Third line/);
    });
  });

  describe('8. Complete Examples', () => {
    it('should transform a complete login form', () => {
      const input = `┌─────────────────────────────────────┐
│                                     │
│         Welcome Back!               │
│                                     │
│  Email:                             │
│  [____________________________]     │
│                                     │
│  Password:                          │
│  [____________________________]     │
│                                     │
│  [ ] Remember me                    │
│                                     │
│         [ Sign In ]                 │
│                                     │
│  → Forgot password?                 │
└─────────────────────────────────────┘`;

      const result = transform(input);

      assert.match(result, /Welcome Back!/);
      assert.match(result, /Email:/);
      assert.match(result, /Password:/);
      assert.match(result, /<input[^>]*type="text"[^>]*>/);
      assert.match(result, /<input[^>]*type="checkbox"[^>]*>/);
      assert.match(result, /<button[^>]*>Sign In<\/button>/);
      assert.match(result, /Forgot password\?/);
    });

    it('should transform a dashboard with metrics', () => {
      const input = `┌────────────────────────────────────────────────────────────────┐
│ Dashboard                    [🔍 Search...]  [@user] [⚙] [≡]  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Overview                                                      │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │ Total Users  │  │ Revenue      │  │ Active       │        │
│  │   12,543     │  │   $45,231    │  │   1,829      │        │
│  │   ↑ 12%      │  │   ↑ 8%       │  │   ↓ 3%       │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
│  [ + New User ]  [ + New Post ]  [ View Reports ]            │
└────────────────────────────────────────────────────────────────┘`;

      const result = transform(input);

      assert.match(result, /Dashboard/);
      assert.match(result, /Overview/);
      assert.match(result, /Total Users/);
      assert.match(result, /Revenue/);
      assert.match(result, /Active/);
      assert.match(result, /<button[^>]*>.*New User/);
      assert.match(result, /<button[^>]*>.*New Post/);
      assert.match(result, /<button[^>]*>View Reports/);
    });
  });

  describe('9. Configuration Options', () => {
    it('should support unstyled output option', () => {
      const input = `[ Submit ]`;

      const result = transform(input, { styled: false });

      // Should not contain style attributes
      assert.doesNotMatch(result, /style="/);
      // But should still have the button
      assert.match(result, /<button>Submit<\/button>/);
    });

    it('should support custom styling option', () => {
      const input = `[ Submit ]`;

      const result = transform(input, {
        styled: true,
        styles: {
          button: 'border: 2px solid blue; padding: 10px;'
        }
      });

      assert.match(result, /border: 2px solid blue/);
    });
  });
});
