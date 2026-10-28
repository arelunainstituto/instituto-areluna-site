// Avisa o Bing (e os outros motores do IndexNow) dos endereços novos ou
// alterados, para os posts do ERP entrarem no índice que o ChatGPT e o Copilot
// usam sem esperar pela visita seguinte do crawler.
//
//   node scripts/indexnow.mjs <sitemap-antes.xml>   build diário (build-diario.yml)
//   node scripts/indexnow.mjs --todos               envia todo o sitemap publicado
//
// No build diário recebe o sitemap de antes do deploy, espera que o publicado
// mude (o build demora uns minutos) e envia só os endereços novos ou com outro
// lastmod. Antes disso o HTML ainda é o index_fallback.html, com noindex.
// A chave é pública por desenho do IndexNow: o ficheiro public/<chave>.txt
// prova que o pedido vem do dono do site (o verify-prerender confirma-o).
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export const INDEXNOW_KEY = "4fbfb54f8b73d25a41c3d7c314ede4c3";

const HOST = "www.institutoareluna.pt";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const WAIT_MS = 15 * 60_000;
const POLL_MS = 30_000;

/** loc → lastmod ("" sem lastmod). */
const sitemapEntries = (xml) =>
  new Map(
    [...xml.matchAll(/<loc>([^<]+)<\/loc>(?:\s*<lastmod>([^<]+)<\/lastmod>)?/g)].map((m) => [m[1], m[2] ?? ""]),
  );

/** Endereços do sitemap `after` que não estavam em `before` ou mudaram de lastmod. */
export const changedUrls = (before, after) => {
  const old = sitemapEntries(before);
  return [...sitemapEntries(after)].filter(([loc, lastmod]) => old.get(loc) !== lastmod).map(([loc]) => loc);
};

async function fetchSitemap() {
  const res = await fetch(SITEMAP_URL, { signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`indexnow: ${SITEMAP_URL} respondeu ${res.status}`);
  return res.text();
}

/** Espera que o sitemap publicado seja diferente de `before`; null se não mudar a tempo. */
async function waitForNewSitemap(before) {
  const deadline = Date.now() + WAIT_MS;
  while (Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, POLL_MS));
    const current = await fetchSitemap().catch(() => before);
    if (current !== before) return current;
  }
  return null;
}

async function submit(urlList) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`, urlList }),
    signal: AbortSignal.timeout(30_000),
  });
  // 200 = aceite; 202 = aceite, chave ainda por validar. 403/422 = chave ou endereços inválidos.
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`indexnow: a API respondeu ${res.status} ${await res.text()}`);
  }
  console.log(`indexnow: ${urlList.length} endereço(s) enviados (${res.status})\n  ${urlList.join("\n  ")}`);
}

async function main(arg) {
  if (arg === "--todos") return submit([...sitemapEntries(await fetchSitemap()).keys()]);
  if (!arg) throw new Error("indexnow: falta o ficheiro com o sitemap de antes do deploy (ou --todos).");

  const before = await readFile(arg, "utf8");
  const after = await waitForNewSitemap(before);
  if (after === null) {
    console.log("indexnow: o sitemap publicado não mudou (sem posts novos ou o build falhou); nada a enviar.");
    return;
  }
  const changed = changedUrls(before, after);
  if (changed.length === 0) {
    console.log("indexnow: o sitemap mudou mas nenhum endereço é novo nem tem outro lastmod; nada a enviar.");
    return;
  }
  await submit(changed);
}

// Só corre quando é o script chamado (o verify-prerender importa a chave daqui).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main(process.argv[2]);
