import { Button } from "@/components/ui/button";
const heroWoman = "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954115/instituto-areluna/hero-woman.jpg";

const ContatoHeroSection = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" 
      style={{
        backgroundImage: `url(${heroWoman})`
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      ></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {/* Badge superior */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-[hsl(var(--gold-leaf))]/30 shadow-lg mb-8">
          <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full mr-3 animate-pulse"></div>
          <span className="text-[hsl(var(--gold-leaf))] font-vivant text-sm font-medium tracking-wide">
            FALE CONOSCO
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-vivant text-white mb-6 leading-tight">
          Entre em
          <span className="block text-[hsl(var(--gold-leaf))] drop-shadow-lg">
            Contato
          </span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg xs:text-xl sm:text-2xl text-white/90 font-vivant-light leading-relaxed mb-10 max-w-3xl mx-auto">
          Estamos aqui para ajudá-lo a alcançar o sorriso dos seus sonhos. 
          Agende sua consulta gratuita e transforme sua vida.
        </p>
        
        {/* Botões de ação */}
        <div className="flex flex-col xs:flex-row gap-4 xs:gap-6 justify-center items-center mb-16">
          <Button className="px-8 py-4 bg-[hsl(var(--gold-leaf))] hover:bg-amber-500 text-white rounded-xl transition-all duration-300 font-vivant-light tracking-wide text-base shadow-lg hover:shadow-xl transform hover:scale-105">
            AGENDAR CONSULTA
          </Button>
          <Button 
            variant="outline" 
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-jet rounded-xl transition-all duration-300 font-vivant-light tracking-wide text-base backdrop-blur-sm bg-white/10"
          >
            WHATSAPP DIRETO
          </Button>
        </div>

        {/* Informações de contato rápido */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 max-w-4xl mx-auto">
          {[
            { 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ), 
              title: "Localização", 
              info: "Centro de Évora" 
            },
            { 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ), 
              title: "Telefone", 
              info: "+351 266 000 000" 
            },
            { 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ), 
              title: "Email", 
              info: "geral@areluna.pt" 
            }
          ].map((contact, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 xs:p-6 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-[hsl(var(--gold-leaf))] mb-3 flex justify-center">{contact.icon}</div>
              <h3 className="text-white font-vivant text-sm xs:text-base font-medium mb-2">
                {contact.title}
              </h3>
              <p className="text-white/90 font-vivant-light text-xs xs:text-sm">
                {contact.info}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[hsl(var(--gold-leaf))]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-[hsl(var(--gold-leaf))]/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default ContatoHeroSection;