# ClassVybes Design System

## Foundations

The system combines expressive brand surfaces with calm reading areas. It uses native CSS custom properties, OKLCH color, fluid type, a 4px spacing base, and a small component vocabulary.

## Color tokens

```css
:root {
  --color-brand-deep: oklch(0.550 0.105 230);
  --color-brand: oklch(0.620 0.160 230);
  --color-signal: oklch(0.860 0.190 122);
  --color-bg: oklch(1.000 0.000 0);
  --color-surface: oklch(0.965 0.012 230);
  --color-ink: oklch(0.155 0.020 240);
  --color-muted: oklch(0.455 0.030 235);
  --color-line: oklch(0.865 0.018 230);
  --color-danger: oklch(0.560 0.190 28);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: oklch(0.105 0.018 240);
    --color-surface: oklch(0.165 0.026 235);
    --color-ink: oklch(0.965 0.008 230);
    --color-muted: oklch(0.760 0.028 230);
    --color-line: oklch(0.310 0.032 232);
  }
}
```

White text is used on cobalt fills. Ink is used on chartreuse fills.

## Typography tokens

```css
:root {
  --font-display: "Ojuju Variable", "Arial Black", sans-serif;
  --font-body: "Inclusive Sans Variable", system-ui, sans-serif;
  --text-display: clamp(3.25rem, 7vw, 6rem);
  --text-h1: clamp(3rem, 6vw, 5.4rem);
  --text-h2: clamp(2.2rem, 4vw, 4rem);
  --text-h3: clamp(1.5rem, 2.5vw, 2.2rem);
  --text-body-lg: clamp(1.0625rem, 1.4vw, 1.25rem);
  --text-body: 1rem;
  --text-label: 0.875rem;
}
```

Display line-height is 0.96-1.02. Body line-height is 1.55-1.7. Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.

## Spacing

- `4px`: icon and micro-alignment adjustments.
- `8px`: label-to-control and compact inline gaps.
- `12px`: compact component padding.
- `16px`: default mobile gutter and component padding.
- `24px`: related content gap.
- `32px`: component group gap.
- `48px`: mobile section transition.
- `72px`: desktop content group gap.
- `96-160px`: fluid section spacing through `clamp()`.

## Layout

- Content maximum: 1440px.
- Reading maximum: 68ch.
- Desktop grid: 12 columns with 24px gutters.
- Mobile: one natural-flow column with 16-20px gutters.
- Navigation height: 72px desktop, 64px mobile.
- Hero: minimum 100dvh, with call to action visible in the first viewport.
- Image dimensions are always reserved to prevent layout shift.

## Shape and borders

- Surface radius: 14px.
- Input radius: 10px.
- Pill radius: 999px for buttons and genre selectors only.
- Dividers: 1px using `--color-line`.
- Cards use either a border or a compact shadow, never both as decoration.

## Elevation

The system is flat by default. Depth comes from overlap, scale, and tonal surfaces. One compact media shadow is allowed on cover art:

```css
box-shadow: 0 8px 8px color-mix(in oklch, var(--color-brand-deep) 18%, transparent);
```

## Components

### Primary button

Chartreuse fill, ink text, 48px minimum height, pill shape, 18-24px horizontal padding. Hover lifts 2px. Active presses 1px. Focus uses a 3px outline with 3px offset.

### Secondary button

Transparent background, current-color text, one solid border, and the same dimensions as the primary button.

### Navigation

One-line desktop layout. The mobile menu uses a native button, clear expanded state, and full-width links. The primary CTA remains visible when space allows.

### Genre carousel

Embla carousel with visible previous and next buttons, keyboard operation, a live but non-intrusive genre label, and no autoplay. The next cover remains partially visible to communicate horizontal movement.

### Early-access form

Visible label above the field, 48px minimum height, clear error text below, and a local-only storage disclosure. The success state replaces the form without moving the page unexpectedly.

### FAQ

Native `details` and `summary` elements preserve keyboard behavior and work without JavaScript.

## Breakpoints

Breakpoints follow content failure, with required checks at 320px, 375px, 768px, 1024px, 1440px, and 1920px.

## Z-index

- Base content: 0
- Sticky story media: 10
- Sticky navigation: 20
- Mobile menu: 30
- Dialog backdrop: 40
- Dialog: 50
- Tooltip: 60
