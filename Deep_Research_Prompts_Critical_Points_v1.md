# Deep Research Prompts: Critical Points v1

Статус: отдельный исследовательский документ  
Назначение: выделить самые критические точки всей бизнес-концепции `Memento Vivere` и дать по каждой отдельный deep-research prompt для интернет-исследования  
Основание: `Final_Concept_Document_v3.md`, `Business_Concept_Comparative_Audit_v1.md`, ключевые PDF проекта  

## 1. Что здесь считается критической точкой

Критическая точка — это не просто интересная идея.  
Это место, без которого весь проект может:

- потерять product-market fit;
- потерять trust;
- потерять grant relevance;
- потерять деньги;
- уехать в юридическую или safety-ошибку;
- утонуть в scope и never ship.

## 2. Карта самых критических точек

| № | Критическая точка | Тип | Почему это критично | Что ломается, если ошибка |
|---|---:|---|---|---|
| 1 | Elderly + family demand in Switzerland/DACH | Рынок | Это основная practical value и ранний денежный слой | Нет реального спроса или willingness to pay |
| 2 | Night-time burnout / loneliness use case | Поведение пользователя | Это главный emotional entrypoint | `CHROMA` становится красивой, но лишней вещью |
| 3 | `CHROMA -> ECHO` bridge | Продуктовая логика | Это сцепка всей системы | Модули распадаются на два несвязанных продукта |
| 4 | Quality of AI-generated memory chapters | Core UX | Если output плохой, trust умирает | `ECHO` теряет магию и коммерческий смысл |
| 5 | AI router + visible thinking states | Технология/UX | Это часть perceived intelligence и уважения | Ожидание ощущается как лаг и ломает доверие |
| 6 | Swiss-specific aesthetic and narrative resonance | Бренд/контент | Это локальный moat | Продукт становится generic wellness/memoir app |
| 7 | Multilingual strategy + Swiss German layer | Язык/операции | Это и сила, и execution tax | Либо слабое качество, либо расползание ресурсов |
| 8 | Safety / mental-health wording / death-related framing | Юридика/этика | Темы очень чувствительные | Репутационный и правовой риск |
| 9 | Privacy and data handling for voice stories | Доверие/право | Голос, память, семья — high-trust data | Пользователи и партнёры не доверяют продукту |
| 10 | Grant fit and eligibility | Финансирование | Гранты — стратегический рычаг | Ошибка в fit/eligibility ломает важный путь денег |
| 11 | Monetization path: family, book, concierge | Бизнес-модель | Нужен первый реалистичный revenue path | Красивый продукт без денег |
| 12 | Competitive landscape and true differentiation | Стратегия | Нужно понять, действительно ли концепция уникальна | Повторяешь уже существующее, думая, что изобрёл новое |
| 13 | Accessibility for elderly users | UX/рынок | Elderly path рушится от малейшего friction | Основная аудитория физически не сможет пользоваться |
| 14 | Technical feasibility on weak devices | Технология | Night-first mood useless, если сайт тормозит | Продукт ломает first impression и conversion |
| 15 | Legal use of real Swiss places, brands, likenesses | Право/контент | Visual narrative может легко задеть IP/personality rights | Юридические риски для storytelling layer |
| 16 | Scope realism for phased execution | Стратегия исполнения | Самый большой внутренний риск проекта | Проект распухает и не шипится |

## 3. Единый стандарт для всех исследований

Во всех промптах ниже уже встроена базовая дисциплина, но если надо, её можно добавить ещё раз:

- использовать только свежие и релевантные источники;
- приоритет: официальные швейцарские источники, академические статьи, первичные отчёты, официальная документация, серьёзные отраслевые отчёты;
- явно писать даты источников;
- отделять факты от выводов;
- не подыгрывать концепции, а stress-test’ить её;
- обязательно давать `keep / change / cut`;
- обязательно давать `go / cautious go / no-go`;
- если есть правовой или safety риск, формулировать его предельно конкретно.

