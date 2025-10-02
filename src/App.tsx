import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TreatmentsPage from "./pages/TreatmentsPage";
import TourismDentarioPage from "./pages/TourismDentarioPage";
import TrasplanteCapilarPage from "./pages/TrasplanteCapilarPage";
import EsteticaFacialPage from "./pages/EsteticaFacialPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/contexts/ThemeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
