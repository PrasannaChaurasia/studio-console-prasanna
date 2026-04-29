import { NextResponse } from "next/server";
import { saveLead } from "../../../lib/db";

export async function POST(request) {
  const body = await request.json();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (name.length < 2 || !email.includes("@") || message.length < 10) {
    return NextResponse.json({ error: "Name, valid email, and message are required." }, { status: 400 });
  }

  try {
    const lead = await saveLead({ ...body, name, email, message });
    return NextResponse.json({ ok: true, lead });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 503 });
  }
}
