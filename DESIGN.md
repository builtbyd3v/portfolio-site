# Design — Dev Goswami Portfolio

Locked system for this site. Amend this file when the system needs to grow.
Do not regenerate per section.

## Genre

swiss product-index

## Macrostructure

Type-led recruiter portfolio in the shadcn.com family: sticky text nav, left
aligned statement hero, stacked work, then denser proof, compact contact.

## Theme

Light default. Dark via `html.dark`. Zinc scale from shadcn nova.

- Type: Geist Variable
- Radius: `0.625rem`
- Accent: `#0075de` on the GitHub heatmap only
- Background / foreground / muted / border: shadcn zinc tokens in `src/index.css`

## Brand mark

Geometric interlocking DG from `/brand-drafts/logo-dg-geometric-clear.png`.
Favicon uses the same mark.

## Nav

56px sticky bar, `max-w-3xl`, text links. 1px underline follows the active
section. GitHub as a word. Theme toggle is a ghost icon. No island, no icon
row, no announcement chip.

## Hero

Left aligned under the nav. Not a full viewport. Headline, one subhead, two
text links (work, resume). No pill, no word stagger, no scroll cue.

## Work

Stacked editorial entries. Title, body, full stack string, screenshot.
Hover scales the image `1.015`. No equal-height cards, no tech chips.

## Activity

Live contribution graph. Count-up on the yearly total. Skeleton while loading.
No card chrome.

## Proof

Education and experience as `ProofRow`: title, detail, dates, body. Skills as
a two-column definition list of comma-separated names. No icon badges.

## Contact

Footer only. Hiring question, relocate line, email as a text link. Socials as
words.

## Motion

Three beats only:

1. Nav underline (`layoutId`)
2. Contribution count-up
3. Project image hover scale

Respect `prefers-reduced-motion`. No section blur, no word stagger.

## What pages MUST share

- Geist on a zinc canvas
- `max-w-3xl` column, `px-6`
- Sentence-case headings
- Accent blue only on the heatmap
- Real project screenshots, no fake browser chrome

## Provenance

- studied: yes
- DNA-source: https://shadcn.com/
- Motion cues from https://transitions.dev/ and https://www.inspora.design/
- Identity retained: DG mark, heatmap blue, existing copy
