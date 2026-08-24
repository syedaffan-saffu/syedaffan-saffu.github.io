# Syed Affan Ali — Portfolio

Bilingual (English / 한국어) single-page portfolio. Static site, no build step. Deploys on GitHub Pages.

## Files
- `index.html` — page markup (all text carries `data-i18n` keys)
- `assets/css/styles.css` — styles
- `assets/js/main.js` — language toggle, nav, filters, timeline, counters, copy-email
- `assets/images/profile.jpg` — **replace with your real photo** (440×520 works well)
- `assets/images/og-card.jpg` — **replace** social share card (1200×630)
- `assets/docs/Syed_Affan_Ali_CV.pdf` — resume the header button downloads

## Before you publish — checklist
1. Replace `assets/images/profile.jpg` with your photo.
2. Replace `assets/images/og-card.jpg` with a real 1200×630 share card.
3. Confirm the six project "View code" links. Right now they all point to your GitHub
   profile — swap each to the specific repo when available (search `github.com/syedaffan-saffu`
   in index.html to find them).
4. Confirm the resume PDF in `assets/docs/` is the version you want public.
5. Have a native/fluent Korean speaker proofread the strings in `main.js` (I18N.ko).
   The translations are careful and accurate, but a human check before publishing is worth it.

## Editing text
All copy lives in two places, and they must stay in sync:
- English default text sits inside the HTML elements in `index.html`.
- Both languages live in the `I18N` object in `assets/js/main.js` (`en` and `ko`).
Edit the matching `data-i18n` key in both `en` and `ko` when you change any wording.

## Deploy (GitHub Pages)
Push these files to the root of your `syedaffan-saffu.github.io` repo.
Pages serves `index.html` automatically at https://syedaffan-saffu.github.io/

## Language behaviour
Defaults to Korean for browsers set to Korean, English otherwise. The visitor's manual
choice is remembered (localStorage) across visits.
