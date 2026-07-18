// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the site.
// Sourced from CV — July 2026.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Mohammed Ali",
  role: "Structural Engineer | Project Manager",
  tagline: ["Structural Engineering", "Seismic Design", "Project Management"],
  intro:
    "I design safe, resilient, and efficient structures and lead projects from concept to completion with a focus on quality, innovation, and sustainability.",
  location: "Weimar, Germany",
  email: "mabkariim@gmail.com",
  phone: "+49 15737344770",
  cvFile: "/CV_Mohammed_Ali.pdf", // drop your CV PDF into /public with this name
};

export const stats = [
  { icon: "calendar", value: "5+", label: "Years of Experience" },
  { icon: "graduation", value: "2", label: "Master's Degrees" },
  { icon: "building", value: "Structural & Seismic", label: "Engineering Specialist" },
  { icon: "cube", value: "BIM & Digital", label: "Engineering Expertise" },
  { icon: "users", value: "Project Management", label: "Experience" },
];

export const about = {
  summary:
    "Graduate in civil engineering with a focus on structural engineering, specializing in seismic analysis and design of reinforced concrete and steel structures, as well as Building Information Modeling (BIM). Highly motivated to contribute analytical skills and expertise to innovative construction projects.",
  highlights: [
    {
      title: "Analysis-driven design",
      text: "Seismic analysis and design of reinforced concrete and steel structures, grounded in current design codes.",
    },
    {
      title: "Field-proven",
      text: "Five years on real projects in Ethiopia — from structural design reviews to full construction supervision.",
    },
    {
      title: "Digitally fluent",
      text: "BIM workflows with Revit, Desite MD and AutoCAD alongside FE analysis in RFEM, SAP2000 and ETABS.",
    },
  ],
  languages: [
    { name: "English", level: "Advanced", pct: 90 },
    { name: "Somali", level: "Advanced", pct: 95 },
    { name: "Amharic", level: "Advanced", pct: 95 },
    { name: "German", level: "Elementary", pct: 35 },
  ],
};

export const expertise = [
  {
    icon: "building",
    title: "Structural & Seismic Engineering",
    text: "Analysis and design of reinforced concrete and steel structures with a focus on seismic performance, code compliance and resilience.",
    points: ["RC & steel design", "Seismic analysis", "Design code compliance"],
  },
  {
    icon: "cube",
    title: "BIM & Digital Engineering",
    text: "Model-based planning and coordination using Building Information Modeling to keep design, documentation and construction in sync.",
    points: ["Revit modeling", "Desite MD coordination", "AutoCAD documentation"],
  },
  {
    icon: "users",
    title: "Project Management",
    text: "Construction supervision and control — schedules, payments, quality standards and contract administration from start to handover.",
    points: ["Construction supervision", "Schedule & cost control", "Contract administration"],
  },
  {
    icon: "search",
    title: "Structural Assessment",
    text: "Inspections and condition assessments of bridges and buildings, with technical recommendations for strengthening and improvement.",
    points: ["Bridge & building inspections", "Condition & safety assessment", "Technical recommendations"],
  },
];

export const experience = [
  {
    role: "Project Manager",
    company: "SRS Study, Design and Supervision Works Enterprise",
    url: "https://sdswe.org/",
    location: "Jigjiga, Ethiopia",
    period: "Nov 2019 — Sep 2022",
    bullets: [
      "Responsible for construction supervision and construction control for buildings.",
      "Monitored construction activities and reviewed design documents for compliance and accuracy.",
      "Managed project schedules and released payments to contractors.",
      "Ensured all work was completed according to design plans and quality standards.",
    ],
  },
  {
    role: "Structural Engineer",
    company: "SRS Study, Design and Supervision Works Enterprise",
    url: "https://sdswe.org/",
    location: "Jigjiga, Ethiopia",
    period: "Oct 2017 — Oct 2019",
    bullets: [
      "Performed structural design reviews and ensured compliance with relevant codes and standards.",
      "Conducted structural inspections of bridges and residential buildings, assessing condition, safety, and serviceability.",
      "Carried out site assessments and provided technical recommendations for structural improvements.",
      "Reviewed and interpreted engineering drawings and specifications for accuracy and constructability.",
      "Collaborated with project teams to resolve structural issues during construction.",
    ],
  },
];

