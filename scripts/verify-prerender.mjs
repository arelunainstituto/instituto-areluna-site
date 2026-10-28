// Portão do build (corre depois do postbuild-html, ver package.json): cada URL
// do sitemap tem de ter o seu HTML pré-renderizado, com a própria canonical e
// sem noindex. É o que o Google lê antes de correr o JavaScript; uma falha aqui
// pára o build e a Vercel mantém o deploy anterior.
// Verifica também as duas páginas que o vercel.json serve sem rota própria:
// 404.html (endereços inexistentes) e index_fallback.html (posts publicados no
// ERP depois do build), que não podem trazer a canonical de outra página; e que
// cada destino fixo dos redirecionamentos do vercel.json tem HTML pré-renderizado
// (um post de destino despublicado no ERP deixaria o 308 a apontar para nada).
// Por fim: o llms.txt lista todas as URLs do sitemap, cada página que não é post
// recebe um link de outra página (as landing pages de implantes, facetas e
// alinhadores estiveram meses sem nenhum) e a chave do IndexNow está publicada.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { INDEXNOW_KEY } from "./indexnow.mjs";

const dist = path.resolve("dist");
const errors = [];

const read = (file) => readFile(path.join(dist, file), "utf8").catch(() => null);
const htmlFileFor = (pathname) => (pathname === "/" ? "index.html" : `${pathname.slice(1)}/index.html`);
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) ?? [];
const attr = (tag, name) => new RegExp(`\\s${name}="([^"]*)"`, "i").exec(tag)?.[1];
const canonicals = (html) =>
  tags(html, "link").filter((t) => attr(t, "rel") === "canonical").map((t) => attr(t, "href"));
const isNoindex = (html) =>
  tags(html, "meta").some((t) => attr(t, "name") === "robots" && /noindex/i.test(attr(t, "content") ?? ""));

const sitemap = await read("sitemap.xml");
const locs = [...(sitemap ?? "").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length === 0) errors.push("sitemap.xml em falta ou sem URLs");

for (const loc of locs) {
  const { pathname } = new URL(loc);
  if (pathname !== "/" && pathname.endsWith("/")) errors.push(`${loc}: termina em barra (o vercel.json redireciona-a)`);
  const file = htmlFileFor(pathname);
  const html = await read(file);
  if (!html) {
    errors.push(`${loc}: sem dist/${file}`);
    continue;
  }
  const found = canonicals(html);
  if (found.length !== 1 || found[0] !== loc) errors.push(`${loc}: canonical ${found.join(", ") || "em falta"}`);
  if (isNoindex(html)) errors.push(`${loc}: tem noindex`);
}

const notFound = await read("404.html");
if (!notFound || !isNoindex(notFound)) errors.push("404.html em falta ou sem noindex");
const fallback = await read("index_fallback.html");
if (!fallback || canonicals(fallback).length > 0) errors.push("index_fallback.html em falta ou com canonical");

const { redirects = [] } = JSON.parse(await readFile("vercel.json", "utf8"));
for (const { source, destination } of redirects) {
  if (destination.includes(":")) continue; // destino com parâmetros (a regra da barra final)
  if (!(await read(htmlFileFor(destination)))) errors.push(`vercel.json: ${source} redireciona para ${destination}, sem HTML em dist/`);
}

const llms = (await read("llms.txt")) ?? "";
for (const loc of locs) if (!llms.includes(`](${loc})`)) errors.push(`llms.txt: falta ${loc}`);

// Links internos de cada página pré-renderizada (<rota>/index.html; o 404.html e
// o index_fallback.html não contam).
const htmlFiles = (await readdir(dist, { recursive: true })).filter((f) => f === "index.html" || f.endsWith("/index.html"));
const linksByFile = new Map();
for (const file of htmlFiles) {
  const hrefs = tags((await read(file)) ?? "", "a").map((t) => attr(t, "href")?.replace(/^https:\/\/www\.institutoareluna\.pt/, ""));
  linksByFile.set(file, new Set(hrefs));
}
for (const loc of locs) {
  const { pathname } = new URL(loc);
  if (pathname === "/" || pathname.startsWith("/blog/")) continue;
  const linked = [...linksByFile].some(([file, hrefs]) => file !== htmlFileFor(pathname) && hrefs.has(pathname));
  if (!linked) errors.push(`${loc}: nenhuma outra página tem link para ela`);
}

if ((await read(`${INDEXNOW_KEY}.txt`)) !== INDEXNOW_KEY) errors.push(`${INDEXNOW_KEY}.txt (chave do IndexNow) em falta ou com outro conteúdo`);

if (errors.length > 0) {
  console.error(`verify-prerender: ${errors.length} problema(s)\n  ${errors.join("\n  ")}`);
  process.exit(1);
}
console.log(`verify-prerender: ${locs.length} URLs do sitemap com HTML e canonical próprios`);
