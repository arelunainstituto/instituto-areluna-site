import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(var(--jet))] via-[#1a1a1a] to-black pt-36 pb-20 sm:pt-40">
      {/* Imagem de fundo com baixa opacidade */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954598/instituto-areluna/97a1febf-3c27-4a63-a583-b2522013f3f4.jpg"
          alt="Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--jet))]/90 via-[#1a1a1a]/80 to-black/90"></div>
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[hsl(var(--gold-leaf))]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(var(--ring))]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Partículas sutis */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[hsl(var(--gold-leaf))]/20 rounded-full blur-sm animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[hsl(var(--gold-leaf))]/10 rounded-full blur-sm animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Ornamento superior */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[hsl(var(--gold-leaf))]/50 to-transparent"></div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-vivant-skinny font-thin mb-8 leading-tight tracking-wide text-white opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          O principal destino para estética avançada e <span className="font-vivant text-[hsl(var(--gold-leaf))]">medicina dentária</span> em Portugal
        </h1>

        <p className="text-base sm:text-lg lg:text-xl mb-12 font-vivant-light text-white/80 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Referência européia em saúde e estética integrada
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://wa.me/351910098226"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline-gold"
              className="px-8 py-6 rounded-full text-sm tracking-widest font-vivant border-[hsl(var(--gold-leaf))]/30 hover:bg-[hsl(var(--gold-leaf))]/10 text-white min-w-[280px]"
            >
              ENCONTRE O SEU PROCEDIMENTO
            </Button>
          </a>

          <a
            href="https://pagamento.institutoareluna.pt/b/eVq6oH2da5oM5nJahT9Zo0w?_gl=1*1u10ymg*_gcl_au*OTQ4NDQ4NDE1LjE3Njc4NzgxMDk.*_ga*MTI1MTYyMTI4OS4xNzY3ODc4MTA5*_ga_1FBN8LDFRR*czE3Njc4ODEyNDUkbzIkZzAkdDE3Njc4ODEyNDUkajYwJGwwJGgyOTA4ODU1NDk.*_ga_Q2XN6ZFDEN*czE3Njc4ODEyNDUkbzIkZzAkdDE3Njc4ODEyNDUkajYwJGwwJGgxNjA5NDc2Mjk1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="gold"
              className="px-8 py-6 rounded-full text-sm tracking-widest font-vivant text-white min-w-[280px] hover:scale-105 transition-transform duration-300"
            >
              RESERVA
            </Button>
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[hsl(var(--gold-leaf))]/50 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;