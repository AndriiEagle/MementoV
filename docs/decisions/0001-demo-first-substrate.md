# ADR 0001: Demo-First Public Shell Stays Canonical for the Current Wave

## Status

Accepted on 2026-04-19.

## Context

The broader context pack recommended a `fork thin shell + own the truth model`
approach around `livekit-examples/agent-starter-react`.

During the first implementation wave, the actual need was narrower:

- ship a credible public product slice immediately;
- keep `ECHO` demo-only for now;
- avoid contaminating the public experience with generic voice-demo UI;
- preserve the LiveKit starter as a verified reference substrate.

## Decision

For the current wave, the clean root-level Next.js app is the canonical product
base.

`C:\Users\Andrii\Desktop\Memento_Vivere\__starter_livekit` remains a reference
substrate, not the active application shell.

## Why this is correct now

1. The product asked for a night-first, emotionally credible demo surface, not
   a rushed realtime agent UI.
2. `ECHO` is intentionally not being fully implemented yet, so a thin fork does
   not provide enough immediate value to justify polluting the public shell.
3. The current root app is already verified by:
   - clean lint;
   - clean production build;
   - successful runtime smoke-check on the live routes.
4. The LiveKit starter still remains available as a trusted implementation
   reference for the future voice runtime.

## Consequence

Before real `ECHO` implementation starts, the project must deliberately absorb
the needed LiveKit patterns into the current codebase rather than improvising ad
hoc voice code.

## Non-goals for this wave

- no forced migration into the starter shell;
- no fake realtime memoir runtime;
- no premature merge of generic voice-demo surfaces into the public experience.
