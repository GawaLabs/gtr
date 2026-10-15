# Product Requirements Document (PRD): GAWALISE NAMBASO TRAIL RUN 2026 Homepage

Dokumen ini disinkronkan dengan implementasi per 2026-10-12. Status setiap fitur ada di
bagian 12. Konten situs ditulis dalam Bahasa Indonesia; PRD ini dalam bahasa Inggris dan
Indonesia campuran sesuai sumber.

## 1. Overview

**Project name:** GAWALISE NAMBASO TRAIL RUN 2026\
**Deliverable:** Homepage plus two category detail pages (`/kategori/7k-fun-trail`, `/kategori/18k-summit-trail`)\
**Event date:** 20 December 2026\
**Event location:** Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah\
**Stack:** Angular 22 (standalone components, signals), TypeScript, Tailwind CSS v4
(`@tailwindcss/postcss`, tokens in `@theme` inside `src/styles.css`)\
**Site language:** Bahasa Indonesia (`<html lang="id">`); only the labels `Sponsored by`,
`Supported by`, `Home`, `Race Info` and `Elevation Gain`/`Cut-off Time` stay in English.

The flyer (`public/assets/images/gtr-flyer-2026.png`) is the visual reference for the blue
identity and event facts. It is used only as the Open Graph image, not as a page background.

## 2. Goals and Success Criteria

- Event name, date, location and the two race categories are visible in the first screen or a
  short scroll.
- Works on mobile, tablet and desktop without horizontal overflow.
- Every visible navigation item and CTA has a working destination.
- No invented category data, contact details, social links, sponsors or course details.
- Scope limited to the homepage.

## 3. Event Content (confirmed)

| Field                       | Value                                         |
| --------------------------- | --------------------------------------------- |
| Event name                  | GAWALISE NAMBASO TRAIL RUN 2026               |
| Date                        | 20 Desember 2026                              |
| Location                    | Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah                |
| Category 1                  | 7 KM — Trail Fun, elevation gain 410 m, cut-off 4 Jam |
| Category 2                  | 18 KM — Summit Trail, elevation gain 1.860 m, cut-off 12 Jam |
| Tagline                     | "Bersiaplah menaklukkan jalur alam Gawalise!" |
| Registration URL            | https://gtr-nambaso2026-cloudflare.gawalise-trailrun.workers.dev/ |

Tentang Event copy (as shipped):

> Taklukkan jalur ekstrem Pegunungan Gawalise, Gunung Gawalise - Sulawesi Tengah. Rasakan
> sensasi lari lintas alam megah dengan pemandangan Lembah Palu & Teluk Palu.

Event data lives in `src/app/event-data.ts` (`EVENT`, `CATEGORIES`, `NAV_ITEMS`).

**Participant benefits** (shown as a checklist on each card, `benefits` in `CATEGORIES`):
- 7K Trail Fun: Jersey Race Peserta 7K; BIB Number; Medali Finisher; Refreshment & Water Station;
  Meal; E-Certificate.
- 18K Summit Trail: Jersey Race Peserta 18K; **Jaket WINDBREAKER Finisher 18K** (highlighted);
  BIB Number & Medali Finisher; Water Station & Refreshment; Meal; E-Certificate.

The earlier 1.060 m elevation for 18K is superseded by 1.860 m (organizer-provided).

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
| `itra-nl.png` (1024×353)     | ITRA National League logo; hero logo row and ITRA/UTMB section (`public/assets/images/itra-nl.png`, referenced as `assets/images/itra-nl.png`) |
| `logo-itra.png` (597×156)    | Transparent PNG; hero logo row and ITRA/UTMB section   |
| `logo-utmb.png` (740×179)    | Transparent PNG; hero logo row and ITRA/UTMB section   |
| `supporters/sulteng.svg`, `sigi.png`, `koni-sulteng.png`, `alti-sulteng.webp` | `Supported by` logos (shown first); under `public/assets/images/supporters/` |
| `supporters/champurun.png`, `infotrailrunpalu.png`, `uwetumbu.png`, `wildtrac.png` | `Supported by` logos (shown after the four above) |

