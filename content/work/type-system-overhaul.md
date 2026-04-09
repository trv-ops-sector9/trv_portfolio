---
title: "Type System Overhaul"
description: "Replacing an ad-hoc 23-style type inventory with a 7-step semantic scale — deployed across web, iOS, and Android in a single design system release."
category: "Design Systems"
year: 2025
span: 4
tags: ["Typography", "Design Systems", "Cross-platform"]
---

## The problem

The audit found 23 distinct font-size/weight combinations in active production use. None of them had names. Engineers referenced them as pixel values in Slack threads. Designers used "the big one" and "the small gray one."

Typography was the most expensive surface area in the system — touched on nearly every screen — and it had no shared language.

## The approach

The new scale has 7 steps, named semantically rather than by size:

`display` → `heading` → `title` → `body` → `label` → `caption` → `micro`

Each step carries default weight, line-height, and letter-spacing values baked in. Overrides exist but require explicit justification in code review. The goal was to make the right choice the easiest choice.

## Cross-platform parity

The hardest part wasn't the scale itself — it was reconciling it across three rendering environments. iOS and Android handle subpixel rendering differently. Web adds variable viewport width. We ended up with a shared naming contract and platform-specific token values, rather than trying to force a single number set across all three.

> Good design systems are translation layers, not universal laws.

## Result

Seven styles replaced twenty-three. The first sprint after rollout, the design team reported zero typography-related Figma comments in code review. The second sprint, the same. It stopped being a thing people had to think about.
