"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function submitLead(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const payload = await response.json();
    setSubmitting(false);

    if (!response.ok) {
      setStatus({ tone: "error", message: payload.error || "Could not submit this message yet." });
      return;
    }

    form.reset();
    setStatus({ tone: "success", message: "Message saved. Prasanna can review it from the admin console." });
  }

  return (
    <form className="contact-form" onSubmit={submitLead}>
      {status ? (
        <p className="status-banner" data-tone={status.tone}>
          {status.message}
        </p>
      ) : null}
      <label>
        Name
        <input name="name" required minLength={2} />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Phone
        <input name="phone" />
      </label>
      <label>
        Company / Studio
        <input name="company" />
      </label>
      <label>
        Interest area
        <select name="interest_area" defaultValue="Architecture / BIM">
          <option>Architecture / BIM</option>
          <option>Visualization</option>
          <option>AI design workflow</option>
          <option>Recruitment</option>
          <option>Collaboration</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" required minLength={10} />
      </label>
      <input type="hidden" name="source_page" value="contact" />
      <button className="primary-link" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Save Lead"}
      </button>
    </form>
  );
}
