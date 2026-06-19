---
name: mobile-friendly-ui
description: Use this skill whenever the user wants to make an existing website or web app mobile-friendly or responsive, or asks to fix mobile layout/overflow/scrolling issues, a broken nav on small screens, tiny text or images on phones, or anything similar — especially when they want the current desktop UI left completely untouched. Trigger on phrases like "mobile friendly", "responsive", "doesn't fit on phone/mobile", "overflow on mobile", "hamburger menu", "small screen layout", "works on desktop but not mobile", even if the user doesn't name a specific framework or say "skill". Always use this skill instead of freestyling responsive CSS, because the desktop-safety workflow below is easy to violate by accident.
---

# Mobile-Friendly UI (Desktop-Safe)

## The one rule that matters

**Add mobile styling. Never edit or delete anything that currently controls the desktop view.**

Why this matters: a CSS rule with no media query applies at *every* screen width, including desktop. If you "fix" mobile by tweaking an existing rule (e.g. changing a fixed width, font-size, or flex-direction in place), you've just changed the desktop UI too — even though it wasn't your intent. The only way to guarantee desktop is untouched is to make every mobile fix *additive*: new rules, gated so they only apply below a breakpoint, sitting alongside the old ones rather than replacing them.

Treat this as a hard constraint, not a style preference. If a fix can't be expressed as an addition, find a different fix rather than editing the base rule.

## Workflow

### 1. Survey before touching anything

Don't assume a tech stack. Look at what's actually there:
- Check file extensions and config files (`package.json`, `tailwind.config.js`, `*.vue`, `*.jsx`/`*.tsx`, plain `.css`/`.scss`, etc.) to see how styling is done.
- Find where today's "default" styles live — that's the desktop UI you must not disturb.
- Search for any existing `@media` queries or responsive utility classes (e.g. Tailwind's `sm:`/`md:`/`lg:` prefixes) so you follow the project's existing pattern instead of inventing a new one.
- Check for a viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`. A missing or wrong viewport tag is the single most common cause of "everything is tiny/overflowing on mobile," and adding it is a pure addition — safe to do immediately.

### 2. Diagnose what's actually causing the overflow

Read `references/overflow-causes.md` for the full checklist (fixed pixel widths, non-wrapping flex rows, oversized images, wide tables, fixed-offset absolute positioning, etc.). Identify the specific cause before writing any CSS — don't guess-and-check with broad changes.

### 3. Pick a breakpoint and write additive fixes

Common breakpoints: `768px` (tablet) and `480px` (phone) are reasonable defaults if the project has no convention; match the project's existing breakpoints if it has any.

How to make a fix additive depends on what you found in step 1 — see `references/stack-patterns.md` for concrete patterns (plain CSS, Tailwind, CSS-in-JS/styled-components, inline styles in React/Vue). The short version in every case: the desktop rule/class stays exactly as it is; the mobile behavior is a new rule layered on top that only activates below the breakpoint.

### 4. Verify desktop is untouched

This step is not optional — it's the actual point of the skill:
- Diff every file you changed. Every added or changed line must be inside a `@media (max-width: ...)` block, behind a responsive prefix class, or otherwise gated to apply only below the breakpoint. If a diff line sits outside one of those, stop and fix it before continuing.
- If you can render the page, compare it at a desktop width (≥1280px) before and after your changes — it should look identical. Then check at common mobile widths (375px and 414px are good defaults) to confirm the overflow is actually fixed.

### 5. Report back clearly

Tell the user, per file: what was added and why. Explicitly confirm that every change is additive/scoped to mobile, so they don't have to take it on faith — point to the specific media query or prefix that scopes each change.

## Reference files

- `references/overflow-causes.md` — checklist of what typically causes mobile overflow, and the additive fix for each
- `references/stack-patterns.md` — how to express an "additive-only" fix in plain CSS, Tailwind, CSS-in-JS, and inline-styled components
