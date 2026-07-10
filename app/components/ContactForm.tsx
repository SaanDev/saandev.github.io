"use client";

import { FormEvent, useRef, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const startedAt = useRef(Date.now());

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setState("error");
      setMessage("Please complete every field with a valid name, email address, subject, and message.");
      return;
    }
    const data = new FormData(form);
    const honey = String(data.get("website") || "");
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "";

    if (honey || Date.now() - startedAt.current < 1500) {
      setState("error");
      setMessage("The form could not be submitted. Please wait a moment and try again.");
      return;
    }

    if (!endpoint) {
      setState("error");
      setMessage(
        "Email delivery is not connected yet. Add the verified contact address and NEXT_PUBLIC_CONTACT_FORM_ENDPOINT before publishing the form.",
      );
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Delivery failed");
      form.reset();
      startedAt.current = Date.now();
      setState("success");
      setMessage("Thank you. Your message has been sent successfully.");
    } catch {
      setState("error");
      setMessage("Your message could not be sent. Please try again later or use the email address listed on this page.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required minLength={2} />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        <span>Subject</span>
        <input name="subject" type="text" required minLength={3} />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={7} required minLength={20} />
      </label>
      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-footer">
        <button className="button button-primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send message"}
        </button>
        <p>
          Your details will be used only to respond to this enquiry and will not be published.
        </p>
      </div>
      {message && (
        <div
          className={`form-status ${state === "success" ? "success" : "error"}`}
          role={state === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {message}
        </div>
      )}
      <p className="configuration-note placeholder-note">
        [CONNECT A FORM DELIVERY SERVICE AND ADD SPAM-PROTECTION CREDENTIALS BEFORE PUBLIC LAUNCH]
      </p>
    </form>
  );
}
