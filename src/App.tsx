import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ScrollToHash from "./components/ScrollToHash";

const Index = lazy(() => import("./pages/Index"));
const TreatmentsPage = lazy(() => import("./pages/TreatmentsPage"));
const TourismDentarioPage = lazy(() => import("./pages/TourismDentarioPage"));
const TrasplanteCapilarPage = lazy(() => import("./pages/TrasplanteCapilarPage"));
const EsteticaFacialPage = lazy(() => import("./pages/EsteticaFacialPage"));
const ContatoPage = lazy(() => import("./pages/ContatoPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const SobreAFundadora = lazy(() => import("./pages/SobreAFundadora"));

// Landing pages (migradas do vivobem.pt) — fora de Header/Footer institucional
const LPImplantes = lazy(() => import("./lp/pages/Implantes"));
const LPAlinhadores = lazy(() => import("./lp/pages/Alinhadores"));
const LPFacetas = lazy(() => import("./lp/pages/Facetas"));
const LPObrigado = lazy(() => import("./lp/pages/Obrigado"));
const LPCaso = lazy(() => import("./lp/pages/Caso"));

import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
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
              <Route path="/turismo-dentario" element={<TourismDentarioPage />} />
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
              <Route path="/casos/:slug" element={<LPCaso />} />
              <Route path="/obrigado" element={<LPObrigado />} />

              {/* Redirects das URLs antigas do vivobem.pt para os slugs SEO no domínio principal.
                  Os 301 reais ao nível DNS continuam a ser feitos no servidor do vivobem.pt. */}
              <Route path="/implantes" element={<Navigate to="/implantes-dentarios-porto" replace />} />
              <Route path="/alinhadores" element={<Navigate to="/alinhadores-invisiveis-porto" replace />} />
              <Route path="/facetas" element={<Navigate to="/facetas-dentarias-porto" replace />} />
              <Route path="/caso-real" element={<Navigate to="/casos/sergio-emanuel" replace />} />
              <Route path="/caso-sandra-maria" element={<Navigate to="/casos/sandra-maria" replace />} />
              <Route path="/caso-diana-vieira" element={<Navigate to="/casos/diana-vieira" replace />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