## 4. Отдельные deep-research prompts

### Prompt 1. Реален ли спрос у пожилых людей и их семей

```text
Act as a senior market researcher and product strategist.

I am validating a Swiss-first digital product concept called "Memento Vivere". The product has a core module where an elderly person speaks freely, and AI turns their memories into a dignified, literary biographical chapter that can later be shared with family or turned into a book/archive. The paying audience may often be the adult children or grandchildren rather than the elderly user.

I need a deep internet research report answering this question:
Is there strong enough real demand in Switzerland and the DACH region for a product that combines voice memoir capture, family legacy preservation, emotional dignity, and light concierge/book-style output?

Research requirements:
- Prioritize Switzerland first, then DACH.
- Use recent sources and clearly show dates.
- Prefer primary sources, official demographic data, academic studies, serious market reports, reputable press, and credible company evidence.
- Look for evidence on:
  - aging demographics
  - willingness to preserve family memory
  - willingness to pay for memoir/legacy services
  - adult children as buyers for parents
  - adoption barriers among elderly users
  - trust issues around AI and authenticity
- Compare DIY memoir tools, premium ghostwriting, AI memoir tools, family archive products, and adjacent offerings.
- Distinguish evidence from inference.

Output format:
1. Executive verdict
2. Evidence table
3. Is the elderly user or family buyer the stronger commercial entry point?
4. Biggest adoption barriers
5. Biggest commercial opportunities
6. 3 strongest proof points supporting the concept
7. 3 strongest reasons the concept may fail commercially
8. What to keep, change, or cut in the current concept
9. Final rating: go / cautious go / no-go
```

### Prompt 2. Насколько силён ночной сценарий выгорания, одиночества и бессонницы

```text
Act as a behavioral product researcher focused on mental-state-driven digital products.

I am validating a key assumption in a Swiss-first product concept: the primary emotional entrypoint is late evening or night. The user may be unable to sleep, lonely, emotionally numb, burnt out, or unsettled after waking from anxiety or a bad dream. The product is supposed to work especially well in that nervous-system state.

Research question:
Is the late-night / insomnia / loneliness / burnout state in Switzerland and similar European contexts strong enough and specific enough to justify a "night-first" product design, especially for a reflective narrative tool?

Research requirements:
- Focus on Switzerland first, then nearby European comparisons if needed.
- Use recent public health data, Swiss studies, behavioral research, burnout studies, sleep research, loneliness data, and media/social evidence where credible.
- Investigate:
  - insomnia, nighttime anxiety, late-night emotional vulnerability
  - burnout prevalence in Switzerland
  - loneliness in older adults and working-age adults
  - digital behaviors at night
  - whether slow, low-stimulation digital experiences outperform high-stimulation experiences in those states
- If direct evidence is limited, make explicit inferences and mark them as inference.

Output:
1. Executive verdict
2. Evidence table
3. Which night-state users are most relevant: elderly, burnout workers, students, lonely adults?
4. What exactly happens psychologically at night that this product can use or respect?
5. What should the product absolutely do at night?
6. What should the product absolutely not do at night?
7. Key design implications
8. Keep / change / cut
9. Final rating: go / cautious go / no-go
```

### Prompt 3. Работает ли связка `CHROMA -> ECHO`

```text
Act as a product strategist specializing in multi-step emotional funnels.

I need to validate a core architecture:
- Module A: "CHROMA" is a slow, atmospheric, text-driven visual narrative experience that moves the user from monochrome darkness into warmth and color.
- Module B: "ECHO" is a practical voice-to-memory experience where the user records life stories and receives a dignified written chapter.

Hypothesis:
CHROMA should emotionally prepare users to feel that their life is worth narrating, and therefore increase willingness to enter ECHO.

Research task:
Study whether this kind of emotional-to-practical bridge is strategically smart, and whether adjacent products, behavioral design patterns, or conversion psychology support the idea that a symbolic narrative experience can increase conversion into a memory-preservation action.

Use sources from:
- product psychology
- emotional design
- digital memorial / journaling / reflection tools
- guided storytelling
- therapeutic writing / expressive writing literature
- grief, legacy, or memory preservation products

Output:
1. Executive verdict
2. Analogous product patterns or case studies
3. Is CHROMA likely to increase conversion into ECHO, decrease it, or distract from it?
4. What kind of ending or transition would make the bridge strongest?
5. What would make the bridge feel fake or manipulative?
6. Key product design rules for a successful bridge
7. Keep / change / cut
8. Final rating: go / cautious go / no-go
```

