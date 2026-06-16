---
name: arena-play-design
description: Use this skill to generate well-branded interfaces and assets for Arena Play (VR & gaming venue, Alba Iulia), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (tokens, components, guidelines, ui_kits).

Arena Play is a futurist-premium VR/gaming brand: neon cyan (#00E5FF) / violet (#7B2EFF) / green (#00FF94) on a near-black void (#050816), Space Grotesk display + Sora body, glowing pill CTAs and dark glass cards. Copy is in Romanian, addresses the reader as "tu", energetic and experience-first. See `readme.md` → CONTENT FUNDAMENTALS and VISUAL FOUNDATIONS.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files that link `styles.css` for the tokens. The `ui_kits/website/` folder is a working multi-screen recreation you can lift sections from.

If working on production code, copy assets and read the rules here to become an expert in designing with this brand. Reusable React primitives live in `components/core/` (Button, Badge, Card, GameCard, PriceCard, StatCounter, SectionHeading, Input) — each has a `.prompt.md` with usage.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
