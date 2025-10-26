# Login Form Example

A simple authentication form with email/password fields and social login options.

## Features

- Email and password input fields
- "Remember me" checkbox
- Forgot password link
- Social login buttons (Google, GitHub)
- Sign up link for new users

## Wireframe


```wireframe-src
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
