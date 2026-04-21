# Context Index for Codex v2

Purpose: this is the cleaner V2 context pack for future Codex work on `Memento Vivere`.

This V2 pack does not replace the older documents. It adds the missing operational layer that was still weak in V1:
- a stricter working protocol for Codex;
- launch order plus kill criteria;
- separate compliance and founder-risk gates;
- clearer treatment of web-first scope vs future growth layers.

## 1. Read Order

Read in this order:

1. `00_Context_Index_for_Codex_v2.md`
2. `01_Codex_Working_Protocol_v1.md`
3. `02_Launch_Order_and_Kill_Criteria_v1.md`
4. `03_Compliance_and_Founder_Risk_Gates_v1.md`
5. `04_OSS_Foundation_and_Forking_Strategy_v1.md`
6. `05_Exact_Repo_Adoption_Plan_v1.md`
7. `Final_Concept_Document_v3.md`
8. `Business_Concept_Comparative_Audit_v1.md`
9. `Deep_Research_Prompts_Critical_Points_v1.md`
10. `Final_Codex_Swarm_Development_Bible_v1.md`
11. `Swarm_Task_Packets_v1.md`

## 2. Frozen Product Truth

These truths are frozen unless the user explicitly says to reopen concept-level decisions.

- Product = `CHROMA + ECHO + Conversational Biographer + Memory Router`.
- `ECHO` ships first as the first truly useful MVP.
- `CHROMA` is not optional. It must exist in the first public wave at least as a short slice.
- `CHROMA` is not a side-art piece. It must emotionally bridge users into `ECHO`.
- Night-first UX is core, not a decorative scenario.
- MVP must be usable without mandatory registration.
- Email is asked only after value.
- Family buyer is the strongest early commercial entry.
- Elderly user is the main activation and dignity test.
- UI locales are `DE-CH`, `EN`, `FR-CH`, `IT-CH`, `RM`.
- `Swiss German / Standard German` is the conversational AI layer, not the only UI layer.
- Product must never present itself as a therapist substitute.
- Product must never promise literal digital immortality.
- Product must never become a deadbot, grief simulator, or post-mortem companion.
- Privacy by design and Swiss trust are architecture, not only marketing.
- User voice/transcript data must not be reused for foundation model training.
- DOM-first narrative architecture is mandatory.
- Heavy 3D, full VN engines, native mobile, and social-product sprawl are forbidden in the first wave.

## 3. New Deltas Added in V2

These are the real improvements from the extra review pass and the additional PDFs.

### Architecture delta

- The stack is now explicitly `web-first PWA`, not native-mobile-first.
- Mobile app store releases are a later phase because billing and platform compliance would slow launch.
- The safest first build remains `Next.js + TypeScript + DOM-first narrative layer + Ink/useink + modular AI orchestration`.

### OSS foundation delta

- The product should not be built as pure greenfield infrastructure.
- It also should not be built as a pile of cloned demos.
- The cleanest path is:
  - fork `livekit-examples/agent-starter-react`;
  - use `livekit/agents-js` as realtime core;
  - use `openai/openai-agents-js` only for the server-side deep biographer layer;
  - use `mem0ai/mem0` only as a secondary retrieval layer;
  - use `langfuse/langfuse` as the tracing and evals spine.
- `Postgres` remains canonical truth.
- Self-hosted `LiveKit` media plane should not be deployed on `Railway`.

### Scope delta

- The project must be treated as an `owned hub`, not as a future "social OS".
- External channels are future distribution layers, not the product core.
- Avoid building direct channel automation or scraping-heavy publishing systems into the MVP.

### Compliance delta

- Do not rely on myths like "`Verein` automatically protects everything" or "grant money is automatically safe and neutral."
- Founder-level constraints under `Status S`, social aid, grants, and employment formalities must be treated as separate risk gates.
- Product development should not be architected around unverified legal-financial assumptions.

### Media/IP delta

- For "realistic Zurich" aesthetics, prefer original environments, inspired-by framing, and safe exteriors-only assumptions unless rights are clear.
- Do not build AI image flows around real identifiable persons without explicit consent.

## 4. What This Pack Is For

Use this pack when the next Codex session needs to:
- build the repo;
- launch a swarm;
- audit the repo against the intended product;
- create prompts, copy, safety layers, or architecture;
- avoid drifting back into concept-chaos.

## 5. What This Pack Is Not For

Do not use this pack to justify:
- reopening the entire concept from zero;
- adding full native mobile plans now;
- adding a heavy 3D graphics layer;
- building social content infrastructure before the core product exists;
- building around unverified founder legal assumptions;
- hiding weak product fundamentals behind visual complexity.

## 6. High-Signal Sources Behind the V2 Upgrade

The V2 upgrade is especially informed by:

- `Digital Legacy Product Validation Report.pdf`
- `AI Mental Health Safety Review.pdf`
- `Minimalist Narrative Web Architecture.pdf`
- `Ответ_от_ШИ.pdf`
- `Найраціональніший стек для соло-розробника...pdf`
- `Реалістична мультиканальна контент-машина для соло AI-білдера.pdf`
- `OSS технічний due diligence для voice-first memoir продукту.docx`
- `Аудиторський звіт про суперечності та ризикові припущення...pdf`

One reviewed file, `КонцепціяСтартАп2.pdf`, appears to be mostly about a different product direction and is intentionally not treated as a core context source for this platform.

## 7. Best Next Uses

If a future Codex session needs:

- exact execution behavior: read `01_Codex_Working_Protocol_v1.md`
- order of work and stop conditions: read `02_Launch_Order_and_Kill_Criteria_v1.md`
- compliance and founder-risk red lines: read `03_Compliance_and_Founder_Risk_Gates_v1.md`
- exact clone/fork/use/reference decisions: read `04_OSS_Foundation_and_Forking_Strategy_v1.md`
- exact repo bootstrap and package sequence: read `05_Exact_Repo_Adoption_Plan_v1.md`
- full product concept: read `Final_Concept_Document_v3.md`
- full execution plan: read `Final_Codex_Swarm_Development_Bible_v1.md`
- swarm ownership and non-overlapping packets: read `Swarm_Task_Packets_v1.md`

## 8. Shortest Safe Prompt for a New Codex Session

Use this if you want the next Codex session to align fast:

```text
Read FINAL_CODEX_CONTEXT_V2 in order. Treat the frozen truths as binding. Do not reinvent the concept. Optimize for the smallest emotionally complete web-first ship. Prefer ECHO-first, CHROMA short slice, family-buyer logic, night-first UX, DOM-first implementation, privacy/safety trust, and strict scope control.
```
