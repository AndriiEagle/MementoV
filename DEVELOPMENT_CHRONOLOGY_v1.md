# Development Chronology v1

Active implementation log for the first working product slice of `Memento Vivere`.

## 2026-04-19

1. Re-audited the workspace and confirmed there was still no runnable app repository in the root.
2. Confirmed the root contained only strategy documents, PDFs, and final context packs for Codex.
3. Cloned `livekit-examples/agent-starter-react` into `C:\Users\Andrii\Desktop\Memento_Vivere\__starter_livekit` as a reference substrate.
4. Reconfirmed the implementation direction:
   - ship a demo-first public web surface now;
   - do not fully implement `ECHO` yet;
   - leave explicit future integration instructions in the code for the real `ECHO` runtime;
   - make `CHROMA` and the public trust layer emotionally complete in this first slice.
5. Verified the current local runtime prerequisites for bootstrap work:
   - `node` available locally;
   - `pnpm` available locally.
6. Decided to build a clean root-level Next.js app in the workspace instead of dumping the whole LiveKit starter UI into the product.
7. Preserved the audited starter as a reference for future realtime voice integration rather than as the direct public UI.
8. Began writing the fresh application scaffold in small patches to avoid Windows path-length and patch-size failures.
9. Created a fresh root-level Next.js 16 app scaffold with:
   - `app/` routes for `/`, `/chroma`, `/echo`, and `/api/livekit/token`;
   - reusable `components/` for the public product shell;
   - `lib/utils.ts` for shared class merging.
10. Implemented the first public demo slice:
   - cinematic landing page;
   - `CHROMA` demo route;
   - `ECHO` demo route with explicit future implementation guide in code comments;
   - `501 not-ready` API contract for future LiveKit token issuing.
11. Implemented the first visual system:
   - breathing solar motif;
   - dark Swiss-first night palette;
   - restrained motion and reduced-motion fallback;
   - shared primary and secondary action styles.
12. Installed project dependencies successfully with `pnpm install`.
13. Ran `pnpm build` successfully.
14. Observed Next.js auto-adjusted `tsconfig.json` to:
   - use `jsx: react-jsx`;
   - include `.next/dev/types/**/*.ts`.
15. Detected a real linting issue in the initial ESLint setup:
   - the `FlatCompat`-based config caused a circular schema failure with Next 16.
16. Replaced the ESLint setup with the native `eslint-config-next` flat exports.
17. Cleared the remaining lint warnings so the new baseline stayed clean.
18. Ran `pnpm lint` successfully with no warnings or errors.
19. Ran a final `pnpm build` successfully after the lint/config fixes.
20. Current status:
   - public demo-first app exists and builds cleanly;
   - `ECHO` is intentionally a beautiful placeholder contract, not a fake finished runtime;
   - future voice/session work remains explicitly documented in the codebase for the next implementation wave.
21. Re-ran `pnpm lint` as a self-audit pass after the first implementation cycle. Result: clean.
22. Re-ran `pnpm build` as a self-audit pass after the first implementation cycle. Result: clean.
23. Ran a dev-server smoke check against real routes:
    - `/` returned `200`;
    - `/chroma` returned `200`;
    - `/echo` returned `200`;
    - `POST /api/livekit/token` returned the intended `501 not-ready` contract.
24. Self-audit conclusion after the first working slice:
    - the current implementation is structurally honest and technically stable;
    - the public layer is real, not a mock screenshot;
    - `ECHO` remains intentionally demo-only;
    - multilingual UI, science/family/grants pages, and the actual voice memoir runtime are still backlog, not silently complete.
25. Strategic deviation noted during self-audit:
    - the running public slice was built as a clean root app while keeping `__starter_livekit` as reference only;
    - this is acceptable for the current demo-first wave;
    - before real `ECHO` implementation starts, the codebase must either absorb the needed LiveKit patterns deliberately or be normalized toward the previously documented thin-fork substrate.
26. Froze the substrate decision for the current wave in:
    - `docs/decisions/0001-demo-first-substrate.md`
27. Decision taken:
    - the clean root-level Next.js app remains the canonical product shell for the current demo-first wave;
    - `__starter_livekit` stays as the verified reference substrate until the real `ECHO` runtime begins.
28. Implemented the next public proof layer:
    - `/science`
    - `/for-family`
    - `/for-grants`
