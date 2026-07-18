import { CheckCircle2 } from "lucide-react";
import { about, profile } from "./data";
import { SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Get to know me"
          title="About"
          accent="Me"
          description={about.summary}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {about.highlights.map((h) => (
            <div key={h.title} className="card card-hover p-8">
              <CheckCircle2 className="h-7 w-7 text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold text-white">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {h.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Quick facts */}
          <div className="card p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
              Quick facts
            </h3>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Based in", profile.location],
                ["Current focus", "Seismic design & structural resilience"],
                ["Education", "M.Sc. Bauhaus-Universität Weimar"],
                ["Open to", "Structural engineering & PM roles"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3"
                >
                  <dt className="shrink-0 text-slate-400">{k}</dt>
                  <dd className="text-right font-medium text-slate-100">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Languages - Larger middle gap */}
          <div className="card p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
              Languages
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4">
              {about.languages.map((l) => (
                <div key={l.name} className="flex items-center justify-between">
                  <span className="font-semibold text-white">{l.name}</span>
                  <span className="text-slate-400">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}