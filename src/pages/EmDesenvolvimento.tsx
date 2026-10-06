import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import { Home, MessageSquare, Wrench } from "lucide-react";

/**
 * Página temporária "em desenvolvimento".
 * Usada enquanto /pacientes-internacionais está fora do ar
 * (o conteúdo antigo continua em TourismDentarioPage.tsx para ser reativado).
 */
const EmDesenvolvimento = () => (
  <div className="min-h-screen bg-jet text-white flex flex-col justify-between">
    <SEOHead
      title="Página em desenvolvimento | Instituto AreLuna"
      description="Esta página está em desenvolvimento. Para marcar uma consulta de avaliação, contacte o Instituto AreLuna."
      canonical="https://www.institutoareluna.pt/pacientes-internacionais"
      noindex={true}
    />
    <Header />

    <main className="flex-1 flex items-center justify-center pt-48 sm:pt-56 md:pt-60 pb-20 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--gold-leaf))]/15 border border-[hsl(var(--gold-leaf))]/30 text-[hsl(var(--gold-leaf))] text-xs font-semibold uppercase tracking-widest">
          <Wrench size={14} />
          Em desenvolvimento
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-vivant text-white">
          Esta página está em desenvolvimento
        </h1>

        <p className="text-pure-white/70 font-vivant-light text-base max-w-lg mx-auto leading-relaxed">
          Estamos a preparar novos conteúdos. Entretanto, pode marcar a sua consulta de avaliação pelo WhatsApp ou através da página de contacto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[hsl(var(--gold-leaf))] hover:bg-amber-400 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-amber-900/20"
          >
            <Home size={18} />
            Voltar à Página Principal
          </Link>
          <a
            href="https://wa.me/351910098226"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all duration-300 shadow-lg"
          >
            <MessageSquare size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </main>

    <Footer />
    <WhatsAppFloat />
  </div>
);

export default EmDesenvolvimento;
