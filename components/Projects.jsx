import { projects } from "./data";
import { SectionHeading, Icon } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-navy-900/50" />
      <div className="blueprint-grid absolute inset-0 opacity-60" />

      <div className="section-shell relative">
        <SectionHeading
          center
          eyebrow="Selected work"
          title="Featured"
          accent="Projects"
          description="A cross-section of engineering, assessment and management work — from thesis research to supervision on site."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card card-hover group overflow-hidden">
              {/* Visual header — swap for a project photo when available */}
              <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-navy-800 to-navy-950">
                <div className="blueprint-grid absolute inset-0" />
                <Icon
                  name={p.icon}
                  className="relative h-14 w-14 text-accent/60 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute right-4 top-4 rounded-full border border-accent/30 bg-navy-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-light">
                  {p.category}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {p.text}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