29. Added shared public routing support for the proof layer:
    - updated header navigation;
    - added a persistent footer with product and proof links;
    - added a dedicated proof section on the landing page.
30. Re-ran `pnpm lint` after the proof-layer changes. Result: clean.
31. Re-ran `pnpm build` after the proof-layer changes. Result: clean.
32. Re-ran the dev-server smoke check after the proof-layer changes:
    - `/` returned `200`;
    - `/chroma` returned `200`;
    - `/echo` returned `200`;
    - `/science` returned `200`;
    - `/for-family` returned `200`;
    - `/for-grants` returned `200`;
    - `POST /api/livekit/token` still returned the intended `501 not-ready` contract.
33. Current status after the second implementation wave:
    - the project now has a functioning public product shell plus a functioning public proof layer;
    - `ECHO` remains deliberately demo-only;
    - the next major implementation decision is whether to deepen `CHROMA` first or begin the real `ECHO` substrate absorption phase.
34. Chose the next development step explicitly:
    - deepen `CHROMA` first;
    - do not start real `ECHO` voice integration yet;
    - keep `ECHO` honest and demo-only while strengthening the public emotional slice.
35. Added `components/chroma-experience.tsx` as the first interactive `CHROMA` slice:
    - scene progression across three emotional beats;
    - per-scene choice tuning;
    - explicit bridge logic toward `ECHO`;
    - future engine guidance in code comments for authored scripts, audio, and handoff context.
36. Reworked `/chroma` to use the new interactive experience instead of static beat cards.
37. Extended the visual system with a dedicated `CHROMA` orb animation for the narrative stage.
38. Re-ran `pnpm lint` after the `CHROMA` upgrade. Result: clean.
39. Re-ran `pnpm build` after the `CHROMA` upgrade. Result: clean.
40. Ran a runtime smoke check on `/chroma` after the upgrade:
    - route returned `200`;
    - server-rendered HTML contained the interactive-slice marker.
41. Browser-level click verification for the interactive `CHROMA` flow was not executed yet because Playwright is not installed in the current local Python environment.
42. Current status after the third implementation wave:
    - the public demo shell is stronger and more product-like;
    - `CHROMA` now behaves like a controlled interactive narrative slice rather than a static concept page;
    - the next high-value move is either localized shell architecture or the first deliberate `ECHO` substrate absorption step.
43. Chose the next development step explicitly:
    - implement multilingual shell architecture before real `ECHO` substrate absorption;
    - localize the public shell first, not the entire editorial layer.
44. Added multilingual shell infrastructure:
    - `lib/i18n.ts`
    - `components/locale-provider.tsx`
    - `components/language-switcher.tsx`
    - per-locale dictionaries for `DE-CH`, `EN`, `FR-CH`, `IT-CH`, `RM`
45. Integrated the locale layer into the real UI:
    - root layout now wraps the app with a locale provider;
    - header now includes a language switcher;
    - footer now renders through locale-aware shell copy;
    - landing plus route-level hero and CTA copy on `/chroma`, `/echo`, `/science`, `/for-family`, `/for-grants` now respond to locale changes.
46. Fixed one real React lint issue during the multilingual rollout:
    - replaced a synchronous `setState` inside `useEffect` with a lazy state initializer for reading the stored locale.
47. Re-ran `pnpm lint` after the multilingual shell changes. Result: clean.
48. Re-ran `pnpm build` after the multilingual shell changes. Result: clean.
49. Ran a runtime smoke check on `/` after the multilingual shell rollout:
    - route returned `200`;
    - default shell rendered with `DE-CH` title copy;
    - the language switcher rendered all five locale labels.
50. Froze the multilingual shell decision in:
    - `docs/decisions/0002-multilingual-shell-v1.md`
51. Current status after the fourth implementation wave:
    - the public product shell is now multilingual at the shell and route-hero level;
    - deeper editorial prose inside demo components is still not fully localized;
    - that gap is intentional and documented rather than hidden.
52. Chose the next development step explicitly:
    - perform deep editorial localization for `CHROMA` and the demo components;
    - keep shell copy and editorial copy as separate content layers.
53. Added deep editorial localization content files:
    - `content/editorial/chroma-preview.ts`
    - `content/editorial/chroma-experience.ts`
    - `content/editorial/echo-demo.ts`
54. Localized the visible editorial content for all five active locales across:
    - `CHROMA` preview copy on the landing page;
    - the interactive `CHROMA` slice;
    - `ECHO` demo state messaging and chapter-shape copy.
