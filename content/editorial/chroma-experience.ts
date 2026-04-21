import type { Locale } from "@/lib/i18n";

export type ChromaSceneId = "platform" | "window" | "trace";

type ChromaOption = {
  id: string;
  label: string;
  effect: string;
};

type ChromaScene = {
  id: ChromaSceneId;
  time: string;
  title: string;
  body: string;
  note: string;
  warmth: string;
  stageGlow: string;
  sceneGlow: string;
  options: ChromaOption[];
};

type ChromaExperienceCopy = {
  headerLabel: string;
  sceneStateLabel: string;
  warmthCurveTitle: string;
  whyMattersTitle: string;
  whyMattersBody: string;
  tuningLabel: string;
  tuningTitle: string;
  currentEffectLabel: string;
  continueCta: string;
  crossIntoEchoCta: string;
  memoryLabel: string;
  summaryScenePrefix: string;
  summarySelectedLabel: string;
  summaryBody: string;
  sceneButtonAriaPrefix: string;
  scenes: ChromaScene[];
};

const visualState = {
  platform: {
    time: "00:43",
    stageGlow:
      "radial-gradient(circle at 50% 35%, rgba(228,200,118,0.22), rgba(228,200,118,0.05) 34%, rgba(255,255,255,0.02) 60%, transparent 72%)",
    sceneGlow:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
  },
  window: {
    time: "01:08",
    stageGlow:
      "radial-gradient(circle at 50% 35%, rgba(147,239,179,0.20), rgba(228,200,118,0.10) 36%, rgba(255,255,255,0.03) 62%, transparent 74%)",
    sceneGlow:
      "linear-gradient(180deg, rgba(147,239,179,0.08), rgba(255,255,255,0.02))",
  },
  trace: {
    time: "01:26",
    stageGlow:
      "radial-gradient(circle at 50% 35%, rgba(228,200,118,0.30), rgba(147,239,179,0.16) 34%, rgba(255,255,255,0.04) 60%, transparent 74%)",
    sceneGlow:
      "linear-gradient(180deg, rgba(228,200,118,0.10), rgba(147,239,179,0.04))",
  },
} as const;

function withVisuals(
  id: ChromaSceneId,
  scene: Omit<ChromaScene, "id" | "time" | "stageGlow" | "sceneGlow">,
): ChromaScene {
  return {
    id,
    time: visualState[id].time,
    stageGlow: visualState[id].stageGlow,
    sceneGlow: visualState[id].sceneGlow,
    ...scene,
  };
}

