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

- Display / body: Figtree, weight 400–600 (samehere / x.ai stand-in for Universal Sans)
- Brand wordmark: Fraunces, weight 600
- Display tracking: about `-0.025em` on hero
- Hero size: `clamp(2.75rem, 4.4vw, 3.5rem)` for short centered statements

## Brand mark

- DG monogram: nested D/G stroke with blue arc accent
- Nav: Fraunces wordmark draws in, then contracts to the DG mark
- Favicon: animated blue arc on `/favicon.svg`
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

1. Translucent N1b nav (wordmark · section links · Resume primary)
2. Centered hero with announcement chip, word-stagger headline, two CTAs
3. Workbench mosaic (`#work`) — samehere + Aced demo panels + stack/status panel
4. Education · Skills · Experience on dark surfaces
5. Compact contact finale + footer rule

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