55. Refactored the related components to read from the editorial content layer:
    - `components/chroma-preview.tsx`
    - `components/chroma-experience.tsx`
    - `components/echo-demo.tsx`
56. Fixed one lint issue during the refactor:
    - updated the `useMemo` dependency list in `components/chroma-experience.tsx`.
57. Re-ran `pnpm lint` after the deep editorial localization. Result: clean.
58. Re-ran `pnpm build` after the deep editorial localization. Result: clean.
59. Ran a runtime smoke check after the deep editorial localization:
    - `/` returned `200` and rendered the localized `CHROMA Preview` prose in `DE-CH`;
    - `/chroma` returned `200` and rendered the localized interactive `CHROMA` prose in `DE-CH`;
    - `/echo` returned `200` and rendered the localized `ECHO` demo prose in `DE-CH`.
60. Froze the editorial-localization decision in:
    - `docs/decisions/0003-editorial-localization-v1.md`
61. Current status after the fifth implementation wave:
    - the public product shell is multilingual;
    - the main visible demo-component prose is also multilingual;
    - the app is now significantly closer to a real Swiss-first presentation layer while `ECHO` itself remains honestly demo-only.
62. Chose the next development step explicitly:
    - begin the first real phase of `ECHO substrate absorption`;
    - still do not build the full voice runtime;
    - absorb the backend token/session substrate first.
63. Added the first real `ECHO` substrate dependencies:
    - `livekit-server-sdk`
    - `zod`
64. Added `.env.example` for the required LiveKit environment variables.
65. Added `lib/echo/substrate.ts` as the canonical server-side substrate layer for:
    - request validation;
    - environment readiness;
    - session seed generation;
    - short-lived token issuance.
66. Replaced the old permanent placeholder behavior of `/api/livekit/token`:
    - `GET /api/livekit/token` now returns substrate readiness;
    - `POST /api/livekit/token` now validates payloads and attempts real token issuance;
    - when environment variables are missing, `POST` now returns truthful `503 not-configured` instead of a permanent fake `501`.
67. Added `components/echo-substrate-panel.tsx` so the `ECHO` page now exposes real substrate readiness instead of only abstract placeholder messaging.
68. Updated the localized `ECHO` page copy to match the new reality:
    - token endpoint and substrate contract now exist;
    - full room connection, audio capture, transcription, and chapter generation still do not.
69. Added `content/editorial/echo-substrate-panel.ts` so the new substrate panel is localized across all five active locales.
70. Re-ran `pnpm lint` after the first real substrate phase. Result: clean.
71. Re-ran `pnpm build` after the first real substrate phase. Result: clean.
72. Ran a runtime smoke check after the first real substrate phase:
    - `/echo` returned `200`;
    - localized `ECHO` copy reflected the new substrate reality;
    - `GET /api/livekit/token` returned `200` readiness JSON;
    - `POST /api/livekit/token` returned the expected `503 not-configured` because the required LiveKit env vars are not yet present locally.
73. Froze the first real substrate decision in:
    - `docs/decisions/0004-echo-substrate-phase-1.md`
74. Current status after the sixth implementation wave:
    - `ECHO` is still not a full memoir runtime;
    - but it is no longer only a visual placeholder;
    - it now has a real validated backend substrate for the next implementation phase.
75. Re-ran a focused self-audit on the new `ECHO` substrate phase and found two real issues:
    - token issuance could become active in production before any authentication layer existed;
    - room and participant identity generation was random per request, which would fight the next token-consumer and reconnect phase.
76. Hardened `lib/echo/substrate.ts`:
    - readiness now distinguishes `ready`, `not-configured`, and `auth-required`;
    - readiness now exposes `issuanceAllowed`;
    - production token issuance is now blocked unless the app is running in development;
    - session seed generation now accepts `sessionKey` and derives stable room and identity values from a hash instead of pure per-request randomness.
77. Hardened `app/api/livekit/token/route.ts`:
    - `POST` now returns truthful `403 auth-required` when configuration exists but production issuance is blocked pending authentication;
    - `POST` still returns `503 not-configured` when LiveKit environment variables are missing.
78. Cleaned and rewrote `content/editorial/echo-substrate-panel.ts`:
    - added the missing localized copy for the new `auth-required` substrate state;
    - replaced the previous broken-encoding panel copy with clean ASCII-safe content so the editorial layer stops fighting future patches.
