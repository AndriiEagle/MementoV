# Exact Repo Adoption Plan v1

Purpose: remove the remaining ambiguity around repo bootstrap.

This file answers, in practical terms:

- what exactly to fork;
- what to name the repo;
- what to keep;
- what to delete;
- what to install as packages;
- what to postpone;
- in what order Codex should do the work.

## 1. Executive Decision

The recommended repo strategy is:

- **one main product repo**
- created from a **fork of `livekit-examples/agent-starter-react`**
- then **aggressively simplified**
- with the **product truth model kept fully in our own code**

Do not:

- build the voice shell from zero;
- clone multiple demo repos into one mess;
- start a monorepo just because it sounds more serious;
- fork core frameworks unless you are patching a real upstream bug.

## 2. Main Repo Name

Recommended main repo name:

- `memento-vivere`

Why this is the best default:

- shortest clean name;
- matches the product identity;
- flexible enough for web app, workers, docs, and future services;
- does not lock us into `app`, `platform`, or `web` wording too early.

Recommended Git remote structure:

- `origin` = your forked product repo
- `upstream` = `livekit-examples/agent-starter-react`

Recommended default branch:

- `main`

Recommended Codex branch pattern:

- `codex/bootstrap-*`
- `codex/echo-*`
- `codex/chroma-*`
- `codex/safety-*`

## 3. Repo Model

### Recommended model

Use a **single application repo**, not a monorepo.

Why:

- the starter is already a Next.js app;
- the first product wave does not need Turborepo complexity;
- a single repo is easier for Codex, easier for swarm ownership, and cheaper cognitively;
- background jobs can still live in the same repo without monorepo overhead.

### Do not do this yet

- `apps/web + apps/worker + packages/*` monorepo
- separate frontend and backend repos
- separate "AI repo" and "web repo"

Those are phase-2 restructures only if the codebase actually earns them.

## 4. Fork / Dependency / Reference Matrix

| Asset | Decision | Why |
|---|---|---|
| `livekit-examples/agent-starter-react` | `Fork and prune` | Fastest trustworthy voice UI bootstrap |
| `livekit/agents-js` | `Use as dependency` | Realtime core; do not fork core |
| `@livekit/agents-plugin-openai` | `Use as dependency` | Clean OpenAI integration for LiveKit |
| `openai/openai-agents-js` | `Use as dependency` | Deep server-side biographer/orchestration |
| `mem0ai/mem0` | `Use later as dependency` | Secondary retrieval memory only |
| `langfuse/langfuse` | `Use for self-hosted observability/evals` | Trace spine and eval discipline |
| `pipecat-ai/pipecat` | `Reference only` | Useful ideas, too much runtime complexity for v1 |
| `langgraphjs` | `Reference only` | Only later for long async chapter workflows |
| `graphiti` | `Reference only` | Too heavy for v1 |
| `openai/openai-realtime-agents` | `Do not use as foundation` | Demo/reference quality, not core substrate |
| `pipecat-flows` | `Do not use as foundation` | Adds brittle state-machine layer |
| `Mastra` | `Do not use as foundation` | Platform creep |

## 5. Recommended Initial Repo Tree

After pruning the fork, the target tree should look like this:

```text
memento-vivere/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── science/page.tsx
│   │   ├── for-family/page.tsx
│   │   ├── for-grants/page.tsx
│   │   ├── safety/page.tsx
│   │   └── privacy/page.tsx
│   ├── (product)/
│   │   ├── echo/page.tsx
│   │   └── chroma/page.tsx
│   ├── api/
│   │   ├── livekit/token/route.ts
│   │   ├── echo/transcribe/route.ts
│   │   ├── echo/chapter/route.ts
│   │   ├── chat/respond/route.ts
│   │   └── internal/jobs/route.ts
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── public/
│   ├── echo/
│   └── chroma/
├── features/
│   ├── echo/
│   ├── chroma/
│   ├── chat/
│   ├── family/
│   └── public/
├── lib/
│   ├── ai/
│   │   ├── biographer/
│   │   ├── router/
│   │   └── memory/
│   ├── livekit/
│   ├── safety/
│   ├── storage/
│   ├── analytics/
│   ├── i18n/
│   └── db/
├── db/
│   ├── schema/
│   ├── migrations/
│   └── seeds/
├── content/
│   ├── public/
│   ├── chroma/
│   └── safety/
├── prompts/
│   ├── biographer/
│   ├── chapter/
│   └── router/
├── locales/
│   ├── de-CH/
│   ├── en/
│   ├── fr-CH/
│   ├── it-CH/
│   └── rm/
├── workers/
│   └── chapter/
├── docs/
│   ├── context/
│   ├── decisions/
│   └── runbooks/
├── public/
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── next.config.ts
```

