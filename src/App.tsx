import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = lazy(() => import("./pages/Index"));
const TreatmentsPage = lazy(() => import("./pages/TreatmentsPage"));
const TourismDentarioPage = lazy(() => import("./pages/TourismDentarioPage"));
const TrasplanteCapilarPage = lazy(() => import("./pages/TrasplanteCapilarPage"));
const EsteticaFacialPage = lazy(() => import("./pages/EsteticaFacialPage"));
const ContatoPage = lazy(() => import("./pages/ContatoPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