### Prompt 4. Достаточно ли ценности в AI-generated chapter

```text
Act as a product researcher and AI writing quality analyst.

I am testing the core product promise of ECHO:
An elderly user speaks naturally, often imperfectly, and AI transforms the speech into a dignified, emotionally resonant, literary biographical chapter that feels meaningful enough to save, share with family, and potentially turn into a book.

Research question:
How strong is the real user value of AI-assisted memory-to-chapter generation, and what quality threshold is required before users perceive it as meaningful rather than gimmicky?

Research requirements:
- Study adjacent categories: memoir-writing tools, AI autobiography products, storytelling assistants, therapy journaling products, oral history tools, premium ghostwriting, family memory products.
- Look for user reactions, willingness to pay, disappointment patterns, and trust issues.
- Investigate what users value most:
  - accuracy?
  - emotional tone?
  - dignity?
  - literary beauty?
  - editability?
  - authenticity?
- Identify where AI-generated memoir text most often fails.

Output:
1. Executive verdict
2. What makes AI-generated memory output feel valuable?
3. What makes it feel fake, generic, or insulting?
4. Minimum quality threshold needed for a first "wow" moment
5. Whether operator review / human curation improves early business viability
6. Key design implications for chapter generation
7. Keep / change / cut
8. Final rating: go / cautious go / no-go
```

### Prompt 5. Нужен ли AI router с видимым thinking-state

```text
Act as an expert in conversational UX, latency perception, and AI interaction design.

I am validating a special interaction mechanic:
For simple user inputs, the system responds very quickly.
For deeper or more personal questions, the system routes the request to a slower, deeper layer and visibly signals that it is "thinking" through light, sound, motion, and short verbal cues.

Hypothesis:
This visible thinking state will increase trust, perceived intelligence, and patience, especially for elderly users, instead of feeling like lag.

Research question:
Is this interaction model supported by evidence from conversational UX, human-computer trust, latency psychology, and AI product design?

Research requirements:
- Look for evidence on:
  - response latency tolerance
  - perceived intelligence vs immediate speed
  - whether visible "thinking" helps or annoys
  - how older users interpret waiting
  - cases where fast + deep layered systems improved UX
- Prefer actual studies, HCI literature, and product case studies.

Output:
1. Executive verdict
2. Evidence table
3. When visible thinking improves trust
4. When it feels fake or theatrical
5. What exact design patterns are recommended
6. What should be avoided
7. Keep / change / cut
8. Final rating: go / cautious go / no-go
```

### Prompt 6. Насколько уникален Swiss-specific narrative and aesthetic layer

```text
Act as a cultural product strategist and brand positioning researcher.

I need to validate whether the concept's Swiss-specific emotional layer is a real strategic asset or just artistic self-indulgence.

The concept includes:
- Swiss night atmosphere
- rain, quiet, wet asphalt reflections
- Zurich / Winterthur psychological context
- perfectionism, loneliness, burnout, emotional restraint
- a slow monochrome-to-color transformation
- a breathing solar motif

Research question:
Does a strongly Swiss-specific emotional and narrative identity create a real moat for this product, especially in grants, trust, and memorability?

Research requirements:
- Look at Swiss cultural discourse, mental-health framing, aesthetic preferences, emotional design in Swiss contexts, local storytelling patterns, and how hyper-local specificity affects trust and differentiation.
- Compare with generic global wellness/memory products.

Output:
1. Executive verdict
2. Does Swiss specificity create trust, distinction, both, or neither?
3. Which local signals matter most?
4. Which signals are over-romanticized or too niche?
5. How much localization is enough?
6. Keep / change / cut
7. Final rating: go / cautious go / no-go
```

