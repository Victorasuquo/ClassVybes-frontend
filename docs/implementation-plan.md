# Frontend Implementation Plan

## Stack

- Vite 8
- React 19
- TypeScript 6
- Native CSS with semantic custom properties
- GSAP and ScrollTrigger for scoped storytelling motion
- Embla Carousel for the genre gallery
- Phosphor Icons for interface symbols
- Vitest and Testing Library for components
- Playwright and axe-core for browser and accessibility tests

## Architecture

- Static-first one-page site.
- Section components own their markup and motion scope.
- Content lives in a typed content module so copy can change without rewriting layouts.
- Images use explicit dimensions, responsive sources, and lazy loading below the fold.
- No global state library.
- No fake API layer. The early-access form validates locally and states its local-only preview behavior.

## Delivery sequence

1. Scaffold Vite, TypeScript, linting, tests, and CI.
2. Add fonts, color tokens, reset, and global layout.
3. Build header, hero, and responsive navigation.
4. Build the notes-to-track story.
5. Build the genre carousel with original cover art.
6. Build study-anywhere, learning loop, features, safety, FAQ, and footer.
7. Add scoped motion and reduced-motion fallbacks.
8. Add early-access validation and local success state.
9. Optimize images and metadata.
10. Test, visually inspect, and correct at all target widths.

## Quality gates

- TypeScript, lint, tests, and build pass from a clean install.
- No serious or critical axe findings.
- All controls work with keyboard only.
- Carousel works without drag and never autoplays.
- Reduced-motion mode removes nonessential motion.
- Page remains understandable with JavaScript disabled.
- No broken image, clipped heading, or horizontal overflow at required widths.
- Lighthouse accessibility, SEO, and best-practices targets are at least 95; performance target is at least 90 where the environment permits consistent measurement.
- Core Web Vitals targets: LCP at or below 2.5 seconds, INP at or below 200ms, CLS below 0.1 at p75.

## Deployment

The connected Vercel project deploys automatically from GitHub.

- Vite base path: `/`
- Build command: `npm run build`
- Output directory: `dist`
- Pull requests and pushes run frontend CI.
- Vercel owns preview and production deployment behavior.

## Future expansion

When indexable product, pricing, safety, or institutional pages are added, evaluate static generation or SSR rather than adding SPA route fallbacks.
