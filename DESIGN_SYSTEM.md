# GameArena design system

Measured from https://game-arena-theta.vercel.app/ on November 1, 2026, before implementation. Public reference HTML/CSS and browser measurements are retained in `.reference/` and `review/` for comparison. The reference uses Tailwind; this implementation uses local Bootstrap components and its grid, with CSS overrides to reproduce the reference.

## Tokens

| Role | Value |
| --- | --- |
| Page background | `#0b0e13` |
| Accent | `#cbfe1c` |
| Gradient end | `oklch(79.2% .209 151.711)` |
| Main text | `#f1f1f1` |
| Muted text | `oklch(70.7% .022 261.325)` |
| Paragraph text | `oklch(87.2% .01 258.338)` |
| Panels | `oklch(27.8% .033 256.848)` |
| Inputs | `oklch(37.3% .034 259.733)` |
| Borders | `oklch(44.6% .03 256.802)` |
| Contact gradient start | `oklch(21% .034 264.665)` |
| Service cards | `#1a1a1a` |
| Footer | `#000` |
| Display font | Days One, bold synthesized from regular |
| Body font | Chakra Petch, 400/500/600/700 |
| Root size | 14px through 640px; 15px at 641–768px; 16px above 768px |
| Container | 80rem maximum; hero content 78rem maximum |
| Spacing scale | .25, .5, .75, 1, 1.5, 2, 3, 4, 5, 6rem |
| Card / button radius | 1rem / .5rem |

Tokens live in `:root` in `css/style.css`. Fonts, Bootstrap, Font Awesome and images are served locally.

## Responsive plan

| Section | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Header | Fixed; Bootstrap Collapse menu | Collapsed until 1024px | Inline links, notification/message icons, sign in |
| Hero | Centered stacked copy/image; stacked buttons | Stacked; 39rem content maximum; horizontal buttons from 640px | Equal Bootstrap columns; 3.75rem title; 24rem image |
| Games | One 4:3 card | Two cards from 768px | Three cards from 1024px |
| Services | Two square cards per row; 1rem gap | Two cards; 1.5rem gap | Four cards; 1.5rem gap |
| Sponsors | Two continuous opposite moving rows, 6rem logos | Same | Same |
| Team | One column; 20rem portraits | Two columns from 768px | Four columns from 1024px |
| Contact | Stacked panels; name fields stacked | Name fields side by side from 768px | Two equal columns from 1024px |
| Footer | One column | Two from 640px | Four from 1024px |

Sections use 4rem vertical spacing on mobile and 6rem from 768px. Team/contact always use 6rem. Services end in 3rem padding plus a neon divider; sponsors use 5rem padding. Team/contact titles remain 3rem even on mobile, matching the reference. Custom 640px/1024px overrides reconcile the reference breakpoints with Bootstrap's 576px/992px defaults.

## Components and effects

Bootstrap Navbar/Collapse, Carousel, Cards, Buttons, form controls, Collapse gallery, Scrollspy and row/column grids provide the structure and behavior. CSS supplies the gradient frame, heading rules, card overlays, button shine, sponsor animation and team `backdrop-filter: grayscale(1) brightness(.9)` curtain. The curtain covers the portrait and its text, as in the reference; hovering lifts it in .8s. Keyboard focus supports the same reveals, and reduced motion is respected.

The reference has its tournaments section commented out. It is intentionally absent from the page. Tournament calls to action navigate to the contact form with the relevant subject selected. The contact form is a static demonstration that opens an email draft; there is no server-side delivery.

## Verification

Browser screenshots and geometry comparisons cover 1440px, 768px and 390px at a 900px viewport height, with additional breakpoint and interaction checks. See `review/verification.json` for final results. Reference assets are also rendered locally for deterministic comparisons because some large remote images loaded incompletely during the first capture.
