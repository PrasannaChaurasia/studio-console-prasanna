import Link from "next/link";
import Shell from "../../components/Shell";
import { getPublishedProjects } from "../../lib/db";

export default async function ConceptualsPage() {
  const projects = (await getPublishedProjects()).filter((project) => ["conceptual", "urban"].includes(project.category));
  return (
    <Shell>
      <section className="page-hero panel reveal-block in-view">
        <p className="eyebrow">Conceptual Worlds</p>
        <h1>Speculative architecture with atmosphere, consequence, and system logic.</h1>
        <p>This area carries the most cinematic part of the site: pavilions, urban futures, AI-assisted visual exploration, diagrams, and authored design narratives.</p>
      </section>
      <section className="studio-method panel reveal-block in-view">
        <article><span>World</span><h3>Atmosphere first</h3><p>The visitor enters through feeling: mass, light, landscape, material calm, and future spatial identity.</p></article>
        <article><span>Logic</span><h3>Systems underneath</h3><p>Each visual world is connected to environmental, urban, formal, or computational reasoning.</p></article>
        <article><span>Output</span><h3>Case-study ready</h3><p>Projects are organized to hold renders, diagrams, source PDFs, project essays, and process evidence.</p></article>
      </section>
      <section className="case-grid panel">
        {projects.map((project) => (
          <Link className="case-card reveal-block in-view" href={`/project/${project.slug}`} key={project.slug}>
            <div className={`case-image ${project.media_class?.replace("-hero", "") || "case-aeon"}`} />
            <span>{project.category} / {project.year}</span>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
          </Link>
        ))}
      </section>
    </Shell>
  );
}
