# Final Codex Swarm Development Bible v1

Статус: финальный отдельный документ для разработки  
Назначение: детальный, Codex-ready, swarm-ready план разработки платформы  
Ограничение: это не код, а исполнительный документ  
Основание: новые PDF из `D:\ДЛЯ_ТІК_ТОКУ!!` + уже зафиксированные документы `Final_Concept_Document_v3.md` и `Business_Concept_Comparative_Audit_v1.md`

## 1. Что нового дали последние PDF

### 1.1. `Digital Legacy Product Validation Report.pdf`

Ключевые выводы, которые обязательно меняют приоритеты:

- коммерческий вход сильнее всего не через самого elderly user, а через `Family Buyer`;
- Swiss/DACH рынок действительно поддерживает `legacy preservation` и готов платить за премиальный middle layer между DIY и ghostwriting;
- Swiss рынок очень чувствителен к privacy и AI trust;
- Swiss German dialect handling — не украшение, а важная часть доверия;
- идея `privacy by design` и обещание `Swiss Data Safe` должны быть не маркетинговым мусором, а реальным продуктовым слоем;
- хранение и обработка особо чувствительных voice/legacy данных должны проектироваться с приоритетом на Swiss/EU data residency;
- пользовательские аудио и транскрипты не должны использоваться для foundation model training;
- phone-call / telephony path выглядит сильным future direction, но не обязательным для первой волны MVP;
- вывод по рынку: `cautious go`, не blind go.

### 1.2. `AI Mental Health Safety Review.pdf`

Ключевые выводы:

- продукт должен позиционироваться как `supportive digital adjunct` и `structured digital vault`, но никогда как therapist substitute;
- высокий риск parasocial dependency;
- нельзя скатываться в “deadbots”, post-mortem avatars, synthetic messages “from the dead”;
- нельзя гнаться за engagement metrics ценой безопасности;
- нельзя оптимизировать продукт под `maximize session length`, `DAU` или эмоциональную зависимость;
- продукт должен быть `safe-by-default`;
- onboarding и wording должны прямо говорить, что это AI, а не человек;
- в Швейцарии наследники могут иметь права на данные умершего, значит legacy/privacy model надо проектировать очень аккуратно.

### 1.3. `Minimalist Narrative Web Architecture.pdf`

Ключевые выводы:

- архитектура должна быть `Progressive Enhancement`, `DOM-First`, `strictly modular`;
- текст нельзя прятать в canvas/WebGL как основу narrative layer;
- рекомендованный каркас для CHROMA-пути: `Ink/useink`, `zustand`, `GSAP`, `Next.js View Transitions API`, `shadcn/ui`/Radix;
- `Framer Motion` полезен локально для микроинтеракций, но не как главный route transition engine;
- тяжёлый WebGL допустим только как optional future enhancement, не как базис;
- архитектура должна быть дружелюбной к AI coding assistants: маленькие модули, чистые границы, типизированные подсистемы.

### 1.4. `Ответ_от_ШИ.pdf`

Ключевые выводы:

- продукт надо мыслить как 4 ядра: `CHROMA`, `ECHO`, `Conversational Biographer`, `Memory Router`;
- не нужно fine-tuning как ML-проект на первом нормальном этапе;
- вместо этого нужны:
  - system prompt;
  - dialogue policy;
  - question planner;
  - memory retrieval;
  - chapter generator;
  - safe reply policy;
  - visible thinking UX;
- стек подтверждён как web-first: `Next.js`, `TypeScript`, `Tailwind`, `PostgreSQL`, object storage, `OpenAI`, `Whisper`, `pgvector`, `Railway`, analytics, email, payments;
- логика приоритетов верная: сначала инфраструктура и `ECHO`, потом chapter generation, controlled chat, router, memory, science, analytics, потом всё остальное;
- нельзя сразу строить full AGI worldbuilding, heavy VN engine, 3D, сложную регистрацию, тонкую dialect fine-tune, native app.

