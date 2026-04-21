import type { Locale } from "@/lib/i18n";

type ProofCard = {
  title: string;
  body: string;
};

type GrantsProofCopy = {
  tracks: ProofCard[];
  proofNowTitle: string;
  proofNow: string[];
  reviewTitle: string;
  reviewQuestions: ProofCard[];
  restraintTitle: string;
  restraint: string[];
  echoCta: string;
};

export const grantsProofCopy: Record<Locale, GrantsProofCopy> = {
  "de-CH": {
    tracks: [
      {
        title: "Cultural and social relevance",
        body: "Das Projekt beruehrt Einsamkeit, Burnout, Erinnerungskultur, intergenerationale Weitergabe und humane digitale Erzaehlformen im Schweizer Kontext.",
      },
      {
        title: "Technically credible scope",
        body: "Die Plattform ist web-native, modular und klar gestuft. Oeffentliche Oberflaeche zuerst, voice-first memoir runtime danach. Diese Reihenfolge ist ein Staerkezeichen, nicht ein Mangel.",
      },
      {
        title: "Swiss-first emotional specificity",
        body: "Regen, Nacht, Distanz, funktionale Gesellschaft und das Beduerfnis nach stiller Wuerde geben dem Projekt einen lokalen Resonanzraum statt generischer Wellness-Sprache.",
      },
      {
        title: "Intergenerational value",
        body: "Das Produkt kann sowohl aelteren Menschen als auch ihren Familien dienen. Genau diese Bruecke macht den sozialen Wert fuer Foerderer plausibel.",
      },
    ],
    proofNowTitle: "Was das Demo schon heute glaubhaft beweist",
    proofNow: [
      "Ein diszipliniertes, Swiss-first Public Shell statt eines zufaelligen Startup-Dashboards.",
      "Ein funktionierender `CHROMA`-Slice als emotionaler und kultureller Beweis.",
      "Ein reales `ECHO`-Substrat mit Token-Endpoint und Session-Bootstrap statt reiner Platzhalter-Rhetorik.",
      "Eine klare Trennung zwischen dem, was jetzt gezeigt wird, und dem, was spaeter verantwortungsvoll gebaut werden muss.",
    ],
    reviewTitle: "Fragen, die diese Seite fuer Reviewer beantworten soll",
    reviewQuestions: [
      {
        title: "Warum dieses Thema jetzt",
        body: "Weil Einsamkeit, Burnout, Vertrauen in KI und intergenerationale Erinnerung gleichzeitig an Bedeutung gewinnen. Das Projekt antwortet auf genau diese Ueberlappung.",
      },
      {
        title: "Warum web-native statt heavy engine",
        body: "Weil Reichweite, Geschwindigkeit, Zugaenglichkeit und fruehes Testing wichtiger sind als ein uebertechnisiertes Artefakt ohne erste Wirkung.",
      },
      {
        title: "Warum staged delivery ein Plus ist",
        body: "Weil ehrliches Scoping Foerderreife zeigt. Das Projekt behauptet nicht, alles schon zu koennen, sondern zeigt, was bereits real ist und was erst nach sicherer Validierung folgen darf.",
      },
    ],
    restraintTitle: "Was fuer die Glaubwuerdigkeit bewusst klein gehalten wird",
    restraint: [
      "Keine klinischen Heilsversprechen.",
      "Keine falsche Behauptung eines vollstaendigen Realtime-Memoir-Systems vor der echten Integration.",
      "Keine ueberladene Visual-Novel-Welt im ersten Schritt.",
      "Keine Scope-Explosion durch zu fruehes Social-, Payment- oder Community-Building.",
    ],
    echoCta: "ECHO Bootstrap pruefen",
  },
  en: {
    tracks: [
      {
        title: "Cultural and social relevance",
        body: "The project addresses loneliness, burnout, memory culture, intergenerational transmission, and humane digital storytelling in a Swiss context.",
      },
      {
        title: "Technically credible scope",
        body: "The platform is web-native, modular, and clearly staged. Public shell first, voice-first memoir runtime later. That sequencing is a sign of judgment, not weakness.",
      },
      {
        title: "Swiss-first emotional specificity",
        body: "Rain, night, distance, functional social life, and the need for quiet dignity give the project local resonance instead of generic wellness language.",
      },
      {
        title: "Intergenerational value",
        body: "The product can serve elderly people and their families at the same time. That bridge makes the social case more legible to funders.",
      },
    ],
    proofNowTitle: "What the demo already proves today",
    proofNow: [
      "A disciplined Swiss-first public shell instead of a generic startup dashboard.",
      "A functioning `CHROMA` slice as emotional and cultural proof.",
      "A real `ECHO` substrate with token endpoint and session bootstrap instead of placeholder rhetoric.",
      "A clear distinction between what is already real and what still has to be built responsibly.",
    ],
    reviewTitle: "Questions this page should answer for reviewers",
    reviewQuestions: [
      {
        title: "Why this theme now",
        body: "Because loneliness, burnout, trust in AI, and intergenerational memory are all intensifying at once. The project responds to that overlap.",
      },
      {
        title: "Why web-native instead of a heavy engine",
        body: "Because reach, speed, accessibility, and early testing matter more than an overengineered artifact without first impact.",
      },
      {
        title: "Why staged delivery is a strength",
        body: "Because honest scoping signals maturity. The project does not pretend to do everything now. It shows what already exists and what may only follow after safe validation.",
      },
    ],
    restraintTitle: "What stays intentionally small for credibility",
    restraint: [
      "No clinical cure claims.",
      "No false claim of a fully operational realtime memoir system before real integration.",
      "No overloaded visual novel universe in the first step.",
      "No scope explosion through early social, payment, or community features.",
    ],
    echoCta: "Inspect ECHO bootstrap",
  },
  "fr-CH": {
    tracks: [
      {
        title: "Pertinence culturelle et sociale",
        body: "Le projet touche la solitude, le burnout, la memoire familiale et des formes plus humaines de narration numerique dans un contexte suisse.",
      },
      {
        title: "Portee technique credible",
        body: "La plateforme est web-native, modulaire et clairement phasee. Shell public d'abord, runtime memoir vocal ensuite. Cette discipline est un signe de maturite.",
      },
      {
        title: "Specificite emotionnelle suisse",
        body: "La pluie, la nuit, la distance sociale et le besoin de dignite calme donnent au projet une resonance locale plutot qu'un langage wellness generique.",
      },
      {
        title: "Valeur intergenerationnelle",
        body: "Le produit sert en meme temps les personnes agees et leurs familles. Cette jonction rend la valeur sociale plus lisible pour un comite.",
      },
    ],
    proofNowTitle: "Ce que la demo prouve deja aujourd'hui",
    proofNow: [
      "Un shell public suisse et discipline plutot qu'un dashboard startup interchangeable.",
      "Un slice `CHROMA` qui sert de preuve emotionnelle et culturelle.",
      "Un vrai substrate `ECHO` avec endpoint token et bootstrap de session.",
      "Une separation claire entre ce qui existe deja et ce qui doit encore etre construit avec prudence.",
    ],
    reviewTitle: "Questions auxquelles cette page doit repondre",
    reviewQuestions: [
      {
        title: "Pourquoi maintenant",
        body: "Parce que solitude, burnout, confiance dans l'AI et memoire intergenerationnelle se croisent de plus en plus fortement. Le projet repond a ce croisement.",
      },
      {
        title: "Pourquoi web-native et pas moteur lourd",
        body: "Parce que portee, vitesse, accessibilite et test rapide valent plus qu'un artefact surengineere sans premiere utilite.",
      },
      {
        title: "Pourquoi le delivery phase est un plus",
        body: "Parce qu'un scope honnete montre du jugement. Le projet ne pretend pas tout faire deja. Il montre ce qui est reel et ce qui doit venir seulement apres validation.",
      },
    ],
    restraintTitle: "Ce qui reste volontairement limite pour garder la credibilite",
    restraint: [
      "Aucune promesse clinique.",
      "Aucune fausse annonce d'un systeme memoir temps reel deja complet.",
      "Aucun univers de visual novel surdimensionne au premier pas.",
      "Aucune explosion de scope via social, paiement ou communaute trop tot.",
    ],
    echoCta: "Voir le bootstrap ECHO",
  },
  "it-CH": {
    tracks: [
      {
        title: "Rilevanza culturale e sociale",
        body: "Il progetto tocca solitudine, burnout, memoria familiare e forme piu umane di storytelling digitale nel contesto svizzero.",
      },
      {
        title: "Scope tecnico credibile",
        body: "La piattaforma e web-native, modulare e chiaramente per fasi. Shell pubblico prima, runtime memoir vocale dopo. Questa disciplina e un segno di giudizio.",
      },
      {
        title: "Specificita emotiva Swiss-first",
        body: "Pioggia, notte, distanza sociale e bisogno di dignita calma danno al progetto risonanza locale invece di un linguaggio wellness generico.",
      },
      {
        title: "Valore intergenerazionale",
        body: "Il prodotto puo servire persone anziane e famiglie nello stesso tempo. Questo ponte rende il valore sociale piu leggibile per un grant reviewer.",
      },
    ],
    proofNowTitle: "Cosa la demo prova gia oggi",
    proofNow: [
      "Uno shell pubblico Swiss-first e disciplinato invece di un dashboard startup generico.",
      "Uno slice `CHROMA` che funziona come prova emotiva e culturale.",
      "Un vero substrate `ECHO` con endpoint token e bootstrap di sessione.",
      "Una distinzione chiara tra cio che esiste gia e cio che deve ancora essere costruito con responsabilita.",
    ],
    reviewTitle: "Domande a cui questa pagina deve rispondere",
    reviewQuestions: [
      {
        title: "Perche adesso",
        body: "Perche solitudine, burnout, fiducia nell'AI e memoria intergenerazionale stanno crescendo insieme. Il progetto risponde proprio a questa sovrapposizione.",
      },
      {
        title: "Perche web-native e non motore pesante",
        body: "Perche reach, velocita, accessibilita e test rapido valgono piu di un artefatto sovraingegnerizzato senza primo impatto.",
      },
      {
        title: "Perche il delivery per fasi e un vantaggio",
        body: "Perche uno scope onesto mostra maturita. Il progetto non finge di fare tutto subito. Mostra cio che e gia reale e cio che puo arrivare solo dopo validazione.",
      },
    ],
    restraintTitle: "Cosa resta intenzionalmente limitato per credibilita",
    restraint: [
      "Nessuna promessa clinica.",
      "Nessuna falsa affermazione di sistema memoir realtime gia completo.",
      "Nessun universo visual novel sovraccarico nel primo passo.",
      "Nessuna esplosione di scope tramite social, pagamenti o community troppo presto.",
    ],
    echoCta: "Apri il bootstrap ECHO",
  },
  rm: {
    tracks: [
      {
        title: "Relevanza culturala e sociala",
        body: "Il project tracta solitariadad, burnout, memoria da famiglia e fuormas pli humanas da storytelling digital en context svizzer.",
      },
      {
        title: "Scope tecnic credibel",
        body: "La plattafurma ei web-native, modulara e claramain en fasa. Public shell emprem, runtime vocal memoir suenter. Questa disciplina ei in segn da giudicament.",
      },
      {
        title: "Specificitad emotionala Swiss-first",
        body: "Plievgia, notg, distanza sociala e il basegn da dignitad calma dattan al project resonanza locala enstagl da wellness generic.",
      },
      {
        title: "Valur tranter generaziuns",
        body: "Il product po servir persunas veglias e lur famiglias il medem mument. Quei punct da colliaziun fa la valur sociala pli legibla per in comite.",
      },
    ],
    proofNowTitle: "Tge che la demo provescha gia oz",
    proofNow: [
      "In public shell Swiss-first e disciplinau enstagl d'in dashboard startup generic.",
      "In slice `CHROMA` che funcziuna sco prova emozionala e culturala.",
      "In ver substrate `ECHO` cun endpoint da token e bootstrap da sessiun.",
      "Ina separaziun clara tranter quei che exista gia e quei che duei vegnir construiu cun responsabladad pli tard.",
    ],
    reviewTitle: "Damondas che questa pagina duei responder",
    reviewQuestions: [
      {
        title: "Pertge ussa",
        body: "Perquei che solitariadad, burnout, fidonza en AI e memoria tranter generaziuns creschan ensemen. Il project rispunda exact a questa collisiun.",
      },
      {
        title: "Pertge web-native e betg motor grev",
        body: "Perquei che reach, spertadad, accessibilitad e tests temprivs valan dapli che in artefact suringegnerisau senza emprem effect.",
      },
      {
        title: "Pertge delivery en fasa ei in avantatg",
        body: "Perquei che scope honest mussa madirezia. Il project na pretenda betg da far tut ussa. El mussa quei che ei real gia oz e quei che sa vegnir mo suenter validaziun.",
      },
    ],
    restraintTitle: "Tge che resta conscienziusamain pitschen per credibladad",
    restraint: [
      "Nagina empermischun clinica.",
      "Nagina falsa pretensiun d'in sistem memoir realtime gia cumplet.",
      "Negin univers da visual novel surcargau en l'emprema fasa.",
      "Nagina explosiun da scope tras social, pajar ni communitad memia baul.",
    ],
    echoCta: "Examinar il bootstrap ECHO",
  },
};
