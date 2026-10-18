import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // n8n only allows CORS from the production domain, so in dev the chat talks to n8n through this proxy.
    proxy: {
      "/n8n-chat": {
        target: "https://n8n.creaciones-digitales.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/n8n-chat/, "/webhook"),
        headers: { Origin: "https://www.creaciones-digitales.com" },
      },
    },
  },
});
