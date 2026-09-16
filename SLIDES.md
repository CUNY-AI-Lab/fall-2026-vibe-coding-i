# SLIDES.md — Vibe Coding I: Foundations
## CUNY AI Lab · Vibe Coding Series

Companion to `index.html`. Keep this file in sync whenever slide titles or text content change.

---

## Slide 1 — Title

**Label:** CUNY AI Lab · Vibe Coding Series
**Title:** Vibe Coding I: Foundations
**Date:** Tuesday, September 22, 2026, 2:30–4:00 pm
**Stage:** Infinite wheel artifact (`src/chainwheel.html`)

---

## Slide 2 — Agenda

**Label:** Workshop
**Title:** Agenda

**Stage (agenda table):**

Part 1 — Concepts & Context (30m):
- Icebreaker
- Vibe Coding in Action
- What is a Large Language Model (LLM)?
- How Do LLMs Generate Code?
- Strengths & Limitations

Part 2 — Development Environment (25m):
- Inspecting Your Code
- Leveling Up: IDEs
- The Command Line
- What is Git / GitHub?
- Getting Started with GitHub

Part 3 — Installation & Setup (35m):
- Your CUNY AI Lab API Key & Quota
- Installing Pi
- Connect Pi to CUNY AI Lab
- Upcoming Workshops
- Links & Resources

---

## Slide 3 — Section Break: Part 1

**Tag:** Part 1
**Title:** Coding & Development Basics

---

## Slide 4 — Icebreaker

**Label:** Icebreaker · 10 min
**Title:** Where does coding live in your imagination?
**Subtitle:** Pick one. Talk to a neighbor.

**Stage (ib-pair):**
- **A** — What would you make if coding were as familiar as writing?
- **B** — Share a challenge you often face in your research, technical or otherwise.

---

## Slide 5 — Demo

**Label:** Demo
**Title:** Vibe Coding in Action

**Stage (stageCenter):**
- **Big:** Live walkthrough: building something from scratch with an AI coding agent
- **Hint:** Watch how a conversation with Pi, our AI coding agent, turns a plain-language idea into working code — step by step, right in the terminal.

---

## Slide 6 — What is a Large Language Model?

**Label:** Concept
**Title:** What is a Large Language Model (LLM)?

**Stage (stageCenter + spectrumBar):**
- **Big:** A probabilistic pattern engine for text.
- It learns statistical relationships between tokens (not "facts")
- It predicts the most likely next token, step by step
- It generates output by repeating that prediction process
- **Pipeline bar:** Tokens → Vectors → Attention → Probabilities → Output

---

## Slide 7 — How Does an LLM Actually Produce an Answer?

**Label:** Concept
**Title:** How Does an LLM Actually Produce an Answer?

**Stage (step-grid, fragments):**
1. **Tokenize** — break your prompt into tokens
2. **Embed** — turn tokens into vectors
3. **Transform** — attention mixes information across tokens
4. **Predict + decode** — choose the next token; repeat
- **Insight:** Your prompt shapes the probability space. The response is a probabilistic approximation of what you like to see. Wording changes can dramatically shift output.

---

## Slide 8 — How Do LLMs Generate Code?

**Label:** Concept
**Title:** How Do LLMs Generate Code?

**Stage (stageCenter):**
- **Big:** Code is just another language pattern.
- The model was trained on large amounts of code + documentation
- It learned patterns in syntax, structure, and common problem solutions
- When you ask for code, it predicts the most likely next tokens in a programming language
- It does not run or test the code unless connected to tools

---

## Slide 9 — What's Good / What's Bad

**Label:** Concept
**Title:** What's Good / What's Bad

**Stage (stageCompare):**
- **✓ What Works:**
  - They autocomplete entire functions, not just words
  - They infer intent from partial instructions
  - They generalize from patterns they have seen before
- **✗ Where Things Go Wrong:**
  - Silent logical errors
  - Hallucinated functions or libraries
  - Outdated APIs
  - Confident but wrong assumptions

---

## Slide 10 — Section Break: Part 2

**Tag:** Part 2
**Title:** Development Environment
**Accent:** `#5a8dee` (blue)

---

## Slide 11 — Inspecting Your Code

**Label:** Concept
**Title:** Inspecting Your Code
**Subtitle:** No extra software needed: the apps already on your computer are enough to look at what the agent builds

**Stage (stageCompare):**
- **macOS — Finder + TextEdit:** Browse files in Finder · Quick peek: select a file and press Space · Read or edit: right-click → Open With → TextEdit (tip: in TextEdit → Settings, turn on "Display HTML files as HTML code") · See it run: double-click `index.html` to open it in your browser
- **Windows — File Explorer + Notepad:** Browse files in File Explorer · Show extensions: View → Show → File name extensions · Read or edit: right-click → Open with → Notepad · See it run: double-click `index.html` to open it in your browser

