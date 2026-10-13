# Arpitha Educator — Portfolio
Static site. No build step. No dependencies (Google Fonts via CDN only).

## Edit content
All text, stats, contact, services, experience and image paths: top of `script.js` (`CONFIG`).
Placeholders in `[brackets]` need your details. Set `contact.linkedin` to show LinkedIn.

## Images
- `assets/portrait.jpg` (cover + hero), `assets/about.jpg`
- `assets/services/*.jpg` (names listed in CONFIG)
- `assets/audience/*.jpg`
- `assets/gallery/class-1.jpg` … `class-5.jpg` (only real photos of you teaching)
Missing images show a dashed labelled placeholder.

## Run locally
`python3 -m http.server 8000` in this folder, open http://localhost:8000

## GitHub
`git init && git add . && git commit -m "Portfolio" && git branch -M main`
`git remote add origin <repo-url> && git push -u origin main`

## Vercel
vercel.com → Add New Project → import repo → Framework: Other → Deploy. Open URL, verify.

## Test checklist
Widths 360, 768, 1440 · no horizontal scroll · cover opens on scroll · services stack by scroll
· all nav/mailto/tel/WhatsApp links work · Tab key reaches everything · lightbox: arrows, Esc, close
· OS "reduce motion" on → static layout · images replaced.
