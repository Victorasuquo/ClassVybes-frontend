# Motion and Interaction Specification

## Motion purpose

Every animation must communicate hierarchy, transformation, feedback, or selection. Motion that only decorates the page is removed.

## Technical approach

Use GSAP 3 with ScrollTrigger and `@gsap/react`. Each animated section owns a scoped `useGSAP` context. Use `gsap.matchMedia()` for desktop, mobile, and reduced-motion behavior. Embla owns the genre carousel.

## Easing and duration

- Standard reveal: `0.7s`, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Fast control response: `0.18s`, `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Media transition: `0.55s`, `cubic-bezier(0.16, 1, 0.3, 1)`.
- No bounce, elastic, or spring overshoot.

## Hero entrance

The support line, headline, body, and actions enter as one short sequence. The photograph reveals through a clean clip from the right. Total sequence length stays below 1.2 seconds. Content remains visible in the document before JavaScript runs.

## Notes-to-track story

Desktop only: the media column stays sticky while three textual steps pass through natural document flow. The active visual changes at each step. No horizontal scroll hijack. Mobile renders the same content as a simple vertical sequence.

## Parallax

Hero and study-anywhere media may move 4-6% of their own height across the viewport. The range is intentionally small. Parallax is disabled below 768px and for reduced motion.

## Section reveals

Only major narrative groups reveal. Default travel is 24px with opacity from 0.01 to 1. Repeated small elements may stagger by 60ms within one group. The same reveal is not applied mechanically to every section.

## Genre carousel

- No autoplay.
- Previous and next controls are always visible on desktop and mobile.
- Swipe and drag are supported, but never required.
- Keyboard users can operate controls and follow focus without being moved unexpectedly.
- Artwork changes with a short scale and opacity transition.
- Selected genre text updates without announcing every decorative detail.

## Button feedback

Hover lifts 2px and slightly increases contrast. Active presses 1px. Magnetic cursor physics, ripple effects, and custom cursors are prohibited.

## Navigation

The header becomes slightly more compact after leaving the hero. The mobile menu opens without body-scroll jank and returns focus to the trigger when closed.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Remove hero choreography.
- Remove pinning, scrub, and parallax.
- Render all content in its final state.
- Keep carousel changes immediate.
- Preserve focus, hover contrast, and non-motion feedback.

## Performance limits

- Animate transform and opacity only.
- Do not attach raw scroll listeners.
- Do not use smooth-scroll replacement.
- Refresh ScrollTrigger after fonts and critical images resolve.
- Keep will-change limited to elements actively animating.
