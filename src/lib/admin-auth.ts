import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "ethixweb_admin";
const SESSION_LIFETIME = 8 * 60 * 60 * 1000;

function getSecret() {
  const secret = process.env.SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET must be at least 32 characters.");
  }

  return secret;
}

export function createAdminSession() {
  const payload = Buffer.from(
    JSON.stringify({
      email: process.env.ADMIN_EMAIL?.toLowerCase(),
      expiresAt: Date.now() + SESSION_LIFETIME,
    })
  ).toString("base64url");

  const signature = createHmac("sha256", getSecret())
    .update(payload)
    .digest("base64url");

  return `${payload}.${signature}`;
}

export function verifyAdminSession(token: string) {
  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature) return false;

    const expected = createHmac("sha256", getSecret())
      .update(payload)
      .digest();

    const actual = Buffer.from(signature, "base64url");
    if (expected.length !== actual.length) return false;
    if (!timingSafeEqual(expected, actual)) return false;

    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    );

    return (
      session.email === process.env.ADMIN_EMAIL?.toLowerCase() &&
      session.expiresAt > Date.now()
    );
  } catch {
    return false;
  }
}