import { Calendar, Clock, Globe, Heart, Stethoscope, Eye, Scissors, FlaskConical } from "lucide-react";

const CheckupIntegradoSection = () => {
  const checkupServices = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Avaliação Dentária Completa",
      description: "Exame oral detalhado, radiografias panorâmicas e plano de tratamento personalizado",
      duration: "2-3 horas"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Análise Capilar Avançada",
      description: "Tricoscopia digital, análise de densidade e avaliação para transplante capilar",
      duration: "1-2 horas"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Avaliação Estética Facial",
      description: "Análise facial 3D, planeamento de harmonização e rejuvenescimento",
      duration: "1-2 horas"
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Exames Laboratoriais",
      description: "Perfil hormonal, vitaminas, minerais e marcadores de saúde geral",
      duration: "30 min"
    }
  ];

  const benefits = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Tudo em 1 Dia",
      description: "Avaliação completa em apenas uma visita"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Assistente Pessoal",
      description: "Apoio completo no planeamento da viagem"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Cuidado Integrado",
      description: "Abordagem holística da sua saúde e estética"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Eficiência Máxima",
      description: "Otimização do tempo para pacientes internacionais"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(var(--gold-leaf))] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[hsl(var(--ring))] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--gold-leaf))]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full animate-pulse"></div>
            <span className="text-[hsl(var(--gold-leaf))] font-vivant text-sm font-medium tracking-wide">
              PROGRAMA EXCLUSIVO
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-vivant-skinny font-thin mb-6 text-jet dark:text-white leading-tight">
            Check-up Integrado para
            <span className="block text-[hsl(var(--gold-leaf))] font-vivant"> Pacientes Internacionais</span>
          </h2>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold-leaf))] to-transparent"></div>
          </div>

          <p className="text-lg md:text-xl text-jet/70 dark:text-gray-300 font-vivant-light max-w-3xl mx-auto leading-relaxed">
            Uma avaliação completa e integrada que combina medicina dentária, estética facial,
            análise capilar e exames laboratoriais em apenas um dia.
          </p>
        </div>

        {/* Serviços do Check-up */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-vivant text-center mb-12 text-jet dark:text-white">
            O que está incluído no seu <span className="text-[hsl(var(--gold-leaf))]">Check-up</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checkupServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[hsl(var(--gold-leaf))]/10 hover:border-[hsl(var(--gold-leaf))]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-vivant text-[hsl(var(--gold-leaf))] font-medium text-lg leading-tight">
                        {service.title}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3 text-jet/50 dark:text-gray-400" />
                        <span className="text-xs text-jet/50 dark:text-gray-400 font-vivant-light">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-jet/70 dark:text-gray-300 font-vivant-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div className="mb-16">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[hsl(var(--gold-leaf))]/15">
            <h3 className="text-2xl md:text-3xl font-vivant text-center mb-8 text-jet dark:text-white">
              Vantagens do <span className="text-[hsl(var(--gold-leaf))]">Programa</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="font-vivant text-[hsl(var(--gold-leaf))] font-medium mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-jet/70 dark:text-gray-300 font-vivant-light">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-vivant mb-4">
              Pronto para a sua transformação?
            </h3>
            <p className="text-lg font-vivant-light mb-8 opacity-90">
              Agende o seu Check-up Integrado e descubra o seu potencial completo
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/351123456789?text=Gostaria%20de%20agendar%20um%20Check-up%20Integrado"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[hsl(var(--gold-leaf))] px-8 py-4 rounded-2xl font-vivant font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Agendar Check-up</span>
                <Calendar className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-2 text-white/80">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-vivant-light">
                  Assistência em múltiplas línguas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckupIntegradoSection;