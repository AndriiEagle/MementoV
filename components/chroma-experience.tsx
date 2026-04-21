"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Pause,
  Play,
  RotateCcw,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";

import {
  chromaExperienceCopy,
  type ChromaSceneId,
} from "@/content/editorial/chroma-experience";
import { chromaEngineCopy } from "@/content/editorial/chroma-engine";

import { useLocale } from "@/components/locale-provider";
import {
  createChromaAmbientController,
  type ChromaAudioPreset,
} from "@/lib/chroma/ambient-audio";
import { cn } from "@/lib/utils";

type SceneOption = {
  id: string;
  label: string;
  effect: string;
};

type Scene = {
  id: ChromaSceneId;
  time: string;
  title: string;
  body: string;
  note: string;
  warmth: string;
  stageGlow: string;
  sceneGlow: string;
  options: SceneOption[];
};

type EngineSceneOption = {
  id: string;
  handoff: string;
};

type EngineScene = {
  id: ChromaSceneId;
  audioPreset: ChromaAudioPreset;
  audioTitle: string;
  audioBody: string;
  audioCue: string;
  closing: string;
  options: EngineSceneOption[];
};

type ScriptBeat = {
  id: string;
  text: string;
  dwellMs: number;
};

const initialChoices: Record<ChromaSceneId, string> = {
  platform: "breath",
  window: "memory",
  trace: "voice",
};

