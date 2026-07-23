---
name: ClassVybes
description: Turn study material into tracks made for revision.
colors:
  committed-cobalt: "oklch(0.55 0.105 230)"
  vivid-cobalt: "oklch(0.62 0.16 230)"
  signal-chartreuse: "oklch(0.86 0.19 122)"
  paper-white: "oklch(1 0 0)"
  cool-surface: "oklch(0.965 0.012 230)"
  ink-navy: "oklch(0.155 0.02 240)"
  muted-slate: "oklch(0.455 0.03 235)"
  quiet-line: "oklch(0.865 0.018 230)"
  danger-red: "oklch(0.56 0.19 28)"
  night-paper: "oklch(0.105 0.018 240)"
  night-surface: "oklch(0.165 0.026 235)"
typography:
  display:
    fontFamily: "Ojuju Variable, Arial Black, sans-serif"
    fontSize: "clamp(3.75rem, 6.6vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Ojuju Variable, Arial Black, sans-serif"
    fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Ojuju Variable, Arial Black, sans-serif"
    fontSize: "clamp(1.65rem, 2.5vw, 2.35rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inclusive Sans Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inclusive Sans Variable, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 760
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  field: "10px"
  surface: "14px"
  pill: "999px"
spacing:
  xs: "10px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-mobile: "96px"
  section-fluid: "clamp(96px, 12vw, 176px)"
components:
  button-primary:
    backgroundColor: "{colors.signal-chartreuse}"
    textColor: "{colors.ink-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  input:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-navy}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "52px"
  media-surface:
    backgroundColor: "{colors.cool-surface}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.surface}"
    padding: "32px"
---

# Design System: ClassVybes

## 1. Overview

**Creative North Star: "The Annotated Mixtape"**

ClassVybes combines the confidence of a contemporary record sleeve with the clarity of a marked-up lecture note. Its pages feel rhythmic, image-led, and culturally current, while every reading and decision area stays calm enough for academic trust.

The composition borrows music-product confidence without copying a streaming dashboard. Editorial scale, asymmetry, original student photography, and genre artwork create energy. Flat surfaces, plain-language safety copy, and obvious controls keep that energy useful. The system rejects generic AI-tool styling, childish EdTech templates, and neon nightclub cosplay.

**Key Characteristics:**

- Committed cobalt creates the visual world; chartreuse marks action and learning focus.
- Ojuju gives headlines a distinctive Nigerian display voice; Inclusive Sans carries every explanation and control.
- Images show real revision contexts, while square cover art makes each genre collectable.
- Section spacing is generous and rhythmic, with a 1,440px maximum shell and 16px mobile gutters.
- Motion explains transformation and progress, then fully yields to reduced-motion preferences.

## 2. Colors

The palette feels like a clear afternoon campus punctuated by a highlighter mark.

### Primary

- **Committed Cobalt** (`oklch(0.55 0.105 230)`): Immersive story, safety, and signup backgrounds.
- **Vivid Cobalt** (`oklch(0.62 0.16 230)`): Icons, wordmark emphasis, and interactive detail.

### Secondary

- **Signal Chartreuse** (`oklch(0.86 0.19 122)`): Primary actions, selected ideas, track stamps, and active learning cues.

### Neutral

- **Paper White** (`oklch(1 0 0)`): Default light canvas and input surface.
- **Cool Surface** (`oklch(0.965 0.012 230)`): Section changes and feature containers.
- **Ink Navy** (`oklch(0.155 0.02 240)`): Primary light-mode text.
- **Muted Slate** (`oklch(0.455 0.03 235)`): Explanatory copy and secondary navigation.
- **Quiet Line** (`oklch(0.865 0.018 230)`): One-pixel dividers and field boundaries.
- **Night Paper** (`oklch(0.105 0.018 240)`) and **Night Surface** (`oklch(0.165 0.026 235)`): Automatic dark-mode canvas and tonal surface.

**The Signal Rule.** Chartreuse occupies less than ten percent of a screen and always means action, selection, or learning focus.

**The One-World Rule.** Do not introduce unrelated purple, orange, pink, or rainbow themes section by section.

## 3. Typography

**Display Font:** Ojuju Variable (with Arial Black and sans-serif fallback)

**Body Font:** Inclusive Sans Variable (with system-ui and sans-serif fallback)

**Character:** Ojuju makes short phrases feel like custom display lettering, while Inclusive Sans keeps product claims, controls, and safety language highly legible. The contrast should feel authored, not decorative.

### Hierarchy

