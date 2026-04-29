import Link from "next/link";
import Shell from "../../components/Shell";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <Shell>
      <section className="page-hero panel reveal-block in-view">
        <p className="eyebrow">Contact</p>
        <h1>Available for architecture, BIM, visualization, and AI design collaborations.</h1>
        <p>Use this page as the conversion point: lead capture, direct contact, LinkedIn, CV, and project archive are all one click away.</p>
      </section>
      <section className="contact-grid panel reveal-block in-view">
        <div>
          <p className="eyebrow">Direct</p>
          <h2>pc.urbanmatrix12@gmail.com</h2>
          <p className="contact-note">Nottingham, United Kingdom</p>
          <a className="contact-link" href="mailto:pc.urbanmatrix12@gmail.com">Email fallback</a>
          <a className="contact-link" href="tel:+447776361383">Call +44 777 636 1383</a>
          <a className="contact-link" href="https://www.linkedin.com/in/prasanna-chaurasia">Open LinkedIn</a>
        </div>
        <ContactForm />
      </section>
      <section className="route-map reveal-block in-view">
        <a href="/Prasanna%20Chaurasia_CV.pdf"><span>CV</span><strong>Open CV</strong><p>Education, skills, certifications, contact, and QR reference.</p></a>
        <Link href="/work"><span>Work</span><strong>Project Index</strong><p>Fast route into conceptual, BIM, urban, and real work.</p></Link>
        <Link href="/archive"><span>Archive</span><strong>Source PDFs</strong><p>Downloadable proof documents and portfolio sources.</p></Link>
        <Link href="/profile"><span>Profile</span><strong>Dossier</strong><p>Professional summary, tools, education, certifications, and live CV preview.</p></Link>
      </section>
    </Shell>
  );
}
