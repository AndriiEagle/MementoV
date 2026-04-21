import type { Locale } from "@/lib/i18n";

type EchoSubstratePanelCopy = {
  label: string;
  title: string;
  body: string;
  loading: string;
  errorLabel: string;
  loadFailed: string;
  unknownReadinessError: string;
  currentChecksTitle: string;
  endpointTitle: string;
  endpointGetLine: string;
  endpointPostLine: string;
  productionRuleTitle: string;
  nextMilestonesTitle: string;
  present: string;
  missing: string;
  ready: string;
  notConfigured: string;
  authRequired: string;
  authRequiredBody: string;
};

export const echoSubstratePanelCopy: Record<Locale, EchoSubstratePanelCopy> = {
  "de-CH": {
    label: "ECHO Substrate",
    title: "Der Token-Endpoint ist jetzt real.",
    body: "Diese Phase behauptet keinen vollstaendigen Realtime-Memoir-Runtime. Sie beweist, dass Backend-Vertrag, Validierung und der LiveKit-Tokenpfad jetzt als reales Substrat existieren.",
    loading: "ECHO-Substrate-Readiness wird geladen...",
    errorLabel: "ECHO Substrate",
    loadFailed: "ECHO-Substrate-Readiness konnte nicht geladen werden.",
    unknownReadinessError: "Unbekannter Fehler beim Laden der ECHO-Substrate-Readiness.",
    currentChecksTitle: "Aktuelle Checks",
    endpointTitle: "Endpoint-Vertrag",
    endpointGetLine: "`GET /api/livekit/token` liefert die Readiness.",
    endpointPostLine:
      "`POST /api/livekit/token` validiert einen ECHO-Session-Payload und stellt bei konfigurierter Umgebung ein kurzes Token aus.",
    productionRuleTitle: "Produktionsregel",
    nextMilestonesTitle: "Naechste Substrate-Meilensteine",
    present: "vorhanden",
    missing: "fehlt",
    ready: "bereit",
    notConfigured: "nicht konfiguriert",
    authRequired: "auth erforderlich",
    authRequiredBody:
      "In Produktion bleibt die Token-Ausgabe gesperrt, bis eine echte Authentifizierung vor diesem Endpoint liegt.",
  },
  en: {
    label: "ECHO substrate",
    title: "The token endpoint is now real.",
    body: "This phase does not claim a complete realtime memoir runtime. It proves that the backend contract, validation layer, and LiveKit token issuance path now exist as a real substrate.",
    loading: "Loading ECHO substrate readiness...",
    errorLabel: "ECHO substrate",
    loadFailed: "Failed to load ECHO substrate readiness.",
    unknownReadinessError: "Unknown substrate readiness error.",
    currentChecksTitle: "Current checks",
    endpointTitle: "Endpoint contract",
    endpointGetLine: "`GET /api/livekit/token` returns readiness.",
    endpointPostLine:
      "`POST /api/livekit/token` validates an ECHO session payload and issues a short-lived token when the environment is configured.",
    productionRuleTitle: "Production rule",
    nextMilestonesTitle: "Next substrate milestones",
    present: "present",
    missing: "missing",
    ready: "ready",
    notConfigured: "not-configured",
    authRequired: "auth required",
    authRequiredBody:
      "In production, token issuance stays blocked until a real authentication layer sits in front of this endpoint.",
  },
  "fr-CH": {
    label: "Substrate ECHO",
    title: "L'endpoint de token est maintenant reel.",
    body: "Cette phase ne pretend pas qu'un runtime memoir temps reel complet existe deja. Elle prouve que le contrat backend, la validation et le chemin d'emission de token LiveKit existent maintenant comme vrai substrate.",
    loading: "Chargement de la readiness du substrate ECHO...",
    errorLabel: "Substrate ECHO",
    loadFailed: "Impossible de charger la readiness du substrate ECHO.",
    unknownReadinessError: "Erreur inconnue de readiness du substrate ECHO.",
    currentChecksTitle: "Verifications actuelles",
    endpointTitle: "Contrat d'endpoint",
    endpointGetLine: "`GET /api/livekit/token` retourne l'etat de readiness.",
    endpointPostLine:
      "`POST /api/livekit/token` valide un payload de session ECHO et emet un token court si l'environnement est configure.",
    productionRuleTitle: "Regle de production",
    nextMilestonesTitle: "Prochaines etapes substrate",
    present: "present",
    missing: "manquant",
    ready: "pret",
    notConfigured: "non configure",
    authRequired: "auth requise",
    authRequiredBody:
      "En production, l'emission de token reste bloquee tant qu'une vraie couche d'authentification ne protege pas cet endpoint.",
  },
  "it-CH": {
    label: "Substrate ECHO",
    title: "L'endpoint token ora e reale.",
    body: "Questa fase non pretende un runtime memoir realtime completo. Dimostra che il contratto backend, il layer di validazione e il percorso di emissione token LiveKit esistono ora come substrate reale.",
    loading: "Caricamento della readiness del substrate ECHO...",
    errorLabel: "Substrate ECHO",
    loadFailed: "Impossibile caricare la readiness del substrate ECHO.",
    unknownReadinessError: "Errore sconosciuto nella readiness del substrate ECHO.",
    currentChecksTitle: "Controlli attuali",
    endpointTitle: "Contratto dell'endpoint",
    endpointGetLine: "`GET /api/livekit/token` restituisce la readiness.",
    endpointPostLine:
      "`POST /api/livekit/token` valida un payload di sessione ECHO ed emette un token breve quando l'ambiente e configurato.",
    productionRuleTitle: "Regola di produzione",
    nextMilestonesTitle: "Prossime milestone substrate",
    present: "presente",
    missing: "mancante",
    ready: "pronto",
    notConfigured: "non configurato",
    authRequired: "auth richiesta",
    authRequiredBody:
      "In produzione, l'emissione del token resta bloccata finche un vero layer di autenticazione non protegge questo endpoint.",
  },
  rm: {
    label: "Substrate ECHO",
    title: "L'endpoint da token e ussa real.",
    body: "Questa fasa na pretenda betg in runtime memoir realtime cumplet. Ella mussa che il contract backend, la validaziun e la via d'emissiun dal token LiveKit existan ussa sco ver substrate.",
    loading: "Chargiament da la readiness dal substrate ECHO...",
    errorLabel: "Substrate ECHO",
    loadFailed: "Impussibel da chargiar la readiness dal substrate ECHO.",
    unknownReadinessError: "Nunenconuschenta errur da readiness dal substrate ECHO.",
    currentChecksTitle: "Checks actuals",
    endpointTitle: "Contract da l'endpoint",
    endpointGetLine: "`GET /api/livekit/token` returna la readiness.",
    endpointPostLine:
      "`POST /api/livekit/token` valida in payload da sessiun ECHO e emetta in token curt cura che l'ambient e configurau.",
    productionRuleTitle: "Regla da producziun",
    nextMilestonesTitle: "Proxims milestones dal substrate",
    present: "preschent",
    missing: "manca",
    ready: "pront",
    notConfigured: "betg configurau",
    authRequired: "auth necessaria",
    authRequiredBody:
      "En producziun resta l'emissiun dal token serrada fin che in ver stradim d'autentificaziun na protegia betg quest endpoint.",
  },
};
