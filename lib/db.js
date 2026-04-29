import { neon } from "@neondatabase/serverless";
import { fallbackProjects } from "./projects";

const connectionString = process.env.DATABASE_URL;
const sql = connectionString ? neon(connectionString) : null;

export function hasDatabase() {
  return Boolean(sql);
}

function normalizeProject(row) {
  if (!row) return null;
  return {
    ...row,
    tags: Array.isArray(row.tags) ? row.tags : [],
    featured: Boolean(row.featured),
    published: Boolean(row.published),
    sort_order: Number(row.sort_order || 0),
    case_study: row.case_study || {}
  };
}

export async function getPublishedProjects() {
  if (!sql) return fallbackProjects;
  const rows = await sql`
    select slug, title, category, tags, summary, long_description, year, pdf_url,
      media_class, sort_order, featured, published, case_study
    from projects
    where published = true
    order by sort_order asc, title asc
  `;
  return rows.map(normalizeProject);
}

export async function getAllProjects() {
  if (!sql) return fallbackProjects;
  const rows = await sql`
    select slug, title, category, tags, summary, long_description, year, pdf_url,
      media_class, sort_order, featured, published, case_study
    from projects
    order by sort_order asc, title asc
  `;
  return rows.map(normalizeProject);
}

export async function getProject(slug) {
  const projects = await getPublishedProjects();
  return projects.find((project) => project.slug === slug);
}

export async function saveLead(input) {
  if (!sql) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const [lead] = await sql`
    insert into contact_leads (name, email, phone, company, message, interest_area, source_page, status)
    values (
      ${input.name},
      ${input.email},
      ${input.phone || null},
      ${input.company || null},
      ${input.message},
      ${input.interest_area || "General"},
      ${input.source_page || "contact"},
      'new'
    )
    returning id, created_at
  `;
  return lead;
}

export async function getLeads() {
  if (!sql) return [];
  return sql`
    select id, name, email, phone, company, message, interest_area, source_page, status, created_at
    from contact_leads
    order by created_at desc
    limit 100
  `;
}

export async function upsertProject(input) {
  if (!sql) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const tags = Array.isArray(input.tags)
    ? input.tags
    : String(input.tags || "")
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

  const [project] = await sql`
    insert into projects (
      slug, title, category, tags, summary, long_description, year, pdf_url,
      media_class, sort_order, featured, published, case_study
    )
    values (
      ${input.slug}, ${input.title}, ${input.category}, ${tags}, ${input.summary},
      ${input.long_description}, ${input.year}, ${input.pdf_url || null},
      ${input.media_class || "media-real"}, ${Number(input.sort_order || 99)},
      ${Boolean(input.featured)}, ${input.published !== false}, ${input.case_study || {}}
    )
    on conflict (slug) do update set
      title = excluded.title,
      category = excluded.category,
      tags = excluded.tags,
      summary = excluded.summary,
      long_description = excluded.long_description,
      year = excluded.year,
      pdf_url = excluded.pdf_url,
      media_class = excluded.media_class,
      sort_order = excluded.sort_order,
      featured = excluded.featured,
      published = excluded.published,
      case_study = excluded.case_study,
      updated_at = now()
    returning *
  `;
  return normalizeProject(project);
}

export async function updateLeadStatus(id, status) {
  if (!sql) {
    throw new Error("DATABASE_URL is not configured.");
  }
  const [lead] = await sql`
    update contact_leads
    set status = ${status}
    where id = ${id}
    returning id, status
  `;
  return lead;
}