### Prompt 7. Мультиязычность: сила или ранняя ошибка

```text
Act as a multilingual product strategist and international UX analyst.

The current product direction is to launch the interface with these languages:
- DE-CH
- EN
- FR-CH
- IT-CH
- RM

AI conversationally should support Swiss German / Standard German as a special layer.

Research question:
Is it strategically smart to launch with this multilingual breadth early, or does it create too much operational burden relative to actual user and institutional value?

Research requirements:
- Focus on Switzerland's linguistic reality.
- Investigate how much language coverage matters for:
  - elderly users
  - family buyers
  - grant committees
  - trust
  - accessibility
- Compare early multilingual launches in similar products.
- Assess the editorial burden of literary content vs interface localization.

Output:
1. Executive verdict
2. Which language layers are truly essential at launch?
3. Which can be shell-localized vs content-localized later?
4. How important is Romansh in this context?
5. Is Swiss German best used in UI, AI dialogue, or both?
6. Operational risks of this decision
7. Keep / change / cut
8. Final rating: go / cautious go / no-go
```

### Prompt 8. Safety, психология, тема смерти и одиночества

```text
Act as a digital mental-health safety analyst and trust-risk reviewer.

I am validating a product that deals with:
- loneliness
- burnout
- nighttime anxiety
- fear of being forgotten
- leaving memory behind for family
- elderly users

The product must feel emotionally deep, but it must not become unsafe, manipulative, or medically misleading.

Research question:
What are the biggest safety, ethical, reputational, and product-trust risks when building a reflective AI product around loneliness, burnout, memory, aging, and death-adjacent themes?

Research requirements:
- Look for best practices and failure patterns in:
  - mental health apps
  - grief tech
  - elderly companion tools
  - AI chat safety
  - digital memorial tools
- Focus on wording, escalation, crisis handling, false claims, dependency risk, and emotional manipulation risk.

Output:
1. Executive verdict
2. Top safety risks
3. Top wording mistakes to avoid
4. What a safe but emotionally strong positioning looks like
5. What escalation paths should exist
6. Keep / change / cut
7. Final rating: go / cautious go / no-go
```

### Prompt 9. Voice, privacy, data retention, family memory and Swiss trust

```text
Act as a privacy researcher and product trust strategist with knowledge of Swiss and European digital norms.

The product stores highly sensitive materials:
- voice recordings
- autobiographical memories
- family narratives
- generated literary chapters
- possible sharing to relatives

Research question:
What privacy, consent, trust, and retention model would best fit a Swiss-first product handling intimate family memory and voice data, especially for elderly users?

Research requirements:
- Prioritize Swiss and EU data protection expectations.
- Focus on product trust, not just formal compliance.
- Investigate:
  - what users expect around recording and deletion
  - how sensitive voice and legacy data should be framed
  - how family-sharing should be handled
  - whether local processing, short retention, or clear deletion windows materially increase trust

Output:
1. Executive verdict
2. Biggest trust risks in handling this kind of data
3. Best-practice retention and deletion patterns
4. Best-practice consent language patterns
5. Family sharing implications
6. Keep / change / cut
7. Final rating: go / cautious go / no-go
```

### Prompt 10. Реальны ли grant-paths и fit с фондами

