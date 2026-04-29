import Link from "next/link";
import Shell from "../../components/Shell";

export default function BimPage() {
  return (
    <Shell>
      <section className="page-hero panel reveal-block in-view">
        <p className="eyebrow">BIM Lab</p>
        <h1>Technical control as a visible design strength.</h1>
        <p>BIM is presented as a professional workflow: model structure, information management, documentation, coordination, and delivery-facing communication.</p>
      </section>
      <section className="bim-console panel reveal-block in-view">
        <div><span>ISO 19650</span><strong>Information discipline</strong><p>Structured outputs, naming clarity, coordinated documentation, and shared delivery logic.</p></div>
        <div><span>Revit</span><strong>Model production</strong><p>Geometry control, families, views, sheets, schedules, annotations, and drawing discipline.</p></div>
        <div><span>Coordination</span><strong>Risk reduction</strong><p>Navisworks awareness, consultant alignment, clash thinking, and decision support.</p></div>
        <div><span>Automation</span><strong>Workflow intelligence</strong><p>pyRevit, DiRoots, BIMLogiq, Blocks, and AI-supported productivity thinking.</p></div>
      </section>
      <section className="page-cta reveal-block in-view">
        <div><p className="eyebrow">Case study</p><h2>Veridian Elan is the current BIM anchor project.</h2></div>
        <Link className="primary-link" href="/project/veridian-elan">Open Veridian Elan</Link>
      </section>
    </Shell>
  );
}
