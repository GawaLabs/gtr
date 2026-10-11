# Product Requirements Document (PRD): Gawalise TrailRun Landing Page

## 1. Project Overview

**Project name:** Gawalise TrailRun\
**Deliverable:** Homepage only (single-page landing page)\
**Event date:** 20 December 2026\
**Event location:** Desa Kanuna, Central Sulawesi, Indonesia\
**Technology stack:** Angular, Tailwind CSS, TypeScript\
**Primary language for website content:** Bahasa Indonesia\
**PRD language:** English

Build a modern, visually striking landing page for **Gawalise TrailRun
2026**, a trail-running event inspired by the supplied event flyer. The
website should communicate the event identity, showcase its two race
categories, and direct visitors toward race information and contact
channels.

Use the supplied flyer and Gawalise TrailRun logo as the primary visual
references. The flyer is the source of truth for the blue color
direction, event date, location, race distances, elevation gain, and
cut-off times.

## 2. Goals and Success Criteria

### Goals

-   Establish a strong digital identity for Gawalise TrailRun 2026.
-   Make the event date, location, and two race categories immediately
    visible.
-   Encourage visitors to explore the 7 km and 18 km categories.
-   Provide clear navigation to sections that can later connect to
    dedicated pages.
-   Deliver a responsive, accessible, performant homepage.

### Success criteria

-   Visitors can identify the event name, date, location, and race
    distances within the first screen or a short scroll.
-   The homepage works on mobile, tablet, and desktop.
-   All visible navigation and CTA controls have meaningful behavior.
-   No category data, registration URL, contact details, or course
    information is invented.
-   The implementation is limited to the homepage; separate category,
    location, and contact pages are not built in this phase.

## 3. Target Audience

-   Trail-running beginners interested in a shorter, fun distance.
-   Experienced or intermediate runners interested in a more challenging
    trail.
-   Local running communities, event participants, supporters, and
    potential partners.

## 4. Event Information and Content Requirements

Use the following confirmed information:

  Field                       Value
  --------------------------- -----------------------------------------------
  Event name                  Gawalise TrailRun 2026
  Event date                  20 December 2026
  Event location              Desa Kanuna
  Category 1                  7 KM --- Trail Fun
  Category 1 elevation gain   410 m
  Category 1 cut-off time     4 hours
  Category 2                  18 KM --- Summit Trail
  Category 2 elevation gain   1,060 m
  Category 2 cut-off time     12 hours
  Event tagline               "Bersiaplah menaklukkan jalur alam Gawalise!"

The supplied flyer includes organizer, community, and partner logos.
Display these only if the original image assets are available and
sufficiently clear. Do not recreate, distort, or invent partner logos.

Do not invent registration fees, registration status, start times,
detailed course routes, aid-station information, mandatory gear, phone
numbers, email addresses, or social links. Where these details are not
supplied, use a non-deceptive placeholder only if a UI element requires
it, or omit the element.

## 5. Design Direction

### Visual identity

-   Primary visual theme: deep and vivid blues, based on the supplied
    flyer.
-   Supporting colors: white, cool light blue, and limited yellow/orange
    accents sampled conceptually from the category graphics in the
    flyer.
-   Mood: adventurous, energetic, outdoors-oriented, bold, and
    welcoming.
-   Use strong display typography for the hero title and clear
    sans-serif typography for body content.
-   Use layered blue gradients, subtle mountain/contour-line motifs, and
    high-quality trail or mountain imagery where assets are available.
-   Maintain sufficient contrast for text over imagery. Add a dark blue
    overlay behind hero text if needed.
-   Avoid a generic corporate-template appearance.

### Suggested color tokens

Treat these as initial design tokens and adjust them to match the
supplied flyer during implementation: - `brand-950`: `#071A55` -
`brand-900`: `#0A2478` - `brand-800`: `#1239A8` - `brand-700`:
`#1E4ED8` - `brand-500`: `#3B82F6` - `brand-100`: `#DBEAFE` -
`accent-yellow`: `#FDE725` - `accent-orange`: `#FF7A24` - `white`:
`#FFFFFF`

