"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, HeartHandshake } from "lucide-react";

import { familyProofCopy } from "@/content/editorial/family-proof";

import { useLocale } from "@/components/locale-provider";

export default function ForFamilyPage() {
  const { locale, text } = useLocale();
  const editorial = familyProofCopy[locale];

  return (
    <main className="px-4 pb-24 pt-8 sm:px-6">
      <section className="mx-auto max-w-5xl rounded-[2.4rem] border border-white/10 bg-white/4 px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:px-10">
        <Link href="/" className="secondary-button">
          <ArrowLeft className="size-4" />
          {text.familyPage.back}
        </Link>

        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
          {text.familyPage.label}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-narrative)] text-5xl text-[var(--text-primary)]">
          {text.familyPage.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
          {text.familyPage.body}
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-black/25 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              {text.familyPage.trustTitle}
            </p>
            <div className="mt-4 grid gap-3">
              {editorial.promises.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-amber-300/12 bg-amber-200/6 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-100/70">
              {text.familyPage.demoTruthTitle}
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--text-secondary)]">
              {text.familyPage.demoTruthBody}
            </p>
            <Link href="/echo" className="primary-button mt-6">
              {text.familyPage.demoTruthCta}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-[1.8rem] border border-white/10 bg-black/25 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
            {editorial.buyerLogicTitle}
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {editorial.buyerLogic.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.2rem] border border-white/10 bg-white/5 p-5"
              >
                <h2 className="text-lg text-[var(--text-primary)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-8 text-[var(--text-secondary)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.8rem] border border-emerald-300/12 bg-emerald-300/6 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">
              {editorial.flowTitle}
            </p>
            <div className="mt-4 grid gap-3">
              {editorial.flowSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[1.2rem] border border-emerald-300/12 bg-black/20 p-4"
                >
                  <h3 className="text-base text-[var(--text-primary)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-black/25 p-6">
            <div className="flex items-center gap-3">
              <HeartHandshake className="size-4 text-[var(--accent-gold)]" />
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                {editorial.noPressureTitle}
              </p>
            </div>
            <div className="mt-4 grid gap-3">
              {editorial.noPressure.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[1.8rem] border border-emerald-300/12 bg-emerald-300/6 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">
            {text.familyPage.commercialTitle}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-8 text-[var(--text-secondary)]">
            {text.familyPage.commercialBody}
          </p>
        </div>
      </section>
    </main>
  );
}
