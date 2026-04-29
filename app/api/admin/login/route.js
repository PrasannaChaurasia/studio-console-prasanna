import { NextResponse } from "next/server";
import { checkPassword, setAdminSession } from "../../../../lib/auth";

export async function POST(request) {
  const { password } = await request.json();
  if (!checkPassword(password)) {
    return NextResponse.json({ error: "Invalid admin password." }, { status: 401 });
  }
  await setAdminSession();
  return NextResponse.json({ ok: true });
}
