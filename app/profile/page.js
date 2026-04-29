import Shell from "../../components/Shell";

export default function ProfilePage() {
  return (
    <Shell>
      <div className="profile-page">
        <section className="profile-hero reveal-block in-view">
          <div className="profile-hero-copy">
            <p className="eyebrow">Profile dossier / CV intelligence</p>
            <h1>Prasanna Chaurasia</h1>
            <p className="profile-title">Architect | AI Enthusiast | Certified BIM ISO 19650 & Construction Management | Sustainable Architecture, Parametric Design & Digital Delivery | Engineering & Execution</p>
            <div className="profile-actions">
              <a className="primary-link" href="/Prasanna%20Chaurasia_CV.pdf">Open CV PDF</a>
              <a className="secondary-link" href="mailto:pc.urbanmatrix12@gmail.com">Email Prasanna</a>
              <a className="secondary-link" href="https://www.linkedin.com/in/prasanna-chaurasia">LinkedIn</a>
            </div>
          </div>
          <aside className="profile-snapshot" aria-label="Profile snapshot">
            <div className="profile-portrait" aria-label="Portrait placeholder for Prasanna Chaurasia"><span>PC</span></div>
            <span>Studio Signal</span>
            <strong>BIM + AI + Architectural Storytelling</strong>
            <p>Based in the UK with a LinkedIn profile positioned around BIM architecture, AI design, construction planning, and multidisciplinary design services.</p>
          </aside>
        </section>
        <section className="profile-contact-strip reveal-block in-view" aria-label="Contact details">
          <a href="https://maps.google.com/?q=Nottingham%2C%20United%20Kingdom"><span>Location</span><strong>Nottingham, United Kingdom</strong></a>
          <a href="tel:+447776361383"><span>Phone</span><strong>+44 777 636 1383</strong></a>
          <a href="mailto:pc.urbanmatrix12@gmail.com"><span>Email</span><strong>pc.urbanmatrix12@gmail.com</strong></a>
          <a href="https://www.linkedin.com/in/prasanna-chaurasia"><span>LinkedIn</span><strong>linkedin.com/in/prasanna-chaurasia</strong></a>
        </section>
        <section className="profile-shell">
          <div className="profile-main">
            <article className="profile-section reveal-block in-view">
              <p className="eyebrow">Professional summary</p>
              <h2>Multidisciplinary BIM architect and civil engineer working between imagination, technical delivery, and AI-enabled design systems.</h2>
              <p>Prasanna brings experience delivering complex building and infrastructure projects across India, with UK knowledge developed through Manchester School of Architecture and current BIM training.</p>
              <p>His workflow combines Revit BIM, pyRevit, DiRoots, Blocks, BIMLogiq, Navisworks, AutoCAD, Rhino/Grasshopper, Primavera P6, Power BI, visualisation suites, and generative AI pipelines.</p>
            </article>
            <section className="profile-section reveal-block in-view">
              <p className="eyebrow">Professional DNA</p>
              <div className="profile-focus-grid">
                <article><span>01</span><h3>Digital Delivery</h3><p>BIM coordination, ISO 19650-oriented outputs, Revit documentation, Navisworks review, automation plugins, and technical project control.</p></article>
                <article><span>02</span><h3>AI Design Systems</h3><p>AI-assisted ideation, concept iteration, cinematic visual studies, workflow automation, and generative storytelling.</p></article>
                <article><span>03</span><h3>Sustainable Futures</h3><p>Net-zero design thinking, green infrastructure, climate studies, renewable systems, and resilience-led narratives.</p></article>
                <article><span>04</span><h3>Execution Logic</h3><p>Construction planning, estimation, scheduling, resource management, stakeholder coordination, and dashboards.</p></article>
              </div>
            </section>
          </div>
          <aside className="profile-side">
            <section className="cv-panel reveal-block in-view">
              <div className="cv-panel-head"><p className="eyebrow">Live CV Preview</p><a className="text-link" href="/Prasanna%20Chaurasia_CV.pdf">Open full PDF</a></div>
              <div className="cv-frame"><iframe title="Prasanna Chaurasia CV preview" src="/Prasanna%20Chaurasia_CV.pdf#toolbar=0&navpanes=0" /></div>
            </section>
            <section className="profile-side-card reveal-block in-view"><span>Core Positioning</span><h3>Architecture that speaks both to emotion and execution.</h3><p>Conceptual futures, real project evidence, BIM clarity, and presentation craft are treated as one integrated design language.</p></section>
          </aside>
        </section>
      </div>
    </Shell>
  );
}
