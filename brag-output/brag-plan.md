# Brag Plan: yodkwtf.com (Durgesh Chaudhary's Portfolio)

## What is this app?
A personal developer portfolio (Next.js 16 / React 19 / Sanity CMS) that refuses to go stale on its own: project case studies render the linked repo's *live* GitHub README instead of a hand-written blurb, and the MDX blog auto-publishes and auto-emails future-dated posts the moment their date arrives — no redeploy, no manual click.

## The angle
Most portfolios are a snapshot — updated once, then quietly rotting. This one is built to keep itself honest: ship a commit to a project's README and the case study updates itself; schedule a blog post for next month and it publishes *and* emails subscribers on its own. The angle is "a portfolio with its own nervous system" — told through three real engineering beats, not marketing copy.

## Hook (first 2-3 seconds)
The hero's glass code card (`dev.ts`) types itself out — `name`, `role`, `stack`, `available: true` — closing on the cursor blink. It's the site introducing its own engineer, literally in code.

## Key moments (the middle)
- A featured project card ("Cinematica") gets clicked → the case study page reveals it's actually rendering the GitHub README live (headings, a code block, an image) — not a static description.
- A blog post scrolls with the scroll-spy Table of Contents lighting up the active heading, and a code block's filename tab + copy button in action.
- A future-dated post's date ticks forward on screen → the post appears in the list on its own and a newsletter email visibly sends — zero redeploy.

## Outro / punchline
The emerald glow orb (from the OG card) blooms behind the "DC" monogram. Line: "A portfolio that updates itself." Then the wordmark and yodkwtf.com.

## User flow worth showing
1. **Entry:** Visitor scrolls the home page to a featured project card, clicks "Case study."
2. **Key action:** The project detail page loads — and instead of static copy, the actual GitHub README renders (heading, a code fence, an inline image), proving the page is live-synced to the repo.
3. **Result:** Cut to the blog: a future-dated post's publish date arrives on its own, the post appears in the list, and a newsletter email fires — the site publishing and promoting itself with no human in the loop.

## Tone
- Preset: polished
- Creative direction: a quiet, confident personal-brand film — dark emerald palette, serif display type, restrained motion. The engineering flex speaks for itself; the tone shouldn't oversell it.
- Interpretation: 3-4 scenes, longer holds (4-6s), slow crossfades, no jokes or hard cuts. Confidence through restraint — this is a real engineer's site, not a parody product.

## Format: landscape — 1920x1080
## Duration: 20s

## Visual identity (from the project)
- Background: `#0e0e0c` (dark mode default; near-black with warm undertone)
- Accent: emerald gradient `#34d399` → `#10b981` (`--accent-400` → `--accent-600`), glow color `rgba(52,211,153,0.2)`
- Text: `#f0efe9` (primary), `#8a8a7e` (muted)
- Display font: Instrument Serif (headlines, italic accents)
- Body/mono font: Outfit (body), DM Mono (code, stats, labels)
- Strongest visual element: the hero's glassmorphic `dev.ts` code card, and the radial emerald glow orb from `og.png`

## Share copy (draft)
My portfolio doesn't just describe my projects — it pulls the live GitHub README for each one, and future-dated posts publish and email themselves out. No redeploys, no stale docs.

## Audio direction
- Role: warm, minimal bed with restrained motion-matched accents
- Music: low ambient/synth bed, confident and unhurried — no percussion-forward or upbeat tracks
- Music treatment: fade in under the hook, hold low through the middle, slight swell into the outro, fade out after the wordmark settles
- Music cue guidance: to be detected at composition time (custom/bundled track TBD by Hyperframes); target 1 strong cue at the README-reveal beat and 1 at the outro swell — no dense beat-grid sequencing needed given the low scene count
- Audio-reactive treatment: subtle — glow orb presence/opacity may breathe gently with the music, nothing waveform-literal
- SFX posture: sparse — a soft key-tick under the typed hero code, a single soft "send" chime on the newsletter beat, a clean whoosh on the outro glow bloom
- Audio-coupled moments: the `dev.ts` card typing out line by line; the date-tick → auto-publish → email-send sequence
- Restraint rule: no comedic stingers, no chiptune/8-bit sounds, no chaotic transitions — everything stays quiet and premium

## Storyboard

### Scene 1 — Hook: dev.ts — 4s
The hero's glass code card fills frame: `const dev = { name: "Durgesh Chaudhary", role: "Software Engineer", stack: [...], available: true }` types out line by line against the dark surface, dot-grid background faint behind it, ending on a soft cursor blink.
Sequential/interaction: yes — lines of the code object appear one at a time, top to bottom, as if being typed
Audio intent: quiet, focused, establishing
Audio-coupled idea: soft key-tick per line as it appears
Music: ambient bed fades in low
Transition mood: soft → Scene 2

### Scene 2 — Reveal: the case study that updates itself — 5s
A featured project card ("Cinematica") is shown, cursor moves to "Case study," clicks. Cut/dissolve into the project detail page where a real README heading, a code fence, and an inline image render in place of canned marketing copy. Small caption beat: "This is the actual GitHub README."
Sequential/interaction: yes — simulated cursor click on the "Case study" link, then the README content settles in (heading → code block → image, in that order)
Audio intent: a small "aha" — the reveal that this is real, live content
Audio-coupled idea: soft whoosh on the click-through dissolve
Music: bed continues, low
Transition mood: clean crossfade → Scene 3

### Scene 3 — Highlight: reading, live — 5s
A blog post scrolls. The sticky Table of Contents highlights the active heading with its accent left-border as scroll progresses; a code block's toolbar (file icon, filename tab, copy button) is shown mid-interaction with the copy button clicked and a brief "copied" confirmation.
Sequential/interaction: yes — TOC active-item indicator moves down one heading at a time as the page scrolls; copy button click shows a checkmark confirmation
Audio intent: precise, satisfying — small details done right
Audio-coupled idea: a soft click on the copy-button tap
Music: bed steady
Transition mood: clean crossfade → Scene 4

### Scene 4 — Highlight + outro: publishes itself — 6s
A calendar/date indicator ticks forward past a post's `publishedAt` date; the post fades into the blog list on its own; beat later a newsletter email visual sends (envelope/checkmark motion, subtle). This settles into the outro: the emerald glow orb blooms behind the "DC" monogram, line "A portfolio that updates itself." fades in, then the wordmark and yodkwtf.com hold.
Sequential/interaction: yes — date tick → post appears → email sends, in that order, each beat distinct
Audio intent: quiet confidence, resolving to calm
Audio-coupled idea: one soft "send" chime as the email dispatches; gentle whoosh as the glow orb blooms behind the outro logo
Music: slight swell then fade out after wordmark settles
Transition mood: soft, final hold

**Music mood for this video:** cinematic-adjacent but restrained — a quiet, confident ambient/synth bed, not upbeat or percussive
**Audio summary:** A low, warm bed underscores the whole video with two soft accent moments (README reveal, newsletter send), building to a gentle swell under the outro before fading to silence.
