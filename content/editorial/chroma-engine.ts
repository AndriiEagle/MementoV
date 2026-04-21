import type { ChromaSceneId } from "@/content/editorial/chroma-experience";
import type { Locale } from "@/lib/i18n";
import type { ChromaAudioPreset } from "@/lib/chroma/ambient-audio";

type ChromaOptionEnhancement = {
  id: string;
  handoff: string;
};

type ChromaSceneEnhancement = {
  id: ChromaSceneId;
  audioPreset: ChromaAudioPreset;
  audioTitle: string;
  audioBody: string;
  audioCue: string;
  closing: string;
  options: ChromaOptionEnhancement[];
};

type ChromaEngineCopy = {
  engineLabel: string;
  engineTitle: string;
  engineBody: string;
  startCta: string;
  pauseCta: string;
  resumeCta: string;
  replaySceneCta: string;
  revealNextCta: string;
  sceneProgressLabel: string;
  beatProgressLabel: string;
  autoPlayTitle: string;
  autoPlayBody: string;
  revealHint: string;
  audioLabel: string;
  audioOnCta: string;
  audioOffCta: string;
  audioLive: string;
  audioMuted: string;
  audioUnavailable: string;
  audioCueLabel: string;
  lineArrivalLabel: string;
  lineWeightLabel: string;
  lineAdjustmentLabel: string;
  lineBridgeLabel: string;
  lineCarryLabel: string;
  sceneCompleteTitle: string;
  sceneCompleteBody: string;
  handoffTitle: string;
  handoffBody: string;
  scenes: ChromaSceneEnhancement[];
};

