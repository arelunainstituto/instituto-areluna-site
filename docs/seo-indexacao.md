# Indexação — prerender, sitemap, redirecionamentos e 404

O site é uma SPA em React. O Google lê primeiro o HTML que o servidor entrega e só depois corre o JavaScript. Por isso cada página indexável tem de chegar já com o seu título e a sua canonical no HTML, gerado no build pelo prerender.

- **Páginas e posts:** `scripts/seo-pages.ts`. As páginas institucionais estão listadas à mão; os posts do blog vêm da API do ERP no momento do build.
- **Prerender e sitemap:** `vite.config.ts`. A mesma lista gera as rotas pré-renderizadas e o `dist/sitemap.xml`. Não existe `public/sitemap.xml`.
- **Portão:** `scripts/verify-prerender.mjs`, no fim de `npm run build`. Falha o build se uma URL do sitemap não tiver HTML próprio, tiver outra canonical ou tiver `noindex`, ou se um destino dos redirecionamentos do `vercel.json` não existir.
- **Servidor:** `vercel.json` (redirecionamentos, 404 e fallback do blog).

**Regra:** se a API do ERP falhar no build (erro, mais de 30 s, lista vazia ou incompleta), o build falha de propósito. A Vercel mantém o deploy anterior em vez de publicar posts sem prerender.

**Slugs no ERP:** só minúsculas, números e hífenes. Um post com outro slug fica fora do prerender e do sitemap (o build avisa no log) e só abre pelo `index_fallback.html`.

## O que o servidor entrega

| Pedido | Resposta |
|---|---|
| Página ou post pré-renderizado | 200 com o HTML dessa página |
| Endereço com barra no fim (`/blog/`) | 308 para o mesmo endereço sem barra |
| Endereço antigo (WordPress ou `<Navigate>` da app) | 308 para a página nova equivalente, num só salto (com ou sem barra) |
| `/blog/<slug>` (sem ponto) ainda sem prerender | 200 com `index_fallback.html` (HTML base, sem canonical); o React carrega o post |
| Qualquer outro endereço | 404 com `404.html` (a rota `/404` pré-renderizada) |

O `index_fallback.html` serve os posts publicados no ERP depois do último build. Esses posts só entram no sitemap e no prerender no build seguinte: convém um build diário (Deploy Hook da Vercel chamado por um agendamento).

## Página nova

1. Rota em `src/App.tsx` com `SEOHead` e canonical própria.
2. Caminho em `INDEXABLE_PAGES` (vai para o sitemap) ou `UNLISTED_PAGES` (noindex ou canonical noutra página) em `scripts/seo-pages.ts`.
3. Se substituir um endereço antigo, redirecionamento em `vercel.json`, antes da regra final `/:path+/`.

Os redirecionamentos usam `{/}?` no fim do `source` para aceitar o endereço com e sem barra num só salto. A regra `/:path+/` tem de ficar em último lugar: o primeiro redirecionamento que corresponde é o que vale.

## Search Console

- Propriedade de domínio `sc-domain:institutoareluna.pt`. Inclui os subdomínios (`lp.`, `embaixador.`, `vivobem.`, `pagamento.`), que não são deste repositório.
- Sitemap a enviar: `https://www.institutoareluna.pt/sitemap.xml`.
- O domínio sem www deve redirecionar para o www com **308** (Vercel → Domains). Com 307 (temporário), o Google mantém o endereço sem www como principal.