```text
Act as a grant strategist focused on Switzerland.

I need to stress-test the grant logic for a product concept that combines:
- an emotionally reflective visual narrative experience
- an AI-powered elderly memory and legacy tool
- social value around loneliness, burnout, and intergenerational connection
- a Swiss-first framing

Research question:
Which Swiss grants, funds, cultural institutions, social innovation programs, aging-focused foundations, and tech-for-good mechanisms are genuinely relevant for this concept, and what exact fit risks exist?

Research requirements:
- Use official sources whenever possible.
- Include application fit, eligibility logic, deadlines if available, risk notes, and whether the concept should be framed as culture, social innovation, aging, digital health-adjacent, or hybrid.
- Explicitly stress-test Pro Helvetia assumptions.
- Distinguish "strong fit", "possible fit", and "wishful thinking".

Output:
1. Executive verdict
2. Table of relevant Swiss funding routes
3. Best-fit framing for each route
4. Biggest eligibility traps
5. Biggest factual mistakes to avoid in applications
6. Keep / change / cut
7. Final rating: go / cautious go / no-go
```

### Prompt 11. Первые деньги: family, book, concierge, guided sessions

```text
Act as a zero-to-one monetization strategist.

The concept has several possible monetization layers:
- family-paid memory capture
- premium book / printed memory product
- concierge editing and refinement
- guided session packages
- grants
- later subscriptions or archives

Research question:
What is the most realistic early monetization path for a Swiss-first memory-and-reflection product like this, before full platform maturity?

Research requirements:
- Look at analogous businesses:
  - memoir services
  - family archive services
  - premium journaling and storytelling products
  - assisted autobiography services
  - voice legacy products
- Focus on what customers actually pay for early, and which offers feel premium enough without needing a complex product stack.

Output:
1. Executive verdict
2. Best early paid offer
3. Best second paid offer
4. What should definitely not be monetized first
5. What is likely to have the highest willingness to pay
6. Keep / change / cut
7. Final rating: go / cautious go / no-go
```

### Prompt 12. Реально ли мы отличаемся от конкурентов

```text
Act as a competition strategist and category analyst.

I need to know whether this concept is truly differentiated or just emotionally packaged similarity.

The concept combines:
- AI memoir generation from voice
- family legacy preservation
- a Swiss-specific emotional identity
- a reflective visual narrative layer
- a night-first calming experience

Research question:
Compared with existing AI memoir tools, legacy-as-a-service products, journaling tools, grief/memory apps, and mental wellness products, is this concept genuinely differentiated in a way users and funders would notice?

Research requirements:
- Map direct and adjacent competitors.
- Separate feature similarity from emotional category similarity.
- Identify where the concept is truly unique and where it is not.
- Evaluate whether the differentiator is strong enough to matter commercially.

Output:
1. Executive verdict
2. Competitive map
3. Direct competitors
4. Adjacent competitors
5. Strongest true differentiators
6. Weakest "fake differentiators"
7. Keep / change / cut
8. Final rating: go / cautious go / no-go
```

### Prompt 13. Elderly accessibility and zero-friction reality check

```text
Act as an accessibility strategist specializing in older adults and low-friction digital UX.

I need to validate whether the concept can realistically work for elderly users, not just in theory.

Core assumptions:
- one large action
- no required registration
- voice-first
- calm interface
- night-first design
- family can assist, but the user should still be able to engage directly

Research question:
What are the biggest UX and accessibility requirements for elderly users in a voice-based memory product, and what mistakes most often cause abandonment?

Research requirements:
- Look at accessibility research, older-adult UX studies, voice-interface adoption, readability, trust, anxiety around tech, and device constraints.
- Identify the exact UX details that matter most.

Output:
1. Executive verdict
2. Top 10 elderly UX requirements
3. Top 10 elderly UX mistakes
4. What makes a voice-first interface feel safe and easy
5. Whether "family-assisted usage" should be treated as default or secondary
6. Keep / change / cut
7. Final rating: go / cautious go / no-go
```

### Prompt 14. Техническая реализуемость и производительность

