import fs from "fs";

// 1. Configuration
const DOMAIN = "https://www.florentaudap.com";
const OUTPUT_FILE = "./public/sitemap.xml";

// 2. Liste des routes (C'est ici que vous ajouterez vos futures pages)
const routes = [
  { path: "/", changefreq: "monthly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/projects", changefreq: "monthly", priority: 0.8 },
  { path: "/blog", changefreq: "weekly", priority: 0.8 },
  { path: "/contact", changefreq: "yearly", priority: 0.5 },
];

// 3. Génération du XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${DOMAIN}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync(OUTPUT_FILE, sitemap);
  console.log(`✅ Sitemap générée avec succès dans ${OUTPUT_FILE}`);
};

generateSitemap();
