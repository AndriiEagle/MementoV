"use client";

import Link from "next/link";
import { AudioLines, MoonStar, ShieldCheck } from "lucide-react";

import { AmbientSun } from "@/components/ambient-sun";
import { useLocale } from "@/components/locale-provider";

export default function Home() {
  const { text } = useLocale();

  const proofLinks = [
    {
      href: "/science",
      icon: ShieldCheck,
      title: text.home.proofScienceTitle,
      body: text.home.proofScienceBody,
    },
    {
      href: "/for-family",
      icon: AudioLines,
      title: text.home.proofFamilyTitle,
      body: text.home.proofFamilyBody,
    },
    {
      href: "/for-grants",
      icon: MoonStar,
      title: text.home.proofGrantTitle,
      body: text.home.proofGrantBody,
    },
  ];

  return (
    <main className="px-4 pb-12 pt-8 sm:px-6">
      <section className="mx-auto grid min-h-[72vh] max-w-6xl gap-10 rounded-[2.8rem] border border-white/10 bg-white/4 px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:grid-cols-[1fr_0.92fr] lg:px-10 lg:py-14">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200/15 bg-amber-200/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-amber-100/75">
            {text.home.badge}
          </div>

          <h1 className="mt-8 max-w-3xl font-[family-name:var(--font-narrative)] text-5xl leading-[0.95] text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
            {text.home.title}
          </h1>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/chroma" className="primary-button">
              <MoonStar className="size-4" />
              {text.home.ctaChroma}
            </Link>
            <Link href="/echo" className="secondary-button">
              <AudioLines className="size-4" />
              {text.home.ctaEcho}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {proofLinks.map(({ href, title }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] transition hover:bg-white/8 hover:text-white"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid place-items-center rounded-[2.2rem] border border-white/10 bg-black/20 px-6 py-8">
          <div className="rounded-[2rem] border border-white/10 bg-black/20 px-6 py-8">
            <AmbientSun />
          </div>
        </div>
      </section>
    </main>
  );
}