## 2. Финальная инженерная истина продукта

Платформа состоит из 4 ядер:

1. `CHROMA`
2. `ECHO`
3. `Conversational Biographer`
4. `Memory Router`

И 6 обязательных системных слоёв:

1. `Public Front Layer`
2. `Science + Grants Layer`
3. `Safety + Compliance Layer`
4. `Data + Analytics Layer`
5. `Operator Layer`
6. `Localization Layer`

## 3. Самые жёсткие правила разработки

| Правило | Статус |
|---|---|
| `ECHO` ship first | Обязательно |
| `CHROMA` должен быть в первой публичной волне хотя бы как short slice | Обязательно |
| MVP без обязательной регистрации | Обязательно |
| Email только после ценности | Обязательно |
| Elderly-first простота не обсуждается | Обязательно |
| Family buyer logic должна быть встроена в продукт и copy | Обязательно |
| Night-first UX обязателен | Обязательно |
| Text and interactive elements must remain DOM-first | Обязательно |
| No canvas as primary text layer | Обязательно |
| No fine-tuning as first solution | Обязательно |
| No deadbots / grief simulation / fake immortality | Обязательно |
| No medical cure framing | Обязательно |
| No heavy WebGL as MVP basis | Обязательно |
| No full VN engine in first wave | Обязательно |
| Swiss privacy and data trust must be explicit | Обязательно |
| Sensitive voice/legacy processing should prefer Swiss/EU data residency | Обязательно |
| User content must not be reused for foundation model training | Обязательно |
| Do not optimize for addictive engagement metrics | Обязательно |
| Telephony path is future-facing, not MVP-blocking | Обязательно |

## 4. Роли роя агентов

| Агент | Ответственность | Write ownership |
|---|---|---|
| Product Lead Agent | product truth, priorities, change control | `docs/`, master specs |
| IA + Copy Agent | структура страниц, flows, microcopy, onboarding text | `content/`, page copy docs |
| Localization Agent | i18n strategy, locale files, translation workflow | `locales/`, i18n docs |
| Design System Agent | tokens, typography, motion rules, visual patterns | `styles/`, design docs |
| Public Layer Agent | landing, science, grants, family, contact | `app/(public)/`, public components |
| ECHO Agent | recording, transcript flow, chapter delivery UX | `features/echo/` |
| Biographer Agent | prompts, question policy, chapter synthesis rules | `prompts/`, `lib/ai/biographer/` |
| CHROMA Agent | narrative engine, scene format, pacing, transitions | `features/chroma/` |
| Router Agent | fast/deep AI routing, visible thinking states | `lib/ai/router/`, `features/chat/` |
| Safety Agent | disclaimers, escalation logic, compliance rules | `lib/safety/`, `content/safety/` |
| Data/Ops Agent | schema, storage, analytics, admin | `db/`, `lib/storage/`, `app/admin/` |
| QA Agent | accessibility, performance, cross-locale QA, pilot checklist | `qa/`, test docs |

## 5. Порядок разработки

Жёсткий порядок:

1. product lock
2. swarm operating model
3. app shell + IA
4. design system
5. localization shell
6. public layer
7. `ECHO` recording
8. transcript
9. chapter generation
10. family path
11. `Conversational Biographer`
12. `Memory Router`
13. `CHROMA` engine
14. `CHROMA` slice
15. safety/compliance
16. analytics/admin
17. testing
18. pilot + grants + launch

## 6. Что не делать сразу

- full AGI worldbuilding
- full voice agent telephony as Phase 1 blocker
- native mobile apps
- full social graph
- heavy 3D / shader-first build
- long onboarding
- subscription-first pricing
- dead man’s switch automation
- post-mortem companion simulation
- overly complex memory graphs before first useful sessions

## 7. Финальный стек

