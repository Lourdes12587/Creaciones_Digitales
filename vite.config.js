import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { SITE_URL } from "./src/site.js";

// index.html writes absolute URLs as __SITE_URL__; this fills them in from src/site.js.
const siteUrlInHtml = {
  name: "site-url-in-html",
  transformIndexHtml: {
    order: "pre",
    handler: (html) => html.replaceAll("__SITE_URL__", SITE_URL),
  },
};

export default defineConfig({
  plugins: [siteUrlInHtml, react()],
  server: {
    // n8n only allows CORS from the production domain, so in dev the chat talks to n8n through this proxy.
    proxy: {
      "/n8n-chat": {
        target: "https://n8n.creaciones-digitales.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/n8n-chat/, "/webhook"),
        headers: { Origin: SITE_URL },
      },
    },
  },
});
