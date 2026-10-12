# Product Requirements Document (PRD): GAWALISE NAMBASO TRAIL RUN 2026 Homepage

Dokumen ini disinkronkan dengan implementasi per 2026-10-12. Status setiap fitur ada di
bagian 12. Konten situs ditulis dalam Bahasa Indonesia; PRD ini dalam bahasa Inggris dan
Indonesia campuran sesuai sumber.

## 1. Overview

**Project name:** GAWALISE NAMBASO TRAIL RUN 2026\
**Deliverable:** Homepage only (single-page landing page)\
**Event date:** 20 December 2026\
**Event location:** Desa Kanuna, Central Sulawesi, Indonesia\
**Stack:** Angular 22 (standalone components, signals), TypeScript, Tailwind CSS v4
(`@tailwindcss/postcss`, tokens in `@theme` inside `src/styles.css`)\
**Site language:** Bahasa Indonesia (`<html lang="id">`); only the labels `Sponsored by`,
`Supported by`, `About`, `Home`, `Race Info` and `Elevation Gain`/`Cut-off Time` stay in English.

The flyer (`public/assets/images/gtr-flyer-2026.png`) is the visual reference for the blue
identity and event facts. It is used only as the Open Graph image, not as a page background.

## 2. Goals and Success Criteria

- Event name, date, location and the two race categories are visible in the first screen or a
  short scroll.
- Works on mobile, tablet and desktop without horizontal overflow.
- Every visible navigation item and CTA has a working destination, except `About`
  (see 6.3).
- No invented category data, contact details, social links, sponsors or course details.
- Scope limited to the homepage.

## 3. Event Content (confirmed)

| Field                       | Value                                         |
| --------------------------- | --------------------------------------------- |
| Event name                  | GAWALISE NAMBASO TRAIL RUN 2026               |
| Date                        | 20 Desember 2026                              |
| Location                    | Desa Kanuna (Central Sulawesi)                |
| Category 1                  | 7 KM — Trail Fun, elevation gain 410 m, cut-off 4 Jam |
| Category 2                  | 18 KM — Summit Trail, elevation gain 1.060 m, cut-off 12 Jam |
| Tagline                     | "Bersiaplah menaklukkan jalur alam Gawalise!" |
| Registration URL            | https://gtr-nambaso2026-cloudflare.gawalise-trailrun.workers.dev/ |

Tentang Event copy (as shipped):

> Taklukkan jalur ekstrem Pegunungan Gawalise, Gunung Gawalise - Sulawesi Tengah. Rasakan
> sensasi lari lintas alam megah dengan pemandangan Lembah Palu & Teluk Palu.

Event data lives in `src/app/event-data.ts` (`EVENT`, `CATEGORIES`, `NAV_ITEMS`).

**Open item:** the flyer shows "Elevasi 1860" for the 18K category while this PRD and the site
use 1.060 m. The organizer must confirm which value is correct.

Do not invent: fees, registration status, start times, routes, aid stations, mandatory gear,
phone numbers, e-mail addresses, social links, sponsor names.

## 4. Design

- **Theme:** deep/vivid blue gradients, white text, limited yellow/orange accents. Tokens in
  `src/styles.css` `@theme`: `brand-950 #071A55`, `brand-900 #0A2478`, `brand-800 #1239A8`,
  `brand-700 #1E4ED8`, `brand-500 #3B82F6`, `brand-100 #DBEAFE`, `accent-yellow #FDE725`,
  `accent-orange #FF7A24`.
- **Typography:** Barlow Condensed (700–900) for headings (`h1–h3`, large distance numerals)
  and Inter (400–700) for body, loaded from Google Fonts in `src/index.html` with system
  fallbacks (`--font-display`, `--font-sans`).
- **Motifs:** CSS/SVG mountain contour lines over blue gradients; no remote imagery.
- **Responsive:** mobile-first Tailwind; mobile menu panel below `lg`; hero is single-column
  on mobile and two-column from `md`.

## 5. Assets (verified to exist in `public/assets/images/`)

| File                         | Use                                                    |
| ---------------------------- | ------------------------------------------------------ |
| `gtr-logo.png` (1417×1417)   | Header, hero (≥ `lg`), footer; cropped to content via a `aspect-[1.85]` wrapper |
| `gtr-flyer-2026.png`         | `og:image` only (relative path; no absolute URL known) |
| `logo-itra.png` (597×156)    | Transparent PNG; hero logo row and ITRA/UTMB section   |
| `logo-utmb.png` (740×179)    | Transparent PNG; hero logo row and ITRA/UTMB section   |
| `supporters/champurun.png`, `infotrailrunpalu.png`, `uwetumbu.png`, `wildtrac.png` | `Supported by` logos |

ITRA/UTMB logos are shown as supplied (no recolor or distortion). The site makes no claim of
official affiliation, certification or endorsement.

