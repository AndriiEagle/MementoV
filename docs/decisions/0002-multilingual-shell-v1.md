# ADR 0002: Multilingual Shell v1 Uses a Client-Side Locale Layer

## Status

Accepted on 2026-04-19.

## Context

The product context requires a multilingual public surface with:

- `DE-CH`
- `EN`
- `FR-CH`
- `IT-CH`
- `RM`

At the current stage, the app is still a demo-first public shell with:

- a real but incomplete `CHROMA` slice;
- an intentionally demo-only `ECHO`;
- incomplete long-form editorial localization across all pages and components.

## Decision

For v1, the app uses a client-side locale provider and language switcher for the
public shell.

This layer currently localizes:

- navigation;
- footer shell;
- major landing-page copy;
- route-level hero and CTA copy on the public proof pages.

It does **not** claim that all long-form editorial prose is equally finalized in
all five languages yet.

## Why this is correct now

1. It gives the product a real multilingual surface immediately.
2. It avoids pretending that deep editorial localization is already complete.
3. It keeps scope disciplined while `ECHO` is still intentionally demo-only.
4. It keeps the app small and stable while future localization direction is
   still open.

## Consequences

- The shell now starts from `DE-CH` by default.
- Locale is persisted client-side for return visits.
- Future work can migrate this toward route-based locale architecture once the
  editorial and SEO layers justify the extra complexity.

## Non-goals for this wave

- no claim of complete editorial parity across all languages;
- no full route-based i18n migration yet;
- no translation-quality theater where unfinished copy is presented as final.