## 6. What to Keep from the Fork

Keep these parts from `agent-starter-react`:

- root Next.js app shell;
- Tailwind and general styling setup;
- LiveKit bootstrap patterns;
- token route pattern;
- device and connection handling patterns;
- transcript display plumbing patterns;
- reconnect/error state handling ideas;
- accessibility-relevant button and control patterns where they are already good enough.

Keep temporarily until simplified:

- `@livekit/components-react`
- `livekit-client`
- `livekit-server-sdk`
- core Radix UI primitives
- `clsx`
- `class-variance-authority`
- `tailwind-merge`
- `jose`
- `sonner`

## 7. What to Delete or Strip Early

Delete or strip aggressively from the fork in the first cleanup pass:

- video-centric UI;
- screen sharing;
- avatar-first presentation;
- decorative brand/demo surfaces;
- light/dark theme complexity if it blocks night-first simplification;
- visualizer variants you do not need;
- generic sandbox/demo copy;
- experimental graph/demo components;
- any mode switch that adds confusion for elderly users.

Packages likely removable early if the corresponding demo features are removed:

- `@rive-app/react-webgl2`
- `@xyflow/react`
- `media-chrome`
- `streamdown`
- `tokenlens`
- `buffer-image-size`
- `embla-carousel-react`
- `next-themes`
- `motion` if you do not use it immediately
- duplicate icon packs if one is enough

Rule:

- if a package exists only to support demo surface, delete it;
- if a package supports core voice UX, keep it.

## 8. Package Adoption Sequence

Use `pnpm`, not npm, to stay aligned with the fork and upstream ecosystem.

### Layer A: keep from starter baseline

