import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import SEO from "@/lp/components/SEO";
import LPTracking from "@/lp/components/LPTracking";

declare global {
  interface Window {
    fbq: (action: string, event: string, params?: any) => void;
  }
}

const Obrigado = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <main id="main-content" tabIndex={-1} className="lp-scope min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <LPTracking />
      <SEO
        title="Obrigado — Instituto Areluna"
        description="Inscrição recebida. Uma Gestora de Pacientes do Instituto Areluna entrará em contacto consigo em breve."
        path="/obrigado"
        noindex
      />
      <Card className="w-full max-w-xl mx-auto bg-white/95 backdrop-blur-md border-2 border-primary/30 shadow-2xl shadow-gold/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5" />

        <div className="relative p-6 sm:p-10 md:p-14 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              Obrigado!
            </h1>
            <p className="text-base sm:text-lg text-foreground/80 max-w-lg mx-auto leading-relaxed text-pretty">
              Uma <span className="font-semibold text-primary">Gestora de Pacientes</span> do Instituto Areluna
              entrará em contacto consigo em breve.
            </p>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default Obrigado;
