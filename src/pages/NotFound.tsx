import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import { MessageSquare, Home, Sparkles, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Rota não encontrada:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    { label: "Implantes Dentários", href: "/implantes-dentarios-porto" },
    { label: "Alinhadores Invisíveis", href: "/alinhadores-invisiveis-porto" },
    { label: "Facetas Dentárias", href: "/facetas-dentarias-porto" },
    { label: "Turismo Dentário", href: "/turismo-dentario" },
    { label: "Contacto & Marcação", href: "/contato" },
  ];

  return (
    <div className="min-h-screen bg-jet text-white flex flex-col justify-between">
      <SEOHead
        title="Página Não Encontrada (404) | Instituto AreLuna"
        description="A página que procura não existe ou foi movida. Explore os nossos tratamentos dentários ou fale connosco."
        canonical="https://www.institutoareluna.pt/404"
        noindex={true}
      />
      <Header />

      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--gold-leaf))]/15 border border-[hsl(var(--gold-leaf))]/30 text-[hsl(var(--gold-leaf))] text-xs font-semibold uppercase tracking-widest">
            <Sparkles size={14} />
            Erro 404 · Conteúdo Não Encontrado
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-vivant text-[hsl(var(--gold-leaf))] drop-shadow-md">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-vivant text-white">
            Não conseguimos encontrar esta página
          </h2>

          <p className="text-pure-white/70 font-vivant-light text-base max-w-lg mx-auto leading-relaxed">
            O endereço que acedeu pode ter mudado ou não se encontra mais disponível. Mas a nossa equipa clínica em Lisboa e no Porto continua pronta para o acolher.
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

          {/* Links Rápidos */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-pure-white/50 uppercase tracking-widest font-semibold mb-4">
              Páginas e Tratamentos Populares:
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-pure-white/80 hover:text-[hsl(var(--gold-leaf))] border border-white/10 text-xs transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight size={12} className="opacity-60" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default NotFound;
