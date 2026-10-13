import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Backend smoke test: reports whether the Supabase backend is reachable.
 * Returns `not_configured` (HTTP 200) until credentials are added, so the
 * app builds and runs during setup.
 */
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return NextResponse.json({ ok: true, supabase: "not_configured" });
  }

  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/`, {
      headers: { apikey: anonKey },
      cache: "no-store",
    });
    return NextResponse.json({
      ok: res.ok,
      supabase: res.ok ? "connected" : `error_${res.status}`,
    });
  } catch {
    return NextResponse.json(
      { ok: false, supabase: "unreachable" },
      { status: 503 }
    );
  }
}
