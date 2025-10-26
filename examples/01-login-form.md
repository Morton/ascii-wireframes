# Login Form Example

A simple authentication form with email/password fields and social login options.

## Features

- Email and password input fields
- "Remember me" checkbox
- Forgot password link
- Social login buttons (Google, GitHub)
- Sign up link for new users

## Wireframe

<!-- tabs:start -->

#### **ASCII Wireframe**

```
┌─────────────────────────────────────┐
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
│                                     │
│  ─────────── or ───────────         │
│                                     │
│  [ Continue with Google ]           │
│  [ Continue with GitHub ]           │
│                                     │
│  Don't have an account? → Sign up   │
│                                     │
└─────────────────────────────────────┘
```

#### **HTML Preview**

<div style="border: 1px solid black; padding: 8px;">
  <p style="margin: 1em 0;">Welcome Back!</p>
    <p style="margin: 1em 0;">Email:</p>
    <input type="text" style="border: 1px solid black; padding: 4px;">
    <p style="margin: 1em 0;">Password:</p>
    <input type="text" style="border: 1px solid black; padding: 4px;">
    <label><input type="checkbox"> Remember me</label>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Sign In</button>
    <a href="#" style="color: black; text-decoration: underline;">→ Forgot password?</a>
    <p style="margin: 1em 0;">─────────── or ───────────</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Continue with Google</button>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Continue with GitHub</button>
    Don't have an account? → Sign up
</div>

#### **HTML Code**

```html
<div style="border: 1px solid black; padding: 8px;">
  <p style="margin: 1em 0;">Welcome Back!</p>
    <p style="margin: 1em 0;">Email:</p>
    <input type="text" style="border: 1px solid black; padding: 4px;">
    <p style="margin: 1em 0;">Password:</p>
    <input type="text" style="border: 1px solid black; padding: 4px;">
    <label><input type="checkbox"> Remember me</label>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Sign In</button>
    <a href="#" style="color: black; text-decoration: underline;">→ Forgot password?</a>
    <p style="margin: 1em 0;">─────────── or ───────────</p>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Continue with Google</button>
    <button style="border: 1px solid black; padding: 4px 12px; background: white;">Continue with GitHub</button>
    Don't have an account? → Sign up
</div>
```

<!-- tabs:end -->

## Use Case

Perfect for authentication pages in web applications. This pattern works well for:
- Login pages
- Sign-up forms
- Authentication modals

## Implementation Notes

When implementing this wireframe:
- Use proper form validation for email/password
- Implement secure password handling
- OAuth integration for social logins
- Responsive design for mobile devices

---

[Download as text file](01-login-form.txt) | [Back to Examples](README.md)
