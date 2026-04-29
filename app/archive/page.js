import Shell from "../../components/Shell";
import { pdfs } from "../../lib/projects";

export default function ArchivePage() {
  return (
    <Shell>
      <section className="page-hero panel reveal-block in-view">
        <p className="eyebrow">Source Archive</p>
        <h1>Proof documents, portfolio PDFs, and future asset library.</h1>
        <p>The archive keeps every current source accessible while the website evolves into fully extracted, web-native case studies.</p>
      </section>
      <section className="archive-controls panel reveal-block in-view">
        <div><span>Purpose</span><strong>Evidence library</strong><p>Recruiters and collaborators can open original documents while case pages mature.</p></div>
        <div><span>Next phase</span><strong>Asset extraction</strong><p>Images, diagrams, renders, and text can be extracted from these PDFs into web pages.</p></div>
        <div><span>Priority</span><strong>CV + key projects</strong><p>Aeon Flux, Veridian Elan, Resilient Nexus, and Real Projects form the first extraction set.</p></div>
      </section>
      <section className="download-list panel">
        {pdfs.map((pdf) => (
          <a className="download-row reveal-block in-view" href={pdf.href} key={pdf.title}>
            <span>PDF</span>
            <strong>{pdf.title}</strong>
            <em>{pdf.note}</em>
          </a>
        ))}
      </section>
    </Shell>
  );
}
