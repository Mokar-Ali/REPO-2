import { BookOpen } from "lucide-react";
import { research } from "./data";
import { SectionHeading } from "./ui";

export default function Research() {
  return (
    <section id="research" className="relative overflow-hidden py-28">
      <div className="diagonal-streak left-[10%] top-0 hidden h-full lg:block" />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Academic work"
          title="Research"
          accent="&amp; Theses"
          description="Thesis research spanning seismic performance of structures, contract administration and reinforced concrete design."
        />

        <div className="mt-14 space-y-6">
          {research.map((r) => (
            <article
              key={r.title}
              className="card card-hover grid gap-6 p-8 lg:grid-cols-[auto_1fr_auto] lg:items-start"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                <BookOpen className="h-7 w-7 text-accent-light" />
              </span>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
                  {r.label}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug text-white">
                  {r.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
                  {r.text}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="text-3xl font-extrabold text-white/10 lg:text-4xl">
                {r.year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
