import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site";
import { MessageSquare, Home, Sparkles, ArrowRight } from "lucide-react";
import { useContact } from "@/contexts/ContactContext";

const NotFound = () => {
  const location = useLocation();
  const { contact, onContactClick } = useContact();

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
    { label: "Contacto & Marcação", href: "/contato" },
  ];

  return (
    <div className="min-h-screen bg-jet-fixed text-white flex flex-col justify-between">
      <SEOHead
        title="Página Não Encontrada (404) | Instituto AreLuna"
        description="A página que procura não existe ou foi movida. Explore os nossos tratamentos dentários ou fale connosco."
        canonical="https://www.institutoareluna.pt/404"
        noindex={true}
      />
      <Header />

      <main className="flex-1 flex items-center justify-center pt-48 sm:pt-56 md:pt-60 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8 ">
          <Eyebrow tone="dark"><Sparkles size={14} aria-hidden="true" />Erro 404 · Conteúdo Não Encontrado</Eyebrow>

          <h1 className="text-7xl sm:text-8xl font-vivant text-gold-leaf">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-vivant text-white">
            Não conseguimos encontrar esta página
          </h2>

          <p className="text-white/70 font-vivant-light text-base max-w-lg mx-auto leading-relaxed">
            O endereço que acedeu pode ter mudado ou não se encontra mais disponível. Mas a nossa equipa clínica no Porto continua pronta para o acolher.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild variant="gold-leaf" size="cta">
              <Link to="/"><Home size={18} />Voltar à Página Principal</Link>
            </Button>
            <Button asChild variant="outline-gold" size="cta">
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
                <MessageSquare size={18} />Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Links Rápidos */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-4">
              Páginas e Tratamentos Populares:
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-gold-leaf border border-white/10 text-xs min-h-[44px] transition-colors"
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
