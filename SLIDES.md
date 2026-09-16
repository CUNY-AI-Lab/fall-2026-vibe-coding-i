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

Part 1 — Coding & Development Basics:
- Icebreaker (10m)
- What is a Large Language Model?
- Strengths & Limitations
- Setting up an IDE
- The Command Line
- What is Git / GitHub?

Part 2 — Installation & Setup:
- Installing Gemini CLI
- Login Setup
- Exit Ticket
- Next Steps

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
- **Hint:** Watch how a conversation with Gemini CLI turns a plain-language idea into working code — step by step, inside VS Code.

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

## Slide 11 — What is VS Code?

**Label:** Concept
**Title:** What is VS Code?

**Stage (stageCenter):**
- **Big:** A free code editor that works like a smart writing desk for programmers
- **Hint:** It highlights your code, catches errors, and connects to tools like Git and AI assistants — all in one window.
- **Why VS Code?**
  - Free, open-source, and runs on Mac, Windows, and Linux
  - Built-in terminal, Git support, and thousands of extensions
  - Where AI coding agents (like Gemini CLI) do their work

---

## Slide 12 — Setting up an Interactive Development Environment

**Label:** Setup
**Title:** Setting up an Interactive Development Environment

**Stage steps:**
1. Download + install VS Code
2. Sign in with your GitHub profile
3. Add the GitHub extension; start tracking your project
4. Open the integrated terminal — this is where CLI + Git live

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

**Label:** Outside VS Code
**Title:** Opening a Standalone Terminal
**Subtitle:** (You won't need this today)
**Visual:** slide-aside (dashed border, FYI badge, muted heading)

**Stage (stageCompare):**
- **macOS — Terminal:** 1. Press Cmd + Space → 2. Type "Terminal" → 3. Press Return
- **Windows — PowerShell:** 1. Press the Windows key → 2. Type "PowerShell" → 3. Press Enter

**Note:** It's the same terminal. VS Code just puts one inside the editor so you don't have to switch windows.

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
1. Install the GitHub CLI: `brew install gh` (macOS) / `winget install GitHub.cli` (Windows)
2. Start login from your terminal: `gh auth login`
3. Choose **GitHub.com** → **HTTPS** → **Login with a web browser**
4. Copy the one-time code, press Enter, and approve in the browser window that opens
5. Back in your terminal you'll see: **✓ Logged in as your-username**

---

## Slide 19 — Section Break: Part 3

**Tag:** Part 2
**Title:** Installation & Setup
**Subtitle:** Getting Gemini CLI running on your machine
**Accent:** `#2ea043` (green)

---

## Slide 20 — Installing Gemini CLI

**Label:** Setup
**Title:** Installing Gemini CLI

**Stage (stageCompare):**
- **Windows — PowerShell:** 1. Install Node.js LTS from nodejs.org → 2. Reopen PowerShell → 3. `npm install -g @google/gemini-cli`
- **macOS — Terminal:** 1. Install Homebrew from brew.sh → 2. Add Homebrew to PATH → 3. `brew install gemini-cli`

---

## Slide 21 — Login Setup

**Label:** Setup
**Title:** Login Setup

**Stage (step-grid, fragments):**
1. Run `gemini` in your terminal to start authentication
2. Choose "Login with Google" and follow the browser prompt
3. Free tier: 60 requests/min · 1,000 requests/day
4. Having technical issues? Just ask!

---

## Slide 22 — Troubleshooting

**Label:** Check-in
**Title:** Troubleshooting

**Stage (stageCenter):**
- **Big:** Having trouble installing or logging in?
- **Hint:** VS Code, GitHub CLI, Git, Gemini CLI — if anything didn't work, now's the time to fix it together.
- Raise your hand — we'll come to you
- Help a neighbor if you're all set
- No issue too small to ask about

---

## Slide 23 — Upcoming Workshops

**Label:** What's Next
**Title:** Upcoming Workshops
**Subtitle:** New Media Lab (Room 7388.01), CUNY Graduate Center

**Stage (step-grid, fragments):**
- **Vibe Coding II: Building a Prototype** — Tuesday, September 29 · 2:30–4:00 pm. Use AI from the command line to build a small prototype, then customize a feature of your own. Prerequisite: this workshop, or prior familiarity with the command line and Git/GitHub.
- **Vibe Coding III: Bring Your Own Project Clinic** — Tuesday, October 13 · 2:30–4:00 pm. Prerequisite: Vibe Coding I & II, or comparable experience.
- [Register for upcoming workshops](https://cail-workshop-registration.ailab-452.workers.dev/) — **In the meantime:** experiment with Gemini CLI on your own!

---

## Slide 24 — Resources

**Label:** Resources
**Title:** Links & References

**Stage (link list):**
- [ailab.gc.cuny.edu](https://ailab.gc.cuny.edu) — CUNY AI Lab — home page, announcements, and model notes
- [ailab.gc.cuny.edu/resources](https://ailab.gc.cuny.edu/resources) — CAIL Resources — guides, readings, and workshop materials
- [chat.ailab.gc.cuny.edu](https://chat.ailab.gc.cuny.edu) — CAIL Sandbox (Open WebUI) — GLM 5, Kimi K2.5, and more
- [tools.ailab.gc.cuny.edu](https://tools.ailab.gc.cuny.edu) — CAIL Tools — additional lab utilities and experiments
- [newmedialab.cuny.edu](https://newmedialab.cuny.edu) — CUNY New Media Lab — workshop series host
- [aitoolkit.gc.commons.edu](https://aitoolkit.gc.commons.edu) — GC AI Toolkit — curated tools and resources for the Graduate Center community
- [github.com/cuny-ai-lab](https://github.com/cuny-ai-lab) — CUNY AI Lab on GitHub — open source repos, workshop decks, datasets
- [cuny-ai-lab.github.io/Vibe-Coding-Workshop](https://cuny-ai-lab.github.io/Vibe-Coding-Workshop/) — Vibe Coding Workshop deck — companion CAIL workshop
- [code.visualstudio.com/docs](https://code.visualstudio.com/docs) — VS Code documentation — setup, extensions, integrated terminal
- [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — Gemini CLI — open-source AI coding agent that runs in your terminal
- [developers.googleblog.com/gemini-cli-vs-code…](https://developers.googleblog.com/gemini-cli-vs-code-native-diffing-context-aware-workflows/) — Gemini CLI + VS Code — native diffing and context-aware workflows
- [docs.github.com](https://docs.github.com) — GitHub documentation — repos, Pages, pull requests, Actions

---

_Last synced: 2026-09-16 (Fall 2026 dates and Vibe Coding series titles; removed Git Basics: Setting Up, Git Basics: Syncing & Inspecting, and Staging/Committing/Pushing slides; deck now 24 slides). Update both this file and `index.html` together._
