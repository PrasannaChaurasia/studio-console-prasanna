"use client";

import { useState } from "react";

export default function AdminConsole({ isAuthed, projects, leads, dbReady }) {
  const [auth, setAuth] = useState(isAuthed);
  const [message, setMessage] = useState("");

  async function login(event) {
    event.preventDefault();
    const password = new FormData(event.currentTarget).get("password");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    if (response.ok) {
      setAuth(true);
      window.location.reload();
    } else {
      setMessage("Admin password is missing or incorrect.");
    }
  }

  async function saveProject(event) {
    event.preventDefault();
    setMessage("");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    data.featured = data.featured === "on";
    data.published = data.published === "on";
    data.case_study = {};
    const response = await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const payload = await response.json();
    setMessage(response.ok ? `Saved ${payload.project.title}.` : payload.error);
  }

  if (!auth) {
    return (
      <section className="page-hero panel reveal-block in-view">
        <p className="eyebrow">Admin Console</p>
        <h1>Private studio operations.</h1>
        <form className="admin-form" onSubmit={login}>
          {message ? <p className="status-banner" data-tone="error">{message}</p> : null}
          <label>
            Admin password
            <input name="password" type="password" required />
          </label>
          <button className="primary-link" type="submit">Enter Console</button>
        </form>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero panel reveal-block in-view">
        <p className="eyebrow">Admin Console</p>
        <h1>Project CMS and contact leads.</h1>
        <p>{dbReady ? "Connected to Neon through DATABASE_URL." : "DATABASE_URL is not configured; the public site is using seeded fallback content."}</p>
      </section>
      <section className="cms-grid panel">
        <div className="admin-panel">
          <p className="eyebrow">Projects</p>
          {message ? <p className="status-banner">{message}</p> : null}
          <table className="cms-table">
            <thead>
              <tr><th>Project</th><th>Category</th><th>Status</th></tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.slug}>
                  <td>{project.title}</td>
                  <td>{project.category}</td>
                  <td>{project.published ? "Published" : "Hidden"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form className="admin-form" onSubmit={saveProject}>
          <p className="eyebrow">Create / update project</p>
          <label>Slug<input name="slug" required /></label>
          <label>Title<input name="title" required /></label>
          <label>Category<input name="category" required /></label>
          <label>Tags<input name="tags" placeholder="conceptual, bim, urban" /></label>
          <label>Year<input name="year" defaultValue="2025" /></label>
          <label>PDF URL<input name="pdf_url" /></label>
          <label>Media class<input name="media_class" defaultValue="media-real" /></label>
          <label>Sort order<input name="sort_order" type="number" defaultValue="99" /></label>
          <label>Summary<textarea name="summary" required /></label>
          <label>Long description<textarea name="long_description" required /></label>
          <label><input name="featured" type="checkbox" /> Featured</label>
          <label><input name="published" type="checkbox" defaultChecked /> Published</label>
          <button className="primary-link" type="submit">Save Project</button>
        </form>
      </section>
      <section className="panel admin-panel">
        <p className="eyebrow">Leads</p>
        <table className="cms-table">
          <thead>
            <tr><th>Name</th><th>Contact</th><th>Interest</th><th>Message</th><th>Status</th></tr>
          </thead>
          <tbody>
            {leads.length ? leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.email}<br />{lead.phone}</td>
                <td>{lead.interest_area}</td>
                <td>{lead.message}</td>
                <td>{lead.status}</td>
              </tr>
            )) : (
              <tr><td colSpan="5">No leads yet.</td></tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}
