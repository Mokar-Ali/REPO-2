import Image from "next/image";
import { MapPin, Mail, Phone, Download, ArrowRight } from "lucide-react";
import { profile, stats } from "./data";
import { Icon } from "./ui";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">

      {/* ── Background: architecture collage ── */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-navy-950/65" />
        {/* Left-side extra darkening for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/55 to-transparent" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      {/* Blueprint grid overlay (subtle) */}
      <div className="blueprint-grid absolute inset-0 opacity-30" />

      {/* ── Content ── */}
      <div className="section-shell relative">
        <div className="grid items-end gap-0 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left: text */}
          <div className="pb-10 pt-14 lg:pb-24 lg:pt-24">
            <span className="eyebrow">{profile.role}</span>

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Mohammed A. <span className="text-accent">Ali</span>
            </h1>

            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold text-slate-100 sm:text-xl">
              {profile.tagline.map((t, i) => (
                <span key={t} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  )}
                  {t}
                </span>
              ))}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200">
              {profile.intro}
            </p>

            <div className="title-rule" />

            {/* Contact row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-200">
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-accent-light" />
                </span>
                {profile.location}
              </span>
              <span className="hidden h-8 w-px bg-white/20 sm:block" />
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 hover:text-accent-light transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm">
                  <Mail className="h-4 w-4 text-accent-light" />
                </span>
                {profile.email}
              </a>
              <span className="hidden h-8 w-px bg-white/20 sm:block" />
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-accent-light transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm">
                  <Phone className="h-4 w-4 text-accent-light" />
                </span>
                {profile.phone}
              </a>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={profile.cvFile} download className="btn-primary">
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a href="#projects" className="btn-ghost">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: transparent portrait — sits flush at the bottom so it "stands" on the stats bar */}
          <div className="relative hidden lg:flex lg:items-end lg:justify-center lg:self-end">
            {/* Soft glow under the feet */}
            <div className="absolute bottom-0 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
            <Image
              src="/profile-transparent.png"
              alt="Portrait of Mohammed A. Ali"
              width={600}
              height={768}
              priority
              className="relative z-10 w-[620px] max-w-full drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 8px 32px rgba(47,123,255,0.25))" }}
            />
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="card relative -mb-14 grid grid-cols-1 divide-y divide-white/10 backdrop-blur-md sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 px-6 py-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                <Icon name={s.icon} className="h-6 w-6 text-accent-light" />
              </span>
              <span>
                <span className="block text-lg font-bold leading-tight text-white">
                  {s.value}
                </span>
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                  {s.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer so stats bar overlaps the next section */}
      <div className="h-14" />
    </section>
  );
}
