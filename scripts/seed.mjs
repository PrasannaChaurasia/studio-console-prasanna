import { readFile } from "node:fs/promises";
import { neon } from "@neondatabase/serverless";
import { fallbackProjects } from "../lib/projects.js";

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is required to seed Neon.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const schema = await readFile(new URL("../db/schema.sql", import.meta.url), "utf8");

for (const statement of schema.split(";").map((item) => item.trim()).filter(Boolean)) {
  await sql(`${statement};`);
}

for (const project of fallbackProjects) {
  await sql`
    insert into projects (
      slug, title, category, tags, summary, long_description, year, pdf_url,
      media_class, sort_order, featured, published, case_study
    )
    values (
      ${project.slug}, ${project.title}, ${project.category}, ${project.tags},
      ${project.summary}, ${project.long_description}, ${project.year}, ${project.pdf_url},
      ${project.media_class}, ${project.sort_order}, ${project.featured}, ${project.published},
      ${project.case_study}
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
  `;
}

console.log(`Seeded ${fallbackProjects.length} projects.`);
