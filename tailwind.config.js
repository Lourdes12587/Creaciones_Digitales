/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        // Clarea palette (defined in index.css).
        rosa: "var(--clarea-rosa)",
        negro: "var(--clarea-negro)",
        piedra: "var(--clarea-piedra)",
        blanco: "var(--clarea-blanco)",
        noche: "var(--clarea-noche)",
        luz: "var(--clarea-luz)",
        alba: "var(--clarea-alba)",
      },
      maxWidth: {
        container: "var(--container)",
      },
      fontFamily: {
        sans: ["General Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