| Слой | Решение |
|---|---|
| Frontend | Next.js 15 + TypeScript |
| UI | Tailwind + Radix/shadcn patterns |
| Narrative scripting | Ink/useink |
| State | zustand |
| Macro animation | GSAP |
| Micro-interactions | Framer Motion only where local and safe |
| Route transitions | View Transitions API |
| Backend | Next.js route handlers / server actions |
| DB | PostgreSQL |
| ORM | Prisma или Drizzle, но выбрать один и не мешать |
| Vector memory | pgvector |
| Storage | S3-compatible or R2 |
| STT | Whisper / speech-to-text |
| LLM | GPT-class model for dialogue + chapter synthesis |
| Deploy | Railway |
| Analytics | Plausible or PostHog |
| Email | Resend or Postmark |
| Payments | Stripe, not in first shipping wave |

## 8. Формат плана

Ниже 360 микрошагов.  
Они разбиты по фазам так, чтобы рой агентов мог работать параллельно, но без разрушения общей архитектуры.

---

## ФАЗА 0. Product Lock — шаги 1-20

1. Зафиксировать название продукта и рабочее имя платформы.
2. Зафиксировать, что платформа состоит из `CHROMA`, `ECHO`, `Conversational Biographer`, `Memory Router`.
3. Зафиксировать primary audiences в порядке важности.
4. Зафиксировать, что Family Buyer — основной коммерческий вход.
5. Зафиксировать, что Elderly User — главный activation and retention fulcrum.
6. Зафиксировать night-first как ключевой product mode.
7. Зафиксировать no-registration MVP.
8. Зафиксировать email-after-value policy.
9. Зафиксировать 5 интерфейсных языков как owner decision.
10. Зафиксировать Swiss German / Standard German как conversational layer.
11. Зафиксировать, что продукт не является therapy substitute.
12. Зафиксировать, что продукт не обещает literal immortality.
13. Зафиксировать, что продукт не создаёт deadbots и post-mortem avatars.
14. Зафиксировать, что CHROMA — emotional bridge в ECHO.
15. Зафиксировать, что ECHO — первый functional ship.
16. Зафиксировать, что CHROMA short slice входит в первую волну.
17. Зафиксировать, что DOM-first narrative — обязательное правило.
18. Зафиксировать, что privacy by design — core selling point.
19. Зафиксировать, что Swiss trust and dignity важнее engagement vanity metrics.
20. Утвердить master product truth как frozen reference.

## ФАЗА 1. Swarm Governance — шаги 21-40

21. Назначить роли роя агентов.
22. Закрепить ownership каждого агента по модулям.
23. Запретить параллельную запись в одни и те же файлы.
24. Определить формат handoff между агентами.
25. Определить формат решений по архитектуре.
26. Определить, что является breaking change.
27. Зафиксировать global source of truth для copy.
28. Зафиксировать global source of truth для prompts.
29. Зафиксировать global source of truth для design tokens.
30. Определить review order перед merge результатов агентов.
31. Зафиксировать phase gates и exit criteria.
32. Зафиксировать красные линии по privacy, safety, legal copy.
33. Зафиксировать список решений, которые агентам нельзя принимать самостоятельно.
34. Назначить owner на i18n consistency.
35. Назначить owner на accessibility consistency.
36. Назначить owner на safety consistency.
37. Назначить owner на operator workflow quality.
38. Определить формат backlog: MVP, wave 1, phase 2, later.
39. Зафиксировать запрет на “scope creep disguised as polish”.
40. Утвердить operating rhythm роя.

## ФАЗА 2. Information Architecture — шаги 41-60

41. Зафиксировать карту всех публичных страниц.
42. Зафиксировать карту сервисных flows.
43. Зафиксировать карту внутренних operator pages.
44. Определить главные CTA на landing.
45. Определить вторичные CTA на landing.
46. Определить порядок блоков на landing.
47. Зафиксировать `/science`.
48. Зафиксировать `/for-family`.
49. Зафиксировать `/for-grants`.
50. Зафиксировать `/contact`.
51. Зафиксировать `/privacy`.
52. Зафиксировать `/safety`.
53. Зафиксировать `/echo`.
54. Зафиксировать `/chroma`.
55. Зафиксировать `/demo` как быстрый вход, если нужен отдельно.
56. Спроектировать переходы между `landing -> CHROMA`.
57. Спроектировать переходы между `landing -> ECHO`.
58. Спроектировать переходы между `CHROMA -> ECHO`.
59. Спроектировать переходы между `ECHO -> Family Send`.
60. Утвердить IA как frozen map.

## ФАЗА 3. Repo and App Shell — шаги 61-80

61. Инициализировать проектный каркас.
62. Подготовить app router structure.
63. Подготовить feature-based directories.
64. Подготовить `content/` для page copy.
65. Подготовить `prompts/` для AI layers.
66. Подготовить `db/` для схемы и миграций.
67. Подготовить `lib/ai/` для AI orchestration.
68. Подготовить `lib/safety/`.
69. Подготовить `lib/storage/`.
70. Подготовить `lib/email/`.
71. Подготовить `lib/analytics/`.
72. Подготовить `features/echo/`.
73. Подготовить `features/chroma/`.
74. Подготовить `features/chat/`.
75. Подготовить `features/family/`.
76. Подготовить `app/admin/`.
77. Подготовить env schema.
78. Подготовить config registry.
79. Подготовить typed constants layer.
80. Зафиксировать app shell как база для всех агентов.

## ФАЗА 4. Design System Core — шаги 81-100

81. Определить базовую палитру.
82. Определить dark palette.
83. Определить solar accent palette.
84. Определить green-reflection accent palette.
85. Определить safe highlight palette.
86. Выбрать UI typeface family.
87. Выбрать literary typeface family.
88. Определить scale для headings.
89. Определить scale для long-form text.
90. Определить spacing scale.
91. Определить radius rules.
92. Определить shadow and glow rules.
93. Определить opacity rules.
94. Определить transition duration tokens.
95. Определить breathing rhythm tokens.
96. Определить reduced-motion rules.
97. Определить night brightness discipline.
98. Определить contrast rules for elderly mode.
99. Определить component states for listening/thinking/responding.
100. Заморозить design token layer.

## ФАЗА 5. Motion and Sound Rules — шаги 101-120

101. Описать motion philosophy для продукта.
102. Описать motion philosophy для CHROMA.
103. Описать motion philosophy для ECHO.
104. Определить listening animation.
105. Определить fast-thinking animation.
106. Определить deep-thinking animation.
107. Определить response-arrival animation.
108. Определить transition from public layer to CHROMA.
109. Определить transition from CHROMA to ECHO.
110. Определить transition from ECHO to family send.
111. Описать sound philosophy.
112. Определить base ambient class.
113. Определить rain layer class.
114. Определить page-turn cue class.
115. Определить keypress cue class.
116. Определить voice recording feedback class.
117. Определить mute-by-default / soft-on logic.
118. Определить silent mode.
119. Определить bedtime-safe sound rules.
120. Заморозить motion/audio spec v1.

## ФАЗА 6. Localization Architecture — шаги 121-140

121. Подключить i18n framework.
122. Создать locale registry.
123. Создать namespaces для UI copy.
124. Создать namespaces для legal copy.
125. Создать namespaces для science copy.
126. Создать namespaces для family copy.
127. Создать namespaces для grants copy.
128. Создать namespaces для ECHO copy.
129. Создать namespaces для CHROMA copy.
130. Создать namespaces для safety copy.
131. Настроить `DE-CH` shell.
132. Настроить `EN` shell.
133. Настроить `FR-CH` shell.
134. Настроить `IT-CH` shell.
135. Настроить `RM` shell.
136. Определить fallback policy.
137. Определить tone policy per locale.
138. Определить, какие long-form тексты переводятся позже вручную.
139. Определить Swiss German dialogue layer policy.
140. Заморозить i18n architecture.

## ФАЗА 7. Public Front Layer — шаги 141-160

