import Link from "next/link";
import Shell from "../../components/Shell";

export default function RealProjectsPage() {
  return (
    <Shell>
      <section className="page-hero panel reveal-block in-view">
        <p className="eyebrow">Real Project Evidence</p>
        <h1>Professional work, practical design, and implementation-facing proof.</h1>
        <p>This page is built for office projects, role clarity, buildable thinking, documentation, and evidence that the design work can move beyond image-making.</p>
      </section>
      <section className="evidence-strip panel reveal-block in-view">
        <div><span>Role</span><strong>Contribution clarity</strong><p>Design, drafting, visualization, coordination, and project support can be separated clearly.</p></div>
        <div><span>Delivery</span><strong>Buildable thinking</strong><p>Layout, material logic, detailing, construction awareness, and coordination are foregrounded.</p></div>
        <div><span>Proof</span><strong>Source PDF</strong><p>The current real project PDF remains connected until images and copy are extracted page by page.</p></div>
      </section>
      <section className="detail-columns panel">
        <article className="detail-block reveal-block in-view"><span>01</span><h2>Professional Contributions</h2><p>Firm-based responsibilities, team coordination, project phases, drafting, visualization, and technical communication.</p></article>
        <article className="detail-block reveal-block in-view"><span>02</span><h2>Practical Design</h2><p>Project evidence can be structured around site, client need, planning logic, layout decisions, details, and final output.</p></article>
        <article className="detail-block reveal-block in-view"><span>03</span><h2>Source Archive</h2><p><a href="/Prasanna_Chaurasia_Real%20Projects.pdf">Open the Real Projects PDF</a> while web-native case studies are being built.</p></article>
      </section>
      <section className="page-cta reveal-block in-view">
        <div><p className="eyebrow">Technical crossover</p><h2>Real projects connect directly to BIM documentation and delivery systems.</h2></div>
        <Link className="primary-link" href="/project/veridian-elan">View BIM Case Study</Link>
      </section>
    </Shell>
  );
}
