# traverphillips.com

Portfolio site for Traver Phillips. Motion and product design.

## Stack

- Next.js 16 App Router, static export
- CSS custom properties (design token system)
- Markdown case studies via `content/work/`

## Dev

```bash
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `out/`. Deployed via GitHub Pages on push to `main`.

## Structure

```
app/
  page.tsx          — home (project grid)
  about/            — about page
  work/             — work listing + case study detail
content/work/       — markdown case studies
components/
  layout/Nav.tsx    — navigation + theme toggle
  ui/               — ProjectCard, ProjectGrid, Carousel, Prose, etc.
lib/content.ts      — markdown parser
styles/             — tokens.css, globals.css
public/             — static assets (images, video)
```