141. Собрать skeleton landing page.
142. Собрать hero block.
143. Добавить два primary CTA.
144. Добавить short framing line.
145. Добавить trust-oriented subtext.
146. Добавить language switcher.
147. Добавить teaser zone.
148. Добавить quick explanation of dual product.
149. Добавить proof teaser for family.
150. Добавить proof teaser for grants.
151. Собрать `/science` skeleton.
152. Собрать `/for-family` skeleton.
153. Собрать `/for-grants` skeleton.
154. Собрать `/contact` skeleton.
155. Собрать `/privacy` skeleton.
156. Собрать `/safety` skeleton.
157. Добавить footer and compliance links.
158. Проверить, что first load remains minimal.
159. Проверить, что public layer работает без auth.
160. Заморозить public layer structure.

## ФАЗА 8. Public Copy and Proof Layer — шаги 161-180

161. Написать landing headline.
162. Написать landing supporting line.
163. Написать CTA copy для `Find Light`.
164. Написать CTA copy для `Leave a Trace`.
165. Написать ultra-short explanation of `CHROMA`.
166. Написать ultra-short explanation of `ECHO`.
167. Написать “why now” copy для family.
168. Написать “why this matters” copy для grants.
169. Написать short Swiss framing block.
170. Написать `The Science` intro.
171. Написать CBT framing block.
172. Написать Jung framing block.
173. Написать burnout block.
174. Написать loneliness block.
175. Написать neuroplasticity-adjacent block без медclaim.
176. Написать “why monochrome to color” block.
177. Написать “why voice-first for seniors” block.
178. Написать “why authenticity matters in AI era” block.
179. Проверить весь copy на safe wording.
180. Заморозить public proof copy v1.

## ФАЗА 9. ECHO Interaction Design — шаги 181-200

181. Спроектировать ECHO entry state.
182. Спроектировать elderly-safe first sentence.
183. Спроектировать permission request copy.
184. Спроектировать record button size.
185. Спроектировать pause button.
186. Спроектировать stop button.
187. Спроектировать elapsed time display.
188. Спроектировать waveform or solar pulse feedback.
189. Спроектировать recording help text.
190. Спроектировать retry path.
191. Спроектировать upload state.
192. Спроектировать transcription waiting state.
193. Спроектировать first chapter reveal state.
194. Спроектировать one-question follow-up screen.
195. Спроектировать “continue tomorrow” state.
196. Спроектировать “send to family” state.
197. Спроектировать “save chapter” state.
198. Спроектировать non-technical empty/error copy.
199. Спроектировать elderly accessibility mode.
200. Заморозить ECHO UX flow v1.

## ФАЗА 10. ECHO Recording and Transcript Pipeline — шаги 201-220

201. Реализовать mic permission handling.
202. Реализовать record start.
203. Реализовать pause behavior.
204. Реализовать resume behavior.
205. Реализовать stop behavior.
206. Реализовать client-side blob preparation.
207. Реализовать upload contract.
208. Реализовать storage key strategy.
209. Реализовать transcript request pipeline.
210. Реализовать transcript status handling.
211. Реализовать transcript normalization.
212. Реализовать basic speaker assumptions.
213. Реализовать family name and place preservation policy.
214. Реализовать raw transcript storage rules.
215. Реализовать transcript display for internal debug only if needed.
216. Реализовать user-facing chapter-first output preference.
217. Реализовать retry path after STT failure.
218. Реализовать short recording handling.
219. Реализовать long recording boundary policy.
220. Заморозить transcript pipeline v1.

## ФАЗА 11. Conversational Biographer Core — шаги 221-240

221. Определить role of Conversational Biographer.
222. Определить persona boundaries.
223. Определить tone for elderly sessions.
224. Определить tone for family-assisted sessions.
225. Определить what the system never says.
226. Определить what the system always does.
227. Создать system prompt v1.
228. Создать dialogue policy v1.
229. Создать question planning policy.
230. Создать missing-information policy.
231. Создать gentle redirection policy.
232. Создать significance-amplification policy.
233. Создать anti-sycophancy policy.
234. Создать non-clinical support policy.
235. Создать anti-death-romanticization policy.
236. Создать memory-dignity framing policy.
237. Создать family-safe wording policy.
238. Создать multilingual dialogue constraints.
239. Создать output quality rubric.
240. Заморозить Conversational Biographer policy v1.

