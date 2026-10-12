/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        electric: "#8B6CFF",
        soft: "#C4B5FD",
        canvas: "#111A2E",
        surface: "#18233D",
        accent: "#FF2E7E",
      },
      fontFamily: {
        sans: ["Raleway", "Satoshi", "Geist", "ui-sans-serif", "system-ui"],
        display: ["Orbitron", "Satoshi", "Geist", "ui-sans-serif"],
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        14: "0.14",
        78: "0.78",
        86: "0.86",
      },
      boxShadow: {
        diffusion: "0 28px 80px -30px rgba(0, 0, 0, 0.75)",
        panel: "0 20px 45px -25px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
