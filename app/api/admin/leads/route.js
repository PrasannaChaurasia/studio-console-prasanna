import { NextResponse } from "next/server";
import { isAdmin } from "../../../../lib/auth";
import { updateLeadStatus } from "../../../../lib/db";

export async function PATCH(request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id, status } = await request.json();
  try {
    const lead = await updateLeadStatus(id, status);
    return NextResponse.json({ ok: true, lead });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 503 });
  }
}
