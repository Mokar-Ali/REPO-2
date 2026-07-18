import { MapPin, Calendar, ExternalLink, GraduationCap } from "lucide-react";
import { experience, education } from "./data";
import { SectionHeading } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Career path"
          title="Work"
          accent="Experience"
          description="Five years at a study, design and supervision enterprise in Ethiopia — first at the drawing board, then leading works on site."
        />

        {/* Timeline */}
        <div className="relative mt-14 space-y-10 pl-8 lg:pl-10">
          <div className="timeline-line absolute bottom-4 left-[7px] top-2 w-px lg:left-[9px]" />
          {experience.map((job) => (
            <article key={job.role} className="relative">
              <span className="absolute -left-8 top-2 flex h-4 w-4 items-center justify-center lg:-left-10 lg:h-5 lg:w-5">
                <span className="absolute h-full w-full rounded-full bg-accent/30" />
                <span className="relative h-2 w-2 rounded-full bg-accent lg:h-2.5 lg:w-2.5" />
              </span>

              <div className="card card-hover p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-accent-light hover:underline"
                    >
                      {job.company}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-semibold text-accent-light">
                      <Calendar className="h-3.5 w-3.5" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-relaxed text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Education */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Academic background"
            title="Education"
            accent="&amp; Degrees"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {education.map((ed) => (
              <div key={ed.degree} className="card card-hover flex flex-col p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <GraduationCap className="h-6 w-6 text-accent-light" />
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent-light">
                  {ed.period}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug text-white">
                  {ed.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  {ed.school} · {ed.location}
                </p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-400">
                  <span className="font-semibold text-slate-300">Thesis: </span>
                  {ed.thesis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
