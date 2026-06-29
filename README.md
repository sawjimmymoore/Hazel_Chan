# Hazel — Portfolio Site

A multi-page portfolio for Hazel (Aye Chan Pwint Phyu) — social media
marketer, English educator, and program designer. Built with React +
TypeScript + Vite + Tailwind + Framer Motion, carrying over the real visual
identity, bio, and copy from her original site (hazel-chan.vercel.app),
restructured into separate pages with routing and a dropdown nav.

## Design — matches her real site

- **Dark purple theme** (the same OKLCH violet-on-near-black palette as the
  original), Outfit font, gradient animated name text, pulsing "Welcome to
  my portfolio!" badge, typing animation cycling her real titles.
- **Real photo** in a circular frame with pulsing decorative dots, exactly
  like the original About page.
- **Real moving marquee** for Tools & Technologies — continuous
  requestAnimationFrame scroll, pause-on-hover, using her actual brand SVG
  icons (Canva, CapCut, Meta Suite, Google Workspace, Buffer, Moodle,
  Microsoft Office, Notion).
- **Timeline with connecting line** for work and teaching experience.
- **Certificate carousel** with page dots, matching the original's carousel
  behavior, for all 8 real certificates.
- All bio paragraphs are her **real words**, carried over verbatim from the
  original site's `about_data` — nothing paraphrased into a different voice.

## Pages

- **Home** (`/`) — hero with greeting badge, animated name, typing titles,
  contact row, CTA buttons (Get In Touch / Download Resume), featured
  projects
- **Projects** (`/projects`) — filterable: All Work / Competition Projects /
  Educational Projects. Includes her real awards (P2A Global Sustainable
  Program, Cimso x RSU Hackathon — corrected to **2nd Runner Up**, CSR
  Project, RIC Student Union, Fundraising Project Myanmar) plus her current
  Fen-i programs (Zebra Camp & Pitch International, Young CEO Programme)
- **Experience** (`/experience`) — current Fen-i role, professional
  experience timeline, teaching experience timeline, skills (hard/soft),
  and the real Tools marquee
- **Credentials** (`/credentials`) — Academic Background, General Studies,
  Certifications carousel, References, résumé download
- **About** (`/about`) — her real bio, word for word, plus a new paragraph
  for her current Fen-i chapter
- **Contact** (`/contact`) — real email, phone, LinkedIn, Line, WhatsApp

## Theme switcher — 3 themes

A toggle in the header (sun/moon/sparkle icon, next to the Contact button on
desktop or next to the menu icon on mobile) lets visitors switch between:

- **Original** — her real site's violet-on-near-black look (default)
- **Dark** — a more neutral charcoal dark mode, same violet accent family
- **Light** — bright, clean, white/parchment background, same violet accent
  darkened for contrast

The choice is saved in the visitor's browser (`localStorage`) and persists
across visits. A tiny inline script in `index.html` applies the saved theme
before the page paints, so there's no flash of the wrong theme on load.

**How it works under the hood:** every color in the site (backgrounds, text,
the violet accent, borders) is defined as a CSS variable in
`src/index.css`, with three blocks — `[data-theme="original"]`,
`[data-theme="dark"]`, `[data-theme="light"]` — each setting those
variables to different values. Tailwind classes like `bg-ink-800` or
`text-primary-400` read from those variables, so no component code needed
to change — switching themes just swaps which block of variables is active.
To add a 4th theme later: copy one of the three blocks in `index.css`, give
it new values, and add an entry to the `OPTIONS` array in
`src/components/ThemeToggle.tsx`.

## Profile photo

The hero/About photo is now her real on-stage photo (mic in hand, "HAZEL"
name card visible on the screen behind her) — replacing the earlier
corporate headshot. It's at `public/images/other/profile-new.jpg`. To swap
it again later, drop a new image into `public/images/other/` and update
`SITE.profileImage` in `src/data/content.ts`.

## Fixes from the last round

- **Light theme header/footer flipped to black with white text** — both
  Light and Dark themes now use the same black band with white nav text
  for header/footer, standing apart from the page body color (white page
  in Light, black page in Dark). Only Original keeps her real dark-violet
  band.
