import { BarChart3, Box, Wrench } from "lucide-react";
import { skills } from "./data";
import { SectionHeading } from "./ui";

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
          {/* Structural Analysis & FEM */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-6 w-6 text-accent-light" />
              <h3 className="text-base font-bold text-white">
                Structural Analysis & FEM
              </h3>
            </div>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-white">RFEM (DLUBAL)</span>
                <span className="text-accent-light font-medium">Proficient</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">ETABS</span>
                <span className="text-accent-light font-medium">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">SAP2000</span>
                <span className="text-accent-light font-medium">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">SOFiSTiK</span>
                <span className="text-accent-light font-medium">Proficient</span>
              </div>
            </div>
          </div>

          {/* BIM & CAD */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Box className="h-6 w-6 text-accent-light" />
              <h3 className="text-base font-bold text-white">
                BIM & CAD
              </h3>
            </div>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-white">Revit</span>
                <span className="text-accent-light font-medium">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">AutoCAD</span>
                <span className="text-accent-light font-medium">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">ArchiCAD</span>
                <span className="text-accent-light font-medium">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Desite MD</span>
                <span className="text-accent-light font-medium">Proficient</span>
              </div>
            </div>
          </div>

          {/* Project Planning + Additional Skills */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="h-6 w-6 text-accent-light" />
              <h3 className="text-base font-bold text-white">
                Project Planning & Controls
              </h3>
            </div>
            <div className="space-y-5 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-white">Primavera P6</span>
                <span className="text-accent-light font-medium">Proficient</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">MS Project</span>
                <span className="text-accent-light font-medium">Proficient</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Wrench className="h-6 w-6 text-accent-light" />
              <h3 className="text-base font-bold text-white">
                Additional Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {["QGIS", "MATLAB", "Eurocodes", "NZS 3101", "FEMA 356", "Ethiopian code EBCS"].map((item, i) => (
                <span
                  key={i}
                  className="rounded-full border border-accent/25 bg-accent/5 px-4 py-2 text-sm font-medium text-slate-200 hover:border-accent/60 hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}