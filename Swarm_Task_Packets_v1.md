# Swarm Task Packets v1

Статус: исполнительный документ для роя агентов  
Назначение: разложить `Final_Codex_Swarm_Development_Bible_v1.md` на непересекающиеся пакеты работ  
Правило: каждый пакет имеет свой write ownership, чтобы агенты не конфликтовали по файлам  

## 1. Как использовать этот документ

Каждый пакет:

- имеет владельца;
- имеет цель;
- имеет входы;
- имеет выходы;
- имеет конкретный write-set;
- имеет зависимости;
- имеет критерии готовности;
- имеет красные флаги.

Если нужно запускать рой:

1. сначала читать `Final_Codex_Swarm_Development_Bible_v1.md`;
2. потом этот документ;
3. потом выдавать отдельный пакет отдельному агенту.

## 2. Глобальные правила роя

| Правило | Значение |
|---|---|
| Один пакет — один основной владелец | Не размывать ответственность |
| Непересекающийся write-set | Не устраивать merge-chaos |
| Общие источники истины read-only для всех | Product truth, prompts policy, safety rules, design tokens |
| Не тащить feature creep внутрь пакета | Делать только то, что входит в packet objective |
| Любой спорный выход сверять с frozen docs | Не придумывать заново концепцию |

## 3. Карта пакетов

| Packet ID | Название | Основной владелец |
|---|---|---|
| P0 | Governance and Freeze | Product Lead Agent |
| P1 | App Shell and Repo Skeleton | App Shell Agent |
| P2 | Design System and Motion Tokens | Design System Agent |
| P3 | Localization Shell | Localization Agent |
| P4 | Public Layer and Proof Pages | Public Layer Agent |
| P5 | ECHO Capture UX | ECHO Agent |
| P6 | Transcript and Chapter Generation | Biographer Agent |
| P7 | Family Flow and Email Handoff | Family Flow Agent |
| P8 | CHROMA Engine and Slice | CHROMA Agent |
| P9 | Reflection Chat and Memory Router | Router Agent |
| P10 | Safety, Compliance, Privacy | Safety Agent |
| P11 | Data, Storage, Analytics, Admin | Data/Ops Agent |
| P12 | QA, Accessibility, Pilot Readiness | QA Agent |

## 4. Packet Details

## P0. Governance and Freeze

**Goal**  
Заморозить все product truths, ownership rules и red lines, чтобы остальной рой не изобретал новую концепцию.

**Related step ranges**  
1-40

**Inputs**
- `Final_Concept_Document_v3.md`
- `Business_Concept_Comparative_Audit_v1.md`
- `Final_Codex_Swarm_Development_Bible_v1.md`

**Write ownership**
- `docs/governance/`
- master backlog docs
- swarm process docs

**Must produce**
- frozen product truth sheet
- ownership map
- decision log template
- change-control rules
- phase gate checklist

**Must not touch**
- feature implementation files
- locale content
- AI prompt files

**Done criteria**
- все главные non-negotiables формально зафиксированы
- у каждого пакета есть владелец
- утверждены red lines

**Red flags**
- переписывание концепции
- изменение primary audiences
- попытка “улучшить” продукт за счёт scope creep

## P1. App Shell and Repo Skeleton

**Goal**  
Собрать минимальный, типизированный, modular web-first каркас без feature logic.

**Related step ranges**  
61-80

**Inputs**
- frozen product truth
- stack decisions
- IA draft

**Write ownership**
- `app/`
- `components/base/`
- `lib/config/`
- `lib/constants/`
- `types/`

**Must produce**
- routes skeleton
- folder structure
- env schema
- base app providers
- base layouts

**Must not touch**
- `features/echo/`
- `features/chroma/`
- prompts
- legal/safety copy

**Done criteria**
- проектный каркас готов
- все будущие модули имеют место
- нет лишнего feature code

**Red flags**
- monolithic app shell
- spaghetti folder layout
- попытка сразу тащить business logic внутрь layouts

## P2. Design System and Motion Tokens

**Goal**  
Собрать единый визуальный язык и motion-token system.

**Related step ranges**  
81-120

**Inputs**
- final concept visual DNA
- night-first rules
- elderly contrast requirements

**Write ownership**
- `styles/`
- `components/ui/`
- `components/primitives/`
- design docs

**Must produce**
- color tokens
- typography tokens
- spacing tokens
- glow/breathing tokens
- reduced-motion mode
- base components: buttons, panels, solar primitives

**Must not touch**
- page copy
- AI logic
- db layer

**Done criteria**
- есть стабильный token system
- motion описан как система, не как хаотичные анимации
- elderly-safe contrast учтён

**Red flags**
- визуальный шум
- generic SaaS aesthetics
- animation-first without accessibility

## P3. Localization Shell

**Goal**  
Построить архитектуру локализации без окончательной литературной редактуры.

