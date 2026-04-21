"use client";

import { chromaPreviewCopy } from "@/content/editorial/chroma-preview";

import { useLocale } from "@/components/locale-provider";

export function ChromaPreview() {
  const { locale } = useLocale();
  const copy = chromaPreviewCopy[locale];

  return (
    <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      <div className="rounded-[1.5rem] border border-white/8 bg-black/35 p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
          {copy.label}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-narrative)] text-2xl text-[var(--text-primary)]">
          {copy.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
          {copy.body}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-emerald-300/15 bg-emerald-300/6 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">
            {copy.colorLogicTitle}
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
            {copy.colorLogicBody}
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-amber-300/15 bg-amber-200/6 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-amber-100/70">
            {copy.conversionLogicTitle}
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
            {copy.conversionLogicBody}
          </p>
        </div>
      </div>
    </div>
  );
}
