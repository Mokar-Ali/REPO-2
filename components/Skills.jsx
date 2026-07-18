import { BarChart3, Box, Wrench } from "lucide-react";
import { skills } from "./data";
import { SectionHeading } from "./ui";

function SkillBar({ name, pct }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-semibold text-white">{name}</span>
        <span className="text-slate-400">{pct}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-navy-900/50" />

      <div className="section-shell relative">
        <SectionHeading
          center
          eyebrow="Toolbox"
          title="Skills &amp;"
          accent="Software"
          description="Finite element analysis, BIM tooling and the management competencies to carry a design through construction."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-accent-light" />
              <h3 className="text-base font-bold text-white">
                {skills.analysis.title}
              </h3>
            </div>
            <div className="mt-7 space-y-6">
              {skills.analysis.items.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="card p-8">
            <div className="flex items-center gap-3">
              <Box className="h-6 w-6 text-accent-light" />
              <h3 className="text-base font-bold text-white">
                {skills.bim.title}
              </h3>
            </div>
            <div className="mt-7 space-y-6">
              {skills.bim.items.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="card p-8">
            <div className="flex items-center gap-3">
              <Wrench className="h-6 w-6 text-accent-light" />
              <h3 className="text-base font-bold text-white">
                Core Competencies
              </h3>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {skills.competencies.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-accent/25 bg-accent/5 px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-accent/60 hover:text-white"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
