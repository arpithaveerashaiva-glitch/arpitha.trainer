# Arpitha Educator: portfolio

Static site: HTML, CSS, vanilla JS. Only dependencies: Google Fonts (Cormorant Garamond, Manrope) and GSAP from cdnjs (loaded, not yet required; remove the tag if unused).

## Fill in before publishing
- Logo (`assets/logo/arpitha-logo.png`) and portrait (`assets/images/portrait.jpg`) are in place.
- `assets/images/class-1.jpg` to `class-5.jpg`: placeholders swap automatically.
- `index.html`: About biography, Experience dates and responsibilities (marked EDIT).
- `js/main.js` `CONFIG`: add a form `endpoint` (e.g. Formspree) and/or `email`. No contact details are invented.
- Stats are supplied figures; edit in the hero `<dl>`.

## Notes
- The intro draws a hand-built SVG interpretation, then reveals the original logo. Logo parts are not animated separately.
- Theme: system preference first, saved manual choice after.
- Deploy: push to GitHub, import in Vercel as a static site (no build command, root directory).