- **Contact button and "Get in touch" footer link** were using the page's
  primary accent color, which broke once the header/footer color no
  longer matched the page body (a black button on a now-black header was
  invisible in Light theme). Both now derive their color directly from
  the header/footer's own background, so they always contrast against
  whichever band color is active.


- **Header and footer are now intentional, solid bands again** (not just
  "whatever the page background is," which made them disappear into the
  page). They use their own dedicated color pair, separate from the rest
  of the site: in **Light** theme that's a white band with black text; in
  **Dark** theme, a black band with white text; in **Original**, her real
  dark-violet band with light text, unchanged. The "Contact" button still
  uses the actual brand accent color (violet in Original, white in Dark,
  black in Light) so it reads as a clear call-to-action against its band.
- The theme switcher dropdown and "Projects" dropdown panel in the header
  now match this same band styling, instead of using the general page
  card color.


- **Header and footer were hardcoded dark** — they used a "permanently
  dark" color (meant only for button text) as their background, instead
  of the page's actual background color. That meant in Light theme, the
  header (once scrolled) and the whole footer stayed black while the
  text inside them correctly turned black too (since it does follow the
  theme) — black text on a black bar, invisible. Both now use the real
  page-background variable, so they're white in Light, black in Dark,
  and violet-near-black in Original, matching the text inside them.
- **Timeline dot border** (Experience page) had the same root issue on a
  smaller scale — fixed to match the actual page background so it reads
  as a clean cutout in every theme instead of an unwanted ring in Light.


- **Dark and Light themes simplified to true black/white** — no purple
  tint, no shading tricks. Dark is pure black background with white text;
  Light is pure white background with black text. Only **Original** keeps
  her real violet-on-near-black brand look. Borders, muted text, and
  hover states in Dark/Light now use plain neutral grays instead of any
  purple-derived color.
- **Light theme "shadow"** — the hero greeting badge previously used a
  hardcoded black background that showed up as a dark smudge on light
  backgrounds. Fixed.
- **Category badge on project cards** (top-left of cover images) was
  nearly invisible against lighter cover colors — switched to a fixed
  black scrim + white text, since that badge always sits on artwork, not
  the page background, so it should stay constant regardless of theme.
- **Button text contrast** — primary buttons now use a dedicated
  `--on-primary` variable so the text is always readable against that
  theme's button color (black text in Original since the button is
  light, black text on white buttons in Dark, white text on black
  buttons in Light).

## What changed from the previous draft

The previous draft invented a "stage/pitch" theme not reflective of her
actual brand, used a Fen-i placeholder email, skipped her real bio and
certificates, and didn't carry over the real site's animations (marquee,
typing effect, gradient text, carousel). This version fixes all of that by
reading directly from the `Hazel-Portfolio.zip` source code you provided —
every section, data file, and component was checked against the original.

One real correction made along the way: the Cimso x RSU Hackathon result is
**2nd Runner Up** (per her résumé's education achievements list), not 3rd
place as an earlier draft said — both numbers exist in her materials, so it's
worth confirming with her directly which is accurate for the website.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3001`.

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo, or drag-and-drop deploy via the Vercel
   dashboard.
2. Import the repo — Vercel auto-detects Vite, no config needed.
3. The included `vercel.json` handles client-side routing so refreshing on
   any subpage (e.g. `/projects/zebra-camp-pitch-2026`) won't 404.
4. To reuse `hazel-chan.vercel.app`: rename this new project to `hazel-chan`
   in Vercel, or move the domain over from the old project's Settings →
   Domains.

## Editing content

Everything — bio, projects, experience, education, certificates, skills,
tools — lives in one file: `src/data/content.ts`. Comments inline explain
each section.

## Still worth confirming with Hazel

1. **Hackathon placement** — 2nd Runner Up vs 3rd place (see above).
2. **"Present" roles** — her résumé (made ~Oct 2025) lists several roles as
   "Present" (The English Palette, Myanmar Teacher Organization, Educational
   Mentor). Confirm these are all still current alongside the new Fen-i role.
3. **Domain** — confirm whether to reuse `hazel-chan.vercel.app`.
