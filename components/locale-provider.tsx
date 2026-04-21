"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  copy,
  defaultLocale,
  locales,
  type Locale,
} from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  text: (typeof copy)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const storageKey = "memento-vivere-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return defaultLocale;
    }

    const stored = window.localStorage.getItem(storageKey);
    return stored && locales.includes(stored as Locale)
      ? (stored as Locale)
      : defaultLocale;
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      text: copy[locale],
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }

  return context;
}
