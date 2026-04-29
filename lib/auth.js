import { cookies } from "next/headers";
import { createHash } from "node:crypto";

const cookieName = "studio_admin";

function sessionValue() {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "local-dev-secret";
  return createHash("sha256").update(`studio-console:${secret}`).digest("hex");
}

export async function isAdmin() {
  const cookieStore = await cookies();
  return cookieStore.get(cookieName)?.value === sessionValue();
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(cookieName, sessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
}

export function checkPassword(password) {
  const expected = process.env.ADMIN_PASSWORD;
  return Boolean(expected && password === expected);
}
