// Pós-build das páginas pré-renderizadas (corre depois de `vite build`, ver
// package.json; só mexe em dist/):
// 1. CSS crítico: insere no <head> o CSS do que aparece no ecrã e passa a folha
//    completa a não bloquear a pintura (media="print" → "all", com <noscript>).
// 2. Retira os <link rel="modulepreload" as="script"> que o puppeteer captou
//    durante o prerender (chunks de secções abaixo da dobra, inseridos em
//    runtime pelo Vite). Competiam com o HTML e a fonte do h1 (o LCP); o React
//    pede essas chunks sozinho logo a seguir. Os preloads do build (vendor,
//    sem as="script") ficam.
// 3. Retira as tags de tracking que o puppeteer captou ao correr o site no
//    build (gtm.js, gtag/*, pixel de conversão do Google Ads, Facebook e os
//    scripts do LPTracking). No HTML estático carregavam logo na primeira
//    pintura e em duplicado, e o pixel do Ads levava parâmetros do build
//    (url=127.0.0.1). O snippet do GTM no index.html e o LPTracking voltam a
//    injetar tudo em runtime, como numa visita normal.
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import Beasties from "beasties";

const dist = path.resolve("dist");
const beasties = new Beasties({
  path: dist,
  publicPath: "/",
  preload: "media",
  pruneSource: false, // a folha completa continua igual (cache partilhada entre páginas)
  inlineFonts: true, // mantém o @font-face (font-display: block) no CSS crítico
  preloadFonts: false, // a fonte já tem <link rel="preload"> no index.html
  reduceInlineStyles: false,
  logLevel: "warn",
});

// <script ...src="(googletagmanager|doubleclick|facebook)..."></script> e todos os
// <script data-lp-tracking="1">...</script> (com src ou inline).
const CAPTURED_TRACKING =
  /<script\b(?=[^>]*(?:\bdata-lp-tracking=|\bsrc="https:\/\/(?:www\.googletagmanager\.com\/(?:gtm\.js|gtag\/)|googleads\.g\.doubleclick\.net\/|connect\.facebook\.net\/)))[^>]*>[\s\S]*?<\/script>\s*/g;

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "assets") yield* htmlFiles(full);
    } else if (entry.name === "index.html") {
      yield full;
    }
  }
}

let count = 0;
for await (const file of htmlFiles(dist)) {
  const html = (await readFile(file, "utf8"))
    .replace(/<link rel="modulepreload" as="script"[^>]*>\s*/g, "")
    .replace(CAPTURED_TRACKING, "");
  await writeFile(file, await beasties.process(html));
  count += 1;
}
console.log(`postbuild-html: ${count} páginas processadas`);
