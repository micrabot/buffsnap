"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const startedAt = useRef(Date.now());

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your request.");
      setStatus("success");
      setMessage("Thanks — your project request was sent. BuffSnap will follow up directly.");
      form.reset();
      startedAt.current = Date.now();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your request.");
    }
  }

  return (
    <form className="quote-form" onSubmit={submitForm}>
      <input type="hidden" name="startedAt" value={startedAt.current} readOnly />
      <div className="form-grid">
        <label>
          Service needed
          <select name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Google Maps Business Tour</option>
            <option>Commercial / AEC Matterport Capture</option>
            <option>Apartment Community 3D Tour</option>
            <option>Business Photography</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Business or company name
          <input name="business" autoComplete="organization" maxLength={160} required />
        </label>
        <label>
          Your name
          <input name="name" autoComplete="name" maxLength={120} required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" maxLength={320} required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} required />
        </label>
        <label>
          Project location
          <input name="location" autoComplete="street-address" maxLength={240} required />
        </label>
        <label>
          Approximate square footage
          <input name="squareFootage" inputMode="numeric" maxLength={40} placeholder="Example: 4,500 sq ft" />
        </label>
        <label>
          Preferred timing
          <input name="timing" maxLength={120} placeholder="Example: within 2 weeks" />
        </label>
      </div>

      <label className="full-field">
        Tell us about the space or project
        <textarea name="details" rows={5} maxLength={3000} placeholder="Type of business, number of floors, goals, access requirements, deliverables, or anything else helpful." required />
      </label>

      <label className="honeypot" aria-hidden="true">
        Leave this blank
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </label>

      <button className="button primary wide" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request My Quote"}
      </button>
      <p className="form-note">No obligation. By submitting, you agree that BuffSnap may contact you about this request. See the <Link href="/privacy">Privacy Policy</Link>.</p>
      <div aria-live="polite" aria-atomic="true">
        {message && <p className={`form-message ${status}`}>{message}</p>}
      </div>
    </form>
  );
}
