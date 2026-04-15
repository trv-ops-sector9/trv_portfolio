# Portfolio Project Status

## Design Rules

<!-- Paste new design and layout rules here -->

---

## Tech Stack & Key Files

**Structure:**
- Next.js 16 App Router, static export (output: "export")
- Markdown content in `content/work/`
- Parsed via `lib/content.ts`, rendered via `Prose` component (react-markdown + remark-gfm + rehype-raw)

**Fonts (via next/font/google):**
- `--font-display`: Jost — headings
- `--font-sans`: IBM Plex Sans — body
- `--font-mono`: IBM Plex Mono — labels, metadata

**Critical Files:**
- `app/layout.tsx` — site metadata, fonts, Nav, Footer, ScrollToTop, PageTransition
- `app/page.tsx` — Home
- `app/about/page.tsx` — About page
- `app/work/page.tsx` — Work listing
- `app/work/[slug]/page.tsx` — Work detail (renders hero + prose)
- `components/layout/Nav.tsx` — Navigation (Work, About) + theme toggle
- `components/layout/SectionHeader.tsx` — Section header with label, title, description, count
- `components/ui/ProjectCard.tsx` — Card with thumbnail support
- `components/ui/ProjectGrid.tsx` — Renders project list via ProjectCard
- `components/ui/MotiifCarousel.tsx` — Carousel used in Motiif case study
- `components/ui/Carousel.tsx` — Core infinite-loop carousel implementation
- `components/ui/FadeUp.tsx` — Motion fade-up wrapper
- `components/ui/PageTransition.tsx` — Route-keyed page fade/slide transition
- `components/ui/ScrollToTop.tsx` — Instant scroll reset on route change
- `components/ui/Prose.tsx` — Renders markdown content
- `components/ui/ThemeProvider.tsx` — Dark/light theme context
- `lib/content.ts` — Markdown parser
- `lib/assetPath.ts` — Resolves NEXT_PUBLIC_BASE_PATH prefix for static assets
- `lib/utils.ts` — `cn()` class name utility
- `content/work/*.md` — Case study content

**Frontmatter fields:** slug, title, description, category, year, yearDisplay, span, tags, heroVideo, heroCarousel, thumbnail, lede

---

## Carousel

- `components/ui/Carousel.tsx` — infinite loop, clone-first/clone-last for seamless wrap both directions
- Arrows in CSS grid gutters, fade on hover, rapid-click guarded via `isAnimating` ref
- Image click opens lightbox via `createPortal`, locks body scroll, closes on backdrop/image click or Escape
- `onMouseOver` sets `cursor: zoom-in` dynamically
- Autoplay removed

## Notes

- Build passes clean. All routes render.
- Static export: all dynamic routes need `generateStaticParams()`
- Theme toggle: half-filled circle SVG, rotates 180deg in dark mode
- Custom domain: traverphillips.com (GitHub Pages). CNAME in `public/`. No basePath in deploy workflow.
- Do not push without asking Traver first.
