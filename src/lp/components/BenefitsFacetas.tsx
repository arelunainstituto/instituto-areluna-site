const BenefitsFacetas = () => {
  const benefits = [
    "Planeamento digital antes do tratamento",
    "Facetas em cerâmica e lentes de contacto dental",
    "Correção de cor e formato dos dentes",
    "Desgaste dentário definido caso a caso",
    "Consultas de controlo e manutenção",
    "Plano adaptado a cada paciente"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-marble">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            O que envolve o tratamento com{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              Facetas Dentárias?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-premium hover:shadow-gold transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-foreground text-base md:text-lg leading-relaxed group-hover:text-primary transition-colors duration-300">
                  {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsFacetas;
