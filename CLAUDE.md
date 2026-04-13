# Portfolio Project Status

## Style Rules
- No em dashes anywhere in the portfolio. Use periods, commas, colons, or parentheses instead.
- Copy tone: short sentences, design speak, no AI fluff. Traver writes the final copy.

---

## Live Case Studies

### Case Study 1: Fluent 2 Motion Guidelines
**File:** `content/work/fluent-2-motion-guidelines.md`
**Status:** Complete and live

- Motion design lead at Microsoft on Fluent 2 design system
- Worked with Chris Lorance (senior motion designer) and Andrew Falk (supervisor)
- Covers: public guidelines on fluent2.microsoft.design, motion token spec template, Figma interactive component library

Assets in `public/`:
- `fluent-2-motion-hero.mp4` (hero video, 10MB)
- `fluent-2-motion-thumb.png` (card thumbnail)
- `FLuent2_Motinguidleines_website.png` (Fluent 2 website screenshot)
- `FigmaCompLibrary_01.png` (Figma component library screenshot)
- `SpecTemplate_v2 1.png` (motion token spec template)

### Case Study 2: Motiif
**File:** `content/work/motiif.md`
**Status:** Complete and live

- CSS token system for live-swapping motion and visual identity at runtime
- Carousel hero using `MotiifCarousel` component
- Screenshots in `public/Motiif_SS/img1-6.png`
- Thumbnail: `public/motiif-thumbnail.svg`

---

## In Progress: Case Study #3 (Demo Reel)

**Concept:** A short demo reel compiling animated artifacts from years of work at Microsoft.

**Status:** Traver is assembling the reel manually in After Effects.

**Artifact source:** `/Users/traverphillips/Dropbox/!PORTFOLIO_2025/Presentation2025_Artifacts/!Videos/`
- `!ReelPicks/` — final clip picks (do not touch)
- `Reel cuts - Revised.csv` — finalized clip list with in timestamps, bar lengths, priorities

**Next steps:**
1. Traver finishes AE edit and exports reel
2. Write short case study copy (let the reel do the talking)
3. Add as third case study on /work

---

## Tech Stack & Key Files

**Structure:**
- Next.js 16 App Router, static export (output: "export")
- Markdown content in `content/work/`
- Parsed via `lib/content.ts`, rendered via `Prose` component (react-markdown + remark-gfm + rehype-raw)

**Critical Files:**
- `app/layout.tsx` - site metadata, Nav, Footer
- `app/page.tsx` - Home (project grid + intro label)
- `app/about/page.tsx` - About page
- `app/work/page.tsx` - Work listing
- `app/work/[slug]/page.tsx` - Work detail (renders hero + prose)
- `components/layout/Nav.tsx` - Navigation (Work, About) + theme toggle
- `components/ui/ProjectCard.tsx` - Card with thumbnail support
- `components/ui/MotiifCarousel.tsx` - Carousel for Motiif case study
- `lib/content.ts` - Markdown parser (extracts heroVideo, heroCarousel, thumbnail from frontmatter)
- `content/work/*.md` - Case study content

**Frontmatter fields:** slug, title, description, category, year, span, tags, heroVideo, heroCarousel, thumbnail, lede

**Orphaned routes (not linked from nav, kept for future use):**
- `app/private/` - password-gated page for client work
- `app/store/` - coming soon stub

---

## Notes

- Build passes clean. All routes render.
- Static export: all dynamic routes need `generateStaticParams()`
- Theme toggle: geometric contrast icon (half-filled circle SVG), rotates 180deg in dark mode