## ФАЗА 12. Chapter Synthesis Pipeline — шаги 241-260

241. Определить структуру chapter output.
242. Определить desired length for first chapter.
243. Определить dignity rules for prose.
244. Определить anti-generic rules for prose.
245. Определить factual fidelity rules.
246. Определить transformation rules from messy speech to clean narrative.
247. Определить how to keep speaker voice without raw chaos.
248. Определить how to preserve named entities.
249. Определить chapter title policy.
250. Определить excerpt policy for family sharing.
251. Реализовать first chapter generation call.
252. Реализовать follow-up question generation call.
253. Реализовать refined chapter regeneration path.
254. Реализовать “chapter too generic” detection.
255. Реализовать “chapter too fabricated” detection.
256. Реализовать “chapter too long” detection.
257. Реализовать “chapter too sentimental” detection.
258. Добавить operator review path for weak outputs.
259. Сформировать chapter QA checklist.
260. Заморозить chapter synthesis v1.

## ФАЗА 13. Family Flow — шаги 261-280

261. Спроектировать `For Family` entry page.
262. Написать copy про urgency without manipulation.
263. Написать copy про dignity and not losing a voice.
264. Спроектировать sample chapter preview.
265. Спроектировать family-assisted first session instructions.
266. Спроектировать send-by-email flow.
267. Спроектировать share link flow.
268. Спроектировать later-book teaser.
269. Спроектировать family package placeholder.
270. Спроектировать sibling-sharing placeholder.
271. Подготовить template письма семье.
272. Подготовить template follow-up письма.
273. Подготовить template “continue with another chapter”.
274. Подготовить template “print/book later”.
275. Определить family CTA hierarchy.
276. Определить when not to push family upsell.
277. Определить privacy language for family sharing.
278. Определить consent before sending to family.
279. Проверить, что family path не перегружен.
280. Заморозить family flow v1.

## ФАЗА 14. CHROMA Engine — шаги 281-300

281. Выбрать одну каноническую CHROMA story for v1.
282. Разбить story на scenes.
283. Разбить scenes на beats.
284. Разбить beats на text units.
285. Определить pacing per beat.
286. Выбрать narrative scripting format.
287. Подключить Ink/useink.
288. Определить story state model.
289. Определить choice model.
290. Определить scene progression model.
291. Определить text reveal engine.
292. Определить ambient cue triggers.
293. Определить color progression engine.
294. Определить breathing sync logic.
295. Определить scene exit rules.
296. Определить interruption recovery rules.
297. Определить return-to-scene rules.
298. Определить bridge trigger to reflection/chat.
299. Определить bridge trigger to ECHO.
300. Заморозить CHROMA engine v1.

## ФАЗА 15. CHROMA Content and Atmosphere — шаги 301-320

301. Написать CHROMA opening scene.
302. Написать Swiss night scene.
303. Написать rain/quiet/urban detachment scene.
304. Написать emotional recognition scene.
305. Написать first warm shift scene.
306. Написать first color-return scene.
307. Написать internal meaning bridge.
308. Написать line that dignifies the user's life without overclaiming.
309. Написать transition into voice/memory logic.
310. Проверить, что story не звучит как self-help cliché.
311. Проверить, что story не звучит как therapy app cliché.
312. Проверить, что story не звучит like generic poetic nonsense.
313. Добавить restrained scene-specific audio cues.
314. Добавить black-to-warm palette transitions.
315. Добавить final bridge UI to ECHO.
316. Добавить safe exit from CHROMA.
317. Добавить “come back tonight” return loop placeholder.
318. Провести literary quality review.
319. Провести Swiss resonance review.
320. Заморозить CHROMA slice v1.

