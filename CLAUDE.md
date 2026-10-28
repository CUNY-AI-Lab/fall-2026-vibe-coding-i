# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-page HTML slide deck for **Vibe Coding I: Foundations** (CUNY AI Lab · Vibe Coding Series, Fall 2026), hosted via GitHub Pages at `cuny-ai-lab.github.io/fall-2026-vibe-coding-i`. The companion deck is **Vibe Coding II: Building a Prototype** (`CUNY-AI-Lab/fall-2026-vibe-coding-ii`). The original Spring 2026 deck lives at `CUNY-AI-Lab/gen-dev-foundations`; this repo was forked from it and has diverged.

## Content Sources of Truth

- **Dates, times, rooms, registration link:** https://ailab.gc.cuny.edu/events/ (Vibe Coding I is Tue Sept 22, 2026, 2:30–4:00 pm; co-working sessions Thu Oct 29, Tue Nov 17, Thu Dec 3, 2:00–4:00 pm).
- **AI coding agent:** Pi with CAIL Pi (`@cuny-ai-lab/cail-pi` 0.4.0+). Follow the setup guide at https://ailab.gc.cuny.edu/docs/cail-pi/ (source: https://github.com/CUNY-AI-Lab/cail-pi): Pi's own installer (`curl -fsSL https://pi.dev/install.sh | sh` / `irm https://pi.dev/install.ps1 | iex`), then `pi install npm:@cuny-ai-lab/cail-pi`, then `/login cail` → **Sign in with CUNY AI Lab** inside Pi; `/cail` is the health check. The old `npx @cuny-ai-lab/cail-pi` installer (LazyPi) no longer works; anyone set up that way runs `pi update --all`. Gemini CLI and VS Code are no longer used in this workshop.
- **Installs:** Pi's installer brings Node.js, so the deck no longer installs it. On macOS, Homebrew (slide 17, for `gh`) comes first, so Pi's installer adds Node.js through Homebrew and `node`/`npx` end up on PATH; without Homebrew it installs a standalone Node.js that is not on the shell's PATH. On Windows, slide 17 installs Git with `winget install Git.Git` alongside `GitHub.cli`: Pi's installer would otherwise default to a private portable Git Bash that does not put `git` on PATH. Slides tell participants never to use `sudo`.
- **Slide 20** is Steve's CUNY AI Lab gateway / access / quota section; CUNY sign-in is the default, a pasted API key the fallback.

## Repository Layout

- `index.html` — the slide deck (HTML + CSS inline, JS loaded from `src/slides.js`, no build step)
- `SLIDES.md` — plain-text companion documenting every slide's label, title, and stage content
- `img/qr-code.svg` — QR code (`img/qr-code.svg`, title slide) encodes `https://cuny-ai-lab.github.io/fall-2026-vibe-coding-i/`: plain dark modules on white so any phone camera can read it on a dark projector slide. Regenerate it if the Pages URL changes with Python's `qrcode` package (error correction M, border 3) and check it decodes before committing.
- `src/slides.js` — navigation logic (keyboard, swipe, slider, hash URLs, fragment reveals), plus a copy button on every line of each `.code-block` (trailing `# macOS`-style notes are shown but not copied), so code blocks must stay plain text, one command per line
- `src/chainwheel.html` — self-contained canvas animation embedded via iframe on the title slide

## Sync Rules

- **SLIDES.md must always match index.html.** When slide titles, content, or ordering change in `index.html`, update `SLIDES.md` to reflect the same changes. The reverse also applies.
- The upstream copy lives at `milwrite/quimbot/docs/cail-workshop-1/`. When syncing from upstream, the only path adjustment needed is the title-slide iframe: upstream uses `../gallery/chainwheel.html`, this repo uses `src/chainwheel.html`.

## Slide Architecture

Each slide is a `<section class="slide" role="group" aria-roledescription="slide">` with a `data-slide` attribute. Layout is two panels:
- `.content` — left panel with label, title (`<h2>`), subtitle (`<h3>`)
- `.stage` — right panel with visual content (terminal, cards, links, iframe, or placeholder `.ph`)

A single visually-hidden `<h1>` at the top of `<main>` establishes the document heading. Slide titles use `<h2>`, subtitles use `<h3>`.

Slide types with special CSS:
- `data-slide="title"` — stacked layout (content on top, stage fills below)
- `.slide-break` — full-bleed section dividers (Part 1 / Part 2 / Part 3)
- `.slide-icebreaker` — custom two-question layout using `.ib-pair` / `.ib-q`

Navigation is in `src/slides.js`: arrow keys, swipe, hash-based URLs (`#1` through `#25`), sticky footer slider wrapped in `<nav aria-label="Slide navigation">`.

## Design Tokens

```css
--part:   #b89060   /* warm bronze — labels, accents, step numbers */
--accent: #79c0ff   /* code-blue — links, focus rings */
--bg:     #0b0e14   /* dark navy background */
```

Section breaks override `--part` via inline style: Part 2 `#5a8dee` (blue), Part 3 `#2ea043` (green).

## CRT Command Cards

Slides 15–16 (command line basics) use `.cmd-cards` — a grid of `.cmd-card` elements, each with:
- `.cmd-info` — command text (`code .hl` for the verb, `.str` for strings) + `.cmd-desc`
- `.cmd-screen` — CRT monitor with scanline overlay and green power dot

Screen animations use visualization primitives inside `.vis`:
- `.vis-folder`, `.vis-file`, `.vis-commit`, `.vis-cloud`, `.vis-line` — shape primitives
- `.vis-dot--ok` (green), `.vis-dot--mod` (bronze) — status indicators on files
- `.vis-stage-box` — dashed staging area
- `.vis-pop`, `.vis-slide-r`, `.vis-slide-l`, `.vis-stagger` — animation classes (triggered by `.frag.visible`)

## Agenda Links

Agenda items are `<a>` elements with `href="#N"` pointing to slide numbers. If slides are added, removed, or reordered, update these href values, the `<!-- N · ... -->` comments, the `max` on `#slide-scrubber`, the `#slider-counter` text, and the `## Slide N` headings in `SLIDES.md`.

## Slide Design Workflow

When making significant visual changes to a slide or adding a new slide, always invoke the `frontend-design` skill. This ensures design quality, consistent aesthetics, and intentional layout decisions across the deck.

## Accessibility

- Only the title slide's `.stage` (decorative chainwheel) uses `aria-hidden="true"`. All other stage panels are visible to assistive tech.
- `#slide-announce` is an `aria-live="polite"` region. `slides.js` writes slide change announcements into it.
- `.frag` elements toggle `aria-hidden` in sync with the `.visible` class so progressive reveals are mirrored for screen readers.
- Avoid stacking `opacity` on already-muted `color` values — flatten to a single `rgba()` to maintain WCAG AA contrast.
- `prefers-reduced-motion: reduce` disables all transitions and animations.

## Commit Style

Short, lowercase messages, no sign-off.
