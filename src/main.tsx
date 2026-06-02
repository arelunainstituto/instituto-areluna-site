import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import './i18n';

const root = createRoot(document.getElementById("root")!);
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

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
