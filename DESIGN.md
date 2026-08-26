# Design — Dev Goswami Portfolio

Locked system for this site. Amend this file when the system needs to grow.
Do not regenerate per section.

## Genre

personal index

## Macrostructure

https://shadcn.com/ — left aligned 26rem column, slash header, bio,
underlined project titles, system-gray buttons, no sticky nav.

## Theme

Light default is white. Dark is black via `html.dark`.

- Type: Inter Variable, `text-sm`
- Column: `max-w-104` (26rem), padding `p-6 md:p-24`
- Block gap: `gap-12`
- Accent: `#0075de` on the GitHub heatmap only
- Buttons: `#e0e0e0` fill, `#919191` border, black text. No radius.

## Brand

Page uses the word "Dev Goswami", not the DG mark. Favicon stays the
geometric DG from `/brand-drafts`.

## Header

`Dev Goswami / github / x / linkedin / theme`

Medium weight. Slashes between. Theme is a text control, not an icon.

## Intro

One `leading-loose` paragraph. Resume is a system-gray button. No hero
headline, no pills, no full viewport.

## Entries

Each block is an underlined `text-base font-medium` title plus
`text-sm leading-relaxed` body. Live work wraps the block and may
include a "Visit site" system button.

## Activity

`github` title links to the profile. Heatmap sits under it and scrolls
inside the column.

## Contact

Underlined `contact` heading, internship line, mailto.

## Motion

Contribution count-up only. Respect `prefers-reduced-motion`.

## What pages MUST share

- Inter on white/black
- 26rem left column with large desktop padding
- Always-on underlines on titles
- System-gray buttons
- No sticky nav, no cards, no icon row

## Provenance

- studied: yes
- DNA-source: https://shadcn.com/
- Identity retained: copy, heatmap blue, favicon
