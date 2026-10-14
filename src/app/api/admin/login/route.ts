import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { timingSafeEqual } from "node:crypto";
import { allowRequest } from "@/lib/rate-limit";
import { ADMIN_COOKIE, createAdminSession } from "@/lib/admin-auth";

function matches(provided: string, expected: string) {
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  try {
    const allowed = await allowRequest(request, "admin-login", 10);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many sign-in attempts. Try again later." },
        { status: 429 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { error: "Admin login is not configured." },
        { status: 503 }
      );
    }

    const data = await request.json();
    const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
    const password = typeof data.password === "string" ? data.password : "";

    if (
      !matches(email, adminEmail.toLowerCase()) ||
      !matches(password, adminPassword)
    ) {
      return NextResponse.json(
        { error: "Email or password is incorrect." },
        { status: 401 }
      );
    }

    const cookieStore = await cookies();

    cookieStore.set(ADMIN_COOKIE, createAdminSession(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not sign in right now. Please try again." },
      { status: 503 }
    );
  }
}