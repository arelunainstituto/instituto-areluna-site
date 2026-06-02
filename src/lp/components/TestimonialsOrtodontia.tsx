const TestimonialsOrtodontia = () => {
  const testimonials = [
    {
      name: "Marina Santos",
      age: "32 anos",
      text: "Usar alinhadores foi a melhor decisão! Ninguém percebia que eu estava em tratamento e o resultado ficou perfeito.",
      rating: 5
    },
    {
      name: "Carlos Mendes", 
      age: "28 anos",
      text: "O que mais me impressionou foi a comodidade. Poder remover para comer e escovar os dentes fez toda a diferença no meu dia a dia.",
      rating: 5
    },
    {
      name: "Ana Paula",
      age: "35 anos", 
      text: "Muito mais confortável que aparelho fixo. O resultado superou minhas expectativas e meu sorriso ficou exatamente como eu queria.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-marble">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Pacientes que transformaram{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              seus sorrisos com alinhadores
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos pacientes falam sobre a experiência com alinhadores invisíveis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-premium hover:shadow-gold transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💬</span>
              </div>
              
              <blockquote className="text-foreground text-lg leading-relaxed italic mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <div>
                <h4 className="font-vivant-black text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.age}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 shadow-premium inline-block max-w-2xl">
            <p className="text-foreground font-medium mb-2">
              Mais de 300 sorrisos transformados com alinhadores invisíveis
            </p>
            <p className="text-sm text-muted-foreground">
              Junte-se aos nossos pacientes satisfeitos e conquiste o sorriso que você sempre quis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOrtodontia;