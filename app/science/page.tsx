"use client";

import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

import { scienceProofCopy } from "@/content/editorial/science-proof";

import { useLocale } from "@/components/locale-provider";

export default function SciencePage() {
  const { locale, text } = useLocale();
  const editorial = scienceProofCopy[locale];

  return (
    <main className="px-4 pb-24 pt-8 sm:px-6">
      <section className="mx-auto max-w-5xl rounded-[2.4rem] border border-white/10 bg-white/4 px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:px-10">
        <Link href="/" className="secondary-button">
          <ArrowLeft className="size-4" />
          {text.sciencePage.back}
        </Link>

        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
          {text.sciencePage.label}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-narrative)] text-5xl text-[var(--text-primary)]">
          {text.sciencePage.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
          {text.sciencePage.body}
        </p>

        <div className="mt-10 grid gap-4">
          {editorial.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.8rem] border border-white/10 bg-black/25 p-6"
            >
              <h2 className="text-2xl text-[var(--text-primary)]">
                {pillar.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-8 text-[var(--text-secondary)]">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[1.8rem] border border-white/10 bg-black/25 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
            {editorial.operatingTitle}
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {editorial.operatingClaims.map((claim) => (
              <article
                key={claim.title}
                className="rounded-[1.2rem] border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg text-[var(--text-primary)]">
                  {claim.title}
                </h3>
                <p className="mt-3 text-sm leading-8 text-[var(--text-secondary)]">
                  {claim.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.8rem] border border-emerald-300/12 bg-emerald-300/6 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">
              {text.sciencePage.provingTitle}
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-secondary)]">
              {text.sciencePage.provingBody}
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-amber-300/12 bg-amber-200/6 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-100/70">
              {text.sciencePage.laterTitle}
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-secondary)]">
              {text.sciencePage.laterBody}
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[1.8rem] border border-amber-300/12 bg-amber-200/6 p-6">
          <div className="flex items-center gap-3">
            <ShieldAlert className="size-4 text-amber-100/75" />
            <p className="text-xs uppercase tracking-[0.24em] text-amber-100/70">
              {editorial.boundariesTitle}
            </p>
          </div>
          <div className="mt-4 grid gap-3">
            {editorial.boundaries.map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-amber-300/12 bg-black/20 px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