Use Tailwind utilities and, where appropriate, configure reusable theme
tokens rather than scattering arbitrary color values throughout
components.

## 6. Reference Website

Use [MANTRA116](https://mantra116.id/) as a structural and experience
reference, not as a template to copy.

Useful patterns to consider: - A large event hero that establishes
identity immediately. - Prominent race-category highlights. - Short
event introduction and a clear narrative. - Scannable race facts and
category-specific calls to action. - A strong footer with event branding
and social/contact pathways.

Do not copy MANTRA116 text, logos, visual assets, or exact page design.
Adapt the broad information hierarchy to Gawalise TrailRun and the
supplied flyer.

## 7. Information Architecture and Navigation

Create the following navigation in Bahasa Indonesia:

-   **Home**
-   **Kategori**
    -   **7 KM Trail Fun**
    -   **18 KM Summit Trail**
-   **Race Info**
    -   **Lokasi**
-   **Kontak**

### Navigation behavior for this phase

-   `Home` scrolls to the top/hero section.
-   `Kategori` opens a dropdown containing the two categories. Each item
    scrolls to the corresponding category card/section on the homepage.
-   `Race Info` opens a dropdown containing `Lokasi`. `Lokasi` scrolls
    to the location section on the homepage.
-   `Kontak` scrolls to the contact/footer section.
-   The menu structure should be organized so that these items can later
    be changed to Angular routes for separate pages.
-   Do not create separate pages or configure speculative routes in this
    phase.
-   Dropdowns must work with mouse, keyboard, and touch. On small
    screens, use a mobile navigation panel with expandable submenu
    items.

## 8. Homepage Sections

Implement the following sections in this order.

### 8.1 Header and Navigation

Requirements: - Show the Gawalise TrailRun logo using the supplied logo
asset. - Use a sticky or fixed header only if it does not obscure
content or harm mobile usability. - Provide clear active/hover/focus
states. - Desktop: horizontal navigation with dropdown menus. - Mobile:
accessible menu toggle and expandable submenus. - Use a transparent or
translucent blue header over the hero if it remains legible; otherwise
use a solid brand-blue background.

### 8.2 Hero Section

Purpose: establish the event brand and communicate essential information
immediately.

Content: - Event name: `Gawalise TrailRun 2026` - Supporting line:
`Bersiaplah menaklukkan jalur alam Gawalise!` - Date:
`20 Desember 2026` - Location: `Desa Kanuna` - Primary CTA:
`Jelajahi Kategori` - Secondary CTA: `Lihat Lokasi`

Design: - Large scenic mountain/trail background or the supplied flyer
artwork if it is suitable for web use. - Use a blue overlay or gradient
to preserve readable text. - Make the event title the strongest
typographic element. - CTAs should scroll to the category and location
sections. - Do not use a fabricated countdown unless a real, correctly
calculated countdown is implemented and tested.

### 8.3 Event Introduction

Purpose: briefly explain the event experience.

Suggested Indonesian copy: \> Gawalise TrailRun 2026 mengajak para
pelari untuk menikmati tantangan jalur alam, menguji batas diri, dan
merasakan semangat kebersamaan di kawasan Gawalise.

This is promotional copy, not a claim about unconfirmed course features.
Avoid specific claims about terrain, scenery, or route conditions unless
verified by the organizer.

### 8.4 Race Categories

Display two visually distinct cards in a responsive grid.

**Card A --- 7 KM Trail Fun** - Distance: `7 KM` - Category name:
`Trail Fun` - Elevation gain: `410 m` - Cut-off time: `4 Jam` - Short
description: a shorter category for runners who want to enjoy the
trail-running experience. - CTA: `Lihat Kategori` - CTA behavior: scroll
to or focus this category card; do not link to a page that does not
exist.

**Card B --- 18 KM Summit Trail** - Distance: `18 KM` - Category name:
`Summit Trail` - Elevation gain: `1.060 m` - Cut-off time: `12 Jam` -
Short description: a longer category for runners looking for a more
demanding trail-running challenge. - CTA: `Lihat Kategori` - CTA
behavior: scroll to or focus this category card; do not link to a page
that does not exist.

Design requirements: - Use clear distance typography and compact
statistic groups. - Use subtle visual distinction between categories
while retaining a consistent brand system. - On mobile, stack cards
vertically. - Do not add pricing, participant limits, start times,
eligibility requirements, or other unsupported facts.

### 8.5 Event Highlights

Create a compact visual highlight section using only confirmed
information: - `2 Kategori Lomba` - `7 KM Trail Fun` -
`18 KM Summit Trail` - `20 Desember 2026`

Do not display unverified participant counts, prize details, sponsors,
or registration status.

### 8.6 Location Section

Section ID: `lokasi`

Content: - Heading: `Lokasi Event` - Location: `Desa Kanuna` -
Supporting text:
`Informasi detail titik start, titik finish, dan akses menuju lokasi akan diumumkan melalui kanal resmi penyelenggara.`

Requirements: - This is a homepage preview section only, not a full
location page. - Do not invent a street address or map coordinates. - Do
not embed a map with guessed coordinates. - Keep the section ready for a
verified map, directions link, and detailed location page in a future
phase.

### 8.7 Contact / Final CTA Section

Section ID: `kontak`

Content: - Heading: `Bersiap Menaklukkan Gawalise` - Supporting text:
`Ikuti kanal resmi Gawalise TrailRun untuk mendapatkan informasi terbaru mengenai lomba.` -
If official social/contact URLs are not provided, do not invent them.
Render social links only when real URLs are supplied. - A final CTA may
say `Jelajahi Kategori` and scroll to the category section.

### 8.8 Footer

Requirements: - Show the Gawalise TrailRun logo or wordmark. - Include
`Gawalise TrailRun 2026`. - Include the event date and `Desa Kanuna`. -
Include navigation anchors to homepage sections. - Include
social/contact links only when verified URLs are available. - Use a
deep-blue background with accessible contrast. - Copyright year should
be `2026`.

## 9. Functional Requirements

-   Angular components should be organized cleanly and remain easy to
    extend.
-   Use Angular Router only if already present in the project; do not
    create separate routes for pages outside this scope.
-   Use Tailwind CSS for responsive layout, spacing, typography, colors,
    and states.
-   Use semantic HTML elements (`header`, `nav`, `main`, `section`,
    `footer`).
-   Use reusable components where helpful, such as `SiteHeader`,
    `HeroSection`, `CategoryCard`, and `SiteFooter`, but avoid
    unnecessary abstraction.
-   Keep event content in a typed local data object or array when this
    improves maintainability.
-   All section links and CTA buttons must work.
-   Dropdown menus and mobile navigation must be keyboard accessible.
-   Use visible focus indicators.
-   Respect `prefers-reduced-motion`; avoid excessive animation.
-   No backend, database, CMS, authentication, payment, registration
    flow, or API integration is required.
-   Do not add fake forms that appear to submit data. A contact form is
    out of scope unless a backend or a real submission destination is
    supplied.

## 10. Technical Requirements

### Stack

-   Angular (use the version already installed in the repository).
-   TypeScript.
-   Tailwind CSS (use the existing configuration if already installed).
-   HTML and CSS only where needed alongside Tailwind utilities.

### Implementation rules

-   Inspect the existing repository before making changes.
-   Preserve the current package manager and project conventions.
-   Do not replace project configuration without a clear technical
    reason.
-   Do not install extra UI libraries unless genuinely necessary.
-   Use local assets from the repository or the supplied flyer/logo
    assets. If assets need to be copied into the project, place them in
    the existing public/assets convention or the project's established
    asset directory.
-   Never reference a local image path that does not exist.
-   If no suitable hero photograph is available, create a polished
    blue-gradient hero with a subtle CSS mountain/contour motif rather
    than relying on a broken remote image.
-   Keep components responsive and avoid horizontal overflow.
-   Avoid unnecessary dependencies and heavy animation libraries.

## 11. Responsive Design

### Mobile

-   Prioritize readable hero text and visible event date/location.
-   Use a mobile navigation panel with accessible submenu toggles.
-   Stack category cards.
-   Make buttons comfortably tappable.
-   Prevent text, logos, and cards from overflowing the viewport.

### Tablet

-   Use a balanced hero layout and a two-column category layout when
    space allows.
-   Maintain comfortable spacing and readable type.

### Desktop

-   Use a wide hero composition with strong visual hierarchy.
-   Display category cards side by side.
-   Keep content within a consistent maximum-width container.
-   Use generous spacing without making the page feel empty.

## 12. Accessibility and Performance

-   Use appropriate heading hierarchy, starting with one clear `h1`.
-   Provide meaningful alt text for informative images; use empty alt
    text for purely decorative imagery.
-   Ensure sufficient color contrast.
-   Ensure keyboard access to menus, dropdowns, and CTAs.
-   Do not rely on color alone to distinguish information.
-   Optimize image sizes and avoid unnecessarily large assets.
-   Lazy-load below-the-fold images where appropriate.
-   Avoid layout shifts by reserving image dimensions.
-   Keep animation subtle and disable/reduce it for users who prefer
    reduced motion.

## 13. SEO and Social Sharing

-   Page title: `Gawalise TrailRun 2026 | Trail Fun & Summit Trail`
-   Meta description:
    `Bersiaplah menaklukkan jalur alam Gawalise. Ikuti Gawalise TrailRun 2026 pada 20 Desember 2026 di Desa Kanuna dengan kategori 7 KM Trail Fun dan 18 KM Summit Trail.`
-   Set the document language to Indonesian (`id`).
-   Add Open Graph title, description, and image metadata if a suitable
    local event image is available.
-   Do not invent canonical URLs or social profile URLs.

## 14. Out of Scope

The following are explicitly excluded from this phase: - Dedicated
category pages for 7 KM and 18 KM. - Dedicated Race Info or Location
pages. - Dedicated Contact page. - Online registration, payments,
ticketing, or participant dashboard. - Backend/API integration,
database, CMS, or admin panel. - Detailed GPX/course maps, elevation
profiles, checkpoints, aid stations, mandatory gear, and race rules
unless official data is supplied. - Unverified sponsor, partner, or
social-media links.

## 15. Acceptance Criteria

The task is complete when: 1. The Angular application runs using the
repository's existing development command. 2. The homepage follows the
supplied flyer's blue visual direction. 3. The logo is displayed
correctly when its asset is available. 4. The hero presents event name,
date, location, tagline, and working CTAs. 5. Both category cards show
the correct distance, name, elevation gain, and cut-off time. 6.
Navigation includes `Home`, `Kategori`, `Race Info`, and `Kontak`, with
the specified submenus. 7. In-page navigation works without broken
links. 8. The location and contact/footer sections are present. 9. The
layout is responsive and has no obvious horizontal overflow at mobile
widths. 10. Keyboard navigation, focus indicators, and reduced-motion
preferences are respected. 11. No unsupported event details or fake
registration/contact destinations are displayed. 12. No separate pages
or unrelated features are implemented.

## 16. Suggested Implementation Workflow for Claude Code

1.  Inspect the repository structure, `package.json`, Angular version,
    Tailwind setup, existing assets, and current app entry points.
2.  Summarize the existing setup and identify the smallest set of files
    that need modification.
3.  Implement the homepage using the existing project conventions.
4.  Add or organize the supplied event logo and flyer assets only as
    needed.
5.  Verify all navigation anchors, dropdown interactions, and
    mobile-menu behavior.
6.  Run the existing lint, test, and/or build commands when available.
7.  Fix errors introduced by the implementation.
8.  Report changed files, commands executed, test/build results, and any
    missing assets or official details.

**Scope guard:** Build the homepage only. Do not proceed to dedicated
subpages, backend features, registration functionality, or speculative
integrations.
