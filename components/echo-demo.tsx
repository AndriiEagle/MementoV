"use client";

import { useState, type CSSProperties } from "react";
import {
  AudioLines,
  BookOpenText,
  CircleDotDashed,
  Sparkles,
} from "lucide-react";

import { echoDemoCopy } from "@/content/editorial/echo-demo";

import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

type DemoState = "listening" | "transcribing" | "chapter";

type EchoDemoProps = {
  compact?: boolean;
};

export function EchoDemo({ compact = false }: EchoDemoProps) {
  const { locale } = useLocale();
  const copy = echoDemoCopy[locale];
  const [state, setState] = useState<DemoState>("listening");

  return (
    <div
      className={cn(
        "grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)]",
        compact ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1fr_1.08fr]",
      )}
    >
      <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
              {copy.stateLabel}
            </p>
            <p className="mt-2 text-lg text-[var(--text-primary)]">
              {copy.states[state].label}
            </p>
          </div>
          <div className="solar-mic-shell">
            <AudioLines className="size-5 text-[var(--accent-gold)]" />
          </div>
        </div>

        <div
          className={cn(
            "mt-6 rounded-[1.5rem] border border-white/10 bg-gradient-to-br p-5",
            copy.states[state].accent,
          )}
        >
          <div className="flex h-40 items-end justify-center gap-2 rounded-[1.2rem] border border-white/10 bg-black/25 px-6 py-5">
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className="demo-bar-animate"
                style={
                  {
                    animationDelay: `${index * 120}ms`,
                    height: `${28 + (index % 4) * 18}px`,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {(["listening", "transcribing", "chapter"] as DemoState[]).map(
              (mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setState(mode)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition",
                    state === mode
                      ? "border-white/20 bg-white/12 text-white"
                      : "border-white/10 bg-black/15 text-white/65 hover:bg-white/8 hover:text-white",
                  )}
                >
                  {copy.states[mode].label}
                </button>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
          <div className="flex items-center gap-3">
            <CircleDotDashed className="size-4 text-[var(--accent-green)]" />
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
              {copy.liveContractLabel}
            </p>
          </div>
          <h3 className="mt-3 text-xl text-[var(--text-primary)]">
            {copy.states[state].title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
            {copy.states[state].body}
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
          <div className="flex items-center gap-3">
            <BookOpenText className="size-4 text-[var(--accent-gold)]" />
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
              {copy.futureChapterLabel}
            </p>
          </div>
          <h3 className="mt-3 font-[family-name:var(--font-narrative)] text-2xl text-[var(--text-primary)]">
            {copy.futureChapterTitle}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
            {copy.futureChapterBody}
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-amber-300/15 bg-amber-100/6 p-5">
          <div className="flex items-center gap-3">
            <Sparkles className="size-4 text-[var(--accent-gold)]" />
            <p className="text-xs uppercase tracking-[0.28em] text-amber-100/70">
              {copy.whyDemoLabel}
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
            {copy.whyDemoBody}
          </p>
        </div>
      </div>
    </div>
  );
}
