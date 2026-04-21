"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  KeyRound,
  LoaderCircle,
  Orbit,
  RefreshCcw,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import { echoBootstrapCopy } from "@/content/editorial/echo-bootstrap";

import { useLocale } from "@/components/locale-provider";
import { localeLabels } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type BootstrapStatus = "ready" | "not-configured" | "auth-required";

type BootstrapResponse = {
  status: BootstrapStatus | "invalid-request";
  message?: string;
  readiness?: {
    status: BootstrapStatus;
    productionRule: string;
    futureMilestones: string[];
  };
  sessionPreview?: {
    sessionSeed: string;
    roomName: string;
    participantIdentity: string;
    participantName: string;
    participantMetadata: {
      locale: string;
      intent: string;
      seedMotifs: string[];
    };
  };
  connectionDetails?: {
    serverUrl: string;
    roomName: string;
    participantIdentity: string;
    participantName: string;
    participantToken: string;
  };
};

type BootstrapDraft = {
  participantName: string;
  motifsInput: string;
  sessionKey: string;
};

const storageKey = "memento-vivere-echo-bootstrap-v1";

function createSessionKey() {
  if (typeof globalThis !== "undefined" && globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `echo-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

function parseSeedMotifs(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 5);
}

function maskToken(token: string) {
  if (token.length <= 24) {
    return token;
  }

  return `${token.slice(0, 14)}...${token.slice(-10)}`;
}

export function EchoBootstrap() {
  const { locale } = useLocale();
  const copy = echoBootstrapCopy[locale];
  const [draft, setDraft] = useState<BootstrapDraft>(() => {
    if (typeof window === "undefined") {
      return {
        participantName: "",
        motifsInput: "",
        sessionKey: createSessionKey(),
      };
    }

    const raw = window.localStorage.getItem(storageKey);
    const seedMotifs = new URLSearchParams(window.location.search).get("seedMotifs");

    if (!raw) {
      return {
        participantName: "",
        motifsInput: seedMotifs ?? "",
        sessionKey: createSessionKey(),
      };
    }

    try {
      const parsed = JSON.parse(raw) as Partial<BootstrapDraft>;

      return {
        participantName:
          typeof parsed.participantName === "string" ? parsed.participantName : "",
        motifsInput:
          seedMotifs ??
          (typeof parsed.motifsInput === "string" ? parsed.motifsInput : ""),
        sessionKey:
          typeof parsed.sessionKey === "string" && parsed.sessionKey.length >= 8
            ? parsed.sessionKey
            : createSessionKey(),
      };
    } catch {
      return {
        participantName: "",
        motifsInput: "",
        sessionKey: createSessionKey(),
      };
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<BootstrapResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(draft));
  }, [draft]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      const payload = {
        intent: "memoir-demo" as const,
        participantName: draft.participantName.trim() || copy.defaultParticipantName,
        locale,
        sessionKey: draft.sessionKey,
        seedMotifs: parseSeedMotifs(draft.motifsInput),
      };

      const result = await fetch("/api/livekit/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await result.json()) as BootstrapResponse;

      if (!result.ok && !data.sessionPreview) {
        throw new Error(data.message || copy.unexpectedResponse);
      }

      setResponse(data);
    } catch (submitError) {
      setResponse(null);
      setError(
        submitError instanceof Error ? submitError.message : copy.unknownBootstrapError,
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleRotateSessionKey() {
    setDraft((current) => ({
      ...current,
      sessionKey: createSessionKey(),
    }));
    setResponse(null);
    setError(null);
  }

  const currentStatus =
    error !== null ? "error" : (response?.status ?? null);

  let statusTitle = copy.idleTitle;
  let statusBody = copy.idleBody;

  if (currentStatus === "ready") {
    statusTitle = copy.liveTokenReadyTitle;
    statusBody = copy.liveTokenReadyBody;
  } else if (currentStatus === "not-configured") {
    statusTitle = copy.envBlockedTitle;
    statusBody = response?.message || copy.envBlockedBody;
  } else if (currentStatus === "auth-required") {
    statusTitle = copy.authBlockedTitle;
    statusBody = response?.message || copy.authBlockedBody;
  } else if (currentStatus === "error") {
    statusTitle = copy.error;
    statusBody = error ?? copy.idleBody;
  }

  const statusLabel =
    currentStatus === "ready"
      ? copy.ready
      : currentStatus === "not-configured"
        ? copy.notConfigured
        : currentStatus === "auth-required"
          ? copy.authRequired
          : currentStatus === "error"
            ? copy.error
            : null;

  return (
    <section className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[0.98fr_1.02fr]">
      <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
              {copy.label}
            </p>
            <h3 className="mt-3 text-2xl text-[var(--text-primary)]">
              {copy.title}
            </h3>
          </div>

          <div className="solar-mic-shell">
            <Orbit className="size-5 text-[var(--accent-gold)]" />
          </div>
        </div>

        <p className="mt-4 text-sm leading-8 text-[var(--text-secondary)]">
          {copy.body}
        </p>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              {copy.participantNameLabel}
            </span>
            <input
              value={draft.participantName}
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  participantName: event.target.value,
                }))
              }
              placeholder={copy.participantNamePlaceholder}
              className="rounded-[1.1rem] border border-white/10 bg-black/25 px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-amber-300/30 focus:bg-black/35"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              {copy.motifsLabel}
            </span>
            <textarea
              value={draft.motifsInput}
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  motifsInput: event.target.value,
                }))
              }
              placeholder={copy.motifsPlaceholder}
              rows={3}
              className="resize-none rounded-[1.1rem] border border-white/10 bg-black/25 px-4 py-3 text-sm leading-7 text-[var(--text-primary)] outline-none transition focus:border-amber-300/30 focus:bg-black/35"
            />
          </label>

          <div className="grid gap-3 rounded-[1.2rem] border border-white/10 bg-black/25 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {copy.sessionKeyLabel}
                </p>
                <p className="mt-2 break-all font-mono text-sm text-[var(--text-primary)]">
                  {draft.sessionKey}
                </p>
              </div>

              <button
                type="button"
                onClick={handleRotateSessionKey}
                className="secondary-button"
              >
                <RefreshCcw className="size-4" />
                {copy.rotateSeed}
              </button>
            </div>

            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              {copy.sessionKeyHint}
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-[1.1rem] border border-white/10 bg-black/25 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                {copy.localeLabel}
              </p>
              <p className="mt-2 text-sm text-[var(--text-primary)]">
                {localeLabels[locale]}
              </p>
            </div>

            <div className="rounded-[1.1rem] border border-white/10 bg-black/25 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                {copy.intentLabel}
              </p>
              <p className="mt-2 text-sm text-[var(--text-primary)]">
                {copy.intentValue}
              </p>
            </div>
          </div>

          <button type="submit" className="primary-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="size-4 animate-spin" />
            ) : (
              <KeyRound className="size-4" />
            )}
            {isSubmitting ? copy.submitBusy : copy.submitIdle}
          </button>
        </form>
      </div>

      <div className="grid gap-4">
        <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                {copy.statusLabel}
              </p>
              <h3 className="mt-3 text-xl text-[var(--text-primary)]">
                {statusTitle}
              </h3>
            </div>

            {statusLabel ? (
              <div
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em]",
                  currentStatus === "ready"
                    ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100/80"
                    : "border-amber-300/20 bg-amber-200/10 text-amber-100/80",
                )}
              >
                {currentStatus === "ready" ? (
                  <ShieldCheck className="size-4" />
                ) : (
                  <ShieldAlert className="size-4" />
                )}
                {statusLabel}
              </div>
            ) : null}
          </div>

          <p className="mt-4 text-sm leading-8 text-[var(--text-secondary)]">
            {statusBody}
          </p>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
            {copy.previewTitle}
          </p>

          {response?.sessionPreview ? (
            <div className="mt-4 grid gap-3">
              <div className="rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {copy.sessionSeedLabel}
                </p>
                <p className="mt-2 font-mono text-sm text-[var(--text-primary)]">
                  {response.sessionPreview.sessionSeed}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    {copy.roomLabel}
                  </p>
                  <p className="mt-2 font-mono text-sm text-[var(--text-primary)]">
                    {response.sessionPreview.roomName}
                  </p>
                </div>

                <div className="rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    {copy.identityLabel}
                  </p>
                  <p className="mt-2 font-mono text-sm text-[var(--text-primary)]">
                    {response.sessionPreview.participantIdentity}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {copy.motifsPreviewLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {response.sessionPreview.participantMetadata.seedMotifs.length > 0 ? (
                    response.sessionPreview.participantMetadata.seedMotifs.map((motif) => (
                      <span
                        key={motif}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]"
                      >
                        {motif}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-[var(--text-secondary)]">
                      {copy.none}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-sm leading-8 text-[var(--text-secondary)]">
              {copy.idleBody}
            </p>
          )}
        </div>

        {response?.connectionDetails ? (
          <div className="rounded-[1.6rem] border border-emerald-300/15 bg-emerald-300/6 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/75">
              {copy.connectionTitle}
            </p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-[1.1rem] border border-emerald-300/12 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {copy.serverUrlLabel}
                </p>
                <p className="mt-2 text-sm text-[var(--text-primary)]">
                  {response.connectionDetails.serverUrl}
                </p>
              </div>
              <div className="rounded-[1.1rem] border border-emerald-300/12 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {copy.tokenLabel}
                </p>
                <p className="mt-2 break-all font-mono text-sm text-[var(--text-primary)]">
                  {maskToken(response.connectionDetails.participantToken)}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                  {copy.tokenHint}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {response?.readiness ? (
          <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              {copy.productionRuleLabel}
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-secondary)]">
              {response.readiness.productionRule}
            </p>

            <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              {copy.futureMilestonesTitle}
            </p>
            <div className="mt-3 grid gap-3">
              {response.readiness.futureMilestones.map((step) => (
                <div
                  key={step}
                  className="rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3 text-sm leading-7 text-[var(--text-secondary)]"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