export function ChromaExperience() {
  const { locale, text } = useLocale();
  const copy = chromaExperienceCopy[locale];
  const engineCopy = chromaEngineCopy[locale];
  const scenes = copy.scenes as Scene[];
  const engineScenes = engineCopy.scenes as EngineScene[];

  const [started, setStarted] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [furthestUnlockedSceneIndex, setFurthestUnlockedSceneIndex] = useState(0);
  const [revealedBeatCount, setRevealedBeatCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [choices, setChoices] =
    useState<Record<ChromaSceneId, string>>(initialChoices);

  const audioControllerRef = useRef<ReturnType<
    typeof createChromaAmbientController
  > | null>(null);

  const scene = scenes[sceneIndex];
  const engineScene = engineScenes[sceneIndex];
  const selectedOption =
    scene.options.find((option) => option.id === choices[scene.id]) ??
    scene.options[0];
  const selectedHandoff =
    engineScene.options.find((option) => option.id === selectedOption.id) ??
    engineScene.options[0];

  const scriptBeats: ScriptBeat[] = [
    { id: `${scene.id}-title`, text: scene.title, dwellMs: 1300 },
    { id: `${scene.id}-body`, text: scene.body, dwellMs: 2400 },
    { id: `${scene.id}-note`, text: scene.note, dwellMs: 2000 },
    { id: `${scene.id}-effect`, text: selectedOption.effect, dwellMs: 2200 },
    { id: `${scene.id}-closing`, text: engineScene.closing, dwellMs: 2200 },
  ];

  const visibleBeatCount = started
    ? prefersReducedMotion
      ? scriptBeats.length
      : revealedBeatCount
    : 0;
  const sceneComplete = visibleBeatCount >= scriptBeats.length;
  const currentBeatDuration =
    scriptBeats[Math.max(visibleBeatCount - 1, 0)]?.dwellMs ?? scriptBeats[0].dwellMs;
  const beatProgress = Math.round((visibleBeatCount / scriptBeats.length) * 100);
  const journeyProgress = Math.round(
    ((sceneIndex + beatProgress / 100) / scenes.length) * 100,
  );
  const echoHref = `/echo?seedMotifs=${encodeURIComponent(
    scenes
      .map((entry, index) => {
        const handoffScene = engineScenes[index];
        const chosen =
          handoffScene.options.find((option) => option.id === choices[entry.id]) ??
          handoffScene.options[0];

        return chosen.handoff;
      })
      .join(", "),
  )}`;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!started || prefersReducedMotion || !isPlaying) {
      return;
    }

    if (revealedBeatCount >= scriptBeats.length) {
      return;
    }

    const timer = window.setTimeout(() => {
      setRevealedBeatCount((current) => Math.min(current + 1, scriptBeats.length));
    }, currentBeatDuration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    currentBeatDuration,
    isPlaying,
    prefersReducedMotion,
    revealedBeatCount,
    scriptBeats.length,
    started,
  ]);

  useEffect(() => {
    return () => {
      if (audioControllerRef.current) {
        void audioControllerRef.current.dispose();
        audioControllerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioControllerRef.current) {
      return;
    }

    audioControllerRef.current.setPreset(engineScene.audioPreset);
  }, [engineScene.audioPreset]);

  useEffect(() => {
    if (!audioControllerRef.current) {
      return;
    }

    void audioControllerRef.current.setActive(started && soundEnabled);
  }, [soundEnabled, started]);

  function beginScene() {
    setRevealedBeatCount(prefersReducedMotion ? scriptBeats.length : 1);
    setIsPlaying(!prefersReducedMotion);
    setStarted(true);
  }

  function handleSelectScene(index: number) {
    if (index > furthestUnlockedSceneIndex) {
      return;
    }

    if (started) {
      setRevealedBeatCount(prefersReducedMotion ? scriptBeats.length : 1);
      setIsPlaying(!prefersReducedMotion);
    }

    setSceneIndex(index);
  }

  function handleContinue() {
    const nextIndex = Math.min(sceneIndex + 1, scenes.length - 1);
    setFurthestUnlockedSceneIndex((current) => Math.max(current, nextIndex));
    handleSelectScene(nextIndex);
  }

  function handleReplayScene() {
    if (!started) {
      beginScene();
      return;
    }

    setRevealedBeatCount(prefersReducedMotion ? scriptBeats.length : 1);
    setIsPlaying(!prefersReducedMotion);
  }

  function handleRevealNext() {
    if (!started) {
      beginScene();
      return;
    }

    setRevealedBeatCount((current) => Math.min(current + 1, scriptBeats.length));
  }

  async function handleToggleSound() {
    let controller = audioControllerRef.current;

    if (!controller) {
      controller = createChromaAmbientController();
      audioControllerRef.current = controller;

      if (!controller.supported) {
        setAudioAvailable(false);
        return;
      }

      controller.setPreset(engineScene.audioPreset);
    }

    const nextSoundEnabled = !soundEnabled;
    setSoundEnabled(nextSoundEnabled);
    await controller.setActive(started && nextSoundEnabled);
  }

  return (
    <section
      className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-black/40 shadow-[0_30px_100px_rgba(0,0,0,0.42)]"
      style={{
        backgroundImage: `${scene.sceneGlow}, linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.72))`,
      }}
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `${scene.stageGlow}, radial-gradient(circle at 50% 120%, rgba(0,0,0,0.06), rgba(0,0,0,0.42) 42%, rgba(0,0,0,0.84) 100%)`,
        }}
      />

      <div className="chroma-orb" />

      <div className="relative flex min-h-[84vh] flex-col justify-between px-4 py-4 lg:px-6 lg:py-6">
        <div className="flex items-start justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] transition hover:bg-white/8 hover:text-white"
          >
            {text.chromaPage.back}
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 sm:flex">
              {scenes.map((entry, index) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => handleSelectScene(index)}
                  disabled={index > furthestUnlockedSceneIndex}
                  className={cn(
                    "inline-flex size-3 rounded-full border transition",
                    sceneIndex === index
                      ? "border-amber-200/60 bg-amber-200/70 shadow-[0_0_18px_rgba(228,200,118,0.45)]"
                      : index > furthestUnlockedSceneIndex
                        ? "border-white/8 bg-white/5 opacity-35"
                        : "border-white/15 bg-white/15 hover:bg-white/30",
                  )}
                  aria-label={`${copy.sceneButtonAriaPrefix} ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleToggleSound}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] transition hover:bg-white/8 hover:text-white"
            >
              {soundEnabled ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              {soundEnabled ? engineCopy.audioOffCta : engineCopy.audioOnCta}
            </button>
          </div>
        </div>

        <div className="pointer-events-none flex-1" />

        <div className="mx-auto w-full max-w-4xl rounded-[2.2rem] border border-white/10 bg-black/50 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:p-7">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                {copy.headerLabel}
              </p>
              {!started ? (
                <h2 className="mt-4 font-[family-name:var(--font-narrative)] text-4xl leading-[1.02] text-[var(--text-primary)] lg:text-5xl">
                  {scene.title}
                </h2>
              ) : null}
            </div>

            <div className="min-w-[8rem] text-left sm:text-right">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                {scene.time}
              </div>
              <div className="mt-2 text-sm text-[var(--text-secondary)]">
                {sceneIndex + 1}/{scenes.length} · {journeyProgress}%
              </div>
            </div>
          </div>

          <div className="mb-6 h-px bg-white/10">
            <div className="chroma-progress-fill h-px" style={{ width: `${beatProgress}%` }} />
          </div>

          {!started ? (
            <div className="max-w-3xl">
              <p className="text-base leading-8 text-[var(--text-secondary)] lg:text-lg">
                {scene.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {scene.options.map((option) => {
                  const isActive = option.id === selectedOption.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setChoices((current) => ({
                          ...current,
                          [scene.id]: option.id,
                        }))
                      }
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition",
                        isActive
                          ? "border-amber-200/24 bg-amber-200/10 text-white"
                          : "border-white/10 bg-white/5 text-[var(--text-secondary)] hover:bg-white/8 hover:text-white",
                      )}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button type="button" onClick={beginScene} className="primary-button">
                  <Play className="size-4" />
                  {engineCopy.startCta}
                </button>
                <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)]">
                  {scene.note}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {scriptBeats.slice(0, visibleBeatCount).map((beat, index) => (
                  <p
                    key={beat.id}
                    className={cn(
                      "max-w-3xl text-pretty text-[var(--text-secondary)] transition duration-500",
                      index === 0
                        ? "font-[family-name:var(--font-narrative)] text-3xl leading-[1.05] text-[var(--text-primary)] lg:text-4xl"
                        : "text-base leading-8 lg:text-lg",
                    )}
                  >
                    {beat.text}
                  </p>
                ))}

                {visibleBeatCount < scriptBeats.length ? (
                  <div className="max-w-xl space-y-2 pt-2 opacity-55">
                    <div className="h-2 rounded-full bg-white/8" />
                    <div className="h-2 w-4/5 rounded-full bg-white/8" />
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-2">
                {scene.options.map((option) => {
                  const isActive = option.id === selectedOption.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setChoices((current) => ({
                          ...current,
                          [scene.id]: option.id,
                        }))
                      }
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition",
                        isActive
                          ? "border-amber-200/24 bg-amber-200/10 text-white"
                          : "border-white/10 bg-white/5 text-[var(--text-secondary)] hover:bg-white/8 hover:text-white",
                      )}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying((current) => !current)}
                  className="secondary-button"
                  disabled={prefersReducedMotion}
                >
                  {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                  {isPlaying ? engineCopy.pauseCta : engineCopy.resumeCta}
                </button>

                <button type="button" onClick={handleRevealNext} className="secondary-button">
                  <SkipForward className="size-4" />
                  {engineCopy.revealNextCta}
                </button>

                <button type="button" onClick={handleReplayScene} className="secondary-button">
                  <RotateCcw className="size-4" />
                  {engineCopy.replaySceneCta}
                </button>

                {sceneIndex < scenes.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={!sceneComplete}
                    className={cn(
                      "primary-button",
                      !sceneComplete && "pointer-events-none opacity-50",
                    )}
                  >
                    {copy.continueCta}
                    <ArrowRight className="size-4" />
                  </button>
                ) : sceneComplete ? (
                  <Link href={echoHref} className="primary-button">
                    {copy.crossIntoEchoCta}
                    <ArrowRight className="size-4" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="primary-button pointer-events-none opacity-50"
                  >
                    {copy.crossIntoEchoCta}
                    <ArrowRight className="size-4" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {selectedHandoff.handoff}
                </span>
                <span
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em]",
                    soundEnabled
                      ? "border-emerald-300/18 bg-emerald-300/10 text-emerald-100/80"
                      : "border-white/10 bg-white/5 text-[var(--text-muted)]",
                  )}
                >
                  {soundEnabled ? engineCopy.audioLive : engineCopy.audioMuted}
                </span>
              </div>

              {!audioAvailable ? (
                <p className="text-sm leading-7 text-amber-100/75">
                  {engineCopy.audioUnavailable}
                </p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
