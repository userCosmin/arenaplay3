# Arena Play — Website UI Kit

Interactive, multi-screen recreation of the Arena Play site, built entirely from the design-system components and tokens. Open `index.html`.

## Screens (top-nav switches between them)
- **Acasă** — `Hero` (animated stats, tur-virtual media), `ExperienceGrid` (6 experience types), `PricingStrip` (session tariffs · 30 lei), `FinalCTA`.
- **Jocuri** — `GamesScreen`: real catalog with platform filter chips and `GameCard` grid.
- **Petreceri** — `PartyScreen`: audience cards (copii/adolescenți/adulți), package inclusions, featured `PriceCard` (100 lei/pers).
- **Arena Edu** — `EduScreen`: After School XR — benefits, virtual trips, session flow, schools CTA.
- **Rezervare** — `BookingScreen`: experience picker, date/time, participant stepper, success state.
- Global: `Footer` (program, contact, social) and a fixed `WhatsAppButton`.

## Files
- `index.html` — app shell + view router (React + Babel in-browser).
- `data.js` — real catalog, experiences, image URLs (`window.APData`).
- `ui.jsx` — shared helpers: `Icon` (Lucide), `Orb`, `Reveal`, `Container`.
- `Nav.jsx`, `Hero.jsx`, `ExperienceGrid.jsx`, `Sections.jsx`, `GamesScreen.jsx`, `PartyScreen.jsx`, `EduScreen.jsx`, `BookingScreen.jsx`, `Footer.jsx`.

## Notes
- DS components are read from `window.ArenaPlayDesignSystem_492f49` after loading `../../_ds_bundle.js`.
- Icons use **Lucide** via CDN; brand imagery references CloudFront URLs (see root readme Caveats).
- This is a cosmetic recreation for prototyping — forms don't submit to a backend.
