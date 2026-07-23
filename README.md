# ClassVybes Frontend

ClassVybes is a music-led revision concept that turns uploaded study material into genre-based study tracks. This repository contains the research-backed public landing page for the July 2026 product brief.

## What is implemented

- Responsive React and TypeScript landing page
- Source-to-track scroll story
- Keyboard-accessible Embla genre carousel
- GSAP reveals and parallax with reduced-motion fallbacks
- Light and dark color schemes
- Local-only early-access form preview
- SEO, social preview, and robots metadata
- Component, browser, responsive, and axe accessibility tests
- GitHub Actions CI and automatic Vercel deployment through the connected repository

The form deliberately does not send or store email addresses. A secure signup service and final privacy policy must be connected before collecting data.

## Local development

Use Node.js 22.12 or later.

```bash
npm ci
npm run dev
```

Vite serves the site from `/`, matching Vercel's default static deployment path.

## Quality commands

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
npm run check
```

Install the Playwright browser once before the end-to-end suite:

```bash
npx playwright install chromium
```

## Product and design documentation

- [Product context](./PRODUCT.md)
- [Product brief](./docs/product-brief.md)
- [UX research](./docs/ux-research.md)
- [Landing-page content](./docs/landing-page-content.md)
- [Brand guidelines](./docs/brand-guidelines.md)
- [Design system](./docs/design-system.md)
- [Motion and interaction specification](./docs/motion-interaction-spec.md)
- [Implementation plan](./docs/implementation-plan.md)
- [Machine-readable design system](./DESIGN.md)

## Deployment

Every push to `main` runs frontend CI. The repository's existing Vercel integration handles production deployment automatically using Vite's standard build command and `dist` output.
