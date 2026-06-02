const Testimonials = () => {
  const testimonials = [
    {
      text: "Nem acreditei quando vi o meu novo sorriso no espelho. Em 1 dia, a minha vida mudou!",
      name: "Maria Silva",
      age: "52 anos"
    },
    {
      text: "A segurança de morder, falar e sorrir… tudo voltou em 24 horas. Recomendo sem pensar duas vezes.",
      name: "João Santos",
      age: "65 anos"
    },
    {
      text: "O medo transformou-se em gratidão. Atendimento impecável e resultado surpreendente.",
      name: "Ana Costa",
      age: "48 anos"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-marble">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Pacientes que voltaram a{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              sorrir em apenas 24h
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-premium hover:shadow-gold transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💬</span>
                </div>
                
                <blockquote className="text-foreground text-base md:text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;