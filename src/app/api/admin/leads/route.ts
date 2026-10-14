import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";

async function isAdmin() {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  return token ? verifyAdminSession(token) : false;
}

function databaseConfig() {
  const url = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;
  if (!url || !secret) throw new Error("Database is not configured.");
  return { url: url.replace(/\/$/, ""), secret };
}

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  }

  try {
    const { url, secret } = databaseConfig();
    const response = await fetch(
      `${url}/rest/v1/leads?select=id,name,email,phone,service,message,status,created_at&order=created_at.desc`,
      {
        headers: { apikey: secret },
        cache: "no-store",
      }
    );

    if (!response.ok) throw new Error("Could not read leads.");
    return NextResponse.json(await response.json());
  } catch {
    return NextResponse.json(
      { error: "Could not load enquiries." },
      { status: 503 }
    );
  }
}

export async function PATCH(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();

    if (
      typeof id !== "string" ||
      !/^[0-9a-f-]{36}$/i.test(id) ||
      !["new", "contacted", "closed"].includes(status)
    ) {
      return NextResponse.json({ error: "Invalid update." }, { status: 400 });
    }

    const { url, secret } = databaseConfig();
    const response = await fetch(
      `${url}/rest/v1/leads?id=eq.${encodeURIComponent(id)}`,
      {
        method: "PATCH",
        headers: {
          apikey: secret,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ status }),
        cache: "no-store",
      }
    );

    if (!response.ok) throw new Error("Could not update lead.");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not update the enquiry." },
      { status: 503 }
    );
  }
}