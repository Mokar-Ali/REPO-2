import { profile, navLinks } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="section-shell flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-extrabold tracking-[0.14em] text-white">
            MOHAMMED <span className="text-accent">ALI</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Structural Engineer · Project Manager · {profile.location}
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.slice(1).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-accent-light"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Mohammed Ali
        </p>
      </div>
    </footer>
  );
}