ITRA/UTMB logos are shown as supplied (no recolor or distortion). The site makes no claim of
official affiliation, certification or endorsement.

## 6. Header and Navigation

Component: `SiteHeader` (sticky, translucent `brand-950`). Menu structure comes from
`NAV_ITEMS` so items can later become Angular routes.

| Item        | Behavior                                                        |
| ----------- | --------------------------------------------------------------- |
| Home        | `#home`                                                         |
| Kategori ▾  | Dropdown: `7 KM Trail Fun` → `/kategori/7k-fun-trail` (`routerLink`), `18 KM Summit Trail` → `/kategori/18k-summit-trail` (`routerLink`) |
| Race Info ▾ | Dropdown: `Lokasi` → `/lokasi` (`routerLink`, `NavLink.route`)    |
| Contact     | `/contact` (`routerLink`; label renamed from `Kontak`, see 6.4)  |
| Daftar Sekarang | Real anchor button to the registration URL, same tab. Right side on desktop; last item in the mobile panel |

### 6.1 Interaction
Dropdowns open by click/tap/keyboard (`aria-expanded`, `aria-controls`), by hover on
hover-capable desktops, close on `Escape` and when focus leaves. Mobile menu is a toggle
(`aria-expanded`) with expandable submenus and closes after selecting a destination. The
active item is tracked with `IntersectionObserver` over `#home`, `#kategori`, `#lokasi`,
`#kontak`. `html` has `scroll-padding-top` so anchors are not hidden under the sticky header.

### 6.2 Routing
`App` is a shell: `SiteHeader`, `<router-outlet>`, `SiteFooter`. Routes (`app.routes.ts`):
`''` → `HomePage` (all homepage sections, formerly rendered directly in `app.html`);
`kategori/7k-fun-trail` → `Category7kPage`; `kategori/18k-summit-trail` → `Category18kPage`; `contact` → `ContactPage`; `lokasi` → `LocationPage`; `**` → redirect to `''`. Router uses
`withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })`.
Each route has a `title`. Header nav links remain plain `#anchor` links (with `<base href="/">`
they resolve to `/#anchor`, i.e. a full load of the homepage when clicked from the detail
page). The header re-observes sections on `NavigationEnd`. Deep links such as
`/kategori/7k-fun-trail` need SPA fallback (rewrite to `index.html`) on the hosting server;
`ng serve` provides it. The hosting configuration was not inspected.

### 6.3 About
Removed from the navigation (desktop and mobile). `NAV_ITEMS`, the `ABOUT_HREF` constant and the
disabled-item template branch no longer exist. The homepage `Tentang Event` section is unchanged.

### 6.4 Contact
`NAV_ITEMS` entry `{ id: 'kontak', label: 'Contact', route: '/contact' }` is a `routerLink` to the
standalone Contact page (7C); it no longer scrolls to the footer (the footer keeps `id="kontak"`
but is no longer a nav target or in `SECTION_IDS`). The item is highlighted when the current URL
starts with `/contact`. Home, Kategori and Race Info are unchanged.

## 7. Homepage Sections (render order in `home-page.ts`)

1. **Header** (`SiteHeader`).
2. **Hero** (`HeroSection`, `#home`): `h1` "Gawalise Nambaso / Trail Run / 2026", tagline,
   date, location. Primary CTA `Daftar Sekarang` → registration URL; secondary CTA
   `Lihat Kategori` → `#kategori`. Right column: large GTR logo (≥ `lg`) and, below it, one logo
   row in the order ITRA, UTMB, ITRA National League (transparent, no container, not linked;
   alt texts `ITRA National League`, `ITRA International Trail Running Association`,
   `UTMB Index`). The National League logo is enabled via the
   `includeNationalLeague` input of the shared `AssociationLogos` component, in both the hero
   and the ITRA/UTMB band above the footer (same order in both). Responsive: heights scale per breakpoint (`object-contain`-equivalent
   `w-auto`, aspect ratio preserved); the row is a single line at `lg` and up and wraps
   (centered) on smaller widths so there is no horizontal overflow.