79. Re-ran `pnpm lint` after the substrate hardening pass. Result: clean.
80. Re-ran `pnpm build` after the substrate hardening pass. Result: clean.
81. Verified the affected runtime contracts directly from the compiled route module after the fresh build:
    - `/echo` still compiled as a static route during `next build`;
    - `GET /api/livekit/token` returned `200` with `status: not-configured` and `issuanceAllowed: false` in the current local environment;
    - `POST /api/livekit/token` returned `503 not-configured` in the current local environment because LiveKit env vars are still absent.
82. Removed one small UI regression found during the same pass:
    - the substrate panel no longer renders an empty warning paragraph in the `not-configured` state;
    - the warning body now appears only for the real `auth-required` production guard state.
83. Current status after the substrate self-audit hardening pass:
    - the `ECHO` substrate is safer and more honest than the previous wave;
    - production token issuance can no longer silently open before auth exists;
    - the next frontend integration phase now has a stable `sessionKey` contract to build against.
84. Chose the next development step explicitly:
    - start the first real frontend `ECHO` bootstrap phase;
    - do not fake full voice capture yet;
    - build the user-facing session contract on top of the real token endpoint.
85. Extended the server-side `ECHO` contract:
    - `lib/echo/substrate.ts` now exports a structured `sessionPreview`;
    - stable session seed, room, and identity can now be exposed without issuing a token;
    - successful token issuance now also returns the same preview shape for frontend consistency.
86. Extended `/api/livekit/token`:
    - `POST` now returns `sessionPreview` together with readiness details even when the environment is not configured or production auth is still missing;
    - this makes the endpoint useful for honest bootstrap UX before LiveKit env is present locally.
87. Added a new localized client component:
    - `components/echo-bootstrap.tsx`
    - `content/editorial/echo-bootstrap.ts`
88. The new `ECHO` bootstrap flow now gives the public page:
    - participant-name input;
    - seed-motif input;
    - persistent `sessionKey`;
    - session-key rotation;
    - live `POST /api/livekit/token` submission;
    - truthful status rendering for `ready`, `not-configured`, and `auth-required`;
    - stable preview of derived room and participant identity;
    - future-milestone rendering from the backend substrate.
89. Updated `app/echo/page.tsx` so the new bootstrap sits as the primary `ECHO` implementation surface ahead of the older state-demo component.
90. Re-ran `pnpm lint` after the `ECHO` bootstrap phase. Result: clean.
91. Re-ran `pnpm build` after the `ECHO` bootstrap phase. Result: clean.
92. Verified the new runtime contract directly from the compiled route module:
    - `POST /api/livekit/token` still returned `503 not-configured` in the current local environment;
    - the response now also included a structured `sessionPreview`;
    - the preview contained a stable derived room name and participant identity from the submitted `sessionKey`.
93. Current status after the seventh implementation wave:
    - `ECHO` still does not yet join a live room or capture audio;
    - but the page now contains a real frontend bootstrap flow over the real backend token contract;
    - the next `ECHO` wave can focus on room join and media publishing instead of inventing a session contract from scratch.
94. Chose the next development step explicitly:
    - take the public proof layer from "pages exist" to a materially stronger argument surface;
    - strengthen `/science`, `/for-family`, and `/for-grants`;
    - move deeper proof copy into dedicated editorial files instead of thin hard-coded arrays.
95. Added dedicated proof-editorial layers:
    - `content/editorial/science-proof.ts`
    - `content/editorial/family-proof.ts`
    - `content/editorial/grants-proof.ts`
96. Upgraded `/science` from a thin concept page into a stronger proof page:
    - localized research-style pillars;
    - explicit operating claims;
    - explicit non-claims / safety boundaries.
97. Upgraded `/for-family`:
    - localized trust promises;
    - clearer family-buyer logic;
    - a more concrete future family flow;
    - explicit no-pressure rules for elderly users.
98. Upgraded `/for-grants`:
    - stronger localized grant-facing tracks;
    - explicit "what the demo already proves now" section;
    - reviewer-question section;
    - explicit restraint rules for credibility.
99. Re-ran `pnpm lint` after the proof-layer strengthening pass. Result: clean.
100. Re-ran `pnpm build` after the proof-layer strengthening pass. Result: clean.
101. Current status after the eighth implementation wave:
    - the public proof layer is no longer just present;
    - it now argues more clearly for science framing, family conversion logic, and grant credibility;
    - the next major remaining work lies less in public shell copy and more in real `ECHO` runtime, persistence, safety operations, and family/operator workflows.
