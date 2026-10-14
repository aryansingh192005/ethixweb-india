import { createHmac } from "node:crypto";

export async function allowRequest(
  request: Request,
  scope: string,
  limit: number
) {
  const projectUrl = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  const sessionSecret = process.env.SESSION_SECRET;

  if (!projectUrl || !secretKey || !sessionSecret) {
    throw new Error("Rate limiting is not configured.");
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0].trim() || "unknown";

  const keyHash = createHmac("sha256", sessionSecret)
    .update(`${scope}:${ip}`)
    .digest("hex");

  const response = await fetch(
    `${projectUrl.replace(/\/$/, "")}/rest/v1/rpc/check_and_consume_rate_limit`,
    {
      method: "POST",
      headers: {
        apikey: secretKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p_key: keyHash,
        p_limit: limit,
        p_window_seconds: 3600,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Rate limit check failed.");
  }

  return (await response.json()) === true;
}