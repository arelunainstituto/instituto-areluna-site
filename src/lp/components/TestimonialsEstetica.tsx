const TestimonialsEstetica = () => {
  const testimonials = [
    {
      name: "Juliana Costa",
      age: "29 anos",
      text: "As facetas transformaram completamente meu sorriso! O resultado ficou muito natural e exatamente como eu sonhava.",
      rating: 5
    },
    {
      name: "Roberto Silva", 
      age: "41 anos",
      text: "Procedimento tranquilo e resultado incrível. Meu novo sorriso mudou minha autoestima. Recomendo sem dúvidas!",
      rating: 5
    },
    {
      name: "Camila Rodrigues",
      age: "33 anos", 
      text: "Amei o planejamento digital. Pude ver como ficaria antes mesmo de começar. O resultado superou minhas expectativas.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-marble">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Pacientes que conquistaram{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              o sorriso perfeito com facetas
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos pacientes falam sobre a experiência com facetas dentárias
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
              Mais de 400 sorrisos transformados com facetas dentárias
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

export default TestimonialsEstetica;