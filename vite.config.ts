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

  // Blog — posts estáticos (sincronizar com src/data/blogStaticPosts.ts)
  "/blog/reabilitacao-oral-muito-mais-do-que-colocar-dentes",
  "/blog/estetica-integrada-o-equilibrio-entre-naturalidade-e-tecnologia",

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
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Prerender só na build de produção (puppeteer é pesado e desnecessário no dev)
    mode !== 'development' && prerender({
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
        // Força o locale do Chromium para pt-PT durante o prerender,
        // para o i18next-browser-languagedetector escolher PT por defeito.
        launchOptions: {
          args: ["--lang=pt-PT", "--accept-lang=pt-PT,pt"],
        },
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
}));