## 6. Header and Navigation

Component: `SiteHeader` (sticky, translucent `brand-950`). Menu structure comes from
`NAV_ITEMS` so items can later become Angular routes.

| Item        | Behavior                                                        |
| ----------- | --------------------------------------------------------------- |
| Home        | `#home`                                                         |
| Kategori ▾  | Dropdown: `7 KM Trail Fun` → `#trail-fun`, `18 KM Summit Trail` → `#summit-trail` |
| Race Info ▾ | Dropdown: `Lokasi` → `#lokasi`                                  |
| About       | Placeholder, see 6.3                                            |
| Kontak      | `#kontak` (the footer, see 6.4)                                 |
| Daftar Sekarang | Real anchor button to the registration URL, same tab. Right side on desktop; last item in the mobile panel |

### 6.1 Interaction
Dropdowns open by click/tap/keyboard (`aria-expanded`, `aria-controls`), by hover on
hover-capable desktops, close on `Escape` and when focus leaves. Mobile menu is a toggle
(`aria-expanded`) with expandable submenus and closes after selecting a destination. The
active item is tracked with `IntersectionObserver` over `#home`, `#kategori`, `#lokasi`,
`#kontak`. `html` has `scroll-padding-top` so anchors are not hidden under the sticky header.

### 6.2 Routing
Angular Router is installed with an empty route table. No extra pages or routes exist.

### 6.3 About
`About` sits before `Kontak`. No destination has been provided, so it renders as a dimmed,
non-navigating element (`aria-disabled="true"`, no `href`). Set `ABOUT_HREF` in
`src/app/event-data.ts` to enable it.

### 6.4 Kontak
There is no longer a Contact section. `#kontak` is the `id` of the footer, so `Kontak`
scrolls to the footer. The footer currently holds branding only (no contact details), so this
label is **pending a decision** (rename, or add verified contact info). The ITRA/UTMB section
is not the `Kontak` target.

## 7. Homepage Sections (render order in `app.html`)

1. **Header** (`SiteHeader`).
2. **Hero** (`HeroSection`, `#home`): `h1` "Gawalise Nambaso / Trail Run / 2026", tagline,
   date, location. Primary CTA `Daftar Sekarang` → registration URL; secondary CTA
   `Lihat Kategori` → `#kategori`. Right column: large GTR logo (≥ `lg`) and the ITRA and
   UTMB logos side by side on one row (transparent, no container).
3. **Tentang Event** (`EventIntro`, `#tentang`): heading "Rasakan jalur alam Gawalise" and the
   copy in section 3.
4. **Kategori** (`RaceCategories`, `#kategori`): heading "Pilih Tantanganmu"; two cards
   `#trail-fun` and `#summit-trail` (distance, name, elevation gain, cut-off, description,
   CTA `Jelajahi Trail Fun` / `Jelajahi Summit Trail` that scrolls to/focuses the card).
5. **Highlights** (`EventHighlights`): `2 Kategori Lomba`, `7 KM Trail Fun`,
   `18 KM Summit Trail`, `20 Desember 2026`.
6. **Lokasi** (`LocationSection`, `#lokasi`): `Lokasi Event`, `Desa Kanuna`, and the supporting
   text that start/finish/access details will be announced via official channels. No map or
   coordinates.
7. **Sponsored by** and 8. **Supported by** (`LogoShowcase`): two separate full-width
   `bg-white` `<section>`s, no divider lines. Logos are in a centered, wrapping flex row
   (`flex-wrap justify-center`, fixed logo widths `w-32 / sm:w-40 / lg:w-44`), so a single logo
   is centered. Each logo can carry an optional `href` (opens in a new tab with
   `rel="noopener noreferrer"`). `Sponsored by` has no logos yet and shows six neutral dummy
   placeholders labelled "Sponsor Logo" plus a "Logo sementara" note. `Supported by` shows the
   four supporter logos from section 5, each linked to the supplied Instagram URL
   (in `logo-showcase.ts`).
9. **ITRA / UTMB section** (`AssociationSection`, `src/app/logos/association-section.ts`):
   blue-gradient band directly above the footer containing only the ITRA and UTMB logos,
   centered, via the shared `AssociationLogos` component (also used in the hero). It replaces
   the former "Bersiap Menaklukkan Gawalise" contact/CTA card; its old heading, text and CTA
   are removed.
10. **Footer** (`SiteFooter`, `id="kontak"`): two-sided layout. Left: logo,
    `GAWALISE NAMBASO TRAIL RUN 2026`, date, location. Right: an intentionally empty reserved
    area for future navigation. Copyright line `© 2026 GAWALISE NAMBASO TRAIL RUN 2026.`
    No navigation links, social links or contact details.

## 8. Visual Interactions

