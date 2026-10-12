import React from "react";
import { renderToString } from "react-dom/server";
import App, { PAGE_TITLES, SITE_PAGES } from "./App.jsx";

export { PAGE_TITLES, SITE_PAGES };

export function render(route) {
  return renderToString(
    <React.StrictMode>
      <App initialRoute={route} />
    </React.StrictMode>,
  );
}
