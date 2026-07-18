import "./globals.css";

export const metadata = {
  title: "Mohammed A. Ali — Structural Engineer & Project Manager",
  description:
    "Structural engineering, seismic design and project management. M.Sc. Natural Hazards & Risks in Structural Engineering, Bauhaus-Universität Weimar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
