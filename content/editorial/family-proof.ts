import type { Locale } from "@/lib/i18n";

type ProofCard = {
  title: string;
  body: string;
};

type ProofStep = {
  title: string;
  body: string;
};

type FamilyProofCopy = {
  promises: string[];
  buyerLogicTitle: string;
  buyerLogic: ProofCard[];
  flowTitle: string;
  flowSteps: ProofStep[];
  noPressureTitle: string;
  noPressure: string[];
};

export const familyProofCopy: Record<Locale, FamilyProofCopy> = {
  "de-CH": {
    promises: [
      "Keine erzwungene Registrierung vor dem ersten Wert.",
      "Ein Elternteil kann mit einer einzigen Erinnerung beginnen.",
      "Das Ziel ist ein wuerdiges Kapitel, kein kalter AI-Transcript-Dump.",
      "Die Familie soll nicht erst ein kompliziertes Dashboard lernen muessen.",
    ],
    buyerLogicTitle: "Warum Familien hier die natuerlichen Buyer sind",
    buyerLogic: [
      {
        title: "Sie kaufen weniger Reue",
        body: "Der eigentliche Kaufimpuls ist selten Technikbegeisterung. Er ist der Wunsch, die Stimme, Haltung und Geschichte eines Elternteils zu sichern, solange noch Zeit da ist.",
      },
      {
        title: "Sie brauchen niedrige Friction fuer ihre Eltern",
        body: "Viele Kinder wissen, dass die Eltern keine langen Formulare und keine schweren Interfaces wollen. Genau deshalb muss dieses Produkt mit einem einzigen Einstieg funktionieren.",
      },
      {
        title: "Sie wollen etwas Vorzeigbares, nicht nur Rohdaten",
        body: "Ein Kapitel, eine spaetere Buchform oder ein Familienarchiv fuehlen sich nach Wert an. Reine Technik ohne wuerdiges Ergebnis fuehlt sich nicht nach Rettung an.",
      },
    ],
    flowTitle: "Wie der Family-Flow spaeter wirken soll",
    flowSteps: [
      {
        title: "1. Link senden oder gemeinsam daneben sitzen",
        body: "Der Einstieg muss so leicht sein, dass ein Sohn oder eine Tochter ohne technische Einweisung helfen kann.",
      },
      {
        title: "2. Eine Erinnerung reicht fuer den Anfang",
        body: "Der Elternteil braucht kein Lebenswerk auf einmal. Ein Abend, eine Szene, eine Geschichte genuegen fuer den ersten echten Wert.",
      },
      {
        title: "3. ECHO formt daraus ein lesbares Kapitel",
        body: "Das System muss zeigen, dass es aus Sprechen sinnvolle Sprache machen kann. Genau dort kippt Skepsis in Vertrauen.",
      },
      {
        title: "4. Die Familie entscheidet ueber Fortsetzung",
        body: "Erst danach kommen Speichern, Teilen, spaetere Buchlogik oder begeleitete Sessions. Nicht vorher.",
      },
    ],
    noPressureTitle: "Was ein Elternteil ausdruecklich nicht tun muessen sollte",
    noPressure: [
      "Kein Passwort merken.",
      "Kein Profil ausfuellen.",
      "Keine App installieren muessen, nur um anzufangen.",
      "Kein perfektes Sprechen leisten muessen.",
    ],
  },
  en: {
    promises: [
      "No forced registration before first value.",
      "A parent can begin with one memory instead of a long setup.",
      "The intended output is a dignified chapter, not a cold AI transcript dump.",
      "The family should not need to learn a complicated dashboard first.",
    ],
    buyerLogicTitle: "Why family members are the natural buyers here",
    buyerLogic: [
      {
        title: "They are buying less regret",
        body: "The real purchase impulse is rarely excitement about AI. It is the wish to preserve a parent's voice, posture, and story while there is still time.",
      },
      {
        title: "They need low friction for their parents",
        body: "Many children already know their parents do not want forms, logins, and complex tools. That is why the product must work through one calm entry point.",
      },
      {
        title: "They want something worthy, not raw data",
        body: "A chapter, a future book, or a family archive feels valuable. Pure tooling without a dignified result does not feel like rescue.",
      },
    ],
    flowTitle: "How the family flow should eventually feel",
    flowSteps: [
      {
        title: "1. Send the link or sit together",
        body: "The entry has to be light enough that a son or daughter can help without a technical ritual.",
      },
      {
        title: "2. One memory is enough to begin",
        body: "A parent should not need to deliver a whole life at once. One evening, one scene, one story is enough for first value.",
      },
      {
        title: "3. ECHO shapes it into readable language",
        body: "The system needs to prove that it can turn spoken memory into meaningful prose. That is where skepticism turns into trust.",
      },
      {
        title: "4. The family chooses whether to continue",
        body: "Only after that should saving, sharing, export, a future book path, or guided sessions come into view.",
      },
    ],
    noPressureTitle: "What a parent should explicitly not need to do",
    noPressure: [
      "Remember a password.",
      "Fill out a profile.",
      "Install an app just to begin.",
      "Perform perfect speech.",
    ],
  },
  "fr-CH": {
    promises: [
      "Pas d'inscription forcee avant la premiere valeur.",
      "Un parent peut commencer par un seul souvenir.",
      "Le resultat vise un chapitre digne, pas un dump froid de transcript AI.",
      "La famille ne doit pas apprendre un dashboard complexe avant de commencer.",
    ],
    buyerLogicTitle: "Pourquoi la famille est l'acheteur naturel ici",
    buyerLogic: [
      {
        title: "Elle achete moins de regret",
        body: "Le vrai moteur d'achat n'est presque jamais l'enthousiasme pour l'AI. C'est le desir de garder une voix, une histoire et une presence tant qu'il est encore temps.",
      },
      {
        title: "Elle a besoin d'une friction minimale pour les parents",
        body: "Beaucoup d'enfants savent deja que leurs parents ne veulent ni formulaires ni outils compliques. Le produit doit donc tenir sur une entree calme.",
      },
      {
        title: "Elle veut quelque chose de digne, pas des donnees brutes",
        body: "Un chapitre, un futur livre ou une archive familiale ont une valeur sensible. Un simple outil sans resultat digne ne ressemble pas a une vraie sauvegarde.",
      },
    ],
    flowTitle: "Comment le flux famille devrait fonctionner plus tard",
    flowSteps: [
      {
        title: "1. Envoyer le lien ou s'asseoir ensemble",
        body: "L'entree doit rester assez simple pour qu'un fils ou une fille puisse aider sans rituel technique.",
      },
      {
        title: "2. Un seul souvenir suffit pour commencer",
        body: "Un parent ne doit pas livrer toute sa vie en une fois. Une scene suffit pour obtenir la premiere valeur.",
      },
      {
        title: "3. ECHO transforme cela en texte lisible",
        body: "Le systeme doit prouver qu'il sait transformer une memoire orale en prose utile. C'est la que le doute devient confiance.",
      },
      {
        title: "4. La famille decide de la suite",
        body: "Ce n'est qu'apres cela que viennent sauvegarde, partage, export, futur livre ou sessions guidees.",
      },
    ],
    noPressureTitle: "Ce qu'un parent ne devrait explicitement pas devoir faire",
    noPressure: [
      "Memoriser un mot de passe.",
      "Remplir un profil.",
      "Installer une app juste pour commencer.",
      "Parler parfaitement.",
    ],
  },
  "it-CH": {
    promises: [
      "Nessuna registrazione forzata prima del primo valore.",
      "Un genitore puo iniziare con un solo ricordo.",
      "L'output punta a un capitolo dignitoso, non a un dump freddo di transcript AI.",
      "La famiglia non deve imparare prima un dashboard complesso.",
    ],
    buyerLogicTitle: "Perche qui la famiglia e il buyer naturale",
    buyerLogic: [
      {
        title: "Compra meno rimpianto",
        body: "L'impulso d'acquisto reale raramente e entusiasmo per l'AI. E il desiderio di salvare voce, storia e presenza di un genitore finche c'e ancora tempo.",
      },
      {
        title: "Ha bisogno di attrito minimo per i genitori",
        body: "Molti figli sanno gia che i genitori non vogliono form, login e strumenti complessi. Per questo il prodotto deve funzionare con un ingresso calmo e unico.",
      },
      {
        title: "Vuole qualcosa di degno, non dati grezzi",
        body: "Un capitolo, un futuro libro o un archivio di famiglia sembrano valore vero. Solo tecnologia senza risultato dignitoso non sembra salvezza.",
      },
    ],
    flowTitle: "Come dovrebbe funzionare il family flow piu avanti",
    flowSteps: [
      {
        title: "1. Inviare il link o sedersi insieme",
        body: "L'ingresso deve restare abbastanza leggero da permettere a un figlio o una figlia di aiutare senza rituale tecnico.",
      },
      {
        title: "2. Un ricordo basta per iniziare",
        body: "Un genitore non deve consegnare tutta la vita in una volta. Una scena basta per il primo valore reale.",
      },
      {
        title: "3. ECHO lo trasforma in testo leggibile",
        body: "Il sistema deve provare di saper trasformare memoria parlata in prosa utile. Qui il dubbio diventa fiducia.",
      },
      {
        title: "4. La famiglia decide se continuare",
        body: "Solo dopo arrivano salvataggio, condivisione, export, futuro libro o sessioni guidate.",
      },
    ],
    noPressureTitle: "Cosa un genitore non dovrebbe esplicitamente dover fare",
    noPressure: [
      "Ricordare una password.",
      "Compilare un profilo.",
      "Installare un'app solo per iniziare.",
      "Parlare in modo perfetto.",
    ],
  },
  rm: {
    promises: [
      "Nagina registraziun sfurzada avant l'emprema valur.",
      "In genitur po entscheiver cun in sulet regurd.",
      "L'output duei vegnir in chapitel dign, betg in dump freid da transcript AI.",
      "La famiglia na duei betg emprender in dashboard complicau avant ch'ella entscheiva.",
    ],
    buyerLogicTitle: "Pertge che la famiglia ei il buyer natural",
    buyerLogic: [
      {
        title: "Ella cumpra damain pentiment",
        body: "L'impuls da cumprar ei strusch entusiassem per AI. El ei il giavisch da salvar vusch, historia e preschientscha d'in genitur avon ch'ei seigi memia tard.",
      },
      {
        title: "Ella drova pauc attrit per ils geniturs",
        body: "Bia affons san gia che lur geniturs na vulan ni formulars ni login ni utensils cumplexs. Perquei sto il product funcziunar cun in sulet ingress calm.",
      },
      {
        title: "Ella vul enzatgei dign, betg novitads brutgas",
        body: "In chapitel, in futur cudisch ni in archiv da famiglia para valur veritabla. Mo tecnologia senza resultat dign na para betg sco salvament.",
      },
    ],
    flowTitle: "Co che il flow da famiglia duei pli tard funcziunar",
    flowSteps: [
      {
        title: "1. Trametter il link ni seser ensemen",
        body: "L'entrada sto restar aschi ligera che in fegl ni ina feglia possien gidar senza ritual tecnic.",
      },
      {
        title: "2. In sulet regurd basta per entscheiver",
        body: "In genitur na sto betg dar tut sia veta en ina gada. Ina scena basta per l'emprema valur.",
      },
      {
        title: "3. ECHO mida quei en text legibel",
        body: "Il sistem sto mussar che memoria discurrida sa vegnir midada en prosa utilisabla. Leu mida dubi en fidonza.",
      },
      {
        title: "4. La famiglia decida sch'ella vul cuntinuar",
        body: "Pir suenter vegnan salvar, parter, export, futur cudisch ni sessiuns guidaias en vista.",
      },
    ],
    noPressureTitle: "Tge che in genitur explicit na duei betg stuair far",
    noPressure: [
      "Memorisar in pled-clav.",
      "Cumplenir in profil.",
      "Installar ina app mo per entscheiver.",
      "Discurrer perfetg.",
    ],
  },
};
