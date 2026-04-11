---
title: "Fluent 2 Motion Guidelines"
description: "Shifting motion from an afterthought to a system. Guidelines, tokens, and Figma library for Fluent 2."
category: "Design Systems"
year: 2024
span: 12
tags: ["Fluent 2", "Motion", "Design Systems"]
heroVideo: "/fluent-2-motion-hero.mp4"
thumbnail: "/fluent-2-motion-thumb.png"
---

Motion was everywhere in Fluent 2, but it had no principles. Teams were shipping inconsistent transitions, durations that felt wrong, and motion choices that weren’t grounded in anything. It was treated like polish, something you tack on at the end if there’s time.

I led the motion design work at Microsoft to change that. Worked with **Chris Lorance** (senior motion designer) to build the system, and **Andrew Falk** overseeing to keep it aligned with the bigger picture. I owned about 80% of the work: the documentation, the thinking, the specifications.

## What We Built

**Public guidelines** on [fluent2.microsoft.design/motion](https://fluent2.microsoft.design/motion). The page opens with four motion principles (functional, natural, consistent, appealing) each with video examples showing what they mean in practice. Below that, duration and easing specs with curves and timing values. Then transition types broken out by context: enter/exit for components, elevation changes for layered surfaces, top-level navigation, and container transforms. Choreography covers sequencing and stagger timing for complex multi-element surfaces. The page closes with accessible motion design—reduced motion preferences, vestibular sensitivity, and how to handle both without gutting the experience.

![Fluent 2 Motion Guidelines, live on fluent2.microsoft.design](/FLuent2_Motinguidleines_website.png)

**Motion token specifications** that let teams define motion once and use it everywhere. Duration, easing, direction, timing, structured so it flows from AE into code. I iterated on the spec template across multiple versions. The final one pushed further than what was adopted, with component anatomy, interactive demos, and full timeline visualizations mapping easing curves and sequencing for each transition state. The central design team at Microsoft picked this up and uses it across their systems now.

![Motion Token Spec Template, Dropdown component with timeline visualizations](/SpecTemplate_v2%201.png)

**Figma interactive library** showing the guidelines in context. The existing Figma components were a mess, so I rebuilt them from scratch. Clean, accurate, actually matching the specs. Real components moving the way they should, so teams could drop them into their Figma demos and validate against the system instead of guessing.

![Fluent 2 Motion Component Library for Figma](/FigmaCompLibrary_01.png)

## The Shift

The work wasn’t about making motion flashier. It was about making motion intentional. Before: designers added motion at render time because it looked cool. After: motion is part of the design conversation from the start. Teams reference the guidelines first. People use the vocabulary (choreography, duration, entrance timing) with actual purpose.

It also raised awareness across the org. Motion went from invisible to visible. The number of motion design requests I received increased significantly once teams understood what was possible and how to ask for it. The token spec got adopted by Microsoft’s central design team and is used across their systems now.

Consistency. Confidence. Motion that feels like it belongs to the system instead of a one-off flourish.
