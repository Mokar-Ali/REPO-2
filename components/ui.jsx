import {
  Calendar,
  GraduationCap,
  Building2,
  Box,
  Users,
  Search,
  Activity,
  HardHat,
  ClipboardCheck,
} from "lucide-react";

const icons = {
  calendar: Calendar,
  graduation: GraduationCap,
  building: Building2,
  cube: Box,
  users: Users,
  search: Search,
  activity: Activity,
  hardhat: HardHat,
  clipboard: ClipboardCheck,
};

export function Icon({ name, className }) {
  const Cmp = icons[name] || Building2;
  return <Cmp className={className} aria-hidden="true" />;
}

export function SectionHeading({ eyebrow, title, accent, description, center }) {
  return (
    <div className={center ? "flex flex-col items-center text-center" : ""}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title} {accent && <span className="text-accent">{accent}</span>}
      </h2>
      <div className={`title-rule ${center ? "mx-auto" : ""}`} />
      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}

export function DiagonalStreaks() {
  return (
    <>
      <div className="diagonal-streak right-[18%] top-[-10%] hidden h-[70%] lg:block" />
      <div className="diagonal-streak right-[12%] top-[10%] hidden h-[80%] lg:block" />
    </>
  );
}
