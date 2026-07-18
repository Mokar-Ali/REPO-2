"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { profile } from "./data";
import { SectionHeading } from "./ui";

export default function Contact() {
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

          {/* Formspree Form */}
          <div className="card p-8">
            <form action="https://formspree.io/f/xgogkapg" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Portfolio Inquiry from Website!" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent resize-y min-h-[160px]"
                  placeholder="Tell me about your project…"
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-6 flex w-full items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}