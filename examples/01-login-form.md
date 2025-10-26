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

<div style="border: 1px solid black; padding: 32px; max-width: 400px; margin: 0 auto;">
  <h2 style="text-align: center; margin-bottom: 24px;">Welcome Back!</h2>

  <div style="margin-bottom: 16px;">
    <label style="display: block; margin-bottom: 4px;">Email:</label>
    <input type="email" style="border: 1px solid black; padding: 8px; width: 100%;">
  </div>

  <div style="margin-bottom: 16px;">
    <label style="display: block; margin-bottom: 4px;">Password:</label>
    <input type="password" style="border: 1px solid black; padding: 8px; width: 100%;">
  </div>

  <div style="margin-bottom: 16px;">
    <label>
      <input type="checkbox"> Remember me
    </label>
  </div>

  <div style="text-align: center; margin-bottom: 16px;">
    <button style="border: 1px solid black; padding: 8px 32px; background: white;">Sign In</button>
  </div>

  <div style="text-align: center; margin-bottom: 16px;">
    <a href="#" style="color: black; text-decoration: underline;">→ Forgot password?</a>
  </div>

  <div style="text-align: center; margin: 16px 0; border-top: 1px solid black; padding-top: 16px;">
    or
  </div>

  <div style="margin-bottom: 8px;">
    <button style="border: 1px solid black; padding: 8px; width: 100%; background: white;">Continue with Google</button>
  </div>
  <div style="margin-bottom: 16px;">
    <button style="border: 1px solid black; padding: 8px; width: 100%; background: white;">Continue with GitHub</button>
  </div>

  <div style="text-align: center;">
    Don't have an account? <a href="#" style="color: black; text-decoration: underline;">→ Sign up</a>
  </div>
</div>

#### **HTML Code**

```html
<div style="border: 1px solid black; padding: 32px; max-width: 400px; margin: 0 auto;">
  <h2 style="text-align: center; margin-bottom: 24px;">Welcome Back!</h2>

  <div style="margin-bottom: 16px;">
    <label style="display: block; margin-bottom: 4px;">Email:</label>
    <input type="email" style="border: 1px solid black; padding: 8px; width: 100%;">
  </div>

  <div style="margin-bottom: 16px;">
    <label style="display: block; margin-bottom: 4px;">Password:</label>
    <input type="password" style="border: 1px solid black; padding: 8px; width: 100%;">
  </div>

  <div style="margin-bottom: 16px;">
    <label>
      <input type="checkbox"> Remember me
    </label>
  </div>

  <div style="text-align: center; margin-bottom: 16px;">
    <button style="border: 1px solid black; padding: 8px 32px; background: white;">Sign In</button>
  </div>

  <div style="text-align: center; margin-bottom: 16px;">
    <a href="#" style="color: black; text-decoration: underline;">→ Forgot password?</a>
  </div>

  <div style="text-align: center; margin: 16px 0; border-top: 1px solid black; padding-top: 16px;">
    or
  </div>

  <div style="margin-bottom: 8px;">
    <button style="border: 1px solid black; padding: 8px; width: 100%; background: white;">Continue with Google</button>
  </div>
  <div style="margin-bottom: 16px;">
    <button style="border: 1px solid black; padding: 8px; width: 100%; background: white;">Continue with GitHub</button>
  </div>

  <div style="text-align: center;">
    Don't have an account? <a href="#" style="color: black; text-decoration: underline;">→ Sign up</a>
  </div>
</div>
```

#### **Unstyled HTML**

<div>
  <h2>Welcome Back!</h2>

  <div>
    <label>Email:</label>
    <input type="email">
  </div>

  <div>
    <label>Password:</label>
    <input type="password">
  </div>

  <div>
    <label>
      <input type="checkbox"> Remember me
    </label>
  </div>

  <div>
    <button>Sign In</button>
  </div>

  <div>
    <a href="#">→ Forgot password?</a>
  </div>

  <div>
    or
  </div>

  <div>
    <button>Continue with Google</button>
  </div>
  <div>
    <button>Continue with GitHub</button>
  </div>

  <div>
    Don't have an account? <a href="#">→ Sign up</a>
  </div>
</div>

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