3. **Tentang Event** (`EventIntro`, `#tentang`): heading "Rasakan jalur alam Gawalise" and the
   copy in section 3.
4. **Kategori** (`RaceCategories`, `#kategori`): heading "Pilih Tantanganmu"; two cards
   `#trail-fun` and `#summit-trail` (distance, name, elevation gain, cut-off, description, participant-benefit checklist,
   CTA `Jelajahi Trail Fun` / `Jelajahi Summit Trail` that scrolls to/focuses the card).
5. **Highlights** (`EventHighlights`): `2 Kategori Lomba`, `7 KM Trail Fun`,
   `18 KM Summit Trail`, `20 Desember 2026`.
6. **Lokasi** (`LocationSection`, `#lokasi`; the homepage section remains, it is no longer the menu target and now uses the shared `EventMap`): `Lokasi Event`, the full official location
   (`EVENT.location` = `Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah`,
   also used in the hero, footer and meta descriptions), and the supporting text that
   start/finish/access details will be announced via official channels. Map:
   - Button `Buka di Google Maps` (`target="_blank"`, `rel="noopener noreferrer"`, sr-only
     "(buka di tab baru)") → `EVENT.mapsUrl`, the supplied URL, unmodified:
     `https://www.google.com/maps/place/Kantor+desa+kanuna+kec.kinovaro+kab.sigi/@-0.8963267,119.8277849,100m/data=!3m1!1e3!4m14!1m7!3m6!1s0x2d8bed7d84aa5819:0x1f6fc67298c1ecf4!2sKantor+desa+kanuna+kec.kinovaro+kab.sigi!8m2!3d-0.8962992!4d119.8276689!16s%2Fg%2F11s0bbm6vz!3m5!1s0x2d8bed7d84aa5819:0x1f6fc67298c1ecf4!8m2!3d-0.8962992!4d119.8276689!16s%2Fg%2F11s0bbm6vz?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D`
   - Interactive map: Leaflet 1.9 + OpenStreetMap (`LocationSection`, config in `MAP` in
     `event-data.ts`). Centered on lat `-0.8962992`, lng `119.8276689` at zoom 15; marker at the
     same coordinates with popup `Desa Kanuna` (opened on load). Tiles:
     `https://tile.openstreetmap.org/{z}/{x}/{y}.png` (configurable via `MAP.tileUrl`); visible
     attribution `© OpenStreetMap contributors` linked to
     `https://www.openstreetmap.org/copyright`. Tiles are requested only by the visible map on
     demand (no prefetch or bulk download); use follows the OSM Tile Usage Policy
     (https://operations.osmfoundation.org/policies/tiles/); OSM tile availability is not
     guaranteed. Zoom buttons, drag-panning, double-click/pinch zoom are on; mouse-wheel zoom is
     off so page scrolling is not hijacked. The map is created once after first render
     (`afterNextRender`), resized via `ResizeObserver` + `invalidateSize()`, and removed in
     `ngOnDestroy`. Marker images (`marker-icon.png`, `marker-icon-2x.png`, `marker-shadow.png`, copied from
     `leaflet/dist/images`) are committed in `public/assets/leaflet/` and referenced by relative
     URL (resolved via `<base href>`, so subpath deploys work); no `angular.json` change needed and Leaflet CSS is imported in `src/styles.css` (`@import 'leaflet/dist/leaflet.css'`); without it tiles render only in scattered blocks. Verified in headless Chrome: 12 tile requests returned 200 and tiles covered the whole container on initial render and after resizes (desktop and 390 px mobile).
     Layout: rounded bordered container inside the existing card, height `h-80` (mobile),
     `h-96` (`sm`), `h-112` (`lg`), full width, `isolate` so Leaflet panes stay below the sticky
     header; map region has an `aria-label`.
   - Dependencies: `leaflet` (dependency), `@types/leaflet` (dev). The previous Google Maps
     iframe embed was removed; only the external `Buka di Google Maps` link remains.
7. **Sponsored by** and 8. **Supported by** (`LogoShowcase`): two separate full-width
   `bg-white` `<section>`s, no divider lines. Logos are in a centered, wrapping flex row
   (`flex-wrap justify-center`, fixed logo widths `w-32 / sm:w-40 / lg:w-44`), so a single logo
   is centered. Each logo can carry an optional `href` (opens in a new tab with
   `rel="noopener noreferrer"`). `Sponsored by` has no logos yet and shows six neutral dummy
   placeholders labelled "Sponsor Logo" plus a "Logo sementara" note. `Supported by` shows eight
   logos, each clickable (new tab). Order: the four new ones first, then the existing four
   (unchanged relative order): Sulteng (`sulteng.svg`, https://sultengprov.go.id/), Sigi
   (`sigi.png`, https://sigikab.go.id/), KONI Sulteng (`koni-sulteng.png`,
   https://konisulteng.id/), ALTI Sulteng (`alti-sulteng.webp`, https://altisulteng.or.id/),
   then Champurun, Infotrailrunpalu, Uwetumbu, Wildtrac (each linked to its Instagram URL).
   Logos keep aspect ratio (`max-h-full max-w-full object-contain` in a fixed-ratio cell) and
   each cell has an independent hover scale (1.08, `motion-safe`) with transition
   (in `logo-showcase.ts`).
9. **ITRA / UTMB section** (`AssociationSection`, `src/app/logos/association-section.ts`):
   blue-gradient band directly above the footer containing only the ITRA, UTMB and ITRA National League logos (in that order),
   centered (heights `h-10`/`sm:h-12`/`md:h-16`, container `max-w-5xl`; one row from `sm` up,
   wraps centered on narrow screens, no horizontal overflow; logos are not linked and have no
   hover enlargement), via the shared `AssociationLogos` component (also used in the hero). It replaces
   the former "Bersiap Menaklukkan Gawalise" contact/CTA card; its old heading, text and CTA
   are removed.
10. **Footer** (`SiteFooter`, `id="kontak"`): two-sided layout. Left: logo,
    `GAWALISE NAMBASO TRAIL RUN 2026`, date, location. Right: an intentionally empty reserved
    area for future navigation. Bottom row (below a divider): copyright line
    `© 2026 GAWALISE NAMBASO TRAIL RUN 2026.` on the left and the credit `Site by Ucup Topekox`
    at the bottom-right (`font-mono`, `text-xs`, muted `text-brand-100/60`, about 5.8:1 contrast
    on the footer background). Only `Ucup Topekox` is a link to
    `https://www.instagram.com/ucuptopekox/` (`target="_blank"`, `rel="noopener noreferrer"`,
    sr-only "(Instagram, buka di tab baru)"); hover/focus turns it yellow with underline on
    hover and a visible focus outline. The row is a flex column on mobile (credit below the
    copyright, right-aligned) and a space-between row from `sm`. No icons. No other navigation
    links, social links or contact details.

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
  2026 pada 20 Desember 2026 di Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah dengan kategori 7 KM Trail Fun dan 18 KM Summit
  Trail."
- `lang="id"`, Open Graph type/locale/title/description and `og:image`
  (`assets/images/gtr-flyer-2026.png`, relative). No canonical or social-profile URLs.

## 10. Accessibility and Performance

Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), one `h1`, visible
`focus-visible` outlines, 48 px minimum tap targets for nav/CTAs, image `width`/`height`
attributes, `loading="lazy"` for below-the-fold logos. Contrast has not been measured.

## 7A. 7K Fun Trail Run Detail Page (`/kategori/7k-fun-trail`)

`Category7kPage` (`src/app/categories/category-7k-page.ts`), data from `CATEGORIES`
(`trail-fun`: `route`, `detailImage`). Uses the global header and footer. Sections:
1. **Hero:** `GAWALISE NAMBASO TRAIL RUN 2026`, `h1` "7K Fun Trail Run", tagline, stat tiles
   (7 KM, EG 410 m, COT 4 Jam), CTA `Daftar Sekarang` → registration URL (new tab, `rel="noopener noreferrer"`), secondary CTA
   `Lihat Rute & Profil` → `#rute` (router fragment).
2. **Informasi Lomba:** Jarak 7 KM, Elevation Gain 410 m, Cut-off Time 4 Jam, Tanggal Event
   20 Desember 2026, Lokasi `Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi
   Tengah`; Start 06.00, Finish 10.00 and Water Station `WS 1 di km 3,2 (Drink + Fruits)`
   (taken from the route image); EG is displayed as `410 m+` on this page.
3. **Rute dan Elevation Profile** (`#rute`): `public/assets/images/categories/7K.webp`
   (4766×4767, verified to exist and loads), shown unmodified with `w-full h-auto` (rendered
   ratio equals natural ratio) and descriptive `alt`; wrapped in a link that opens the full-size
   image in a new tab (`target="_blank"`, `rel="noopener noreferrer"`). The image itself shows
   start 06.00 / finish 10.00, WS 1 at km 3,2 (drink + fruits) and an 05.00–17.00 event window;
   none of this is re-typed as page text.
4. **Benefit Peserta:** Jersey Race Peserta 7K; BIB Number; Medali Finisher; Refreshment &
   Water Station; Meal; E-Certificate (checkmark grid) plus a `Daftar Sekarang` button.
5. **Lokasi Event:** the existing `LocationSection` component is reused as is (full location,
   `Buka di Google Maps` link, Leaflet/OSM map, attribution), so there is one map implementation.

Homepage: the 7K card CTA (`Detail Trail Fun`) is a `routerLink` to the page (keyboard focusable,
existing focus ring and hover scale unchanged; the card itself is not a link). The 18K card CTA
(`Detail Summit Trail`) is a `routerLink` to `/kategori/18k-summit-trail` (see 7B). Responsive: stat tiles in three
columns, info grid 1/2/3 columns, benefits grid 1/2/3 columns; no horizontal overflow at 390 px.
Reveal and hero animations reuse the existing `appReveal` / `hero-in` (disabled under
`prefers-reduced-motion`).

## 7B. 18K Summit Trail Detail Page (`/kategori/18k-summit-trail`)

`Category18kPage` (`src/app/categories/category-18k-page.ts`), a separate component with the same
structure as 7A (hero with stat tiles, `Informasi Lomba`, `Rute dan Elevation Profile` at `#rute`,
`Benefit Peserta`, reused `LocationSection`, global header/footer); data from `CATEGORIES`
(`summit-trail`: `route`, `detailImage`).
- Specs: 18 KM, EG 1.860 m (shown as `1.860 m+`; the outdated 1.060 m is not used), COT 12 Jam,
  date 20 Desember 2026, location `Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi
  Sulawesi Tengah`. From the route image only: Start 05.00, Finish 17.00, COP Batu Gantung Km 7
  (12.00), CP Puncak Gawalise Km 9.
- Image: `public/assets/images/categories/18.webp` (4767×4767; viewed and verified as the 18K
  map and profile: "18K", 1860 M+, 12H COT, start 05.00, finish 17.00). Shown unmodified at
  `w-full h-auto`, descriptive `alt`, links to full size in a new tab.
- Benefits: Jersey Race Peserta 18K; Jaket WINDBREAKER Finisher 18K (highlighted: orange
  card, ring and `Eksklusif` badge); BIB Number & Medali Finisher; Water Station & Refreshment;
  Meal; E-Certificate.
- `Daftar Sekarang` (hero and benefits) → registration URL, new tab, `rel="noopener noreferrer"`.
- Navigation: homepage 18K card CTA and Kategori dropdown `18 KM Summit Trail` both use
  `routerLink` to the route. The 7K page, its route and content are unchanged.
- Responsive/accessibility: same layout rules as 7A (no horizontal overflow at 390 px).

## 7C. Contact Page (`/contact`)

`ContactPage` (`src/app/contact/contact-page.ts`), title `Contact Us | GAWALISE NAMBASO TRAIL
RUN 2026`; uses the global header and footer. Hero: event name, `h1` "Contact Us", short intro
inviting questions about the event. Section `Contact Person` with one card per person (supplied
data only, no e-mail or social links):
| Name | Displayed phone | `tel:` link | WhatsApp link |
| ---- | --------------- | ----------- | ------------- |
| Deddy | 085255122830 | `tel:+6285255122830` | `https://wa.me/6285255122830` |
| Arman | 0811452222 | `tel:+62811452222` | `https://wa.me/62811452222` |
The leading 0 is replaced by `62` only in link values; displayed numbers are unchanged. Buttons
read `Hubungi via WhatsApp`, open in a new tab (`rel="noopener noreferrer"`); the page does not
claim the numbers are registered on WhatsApp (not verified). Responsive: cards stack on mobile,
two columns from `md`; no horizontal overflow at 390 px. Accessibility: phone links have an
`aria-label` ("Telepon <name> di <number>"), WhatsApp buttons have sr-only name/new-tab text.

## 7D. Location Page (`/lokasi`)

`LocationPage` (`src/app/location/location-page.ts`), title `Lokasi Event | GAWALISE NAMBASO TRAIL
RUN 2026`; global header and footer. Content (supplied data only; no extra address, directions or
facilities): hero (`h1` "Lokasi Event", event name, address); `Informasi Lokasi` cards: Nama
Lokasi `Desa Kanuna`, Tanggal `20 Desember 2026`, Event `GAWALISE NAMBASO TRAIL RUN 2026`,
Alamat `Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah`; `Peta Lokasi`
card with the button `Buka di Google Maps` (`EVENT.mapsUrl`, the supplied URL, `target="_blank"`,
`rel="noopener noreferrer"`; verified identical to the supplied string) above the map.
- Map: the Leaflet implementation was extracted into the shared `EventMap` component
  (`src/app/location/event-map.ts`, selector `app-event-map`) and is used by both this page and
  the homepage `LocationSection` (7K/18K pages reuse `LocationSection`); there is one
  implementation. Same behavior as 7: lat `-0.8962992`, lng `119.8276689`, zoom 15, OSM tiles
  `https://tile.openstreetmap.org/{z}/{x}/{y}.png` (`MAP` in `event-data.ts`), marker with
  committed icon files (`public/assets/leaflet/`) and popup `Desa Kanuna` opened on load (label from `MAP.label`, shared by every map instance: homepage, 7K, 18K and `/lokasi`),
  zoom buttons and drag-panning, `ResizeObserver` + `invalidateSize()`, Leaflet CSS in
  `styles.css`, visible attribution `© OpenStreetMap contributors` linked to
  `https://www.openstreetmap.org/copyright`. Tile policy: https://operations.osmfoundation.org/policies/tiles/
  (no prefetch or bulk download). Height `h-80` / `sm:h-96` / `lg:h-112`; 390 px layout has no
  horizontal overflow.
- Navigation: Race Info → Lokasi (desktop dropdown and mobile menu); Race Info is highlighted
  on `/lokasi`.

## 11. Out of Scope

A separate About page, registration form or flow (the site only
links to the external registration URL), payments, backend/API/database/CMS, GPX or course
data, race rules, unverified sponsor/partner/social links, countdown timer.

## 12. Implementation Status

Checks actually run: `ng build` (production) completes, and `ng test` (Vitest + jsdom) passes
15 of 15 tests (hero text, all in-page anchors have targets, category stats, Kategori dropdown
toggle, registration links/no About item, logos and white partner sections, 7K card link, 7K
detail page on a direct route, menu links, 18K card link, 18K detail page on a direct route, Contact menu link, contact page links, Race Info → Lokasi link, location page on a direct route). Because the
Angular CLI rejects Node 24.11.1 (needs ≥ 24.15.0), both were run with
`node node_modules/@angular/cli/bin/bootstrap.js <build|test>`. No lint script exists. The map
and the 7K page were additionally checked in headless Chrome against the production build (see
the 7K rows); other sections have **not** been inspected in a real browser.

| Feature | Status |
| ------- | ------ |
| Builds for production; unit tests pass | Implemented and verified (commands above) |
| Header, dropdowns, mobile menu, `Escape`/focus close, active state | Implemented; behavior of the Kategori toggle verified in tests, rest not verified in a browser |
| Nav `Daftar Sekarang` and hero `Daftar Sekarang` use the exact registration URL | Implemented and verified (unit test checks `href`) |
| In-page anchors resolve to existing ids | Implemented and verified (unit test) |
| Hero content, hero ITRA/UTMB row, entrance animation | Implemented, not verified visually |
| Category cards content (410 m / 4 Jam, 1.860 m / 12 Jam) and benefit lists | Implemented and verified (unit test) |
| Category-card and logo hover effects | Implemented, not verified visually (compiled CSS contains the hover rules) |
| Scroll-triggered reveal; reduced-motion handling | Implemented, not verified (jsdom skips the observer) |
| Typography (Barlow Condensed + Inter, Google Fonts) | Implemented; wrapping of the longer hero title on 320 px phones not verified |
| Tentang Event copy | Implemented and verified (text matches; unit test does not assert it) |
| Sponsored by placeholders | Implemented (placeholders only; no sponsors supplied) |
| Supported by logos with links | Implemented; single-logo centering and wrapping not verified visually |
| Full-width white Sponsored/Supported sections, no dividers | Implemented, not verified visually (unit test checks `bg-white`) |
| ITRA/UTMB section above footer (replaces contact/CTA card) | Implemented and verified in unit test (logos present); not verified visually |
| Kategori dropdown items → `/kategori/7k-fun-trail` and `/kategori/18k-summit-trail` via `routerLink` (`NavLink.route`) | Implemented; hrefs verified in unit test, navigation (desktop and mobile menu) verified in headless Chrome |
| 7K detail page: route, content, specs, benefits, image, map, footer | Implemented; unit test (direct route) and headless Chrome check pass |
| 18K detail page: route, specs, benefits (windbreaker highlighted), image, map, footer; homepage card and dropdown links | Implemented; unit tests and headless Chrome check (desktop menu, mobile menu, card, direct URL, 390 px) pass |
| Homepage 7K CTA navigates to the page; direct open of `/kategori/7k-fun-trail` renders (with SPA fallback server) | Implemented and verified in headless Chrome (title, h1, scroll to top) |
| 7K image aspect ratio and mobile layout (390 px) | Verified in headless Chrome (ratio 0.9998 = natural; no horizontal overflow) |
| Production hosting SPA fallback for deep links | Unverified: hosting not inspected |
| Footer two-sided layout, no nav links, empty right area | Implemented, not verified visually |
| SEO metadata and OG tags | Implemented; `og:image` is a relative path |
| `About` menu item | Removed (see 6.3) |
| Location page `/lokasi`, `EventMap` shared component, Race Info → Lokasi (desktop and mobile) | Implemented; unit tests and headless Chrome check pass (tiles cover container, marker icon loads, popup, zoom/pan, Google Maps link identical to supplied URL) |
| Contact page, `tel:`/WhatsApp links, `Contact` menu item (desktop and mobile) | Implemented; unit tests and headless Chrome check pass (calling/WhatsApp behavior on a phone not tested) |
| Official sponsor/supporter details, social links, absolute OG URL | Planned: not supplied |