---

## Slide 12 — Leveling Up: Code Editors & IDEs

**Label:** Looking Ahead
**Title:** Leveling Up: Code Editors & IDEs

**Stage (stageCenter):**
- **Big:** As your projects grow, you'll want an IDE (Integrated Development Environment)
- **Hint:** Code highlighting, error checking, a built-in terminal, Git, and AI assistants, all in one window. You don't need one today.
- **Some popular options:**
  - **Visual Studio Code** — free, runs on macOS, Windows, and Linux
  - **Zed** — fast, open-source editor with built-in AI features
  - **Cursor** or **Windsurf** — editors built around AI coding assistants
  - **JetBrains IDEs** (PyCharm, WebStorm) — full-featured, free for students

---

## Slide 13 — What is the Command Line?

**Label:** Concept
**Title:** What is the Command Line?

**Stage (stageCenter):**
- **Big:** A text-based interface for controlling your computer
- **Hint:** Instead of clicking buttons and icons, you type commands.
- **Why use it?**
  - More powerful and precise control
  - Essential for development work
  - How AI coding agents interact with your system

---

## Slide 14 — Opening Your Terminal

**Label:** Setup
**Title:** Opening Your Terminal
**Subtitle:** This is where you'll run commands and Pi today

**Stage (stageCompare):**
- **macOS — Terminal:** 1. Press Cmd + Space → 2. Type "Terminal" → 3. Press Return
- **Windows — PowerShell:** 1. Press the Windows key → 2. Type "PowerShell" → 3. Press Enter

---

## Slide 15 — Command Line Basics: Navigating

**Label:** Tool
**Title:** Command Line Basics
**Subtitle:** Navigating

**Stage (cmd-cards, fragments):**
Each command is a card with text + CRT screen visualization.
- `pwd` — Print your current location · *screen: path breadcrumb with blinking cursor*
- `mkdir my-project` — Make a new folder · *screen: folder icon pops in*
- `cd my-project` — Move into a folder · *screen: arrow enters folder*
- `cd ..` — Go up one level · *screen: arrow exits folder*

---

## Slide 16 — Command Line Basics: Working with Files

**Label:** Tool
**Title:** Command Line Basics
**Subtitle:** Working with Files

**Stage (cmd-cards, fragments):**
Each command is a card with text + CRT screen visualization.
- `ls` — List what's in the folder · *screen: three items appear with stagger*
- `touch index.html` — Create a new file · *screen: file icon pops in*
- `mv index.html my-project` — Move a file into a folder · *screen: file slides toward folder*

---

## Slide 17 — What is Git? What is GitHub?

**Label:** Concept
**Title:** What is Git? What is GitHub?

**Stage (stageCompare):**
- **Local — Git:** A version control system that runs on your computer. Tracks every change to your files so you can go back in time, undo mistakes, and work in parallel.
- **Cloud — GitHub:** A website that stores your Git repositories online. Share code, collaborate with others, and host websites — all from your browser.

---

## Slide 18 — Logging into GitHub

**Label:** Setup
**Title:** Logging into GitHub

**Stage (step-grid, fragments):**
1. Install the GitHub CLI — macOS: download and run the installer from cli.github.com · Windows: `winget install GitHub.cli`, then open a new PowerShell window
2. Start login from your terminal: `gh auth login`
3. Choose **GitHub.com** → **HTTPS** → **Login with a web browser**
4. Copy the one-time code, press Enter, and approve in the browser window that opens
5. Back in your terminal you'll see: **✓ Logged in as your-username**

---

## Slide 19 — Section Break: Part 3

**Tag:** Part 2
**Title:** Installation & Setup
**Subtitle:** Getting Pi and CUNY AI Lab models running on your machine
**Accent:** `#2ea043` (green)

---

## Slide 20 — Your CUNY AI Lab API Key & Quota (PLACEHOLDER)

**Label:** Coming Soon
**Title:** Your CUNY AI Lab API Key & Quota

**Stage (stageCenter):**
- **Big:** Placeholder: Steve's introduction to the CUNY AI Lab gateway, API keys, and quota
- **Hint:** What the gateway is, how to get your personal API key and keep it safe, and how your quota works so you don't run out before the next workshop. You'll paste the key during setup on the next slides.

> TODO (Steve): replace this placeholder with the gateway / API key / quota section.

---

## Slide 21 — Installing Pi

**Label:** Setup
**Title:** Installing Pi
**Subtitle:** Our AI coding agent, connected to CUNY AI Lab models

