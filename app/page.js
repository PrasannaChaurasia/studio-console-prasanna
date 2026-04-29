import Link from "next/link";
import Shell from "../components/Shell";
import ProjectConsole from "../components/ProjectConsole";
import { getPublishedProjects } from "../lib/db";

export default async function Home() {
  const projects = await getPublishedProjects();

  return (
    <Shell>
      <section className="landing-hero">
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-image" />
          <div className="hero-visual-grid" />
        </div>
        <div className="landing-copy reveal in-view">
          <p className="eyebrow">Architectural Designer / BIM / Conceptual Futures</p>
          <h1>Prasanna Chaurasia</h1>
          <p>
            Designing between cinematic spatial narratives, practical project delivery, and technical BIM intelligence.
            The portfolio brings together conceptual pavilions, urban resilience systems, real work, and documentation-led thinking.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#portfolio-console">Explore Portfolio</a>
            <a className="secondary-link" href="/Prasanna%20Chaurasia_CV.pdf">Open CV</a>
          </div>
        </div>
        <div className="landing-meta reveal delay-1 in-view">
          <div><span>01</span><strong>Conceptual worlds</strong><p>Aeon Flux and future-facing architectural narratives.</p></div>
          <div><span>02</span><strong>BIM systems</strong><p>Revit, documentation, coordination, and delivery clarity.</p></div>
          <div><span>03</span><strong>Real projects</strong><p>Professional archive, buildable work, and project roles.</p></div>
        </div>
      </section>
      <section className="studio-statement reveal-block in-view">
        <p>This portfolio is structured as a curated studio archive: not only a collection of images, but a readable path through concept, context, systems, representation, and execution.</p>
      </section>
      <section className="route-map reveal-block in-view" aria-label="Portfolio navigation routes">
        <Link href="/conceptuals"><span>01</span><strong>Conceptual Worlds</strong><p>Aeon Flux, speculative pavilions, atmosphere, narratives, and cinematic futures.</p></Link>
        <Link href="/bim"><span>02</span><strong>BIM Lab</strong><p>Revit, ISO 19650 thinking, documentation, coordination, and technical delivery.</p></Link>
        <Link href="/real-projects"><span>03</span><strong>Real Project Evidence</strong><p>Professional work, practical detail, implementation logic, and role clarity.</p></Link>
        <Link href="/profile"><span>04</span><strong>Profile Dossier</strong><p>CV, education, certifications, software stack, AI/BIM profile, and contact links.</p></Link>
      </section>
      <ProjectConsole projects={projects} />
      <section className="capability-band reveal-block in-view" aria-label="Services and capability band">
        <div><p className="eyebrow">Multidisciplinary Capability</p><h2>Architecture, BIM, AI visual systems, and presentation craft in one workflow.</h2></div>
        <ul>
          <li>Concept architecture and future-world design</li>
          <li>Revit BIM modeling, documentation, and coordination</li>
          <li>Parametric and computational design studies</li>
          <li>AI-assisted ideation, rendering, and design storytelling</li>
          <li>Portfolio, diagram, animation, and visual communication</li>
          <li>Construction planning, scheduling, estimation, and dashboards</li>
        </ul>
      </section>
    </Shell>
  );
}
