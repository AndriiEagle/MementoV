"use client";

import Link from "next/link";

import { useLocale } from "@/components/locale-provider";

const productLinks = [
  { href: "/chroma", key: "chroma" },
  { href: "/echo", key: "echo" },
  { href: "/science", key: "science" },
];

const proofLinks = [
  { href: "/for-family", key: "family" },
  { href: "/for-grants", key: "grants" },
];

export function SiteFooter() {
  const { text } = useLocale();

  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-white/10 bg-black/20 px-6 py-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Memento Vivere
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
            {text.footer.body}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
            {text.footer.product}
          </p>
          <div className="mt-4 grid gap-2 text-sm text-[var(--text-secondary)]">
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit rounded-full px-3 py-2 transition hover:bg-white/8 hover:text-white"
              >
                {text.nav[link.key as keyof typeof text.nav]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
            {text.footer.proof}
          </p>
          <div className="mt-4 grid gap-2 text-sm text-[var(--text-secondary)]">
            {proofLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit rounded-full px-3 py-2 transition hover:bg-white/8 hover:text-white"
              >
                {text.nav[link.key as keyof typeof text.nav]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
