import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App, { preloadRoute } from './App.tsx'
import './index.css'
import i18n from './i18n';

// O HTML pré-renderizado já está visível. Antes de montar o React (que o
// substitui), esperamos pela chunk da página atual e pela língua detetada:
// assim o primeiro render é síncrono e igual ao HTML estático — sem ecrã vazio
// do Suspense e sem um segundo LCP. Teto de 4 s para nunca bloquear o arranque.
const i18nReady = new Promise<void>((resolve) => {
  if (i18n.isInitialized) resolve();
  else i18n.on('initialized', () => resolve());
});
// A fonte dos títulos usa font-display: block e está pré-carregada. Esperar por
// ela garante que o h1 pré-renderizado é pintado primeiro (é ele o LCP) e que o
// React só o substitui depois, com o mesmo tamanho.
const fontReady = document.fonts?.load('100 1em "Bw Vivant Skinny"').catch(() => undefined) ?? Promise.resolve();
// Só montamos depois de o browser registar a pintura do h1 pré-renderizado como
// LCP. Montar antes (numa carga muito rápida) fazia o h1 do React — por exemplo
// já em inglês — passar a ser o LCP, dependente de todo o JavaScript.
// Páginas sem h1 (ou browsers sem a API) seguem logo que a fonte esteja pronta.
const heroPainted = new Promise<void>((resolve) => {
  const root = document.getElementById("root");
  const supported =
    typeof PerformanceObserver !== "undefined" &&
    PerformanceObserver.supportedEntryTypes?.includes("largest-contentful-paint");
  if (!root?.firstElementChild || !supported) return resolve();
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as LargestContentfulPaint[]) {
      if (entry.element?.tagName === "H1") {
        observer.disconnect();
        resolve();
        return;
      }
    }
  });
  observer.observe({ type: "largest-contentful-paint", buffered: true });
  fontReady.then(() => setTimeout(() => { observer.disconnect(); resolve(); }, 300));
});
const bootTimeout = new Promise<void>((resolve) => setTimeout(resolve, 4000));

Promise.race([
  Promise.all([preloadRoute(window.location.pathname), i18nReady, fontReady, heroPainted]).catch(() => undefined),
  bootTimeout,
]).then(() => {
  createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
});

// Sinaliza ao prerender (puppeteer) que o app — incluindo as lazy chunks
// das rotas e as mutações do <head> feitas pelo react-helmet-async —
// terminou de aplicar o SEO.
//
// Estratégia: observar mutações no <head>; cada vez que o Helmet escreve
// algo, reiniciamos um debounce de 600ms. Quando passar esse tempo sem
// novas mutações, o head considera-se estável e disparamos o evento.
// Hard cap de 6s garante que mesmo em páginas com erro o snapshot ocorre.
{
  let settleTimer: ReturnType<typeof setTimeout> | undefined;
  let fired = false;
  const fire = () => {
    if (fired) return;
    fired = true;
    observer.disconnect();
    if (settleTimer) clearTimeout(settleTimer);
    document.dispatchEvent(new Event("app-rendered"));
  };
  const observer = new MutationObserver(() => {
    if (settleTimer) clearTimeout(settleTimer);
    // Debounce gordo o suficiente para apanhar lazy chunks (>1s) + segunda
    // passagem do Helmet quando a rota lazy finalmente monta.
    settleTimer = setTimeout(fire, 2000);
  });
  observer.observe(document.head, { childList: true, subtree: true, characterData: true });
  // Mínimo de espera antes do primeiro disparo (mesmo sem mutações)
  settleTimer = setTimeout(fire, 4500);
  // Hard cap absoluto — algumas rotas têm i18n async + lazy chunk + helmet
  setTimeout(fire, 12000);
}