export const chromaExperienceCopy: Record<Locale, ChromaExperienceCopy> = {
  "de-CH": {
    headerLabel: "Interaktiver CHROMA Slice",
    sceneStateLabel: "Szenen-Zustand",
    warmthCurveTitle: "Waermekurve",
    whyMattersTitle: "Warum das zaehlt",
    whyMattersBody:
      "Die Person soll spueren, dass das System sie irgendwohin traegt und nicht bloss huebsche Screens zeigt.",
    tuningLabel: "Emotionales Tuning",
    tuningTitle: "Was soll in dieser Szene zuerst ankommen?",
    currentEffectLabel: "Aktuelle Wirkung",
    continueCta: "Slice fortsetzen",
    crossIntoEchoCta: "In die ECHO Demo wechseln",
    memoryLabel: "Slice-Gedaechtnis",
    summaryScenePrefix: "Szene",
    summarySelectedLabel: "Gewaehlter Akzent",
    summaryBody:
      "Diese Motive gehen jetzt als Handoff-Kontext an `ECHO` weiter, damit die memoir demo emotionale Richtung erbt, ohne dass `CHROMA` zu einem verzweigten Spiel wird.",
    sceneButtonAriaPrefix: "Szene oeffnen",
    scenes: [
      withVisuals("platform", {
        title: "Der Bahnhof ist nicht still geworden. Er ist nur duenn geworden.",
        body: "Regen tippt in sauberen, harten Intervallen gegen das Glas. Der Koerper ist muede, aber der Kopf noch immer vom Tag ueberbelichtet. `CHROMA` darf diesen Zustand nicht angreifen. Es muss ihm sanft begegnen und ihn verlangsamen.",
        note: "Erste Aufgabe: inneres Rauschen senken, ohne so zu tun, als waere schon alles geloest.",
        warmth:
          "Sehr wenig Waerme. Fast monochrom. Ein wenig Gold kommt nur an den Raendern an.",
        options: [
          {
            id: "breath",
            label: "Zuerst soll der Atem ruhiger werden",
            effect:
              "Die Szene waehlt zuerst koerperliche Regulation. Die Person wird zu gleichmaessigerem Tempo gefuehrt, bevor nach Bedeutung gefragt wird.",
          },
          {
            id: "light",
            label: "Zuerst soll das Licht weicher werden",
            effect:
              "Die Szene priorisiert sensorische Sanftheit: Kontrast laesst nach, Kanten waermen sich leicht, und das Nervensystem erhaelt eine weniger feindliche Oberflaeche.",
          },
          {
            id: "thought",
            label: "Zuerst sollen die Gedanken leiser werden",
            effect:
              "Die Szene verengt Sprache und kognitive Last. Weniger Woerter, mehr Raum, weniger Druck, alles sofort deuten zu muessen.",
          },
        ],
      }),
      withVisuals("window", {
        title: "Bedeutung kehrt zurueck, bevor Farbe es tut.",
        body: "Die Stadt ist noch immer kuehl, silbern und fern. Aber die Person braucht kein Wunder mehr. Sie braucht nur ein glaubwuerdiges Zeichen, dass das innere Leben nicht fuer immer flach geworden ist.",
        note: "Zweite Aufgabe: von blosser Beruhigung zu erkennbarer Bedeutung verschieben.",
        warmth:
          "Die Waerme steigt. Die Palette bleibt zurueckhaltend, aber Gruen und Gold erscheinen nun als Beweis, nicht als Dekor.",
        options: [
          {
            id: "memory",
            label: "Zuerst soll eine Erinnerung auftauchen",
            effect:
              "Die Szene wird sanft mnemonic. Sie laesst spueren, dass Kontinuitaet bereits existiert, noch bevor irgendein memoir capture beginnt.",
          },
          {
            id: "direction",
            label: "Zuerst soll eine Richtung auftauchen",
            effect:
              "Die Szene schaerft sich zu einem kleinen inneren Kompass. Sie verspricht keine Gewissheit, macht aber den naechsten Schritt weniger zufaellig.",
          },
          {
            id: "warmth",
            label: "Zuerst soll ein wenig Waerme auftauchen",
            effect:
              "Die Szene erhoeht sensorische Beruhigung. Sie stellt gefuehlte Sicherheit ueber Erklaerung und laesst emotionale Farbe die Kognition fuehren.",
          },
        ],
      }),
      withVisuals("trace", {
        title:
          "Die Nacht wird ueberlebbar, wenn etwas in ihr weitergetragen werden kann.",
        body: "Zu diesem Punkt sollte die Person nicht mehr im gleichen flachen Zustand gefangen sein, in dem sie eingetreten ist. Der letzte Zug ist nicht, eine Funktion zu verkaufen. Er soll eine Wahrheit natuerlich machen: Ein Leben verdient es, eine Spur zu hinterlassen.",
        note: "Dritte Aufgabe: die Bruecke in `ECHO` moralisch und emotional unausweichlich machen.",
        warmth:
          "Waerme ist nun da und stabil. Die Szene bleibt naechtlich, aber das Licht ist nicht mehr nur aeusserlich.",
        options: [
          {
            id: "voice",
            label: "Eine Stimme soll bewahrt werden",
            effect:
              "Die Bruecke weist direkt auf memoir. Die Person spuert, dass nicht Abstraktion zaehlt, sondern eine lebendige menschliche Stimme, die weitergetragen wird.",
          },
          {
            id: "lesson",
            label: "Eine Lektion soll bewahrt werden",
            effect:
              "Die Bruecke betont Weisheit und Bedeutung zwischen Generationen. `ECHO` wird zu einem Ort, an dem gelebtes Wissen geformt statt bloss gespeichert wird.",
          },
          {
            id: "fragment",
            label: "Schon ein Fragment soll bewahrt werden",
            effect:
              "Die Bruecke senkt die Schwelle auf schoene Weise. Die Person versteht, dass sie heute Nacht keine ganze Autobiografie braucht; ein wahrer Abschnitt genuegt.",
          },
        ],
      }),
    ],
  },
  en: {
    headerLabel: "Interactive CHROMA slice",
    sceneStateLabel: "Scene state",
    warmthCurveTitle: "Warmth curve",
    whyMattersTitle: "Why this matters",
    whyMattersBody:
      "The user should feel that the system is carrying them somewhere, not merely showing pretty screens.",
    tuningLabel: "Emotional tuning",
    tuningTitle: "What should arrive first in this scene?",
    currentEffectLabel: "Current effect",
    continueCta: "Continue the slice",
    crossIntoEchoCta: "Cross into ECHO demo",
    memoryLabel: "Slice memory",
    summaryScenePrefix: "Scene",
    summarySelectedLabel: "Selected emphasis",
    summaryBody:
      "These motifs now become handoff context for `ECHO`, so the memoir demo can inherit emotional direction without turning `CHROMA` into a branching game.",
    sceneButtonAriaPrefix: "Open scene",
    scenes: [
      withVisuals("platform", {
        title: "The station has not gone silent. It has only gone thin.",
        body: "Rain taps the glass in clean, hard intervals. The body is tired, but the mind is still overlit from the day. `CHROMA` should not attack that state. It should meet it gently and slow it down.",
        note: "First task: reduce internal noise without pretending everything is solved.",
        warmth:
          "Very low warmth. Almost monochrome. A little gold arrives only around the edges.",
        options: [
          {
            id: "breath",
            label: "Let the breath slow first",
            effect:
              "The scene chooses bodily regulation first. The user is guided toward steadier pacing before meaning is asked from them.",
          },
          {
            id: "light",
            label: "Let the light soften first",
            effect:
              "The scene prioritizes sensory gentleness: contrast eases, edges warm slightly, and the nervous system is given a less hostile surface.",
          },
          {
            id: "thought",
            label: "Let the thoughts quiet first",
            effect:
              "The scene narrows language and cognitive load. Fewer words, more spacious rhythm, less pressure to interpret everything immediately.",
          },
        ],
      }),
      withVisuals("window", {
        title: "Meaning returns before color does.",
        body: "The city is still cool, still silver, still distant. But the user no longer needs a miracle. They need one trustworthy sign that interior life has not gone flat forever.",
        note: "Second task: shift from mere soothing toward recognizable meaning.",
        warmth:
          "Warmth rises. The palette remains restrained, but green and gold start appearing as evidence, not decoration.",
        options: [
          {
            id: "memory",
            label: "A memory should arrive first",
            effect:
              "The scene becomes gently mnemonic. It lets the user feel that continuity already exists, even before any memoir capture begins.",
          },
          {
            id: "direction",
            label: "A direction should arrive first",
            effect:
              "The scene sharpens into a small internal compass. It does not promise certainty, but it makes the next step feel less random.",
          },
          {
            id: "warmth",
            label: "A little warmth should arrive first",
            effect:
              "The scene increases sensory reassurance. It privileges felt safety over explanation and lets emotional color lead cognition.",
          },
        ],
      }),
      withVisuals("trace", {
        title:
          "The night becomes survivable when something in it can be carried forward.",
        body: "By this point the user should not be trapped in the same flat state they entered with. The final move is not to sell them a feature. It is to make one truth feel natural: a life deserves to leave a trace.",
        note: "Third task: make the bridge into `ECHO` feel morally and emotionally inevitable.",
        warmth:
          "Warmth is now present and stable. The scene is still nocturnal, but the light is no longer only external.",
        options: [
          {
            id: "voice",
            label: "A voice should be preserved",
            effect:
              "The bridge points directly to memoir. The user feels that what matters most is not abstraction, but a living human voice carried forward.",
          },
          {
            id: "lesson",
            label: "A lesson should be preserved",
            effect:
              "The bridge emphasizes wisdom and intergenerational meaning. `ECHO` becomes a place where lived knowledge is shaped, not merely stored.",
          },
          {
            id: "fragment",
            label: "Even one fragment should be preserved",
            effect:
              "The bridge lowers the threshold beautifully. The user understands they do not need a whole autobiography tonight; one true fragment is enough.",
          },
        ],
      }),
    ],
  },
  "fr-CH": {
    headerLabel: "Slice CHROMA interactif",
    sceneStateLabel: "Etat de scene",
    warmthCurveTitle: "Courbe de chaleur",
    whyMattersTitle: "Pourquoi cela compte",
    whyMattersBody:
      "L'utilisateur doit sentir que le systeme le porte quelque part, et ne lui montre pas seulement de jolis ecrans.",
    tuningLabel: "Reglage emotionnel",
    tuningTitle: "Qu'est-ce qui doit arriver en premier dans cette scene ?",
    currentEffectLabel: "Effet actuel",
    continueCta: "Continuer le slice",
    crossIntoEchoCta: "Passer vers la demo ECHO",
    memoryLabel: "Memoire du slice",
    summaryScenePrefix: "Scene",
    summarySelectedLabel: "Accent choisi",
    summaryBody:
      "Ces motifs passent maintenant comme contexte de handoff vers `ECHO`, pour que la demo memoir herite d'une direction emotionnelle sans transformer `CHROMA` en jeu a branches.",
    sceneButtonAriaPrefix: "Ouvrir la scene",
    scenes: [
      withVisuals("platform", {
        title: "La gare n'est pas devenue silencieuse. Elle est seulement devenue plus fine.",
        body: "La pluie frappe la vitre a intervalles nets et durs. Le corps est fatigue, mais l'esprit reste encore surexpose par la journee. `CHROMA` ne doit pas attaquer cet etat. Il doit le rencontrer doucement et le ralentir.",
        note: "Premiere tache: reduire le bruit interieur sans pretendre que tout est deja resolu.",
        warmth:
          "Tres peu de chaleur. Presque monochrome. Un peu d'or n'arrive qu'aux bords.",
        options: [
          {
            id: "breath",
            label: "Que le souffle ralentisse d'abord",
            effect:
              "La scene choisit d'abord la regulation corporelle. L'utilisateur est guide vers un rythme plus stable avant qu'on ne lui demande du sens.",
          },
          {
            id: "light",
            label: "Que la lumiere s'adoucisse d'abord",
            effect:
              "La scene privilegie la douceur sensorielle: le contraste baisse, les contours se rechauffent un peu, et le systeme nerveux recoit une surface moins hostile.",
          },
          {
            id: "thought",
            label: "Que les pensees se taisent d'abord",
            effect:
              "La scene resserre le langage et la charge cognitive. Moins de mots, plus d'espace, moins de pression pour tout interpreter immediatement.",
          },
        ],
      }),
      withVisuals("window", {
        title: "Le sens revient avant la couleur.",
        body: "La ville reste fraiche, argentee et distante. Mais l'utilisateur n'a plus besoin d'un miracle. Il a besoin d'un signe credible que la vie interieure n'est pas devenue plate pour toujours.",
        note: "Deuxieme tache: passer du simple apaisement a un sens reconnaissable.",
        warmth:
          "La chaleur monte. La palette reste retenue, mais le vert et l'or apparaissent maintenant comme des preuves, pas comme de la decoration.",
        options: [
          {
            id: "memory",
            label: "Qu'un souvenir arrive d'abord",
            effect:
              "La scene devient doucement mnesique. Elle laisse sentir que la continuite existe deja, avant meme que la capture memoir ne commence.",
          },
          {
            id: "direction",
            label: "Qu'une direction apparaisse d'abord",
            effect:
              "La scene se resserre en petite boussole interieure. Elle ne promet pas la certitude, mais rend la prochaine etape moins aleatoire.",
          },
          {
            id: "warmth",
            label: "Qu'un peu de chaleur arrive d'abord",
            effect:
              "La scene augmente le reconfort sensoriel. Elle place la securite ressentie avant l'explication et laisse la couleur emotionnelle guider la cognition.",
          },
        ],
      }),
      withVisuals("trace", {
        title:
          "La nuit devient supportable quand quelque chose en elle peut etre porte plus loin.",
        body: "A ce stade, l'utilisateur ne devrait plus etre coince dans le meme etat plat qu'a l'entree. Le dernier geste n'est pas de vendre une fonctionnalite. C'est de rendre une verite naturelle: une vie merite de laisser une trace.",
        note: "Troisieme tache: rendre le pont vers `ECHO` moralement et emotionnellement inevitable.",
        warmth:
          "La chaleur est maintenant presente et stable. La scene reste nocturne, mais la lumiere n'est plus seulement exterieure.",
        options: [
          {
            id: "voice",
            label: "Qu'une voix soit preservee",
            effect:
              "Le pont pointe directement vers le memoir. L'utilisateur sent que ce qui compte n'est pas l'abstraction, mais une voix humaine vivante portee plus loin.",
          },
          {
            id: "lesson",
            label: "Qu'une lecon soit preservee",
            effect:
              "Le pont met l'accent sur la sagesse et le sens entre generations. `ECHO` devient un lieu ou le savoir vecu est faconne plutot que seulement stocke.",
          },
          {
            id: "fragment",
            label: "Qu'un seul fragment soit deja preserve",
            effect:
              "Le pont abaisse joliment le seuil. L'utilisateur comprend qu'il n'a pas besoin d'une autobiographie entiere ce soir; un fragment vrai suffit.",
          },
        ],
      }),
    ],
  },
  "it-CH": {
    headerLabel: "Slice CHROMA interattivo",
    sceneStateLabel: "Stato della scena",
    warmthCurveTitle: "Curva del calore",
    whyMattersTitle: "Perche conta",
    whyMattersBody:
      "L'utente dovrebbe sentire che il sistema lo sta portando da qualche parte, non che sta solo mostrando schermate belle.",
    tuningLabel: "Sintonia emotiva",
    tuningTitle: "Che cosa dovrebbe arrivare per prima in questa scena?",
    currentEffectLabel: "Effetto attuale",
    continueCta: "Continua lo slice",
    crossIntoEchoCta: "Passa alla demo ECHO",
    memoryLabel: "Memoria dello slice",
    summaryScenePrefix: "Scena",
    summarySelectedLabel: "Accento selezionato",
    summaryBody:
      "Questi motivi passano ora come contesto di handoff per `ECHO`, cosi la demo memoir puo ereditare la direzione emotiva senza trasformare `CHROMA` in un gioco ramificato.",
    sceneButtonAriaPrefix: "Apri scena",
    scenes: [
      withVisuals("platform", {
        title: "La stazione non e diventata silenziosa. E solo diventata sottile.",
        body: "La pioggia tocca il vetro con intervalli netti e duri. Il corpo e stanco, ma la mente e ancora sovraesposta dalla giornata. `CHROMA` non deve attaccare questo stato. Deve incontrarlo con gentilezza e rallentarlo.",
        note: "Primo compito: ridurre il rumore interno senza fingere che tutto sia gia risolto.",
        warmth:
          "Calore molto basso. Quasi monocromo. Un po' d'oro arriva solo ai bordi.",
        options: [
          {
            id: "breath",
            label: "Che il respiro rallenti per primo",
            effect:
              "La scena sceglie prima la regolazione corporea. L'utente viene guidato verso un ritmo piu stabile prima che gli venga chiesto significato.",
          },
          {
            id: "light",
            label: "Che la luce si ammorbidisca per prima",
            effect:
              "La scena privilegia la gentilezza sensoriale: il contrasto si abbassa, i bordi si scaldano leggermente e il sistema nervoso riceve una superficie meno ostile.",
          },
          {
            id: "thought",
            label: "Che i pensieri si plachino per primi",
            effect:
              "La scena restringe linguaggio e carico cognitivo. Meno parole, piu spazio, meno pressione nel dover interpretare tutto subito.",
          },
        ],
      }),
      withVisuals("window", {
        title: "Il significato ritorna prima del colore.",
        body: "La citta e ancora fredda, argentata e distante. Ma l'utente non ha piu bisogno di un miracolo. Ha bisogno di un segno credibile che la vita interiore non sia diventata piatta per sempre.",
        note: "Secondo compito: spostarsi dal semplice calmare verso un significato riconoscibile.",
        warmth:
          "Il calore sale. La palette resta misurata, ma verde e oro iniziano a comparire come prova, non come decorazione.",
        options: [
          {
            id: "memory",
            label: "Che arrivi prima un ricordo",
            effect:
              "La scena diventa dolcemente mnemonica. Fa sentire che la continuita esiste gia, ancora prima che inizi qualsiasi memoir capture.",
          },
          {
            id: "direction",
            label: "Che arrivi prima una direzione",
            effect:
              "La scena si affila in una piccola bussola interiore. Non promette certezza, ma rende il passo successivo meno casuale.",
          },
          {
            id: "warmth",
            label: "Che arrivi prima un po' di calore",
            effect:
              "La scena aumenta il rassicuramento sensoriale. Mette la sicurezza percepita sopra la spiegazione e lascia che il colore emotivo guidi la cognizione.",
          },
        ],
      }),
      withVisuals("trace", {
        title:
          "La notte diventa sopportabile quando qualcosa dentro di essa puo essere portato avanti.",
        body: "A questo punto l'utente non dovrebbe piu essere intrappolato nello stesso stato piatto con cui e entrato. L'ultima mossa non e vendere una funzione. E rendere naturale una verita: una vita merita di lasciare una traccia.",
        note: "Terzo compito: rendere il ponte verso `ECHO` moralmente ed emotivamente inevitabile.",
        warmth:
          "Il calore ora e presente e stabile. La scena resta notturna, ma la luce non e piu solo esterna.",
        options: [
          {
            id: "voice",
            label: "Che venga preservata una voce",
            effect:
              "Il ponte punta direttamente al memoir. L'utente sente che cio che conta di piu non e l'astrazione, ma una voce umana viva portata avanti.",
          },
          {
            id: "lesson",
            label: "Che venga preservata una lezione",
            effect:
              "Il ponte enfatizza saggezza e significato intergenerazionale. `ECHO` diventa un luogo dove la conoscenza vissuta viene modellata, non solo conservata.",
          },
          {
            id: "fragment",
            label: "Che venga preservato anche un solo frammento",
            effect:
              "Il ponte abbassa la soglia con eleganza. L'utente capisce che stanotte non serve un'intera autobiografia; basta un frammento vero.",
          },
        ],
      }),
    ],
  },
  rm: {
    headerLabel: "Slice CHROMA interactiv",
    sceneStateLabel: "Stadi da la scena",
    warmthCurveTitle: "Curva da chalur",
    whyMattersTitle: "Pertge quai quinta",
    whyMattersBody:
      "L'utilisader duei sentir che il sistem al maina enavant e na mussa betg mo scherms bels.",
    tuningLabel: "Accord emotional",
    tuningTitle: "Tge duei vegnir emprim en questa scena?",
    currentEffectLabel: "Effect actual",
    continueCta: "Cuntinuar il slice",
    crossIntoEchoCta: "Passar en la demo ECHO",
    memoryLabel: "Memoria dal slice",
    summaryScenePrefix: "Scena",
    summarySelectedLabel: "Accent tscherniu",
    summaryBody:
      "Quests motivs van ussa sco context da handoff a `ECHO`, uschia che la demo memoir po ereditar la direcziun emotiva senza far da `CHROMA` in game ramificau.",
    sceneButtonAriaPrefix: "Avrir scena",
    scenes: [
      withVisuals("platform", {
        title: "La staziun n'ei betg daventada quieta. Ella ei mo daventada pli fina.",
        body: "La plievgia smatga sin il vaider en intervals clers e dirs. Il corp ei stanchel, ma la testa ei anc memia illuminada dal di. `CHROMA` na duei betg attatgar quest stadi. El duei vegnir ad el cun blandezza e al ralentir.",
        note: "Emprima incumbensa: reducir il canera intern senza far sco sch'ei fuss gia tut schliau.",
        warmth:
          "Fitg pauca chalur. Bunamein monochrom. In zic d'aur arriva mo als urs.",
        options: [
          {
            id: "breath",
            label: "Che la respiraziun sa plauneschi emprim",
            effect:
              "La scena elegia emprim la regulaziun dal corp. L'utilisader vegn manaus vers in ritmus pli stabil avant ch'ei vegn dumandau senn.",
          },
          {
            id: "light",
            label: "Che la glisch sa mollifitgeschi emprim",
            effect:
              "La scena privilegiescha la blandezza sensoriala: il contrast sbassa, ils urs vegnan pli chauds e il sistem da nervs survegn ina surfatscha main ostila.",
          },
          {
            id: "thought",
            label: "Che ils pensiers sa quieteschien emprim",
            effect:
              "La scena restrenscha lingua e chargia cognitiva. Main pleds, dapli spazi e damain pressiun da stuair interpretar tut immediatamein.",
          },
        ],
      }),
      withVisuals("window", {
        title: "Il senn returna avant che la colur turna.",
        body: "La citad ei anc fraida, argientada e lontana. Mo l'utilisader na dovra pli nagin miracul. El dovra in segn credibel che la veta interna na seigi betg daventada plata per adina.",
        note: "Segunda incumbensa: ir da simpla quietezza vers in senn recognoscibel.",
        warmth:
          "La chalur crescha. La paletta resta reservada, mo verd e aur cumparan ussa sco prova e betg sco decoraziun.",
        options: [
          {
            id: "memory",
            label: "Che in regordanza vegni emprim",
            effect:
              "La scena daventa plain regurdientscha cun blandezza. Ella lascha sentir che la cuntinuitad exista gia, anc avant che mintga memoir capture cumenzia.",
          },
          {
            id: "direction",
            label: "Che ina direcziun vegni emprim",
            effect:
              "La scena sa skizza en ina pitschna cumpass interna. Ella na empermetta betg segirezza, mo fa il proxim pass main casual.",
          },
          {
            id: "warmth",
            label: "Che in zic da chalur vegni emprim",
            effect:
              "La scena augmenta la rassicuranza sensoriala. Ella metta la segirezza sentida sur l'explicaziun e lascha la colur emotiva manar la cogniziun.",
          },
        ],
      }),
      withVisuals("trace", {
        title:
          "La notg daventa supportabla cura che ins po purtar insatge da quella vinavant.",
        body: "A quest punct na duei l'utilisader pli betg esser serraus en il medem stadi plan cun il qual el ei entraus. L'ultim pass na venda betg ina funcziun. El fa ina vardad sentir sco natirala: ina veta merita da laschar ina fastizza.",
        note: "Terza incumbensa: far la punt vers `ECHO` moralmein ed emoziunalmein inevitabla.",
        warmth:
          "La chalur ei ussa preschenta e stada. La scena resta nocturna, mo la glisch na ei pli betg mo externa.",
        options: [
          {
            id: "voice",
            label: "Che ina vusch vegni preservada",
            effect:
              "La punt mussa directamein vers memoir. L'utilisader senta che quai che importa il pli fitg na ei betg l'abstracziun, mobein ina vusch umana viva purtada vinavant.",
          },
          {
            id: "lesson",
            label: "Che ina lecziun vegni preservada",
            effect:
              "La punt accentuescha sabientscha e senn tranter generaziuns. `ECHO` daventa in liug nua che savida vivida vegn furmada e betg mo memorisada.",
          },
          {
            id: "fragment",
            label: "Che schizun in fragment vegni preservaus",
            effect:
              "La punt sbassa la praghela cun bellezza. L'utilisader capescha che questa notg na dovra betg ina autobiografia entira; in fragment vair basta.",
          },
        ],
      }),
    ],
  },
};
