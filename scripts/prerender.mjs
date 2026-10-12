// Prerenders every page to static HTML after `vite build`, so search engines
// get the full content without running JavaScript. Also writes the sitemap.
import { readFileSync, writeFileSync, rmSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");
const SITE = "https://www.creaciones-digitales.com";

const { render, PAGE_TITLES, SITE_PAGES } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const template = readFileSync(join(dist, "index.html"), "utf8");

const pages = [
  ...SITE_PAGES.map((page) => ({
    ...page,
    file: page.route === "/" ? "index.html" : `${page.route.slice(1)}.html`,
  })),
  {
    route: "/404",
    file: "404.html",
    notFound: true,
    title: PAGE_TITLES[404],
    description: "La página que buscas no existe en creaciones-digitales.com.",
  },
];

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setMeta(html, pattern, value) {
  if (!pattern.test(html)) throw new Error(`Meta tag not found in template: ${pattern}`);
  return html.replace(pattern, (_, start, end) => `${start}${escapeAttr(value)}${end}`);
}

for (const page of pages) {
  const title = page.title;
  const url = page.route === "/" ? `${SITE}/` : `${SITE}${page.route}`;
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(title)}</title>`);
  html = setMeta(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, page.description);
  html = setMeta(html, /(<meta property="og:title" content=")[^"]*(")/, title);
  html = setMeta(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, page.description);
  html = setMeta(html, /(<meta name="twitter:title" content=")[^"]*(")/, title);
  html = setMeta(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, page.description);

  if (page.notFound) {
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, "");
    html = html.replace(/\s*<meta property="og:url"[^>]*>/, "");
    html = html.replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />');
  } else {
    html = setMeta(html, /(<link rel="canonical" href=")[^"]*(")/, url);
    html = setMeta(html, /(<meta property="og:url" content=")[^"]*(")/, url);
  }

  const appHtml = render(page.route);
  if (!html.includes('<div id="root"></div>')) throw new Error("Root element not found in template");
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  mkdirSync(dirname(join(dist, page.file)), { recursive: true });
  writeFileSync(join(dist, page.file), html);
  console.log(`prerendered ${page.route} -> dist/${page.file}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((page) => !page.notFound)
  .map((page) => `  <url>\n    <loc>${page.route === "/" ? `${SITE}/` : `${SITE}${page.route}`}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
console.log("wrote dist/sitemap.xml");

rmSync(ssrDir, { recursive: true, force: true });
