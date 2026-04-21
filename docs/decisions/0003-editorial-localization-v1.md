# ADR 0003: Deep Editorial Localization Lives in a Separate Content Layer

## Status

Accepted on 2026-04-19.

## Context

After multilingual shell v1, the product still contained long-form visible prose
inside the demo components:

- `CHROMA` preview copy
- `CHROMA` interactive slice copy
- `ECHO` demo-state copy

This content is qualitatively different from shell copy:

- it is longer;
- it is more editorial and more emotional;
- it will require more careful iteration than simple route labels and CTAs.

## Decision

Deep editorial component copy now lives in `content/editorial/*`, separate from
the shell dictionaries in `content/locales/*`.

The current split is:

- `content/locales/*` for navigation, route-level shell copy, major hero text,
  and CTA framing;
- `content/editorial/*` for longer component-level narrative and explanatory
  prose.

## Why this is correct now

1. It avoids bloating the shell i18n layer into an unreadable monolith.
2. It keeps demo-component prose easier to iterate and edit separately.
3. It makes the current maturity gap explicit:
   - shell copy can be broad and pragmatic;
   - editorial copy requires deeper craft and slower revision.
4. It reduces the risk of accidental regression while `ECHO` remains demo-only.

## Consequences

- `CHROMA` preview, `CHROMA` experience, and `ECHO` demo now respond to locale.
- Deep editorial copy is now localized for all five configured locales.
- Future editorial passes can refine component prose without disturbing the
  shell routing layer.

## Non-goals for this wave

- no claim of final literary polish across every locale;
- no merge of shell dictionaries and editorial dictionaries into one giant
  structure;
- no route-based content CMS yet.
