import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "../index.css";

// Old links used hash routes (/#portfolio). Send them to the real page.
const legacyRoutes = { "#portfolio": "/portfolio", "#privacidad": "/privacidad" };
const legacyTarget = legacyRoutes[window.location.hash];

if (legacyTarget) {
  window.location.replace(legacyTarget);
} else {
  const container = document.getElementById("root");
  const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Pages are prerendered at build time; hydrate them instead of rendering from scratch.
  if (container.hasChildNodes()) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
}