## ФАЗА 16. Reflection Chat + Memory Router — шаги 321-340

321. Спроектировать chat UI as secondary layer.
322. Определить when chat is shown.
323. Определить when chat is hidden.
324. Определить chat role relative to CHROMA.
325. Определить chat role relative to ECHO.
326. Создать fast-response prompt.
327. Создать deep-response prompt.
328. Создать routing heuristic for simple input.
329. Создать routing heuristic for complex input.
330. Создать visible fast-thinking state.
331. Создать visible deep-thinking state.
332. Создать memory retrieval policy.
333. Создать memory summarization policy.
334. Создать chapter-aware follow-up policy.
335. Создать chat-to-ECHO invitation rules.
336. Создать chat-to-CHROMA invitation rules.
337. Создать anti-loop policy so chat does not trap users endlessly.
338. Создать anti-engagement-optimization policy.
339. Проверить router behavior on representative inputs.
340. Заморозить chat + router v1.

## ФАЗА 17. Safety, Compliance, Privacy — шаги 341-360

341. Написать explicit AI disclaimer.
342. Написать non-therapist disclaimer.
343. Написать non-crisis disclaimer.
344. Написать privacy summary in plain language.
345. Написать recording consent copy.
346. Написать family-sharing consent copy.
347. Написать deletion request flow copy.
348. Написать data retention copy.
349. Определить safe-by-default settings.
350. Определить crisis language triggers.
351. Определить escalation text for crisis states.
352. Определить what chat must never validate.
353. Определить what grief-adjacent features are forbidden.
354. Исключить deadbot-like language.
355. Исключить synthetic post-mortem messaging.
356. Определить inheritance/heirs data handling assumptions.
357. Определить operator review for risky sessions.
358. Проверить весь продукт на safe wording.
359. Проверить весь продукт на Swiss trust framing.
360. Заморозить safety/compliance baseline v1.

## 9. Что делать сразу после 360 шагов

Следующая волна должна идти в таком порядке:

1. analytics schema
2. operator dashboard
3. accessibility hardening
4. performance hardening
5. multilingual copy completion
6. grant packet copy
7. family offer packaging
8. pilot sessions
9. payment layer
10. phase 2 content

## 9.1. Дополнительные жёсткие operational constraints

| Ограничение | Как трактовать |
|---|---|
| `Swiss Data Safe` не должен быть пустым маркетингом | Нужно реально спроектировать data trust architecture |
| Sensitive audio/transcript data | Приоритет на Swiss/EU residency и прозрачные retention rules |
| Foundation model training | Пользовательские данные не идут в переобучение foundation models |
| Trust > engagement | Нельзя проектировать addictive loops ради метрик |
| Telephony / landline path | Сильная future линия, но не причина задерживать MVP |
| Heirs and deletion rights | Legacy/privacy flows должны учитывать возможные запросы наследников |
| Post-mortem automation | Нельзя создавать функции, которые имитируют “жизнь после смерти” через AI |

## 10. Чего ещё не хватает после этого документа

Этот документ закрывает стратегию исполнения, но не заменяет:

- final copy deck;
- final prompt pack;
- final legal pack;
- final audio asset map;
- final motion timing sheet;
- final analytics schema;
- final admin field map;
- final grant application pack.

## 11. Финальная фиксация

Это не brainstorming-документ.  
Это рабочая разработческая Библия v1.

Если команде или рою агентов нужно принимать решения, не предусмотренные этим документом, решение должно:

- не ломать `ECHO` first;
- не ломать `CHROMA -> ECHO`;
- не ломать elderly simplicity;
- не ломать night-first experience;
- не ломать privacy + safety;
- не раздувать scope ради “красоты”.

Главная цель:

не построить “максимально огромный продукт”,  
а построить `максимально сильный первый живой продукт`,  
который уже несёт:

- пользу;
- trust;
- dignity;
- grant readiness;
- family value;
- ясный путь к следующим итерациям.
