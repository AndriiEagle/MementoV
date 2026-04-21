import type { Locale } from "@/lib/i18n";

type ProofCard = {
  title: string;
  body: string;
};

type ScienceProofCopy = {
  operatingTitle: string;
  pillars: ProofCard[];
  operatingClaims: ProofCard[];
  boundariesTitle: string;
  boundaries: string[];
};

export const scienceProofCopy: Record<Locale, ScienceProofCopy> = {
  "de-CH": {
    operatingTitle: "Warum dieser Ansatz funktionieren kann",
    pillars: [
      {
        title: "Nighttime nervous system reality",
        body: "Das Produkt ist fuer spaeten Abend und Nacht gebaut, wenn Isolation, Rumination und sensorische Erschoepfung oft am staerksten sind. Deshalb braucht die Oberflaeche weniger Reiz, mehr Rhythmus und klare Lesbarkeit.",
      },
      {
        title: "Narrative dignity over transcript extraction",
        body: "Das Ziel ist nicht bloss Datengewinnung. Der spaetere `ECHO`-Flow muss Erinnerung in geformte Sprache verwandeln, weil Wuerde und Wiedererkennbarkeit wertvoller sind als rohe Abschrift.",
      },
      {
        title: "Reflective support, not fake clinical therapy",
        body: "Der Rahmen bleibt reflektiv, grounding-orientiert und restaurativ. Das Produkt darf weder Diagnose noch Heilversprechen simulieren.",
      },
      {
        title: "Intergenerational continuity beats sterile note-taking",
        body: "Menschen wollen nicht nur Fakten hinterlassen. Sie wollen Stimme, Haltung, Lektionen und den Ton ihres Lebens weitergeben. Genau dort liegt die staerkere emotionale Logik.",
      },
    ],
    operatingClaims: [
      {
        title: "Low stimulation is strategic",
        body: "Langsameres Tempo, mehr Raum und dunklere Flaechen sind hier keine Aesthetik-Spielerei. Sie dienen dazu, im verletzlicheren Nachtzustand nicht noch mehr kognitiven Druck zu erzeugen.",
      },
      {
        title: "First value must arrive before paperwork",
        body: "Das Produkt soll vor Login, Profil und komplexem Setup bereits Bedeutung zeigen. Sonst verliert es genau die Menschen, fuer die es gedacht ist.",
      },
      {
        title: "Shaped output creates trust",
        body: "Ein erster geformter Absatz, der menschlich klingt, erzeugt mehr Vertrauen als zehn technische Features. Die Ausgabe ist kein Nebenprodukt, sondern der eigentliche Vertrauensbeweis.",
      },
    ],
    boundariesTitle: "Was diese Seite bewusst nicht behauptet",
    boundaries: [
      "Kein psychiatrisches oder medizinisches Heilsversprechen.",
      "Kein Ersatz fuer Krisenhilfe oder menschliche Betreuung.",
      "Kein wertschoepfungsloser Transcript-Sauger ohne Form und Sinn.",
      "Kein Versprechen von digitaler Unsterblichkeit als buchstaebliche Tatsache.",
    ],
  },
  en: {
    operatingTitle: "Why this approach can work",
    pillars: [
      {
        title: "Nighttime nervous system reality",
        body: "The product is built for late evening and night, when isolation, rumination, and sensory fatigue often peak. The interface therefore needs less stimulation, more rhythm, and strong legibility.",
      },
      {
        title: "Narrative dignity over transcript extraction",
        body: "The goal is not data capture for its own sake. The future `ECHO` flow has to turn memory into shaped language, because dignity and recognition matter more than raw transcription.",
      },
      {
        title: "Reflective support, not fake clinical therapy",
        body: "The framing stays reflective, grounding, and restorative. The product must not simulate diagnosis or treatment claims.",
      },
      {
        title: "Intergenerational continuity beats sterile note-taking",
        body: "People do not only want facts preserved. They want tone, voice, lessons, and recognizable presence to survive them. That is where the deeper value sits.",
      },
    ],
    operatingClaims: [
      {
        title: "Low stimulation is strategic",
        body: "Slower pacing, more space, and darker surfaces are not decorative. They reduce pressure during a more fragile nighttime state.",
      },
      {
        title: "First value must arrive before paperwork",
        body: "The product should show meaning before login, profiles, or heavy setup. Otherwise it loses the exact people it is trying to serve.",
      },
      {
        title: "Shaped output creates trust",
        body: "A first paragraph that sounds human creates more trust than a dozen technical features. The output is not a side effect. It is the proof.",
      },
    ],
    boundariesTitle: "What this page intentionally does not claim",
    boundaries: [
      "No psychiatric or medical cure promise.",
      "No replacement for crisis support or human care.",
      "No meaningless transcript vacuum without shape or dignity.",
      "No literal digital immortality claim.",
    ],
  },
  "fr-CH": {
    operatingTitle: "Pourquoi cette approche peut fonctionner",
    pillars: [
      {
        title: "Realite du systeme nerveux nocturne",
        body: "Le produit est pense pour le soir et la nuit, quand l'isolement, la rumination et la fatigue sensorielle montent souvent. L'interface doit donc reduire le bruit et rendre le rythme plus respirable.",
      },
      {
        title: "Dignite narrative avant extraction de transcript",
        body: "Le but n'est pas de capturer des donnees pour elles-memes. Le futur flux `ECHO` doit transformer la memoire en langage compose, parce que la dignite vaut plus qu'une simple transcription.",
      },
      {
        title: "Soutien reflexif, pas fausse therapie clinique",
        body: "Le cadre reste reflexif, grounding et restauratif. Le produit ne doit jamais simuler diagnostic ou traitement.",
      },
      {
        title: "Continuite intergenerationnelle avant prise de notes sterile",
        body: "Les gens ne veulent pas seulement laisser des faits. Ils veulent transmettre une voix, des lecons, une presence et une maniere d'etre.",
      },
    ],
    operatingClaims: [
      {
        title: "La faible stimulation est strategique",
        body: "Le rythme lent, l'espace et les surfaces sombres ne sont pas decoratifs. Ils servent a reduire la pression pendant un etat nocturne plus fragile.",
      },
      {
        title: "La premiere valeur doit arriver avant toute paperasse",
        body: "Le produit doit montrer du sens avant login, profil ou setup lourd. Sinon il perd exactement les personnes qu'il veut aider.",
      },
      {
        title: "Un resultat faconne cree la confiance",
        body: "Un premier paragraphe humain inspire plus de confiance que dix fonctions techniques. La sortie est la preuve.",
      },
    ],
    boundariesTitle: "Ce que cette page ne pretend pas",
    boundaries: [
      "Aucune promesse medicale ou psychiatrique.",
      "Aucun remplacement de l'aide de crise ou du soin humain.",
      "Aucune aspiration sterile de transcripts sans forme ni dignite.",
      "Aucune promesse litterale d'immortalite numerique.",
    ],
  },
  "it-CH": {
    operatingTitle: "Perche questo approccio puo funzionare",
    pillars: [
      {
        title: "Realta del sistema nervoso notturno",
        body: "Il prodotto e pensato per la sera e la notte, quando isolamento, rimuginazione e fatica sensoriale diventano piu forti. L'interfaccia deve quindi ridurre rumore e pressione.",
      },
      {
        title: "Dignita narrativa prima dell'estrazione del transcript",
        body: "L'obiettivo non e catturare dati per se stessi. Il futuro flusso `ECHO` deve trasformare memoria in linguaggio composto, perche la dignita vale piu di una trascrizione grezza.",
      },
      {
        title: "Supporto riflessivo, non falsa terapia clinica",
        body: "Il framing resta riflessivo, grounding e restaurativo. Il prodotto non deve mai simulare diagnosi o cura.",
      },
      {
        title: "Continuita intergenerazionale prima di note sterili",
        body: "Le persone non vogliono lasciare solo fatti. Vogliono lasciare voce, lezioni, tono e presenza riconoscibile.",
      },
    ],
    operatingClaims: [
      {
        title: "La bassa stimolazione e strategica",
        body: "Ritmo lento, spazio e superfici scure non sono decorazione. Servono a ridurre pressione in uno stato notturno piu fragile.",
      },
      {
        title: "Il primo valore deve arrivare prima della burocrazia",
        body: "Il prodotto deve mostrare significato prima di login, profili o setup pesante. Altrimenti perde proprio le persone per cui e stato pensato.",
      },
      {
        title: "Un output modellato crea fiducia",
        body: "Un primo paragrafo che suona umano crea piu fiducia di molte feature tecniche. L'output e la prova.",
      },
    ],
    boundariesTitle: "Cosa questa pagina non pretende",
    boundaries: [
      "Nessuna promessa medica o psichiatrica.",
      "Nessuna sostituzione di supporto di crisi o cura umana.",
      "Nessuna aspirazione sterile di transcript senza forma o dignita.",
      "Nessuna promessa letterale di immortalita digitale.",
    ],
  },
  rm: {
    operatingTitle: "Pertge che questa via po funcziunar",
    pillars: [
      {
        title: "Realitad dal sistem nervus da notg",
        body: "Il product e pensaus per saira e notg, cura che isolaziun, ruminar e fadigia sensoriala vegnan pli fermas. L'interfatscha sto pia reducir canera e pressiun.",
      },
      {
        title: "Dignitad narrativa avant transcript brut",
        body: "La finamira na ei betg mo da rimnar novitads. Il futur flux `ECHO` sto midar memoria en linguatg furmau, perquei che dignitad vala dapli che transcripziun greva.",
      },
      {
        title: "Sustegn reflectiv, betg falsa terapia clinica",
        body: "Il framing resta reflectiv, grounding e restaurativ. Il product na duei mai simular diagnosa ni guariziun.",
      },
      {
        title: "Continuitad tranter generaziuns avant notas sterilas",
        body: "Ils carstgauns na vulan betg mo laschar fatgs. Els vulan laschar vusch, lecziuns, tun e preschientscha recognoscibla.",
      },
    ],
    operatingClaims: [
      {
        title: "Pauca stimulaziun ei strategica",
        body: "Tempo pli plaun, spazi e surfatschas stgiras na vegnan betg duvradas sco decoraziun. Ellas reduceschan pressiun en in stadi nocturn pli fragil.",
      },
      {
        title: "L'emprema valur sto vegnir avant birocratia",
        body: "Il product sto mussar senn avant login, profil ni setup grev. Schiglioc perda el exact las persunas che duessan vegnir gidada.",
      },
      {
        title: "In output furmau crea fidonza",
        body: "In emprem paragraf che tuna human crea dapli fidonza che biaras funcziuns tecnicas. L'output ei la prova.",
      },
    ],
    boundariesTitle: "Tge che questa pagina na pretenda betg",
    boundaries: [
      "Nagina empermischun medicinala ni psichiatrica.",
      "Nagin remplazzament per agid da crisa ni tgira umana.",
      "Negin transcript steril senza fuorma ni dignitad.",
      "Nagina empermischun litterala d'immortalitad digitala.",
    ],
  },
};
