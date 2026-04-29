import Shell from "../../components/Shell";
import AdminConsole from "../../components/AdminConsole";
import { getAllProjects, getLeads, hasDatabase } from "../../lib/db";
import { isAdmin } from "../../lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authed = await isAdmin();
  const projects = authed ? await getAllProjects() : [];
  const leads = authed ? await getLeads() : [];

  return (
    <Shell>
      <AdminConsole isAuthed={authed} projects={projects} leads={leads} dbReady={hasDatabase()} />
    </Shell>
  );
}
