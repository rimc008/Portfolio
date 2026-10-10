"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, BriefcaseBusiness, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { contact, personal } from "@/lib/portfolio.config";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    // ─── FORM INTEGRATION POINT ───
    // Replace the code below with your actual form service.
    // Options:
    //   1. Formspree: Set FORMSPREE_ENDPOINT in .env and use it here
    //   2. Resend/Email API: Use a server route at /api/contact
    //   3. Supabase: Insert into a 'contact_messages' table
    //
    // Example (Formspree):
    //   const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formState),
    //   });
    //
    // For now, we simulate the flow so the UI works correctly,
    // but honestly report that no backend is connected.

    try {
      // Simulated submission — no backend connected
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // No real form service connected — report honestly
      setStatus("error");
      setStatusMessage(
        "No form service is connected yet. Please email me directly at " +
          personal.email +
          ", or connect a form service (see code comments in Contact.jsx)."
      );
    } catch (err) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try emailing me directly.");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-cocoa-700/8 blur-[120px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 — CONTACT"
          title={contact.heading}
          description={contact.subtext}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whether you have a specific opportunity or just want to talk about
              building something interesting, I'd love to hear from you.
            </p>

            <div className="space-y-3">
              <ContactLink
                href={`mailto:${personal.email}`}
                icon={<Mail className="h-5 w-5 text-cocoa-700" />}
                label="Email"
                value={personal.email}
              />
              <ContactLink
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Code2 className="h-5 w-5 text-cocoa-700" />}
                label="GitHub"
                value="rimc008"
              />
              <ContactLink
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                icon={<BriefcaseBusiness className="h-5 w-5 text-cocoa-700" />}
                label="LinkedIn"
                value="Connect with me"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 rounded-xl border border-border bg-card/40 p-6"
            >
              <Field
                label="Name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Your name"
              />

              <Field
                label="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="you@example.com"
              />

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className={`w-full rounded-lg border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cocoa-700/40 transition-all ${
                    errors.message
                      ? "border-red-500/50"
                      : "border-border focus:border-cocoa-700/50"
                  }`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cocoa-700 px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-cocoa-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-lg border border-cocoa-700/30 bg-cocoa-700/10 px-4 py-3 text-sm text-cocoa-600">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  {statusMessage}
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  {statusMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, label, value, target, rel }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="flex items-center gap-4 rounded-lg border border-border bg-card/40 p-4 transition-all hover:border-cocoa-700/30 hover:bg-card/60"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cocoa-700/10">
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium text-foreground">{value}</div>
      </div>
    </a>
  );
}

function Field({ label, name, value, onChange, error, placeholder, type = "text" }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cocoa-700/40 transition-all ${
          error
            ? "border-red-500/50"
            : "border-border focus:border-cocoa-700/50"
        }`}
        aria-invalid={!!error}
      />
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