```text
Act as a technical product architect and performance strategist.

I am validating a web-native product architecture that includes:
- a multilingual interface
- voice capture
- transcription
- AI-generated memory chapters
- a slow atmospheric visual narrative layer
- audio ambience
- visible thinking states
- operator review

Research question:
What is the most realistic lightweight architecture for shipping this product fast while preserving emotional quality, especially on weak laptops and average phones?

Research requirements:
- Compare web-first architectures for similar products.
- Look at performance and complexity tradeoffs:
  - Next.js web app
  - heavy canvas/WebGL approaches
  - audio handling
  - AI latency
  - local persistence
  - multilingual payloads
- Focus on what to avoid if we want fast time-to-market and high reliability.

Output:
1. Executive verdict
2. Best architecture pattern
3. Worst architecture trap
4. What should be server-side vs client-side
5. Where performance is most likely to fail
6. Keep / change / cut
7. Final rating: go / cautious go / no-go
```

### Prompt 15. Юридический риск реальных швейцарских образов, мест, брендов и биографичности

```text
Act as a legal risk analyst for digital storytelling and interactive media in Switzerland.

The concept may eventually use:
- Swiss city moods and recognizable places
- culturally specific references
- potentially real-world visual inspiration
- family memory narratives
- autobiographical content that may mention real people

Research question:
What are the biggest Swiss legal and reputational risks when a memory-and-visual-narrative product uses real-world references, possible likenesses, brand-adjacent imagery, or autobiographical content involving third parties?

Research requirements:
- Focus on Swiss copyright, personality rights, trademarks, publicity/privacy issues, and commercial depiction of real places and people.
- Distinguish low-risk, medium-risk, and high-risk content patterns.
- Prefer official legal sources and serious Swiss legal commentary.

Output:
1. Executive verdict
2. Biggest legal traps
3. What is usually safe
4. What is usually dangerous
5. What content rules should the product adopt from day one
6. Keep / change / cut
7. Final rating: go / cautious go / no-go
```

### Prompt 16. Реалистичен ли scope для phased execution

```text
Act as a zero-to-one startup execution strategist.

I need a brutally honest reality check on scope.

The concept includes:
- ECHO (voice memoir generation)
- CHROMA (reflective visual narrative)
- multilingual UI
- Swiss-German conversational AI
- operator review
- safety layer
- family flow
- grants flow
- future archive/book path

Research question:
What is the most realistic phased execution strategy for this concept if the goal is to preserve the product's genius while drastically reducing execution risk?

Research requirements:
- Study analogous startups or products that successfully launched from a narrower wedge.
- Focus on what must be Phase 1, what can be Phase 2, and what should be explicitly deferred.
- Evaluate risk of overbuilding vs underdelivering.

Output:
1. Executive verdict
2. What absolutely must be in Phase 1
3. What should be in Phase 2
4. What should be postponed much later
5. Biggest execution risks
6. Strongest anti-scope rules
7. Keep / change / cut
8. Final rating: go / cautious go / no-go
```

## 5. Самые важные точки из всех

Если запускать исследование не по всем 16 prompt’ам сразу, а в правильном порядке, я бы ставил так:

1. Prompt 1 — elderly + family demand
2. Prompt 10 — grant fit and eligibility
3. Prompt 11 — monetization path
4. Prompt 4 — quality threshold of ECHO output
5. Prompt 3 — `CHROMA -> ECHO` bridge
6. Prompt 8 — safety and wording risk
7. Prompt 13 — elderly accessibility
8. Prompt 14 — technical feasibility
9. Prompt 7 — multilingual strategy
10. Prompt 12 — competitive differentiation

## 6. Финальный вывод

Самая критическая ценность всей бизнес-концепции лежит не в одной технологии, а в соединении 6 узлов:

- `ECHO` как быстрая реальная польза;
- `CHROMA` как эмоциональный мост;
- night-first резонанс;
- family buyer logic;
- Swiss-specific trust and atmosphere;
- grant-compatible positioning.

Если хотя бы 2 из этих 6 узлов окажутся ложными, проект придётся сильно упрощать или перепозиционировать.  
Если 5 из 6 подтвердятся, концепция действительно может быть не просто красивой, а очень сильной.