export const education = [
  {
    degree: "M.Sc. in Natural Hazards & Risks in Structural Engineering",
    school: "Bauhaus-Universität Weimar",
    location: "Weimar, Germany",
    period: "Oct 2022 — Jul 2025",
    thesis:
      "Seismic performance assessment of RC wall structures with insights from the 2023 Kahramanmaraş earthquake.",
  },
  {
    degree: "M.A. in Project Planning and Management",
    school: "Jigjiga University",
    location: "Jigjiga, Ethiopia",
    period: "Oct 2019 — Sep 2021",
    thesis: "Effective contract administration for construction projects.",
  },
  {
    degree: "B.Sc. in Civil Engineering",
    school: "Jimma University",
    location: "Jimma, Ethiopia",
    period: "Jan 2013 — Jul 2017",
    thesis: "Structural analysis and design of reinforced concrete buildings.",
  },
];

// ── Projects ─────────────────────────────────────────────────
// These are framed from your CV experience & thesis work.
// Replace the descriptions/tags with your actual project details
// and add real photos to /public/projects/.
export const projects = [
  {
    title: "Seismic Performance of RC Wall Structures",
    category: "Research & Analysis",
    text: "M.Sc. thesis project: performance assessment of reinforced concrete wall structures, drawing on damage insights from the 2023 Kahramanmaraş earthquake.",
    tags: ["Seismic analysis", "RC walls", "Performance assessment"],
    icon: "activity",
  },
  {
    title: "Bridge & Residential Building Inspections",
    category: "Structural Assessment",
    text: "Structural inspections across bridges and residential buildings in the Somali region — condition, safety and serviceability assessments with technical recommendations.",
    tags: ["Inspection", "Condition assessment", "Reporting"],
    icon: "search",
  },
  {
    title: "Building Construction Supervision Program",
    category: "Project Management",
    text: "Construction supervision and control for building projects: monitoring works on site, verifying design compliance, managing schedules and contractor payments.",
    tags: ["Supervision", "Quality control", "Scheduling"],
    icon: "hardhat",
  },
  {
    title: "Structural Design Review Portfolio",
    category: "Structural Engineering",
    text: "Design reviews of reinforced concrete structures — checking drawings and specifications for code compliance, accuracy and constructability before and during construction.",
    tags: ["Design review", "Code compliance", "RC design"],
    icon: "clipboard",
  },
];

export const research = [
  {
    label: "M.Sc. Thesis · Bauhaus-Universität Weimar",
    year: "2025",
    title:
      "Seismic performance assessment of RC wall structures with insights from the 2023 Kahramanmaraş earthquake",
    text: "Evaluates how reinforced concrete wall structures perform under strong seismic demand, using observed damage from the 2023 Kahramanmaraş earthquake sequence to inform assessment approaches.",
    tags: ["Seismic engineering", "RC walls", "Earthquake reconnaissance"],
  },
  {
    label: "M.A. Thesis · Jigjiga University",
    year: "2021",
    title: "Effective contract administration for construction projects",
    text: "Investigates contract administration practice on construction projects and how effective administration supports schedule, cost and quality outcomes.",
    tags: ["Contract administration", "Construction management"],
  },
  {
    label: "B.Sc. Thesis · Jimma University",
    year: "2017",
    title: "Structural analysis and design of reinforced concrete buildings",
    text: "Full structural analysis and design of a reinforced concrete building, covering gravity and lateral load design to relevant codes.",
    tags: ["RC design", "Structural analysis"],
  },
];

export const skills = {
  analysis: {
    title: "Structural Analysis & Design",
    items: [
      { name: "RFEM", pct: 90 },
      { name: "SAP2000", pct: 88 },
      { name: "ETABS", pct: 85 },
    ],
  },
  bim: {
    title: "BIM & Digital Tools",
    items: [
      { name: "Revit", pct: 85 },
      { name: "AutoCAD", pct: 92 },
      { name: "Desite MD", pct: 78 },
    ],
  },
  competencies: [
    "Seismic design principles",
    "Design codes & standards",
    "Project planning & management",
    "Construction supervision",
    "Contract administration",
    "Process optimization & continuous improvement",
    "Structural inspections & assessment",
    "Building Information Modeling (BIM)",
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
