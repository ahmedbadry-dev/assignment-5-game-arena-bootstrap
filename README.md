# GameArena

Responsive reconstruction of [the GameArena reference](https://game-arena-theta.vercel.app/) using HTML, Bootstrap 5.3, Font Awesome and custom CSS. No build step or other UI framework is needed.

Open `index.html` directly, or run `python -m http.server 8000` and visit http://localhost:8000. Images, fonts, icons and Bootstrap are all local; rendering requires no external CDN.

- Bootstrap Navbar/Collapse controls the responsive menu, Carousel provides sliding/swiping/keyboard navigation, Collapse opens the full gallery, and Scrollspy highlights section links.
- Bootstrap cards, buttons, form controls and row/column grids are customized through the variables and styles in `css/style.css`.
- The games carousel shows one/two/three cards on mobile/tablet/desktop. `js/main.js` regroups slides at the reference's 768px/1024px breakpoints and preserves the current position.
- Hover/focus reveals game details and lifts a grayscale `backdrop-filter` curtain from team portraits. Reduced motion preferences are respected.
- The contact form validates required fields and opens the visitor's email application. It has no server-side delivery.

See `DESIGN_SYSTEM.md` for measured colors, typography, spacing and responsive behavior. `review/` contains desktop/tablet/mobile screenshots and `verification.json`: 16 widths (320–1920px), component interactions, form validation and JavaScript error checks. `.reference/` contains development-only reference fixtures and browser comparison scripts; it is not needed to serve the page.
