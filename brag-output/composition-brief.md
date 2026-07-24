# Hyperframes Composition Brief: yodkwtf.com

## Objective
Create a short launch-style brag video for yodkwtf.com, Durgesh Chaudhary's personal developer portfolio.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 20 seconds

## Source Material
- Project root: `/Users/dchaudhary/Documents/Code/GitHub/Personal/yodkwtf.com`
- Primary files read: `README.md`, `src/config/site.ts`, `src/app/globals.css`, `src/components/sections/HeroSection.tsx`, `src/components/sections/FeaturedProjectsSection.tsx`, `src/components/ui/FeaturedProjectCard.tsx`, `src/components/sections/MiniAboutSection.tsx`, `src/data/fallback-hero.ts`, `src/data/fallback-projects.ts`, `public/og.png`
- Product name: yodkwtf.com — Durgesh Chaudhary, Full-Stack Software Engineer
- Tagline / strongest claim: project case studies render the linked repo's *live* GitHub README, and future-dated blog posts publish and email subscribers on their own, with zero redeploy.
- Key UI or visual moment to recreate: the hero's glassmorphic `dev.ts` code card (typed-out object literal ending `available: true`); a featured project card (image + glass content panel + "Case study" link) transitioning into a README-rendered detail page; a blog post with a sticky scroll-spy Table of Contents and a code block toolbar (filename tab + copy button); a date advancing past a post's `publishedAt` with the post appearing and an email send.
- Copy that must appear verbatim:
  - `available: true`
  - "This is the actual GitHub README."
  - "A portfolio that updates itself."
  - yodkwtf.com

## Creative Direction
- Tone preset: polished
- Creative direction: a quiet, confident personal-brand film — dark emerald palette, serif display type, restrained motion. The engineering flex speaks for itself; do not oversell it.
- Interpretation: 4 scenes, longer holds (4-6s each), slow crossfades (0.6-0.8s), no jokes, no hard cuts, no chaotic energy. Confidence through restraint.
- Angle: Most portfolios are a snapshot, updated once and left to rot. This one keeps itself honest — ship a commit to a project's README and the case study updates itself; schedule a post for next month and it publishes and emails subscribers on its own. "A portfolio with its own nervous system," told through three real engineering beats, not marketing copy.
- Hook: the hero's glass `dev.ts` code card types itself out — name, role, stack, `available: true` — closing on a soft cursor blink.
- Outro / punchline: the emerald glow orb blooms behind the "DC" monogram; "A portfolio that updates itself." then the wordmark and yodkwtf.com.
- Avoid:
  - Generic SaaS language ("streamline your workflow", etc.)
  - Abstract filler visuals / stock motion graphics
  - Unrelated visual redesign — stay inside the site's own dark/emerald/serif system
  - Chaotic transitions, comedic stingers, upbeat/percussive music

## Visual Identity
- Background: `#0e0e0c` (dark mode, near-black with warm undertone), subtle dot-grid texture at low opacity
- Text: `#f0efe9` primary, `#8a8a7e` muted
- Accent: emerald gradient `#34d399` → `#10b981` → `#059669`, glow color `rgba(52,211,153,0.2)`
- Display font: Instrument Serif (headlines; regular weight, generous size)
- Body font: Outfit (UI copy); DM Mono for code, stats, labels, timestamps
- Visual references from the project: the hero glass code card, the featured-project card layout (image left/right + glass content panel), the TOC active-heading indicator (accent left border), the code-block toolbar (file icon + filename + copy button), the `og.png` radial emerald glow orb + "DC" monogram lockup