Already present or expected from the fork:

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss`
- `@livekit/components-react`
- `livekit-client`
- `livekit-server-sdk`
- selected `@radix-ui/*` packages
- `clsx`
- `class-variance-authority`
- `tailwind-merge`
- `jose`
- `sonner`

### Layer B: add immediately after cleanup

Add these in the first real product bootstrap:

```bash
pnpm add @livekit/agents @livekit/agents-plugin-openai @openai/agents zod next-intl zustand gsap
```

### Layer C: add canonical data layer

Recommended v1 choice: **Drizzle**, not Prisma.

Why:

- lighter mental model for a single TypeScript app;
- SQL-first and Codex-friendly;
- enough for the first product wave.

Add:

```bash
pnpm add drizzle-orm pg
pnpm add -D drizzle-kit
```

### Layer D: add storage layer

Add when audio blobs and exports start existing:

```bash
pnpm add @aws-sdk/client-s3 @aws-sdk/lib-storage
```

### Layer E: add tracing/evals layer

Add after the first `ECHO` path works end to end:

```bash
pnpm add @langfuse/tracing @langfuse/otel @opentelemetry/sdk-node
```

Note:

- if you need only client APIs later, `langfuse` is also available;
- for serious tracing in this product, the modular tracing setup is the better default.

### Layer F: add retrieval memory later

Do **not** add `mem0` on day 1.

Add only after:

- canonical Postgres state exists;
- transcripts are normalized;
- fact-claim governance exists.

Then add:

```bash
pnpm add mem0ai
```

### Layer G: explicitly postpone

Do not install in the first repo wave:

- `langgraph`
- `graphiti`
- `pipecat`
- `pipecat-flows`
- `mastra`

## 9. Exact Environment Files

Create these files at bootstrap:

- `.env.example`
- `.env.local`

Minimum variables to define in `.env.example`:

```text
NEXT_PUBLIC_APP_NAME=Memento Vivere
NEXT_PUBLIC_DEFAULT_LOCALE=de-CH

LIVEKIT_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
AGENT_NAME=

OPENAI_API_KEY=

DATABASE_URL=

S3_ENDPOINT=
S3_BUCKET=
S3_REGION=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=

LANGFUSE_BASE_URL=
LANGFUSE_PUBLIC_KEY=
LANGFUSE_SECRET_KEY=

MEM0_API_KEY=
MEM0_BASE_URL=
```

Rule:

- `MEM0_*` can remain blank until retrieval memory is actually activated.

## 10. Deployment Split

### Recommended first deployment split

- `Railway` for Next.js web app, API routes, and background workers
- separate `LiveKit` deployment for the media plane

### Best practical default

For v1, prefer:

- managed `LiveKit Cloud` if budget allows

Fallback:

- self-hosted `LiveKit` on infrastructure that actually supports production WebRTC networking

Do not do this:

- self-host production `LiveKit` directly on `Railway`

## 11. Docs That Must Be Copied into the Repo

Create:

- `docs/context/`

Then copy the current frozen context pack there.

Minimum files to include:

- V2 context index
- working protocol
- launch order and kill criteria
- compliance/founder risk gates
- OSS foundation strategy
- exact repo adoption plan

This matters because future Codex sessions work better when the context lives inside the repo.

## 12. Codex Execution Order

This is the exact practical order Codex should follow.

### Phase 0: repo bootstrap

1. Fork `livekit-examples/agent-starter-react`.
2. Rename the main repo to `memento-vivere`.
3. Add `upstream` remote pointing to the original starter.
4. Create branch `codex/bootstrap-from-starter`.
5. Copy the V2 context pack into `docs/context/`.

### Phase 1: prune the starter

6. Remove demo branding and generic starter copy.
7. Remove unused video, avatar, screen-share, and decorative surfaces.
8. Remove packages that only exist for removed demo features.
9. Keep only one primary voice-first path.
10. Keep reconnect/error/device handling.

### Phase 2: freeze the repo shape

11. Create the target folder layout.
12. Add route groups for `(public)` and `(product)`.
13. Add `echo` and `chroma` product routes.
14. Add `docs/decisions/` and `docs/runbooks/`.
15. Add locale folders and base `next-intl` shell.

### Phase 3: add product dependencies

16. Add `@livekit/agents`.
17. Add `@livekit/agents-plugin-openai`.
18. Add `@openai/agents`.
19. Add `zod`, `next-intl`, `zustand`, `gsap`.
20. Add the chosen DB stack: `drizzle-orm`, `drizzle-kit`, `pg`.

### Phase 4: freeze canonical backend rules

21. Create canonical tables for people, places, events, relationships, fact claims, unresolved topics, sessions, chapters.
22. Create audio storage contract.
23. Create transcript persistence contract.
24. Create chapter job contract.
25. Do **not** add `mem0` yet.

### Phase 5: make `ECHO` real

26. Wire token route and room/session bootstrap.
27. Reduce the UI to one calm elderly-safe voice path.
28. Add transcript ingestion.
29. Add server-side biographer flow with `@openai/agents`.
30. Add chapter output and one follow-up question.

### Phase 6: add tracing before expansion

31. Add Langfuse tracing packages.
32. Attach one trace/session ID across room, transcript, memory writes, and chapter jobs.
33. Verify that chapter quality and routing can be debugged from traces.

### Phase 7: add memory only after truth exists

34. Add `mem0ai`.
35. Restrict it to stable retrieval memory only.
36. Keep canonical truth in Postgres.
37. Do not let `mem0` write the product truth model.

### Phase 8: add `CHROMA`

38. Build the short canonical `CHROMA` slice.
39. Keep it DOM-first.
40. Bridge it into `ECHO`.

## 13. Anti-Patterns

Immediate stop if Codex starts doing any of this:

- turning the main repo into a monorepo before the first useful ship;
- keeping the starter as-is and only repainting colors;
- pulling multiple OSS agent demos into one codebase;
- storing biography truth inside `mem0`;
- introducing `Pipecat` just because it looks powerful;
- introducing `LangGraph` before long async workflows exist;
- building the media plane around `Railway`;
- letting UI complexity grow faster than elderly usability.

## 14. Shortest Command for Future Codex

Use this prompt for a future bootstrap/build session:

```text
Read FINAL_CODEX_CONTEXT_V2 in order, then read 05_Exact_Repo_Adoption_Plan_v1.md. Treat it as the concrete repo bootstrap source of truth. Start from the forked livekit-examples/agent-starter-react base, prune it aggressively, keep a single-repo web-first architecture, use LiveKit Agents as dependency not fork, OpenAI Agents JS only server-side, Drizzle + Postgres as canonical truth, Langfuse for tracing, and delay Mem0 until canonical state exists.
```

## 15. Final Verdict

The best economic move is:

- **fork one shell**
- **own the truth model**
- **depend on maintained OSS**
- **delay complex frameworks**

That gives the product the highest chance of shipping fast without becoming somebody else’s demo.
