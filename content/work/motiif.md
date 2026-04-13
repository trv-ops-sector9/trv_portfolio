---
title: "Motiif"
description: "A runtime motion and design token system for Tailwind CSS v4. Pure CSS, theme-switchable, reduced-motion aware. No JavaScript runtime, no build step for the tokens themselves."
category: "Open Source"
year: 2026
span: 12
tags: ["CSS", "Design Systems", "Motion", "Tailwind v4"]
lede: "Motion is where I go deep. The longer I worked in design systems, the more I kept running into the same problem: no good tools existed for what I was trying to specify. So I built one. Motiif is a pure CSS token system for motion and visual identity. Four motion personalities. Three design themes. Swap either at runtime with a single DOM attribute. No JavaScript runtime. No recompile."
---

<div class="work-section work-section--solo">
<div class="work-section-body">
<h3>The problem</h3>
<p>Design systems treat motion as a finish coat. Applied at the end, hardcoded per-component, disconnected from visual identity. A sidebar and a dialog and a dashboard end up with completely different motion vocabularies with no way to unify them and no way to change them globally. There is no shared language. There is no lever.</p>
<p>The gap between design and engineering is where the problem lives. Designers can't read motion specs written for code. Engineers implement motion in isolation. Neither side has a shared system to point at.</p>
</div>
</div>

<div class="work-section work-section--solo">
<div class="work-section-body">
<h3>Motion themes</h3>
<p>Four named personalities, each with its own curve vocabulary. Standard: neutral ease-out, safe default. Dense: compressed, minimal transforms, built for data-heavy interfaces. Expressive: spring overshoot and bounce, for consumer-facing products. Precision: fade plus blur, no transforms, sub-100ms, for focus-critical tools. All four support reduced motion via media query and a manual override attribute.</p>
<p>Switching themes hot-swaps durations, easing curves, and keyframe variants across every animated element on the page. Instantly. One attribute change.</p>
</div>
</div>

<div class="work-section work-section--solo">
<div class="work-section-body">
<h3>Design themes</h3>
<p>Three visual identities that go further than color. Radius, shadow style, typography, border-width, letter-spacing, and font-weight all change per theme. Graphite: design-tool neutral, Figma/Cursor feel. Guchi: luxury fashion, warm and diffused. Tactical: FUI command-and-control, no shadows, no radius to speak of.</p>
<p>Same single attribute pattern. Same instant swap. Motion identity and visual identity on the same axis.</p>
</div>
</div>

#### Outcome

Motiif started as a tool for my own work and became a project in its own right. Building it meant designing a system end-to-end, writing the code, solving the product problem, and shipping something real. That is the direction I am pushing: less motion specialist, more designer who can close the gap between what gets designed and what gets built.

<p class="kicker">The gap between design and engineering is where the interesting problems are.</p>

---

## Fleet Ops

A mission control dashboard built on Motiif tokens. Leaflet map, vehicle telemetry, incident review workflow. Dense motion theme throughout. Built as a targeted piece for autonomous vehicle fleet management roles.

**[Open live demo](https://trv-ops-sector9.github.io/motif/)** and select Fleet Ops from the splash screen.
