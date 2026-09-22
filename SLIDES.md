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
- What Is Vibe Coding?
- Language Models
- Coding Agents
- Context

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
**Title:** Concepts & Context
**Subtitle:** Vibe coding, language models, agents, and context

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

## Slide 6 — Vibe Coding

**Label:** Concept
**Title:** What Is Vibe Coding?

**Stage (stageCenter):**
- **Big:** A way of making software by describing what you want in natural language and iterating on what the system produces.
- The human expresses an intention rather than writing every instruction as code.
- The system responds by generating or modifying software.
- The process is conversational and iterative.
- Vibe coding describes a practice used across many models and applications.

---

## Slide 7 — Language Models

**Label:** Concept
**Title:** How Does a Language Model Generate Code?

**Stage (stageCenter + spectrumBar):**
- **Big:** A language model generates code in the same basic way it generates prose: one token at a time, using patterns from training and the current context.
- **Pipeline bar:** Prompt and context → Tokens → Representations and attention → Next-token probabilities → Generated code
- **Closing:** Generating code and executing it are separate. A language model by itself cannot open files, run commands, or test what it writes.

---

## Slide 8 — Coding Agents

**Label:** Concept
**Title:** What Makes It a Coding Agent?
**Subtitle:** A coding agent combines a language model with context, tools, and a feedback loop.

**Stage (agent loop, fragments):**
1. **Human goal:** States the desired result
2. **Model:** Uses the available context to choose an action
3. **Tools:** Read or edit files and run commands
4. **Environment:** Returns output or an error
- The agent is the whole system: model, context, tools, and loop.

---

## Slide 9 — Context

**Label:** Concept
**Title:** What Is Context?
**Subtitle:** Context is the information available to the model when it makes its next prediction or decision.

**Stage (context list, fragments):**
- **Your request:** The goal, constraints, and examples you provide
- **Conversation:** What has already been said
- **Project:** Files and instructions the agent has read
- **Tool results:** Command output, errors, tests, and other observations
- Context is finite and constructed. The agent does not automatically know everything in the project or on the computer.

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
- `ls` — List what's in the folder · *screen: three items appear with stagger*
- `mkdir my-project` — Make a new folder · *screen: folder icon pops in*
- `cd my-project` — Move into a folder · *screen: arrow enters folder*
- `cd ..` — Go up one level · *screen: arrow exits folder*

---

## Slide 16 — What is Git? What is GitHub?

**Label:** Concept
**Title:** What is Git? What is GitHub?

**Stage (stageCompare):**
- **Local — Git:** A version control system that runs on your computer. Tracks every change to your files so you can go back in time, undo mistakes, and work in parallel.
- **Cloud — GitHub:** A website that stores your Git repositories online. Share code, collaborate with others, and host websites — all from your browser.

---

## Slide 17 — Logging into GitHub

**Label:** Setup
**Title:** Logging into GitHub

**Stage (step-grid, fragments):**
1. Install the GitHub CLI — macOS: download and run the installer from cli.github.com · Windows: `winget install GitHub.cli`, then open a new PowerShell window
2. Start login from your terminal: `gh auth login`
3. Choose **GitHub.com** → **HTTPS** → **Login with a web browser**
4. Copy the one-time code, press Enter, and approve in the browser window that opens
5. Back in your terminal you'll see: **✓ Logged in as your-username**

---

## Slide 18 — Section Break: Part 3

**Tag:** Part 2
**Title:** Installation & Setup
**Subtitle:** Getting Pi and CUNY AI Lab models running on your machine
**Accent:** `#2ea043` (green)

---

## Slide 19 — Your CUNY AI Lab API Key & Quota

**Label:** Setup
**Title:** Your CUNY AI Lab API Key & Quota

**Stage (key guide):**
- Compact screenshot of the CUNY AI Lab Dashboard's key-creation form
- **Lead:** Create a personal key in your CUNY AI Lab Dashboard. Copy it when it appears. You cannot reveal the complete key again.
- **Keep it private:** Paste the key only into Pi's hidden prompt. Never put it in chat, GitHub, screenshots, or email.
- **Your quota:** All your personal keys share one allowance. Creating another key does not add capacity. Check your current usage in the Dashboard.
- **Guide:** https://ailab.gc.cuny.edu/docs/api-keys/

---

## Slide 20 — Installing Pi

**Label:** Setup
**Title:** Installing Pi
**Subtitle:** Our AI coding agent, connected to CUNY AI Lab models

**Stage (two-column compare):**
- **Windows — PowerShell:** 1. `winget install OpenJS.NodeJS.LTS` (Node.js 22.19 or newer) and `winget install Git.Git` → 2. Close PowerShell and open a new window → 3. Check with `node --version` and `git --version` → 4. `npx.cmd @cuny-ai-lab/cail-pi`
- **macOS — Terminal:** 1. Install Node.js (22.19 or newer) from nodejs.org → 2. Open a new Terminal window → 3. Check with `node --version` and `git --version` (if macOS offers to install developer tools for Git, click Install) → 4. `npx @cuny-ai-lab/cail-pi`

---

## Slide 21 — Connect Pi to CUNY AI Lab

**Label:** Setup
**Title:** Connect Pi to CUNY AI Lab

**Stage (step-grid, fragments):**
1. When LazyPi asks, choose **Install everything**. It takes a few minutes; warnings, a skipped package, and a note about `/login` are normal: ignore them and wait for the key prompt
2. At `CUNY AI Lab API key:` paste your key — your typing stays hidden, and the key is saved securely in Pi
3. Start Pi: `pi` (macOS) / `pi.cmd` (Windows)
4. Type `/model` and choose a CUNY AI Lab model
- **?** Something off? Run the health check (`npx @cuny-ai-lab/cail-pi --doctor` on macOS, `npx.cmd @cuny-ai-lab/cail-pi --doctor` on Windows), or just ask!

---

## Slide 22 — Troubleshooting

**Label:** Check-in
**Title:** Troubleshooting

**Stage (stageCenter):**
- **Big:** Having trouble installing or logging in?
- **Hint:** Terminal, GitHub CLI, Git, Pi — if anything didn't work, now's the time to fix it together.
- Raise your hand — we'll come to you
- Help a neighbor if you're all set
- No issue too small to ask about

---

## Slide 23 — Upcoming Workshops

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

## Slide 24 — Resources

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
- [github.com/CUNY-AI-Lab/cail-pi](https://github.com/CUNY-AI-Lab/cail-pi) — CUNY AI Lab × Pi — setup, `--doctor` health check, troubleshooting, and uninstall
- [docs.github.com](https://docs.github.com) — GitHub documentation — repos, Pages, pull requests, Actions

---

_Last synced: 2026-09-21 (installer renamed to `@cuny-ai-lab/cail-pi`; credits trimmed; `ls` folded into the navigating slide and the Working with Files slide removed). Deck has 24 slides. Update both this file and `index.html` together._
