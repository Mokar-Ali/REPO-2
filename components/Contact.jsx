"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { profile } from "./data";
import { SectionHeading } from "./ui";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSend = () => {
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || "your website"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="blueprint-grid absolute inset-0 opacity-60" />
      <div className="diagonal-streak right-[15%] top-0 hidden h-full lg:block" />

      <div className="section-shell relative">
        <SectionHeading
          center
          eyebrow="Get in touch"
          title="Contact"
          accent="Me"
          description="Open to structural engineering and project management opportunities — let's talk about your project."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact details */}
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                label: "Email",
                value: profile.email,
                href: `mailto:${profile.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: profile.phone,
                href: `tel:${profile.phone.replace(/\s/g, "")}`,
              },
              {
                icon: MapPin,
                label: "Location",
                value: profile.location,
              },
            ].map(({ icon: I, label, value, href }) => (
              <div key={label} className="card card-hover flex items-center gap-5 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <I className="h-6 w-6 text-accent-light" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="mt-0.5 block font-semibold text-white hover:text-accent-light"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="mt-0.5 block font-semibold text-white">
                      {value}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Message — opens the visitor's email client, no backend needed */}
          <div className="card p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Your name
                </span>
                <input
                  type="text"
                  className={field}
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Your email
                </span>
                <input
                  type="email"
                  className={field}
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Message
              </span>
              <textarea
                rows={6}
                className={field}
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button type="button" onClick={handleSend} className="btn-primary mt-6">
              <Send className="h-4 w-4" />
              Send message
            </button>
            <p className="mt-3 text-xs text-slate-500">
              Opens your email app with the message pre-filled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