**Stage (two-column compare):**
- **Windows — PowerShell:** 1. `winget install OpenJS.NodeJS.LTS` (Node.js 22.19 or newer) and `winget install Git.Git` → 2. Close PowerShell and open a new window → 3. Check with `node --version` and `git --version` → 4. `npx.cmd @cuny-ai-lab/pi-workshop`
- **macOS — Terminal:** 1. Install Node.js (22.19 or newer) from nodejs.org → 2. Open a new Terminal window → 3. Check with `node --version` and `git --version` (if macOS offers to install developer tools for Git, click Install) → 4. `npx @cuny-ai-lab/pi-workshop`

---

## Slide 22 — Connect Pi to CUNY AI Lab

**Label:** Setup
**Title:** Connect Pi to CUNY AI Lab

**Stage (step-grid, fragments):**
1. When LazyPi asks, choose **Install everything**. It takes a few minutes; warnings, a skipped package, and a note about `/login` are normal: ignore them and wait for the key prompt
2. At `CUNY AI Lab API key:` paste your key — your typing stays hidden, and the key is saved securely in Pi
3. Start Pi: `pi` (macOS) / `pi.cmd` (Windows)
4. Type `/model` and choose a CUNY AI Lab model
- **?** Something off? Run the health check (`npx @cuny-ai-lab/pi-workshop --doctor`), or just ask!

---

## Slide 23 — Troubleshooting

**Label:** Check-in
**Title:** Troubleshooting

**Stage (stageCenter):**
- **Big:** Having trouble installing or logging in?
- **Hint:** Terminal, GitHub CLI, Git, Pi — if anything didn't work, now's the time to fix it together.
- Raise your hand — we'll come to you
- Help a neighbor if you're all set
- No issue too small to ask about

---

## Slide 24 — Upcoming Workshops

**Label:** What's Next
**Title:** Upcoming Workshops
**Subtitle:** New Media Lab (Room 7388.01), CUNY Graduate Center

**Stage (step-grid, fragments):**
- **Vibe Coding II: Building a Prototype** — Tuesday, September 29 · 2:30–4:00 pm. Build a small prototype with Pi. Prerequisite: this workshop, or familiarity with the command line and Git/GitHub.
- **Vibe Coding III: Bring Your Own Project Clinic** — Tuesday, October 13 · 2:30–4:00 pm. Prerequisite: Vibe Coding I & II, or comparable experience.
- **Co-Working Sessions** — 2:00–4:00 pm · Thursday, October 29 · Tuesday, November 17 · Thursday, December 3
- [Register for upcoming workshops](https://cail-workshop-registration.ailab-452.workers.dev/) — **In the meantime:** experiment with Pi on your own!
- **! Mind your quota** — Your API key comes with a limited quota. Keep an eye on it as you experiment so you don't burn through it before the next workshop.

---

## Slide 25 — Resources

**Label:** Resources
**Title:** Links & References

**Stage (link list):**
- [ailab.gc.cuny.edu](https://ailab.gc.cuny.edu) — CUNY AI Lab — home page, announcements, and model notes
- [ailab.gc.cuny.edu/events](https://ailab.gc.cuny.edu/events/) — Upcoming workshops, co-working sessions, and registration
- [ailab.gc.cuny.edu/resources](https://ailab.gc.cuny.edu/resources) — CAIL Resources — guides, readings, and workshop materials
- [chat.ailab.gc.cuny.edu](https://chat.ailab.gc.cuny.edu) — CAIL Sandbox (Open WebUI) — GLM 5, Kimi K2.5, and more
- [tools.ailab.gc.cuny.edu](https://tools.ailab.gc.cuny.edu) — CAIL Tools — additional lab utilities and experiments
- [newmedialab.cuny.edu](https://newmedialab.cuny.edu) — CUNY New Media Lab — workshop series host
- [aitoolkit.gc.commons.edu](https://aitoolkit.gc.commons.edu) — GC AI Toolkit — curated tools and resources for the Graduate Center community
- [github.com/cuny-ai-lab](https://github.com/cuny-ai-lab) — CUNY AI Lab on GitHub — open source repos, workshop decks, datasets
- [cuny-ai-lab.github.io/fall-2026-vibe-coding-ii](https://cuny-ai-lab.github.io/fall-2026-vibe-coding-ii/) — Vibe Coding II: Building a Prototype — companion workshop deck
- [pi.dev](https://pi.dev) — Pi — open-source AI coding agent that runs in your terminal
- [github.com/CUNY-AI-Lab/pi-workshop](https://github.com/CUNY-AI-Lab/pi-workshop) — CUNY AI Lab × Pi — setup, `--doctor` health check, troubleshooting, and uninstall
- [docs.github.com](https://docs.github.com) — GitHub documentation — repos, Pages, pull requests, Actions

---

_Last synced: 2026-09-16 (Fall 2026 update: Vibe Coding I title and dates; Pi + CUNY AI Lab setup replaces Gemini CLI; native apps replace VS Code; API key & quota placeholder; upcoming workshops, co-working, quota reminder; events link). Deck has 25 slides. Update both this file and `index.html` together._
