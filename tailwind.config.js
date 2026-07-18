/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D1F",
          900: "#0A1428",
          850: "#0D1A33",
          800: "#122142",
        },
        accent: {
          DEFAULT: "#2F7BFF",
          light: "#5B9BFF",
          dim: "#1E5FD6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(47, 123, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
