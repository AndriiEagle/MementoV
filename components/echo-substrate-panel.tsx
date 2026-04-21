"use client";

import { useEffect, useState } from "react";
import { LoaderCircle, ShieldAlert, ShieldCheck } from "lucide-react";

import { echoSubstratePanelCopy } from "@/content/editorial/echo-substrate-panel";

import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

type ReadinessPayload = {
  status: "ready" | "not-configured" | "auth-required";
  phase: string;
  endpoint: string;
  mode: string;
  issuanceAllowed: boolean;
  checks: Record<string, boolean>;
  missing: string[];
  productionRule: string;
  futureMilestones: string[];
};

export function EchoSubstratePanel() {
  const { locale } = useLocale();
  const copy = echoSubstratePanelCopy[locale];
  const [payload, setPayload] = useState<ReadinessPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch("/api/livekit/token", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(copy.loadFailed);
        }

        const data = (await response.json()) as ReadinessPayload;
        if (!cancelled) {
          setPayload(data);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(
            loadError instanceof Error ? loadError.message : copy.unknownReadinessError,
          );
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [copy.loadFailed, copy.unknownReadinessError]);

  if (error) {
    return (
      <section className="rounded-[1.8rem] border border-red-300/15 bg-red-300/6 p-6">
        <p className="text-xs uppercase tracking-[0.24em] text-red-100/75">
          {copy.errorLabel}
        </p>
        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
          {error}
        </p>
      </section>
    );
  }

  if (!payload) {
    return (
      <section className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-3 text-[var(--text-secondary)]">
          <LoaderCircle className="size-4 animate-spin" />
          <span className="text-sm">{copy.loading}</span>
        </div>
      </section>
    );
  }

  const isReady = payload.status === "ready";
  const statusText = isReady
    ? copy.ready
    : payload.status === "auth-required"
      ? copy.authRequired
      : copy.notConfigured;

  return (
    <section className="rounded-[2rem] border border-white/10 bg-black/30 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
            {copy.label}
          </p>
          <h3 className="mt-3 text-2xl text-[var(--text-primary)]">
            {copy.title}
          </h3>
        </div>

        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em]",
            isReady
              ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100/80"
              : "border-amber-300/20 bg-amber-200/10 text-amber-100/80",
          )}
        >
          {isReady ? (
            <ShieldCheck className="size-4" />
          ) : (
            <ShieldAlert className="size-4" />
          )}
          {statusText}
        </div>
      </div>

      <p className="mt-5 text-sm leading-8 text-[var(--text-secondary)]">
        {copy.body}
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
            {copy.currentChecksTitle}
          </p>
          <div className="mt-4 grid gap-3">
            {Object.entries(payload.checks).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3 text-sm"
              >
                <span className="text-[var(--text-primary)]">{key}</span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em]",
                    value
                      ? "bg-emerald-300/10 text-emerald-100/80"
                      : "bg-amber-200/10 text-amber-100/80",
                  )}
                >
                  {value ? copy.present : copy.missing}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              {copy.endpointTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
              {copy.endpointGetLine}
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              {copy.endpointPostLine}
            </p>
            {payload.status === "auth-required" ? (
              <p className="mt-2 text-sm leading-7 text-amber-100/75">
                {copy.authRequiredBody}
              </p>
            ) : null}
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              {copy.productionRuleTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
              {payload.productionRule}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
          {copy.nextMilestonesTitle}
        </p>
        <div className="mt-4 grid gap-3">
          {payload.futureMilestones.map((step) => (
            <div
              key={step}
              className="rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3 text-sm leading-7 text-[var(--text-secondary)]"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