- **Hero entrance:** CSS-only `hero-in` keyframes (opacity + 1.25 rem upward move, 0.7 s),
  staggered 0 / 150 / 300 / 450 / 600 ms for title block, tagline, date/location, CTAs and the
  right column. Plays once on load.
- **Scroll reveal:** `Reveal` directive (`appReveal`, optional `revealDelay`) using
  `IntersectionObserver`, once per element, on the intro, category cards (staggered),
  highlights (staggered), location card, Sponsored/Supported containers and the ITRA/UTMB
  section. Hidden state is added by JS only; reveal classes are removed after the entrance.
- **Category card hover:** only the hovered card scales to 1.04 (300 ms, shadow increase);
  keyboard focus on its CTA scales to 1.03.
- **Sponsor/supporter logo hover:** only the hovered logo scales to 1.08 (300 ms `ease-out`,
  `z-10`); linked logos also scale on keyboard focus. Placeholders have no hover effect.
- **Reduced motion:** hero and reveal animations are disabled, hover scaling is wrapped in
  `motion-safe:`, and smooth scrolling is turned off under `prefers-reduced-motion`. Hover
  styles do not apply on touch devices without hover support.

## 9. SEO

- Title: `GAWALISE NAMBASO TRAIL RUN 2026 | Trail Fun & Summit Trail`
- Description: "Bersiaplah menaklukkan jalur alam Gawalise. Ikuti GAWALISE NAMBASO TRAIL RUN
  2026 pada 20 Desember 2026 di Desa Kanuna dengan kategori 7 KM Trail Fun dan 18 KM Summit
  Trail."
- `lang="id"`, Open Graph type/locale/title/description and `og:image`
  (`assets/images/gtr-flyer-2026.png`, relative). No canonical or social-profile URLs.

## 10. Accessibility and Performance

Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), one `h1`, visible
`focus-visible` outlines, 48 px minimum tap targets for nav/CTAs, image `width`/`height`
attributes, `loading="lazy"` for below-the-fold logos. Contrast has not been measured.

## 11. Out of Scope

Separate category/location/contact/About pages, registration form or flow (the site only
links to the external registration URL), payments, backend/API/database/CMS, GPX or course
data, race rules, unverified sponsor/partner/social links, countdown timer.

## 12. Implementation Status

Checks actually run: `ng build` (production) completes, and `ng test` (Vitest + jsdom) passes
6 of 6 tests (hero text, all in-page anchors have targets, category stats, Kategori dropdown
toggle, registration links/About inertness, logos and white partner sections). Because the
Angular CLI rejects Node 24.11.1 (needs ≥ 24.15.0), both were run with
`node node_modules/@angular/cli/lib/init.js <build|test>`. No lint script exists. **Nothing has
been inspected in a real browser**; jsdom has no layout engine or `IntersectionObserver`.

| Feature | Status |
| ------- | ------ |
| Builds for production; unit tests pass | Implemented and verified (commands above) |
| Header, dropdowns, mobile menu, `Escape`/focus close, active state | Implemented; behavior of the Kategori toggle verified in tests, rest not verified in a browser |
| Nav `Daftar Sekarang` and hero `Daftar Sekarang` use the exact registration URL | Implemented and verified (unit test checks `href`) |
| In-page anchors resolve to existing ids | Implemented and verified (unit test) |
| Hero content, hero ITRA/UTMB row, entrance animation | Implemented, not verified visually |
| Category cards content (410 m / 4 Jam, 1.060 m / 12 Jam) | Implemented and verified (unit test) |
| Category-card and logo hover effects | Implemented, not verified visually (compiled CSS contains the hover rules) |
| Scroll-triggered reveal; reduced-motion handling | Implemented, not verified (jsdom skips the observer) |
| Typography (Barlow Condensed + Inter, Google Fonts) | Implemented; wrapping of the longer hero title on 320 px phones not verified |
| Tentang Event copy | Implemented and verified (text matches; unit test does not assert it) |
| Sponsored by placeholders | Implemented (placeholders only; no sponsors supplied) |
| Supported by logos with links | Implemented; single-logo centering and wrapping not verified visually |
| Full-width white Sponsored/Supported sections, no dividers | Implemented, not verified visually (unit test checks `bg-white`) |
| ITRA/UTMB section above footer (replaces contact/CTA card) | Implemented and verified in unit test (logos present); not verified visually |
| Footer two-sided layout, no nav links, empty right area | Implemented, not verified visually |
| SEO metadata and OG tags | Implemented; `og:image` is a relative path |
| `About` destination | Planned: awaiting URL (`ABOUT_HREF`) |
| `Kontak` label vs footer target | Open: needs decision (see 6.4) |
| Flyer vs PRD elevation (1860 vs 1.060 m) | Open: needs organizer confirmation |
| Official sponsor/supporter details, social links, absolute OG URL | Planned: not supplied |
