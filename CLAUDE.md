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

**Status:** Clip list finalized. Awaiting `in` timestamps from Traver, then ffmpeg assembly.

**Artifact source:** `/Users/traverphillips/Dropbox/!PORTFOLIO_2025/Presentation2025_Artifacts/!Videos/`
- `!ReelPicks/` — 27 clips (17 P1, 10 P2), matched to CSV
- `!SecondPicks/` — removed/deprioritized clips
- `reel_cuts.csv` — clip list with priorities, bar sequences, in timestamps (fill in `in` column)

**Clip plan:**
- 17 P1 clips, each gets 2 cuts: 0.5 bar (1.20s) + 1 bar (2.39s) = 1.5 bars each
- Exception: Sophia_BG_Ripple gets only 0.5 bar (trimmed to hit 24 bars exactly)
- Total: 24 bars = 56.86s at 100.4 BPM
- Output: 30fps, normalize all clips at stitch time

**Music:** `public/MAdvillan_reelsong_cut.aac`
- Source: Madvillan screen recording via Screenflick (`MAdvillan_reelsong_01.mov`, not committed)
- Cut: 56.86s, starts at beat drop (~0:11 in source), 24 bars at 100.4 BPM, 4-sec fade out
- Beat analysis via librosa (installed: `pip3 install librosa`)
- Cut workflow: snap start/end to bar boundaries using librosa beat_track, cut with ffmpeg from .mov directly (not .aac, seek is broken on ADTS)

**Next steps:**
1. Traver fills in `in` timestamps in reel_cuts.csv
2. Build ffmpeg commands to trim each clip to bar length
3. Stitch into reel at 30fps with music bed
4. Write short case study copy (let the reel do the talking)
5. Add as second case study on /work

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
