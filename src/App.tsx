import { Suspense } from "react";
import { lazyWithPreload } from "@/lib/lazyWithPreload";
import DeferredToaster from "@/components/DeferredToaster";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ScrollToHash from "./components/ScrollToHash";

const Index = lazyWithPreload(() => import("./pages/Index"));
const TreatmentsPage = lazyWithPreload(() => import("./pages/TreatmentsPage"));
// Página de pacientes internacionais fora do ar (em desenvolvimento).
// Para reativar: trocar EmDesenvolvimento por TourismDentarioPage na rota abaixo.
const EmDesenvolvimento = lazyWithPreload(() => import("./pages/EmDesenvolvimento"));
const TrasplanteCapilarPage = lazyWithPreload(() => import("./pages/TrasplanteCapilarPage"));
const EsteticaFacialPage = lazyWithPreload(() => import("./pages/EsteticaFacialPage"));
const ContatoPage = lazyWithPreload(() => import("./pages/ContatoPage"));
const BlogPage = lazyWithPreload(() => import("./pages/BlogPage"));
const BlogPostPage = lazyWithPreload(() => import("./pages/BlogPostPage"));
const PrivacyPolicy = lazyWithPreload(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazyWithPreload(() => import("./pages/TermsOfUse"));
const SobreAFundadora = lazyWithPreload(() => import("./pages/SobreAFundadora"));
const NotFound = lazyWithPreload(() => import("./pages/NotFound"));

// Landing pages (migradas do vivobem.pt) — fora de Header/Footer institucional
const LPImplantes = lazyWithPreload(() => import("./lp/pages/Implantes"));
const LPAlinhadores = lazyWithPreload(() => import("./lp/pages/Alinhadores"));
const LPFacetas = lazyWithPreload(() => import("./lp/pages/Facetas"));
const LPObrigado = lazyWithPreload(() => import("./lp/pages/Obrigado"));

/**
 * Pré-carrega a chunk da página do endereço atual, para o primeiro render
 * ser síncrono e substituir o HTML pré-renderizado sem ecrã vazio (src/main.tsx).
 * Redirects e rotas desconhecidas não precisam de nada.
 */
const ROUTE_PAGES: Record<string, { preload: () => Promise<unknown> }> = {
  "/": Index,
  "/casos-clinicos": Index,
  "/tratamentos": TreatmentsPage,
  "/ortodontia": TreatmentsPage,
  "/pacientes-internacionais": EmDesenvolvimento,
  "/transplante-capilar": TrasplanteCapilarPage,
  "/estetica-facial": EsteticaFacialPage,
  "/contato": ContatoPage,
  "/blog": BlogPage,
  "/sobre-a-fundadora": SobreAFundadora,
  "/privacidade": PrivacyPolicy,
  "/termos": TermsOfUse,
  "/implantes-dentarios-porto": LPImplantes,
  "/alinhadores-invisiveis-porto": LPAlinhadores,
  "/facetas-dentarias-porto": LPFacetas,
  "/obrigado": LPObrigado,
};

// eslint-disable-next-line react-refresh/only-export-components -- usado só no arranque (main.tsx)
export const preloadRoute = (pathname: string): Promise<unknown> => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const page = ROUTE_PAGES[path] ?? (path.startsWith("/blog/") ? BlogPostPage : undefined);
  return page ? page.preload() : Promise.resolve();
};

import CookieBanner from "./components/CookieBanner";

const App = () => (
  <ThemeProvider>
    <DeferredToaster />
    <BrowserRouter>
      <ScrollToHash />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950">
            <span className="sr-only">A carregar o conteúdo...</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tratamentos" element={<TreatmentsPage />} />
          <Route path="/pacientes-internacionais" element={<EmDesenvolvimento />} />
          <Route path="/turismo-dentario" element={<Navigate to="/pacientes-internacionais" replace />} />
          <Route path="/transplante-capilar" element={<TrasplanteCapilarPage />} />
          <Route path="/estetica-facial" element={<EsteticaFacialPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/sobre-a-fundadora" element={<SobreAFundadora />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<TermsOfUse />} />
          <Route path="/casos-clinicos" element={<Index />} />
          <Route path="/ortodontia" element={<TreatmentsPage />} />

          {/* Landing pages migradas do vivobem.pt (sem Header/Footer institucional) */}
          <Route path="/implantes-dentarios-porto" element={<LPImplantes />} />
          <Route path="/alinhadores-invisiveis-porto" element={<LPAlinhadores />} />
          <Route path="/facetas-dentarias-porto" element={<LPFacetas />} />
          <Route path="/casos/:slug" element={<Navigate to="/" replace />} />
          <Route path="/obrigado" element={<LPObrigado />} />

          {/* Redirects das URLs antigas do vivobem.pt para os slugs SEO no domínio principal.
              Os 301 reais ao nível DNS continuam a ser feitos no servidor do vivobem.pt. */}
          <Route path="/implantes" element={<Navigate to="/implantes-dentarios-porto" replace />} />
          <Route path="/alinhadores" element={<Navigate to="/alinhadores-invisiveis-porto" replace />} />
          <Route path="/facetas" element={<Navigate to="/facetas-dentarias-porto" replace />} />
          <Route path="/caso-real" element={<Navigate to="/" replace />} />
          <Route path="/caso-sandra-maria" element={<Navigate to="/" replace />} />
          <Route path="/caso-diana-vieira" element={<Navigate to="/" replace />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <CookieBanner />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
