"use client";

import { localeLabels, locales } from "@/lib/i18n";

import { useLocale } from "@/components/locale-provider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-full border border-white/10 bg-black/25 p-1">
      {locales.map((entry) => (
        <button
          key={entry}
          type="button"
          onClick={() => setLocale(entry)}
          className={`rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
            locale === entry
              ? "bg-white/12 text-white"
              : "text-white/60 hover:bg-white/8 hover:text-white"
          }`}
        >
          {localeLabels[entry]}
        </button>
      ))}
    </div>
  );
}
