# Arena Play — Design System

> **Cea mai modernă destinație de divertisment VR din Alba Iulia.**
> Brand voice, color, type, components and full-screen UI kits for Arena Play.

Arena Play is a virtual-reality & gaming venue inside **Alba Mall, Alba Iulia, România**. Its signature offer is a **free-roam VR arena** (wireless, full-body movement) alongside static VR, PlayStation, and racing/flight simulators. Beyond walk-in play it sells **birthday parties, corporate team-building (XR), and educational programs (Arena Edu / Edu XR)** for schools and after-school centers.

This design system encodes that brand as a neon-on-void, futurist-premium visual language and gives you reusable React components plus a website UI kit to build new pages, mocks, and campaigns fast.

## Sources analysed
- **Live website:** https://arenaplay.ro — Home, `/jocurile-noastre` (games), `/rezervare`, footer, contact. Real copy, services, pricing and the game catalog were extracted from these pages.
- **Brand assets (CDN):** `https://dahhf9dlbgvrg.cloudfront.net/…` — `logo.png`, `arena-play-about-us.jpg`, `playstation.jpg`, `gg1–gg3.jpg`, `eduxr.png`, icon PNGs. These are referenced by URL (cross-origin download was blocked — see Caveats).
- **Brand spec:** color palette, positioning, tone and design direction supplied by the client brief.
- **Contact of record:** Str. T. Vladimirescu nr. 50A (Alba Mall), Alba Iulia · 0768 491 858 · arenaplayalbaiulia@gmail.com · WhatsApp https://wa.me/40768491858

---

## CONTENT FUNDAMENTALS

**Language.** Romanian, always. Diacritics used correctly (ă, â, î, ș, ț). English appears only as established product/tech terms: *VR, XR, free-roam, multiplayer, team building, after school, PlayStation, simulator*.

**Person & address.** Speaks directly to the reader as **tu** ("Rezervă acum", "Descoperă", "Trăiește acțiunea"). The brand refers to itself as **noi / Arena Play**. Warm, inclusive, never corporate-distant.

**Tone.** Modern, energetic, futurist, premium, friendly, experience-first. Verbs of motion and sensation lead: *trăiește, explorează, descoperă, intră, simte*. Lines are punchy and confident, not salesy-loud.

**Casing.**
- The brand name in hero contexts is set ALL-CAPS: **ARENA PLAY**, often with a tagline like *"NEXT LEVEL PARTY"*.
- Eyebrows / kickers are UPPERCASE with wide mono tracking (e.g. `EXPERIENȚE IMERSIVE`).
- Headlines are Title-case or sentence-case display type. Body is sentence case.

**Signature phrases & examples (use as reference, write fresh — do not copy verbatim):**
- *"Intră în viitorul distracției"* (hero CTA concept)
- *"Experiențe imersive care transformă fiecare vizită într-o călătorie de neuitat."*
- *"Trăiește acțiunea cu tot corpul, nu doar cu privirea."* (the free-roam differentiator)
- *"Mai puțin timp pasiv în fața ecranelor. Mai multă explorare, învățare și experiențe memorabile."* (Edu / parents)
- *"Join the game"* (footer sign-off — the one fixed English line).

**CTAs.** Imperative + short: *Rezervă acum, Vezi jocurile, Rezervare petrecere, Solicită ofertă, Vreau card de fidelitate, Scrie-ne pe WhatsApp.*

**Numbers & facts** are stated plainly and confidently: *"16 persoane se pot juca simultan"*, *"Pachete de 3 ore"*, *"100 lei / persoană"*, *"30 lei / sesiune (20 min joc + 10 min igienizare)"*. No invented stats — use the real venue figures.

**Emoji:** not part of the brand. Do not use. Iconography and neon do the expressive work.

---

## VISUAL FOUNDATIONS

**Overall vibe.** A dark, immersive "control-room / portal" aesthetic — think Meta Quest store × Nvidia keynote × PlayStation. Deep near-black space, with cyan/violet/green neon as light sources. Premium restraint: lots of negative space, one or two glowing focal points per view, never a rainbow.

**Color.**
- Background is the void `#050816`; panels are `#0B1020` rising to `#131A33` on hover/elevation.
- **Cyan `#00E5FF`** is primary — main CTAs, links, focal glow.
- **Violet `#7B2EFF`** is secondary — depth, immersion, secondary surfaces, gradient partner.
- **Green `#00FF94`** is accent — "go", success, sparing highlights and price tags.
- Text is white `#FFFFFF` on dark; secondary text is muted slate `#B8C1D9`.
- The brand gradient is cyan→violet (`--ap-gradient-brand`); the "aurora" green→cyan→violet (`--ap-gradient-aurora`) is reserved for hero / display flourishes. Use gradients on text, hairlines and glows — not as full flat page backgrounds.

**Type.** Display = **Space Grotesk** (geometric, slightly technical, premium). Body = **Sora** (clean humanist-geometric). Mono = **Space Mono** for eyebrows, stat readouts, prices, time labels. Headlines run tight (`-0.02em`), large and fluid. Eyebrows are uppercase mono with `0.22em` tracking in cyan.

