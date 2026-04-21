"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { EchoBootstrap } from "@/components/echo-bootstrap";
import { EchoDemo } from "@/components/echo-demo";
import { EchoSubstratePanel } from "@/components/echo-substrate-panel";
import { useLocale } from "@/components/locale-provider";

/*
  FUTURE ECHO IMPLEMENTATION GUIDE

  1. The bootstrap below now talks to the real /api/livekit/token contract.
  2. Next, replace the bootstrap response preview with an actual room join and audio publish flow.
  3. Persist only finalized, reconciled transcript turns instead of raw noisy interim events.
  4. Send transcript payloads into a server-side biographer flow for chapter shaping.
  5. Store chapter jobs, versions, fact-claims, and unresolved topics in Postgres.
  6. Keep retrieval memory secondary. Postgres remains the canonical truth model.
  7. Add operator review, family-share consent, and export pathways after the chapter contract is stable.
*/

export default function EchoPage() {
  const { text } = useLocale();

  return (
    <main className="px-4 pb-24 pt-8 sm:px-6">
      <section className="mx-auto max-w-5xl rounded-[2.4rem] border border-white/10 bg-white/4 px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:px-10">
        <Link href="/" className="secondary-button">
          <ArrowLeft className="size-4" />
          {text.echoPage.back}
        </Link>

        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
          {text.echoPage.label}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-narrative)] text-5xl text-[var(--text-primary)]">
          {text.echoPage.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
          {text.echoPage.body}
        </p>

        <div className="mt-10">
          <EchoBootstrap />
        </div>

        <div className="mt-8">
          <EchoDemo compact />
        </div>

        <div className="mt-8">
          <EchoSubstratePanel />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.8rem] border border-amber-300/12 bg-amber-200/6 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-100/70">
              {text.echoPage.honestTitle}
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-secondary)]">
              {text.echoPage.honestBody}
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-emerald-300/12 bg-emerald-300/6 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">
              {text.echoPage.whyTitle}
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-secondary)]">
              {text.echoPage.whyBody}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
