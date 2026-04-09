---
title: "Bezier Playground"
description: "Interactive cubic bezier curve editor with easing function output — drag handles, copy the CSS, paste into your stylesheet."
category: "Experiment"
year: 2023
span: 3
tags: ["CSS", "Animation", "Interactive", "Tools"]
---

## What it is

A tool I built because I kept forgetting the syntax for `cubic-bezier()` and the existing tools online are ugly. Four drag handles, real-time curve preview, and a live preview of an element animating with your curve.

Click anywhere on the canvas to add a curve. Drag the control handles. The CSS value updates as you drag.

## Why bezier curves matter

The difference between a good animation and a bad one is almost always the easing curve. Linear motion feels robotic. The default `ease` in CSS is fine for most things but too aggressive for large movements. Getting the curve right is the difference between motion that feels physical and motion that feels like a slideshow.

> Easing is the typography of motion. Most people use the default and move on. The difference shows.

## Output formats

The tool outputs:
- CSS `cubic-bezier(x1, y1, x2, y2)` syntax
- Framer Motion `ease` array format
- A named description (e.g., "fast-out slow-in") for handoff notes

Curves can be saved to a local collection and exported as a JSON token file compatible with standard design token formats.
