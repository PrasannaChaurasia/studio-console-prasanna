import { notFound } from "next/navigation";
import Shell from "../../../components/Shell";
import { getProject, getPublishedProjects } from "../../../lib/db";

export async function generateStaticParams() {
  const projects = await getPublishedProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  const study = project.case_study || {};

  return (
    <Shell>
      <section className={`case-hero ${project.media_class || "case-aeon-hero"} panel reveal-block in-view`}>
        <p className="eyebrow">{study.eyebrow || `${project.category} / ${project.year}`}</p>
        <h1>{study.headline || project.title}</h1>
        <p>{study.intro || project.long_description}</p>
      </section>
      <section className="case-body panel">
        <div className="case-text reveal-block in-view">
          <span>Thesis</span>
          <h2>{study.thesis || project.title}</h2>
          <p>{study.thesis_copy || project.long_description}</p>
        </div>
        <div className="detail-block reveal-block in-view">
          <span>Source</span>
          <h2>Project PDF</h2>
          {project.pdf_url ? <p><a href={project.pdf_url}>Open {project.title} PDF</a></p> : <p>PDF source will be attached during archive upload.</p>}
        </div>
      </section>
      <section className="case-grid panel">
        {(study.cards || []).map(([title, copy], index) => (
          <article className="case-card reveal-block in-view" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </Shell>
  );
}
