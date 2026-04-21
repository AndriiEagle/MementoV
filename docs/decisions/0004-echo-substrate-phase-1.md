# ADR 0004: ECHO Substrate Phase 1 Makes the Token Endpoint Real

## Status

Accepted on 2026-04-19.

## Context

`ECHO` was intentionally left demo-only in the first implementation waves.

That was correct at the time, but it left one important gap:

- the app had no real backend substrate for LiveKit session bootstrapping;
- `/api/livekit/token` was only a permanent placeholder response.

The next rational development step was not a full voice runtime, but the first
real absorption of the future substrate.

## Decision

Phase 1 of `ECHO substrate absorption` now includes:

- real `livekit-server-sdk` and `zod` dependencies;
- `.env.example` for the required LiveKit environment variables;
- `lib/echo/substrate.ts` as the canonical backend contract layer;
- `GET /api/livekit/token` for readiness;
- `POST /api/livekit/token` for validated token issuance when configured;
- a visible substrate-readiness panel on the `ECHO` page.

## What this does not mean

It does **not** mean that `ECHO` is now fully implemented.

Still intentionally not complete:

- room connection from the frontend;
- streaming audio capture;
- transcript ingestion;
- chapter generation;
- operator review;
- family send flow.

## Why this is correct now

1. It converts the token route from fake placeholder into a real backend
   contract.
2. It keeps the product honest: configured environments can issue tokens,
   unconfigured environments return a truthful `503 not-configured`.
3. It gives the next implementation wave a solid server-side substrate without
   pretending the full runtime already exists.
4. It preserves the current clean root app while absorbing the most important
   LiveKit pattern first.

## Consequences

- `POST /api/livekit/token` no longer returns a permanent `501`.
- The app now has a real ECHO substrate layer.
- Environment readiness is explicit and user-visible on the `ECHO` page.
- The next voice/runtime step can start from an actual contract instead of from
  conceptual notes only.
