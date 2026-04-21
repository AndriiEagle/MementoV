"use client";

import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import { useLocale } from "@/components/locale-provider";

const links = [
  { href: "/", key: "home" },
  { href: "/chroma", key: "chroma" },
  { href: "/echo", key: "echo" },
  { href: "/science", key: "science" },
];

export function SiteHeader() {
  const { text } = useLocale();

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90"
        >
          Memento Vivere
        </Link>

        <nav className="hidden items-center gap-2 text-sm text-white/70 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/8 hover:text-white"
            >
              {text.nav[link.key as keyof typeof text.nav]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/science"
            className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/75 transition hover:bg-white/8 hover:text-white lg:hidden"
          >
            {text.nav.science}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
