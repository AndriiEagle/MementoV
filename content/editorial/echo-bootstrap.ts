import type { Locale } from "@/lib/i18n";

type EchoBootstrapCopy = {
  label: string;
  title: string;
  body: string;
  defaultParticipantName: string;
  participantNameLabel: string;
  participantNamePlaceholder: string;
  motifsLabel: string;
  motifsPlaceholder: string;
  sessionKeyLabel: string;
  sessionKeyHint: string;
  localeLabel: string;
  intentLabel: string;
  intentValue: string;
  submitIdle: string;
  submitBusy: string;
  rotateSeed: string;
  statusLabel: string;
  idleTitle: string;
  idleBody: string;
  ready: string;
  notConfigured: string;
  authRequired: string;
  error: string;
  previewTitle: string;
  sessionSeedLabel: string;
  roomLabel: string;
  identityLabel: string;
  motifsPreviewLabel: string;
  none: string;
  connectionTitle: string;
  serverUrlLabel: string;
  tokenLabel: string;
  tokenHint: string;
  productionRuleLabel: string;
  futureMilestonesTitle: string;
  liveTokenReadyTitle: string;
  liveTokenReadyBody: string;
  envBlockedTitle: string;
  envBlockedBody: string;
  authBlockedTitle: string;
  authBlockedBody: string;
  unexpectedResponse: string;
  unknownBootstrapError: string;
};

export const echoBootstrapCopy: Record<Locale, EchoBootstrapCopy> = {
  "de-CH": {
    label: "ECHO Bootstrap",
    title: "Bereite eine echte Memoir-Session vor.",
    body: "Dieser Schritt verbindet die sichtbare ECHO-Oberflaeche mit dem echten Token-Endpoint. Noch nicht der volle Voice-Runtime, aber bereits ein realer Session-Vertrag fuer die naechste Phase.",
    defaultParticipantName: "Memoir Gast",
    participantNameLabel: "Teilnehmername",
    participantNamePlaceholder: "Zum Beispiel: Ruth Keller",
    motifsLabel: "Saat-Motive",
    motifsPlaceholder: "rain, kitchen light, 1987, grandmother",
    sessionKeyLabel: "Session key",
    sessionKeyHint: "Der gleiche key fuehrt zur gleichen Room- und Identity-Ableitung.",
    localeLabel: "Aktive Locale",
    intentLabel: "Intent",
    intentValue: "memoir-demo",
    submitIdle: "ECHO Session vorbereiten",
    submitBusy: "Session-Vertrag wird vorbereitet...",
    rotateSeed: "Neuen Session-Key erzeugen",
    statusLabel: "Status",
    idleTitle: "Noch keine Session angefragt.",
    idleBody: "Sobald du diese Demo absendest, zeigt ECHO den stabilen Session-Preview und den echten Zustand des Token-Endpunkts.",
    ready: "ready",
    notConfigured: "not-configured",
    authRequired: "auth-required",
    error: "error",
    previewTitle: "Session preview",
    sessionSeedLabel: "Abgeleiteter Seed",
    roomLabel: "Room",
    identityLabel: "Identity",
    motifsPreviewLabel: "Motive",
    none: "keine",
    connectionTitle: "LiveKit connection details",
    serverUrlLabel: "Server URL",
    tokenLabel: "Participant token",
    tokenHint: "Aus Sicherheitsgruenden nur verkuerzt angezeigt.",
    productionRuleLabel: "Produktionsregel",
    futureMilestonesTitle: "Naechste Milestones",
    liveTokenReadyTitle: "Token-Kontrakt bereit.",
    liveTokenReadyBody: "Wenn die Umgebung vorhanden ist, liefert ECHO jetzt echte Connection-Details fuer die naechste Room-Phase.",
    envBlockedTitle: "Session-Vertrag bereit, Umgebung fehlt noch.",
    envBlockedBody: "Die Anfrage ist valide und der Session-Preview steht. LiveKit-Umgebungswerte fehlen aber noch, deshalb wird noch kein Token ausgestellt.",
    authBlockedTitle: "Production guard aktiv.",
    authBlockedBody: "Die Umgebung koennte Tokens ausstellen, aber ausserhalb von Development bleibt das blockiert, bis eine echte Auth-Schicht davor sitzt.",
    unexpectedResponse: "Die ECHO-Bootstrap-Anfrage hat unerwartet geantwortet.",
    unknownBootstrapError: "Unbekannter ECHO-Bootstrap-Fehler.",
  },
  en: {
    label: "ECHO bootstrap",
    title: "Prepare a real memoir session.",
    body: "This step connects the visible ECHO surface to the real token endpoint. It is still not the full voice runtime, but it is already a real session contract for the next phase.",
    defaultParticipantName: "Memoir Guest",
    participantNameLabel: "Participant name",
    participantNamePlaceholder: "For example: Ruth Keller",
    motifsLabel: "Seed motifs",
    motifsPlaceholder: "rain, kitchen light, 1987, grandmother",
    sessionKeyLabel: "Session key",
    sessionKeyHint: "The same key leads to the same room and identity derivation.",
    localeLabel: "Active locale",
    intentLabel: "Intent",
    intentValue: "memoir-demo",
    submitIdle: "Prepare ECHO session",
    submitBusy: "Preparing session contract...",
    rotateSeed: "Generate new session key",
    statusLabel: "Status",
    idleTitle: "No session has been requested yet.",
    idleBody: "Once you submit this demo, ECHO will show the stable session preview and the real state of the token endpoint.",
    ready: "ready",
    notConfigured: "not-configured",
    authRequired: "auth-required",
    error: "error",
    previewTitle: "Session preview",
    sessionSeedLabel: "Derived seed",
    roomLabel: "Room",
    identityLabel: "Identity",
    motifsPreviewLabel: "Motifs",
    none: "none",
    connectionTitle: "LiveKit connection details",
    serverUrlLabel: "Server URL",
    tokenLabel: "Participant token",
    tokenHint: "Shown in shortened form for safety.",
    productionRuleLabel: "Production rule",
    futureMilestonesTitle: "Next milestones",
    liveTokenReadyTitle: "Token contract ready.",
    liveTokenReadyBody: "When the environment is present, ECHO now returns real connection details for the next room phase.",
    envBlockedTitle: "Session contract ready, environment still missing.",
    envBlockedBody: "The request is valid and the session preview is stable. LiveKit environment values are still missing, so no token is issued yet.",
    authBlockedTitle: "Production guard is active.",
    authBlockedBody: "The environment could issue tokens, but outside development that stays blocked until a real auth layer sits in front of it.",
    unexpectedResponse: "The ECHO bootstrap request returned an unexpected response.",
    unknownBootstrapError: "Unknown ECHO bootstrap error.",
  },
  "fr-CH": {
    label: "Bootstrap ECHO",
    title: "Preparer une vraie session memoir.",
    body: "Cette etape relie la surface visible de ECHO au vrai endpoint de token. Ce n'est toujours pas le runtime voix complet, mais c'est deja un vrai contrat de session pour la phase suivante.",
    defaultParticipantName: "Invite memoir",
    participantNameLabel: "Nom du participant",
    participantNamePlaceholder: "Par exemple: Ruth Keller",
    motifsLabel: "Motifs de depart",
    motifsPlaceholder: "rain, kitchen light, 1987, grandmother",
    sessionKeyLabel: "Session key",
    sessionKeyHint: "La meme cle donne la meme derivation de room et d'identite.",
    localeLabel: "Locale active",
    intentLabel: "Intent",
    intentValue: "memoir-demo",
    submitIdle: "Preparer la session ECHO",
    submitBusy: "Preparation du contrat de session...",
    rotateSeed: "Generer une nouvelle cle de session",
    statusLabel: "Statut",
    idleTitle: "Aucune session n'a encore ete demandee.",
    idleBody: "Des que tu envoies cette demo, ECHO montre le preview stable de session et l'etat reel de l'endpoint token.",
    ready: "ready",
    notConfigured: "not-configured",
    authRequired: "auth-required",
    error: "error",
    previewTitle: "Preview de session",
    sessionSeedLabel: "Seed derive",
    roomLabel: "Room",
    identityLabel: "Identity",
    motifsPreviewLabel: "Motifs",
    none: "aucun",
    connectionTitle: "Details de connexion LiveKit",
    serverUrlLabel: "Server URL",
    tokenLabel: "Participant token",
    tokenHint: "Affiche sous forme raccourcie pour la securite.",
    productionRuleLabel: "Regle de production",
    futureMilestonesTitle: "Prochaines milestones",
    liveTokenReadyTitle: "Contrat de token pret.",
    liveTokenReadyBody: "Quand l'environnement existe, ECHO retourne deja de vrais details de connexion pour la prochaine phase room.",
    envBlockedTitle: "Contrat de session pret, environnement encore absent.",
    envBlockedBody: "La requete est valide et le preview de session est stable. Les valeurs d'environnement LiveKit manquent encore, donc aucun token n'est emis.",
    authBlockedTitle: "Garde de production active.",
    authBlockedBody: "L'environnement pourrait emettre des tokens, mais hors development cela reste bloque tant qu'une vraie couche auth n'est pas en place.",
    unexpectedResponse: "La requete bootstrap ECHO a retourne une reponse inattendue.",
    unknownBootstrapError: "Erreur bootstrap ECHO inconnue.",
  },
  "it-CH": {
    label: "Bootstrap ECHO",
    title: "Prepara una vera sessione memoir.",
    body: "Questo passaggio collega la superficie visibile di ECHO al vero endpoint token. Non e ancora il runtime vocale completo, ma e gia un vero contratto di sessione per la fase successiva.",
    defaultParticipantName: "Ospite memoir",
    participantNameLabel: "Nome del partecipante",
    participantNamePlaceholder: "Per esempio: Ruth Keller",
    motifsLabel: "Motivi seed",
    motifsPlaceholder: "rain, kitchen light, 1987, grandmother",
    sessionKeyLabel: "Session key",
    sessionKeyHint: "La stessa chiave porta alla stessa derivazione di room e identity.",
    localeLabel: "Locale attiva",
    intentLabel: "Intent",
    intentValue: "memoir-demo",
    submitIdle: "Prepara sessione ECHO",
    submitBusy: "Preparazione del contratto di sessione...",
    rotateSeed: "Genera nuova session key",
    statusLabel: "Stato",
    idleTitle: "Nessuna sessione richiesta finora.",
    idleBody: "Appena invii questa demo, ECHO mostra il preview stabile della sessione e lo stato reale dell'endpoint token.",
    ready: "ready",
    notConfigured: "not-configured",
    authRequired: "auth-required",
    error: "error",
    previewTitle: "Preview di sessione",
    sessionSeedLabel: "Seed derivato",
    roomLabel: "Room",
    identityLabel: "Identity",
    motifsPreviewLabel: "Motivi",
    none: "nessuno",
    connectionTitle: "Dettagli di connessione LiveKit",
    serverUrlLabel: "Server URL",
    tokenLabel: "Participant token",
    tokenHint: "Mostrato in forma abbreviata per sicurezza.",
    productionRuleLabel: "Regola di produzione",
    futureMilestonesTitle: "Prossime milestones",
    liveTokenReadyTitle: "Contratto token pronto.",
    liveTokenReadyBody: "Quando l'ambiente esiste, ECHO restituisce gia veri dettagli di connessione per la prossima fase room.",
    envBlockedTitle: "Contratto di sessione pronto, ambiente ancora mancante.",
    envBlockedBody: "La richiesta e valida e il preview di sessione e stabile. Mancano ancora i valori ambiente LiveKit, quindi nessun token viene emesso.",
    authBlockedTitle: "Production guard attiva.",
    authBlockedBody: "L'ambiente potrebbe emettere token, ma fuori da development resta bloccato finche non esiste un vero layer auth.",
    unexpectedResponse: "La richiesta bootstrap ECHO ha restituito una risposta inattesa.",
    unknownBootstrapError: "Errore bootstrap ECHO sconosciuto.",
  },
  rm: {
    label: "Bootstrap ECHO",
    title: "Preparar ina vera sessiun memoir.",
    body: "Quest pass collia la surfatscha visibla da ECHO cun il ver endpoint da token. Quai n'e anc betg il runtime vocal cumplet, ma gia in ver contract da sessiun per la proxima fasa.",
    defaultParticipantName: "Hospe memoir",
    participantNameLabel: "Num dal participant",
    participantNamePlaceholder: "Per exempel: Ruth Keller",
    motifsLabel: "Motivs seed",
    motifsPlaceholder: "rain, kitchen light, 1987, grandmother",
    sessionKeyLabel: "Session key",
    sessionKeyHint: "La medema clav maina a la medema derivaziun da room e identity.",
    localeLabel: "Locale activa",
    intentLabel: "Intent",
    intentValue: "memoir-demo",
    submitIdle: "Preparar sessiun ECHO",
    submitBusy: "Preparaziun dal contract da sessiun...",
    rotateSeed: "Generar nova session key",
    statusLabel: "Status",
    idleTitle: "Anc nagina sessiun dumandada.",
    idleBody: "Uschespert che ti tramettas questa demo, mussa ECHO il preview stabil da la sessiun e il status real da l'endpoint token.",
    ready: "ready",
    notConfigured: "not-configured",
    authRequired: "auth-required",
    error: "error",
    previewTitle: "Preview da sessiun",
    sessionSeedLabel: "Seed derivau",
    roomLabel: "Room",
    identityLabel: "Identity",
    motifsPreviewLabel: "Motivs",
    none: "nagin",
    connectionTitle: "Detagls da connexiun LiveKit",
    serverUrlLabel: "Server URL",
    tokenLabel: "Participant token",
    tokenHint: "Mussau en furma scursanida per segirtad.",
    productionRuleLabel: "Regla da producziun",
    futureMilestonesTitle: "Proximas milestones",
    liveTokenReadyTitle: "Contract da token pront.",
    liveTokenReadyBody: "Cura che l'ambient exista, returna ECHO gia detagls reals da connexiun per la proxima fasa room.",
    envBlockedTitle: "Contract da sessiun pront, ambient anc mancanta.",
    envBlockedBody: "La dumonda e valida ed il preview da sessiun e stabil. Ils valurs d'ambient LiveKit mancan anc, uschia na vegn nagin token emess.",
    authBlockedTitle: "Production guard activa.",
    authBlockedBody: "L'ambient pudess emetter tokens, ma ordaifer development resta quai bloccau fin che in ver layer auth exista.",
    unexpectedResponse: "La dumonda bootstrap ECHO ha returnau ina resposta nunspetgada.",
    unknownBootstrapError: "Nunenconuschenta errur bootstrap ECHO.",
  },
};
