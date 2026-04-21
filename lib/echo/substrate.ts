import { createHash } from "node:crypto";

import type { VideoGrant } from "livekit-server-sdk";
import { AccessToken } from "livekit-server-sdk";
import { z } from "zod";

import { defaultLocale, locales, type Locale } from "@/lib/i18n";

export const echoTokenRequestSchema = z.object({
  intent: z.enum(["memoir-demo", "memoir-session"]).default("memoir-demo"),
  participantName: z.string().trim().min(1).max(80).default("Memoir Guest"),
  locale: z.enum(locales).default(defaultLocale),
  sessionKey: z.string().trim().min(8).max(120).optional(),
  seedMotifs: z.array(z.string().trim().min(1).max(64)).max(5).default([]),
});

export type EchoTokenRequest = z.infer<typeof echoTokenRequestSchema>;

const requiredEnvKeys = [
  "LIVEKIT_URL",
  "LIVEKIT_API_KEY",
  "LIVEKIT_API_SECRET",
] as const;

type RequiredEnvKey = (typeof requiredEnvKeys)[number];

export type EchoReadiness = {
  status: "ready" | "not-configured" | "auth-required";
  phase: "echo-substrate-v1";
  endpoint: "/api/livekit/token";
  mode: "token-endpoint";
  issuanceAllowed: boolean;
  checks: Record<RequiredEnvKey, boolean>;
  missing: RequiredEnvKey[];
  productionRule: string;
  futureMilestones: string[];
};

type EchoSessionSeed = {
  sessionSeed: string;
  roomName: string;
  participantIdentity: string;
  participantName: string;
  participantMetadataObject: {
    source: "echo-demo-page";
    phase: "echo-substrate-v1";
    locale: Locale;
    intent: EchoTokenRequest["intent"];
    sessionSeed: string;
    seedMotifs: string[];
  };
  participantMetadata: string;
};

export type EchoSessionPreview = {
  sessionSeed: string;
  roomName: string;
  participantIdentity: string;
  participantName: string;
  participantMetadata: EchoSessionSeed["participantMetadataObject"];
};

export function getEchoReadiness(): EchoReadiness {
  const checks = {
    LIVEKIT_URL: Boolean(process.env.LIVEKIT_URL),
    LIVEKIT_API_KEY: Boolean(process.env.LIVEKIT_API_KEY),
    LIVEKIT_API_SECRET: Boolean(process.env.LIVEKIT_API_SECRET),
  };

  const missing = requiredEnvKeys.filter((key) => !checks[key]);
  const status =
    missing.length > 0
      ? "not-configured"
      : process.env.NODE_ENV === "development"
        ? "ready"
        : "auth-required";

  return {
    status,
    phase: "echo-substrate-v1",
    endpoint: "/api/livekit/token",
    mode: "token-endpoint",
    issuanceAllowed: status === "ready",
    checks,
    missing,
    productionRule:
      "Require an authentication layer before issuing LiveKit tokens in production.",
    futureMilestones: [
      "Wire the frontend token consumer and room connection flow.",
      "Attach authenticated operator and session boundaries before live usage.",
      "Add transcript-to-chapter orchestration only after realtime capture is stable.",
    ],
  };
}

export function createEchoSessionSeed(
  input: EchoTokenRequest,
): EchoSessionSeed {
  const stableKey = input.sessionKey ?? crypto.randomUUID();
  const stableSuffix = createHash("sha256")
    .update(stableKey)
    .digest("hex")
    .slice(0, 12);
  const roomName = `memento-echo-${stableSuffix}`;
  const participantIdentity = `echo-user-${stableSuffix}`;
  const participantName = input.participantName.trim();
  const participantMetadataObject = {
    source: "echo-demo-page",
    phase: "echo-substrate-v1",
    locale: input.locale,
    intent: input.intent,
    sessionSeed: stableSuffix,
    seedMotifs: input.seedMotifs,
  } as const;
  const participantMetadata = JSON.stringify(participantMetadataObject);

  return {
    sessionSeed: stableSuffix,
    roomName,
    participantIdentity,
    participantName,
    participantMetadataObject,
    participantMetadata,
  };
}

export function createEchoSessionPreview(
  input: EchoTokenRequest,
): EchoSessionPreview {
  const session = createEchoSessionSeed(input);

  return {
    sessionSeed: session.sessionSeed,
    roomName: session.roomName,
    participantIdentity: session.participantIdentity,
    participantName: session.participantName,
    participantMetadata: session.participantMetadataObject,
  };
}

function createEchoVideoGrant(roomName: string): VideoGrant {
  return {
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
  };
}

export async function issueEchoParticipantToken(
  input: EchoTokenRequest,
): Promise<{
  sessionPreview: EchoSessionPreview;
  connectionDetails: {
    serverUrl: string;
    roomName: string;
    participantIdentity: string;
    participantName: string;
    participantToken: string;
  };
  substrate: {
    phase: "echo-substrate-v1";
    authRequiredInProduction: true;
    intent: EchoTokenRequest["intent"];
    seedMotifs: string[];
  };
}> {
  const readiness = getEchoReadiness();

  if (readiness.status !== "ready") {
    throw new Error("ECHO LiveKit substrate is not configured.");
  }

  const session = createEchoSessionSeed(input);
  const accessToken = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,
    {
      identity: session.participantIdentity,
      name: session.participantName,
      metadata: session.participantMetadata,
      ttl: "15m",
    },
  );

  accessToken.addGrant(createEchoVideoGrant(session.roomName));

  return {
    sessionPreview: {
      sessionSeed: session.sessionSeed,
      roomName: session.roomName,
      participantIdentity: session.participantIdentity,
      participantName: session.participantName,
      participantMetadata: session.participantMetadataObject,
    },
    connectionDetails: {
      serverUrl: process.env.LIVEKIT_URL!,
      roomName: session.roomName,
      participantIdentity: session.participantIdentity,
      participantName: session.participantName,
      participantToken: await accessToken.toJwt(),
    },
    substrate: {
      phase: "echo-substrate-v1",
      authRequiredInProduction: true,
      intent: input.intent,
      seedMotifs: input.seedMotifs,
    },
  };
}
