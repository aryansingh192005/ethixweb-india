import { NextResponse } from "next/server";
import { allowRequest } from "@/lib/rate-limit";

const allowedServices = new Set([
  "Website or e-commerce",
  "Web application",
  "Growth and marketing",
  "AI and automation",
  "Something else",
]);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Quietly ignore automated submissions caught by the hidden honeypot.
    if (clean(data.website)) {
      return NextResponse.json({ ok: true });
    }

    let allowed: boolean;

try {
  allowed = await allowRequest(request, "lead", 5);
} catch {
  return NextResponse.json(
    { error: "The enquiry service is temporarily unavailable." },
    { status: 503 }
  );
}

if (!allowed) {
  return NextResponse.json(
    { error: "Too many enquiries. Please try again later." },
    { status: 429 }
  );
}

    const name = clean(data.name);
    const email = clean(data.email).toLowerCase();
    const phone = clean(data.phone);
    const service = clean(data.service);
    const message = clean(data.message);

    if (
      name.length < 2 ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      phone.length > 20 ||
      !allowedServices.has(service) ||
      message.length < 10 ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { error: "Please check the form fields and try again." },
        { status: 400 }
      );
    }

    const projectUrl = process.env.SUPABASE_URL;
    const secretKey = process.env.SUPABASE_SECRET_KEY;

    if (!projectUrl || !secretKey) {
      return NextResponse.json(
        { error: "The enquiry service is not configured yet." },
        { status: 503 }
      );
    }

    const response = await fetch(
      `${projectUrl.replace(/\/$/, "")}/rest/v1/leads`,
      {
        method: "POST",
        headers: {
          apikey: secretKey,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || null,
          service,
          message,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "We couldn’t save your enquiry. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "We couldn’t process your enquiry. Please try again." },
      { status: 400 }
    );
  }
}