- **Display** (650, `clamp(3.75rem, 6.6vw, 6rem)`, 0.92): Hero statement only; mobile scales to `clamp(3.2rem, 17vw, 4.5rem)`.
- **Headline** (650, `clamp(2.8rem, 5.5vw, 5.5rem)`, 0.98): Section openings, capped near 16 characters wide.
- **Title** (650, `clamp(1.65rem, 2.5vw, 2.35rem)`, 1.02): Feature, step, and genre names.
- **Body** (400, `1rem` to `1.25rem`, 1.65): Explanations, usually limited to 44-62 characters.
- **Label** (650-820, `0.78rem` to `0.92rem`): Navigation, buttons, metadata, and uppercase kickers.

**The Two-Voices Rule.** Display type performs; body type explains. Never set paragraphs or safety copy in Ojuju.

**The Short-Headline Rule.** Rewrite a headline before allowing it to stack beyond four mobile lines.

## 4. Elevation

The system is flat by default. Depth comes from overlap, tonal surfaces, crop scale, and sticky motion rather than decorative shadow stacks. The only production shadow is the compact `0 8px 8px oklch(0.2 0.05 230 / 0.22)` lift beneath the generated cover inside the cobalt transformation stage.

**The Flat-at-Rest Rule.** Cards and controls do not combine visible borders with wide, soft shadows. A one-pixel boundary or a tonal fill is enough.

## 5. Components

Components are tactile and confident: clear hit areas, simple shapes, and no ornamental chrome.

### Buttons

- **Shape:** Full pill (`999px`) with a minimum height of 48px.
- **Primary:** Signal Chartreuse on Ink Navy, `12px 22px`, weight 760.
- **Secondary:** Transparent or Paper White with a one-pixel Ink Navy boundary.
- **Hover / Focus:** Lift by 2px using `cubic-bezier(0.16, 1, 0.3, 1)`; focus uses a 3px Chartreuse outline with a 4px offset.
- **Active:** Settle down by 1px. Never add glow, blur, or an animated gradient.

### Cards / Containers

- **Corner Style:** 14px for media and story surfaces; 10px for compact track stamps.
- **Background:** Paper White, Cool Surface, Committed Cobalt, or Signal Chartreuse according to narrative role.
- **Shadow Strategy:** Flat by default; see the single cover-art exception under Elevation.
- **Border:** Usually none. Divided lists use one-pixel Quiet Line rules.
- **Internal Padding:** `clamp(28px, 3.5vw, 52px)` for feature surfaces.

### Inputs / Fields

- **Style:** 52px minimum height, 10px radius, Paper White fill, and a one-pixel quiet boundary.
- **Focus:** Global 3px Chartreuse focus outline with 4px offset.
- **Error:** Change the boundary to Danger Red and pair it with explicit alert text. Color never carries the error alone.
- **Privacy State:** Signup confirmation must state whether an address was sent or stored.

### Navigation

The fixed header uses the canvas color and gains a one-pixel divider after the reader moves past the hero. Desktop links are centered and restrained. At 1,024px and below, navigation moves into a labelled 46px menu control and a single-column popover with the signup action emphasized in Chartreuse.

### Genre Carousel

Square original artwork, large display titles, subject labels, and durations form the collectible unit. Secondary text on Cobalt uses the full On Brand color to maintain AA contrast. The carousel never autoplays, exposes previous and next buttons, supports drag, and keeps a visible `current / total` counter.

### Transformation Stage

A sticky Cobalt stage turns a source sheet into a mix panel and then a finished cover. Every explanation remains fully opaque; active state is communicated by the changing stage, not by lowering text contrast. On mobile and in reduced-motion mode, the sequence becomes a readable static stack.

## 6. Do's and Don'ts

### Do:

- **Do** make the source-to-track transformation the central product story.
- **Do** use real student context, original genre art, and image crops that feel specific to contemporary African campus life.
- **Do** use Signal Chartreuse only for actions, selection, and lyric focus.
- **Do** maintain keyboard access, 44px-or-larger control targets, visible focus, semantic headings, and a complete reduced-motion path.
- **Do** keep uncertainty visible: generated lyrics should be reviewed against the source, and unresolved privacy policy must be named plainly.

### Don't:

- **Don't** use generic AI-tool marketing: purple glow, robot imagery, floating dashboard cards, vague intelligence claims, or chat bubbles as decoration.
- **Don't** use template EdTech pages: three identical feature cards, childish primary colors, stock classroom photography, or institutional copy that talks past students.
- **Don't** use music-app cosplay: neon nightclub visuals, decorative waveform overload, autoplaying audio, or illegible dark interfaces.
- **Don't** invent retention percentages, testimonials, university logos, user counts, awards, or compliance badges.
- **Don't** use scroll-jacking, motion without reduced-motion support, an inaccessible carousel, or controls that imply working audio generation when the backend is not connected.
- **Don't** use gradients, glassmorphism, oversized rounded-card grids, emoji as interface icons, or a colored border stripe wider than 1px.