102. Re-opened the multilingual shell audit with a stricter standard:
    - no broken-encoding locale files;
    - no broken-encoding editorial files;
    - no obvious user-facing fallback strings left hard-coded inside product components.
103. Rewrote the damaged locale dictionaries into clean ASCII-safe copy:
    - `content/locales/de-ch.ts`
    - `content/locales/fr-ch.ts`
    - `content/locales/it-ch.ts`
    - `content/locales/rm.ts`
104. Rewrote the damaged deep editorial layers into clean ASCII-safe multilingual copy:
    - `content/editorial/chroma-preview.ts`
    - `content/editorial/chroma-experience.ts`
    - `content/editorial/echo-demo.ts`
105. Finished moving remaining user-facing bootstrap/substrate fallback text into the multilingual editorial layer:
    - extended `content/editorial/echo-bootstrap.ts` with localized default participant names and localized unexpected-error messages;
    - extended `content/editorial/echo-substrate-panel.ts` with localized readiness-load failure messages;
    - removed the last remaining hard-coded English fallback strings from `components/echo-bootstrap.tsx` and `components/echo-substrate-panel.tsx`.
106. Ran a raw text audit over `app/` and `components/`:
    - no direct text nodes were found outside the localized copy layer for the current product surface;
    - the visible product shell is now consistently driven by locale/editorial content.
107. Ran an encoding audit over `content/`, `app/`, and `components/`:
    - no remaining mojibake markers were found in the active product files.
108. Fixed one final lint issue discovered during the localization hardening pass:
    - `components/echo-substrate-panel.tsx` now declares the correct `useEffect` dependencies for localized readiness error copy.
109. Re-ran `pnpm lint` after the multilingual hardening pass. Result: clean.
110. Re-ran `pnpm build` after the multilingual hardening pass. Result: clean.
111. Current status after the ninth implementation wave:
    - the multilingual shell is effectively complete for the current site scope;
    - deep-copy is now localized across all five active locales for the main demo and proof components;
    - the remaining work is no longer shell localization, but deeper product/runtime work in `ECHO`, persistence, safety operations, and family/operator workflows.
112. Chose the next development step explicitly:
    - take `CHROMA` from an interactive scene switcher to a truthful slice runtime;
    - close the remaining plan items for `CHROMA`: authored script engine, timed reveal, richer scene logic, and ambient-audio states;
    - wire the emotional handoff into `ECHO` instead of leaving it as a decorative link.
113. Added a real browser-side ambient-audio substrate for `CHROMA`:
    - `lib/chroma/ambient-audio.ts`
    - lightweight synthesized ambient presets now exist for station-rain, window-air, and ember-trace;
    - the runtime remains web-native and dependency-light instead of pulling in a heavy audio stack.
114. Added a dedicated `CHROMA` engine editorial layer:
    - `content/editorial/chroma-engine.ts`
    - localized runtime-control copy, audio-state copy, per-scene closing beats, and per-choice handoff motifs now live outside the component.
115. Rebuilt `components/chroma-experience.tsx` into a small authored runtime:
    - each scene now runs in ordered beats instead of showing one static body block;
    - the slice can start, pause, resume, replay, and manually reveal the next beat;
    - scene progression is now gated by scene completion rather than being an always-open scene switcher;
    - the current scene exposes beat progress and scene progress as explicit runtime feedback.
116. Strengthened `CHROMA` scene logic:
    - the current emotional choice now changes the bridge beat instead of being a side-note only;
    - each scene now carries its own closing line and dedicated audio state;
    - the final bridge into `ECHO` is now tied to real selected motifs instead of a generic CTA.
117. Implemented a real `CHROMA -> ECHO` handoff:
    - `components/chroma-experience.tsx` now builds localized seed motifs from scene choices;
    - the final `ECHO` link now carries those motifs through the query string;
    - `components/echo-bootstrap.tsx` now consumes that seed context during initialization so the bootstrap form starts with the selected `CHROMA` motifs.
118. Extended visual runtime support in `app/globals.css`:
    - progress-fill styles for scene and beat timing;
    - visible/hidden script-card states for timed reveal;
    - ambient pulse indicator for live audio state.
