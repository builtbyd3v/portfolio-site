# Design — Dev Goswami Portfolio

A locked design system for this site. Atmospheric Workbench DNA studied from
https://x.ai/ and ported from samehere's `feat/zero-to-internship` landing.
Do not regenerate per section — amend this file when the system needs to grow.

## Genre

atmospheric

## Macrostructure family

- Marketing / portfolio pages: Workbench (centered statement hero → living
  product mosaic → denser proof sections → compact contact)

## Theme

- `--color-canvas`       `#0a0a0a`
- `--color-surface`      `#1a1a1a`
- `--color-surface-raised` `#1f2228`
- `--color-ink`          `#ffffff`
- `--color-body`         `rgba(255, 255, 255, 0.72)`
- `--color-muted`        `#7d8187`
- `--color-line`         `rgba(255, 255, 255, 0.06)`
- `--color-line-strong`  `rgba(255, 255, 255, 0.15)`
- `--color-tint`         `rgba(255, 255, 255, 0.05)`
- `--color-accent`       `#0075de`
- `--color-accent-strong` `#4f9fe8`
- `--color-accent-soft`  `rgba(0, 117, 222, 0.14)`
- `--color-focus`        `#0075de`

## Typography

- Display / body / brand wordmark: Figtree, weight 400–600
- Display tracking: about `-0.025em` on hero
- Hero size: `clamp(2.75rem, 4.4vw, 3.5rem)` for short centered statements

## Brand mark

- DG interlocking monogram: blocky D with nested G (locked draft)
- Nav: Figtree wordmark draws in, then contracts to the DG mark
- Favicon: `/favicon.png` (and `/favicon.svg`) using the geometric DG mark on `#0a0a0a`, same asset as the nav

## Nav

- At rest: transparent, no blur, no chrome. Sits over the hero
- On scroll (`scrollY > 28`): soft canvas fade behind an inset island
- Island: `--color-surface` at ~82% with 18px blur, light hairline, inset highlight only (no drop shadow)
- Fluid side inset (`clamp(0.9rem, 3.2vw, 2.25rem)`) so the bar never reads full-bleed; fade stays light so those gaps stay visible
- Section links hide below 900px; five icon actions stay

## Hero

- First viewport is hero-only (announcement, headline, subhead, CTAs, scroll cue)
- Workbench and proof sections begin below with intentional vertical gap
## Spacing

4-point named scale in `src/index.css` / Tailwind `@theme`. Prefer semantic
utility classes over raw rem values.

## Motion

- Easings: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`; short micro `120–220ms`
- Reveal: hero word stagger; section fade-up via `Reveal`
- Reduced-motion: skip stagger (`hero-skip-intro`), opacity-only or instant show

## Microinteractions stance

- Silent success; no celebratory toasts
- Primary CTA: white fill pill on dark canvas
- Secondary CTA: ghost pill with hairline ring
- Focus: 2px accent outline, offset 3px, never animated

## CTA voice

- Primary: white background, near-black text, full pill (`9999px`), height 44px
- Secondary: transparent, white text, `box-shadow: 0 0 0 1px rgba(255,255,255,0.15)`
- Active: `scale(0.98)`

## Page rhythm

1. Translucent N1b nav (clear over the hero; on scroll, canvas fade + inset surface island)
2. Centered hero with announcement chip, word-stagger headline, two CTAs
3. Workbench mosaic (`#work`) — current focus panel, then shipped project cards
4. Activity (`#activity`) — GitHub contribution heatmap in accent blue
5. Education · Skills · Experience on dark surfaces
6. Compact contact finale + footer rule

## What pages MUST share

- Dark canvas and surface tokens
- Bricolage + Hanken pairing
- White primary / ghost secondary CTA voice
- Accent blue used sparingly (≤ ~5% of a viewport)
- No fake browser chrome; real project screenshots only

## What pages MAY differ on

- Mosaic panel count and spans
- Section header copy

## Provenance

- studied: yes
- DNA-source: url — https://x.ai/
- Ported from: samehere `feat/zero-to-internship` `.landing-xai` tokens
- Portfolio identity retained: Bricolage Grotesque + Hanken Grotesk