export const chromaEngineCopy: Record<Locale, ChromaEngineCopy> = {
  "de-CH": {
    engineLabel: "CHROMA Engine",
    engineTitle: "Autorisierter Slice-Runtime",
    engineBody:
      "Diese Version fuehrt jede Szene in kontrollierten Beats. Text, Atmosphaere und Uebergang in `ECHO` laufen jetzt als kleines authored runtime statt als statische Demo-Flaeche.",
    startCta: "Slice starten",
    pauseCta: "Pausieren",
    resumeCta: "Fortsetzen",
    replaySceneCta: "Szene neu spielen",
    revealNextCta: "Naechsten Beat zeigen",
    sceneProgressLabel: "Szenenfortschritt",
    beatProgressLabel: "Beat-Fortschritt",
    autoPlayTitle: "Timed reveal",
    autoPlayBody:
      "Jede Szene erscheint in geordneten Beats. Du kannst den Rhythmus laufen lassen, pausieren oder einzelne Linien manuell vorziehen.",
    revealHint: "Der Slice bleibt leicht steuerbar. Tempo ja, Scope-Explosion nein.",
    audioLabel: "Ambient-Zustand",
    audioOnCta: "Ambient einschalten",
    audioOffCta: "Ambient stummschalten",
    audioLive: "ambient aktiv",
    audioMuted: "ambient stumm",
    audioUnavailable: "Diese Umgebung kann kein browserbasiertes Ambient-Audio starten.",
    audioCueLabel: "Audio-Cue",
    lineArrivalLabel: "Ankunft",
    lineWeightLabel: "Druck",
    lineAdjustmentLabel: "Tuning",
    lineBridgeLabel: "Bruecke",
    lineCarryLabel: "Weitertragen",
    sceneCompleteTitle: "Szene vollstaendig geoeffnet.",
    sceneCompleteBody:
      "Der naechste Schritt bleibt klein: weiter durch die Nacht gehen oder die Spur in `ECHO` wirklich anfangen.",
    handoffTitle: "ECHO Handoff",
    handoffBody:
      "Diese Auswahl geht jetzt als seed motifs in `ECHO` weiter, damit die spaetere memoir session nicht kalt neu beginnen muss.",
    scenes: [
      {
        id: "platform",
        audioPreset: "station-rain",
        audioTitle: "Trockener Regen, tiefer Bahnsteig, wenig Waerme.",
        audioBody:
          "Die erste Schicht bleibt schmal und kuehl. Mehr koerperliches Tragen als melodische Geborgenheit.",
        audioCue: "Regen vorne, Pad kaum hoerbar, Luft bleibt angespannt.",
        closing:
          "Wenn diese Szene funktioniert, ist die Nacht noch nicht hell. Aber sie ist nicht mehr feindlich.",
        options: [
          { id: "breath", handoff: "steady breath" },
          { id: "light", handoff: "soft platform light" },
          { id: "thought", handoff: "quiet thoughts" },
        ],
      },
      {
        id: "window",
        audioPreset: "window-air",
        audioTitle: "Fensterluft, erstes Gruen, glaubwuerdige Rueckkehr.",
        audioBody:
          "Hier darf die Umgebung etwas waermer werden. Nicht euphorisch. Nur ausreichend, damit Bedeutung wieder landen kann.",
        audioCue: "Weniger Regen, mehr Luft, ein schmaler heller Oberton.",
        closing:
          "Die Szene darf jetzt nicht troesten wie ein Slogan. Sie muss zeigen, dass inneres Leben wieder antwortet.",
        options: [
          { id: "memory", handoff: "returning memory" },
          { id: "direction", handoff: "small direction" },
          { id: "warmth", handoff: "credible warmth" },
        ],
      },
      {
        id: "trace",
        audioPreset: "ember-trace",
        audioTitle: "Warmer Kern, leiser Schimmer, tragbare Spur.",
        audioBody:
          "Die letzte Schicht bleibt naechtlich, aber jetzt mit tragender Mitte. Die Audiofarbe soll sagen: etwas kann bewahrt werden.",
        audioCue: "Weiche Pad-Basis, kaum Restregen, ein leichter goldener Schimmer.",
        closing:
          "Hier wird `ECHO` nicht als Feature eingefuehrt. Es fuehlt sich an wie der naechste ehrliche Schritt.",
        options: [
          { id: "voice", handoff: "living voice" },
          { id: "lesson", handoff: "carried lesson" },
          { id: "fragment", handoff: "one true fragment" },
        ],
      },
    ],
  },
  en: {
    engineLabel: "CHROMA engine",
    engineTitle: "Authored slice runtime",
    engineBody:
      "This version runs each scene in controlled beats. Text, atmosphere, and the bridge into `ECHO` now behave like a small authored runtime instead of a static demo surface.",
    startCta: "Start the slice",
    pauseCta: "Pause",
    resumeCta: "Resume",
    replaySceneCta: "Replay scene",
    revealNextCta: "Reveal next beat",
    sceneProgressLabel: "Scene progress",
    beatProgressLabel: "Beat progress",
    autoPlayTitle: "Timed reveal",
    autoPlayBody:
      "Each scene arrives in ordered beats. You can let the rhythm run, pause it, or pull single lines forward manually.",
    revealHint: "The slice stays guided. More feeling, not more scope.",
    audioLabel: "Ambient state",
    audioOnCta: "Enable ambience",
    audioOffCta: "Mute ambience",
    audioLive: "ambient live",
    audioMuted: "ambient muted",
    audioUnavailable: "This environment cannot start browser-based ambient audio.",
    audioCueLabel: "Audio cue",
    lineArrivalLabel: "Arrival",
    lineWeightLabel: "Pressure",
    lineAdjustmentLabel: "Tuning",
    lineBridgeLabel: "Bridge",
    lineCarryLabel: "Carry forward",
    sceneCompleteTitle: "Scene fully opened.",
    sceneCompleteBody:
      "The next move stays small: continue through the night, or begin the trace for real in `ECHO`.",
    handoffTitle: "ECHO handoff",
    handoffBody:
      "These selections now move into `ECHO` as seed motifs, so the later memoir session does not have to begin cold.",
    scenes: [
      {
        id: "platform",
        audioPreset: "station-rain",
        audioTitle: "Dry rain, low platform, almost no warmth.",
        audioBody:
          "The first layer stays narrow and cool. More bodily carrying than melodic comfort.",
        audioCue: "Rain forward, pad barely present, air still tense.",
        closing:
          "If this scene works, the night is not bright yet. It is simply no longer hostile.",
        options: [
          { id: "breath", handoff: "steady breath" },
          { id: "light", handoff: "soft platform light" },
          { id: "thought", handoff: "quiet thoughts" },
        ],
      },
      {
        id: "window",
        audioPreset: "window-air",
        audioTitle: "Window air, first green, credible return.",
        audioBody:
          "Here the environment may warm slightly. Not euphoric. Only enough for meaning to land again.",
        audioCue: "Less rain, more air, one narrow bright overtone.",
        closing:
          "The scene must not comfort like a slogan. It has to show that interior life answers back.",
        options: [
          { id: "memory", handoff: "returning memory" },
          { id: "direction", handoff: "small direction" },
          { id: "warmth", handoff: "credible warmth" },
        ],
      },
      {
        id: "trace",
        audioPreset: "ember-trace",
        audioTitle: "Warm core, light shimmer, portable trace.",
        audioBody:
          "The final layer stays nocturnal, but with a carrying center now. The audio color should say: something can be preserved.",
        audioCue: "Soft pad floor, almost no rain left, a slight golden shimmer.",
        closing:
          "Here `ECHO` is not introduced like a feature. It feels like the next honest move.",
        options: [
          { id: "voice", handoff: "living voice" },
          { id: "lesson", handoff: "carried lesson" },
          { id: "fragment", handoff: "one true fragment" },
        ],
      },
    ],
  },
  "fr-CH": {
    engineLabel: "Moteur CHROMA",
    engineTitle: "Runtime du slice ecrit",
    engineBody:
      "Cette version fait avancer chaque scene par beats controles. Le texte, l'atmosphere et le passage vers `ECHO` agissent maintenant comme un petit runtime ecrit, et non comme une simple page demo.",
    startCta: "Lancer le slice",
    pauseCta: "Pause",
    resumeCta: "Reprendre",
    replaySceneCta: "Rejouer la scene",
    revealNextCta: "Reveler le beat suivant",
    sceneProgressLabel: "Progression de scene",
    beatProgressLabel: "Progression des beats",
    autoPlayTitle: "Timed reveal",
    autoPlayBody:
      "Chaque scene arrive en beats ordonnes. Tu peux laisser le rythme avancer, le mettre en pause ou faire venir une ligne plus tot.",
    revealHint: "Le slice reste guide. Plus de resonance, pas plus de scope.",
    audioLabel: "Etat ambient",
    audioOnCta: "Activer l'ambiance",
    audioOffCta: "Couper l'ambiance",
    audioLive: "ambient actif",
    audioMuted: "ambient coupe",
    audioUnavailable: "Cet environnement ne peut pas lancer l'audio ambient dans le navigateur.",
    audioCueLabel: "Audio cue",
    lineArrivalLabel: "Arrivee",
    lineWeightLabel: "Pression",
    lineAdjustmentLabel: "Reglage",
    lineBridgeLabel: "Pont",
    lineCarryLabel: "Transmission",
    sceneCompleteTitle: "Scene entierement ouverte.",
    sceneCompleteBody:
      "Le geste suivant reste petit: continuer dans la nuit, ou commencer la trace pour de vrai dans `ECHO`.",
    handoffTitle: "Handoff ECHO",
    handoffBody:
      "Ces choix passent maintenant dans `ECHO` comme seed motifs, pour que la session memoir suivante ne recommence pas a froid.",
    scenes: [
      {
        id: "platform",
        audioPreset: "station-rain",
        audioTitle: "Pluie seche, quai bas, presque pas de chaleur.",
        audioBody:
          "La premiere couche reste etroite et froide. Plus de portage corporel que de consolation melodique.",
        audioCue: "Pluie devant, pad presque absent, air encore tendu.",
        closing:
          "Si cette scene fonctionne, la nuit n'est pas encore lumineuse. Elle n'est simplement plus hostile.",
        options: [
          { id: "breath", handoff: "souffle stable" },
          { id: "light", handoff: "lumiere douce du quai" },
          { id: "thought", handoff: "pensees plus calmes" },
        ],
      },
      {
        id: "window",
        audioPreset: "window-air",
        audioTitle: "Air de fenetre, premier vert, retour credible.",
        audioBody:
          "Ici, l'environnement peut se rechauffer un peu. Pas euphorique. Juste assez pour que le sens revienne.",
        audioCue: "Moins de pluie, plus d'air, un harmonique clair et etroit.",
        closing:
          "La scene ne doit pas consoler comme un slogan. Elle doit montrer que la vie interieure repond encore.",
        options: [
          { id: "memory", handoff: "memoire qui revient" },
          { id: "direction", handoff: "petite direction" },
          { id: "warmth", handoff: "chaleur credible" },
        ],
      },
      {
        id: "trace",
        audioPreset: "ember-trace",
        audioTitle: "Noyau chaud, leger scintillement, trace portable.",
        audioBody:
          "La derniere couche reste nocturne, mais avec un centre porteur. La couleur sonore doit dire: quelque chose peut etre preserve.",
        audioCue: "Base douce, presque plus de pluie, leger scintillement dore.",
        closing:
          "Ici, `ECHO` n'arrive pas comme une fonctionnalite. Il ressemble au prochain geste honnete.",
        options: [
          { id: "voice", handoff: "voix vivante" },
          { id: "lesson", handoff: "lecon transmise" },
          { id: "fragment", handoff: "un fragment vrai" },
        ],
      },
    ],
  },
  "it-CH": {
    engineLabel: "Motore CHROMA",
    engineTitle: "Runtime dello slice scritto",
    engineBody:
      "Questa versione fa avanzare ogni scena in beat controllati. Testo, atmosfera e passaggio verso `ECHO` ora si comportano come un piccolo runtime scritto, non come una semplice demo statica.",
    startCta: "Avvia lo slice",
    pauseCta: "Pausa",
    resumeCta: "Riprendi",
    replaySceneCta: "Rigioca la scena",
    revealNextCta: "Mostra il beat successivo",
    sceneProgressLabel: "Progresso scena",
    beatProgressLabel: "Progresso beat",
    autoPlayTitle: "Timed reveal",
    autoPlayBody:
      "Ogni scena arriva in beat ordinati. Puoi lasciare il ritmo libero, fermarlo o anticipare manualmente una linea.",
    revealHint: "Lo slice resta guidato. Pi piu risonanza, non piu scope.",
    audioLabel: "Stato ambient",
    audioOnCta: "Attiva l'ambienza",
    audioOffCta: "Disattiva l'ambienza",
    audioLive: "ambient attivo",
    audioMuted: "ambient spento",
    audioUnavailable: "Questo ambiente non puo avviare audio ambient nel browser.",
    audioCueLabel: "Audio cue",
    lineArrivalLabel: "Arrivo",
    lineWeightLabel: "Pressione",
    lineAdjustmentLabel: "Sintonia",
    lineBridgeLabel: "Ponte",
    lineCarryLabel: "Trasporto",
    sceneCompleteTitle: "Scena completamente aperta.",
    sceneCompleteBody:
      "Il passo successivo resta piccolo: continuare nella notte oppure iniziare davvero la traccia dentro `ECHO`.",
    handoffTitle: "Handoff ECHO",
    handoffBody:
      "Queste scelte ora passano in `ECHO` come seed motifs, cosi la sessione memoir successiva non deve ricominciare da fredda.",
    scenes: [
      {
        id: "platform",
        audioPreset: "station-rain",
        audioTitle: "Pioggia secca, banchina bassa, quasi nessun calore.",
        audioBody:
          "Il primo strato resta stretto e freddo. Piu sostegno corporeo che conforto melodico.",
        audioCue: "Pioggia in primo piano, pad quasi assente, aria ancora tesa.",
        closing:
          "Se questa scena funziona, la notte non e ancora luminosa. Smette solo di essere ostile.",
        options: [
          { id: "breath", handoff: "respiro stabile" },
          { id: "light", handoff: "luce morbida della banchina" },
          { id: "thought", handoff: "pensieri piu quieti" },
        ],
      },
      {
        id: "window",
        audioPreset: "window-air",
        audioTitle: "Aria di finestra, primo verde, ritorno credibile.",
        audioBody:
          "Qui l'ambiente puo scaldarsi un poco. Non euforia. Solo abbastanza per far tornare il significato.",
        audioCue: "Meno pioggia, piu aria, un overtone stretto e chiaro.",
        closing:
          "La scena non deve consolare come uno slogan. Deve mostrare che la vita interiore risponde ancora.",
        options: [
          { id: "memory", handoff: "memoria che ritorna" },
          { id: "direction", handoff: "piccola direzione" },
          { id: "warmth", handoff: "calore credibile" },
        ],
      },
      {
        id: "trace",
        audioPreset: "ember-trace",
        audioTitle: "Nucleo caldo, lieve scintillio, traccia portabile.",
        audioBody:
          "L'ultimo strato resta notturno, ma con un centro portante. Il colore audio deve dire: qualcosa puo essere preservato.",
        audioCue: "Base soffice, quasi piu nessuna pioggia, un lieve scintillio dorato.",
        closing:
          "Qui `ECHO` non arriva come funzionalita. Sembra il prossimo passo onesto.",
        options: [
          { id: "voice", handoff: "voce viva" },
          { id: "lesson", handoff: "lezione portata avanti" },
          { id: "fragment", handoff: "un frammento vero" },
        ],
      },
    ],
  },
  rm: {
    engineLabel: "Motor CHROMA",
    engineTitle: "Runtime da slice scrit",
    engineBody:
      "Questa versiun maina mintga scena tras beats controllai. Text, atmosfera e la punt vers `ECHO` sa cumportan ussa sco in pign runtime scrit e buc sco ina demo statica.",
    startCta: "Avviar il slice",
    pauseCta: "Pausa",
    resumeCta: "Cuntinuar",
    replaySceneCta: "Regiugar la scena",
    revealNextCta: "Mussar il proxim beat",
    sceneProgressLabel: "Progress da scena",
    beatProgressLabel: "Progress da beats",
    autoPlayTitle: "Timed reveal",
    autoPlayBody:
      "Mintga scena arriva en beats ordinai. Ti pos laschar il ritmus ir, far pausa ni trer ina lingia vinavant a maun.",
    revealHint: "Il slice resta guidau. Dapli resonance, buc dapli scope.",
    audioLabel: "Stadi ambient",
    audioOnCta: "Activar l'ambient",
    audioOffCta: "Far star quiet l'ambient",
    audioLive: "ambient activ",
    audioMuted: "ambient silencius",
    audioUnavailable: "Quest ambient na po betg avviar audio ambient en il browser.",
    audioCueLabel: "Audio cue",
    lineArrivalLabel: "Arrivada",
    lineWeightLabel: "Pressiun",
    lineAdjustmentLabel: "Tuning",
    lineBridgeLabel: "Punt",
    lineCarryLabel: "Purtar vinavant",
    sceneCompleteTitle: "Scena cumpleinamein aviarta.",
    sceneCompleteBody:
      "Il proxim pass resta pigns: cuntinuar tras la notg ni entscheiver propi la fastizza en `ECHO`.",
    handoffTitle: "Handoff ECHO",
    handoffBody:
      "Questas tschernas van ussa en `ECHO` sco seed motifs, uschia che la sessiun memoir che suonda na sto buc entscheiver fraida.",
    scenes: [
      {
        id: "platform",
        audioPreset: "station-rain",
        audioTitle: "Plievgia sitga, perrun bass, quasi negina chalur.",
        audioBody:
          "L'emprema cuolissa resta stretga e freida. Dapli sustegn dal corp che confort melodic.",
        audioCue: "Plievgia avon, pad strusch present, aria anc tensa.",
        closing:
          "Sche questa scena funcziuna, la notg n'ei anc buc clara. Ella ei mo buca pli ostila.",
        options: [
          { id: "breath", handoff: "respiraziun stabla" },
          { id: "light", handoff: "glisch migeivla dal perrun" },
          { id: "thought", handoff: "pensiers pli quiets" },
        ],
      },
      {
        id: "window",
        audioPreset: "window-air",
        audioTitle: "Aria da fanestra, emprem verd, return credibel.",
        audioBody:
          "Cheu sa l'ambient vegnir in tec pli cauld. Buc euforia. Mo avunda per che senn sa puspei vegnir.",
        audioCue: "Main plievgia, dapli aria, in tun clar e stretg.",
        closing:
          "La scena na duei betg consolear sco in slogan. Ella duei mussar che veta interna rispunda aunc.",
        options: [
          { id: "memory", handoff: "regurdientscha che returna" },
          { id: "direction", handoff: "pintga direcziun" },
          { id: "warmth", handoff: "chalur credibla" },
        ],
      },
      {
        id: "trace",
        audioPreset: "ember-trace",
        audioTitle: "Cor cauld, lev scintillar, fastizza purtabela.",
        audioBody:
          "L'ultima cuolissa resta nocturna, mo ussa cun in center che porta. La colur da l'audio duei dir: insatge sa vegnir preservau.",
        audioCue: "Fundament migeivel, quasi negina plievgia pli, in lev scintillar d'aur.",
        closing:
          "Cheu na cumpara `ECHO` buc sco funcziun. El senta sco il proxim pass honest.",
        options: [
          { id: "voice", handoff: "vusch viva" },
          { id: "lesson", handoff: "lecziun purtada vinavant" },
          { id: "fragment", handoff: "in fragment ver" },
        ],
      },
    ],
  },
};
