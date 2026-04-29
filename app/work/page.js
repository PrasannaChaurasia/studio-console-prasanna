import Link from "next/link";
import Shell from "../../components/Shell";
import { getPublishedProjects } from "../../lib/db";

export default async function WorkPage() {
  const projects = await getPublishedProjects();
  return (
    <Shell>
      <section className="page-hero panel reveal-block in-view">
        <p className="eyebrow">Work Index</p>
        <h1>Fast project access with the clarity of a studio archive.</h1>
        <p>A compact index for recruiters, studios, and collaborators: conceptual worlds, urban systems, BIM documentation, and real project evidence.</p>
      </section>
      <section className="index-dashboard panel reveal-block in-view">
        <div><span>01</span><strong>Concept</strong><p>Cinematic architectural imagination and future-world storytelling.</p></div>
        <div><span>02</span><strong>System</strong><p>Urban matrices, resilience frameworks, and networked design logic.</p></div>
        <div><span>03</span><strong>Delivery</strong><p>BIM, documentation, coordination, and execution-facing control.</p></div>
        <div><span>04</span><strong>Evidence</strong><p>Professional work, PDFs, CV, and project source material.</p></div>
      </section>
      <section className="project-index panel">
        {projects.map((project, index) => (
          <Link className="index-row reveal-block in-view" href={`/project/${project.slug}`} key={project.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
            <em>{project.summary}</em>
          </Link>
        ))}
        <Link className="index-row reveal-block in-view" href="/profile">
          <span>{String(projects.length + 1).padStart(2, "0")}</span>
          <strong>Profile Dossier</strong>
          <em>CV, education, certification, software stack, and contact routes</em>
        </Link>
      </section>
    </Shell>
  );
}
