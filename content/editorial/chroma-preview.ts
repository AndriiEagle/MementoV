import type { Locale } from "@/lib/i18n";

type ChromaPreviewCopy = {
  label: string;
  title: string;
  body: string;
  colorLogicTitle: string;
  colorLogicBody: string;
  conversionLogicTitle: string;
  conversionLogicBody: string;
};

export const chromaPreviewCopy: Record<Locale, ChromaPreviewCopy> = {
  "de-CH": {
    label: "Chroma Vorschau",
    title:
      "Ein Bahnhof um 00:43. Regen am Glas. Die erste Spur von Waerme kehrt zurueck.",
    body: "Die Person liest keine Marketing-Seite. Sie tritt in einen kontrollierten naechtlichen Rhythmus ein: Text, Atem, Regen und eine langsame Befreiung vom Monochrom hin zu lebendiger Farbe.",
    colorLogicTitle: "Farb-Logik",
    colorLogicBody:
      "`CHROMA` beginnt kalt und koernig. Jeder narrative Beat weicht den Kontrast auf und laesst Waerme in gemessenen, nicht kitschigen Schritten ankommen.",
    conversionLogicTitle: "Konversions-Logik",
    conversionLogicBody:
      "Das Ende verkauft `ECHO` nicht plump. Es laesst die Person mit einem wahren Gefuehl zurueck: \"Mein Leben ist es wert, erzaehlt zu werden.\"",
  },
  en: {
    label: "Chroma Preview",
    title:
      "A station at 00:43. Rain on glass. The first trace of warmth returns.",
    body: "The user does not read a marketing page. The user enters a controlled nocturnal rhythm: text, breath, rain, and a slow release from monochrome into living color.",
    colorLogicTitle: "Color logic",
    colorLogicBody:
      "`CHROMA` begins cold and grainy. Each narrative beat softens contrast and lets warmth arrive in measured, non-cheesy increments.",
    conversionLogicTitle: "Conversion logic",
    conversionLogicBody:
      "The ending does not hard-sell `ECHO`. It leaves the user with one truthful feeling: \"my life is worth being told.\"",
  },
  "fr-CH": {
    label: "Apercu Chroma",
    title:
      "Une gare a 00:43. La pluie sur la vitre. La premiere trace de chaleur revient.",
    body: "L'utilisateur ne lit pas une page marketing. Il entre dans un rythme nocturne controle: texte, souffle, pluie, puis un lent passage du monochrome vers une couleur vivante.",
    colorLogicTitle: "Logique de couleur",
    colorLogicBody:
      "`CHROMA` commence froid et granuleux. Chaque battement narratif adoucit le contraste et laisse la chaleur arriver par degres mesures, sans kitsch.",
    conversionLogicTitle: "Logique de conversion",
    conversionLogicBody:
      "La fin ne vend pas `ECHO` brutalement. Elle laisse a l'utilisateur un sentiment vrai: \"ma vie merite d'etre racontee.\"",
  },
  "it-CH": {
    label: "Anteprima Chroma",
    title:
      "Una stazione alle 00:43. Pioggia sul vetro. Ritorna la prima traccia di calore.",
    body: "L'utente non legge una pagina marketing. Entra in un ritmo notturno controllato: testo, respiro, pioggia e un lento passaggio dal monocromo a un colore vivo.",
    colorLogicTitle: "Logica del colore",
    colorLogicBody:
      "`CHROMA` inizia freddo e granuloso. Ogni battito narrativo ammorbidisce il contrasto e lascia arrivare il calore in incrementi misurati, senza kitsch.",
    conversionLogicTitle: "Logica di conversione",
    conversionLogicBody:
      "Il finale non vende `ECHO` in modo aggressivo. Lascia l'utente con una verita: \"la mia vita merita di essere raccontata.\"",
  },
  rm: {
    label: "Prevista Chroma",
    title:
      "Ina staziun a las 00:43. Plievgia sin vaider. L'emprima fastizza da chalur turna.",
    body: "L'utilisader na legia betg ina pagina da marketing. El entra en in ritmus da notg controllau: text, respiraziun, plievgia e in passadi plaun dal monochrom a colur viva.",
    colorLogicTitle: "Logica da colur",
    colorLogicBody:
      "`CHROMA` cumenza fraid e graneus. Mintga beat narrativ mollifitgescha il contrast e lascha vegnir la chalur en pass pitschens e mesirads.",
    conversionLogicTitle: "Logica da conversiun",
    conversionLogicBody:
      "La fin na venda betg `ECHO` en mod brut. Ella lascha l'utilisader cun ina vardad: \"mia vita merita d'esser raquintada.\"",
  },
};
