import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

/**
 * Rotas a pré-renderizar em build (FASE2 §4.1 — SSR/prerender).
 * Cobre todas as páginas indexáveis e os posts estáticos do blog. Os
 * redirects (`/implantes`, `/caso-real`, etc.) ficam de fora porque
 * são apenas <Navigate>: prerender resultaria no destino, duplicado.
 * Rotas dinâmicas servidas pela API (posts do ERP) só serão adicionadas
 * quando `ENABLE_ERP_POSTS` for ligado e tivermos um inventário fiável.
 */
const PRERENDER_ROUTES = [
  // Institucional
  "/",
  "/tratamentos",
  "/turismo-dentario",
  "/transplante-capilar",
  "/estetica-facial",
  "/contato",
  "/sobre-a-fundadora",
  "/blog",
  "/casos-clinicos",
  "/ortodontia",
  "/privacidade",
  "/termos",

  // Blog — slugs servidos pela API do ERP.
  // Atualizar manualmente quando forem publicados posts novos.
  "/blog/reabilitacao-oral-muito-mais-do-que-colocar-dentes",
  "/blog/estetica-integrada-o-equilibrio-entre-naturalidade-e-tecnologia",
  "/blog/implante-dentario-doi",
  "/blog/dentes-fixos-num-so-dia-carga-imediata",
  "/blog/turismo-dentario-como-funciona-vantagens-e-desafios",
  "/blog/conheca-os-principais-procedimentos-de-estetica-facial",
  "/blog/sera-que-vale-a-pena-usar-aparelho-para-correcao-ortodontica-numa-idade-avancada",

  // LPs migradas do vivobem.pt
  "/implantes-dentarios-porto",
  "/alinhadores-invisiveis-porto",
  "/facetas-dentarias-porto",
  "/casos/sergio-emanuel",
  "/casos/sandra-maria",
  "/casos/diana-vieira",
  "/obrigado",
];

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // Em Linux (Vercel/CI) o Chromium bundled do puppeteer falha por libs
  // do sistema em falta (libnspr4.so). Usamos @sparticuz/chromium —
  // auto-contido, pensado para serverless. Localmente (macOS/Windows)
  // mantemos o Chrome do puppeteer porque sparticuz é Linux-only.
  let launchOptions: Record<string, unknown> = {
    args: ["--lang=pt-PT", "--accept-lang=pt-PT,pt"],
  };
  const shouldPrerender = mode !== "development";
  if (shouldPrerender && process.platform === "linux") {
    const chromium = (await import("@sparticuz/chromium")).default;
    launchOptions = {
      args: [...chromium.args, "--lang=pt-PT", "--accept-lang=pt-PT,pt"],
      executablePath: await chromium.executablePath(),
      headless: true,
    };
  }

  return {
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Prerender só na build de produção (puppeteer é pesado e desnecessário no dev)
    shouldPrerender && prerender({
      routes: PRERENDER_ROUTES,
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        // Espera o evento `app-rendered` disparado em main.tsx assim que o
        // React e o Helmet estabilizam. Mais robusto do que um timer fixo.
        renderAfterDocumentEvent: "app-rendered",
        // Cap de segurança: se o evento nunca disparar (página com erro
        // de runtime, por exemplo), captura na mesma ao fim deste tempo.
        timeout: 40_000,
        // Concorrência 1 = serializado. Mais lento mas elimina race conditions
        // de timing entre lazy chunks / i18n / Helmet em rotas pesadas.
        maxConcurrentRoutes: 1,
        headless: true,
        // Linux: usa Chromium do sparticuz (auto-contido); macOS/Windows:
        // usa o Chrome bundled do puppeteer (pré-existente).
        launchOptions,
      },
      // Garantir lang="pt-PT" no <html> caso o helmet não o tenha definido
      postProcess(renderedRoute: { route: string; html: string }) {
        renderedRoute.html = renderedRoute.html.replace(
          /<html(\s[^>]*)?>/i,
          (m, attrs = "") => /lang=/.test(attrs) ? m : `<html lang="pt-PT"${attrs}>`,
        );
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
