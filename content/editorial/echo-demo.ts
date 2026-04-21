import type { Locale } from "@/lib/i18n";

type DemoState = "listening" | "transcribing" | "chapter";

type EchoDemoCopy = {
  stateLabel: string;
  liveContractLabel: string;
  futureChapterLabel: string;
  futureChapterTitle: string;
  futureChapterBody: string;
  whyDemoLabel: string;
  whyDemoBody: string;
  states: Record<
    DemoState,
    { label: string; title: string; body: string; accent: string }
  >;
};

export const echoDemoCopy: Record<Locale, EchoDemoCopy> = {
  "de-CH": {
    stateLabel: "ECHO Demo-Zustand",
    liveContractLabel: "Live-Vertrag",
    futureChapterLabel: "Form des kuenftigen Kapitels",
    futureChapterTitle: "Das Kuechenlicht blieb laenger als der Streit.",
    futureChapterBody:
      "Ein echtes `ECHO`-Resultat sollte mit einer menschlichen Zeile beginnen und dann Erinnerung, Wuerde und Bedeutung entfalten. Es darf nie wie ein Tagebuch-Export oder ein Maschinentranskript wirken.",
    whyDemoLabel: "Warum demo-first",
    whyDemoBody:
      "Dieser Slice beweist das emotionale Interface, die Seitenarchitektur und die Zukunftsvertraege, ohne so zu tun, als waere der realtime memoir runtime schon produktionsreif.",
    states: {
      listening: {
        label: "Zuhoeren",
        title: "Die Oberflaeche soll ruhig wirken, bevor sie technisch wirkt.",
        body: "Grosses Mikrofonziel, sichtbare Waerme, null Druck. Die Person soll sich gehoert fuehlen, bevor irgendetwas verarbeitet wird.",
        accent: "from-amber-200/25 to-amber-500/10",
      },
      transcribing: {
        label: "Denken",
        title: "Warten muss sinnvoll wirken, nicht kaputt.",
        body: "Dieser Zustand wird spaeter zur echten Uebergabe an LiveKit und den Biographer. Vorerst beweist er den sensorischen Vertrag: Atem, Rhythmus und Vertrauen.",
        accent: "from-emerald-200/20 to-emerald-500/8",
      },
      chapter: {
        label: "Kapitel",
        title: "Das erste Resultat muss wuerdig klingen, nicht robotisch.",
        body: "Die Person sollte ein geformtes Fragment erhalten, das literarisch und erkennbar nach ihr klingt, nicht wie ein roher Transcript-Dump.",
        accent: "from-sky-200/20 to-sky-500/8",
      },
    },
  },
  en: {
    stateLabel: "ECHO Demo State",
    liveContractLabel: "Live contract",
    futureChapterLabel: "Future chapter shape",
    futureChapterTitle: "The kitchen light stayed longer than the argument.",
    futureChapterBody:
      "A real `ECHO` result should begin with a human line, then unfold memory, dignity, and meaning. It should never read like a diary app export or a machine transcript.",
    whyDemoLabel: "Why demo-first",
    whyDemoBody:
      "This slice proves the emotional interface, page architecture, and future contracts without pretending the realtime memoir runtime is already production-ready.",
    states: {
      listening: {
        label: "Listening",
        title: "The interface should feel calm before it feels technical.",
        body: "Large microphone target, visible warmth, zero pressure. The user should feel heard before anything is processed.",
        accent: "from-amber-200/25 to-amber-500/10",
      },
      transcribing: {
        label: "Thinking",
        title: "Waiting must feel meaningful, not broken.",
        body: "This state eventually becomes the real LiveKit + biographer handoff. For now it proves the sensory contract: breath, rhythm, and trust.",
        accent: "from-emerald-200/20 to-emerald-500/8",
      },
      chapter: {
        label: "Chapter",
        title: "The first result must sound dignified, not robotic.",
        body: "The user should receive a shaped fragment that feels literary and recognizably theirs, not a raw transcript dump.",
        accent: "from-sky-200/20 to-sky-500/8",
      },
    },
  },
  "fr-CH": {
    stateLabel: "Etat demo ECHO",
    liveContractLabel: "Contrat live",
    futureChapterLabel: "Forme du futur chapitre",
    futureChapterTitle: "La lumiere de la cuisine a tenu plus longtemps que la dispute.",
    futureChapterBody:
      "Un vrai resultat `ECHO` devrait commencer par une ligne humaine, puis deployer memoire, dignite et sens. Il ne doit jamais ressembler a un export de journal ou a un transcript machine.",
    whyDemoLabel: "Pourquoi demo-first",
    whyDemoBody:
      "Ce slice prouve l'interface emotionnelle, l'architecture des pages et les contrats futurs sans pretendre que le runtime memoir temps reel est deja pret pour la production.",
    states: {
      listening: {
        label: "Ecoute",
        title: "L'interface doit sembler calme avant de sembler technique.",
        body: "Cible micro large, chaleur visible, zero pression. La personne doit se sentir entendue avant tout traitement.",
        accent: "from-amber-200/25 to-amber-500/10",
      },
      transcribing: {
        label: "Reflexion",
        title: "L'attente doit sembler signifiante, pas cassee.",
        body: "Cet etat deviendra plus tard le vrai passage vers LiveKit et le biographer. Pour l'instant, il prouve le contrat sensoriel: souffle, rythme et confiance.",
        accent: "from-emerald-200/20 to-emerald-500/8",
      },
      chapter: {
        label: "Chapitre",
        title: "Le premier resultat doit paraitre digne, pas robotique.",
        body: "La personne doit recevoir un fragment faconne, litteraire et reconnaissable comme sien, pas un dump brut de transcript.",
        accent: "from-sky-200/20 to-sky-500/8",
      },
    },
  },
  "it-CH": {
    stateLabel: "Stato demo ECHO",
    liveContractLabel: "Contratto live",
    futureChapterLabel: "Forma del futuro capitolo",
    futureChapterTitle: "La luce della cucina e rimasta piu a lungo della discussione.",
    futureChapterBody:
      "Un vero risultato `ECHO` dovrebbe iniziare con una frase umana, poi aprire memoria, dignita e significato. Non deve mai sembrare un export da diario o una trascrizione di macchina.",
    whyDemoLabel: "Perche demo-first",
    whyDemoBody:
      "Questo slice dimostra l'interfaccia emotiva, l'architettura delle pagine e i contratti futuri senza fingere che il runtime memoir realtime sia gia production-ready.",
    states: {
      listening: {
        label: "Ascolto",
        title: "L'interfaccia deve sembrare calma prima che tecnica.",
        body: "Target micro grande, calore visibile, zero pressione. La persona deve sentirsi ascoltata prima che qualsiasi cosa venga processata.",
        accent: "from-amber-200/25 to-amber-500/10",
      },
      transcribing: {
        label: "Elaborazione",
        title: "L'attesa deve sembrare significativa, non rotta.",
        body: "Questo stato diventera poi il vero passaggio a LiveKit e al biographer. Per ora dimostra il contratto sensoriale: respiro, ritmo e fiducia.",
        accent: "from-emerald-200/20 to-emerald-500/8",
      },
      chapter: {
        label: "Capitolo",
        title: "Il primo risultato deve sembrare dignitoso, non robotico.",
        body: "La persona dovrebbe ricevere un frammento modellato, letterario e riconoscibile come suo, non un dump grezzo di transcript.",
        accent: "from-sky-200/20 to-sky-500/8",
      },
    },
  },
  rm: {
    stateLabel: "Stadi demo ECHO",
    liveContractLabel: "Contract live",
    futureChapterLabel: "Furma dal futur chapitel",
    futureChapterTitle: "La glisch da la cuschina ei restada pli ditg che la dispita.",
    futureChapterBody:
      "In resultat real da `ECHO` duess cumenzar cun ina lingia umana e lura sviluppar memoria, dignitad e senn. El na duess mai parair sco in export da diari ni transcript da maschina.",
    whyDemoLabel: "Pertge demo-first",
    whyDemoBody:
      "Quest slice mussa l'interfatscha emotiva, l'architectura da paginas e ils contracts futurs senza pretender che il runtime memoir realtime seigi gia pront per producziun.",
    states: {
      listening: {
        label: "Tedlar",
        title: "L'interfatscha duei parair calma avant che tecnica.",
        body: "Target da microfon grond, chalur visibla, nagina pressiun. La persuna duei sa sentir tedlada avant che insumma vegni processau enzatgei.",
        accent: "from-amber-200/25 to-amber-500/10",
      },
      transcribing: {
        label: "Reflectar",
        title: "Spetgar sto parair meaningful, betg rut.",
        body: "Quest stadi daventa pli tard il passadi real vers LiveKit e il biographer. Ussa mussa el il contract sensoric: respiraziun, ritmus e confidenza.",
        accent: "from-emerald-200/20 to-emerald-500/8",
      },
      chapter: {
        label: "Chapitel",
        title: "Il resultad emprim sto tunar dign, betg robotic.",
        body: "La persuna duei survegnir in fragment furmau, litterar e recognoscibel sco ses, betg in dump grev da transcript.",
        accent: "from-sky-200/20 to-sky-500/8",
      },
    },
  },
};
