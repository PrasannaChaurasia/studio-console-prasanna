import { NextResponse } from "next/server";
import { isAdmin } from "../../../../lib/auth";
import { upsertProject } from "../../../../lib/db";

export async function POST(request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const project = await upsertProject(await request.json());
    return NextResponse.json({ ok: true, project });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 503 });
  }
}
