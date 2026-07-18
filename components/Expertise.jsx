import { Check } from "lucide-react";
import { expertise } from "./data";
import { SectionHeading, Icon } from "./ui";

export default function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-navy-900/50" />
      <div className="diagonal-streak right-[8%] top-0 hidden h-full lg:block" />

      <div className="section-shell relative">
        <SectionHeading
          center
          eyebrow="What I do"
          title="My"
          accent="Expertise"
          description="Four areas of practice that cover a structure's full life — from the first analysis model to handover on site."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {expertise.map((e) => (
            <div key={e.title} className="card card-hover group p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon
                  name={e.icon}
                  className="h-7 w-7 text-accent-light transition-colors group-hover:text-white"
                />
              </span>
              <h3 className="mt-6 text-lg font-bold leading-snug text-white">
                {e.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {e.text}
              </p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                {e.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-slate-200"
                  >
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
