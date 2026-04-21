# Launch Order and Kill Criteria v1

Purpose: make future build sessions more brutal and realistic. This file says what must happen first, what must wait, and what would count as a real stop-or-rethink signal.

## 1. Build Order

### Wave 0: Freeze and skeleton

Must exist first:

- frozen truth docs;
- OSS foundation freeze;
- app shell;
- modular folder structure;
- design tokens;
- locale shell;
- safety/legal wording shell.

### Wave 1: Public trust layer

Build next:

- landing;
- `/science`;
- `/for-family`;
- `/for-grants`;
- `/privacy`;
- `/safety`.

Reason:
- trust must exist before voice, legacy, and family sharing feel credible.

### Wave 2: `ECHO` first useful path

Build next:

- mic permission flow;
- recording flow;
- transcript pipeline;
- first chapter output;
- one follow-up question;
- save / continue tomorrow;
- send to family after value.

Reason:
- this is the first true usefulness test.

### Wave 3: `CHROMA` slice

Build next:

- short canonical slice;
- monochrome-to-warm progression;
- restrained sound layer;
- gentle bridge into `ECHO`.

Reason:
- `CHROMA` is required, but it should not delay the first useful `ECHO` path.

### Wave 4: controlled chat and router

Build next:

- fast/deep response split;
- visible thinking states;
- bounded memory;
- anti-loop rules;
- safety gates.

Reason:
- chat without boundaries becomes a trap, not an asset.

### Wave 5: data, operator, analytics

Build next:

- minimal schema;
- operator review;
- safety flags;
- meaningful event tracking.

Reason:
- observe reliability and quality, not just traffic.

## 2. What Counts as MVP

MVP is ready only if all of the following are true:

- a first-time user can get value without registration;
- an elderly user can record a memory without confusion;
- the first generated chapter feels dignified, not generic;
- a family member can understand why this matters;
- `CHROMA` feels intentional and bridges naturally into `ECHO`;
- privacy and safety messaging feel credible;
- the product works on an ordinary phone and ordinary laptop;
- the site feels like one world, not disconnected experiments.

## 3. Kill Criteria for Product Truth

If any of these happen and remain unsolved after serious iteration, pause and rethink:

- `ECHO` outputs remain generic, fabricated, or emotionally fake;
- Swiss German / mixed-language transcription quality is too weak for the real target user;
- elderly users cannot finish the first session without help;
- family buyers do not understand the value within minutes;
- `CHROMA` is beautiful but does not increase conversion into `ECHO`;
- the product needs heavy explanation to justify itself;
- safety framing feels like a loophole-ridden afterthought;
- privacy promises sound stronger than the actual architecture.

## 4. Kill Criteria for Scope

Immediate stop if the build starts drifting into:

- native mobile before web-first proof exists;
- app store billing work before web payments matter;
- full VN engine work before the slice proves its role;
- heavy 3D / shader work before the narrative works in DOM;
- forking core OSS repos instead of using maintained upstreams;
- treating `Railway` as the production home for self-hosted `LiveKit` media plane;
- social publishing infrastructure before the core product works;
- multi-channel automation before the owned hub is strong;
- large agent swarms without clear write ownership.

## 5. Kill Criteria for Strategy

Immediate stop if the strategy quietly shifts into:

- "maybe grants will save the model";
- "maybe a `Verein` solves the hard parts";
- "maybe storytelling alone is enough without a useful first flow";
- "maybe safety issues can be cleaned up later";
- "maybe impressive visuals will compensate for weak output quality".

## 6. Metrics That Matter

Care about:

- landing to path selection clarity;
- first recording completion rate;
- transcript success rate;
- chapter quality review success;
- `CHROMA` completion and bridge-to-`ECHO` rate;
- family send intent after value;
- return for second memory;
- safety incidents and false positives;
- trust signals from pilot users.

## 7. Metrics That Do Not Matter Early

Do not optimize for:

- raw session length;
- DAU theater;
- social follower counts;
- screen-time maximization;
- vanity impressions without trust or usage depth.

## 8. Pilot Readiness Gates

Do not run a meaningful pilot until:

- the first `ECHO` session works end to end;
- the chapter output passes manual dignity review;
- the privacy and consent wording is coherent;
- at least one `CHROMA` slice is stable;
- safety fallback copy exists;
- operator review exists for weak outputs and risky sessions.

## 9. Go / Cautious Go / No-Go Logic

### Go

Go forward if:

- `ECHO` is useful;
- `CHROMA` strengthens trust and conversion;
- family buyers understand the offer;
- the system feels calm and coherent;
- no major legal or safety contradiction blocks launch.

### Cautious Go

Cautious go if:

- usefulness exists but quality is still uneven;
- `CHROMA` works emotionally but needs tighter bridging;
- family path works conceptually but not yet commercially;
- transcription or multilingual quality needs guardrails.

### No-Go

No-go if:

- first value is weak;
- elderly usability is poor;
- the whole system depends on legal-financial assumptions that are still shaky;
- the product is becoming a deadbot-adjacent or therapy-adjacent risk surface;
- trust is weaker than the claims.

## 10. Final Rule

The right first launch is not the largest launch.

The right first launch is:

- emotionally complete;
- technically controlled;
- legally cleaner;
- safer than average;
- useful fast;
- small enough to improve honestly.