119. Cleaned the new runtime layer after first implementation:
    - removed unstable or unnecessary state from the `CHROMA` component;
    - moved `ECHO` seed query initialization into the bootstrap state initializer instead of an effect;
    - fixed scene gating and summary keys so the new runtime stayed lint-clean.
120. Re-ran `pnpm lint` after the `CHROMA` runtime pass. Result: clean.
121. Re-ran `pnpm build` after the `CHROMA` runtime pass. Result: clean.
122. Current status after the tenth implementation wave:
    - the `CHROMA demo slice` is effectively complete for the current product scope;
    - it now has authored scene beats, timed reveal, richer scene logic, optional ambient-audio states, and a real handoff path into `ECHO`;
    - the major remaining work is no longer `CHROMA` polish, but deeper `ECHO` runtime, persistence, safety operations, family flows, and operator workflows.
123. Ran a focused post-completion self-audit on `CHROMA` instead of assuming it was finished.
124. Found and closed two real `CHROMA` honesty gaps:
    - the top scene buttons still allowed users to skip too freely through the slice;
    - several `chromaPage` locale strings still incorrectly claimed that timed reveal, sound states, and the pacing engine were "later" even though that work had already shipped.
125. Tightened `CHROMA` progression control:
    - `components/chroma-experience.tsx` now tracks the furthest unlocked scene;
    - scene buttons beyond the unlocked frontier are disabled;
    - progression now reads more like a guided authored slice and less like a free scene picker.
126. Corrected outdated localized `CHROMA` page copy:
    - updated `content/locales/en.ts`
    - updated `content/locales/de-ch.ts`
    - updated `content/locales/fr-ch.ts`
    - updated `content/locales/it-ch.ts`
    - updated `content/locales/rm.ts`
    - the `later` block now describes genuine later expansion work instead of features already present.
127. Corrected one remaining outdated editorial claim in `content/editorial/chroma-experience.ts`:
    - the summary now states that selected motifs already flow into `ECHO`, instead of framing that as future behavior.
128. Re-ran `pnpm lint` after the `CHROMA` self-audit pass. Result: clean.
129. Re-ran `pnpm build` after the `CHROMA` self-audit pass. Result: clean.
130. Final `CHROMA` self-audit conclusion:
    - no further `CHROMA` work is required for the current public product scope;
    - remaining product work now sits outside `CHROMA`, mainly in the real `ECHO` runtime, persistence, safety operations, family workflows, and operator tooling.
131. Re-opened the public shell after visual review feedback and treated the current landing + `CHROMA` presentation as too noisy for the intended night-first ritual.
132. Simplified the landing page in `app/page.tsx`:
    - removed the lower proof-card grid entirely;
    - kept the home surface focused on one hero, two CTAs, and minimal proof navigation pills;
    - reduced the amount of explanatory and sales-like text still visible above the fold.
133. Simplified the `CHROMA` route wrapper in `app/chroma/page.tsx`:
    - removed the extra page-level back bar;
    - left the route as a near-direct handoff into the `CHROMA` runtime instead of "page chrome plus runtime".
134. Rebuilt `components/chroma-experience.tsx` away from the old dashboard shape:
    - removed the two-column panel layout;
    - removed the separate ambient-state, tuning-summary, slice-memory, and engine-explainer cards;
    - replaced them with a single immersive stage and a compact lower overlay.
135. Preserved the existing authored runtime logic while depaneling the experience:
    - scene gating stayed intact;
    - timed reveal stayed intact;
    - audio toggle stayed intact;
    - replay / reveal-next / continue / `ECHO` handoff all stayed intact.
136. Moved the only back navigation for `CHROMA` into the runtime itself:
    - the user now enters a quieter scene with one exit control rather than landing on another explanatory page.
137. Tightened the visual information density of `CHROMA`:
    - scene dots now read like scene markers instead of numbered control pills;
    - progress is presented as one thin line and a compact journey indicator instead of multiple explicit progress cards;
    - visible beats now arrive as narrative lines rather than as a stack of status panels.
138. Re-ran `pnpm lint` after the landing and `CHROMA` cleanup pass. Result: clean.
139. Re-ran `pnpm build` after the landing and `CHROMA` cleanup pass. Result: clean.
140. Current conclusion after the cleanup pass:
    - the public shell is materially quieter than before;
    - `CHROMA` now reads more like a staged experience and less like a demo control surface;
    - the remaining future work is not more panel cleanup, but the eventual shift from abstract runtime visuals to the fully authored image-driven visual novel the product actually wants.
