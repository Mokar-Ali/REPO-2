# Mohammed Ali — Portfolio Website

Next.js 14 (App Router) + Tailwind CSS, single-page portfolio matching the Figma hero design.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy
Works out of the box on Vercel (`vercel`) or any Node host (`npm run build && npm start`).

## Editing content
Everything lives in **`components/data.js`** — profile, stats, about, expertise,
experience, education, projects, research, skills, and nav links. Edit that one
file to update the whole site.

## Assets to swap
- `public/profile.png` — your portrait (currently extracted from the CV PDF;
  replace with a higher-resolution photo for best results).
- `public/CV_Mohammed_Ali.pdf` — the file served by the "Download CV" button.
- **Projects**: the four cards in `data.js` are framed from your CV experience.
  Replace descriptions/tags with your real projects and, if you want photos,
  swap the icon header in `components/Projects.jsx` for an `<Image>`.

## Sections
Home (hero + stats bar) · About · Expertise · Experience + Education ·
Projects · Research (theses) · Skills · Contact (mailto form, no backend) · Footer