**Related step ranges**  
121-140

**Inputs**
- owner decision по 5 языкам
- page map
- copy namespaces

**Write ownership**
- `locales/`
- `lib/i18n/`
- locale config docs

**Must produce**
- locale registry
- namespaces
- UI shell messages
- fallback logic
- Swiss German conversational policy note

**Must not touch**
- CHROMA literary script
- ECHO prompts
- design system tokens

**Done criteria**
- UI shell локализуем
- есть clear separation between UI copy and literary content

**Red flags**
- смешивание Swiss German с full UI layer
- перевод long-form narrative машинно без редакторской дисциплины

## P4. Public Layer and Proof Pages

**Goal**  
Собрать public front layer: landing, science, family, grants, safety, privacy, contact.

**Related step ranges**  
141-180

**Inputs**
- app shell
- design system
- localization shell
- frozen proof copy directions

**Write ownership**
- `app/(public)/`
- `content/public/`
- public-level components

**Must produce**
- landing
- `/science`
- `/for-family`
- `/for-grants`
- `/privacy`
- `/safety`
- `/contact`

**Must not touch**
- `features/echo/`
- `features/chroma/`
- AI backend logic

**Done criteria**
- public layer работает как доверительный вход
- dual product считывается без перегруза
- grants/family relevance видны быстро

**Red flags**
- длинный продающий мусор
- слишком много текста above the fold
- marketing copy без Swiss precision

## P5. ECHO Capture UX

**Goal**  
Построить весь пользовательский capture flow до момента получения transcript/chapter pipeline.

**Related step ranges**  
181-220

**Inputs**
- design system
- elderly UX principles
- public-to-ECHO transition rules

**Write ownership**
- `features/echo/`
- `components/echo/`
- `lib/audio/`

**Must produce**
- record/pause/resume/stop UX
- mic permission UX
- recording states
- waiting states
- resume tomorrow UX
- save/share entry states

**Must not touch**
- chapter prompts
- family email templates
- CHROMA engine

**Done criteria**
- elderly user can start quickly
- flow не требует регистрации
- состояние записи и ожидания визуально ясны

**Red flags**
- маленькие контролы
- неясный permission flow
- технические error messages in user space

## P6. Transcript and Chapter Generation

**Goal**  
Построить биографический интеллект: STT normalization, chapter generation, follow-up questions, quality rubric.

**Related step ranges**  
221-260

**Inputs**
- transcript pipeline contracts
- dignity and voice rules
- safe wording rules

**Write ownership**
- `lib/ai/biographer/`
- `prompts/biographer/`
- `features/echo/chapter/`

**Must produce**
- system prompt
- dialogue policy
- chapter generation prompt
- follow-up question prompt
- quality checks
- regeneration policy

**Must not touch**
- visual design tokens
- family page copy
- CHROMA narrative files

**Done criteria**
- первый chapter output соответствует dignity rubric
- follow-up question sounds human, calm, useful
- obvious generic/fabricated outputs are caught

**Red flags**
- hallucinated family facts
- syrupy sentimental writing
- transcript-looking output instead of literature

## P7. Family Flow and Email Handoff

**Goal**  
Построить путь для детей и внуков как для основной коммерческой стороны.

**Related step ranges**  
261-280

**Inputs**
- public family positioning
- ECHO output structure
- consent and privacy rules

**Write ownership**
- `features/family/`
- `lib/email/`
- `content/family/`

**Must produce**
- family-assisted handoff flow
- email send flow
- share link flow
- family copy templates
- future book teaser hooks

**Must not touch**
- transcript engine
- CHROMA scene engine
- admin schema

**Done criteria**
- family buyer path feels natural
- no hard sell before value
- consent before sharing is explicit

**Red flags**
- manipulative guilt language
- early upsell before trust
- confusing distinction between user and buyer

## P8. CHROMA Engine and Slice

**Goal**  
Построить short, powerful CHROMA slice как autonomous reflective layer и bridge to ECHO.

**Related step ranges**  
281-320

**Inputs**
- narrative concept
- design/motion/audio tokens
- bridge requirements into ECHO

**Write ownership**
- `features/chroma/`
- `content/chroma/`
- `prompts/chroma/` if needed for scene metadata only

**Must produce**
- scene format
- scene renderer
- pacing system
- color progression
- sound trigger map
- one canonical short CHROMA slice
- transition into ECHO

**Must not touch**
- family flow
- transcript prompts
- public grants page

**Done criteria**
- slice feels complete in 5-8 minutes
- CHROMA does not feel like generic article or slideshow
- end naturally feeds ECHO

**Red flags**
- overbuilding full VN engine
- too many branches
- atmosphere with no conversion logic

## P9. Reflection Chat and Memory Router

**Goal**  
Собрать controlled chat и layered AI routing without turning product into endless companion loop.

