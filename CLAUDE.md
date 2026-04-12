# Portfolio Project Status

## Style Rules
- No em dashes anywhere in the portfolio. Use periods, commas, colons, or parentheses instead.
- Copy tone: short sentences, design speak, no AI fluff. Traver writes the final copy.

---

## Completed

### Phase 1: Identity & Structure
- Next.js 16 App Router, static export
- Name: Traver Phillips | Email: traver4@gmail.com | Seattle, WA
- Domain: https://traverphillips.com
- Nav: Work, About (all other sections removed)

### Phase 2: Content Cleanup
- Deleted all placeholder content (blog, experiments, projects, old work stubs)
- Deleted app/blog/, app/experiments/, app/projects/ directories

### Phase 3: Fluent 2 Motion Guidelines Case Study
**File:** `content/work/fluent-2-motion-guidelines.md`
**Status:** Complete and committed

Content:
- Motion design lead at Microsoft on Fluent 2 design system
- Worked with Chris Lorance (senior motion designer) and Andrew Falk (supervisor)
- Covers: public guidelines on fluent2.microsoft.design, motion token spec template, Figma interactive component library

Assets in `public/`:
- `fluent-2-motion-hero.mp4` (hero video, 10MB)
- `fluent-2-motion-thumb.png` (card thumbnail, extracted from hero)
- `FLuent2_Motinguidleines_website.png` (Fluent 2 website screenshot)
- `FigmaCompLibrary_01.png` (Figma component library screenshot)
- `SpecTemplate_v2 1.png` (motion token spec template, improved version)

Unused assets still in `public/` (not committed): SpecTemplate_v2.png, v3.png, v4.png

---

## In Progress: Case Study #2 (Demo Reel)

**Concept:** A short demo reel compiling animated artifacts from years of work at Microsoft. Loaders, emoji bursts, motion graphics, product animations, etc.

**Status:** Traver is assembling the reel manually in After Effects.

**Artifact source:** `/Users/traverphillips/Dropbox/!PORTFOLIO_2025/Presentation2025_Artifacts/!Videos/`
- `!ReelPicks/` — final clip picks (do not touch)
- `Reel cuts - Revised.csv` — finalized clip list with in timestamps, bar lengths, priorities

**Revised clip plan (from CSV):**
- 10 two-cut P1 clips (0.5 bar + 1 bar each = 1.5 bars)
- 5 single-cut P1 clips (1 bar or 0.5 bar)
- 5 P2 clips (1 bar each)
- Total: 24 bars = 56.86s at 100.4 BPM
- Bar lengths: 0.5 bar = 1.1952s, 1 bar = 2.3904s

**Music:** `public/MAdvillan_reelsong_cut.mp3` (use this, not the .aac — ADTS seek is broken)
- 56.86s, 24 bars at 100.4 BPM, 4-sec fade out
- Beat offset: 0.5573s from start
- librosa installed: `pip3 install librosa`

**Beat/bar data (100.4 BPM, offset 0.5573s):**
- Beat interval: 0.597610s
- Bar interval: 2.390438s
- 95 beats, 24 bars across 56.86s

**Next steps:**
1. Traver finishes AE edit and exports reel
2. Write short case study copy (let the reel do the talking)
3. Add as second case study on /work

---

## Tech Stack & Key Files

**Structure:**
- Next.js 16 App Router, static export (output: "export")
- Markdown content in `content/work/`
- Parsed via `lib/content.ts`, rendered via `Prose` component (react-markdown + remark-gfm + rehype-raw)

**Critical Files:**
- `app/layout.tsx` - site metadata, Nav, Footer
- `app/work/page.tsx` - Work listing
- `app/work/[slug]/page.tsx` - Work detail (renders hero + prose)
- `components/layout/Nav.tsx` - Navigation (Work, About)
- `components/ui/ProjectCard.tsx` - Card with thumbnail/heroVideo support
- `lib/content.ts` - Markdown parser (extracts heroVideo, thumbnail from frontmatter)
- `content/work/*.md` - Case study content

**Project type fields:** slug, title, description, category, year, span, tags, heroVideo, thumbnail

---

## Notes

- Build passes, site renders at `/work` and `/work/[slug]`
- Static export: all dynamic routes need `generateStaticParams()`
- Video: native HTML5 controls, 16:9 aspect ratio, object-fit: cover
