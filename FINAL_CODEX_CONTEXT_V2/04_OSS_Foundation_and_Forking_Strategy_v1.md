# OSS Foundation and Forking Strategy v1

Purpose: answer one very practical question for this product:

`Should we clone projects, or is it better to build ourselves?`

Short answer:

- not greenfield everything;
- not clone random repos;
- use one thin fork plus several upstream dependencies;
- keep the core product architecture your own.

## 1. Executive Verdict

The new OSS due diligence is valuable.

It does not change the product concept.
It does change the implementation strategy in a meaningful way.

The strongest strategy is:

- `fork one starter shell`,
- `adopt a few upstream OSS foundations`,
- `keep canonical product state and business logic in your own codebase`.

That is better than:

- building realtime voice infrastructure from zero;
- cloning whole demo repos and calling that architecture;
- using a memory SDK as the product database;
- picking an all-in-one agent framework that tries to become your platform.

## 2. The Right Hybrid

### Fork this

- `livekit-examples/agent-starter-react`

Why:

- it gives you a web-first voice UI shell fast;
- it already handles room/token/bootstrap/device/transcript basics;
- you can delete most of the demo surface and keep only the elderly-safe path.

Expected gain:

- roughly 1-2 weeks of frontend and device boilerplate;
- less Codex token burn on boring room/bootstrap code.

### Use as upstream foundations

- `livekit/agents-js`
- `openai/openai-agents-js`
- `mem0ai/mem0`
- `langfuse/langfuse`

Why:

- these repos are more valuable as maintained upstream dependencies than as forks;
- forking them would create long-term maintenance drag without enough product advantage.

### Use only as reference

- `pipecat-ai/pipecat`
- `langchain-ai/langgraphjs`
- `getzep/graphiti`

Why:

- each has real strengths;
- each also adds complexity that this MVP does not need on day 1.

### Do not use as MVP foundation

- `openai/openai-realtime-agents`
- `pipecat-ai/pipecat-flows`
- `Mastra`
- archived Pipecat quickstart repos

Why:

- demo-quality or platform-creep risk is too high for this product.

## 3. What Must Remain Yours

These parts should stay product-owned in your own repo:

- canonical biography state;
- interview state;
- people / places / events / relationships;
- fact claims with confidence and provenance;
- unresolved topics;
- chapter jobs and chapter versions;
- routing rules between fast path and deep path;
- dignity and safety policies;
- family-buyer flows;
- conversion logic from `CHROMA` into `ECHO`.

This is the moat.

Not the generic voice stack.

## 4. Canonical Data Rule

`Postgres` must remain the source of truth.

That means:

- `mem0` is not the biography database;
- `mem0` is a retrieval layer;
- uncertain facts do not become canonical memory;
- partial transcripts do not become canonical truth;
- only finalized and reconciled data enters canonical product state.

## 5. Deployment Rule

This file changes one infrastructure assumption very clearly:

- `Railway` is fine for web app, API, workers, and general app deployment.
- `Railway` is not the right place for a self-hosted production `LiveKit` media plane.

Reason:

- self-hosted WebRTC media infrastructure needs proper networking assumptions that are stronger than generic HTTP-first hosting.

So the right deployment split is:

- app/web/API/workers on `Railway`;
- `LiveKit` media plane separately.

## 6. What This Changes in Practice

### Before this due diligence

The context already knew:

- web-first is right;
- no heavy native/mobile-first strategy;
- no full custom engine;
- no full VN engine;
- no platform creep.

### After this due diligence

The context now knows more precisely:

- which repo is worth forking;
- which OSS foundations should stay upstream;
- which frameworks are only references;
- which frameworks should be avoided as MVP foundations;
- how to separate canonical truth from memory retrieval;
- that `Langfuse` should be treated as close to mandatory;
- that `LiveKit on Railway` is a deployment mistake.

## 7. Brutal Recommendation

The best move is not:

- "clone a full product and adapt it";
- "build everything ourselves from zero";
- "pick the most magical multi-agent framework".

The best move is:

- fork `agent-starter-react`;
- build your own product logic around it;
- use `livekit/agents-js` for realtime control;
- use `openai-agents-js` server-side for the deep biographer;
- use `mem0` only as secondary retrieval memory;
- use `Langfuse` early for tracing and evals;
- keep `Postgres` as canonical truth.

## 8. Net Result

So, yes:

- this new file is valuable;
- it changes implementation strategy materially;
- it makes the stack more profitable and less wasteful.

But it does **not** mean:

- "copy OSS and ship";
- "trust demos as architecture";
- "let third-party frameworks become the product".

It means:

- take the infrastructure savings where they are real;
- refuse the complexity where it is fake;
- keep the business-critical truth model in your own hands.