**Related step ranges**  
321-340

**Inputs**
- biographer policies
- safety rules
- thinking-state UX rules

**Write ownership**
- `features/chat/`
- `lib/ai/router/`
- `lib/ai/memory/`

**Must produce**
- chat UI shell
- fast prompt
- deep prompt
- router rules
- memory summarization
- visible thinking-state behavior

**Must not touch**
- page copy
- CHROMA narrative content
- family email templates

**Done criteria**
- fast/deep split работает
- waiting feels meaningful
- chat does not become parasocial trap

**Red flags**
- optimizing for session length
- over-anthropomorphized companion behavior
- uncontrolled topic drift

## P10. Safety, Compliance, Privacy

**Goal**  
Зафиксировать всё, что нельзя нарушать: AI disclaimers, non-therapy framing, privacy, consent, deletion, risky states, anti-deadbot policy.

**Related step ranges**  
341-360 plus all wording reviews

**Inputs**
- safety review PDF
- Swiss trust/privacy constraints
- family sharing rules

**Write ownership**
- `lib/safety/`
- `content/safety/`
- `content/legal/`
- compliance docs

**Must produce**
- AI disclaimer
- non-medical disclaimer
- crisis escalation text
- consent copy
- privacy summary
- retention/deletion policy shell
- anti-deadbot language rules

**Must not touch**
- CHROMA script
- design system
- routing engine logic itself beyond policy interfaces

**Done criteria**
- all sensitive flows have wording
- no forbidden framing remains
- privacy and safety texts are plain-language

**Red flags**
- therapeutic overclaim
- digital immortality overclaim
- ambiguous consent language

## P11. Data, Storage, Analytics, Admin

**Goal**  
Собрать data backbone, operator visibility и event capture без product bloat.

**Related step ranges**  
future wave right after 360 + infra dependencies

**Inputs**
- ECHO data contracts
- family send requirements
- safety flags

**Write ownership**
- `db/`
- `lib/storage/`
- `lib/analytics/`
- `app/admin/`

**Must produce**
- schema for sessions/transcripts/chapters
- storage conventions
- analytics event map
- admin skeleton
- risky-session review path

**Must not touch**
- public marketing copy
- CHROMA literary files
- localization copy

**Done criteria**
- operator can inspect critical outputs
- analytics capture trust/reliability events, not vanity only
- data model stays minimal and purposeful

**Red flags**
- premature over-modeling
- giant admin panel before core product works
- analytics schema optimized for DAU theater

## P12. QA, Accessibility, Pilot Readiness

**Goal**  
Проверить, что продукт реально usable, accessible, calm, performant и grant-demo ready.

**Related step ranges**  
after all core packets complete

**Inputs**
- all packet outputs
- frozen non-negotiables

**Write ownership**
- `qa/`
- pilot docs
- review checklists

**Must produce**
- accessibility checklist
- elderly manual UX checklist
- weak-device performance checklist
- multilingual QA checklist
- grant demo rehearsal checklist
- launch blocker list

**Must not touch**
- core feature code except through reported issues

**Done criteria**
- critical blockers enumerated
- pilot can be run without guessing
- launch criteria are measurable

**Red flags**
- “looks fine to us” without elderly testing
- only desktop QA
- no language QA on critical flows

## 5. Parallelization map

| Можно запускать сразу | После чего |
|---|---|
| P0 | сразу |
| P1 | после P0 |
| P2 | после P0 |
| P3 | после P0 |
| P4 | после P1 + P2 + P3 |
| P5 | после P1 + P2 |
| P6 | после P5 base contracts |
| P7 | после P4 + P6 |
| P8 | после P1 + P2 |
| P9 | после P6 + P10 policy baseline |
| P10 | после P0, параллельно с P1-P4 |
| P11 | после P5/P6 contracts |
| P12 | после P4-P11 |

## 6. Самый правильный порядок запуска роя

1. P0
2. P1 + P2 + P3 + P10 параллельно
3. P4 + P5 параллельно
4. P6
5. P7 + P8 параллельно
6. P9
7. P11
8. P12

## 7. Что нельзя отдавать в параллель

| Нельзя параллелить | Почему |
|---|---|
| Два разных агента на `features/echo/` | Конфликт логики и write-set |
| Два разных агента на `content/chroma/` | Narrative consistency collapse |
| Два разных агента на `lib/safety/` | Высокий риск несогласованных safety rules |
| Два разных агента на `db/` schema | Миграционный хаос |
| Два разных агента на `locales/` без одного owner | Translation drift |

## 8. Финальная фиксация

Этот документ нужен, чтобы рой работал как система, а не как хаотичный набор помощников.

Ключевой принцип:

- концепция уже заморожена;
- теперь рой не должен придумывать новую платформу;
- рой должен построить её по пакетам, без конфликтов и без раздувания.

