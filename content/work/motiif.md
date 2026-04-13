---
title: "Motiif"
description: "A runtime motion and design token system for Tailwind CSS v4. Pure CSS, theme-switchable, reduced-motion aware. No JavaScript runtime, no build step for the tokens themselves."
category: "Open Source"
year: 2026
span: 12
tags: ["CSS", "Design Systems", "Motion", "Tailwind v4"]
thumbnail: "/motiif-thumbnail.svg"
heroCarousel: true
lede: "A CSS token system for live-swapping motion and visual identity at runtime. Extend it, theme it, test it. No JavaScript, no build step."
---

<div class="work-section work-section--solo">
<div class="work-section-body">
<p><a href="https://trv-ops-sector9.github.io/motiif/" target="_blank" rel="noopener">Open live site →</a></p>
</div>
</div>

<div class="callout">
<span class="callout-label">Hero demo</span>
<h3>Fleet Ops</h3>
<p>A mission control dashboard for autonomous vehicle fleet management. Leaflet map, vehicle telemetry, incident review workflow. Built as proof that Motiif tokens hold up under real product conditions. Dense motion theme throughout. Every transition, every press state, every toast — all running off the same token layer.</p>
</div>

<div class="work-section work-section--solo">
<div class="work-section-body">
<h3>The problem</h3>
<p>Most design systems hardcode motion per-component. No shared vocabulary. No global lever. Motiif decouples what gets animated from how it moves. One attribute on the root element rewires duration, easing, and keyframe variants across every animated element on the page. Swap a theme live and prototype a completely different look and feel in seconds.</p>
</div>
</div>

<div class="work-section work-section--solo">
<div class="work-section-body">
<h3>Motion themes</h3>
<p>Four presets. Standard: neutral ease-out, safe for any product. Dense: compressed curves for data-heavy interfaces. Expressive: spring overshoot and bounce, for consumer products. Relaxed: slow, fluid transitions for editorial and ambient contexts. Reduced: minimal motion, respects <code>prefers-reduced-motion</code> and a manual override attribute. Adding a new preset is one CSS file.</p>
</div>
</div>

<div class="work-section work-section--solo">
<div class="work-section-body">
<h3>Design themes</h3>
<p>Ships with three visual identities. Graphite: design-tool neutral. Guchi: luxury fashion, warm and diffused. Tactical: FUI command-and-control, no shadows, tight radius. Each changes radius, shadow style, font family, border-width, letter-spacing, and font-weight. Not just color. New themes drop in the same way. One CSS file, zero component changes.</p>
</div>
</div>

<div class="work-section work-section--solo">
<div class="work-section-body">
<h3>Architecture</h3>
<p>Two-layer token architecture. Primitives define durations and curves per theme. Alias tokens inside Tailwind v4's <code>@theme</code> block generate utility classes from those primitives at runtime. A semantic bridge layer maps intent variables (<code>--motion-curve-navigation</code>, <code>--motion-curve-press-release</code>) to the active theme. Components reference intent, never the theme directly.</p>
<p>Adding a new theme is one CSS file. No component changes, no bridge layer changes. Output is vanilla CSS custom properties, so tokens export cleanly to any platform or framework. Adaptable by design.</p>
</div>
</div>

<p class="kicker">Built for engineers to implement and designers to reason about.</p>
