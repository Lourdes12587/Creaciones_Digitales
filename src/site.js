// Public address of the site. Every absolute URL (canonical, og:url, og:image, sitemap,
// robots.txt and JSON-LD) is built from this value, so moving to another domain is a one-line change.
// Read by the app, by vite.config.js (index.html) and by scripts/prerender.mjs (sitemap and robots.txt).
export const SITE_URL = "https://www.creaciones-digitales.com";

// The bare domain, for texts that mention it ("creaciones-digitales.com").
export const SITE_HOST = new URL(SITE_URL).host.replace(/^www\./, "");
