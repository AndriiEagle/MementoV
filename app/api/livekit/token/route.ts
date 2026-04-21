import { NextResponse } from "next/server";

import {
  createEchoSessionPreview,
  echoTokenRequestSchema,
  getEchoReadiness,
  issueEchoParticipantToken,
} from "@/lib/echo/substrate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

/*
  ECHO SUBSTRATE PHASE 1

  This route now provides a real substrate contract:
  - GET returns readiness and configuration state
  - POST validates an ECHO session request and issues a real token when env is configured

  It still does not imply that the full memoir runtime is complete.
  Frontend connection, transcript capture, and chapter orchestration remain later phases.
*/

export async function GET() {
  return NextResponse.json(getEchoReadiness(), {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(req: Request) {
  const readiness = getEchoReadiness();

  let json: unknown = {};
  try {
    json = await req.json();
  } catch {
    json = {};
  }

  const parsed = echoTokenRequestSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        status: "invalid-request",
        message: "The ECHO token request payload did not match the substrate contract.",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const sessionPreview = createEchoSessionPreview(parsed.data);

  if (readiness.status !== "ready") {
    return NextResponse.json(
      {
        status: readiness.status,
        message:
          readiness.status === "not-configured"
            ? "The ECHO token endpoint is real, but the LiveKit environment variables are not configured in this environment yet."
            : "The ECHO token endpoint is implemented, but token issuance is blocked outside development until an authentication layer is added.",
        readiness,
        sessionPreview,
      },
      { status: readiness.status === "not-configured" ? 503 : 403 },
    );
  }

  const payload = await issueEchoParticipantToken(parsed.data);

  return NextResponse.json(
    {
      status: "ready",
      readiness,
      ...payload,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