## Storyboard
Use the storyboard in `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. Hook: dev.ts — 4s — the glass code card types out name/role/stack/`available: true` line by line, soft cursor blink at the end
2. Reveal: the case study that updates itself — 5s — project card click-through dissolves into a live-rendered GitHub README (heading → code block → image settle in), caption "This is the actual GitHub README."
3. Highlight: reading, live — 5s — blog post scrolls, TOC active-item indicator moves down, code block copy-button click shows a checkmark confirmation
4. Highlight + outro: publishes itself — 6s — date ticks past a post's publishedAt, post appears in list, email send beat, settling into the glow-orb + "DC" monogram outro with "A portfolio that updates itself." and the yodkwtf.com wordmark

## Audio
- Audio role: warm, minimal bed with restrained motion-matched accents
- Audio arc: low ambient/synth bed fades in under the hook, holds steady and quiet through the middle, gentle swell into the outro, fades out after the wordmark settles
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3` (steady, clean — matches `polished`/`cinematic` per the skill's tone table)
- Music treatment: fade in 0–1s, hold at low volume (~0.25-0.3) through scenes 1-3, slight swell (~0.35) into the outro, fade out over the final ~1.5s
- Music cue guidance: no bundled preset for vol-12 was located at brief-writing time — Hyperframes should run `npx hyperframes beats` on the composition once the track is wired in, or treat as unavailable and continue without beat/cue sync given the low scene count (4 scenes, no dense sequential grid). At most 1-2 strong-cue locks (README reveal in Scene 2, outro glow bloom) if a cue source becomes available; natural timing otherwise.
- Audio-reactive treatment: subtle — the outro's emerald glow orb may breathe gently with music RMS/bass; no waveform/equalizer visuals
- Audio-coupled moments:
  - Scene 1 (dev.ts typing) — soft key-tick per line as it appears
  - Scene 2 (case-study reveal) — soft whoosh on the click-through dissolve
  - Scene 3 (copy button) — soft click on the copy-button tap
  - Scene 4 (email send / outro) — one soft "send" chime as the email dispatches; gentle whoosh as the glow orb blooms behind the outro logo
- SFX selection guidance: sparse, per the `polished` tone table in `audio.md` — 2-3 very subtle SFX total is enough; nothing aggressive. Match gesture to sound family (keyboard ticks for typing, interface/click or ui/click for the copy-button tap, a soft bell/chime for the email send).
- SFX analysis guidance: read `sfx-analysis.md`/`sfx-analysis.json` if present beside the SFX library; prefer low/medium high-frequency-risk files for these repeated, polished moments.
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation.
- Audio files: copy the chosen music (`happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`) and any selected SFX into `brag-output/composition/assets/`

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core` (composition contract + `data-*` timing), `hyperframes-animation` (motion), `hyperframes-creative` (design spec, beats, audio-reactive), `hyperframes-keyframes` (seek-safe keyframes), and `hyperframes-cli` (lint/check/render). /brag is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route into its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- Show at least one real UI, copy, or visual element from the source project.
- Keep all text readable in the final render.
- Keep the video within 15-25 seconds.
- Include the planned music/SFX layer unless audio was explicitly disabled or documented as intentionally silent.
- Treat `/brag` audio notes as guidance, not a fixed cue sheet. Choose SFX after the visual animation exists.
- Treat music cue metadata as optional timing hints. Hyperframes decides exact animation timing and should ignore cues that hurt readability, scene pacing, or the product story.
- Major reveals may move toward nearby strong cues within about 0.15s. Smaller entrances may align to nearby beat points within about 0.10s. Use only 1-3 strong cue locks in a 15-25s video unless the edit clearly benefits from more.
- Use SFX to support motion and interaction: card sounds for card-like reveals, short announcement cues for major payoffs, key/click sounds for text or user actions, and restraint when the edit is already busy.
- Honor planned music treatment such as fade-outs, ducking, beat-aligned reveals, or letting a final SFX ring over the music, using the best Hyperframes-supported implementation.
- When music is present and the treatment is not `none`, consider Hyperframes audio-reactive workflow: extract audio data and use RMS/frequency bands for subtle, brand-specific motion. Good targets are glow, depth, background warmth, card presence, title emphasis, or other existing visual elements. Avoid waveform/equalizer visuals, musical-note graphics, generic particle systems, strobing, or heavy pulsing.
- Use local assets for audio and any required runtime/media dependencies when possible.
- Run `hyperframes check` before render — it is brag's single gate.
