# Portfolio Project Status


## Design Rules

### Aesthetic Direction
Futuristic UI. HUD, heads-up display, instrument panel aesthetic.
Clinical spacing, technical details, corner brackets, precise grid.
Reference points: Haltech ECU interface, Linear, Raycast. Not Dribbble, not Cargo.
Full redesigns are expected and encouraged. The first pass is always too safe. Push further.

**Visual reference (3D render, matte dark surfaces):**
- Gunmetal/charcoal matte panels, precision-cut geometry — no soft radii, no rounded cards
- Red as glowing edge trim and small cube accents only — functional, not decorative
- Ground plane grid lines etched at low opacity
- Dot-matrix texture on surface panels (subtle, not loud)
- Layered depth through shadow and atmospheric haze, not color contrast
- Floating panel forms at varied heights — like a PCB or circuit board layout from above
- The accent (red) appears at corners, edges, and as small isolated marks — never as fill or gradient

### Anti-Patterns — Never Build These
- No tag pills or category label chips on work items
- No centered hero layout
- No card grid
- No social link footer row
- No Inter, Space Grotesk, or system fonts
- No purple gradients
- No work item rows that are visually equal — hierarchy matters
- No asymmetric layouts
- Do not replicate the vmedium.github.io layout or structure

### Typography
- Jost (`--font-display`) for headings and display text
- IBM Plex Sans (`--font-sans`) for body text
- IBM Plex Mono (`--font-mono`) for labels and metadata only
- Type scale should feel considered, not defaulted

### Color
- Near-monochrome base
- Single functional accent, used sparingly
- Dark theme primary
- Color carries meaning, never decoration

### Layout
- Full page redesign is expected and encouraged
- HUD aesthetic applies to every element: nav, layout, work items, footer
- Work items have visual hierarchy based on importance, not equal rows
- Generous negative space used deliberately, not as placeholder
- The sparseness of the content (2 case studies) should feel intentional, not unfinished
- Be bold. Push further than feels comfortable.

### Motion
- Motion is the primary discipline — it must be legible in the site itself
- Every interactive element has a considered hover state
- Scroll behavior is not an afterthought
- No transition: all 0.3s ease anywhere
- Motion communicates state and hierarchy, never decoration

### Differentiators
- The automotive/fabrication background is unusual for a UX designer — let it show in the texture and precision of the design
- The builder/engineer identity should show in the precision of design decisions, not called out explicitly
- Motion as infrastructure, not polish

### Stack
- Next.js 16 App Router, static export
- Motion (Framer Motion v12) for animation
- CSS custom properties for all tokens
- No Tailwind
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
