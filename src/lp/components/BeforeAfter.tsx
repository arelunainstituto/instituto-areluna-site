const BeforeAfter = () => {
  const cases = [
    {
      image: "/lp/lovable-uploads/825855a0-c45a-47ae-ae27-258aa064c6e1.png",
      title: "Transformação Completa"
    },
    {
      image: "/lp/lovable-uploads/362d794f-240a-47e8-bc66-69b825ad6807.png", 
      title: "Reabilitação Total"
    },
    {
      image: "/lp/lovable-uploads/6b85a641-26fb-41b3-a2fd-484a5e3f9e59.png",
      title: "Sorriso Renovado"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-marble relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-gold opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-gold opacity-80" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-gold text-white rounded-full text-sm font-medium mb-6">
            🌟 RESULTADOS REAIS
          </div>
          <h2 className="font-vivant-black text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8">
            Transformações{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              Reais em 24h
            </span>
          </h2>
          <p className="font-vivant-light text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja como o All-on-Four mudou a vida dos nossos pacientes. 
            Resultados que falam por si.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto mb-16">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-gold hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={case_.image} 
                    alt={case_.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay com efeito hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-vivant-medium text-2xl font-medium text-foreground mb-2">
                    {case_.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-gold mx-auto rounded-full" />
                </div>
              </div>
              
              {/* Badge decorativo */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium max-w-2xl mx-auto">
            <p className="font-vivant-light text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              "Resultados como estes podem ser seus também. 
              Marque a sua avaliação e descubra se é candidato ao All-on-Four."
            </p>
            <button
              onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-gold text-white hover:opacity-90 h-14 px-10 py-2 font-sans font-medium tracking-wide shadow-gold"
            >
              🔘 Quero Minha Transformação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;