**Backgrounds.** Radial void glow from the top (`--ap-gradient-void`), optional fine dot/grid texture at very low opacity, and large soft blurred color "orbs" (cyan & violet) bleeding behind hero content. Photography (the venue, headsets, players) appears full-bleed inside rounded cards with a dark gradient scrim so white text stays legible. Imagery vibe: cool, saturated, neon-lit, slightly cinematic.

**Cards.** Surface `#0B1020`, radius `--ap-radius-lg (20px)`, 1px hairline border `rgba(184,193,217,.14)`, subtle top inner sheen. On hover they lift to `#131A33`, the border picks up the cyan tint, and a soft neon glow blooms. No heavy drop shadows — depth comes from glow + border, not gray shadow.

**Borders & hairlines.** 1px, low-opacity slate by default; cyan/violet tinted when active, focused, or featured. Gradient hairlines (`--ap-gradient-brand`) for premium dividers and featured-card outlines.

**Glow & shadow system.** On this dark canvas, neon **glow** is the elevation tool: `--ap-glow-primary-md` etc. give a 1px colored ring + outer bloom. Plain black shadows (`--ap-shadow-*`) are used sparingly for big floating panels. Glass panels add `--ap-inset-top` sheen.

**Radii.** Buttons & chips are pill (`999px`); inputs/small cards `8–14px`; content cards `20px`; large feature panels `28px`.

**Blur / glass.** Sticky nav, floating WhatsApp bubble, and overlays use `backdrop-filter: blur(18px)` over `rgba(11,16,32,.62)` with a hairline border. Use blur only for floating/sticky chrome, not for every card.

**Motion (Framer-Motion-style, restrained).**
- Easing: `--ap-ease-out` (`cubic-bezier(.16,1,.3,1)`) for entrances; `--ap-ease-in-out` for state changes. Durations 140 / 240 / 480ms.
- Reveal on scroll: fade + 16–24px rise, slight stagger across a group.
- Counters animate up to their value once in view.
- Parallax is *discreet* — background orbs drift a little slower than content.
- No bouncy springs on UI chrome, no infinite decorative loops on content.

**Hover / press states.**
- Buttons: hover brightens the fill and intensifies the glow; press scales to `0.97`.
- Cards: hover lifts surface + border tint + glow.
- Links: hover shifts toward cyan-100 / underline grows from left.

**Layout rules.** Mobile-first. Container max `1200px` (wide `1360px`) with fluid gutters. Generous section rhythm (`--ap-section-y`). Sticky translucent top nav; persistent floating WhatsApp button bottom-right on every page. Asymmetric hero (text left, media right) collapsing to stacked on mobile.

---

## ICONOGRAPHY

- **Library:** Use **Lucide** (https://unpkg.com/lucide@latest) via CDN — thin, consistent 2px-stroke line icons that match the techy-premium feel. The live site only ships a few raster PNG icons (phone, Instagram, Facebook) in the footer; Lucide is the system-wide substitute and is flagged as such. Stroke icons are tinted with brand colors (cyan default, green for "available/go", muted slate for inactive).
- **Brand/partner marks:** the Arena Play **logo** (`assets/` reference to CDN `logo.png`) and the ANPC **SOL/SAL** badges in the footer are raster/SVG marks pulled from the live site — do not redraw them.
- **Emoji:** never. **Unicode dingbats:** avoid; prefer Lucide glyphs (`zap`, `gamepad-2`, `headset`/`glasses`, `users`, `cake`, `graduation-cap`, `plane`, `car`, `calendar`, `map-pin`, `clock`, `phone`, `message-circle`).
- **Rule:** never hand-draw bespoke SVG icons or generate images — use Lucide or copy a real brand asset.

---

## INDEX — what's in this system

**Foundations / tokens** (linked by `styles.css`)
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/effects.css` · `tokens/fonts.css` · `tokens/base.css`
- Specimen cards in `guidelines/` (Colors, Type, Spacing, Effects) — shown in the Design System tab.

**Components** (`components/core/`) — reusable React primitives
- `Button`, `Badge`, `Card`, `SectionHeading`, `StatCounter`, `PriceCard`, `GameCard`, `Input`

**UI kit** (`ui_kits/website/`) — full-screen recreations of the Arena Play site
- `Nav`, `Hero`, `ExperienceGrid`, `GamesScreen`, `PartyScreen`, `EduScreen`, `Footer`, `WhatsAppButton`, composed in `index.html`

**Assets** (`assets/`) — brand imagery references (CDN-hosted; see Caveats)

**Skill** — `SKILL.md` makes this downloadable as a Claude Agent Skill.

## Caveats
- **Asset binaries** could not be downloaded (CDN blocked cross-origin reads). Images are referenced by their public CloudFront URLs. If you need them offline, please re-upload the logo and key photos and I'll localize the references.
- **Fonts** (Space Grotesk / Sora / Space Mono) are curated substitutions — the live site's exact fonts were not exposed. Confirm or send the real font files and I'll swap them in.
