/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        electric: "#6366F1",
        soft: "#A5B4FC",
        canvas: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Raleway", "Satoshi", "Geist", "ui-sans-serif", "system-ui"],
        display: ["Orbitron", "Satoshi", "Geist", "ui-sans-serif"],
      },
      boxShadow: {
        diffusion: "0 28px 80px -30px rgba(15, 23, 42, 0.35)",
        panel: "0 20px 45px -25px rgba(15, 23, 42, 0.28)",
      },
    },
  },
  plugins: [],
};
