import { useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import OptimizedImage from "@/components/ui/OptimizedImage";

const CorpoClinicoSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const doctors = [
    {
      name: "Dra. Arethuza Luna",
      crm: "OMD 11845",
      specialty: "Harmonização Facial",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759413229/Dra_Arethuza_x7fsmo.jpg",
      bio: "Médica Dentista com especialização em Ortodontia, Ortopedia e Harmonização Facial. Master Injector Swift Beauty (NY) e em Harmonização Orofacial Avançada (Miami)."
    },
    {
      name: "Dra. Daiane Andrade",
      crm: "OMD 22681",
      specialty: "Endodontia",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759413228/Dra_Daiane_mywpym.jpg",
      bio: "Médica Dentista especialista em Endodontia, com atuação focada em tratamentos de precisão e preservação dentária."
    },
    {
      name: "Dra. Carla Salvi",
      crm: "OMD 15214",
      specialty: "Cirurgia Oral",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759413233/Dra_Karla_lgoql9.jpg",
      bio: "Cirurgiã Oral e Maxilofacial com Mestrado em Medicina Dentária. Atuação dedicada à reabilitação estética e funcional do sorriso."
    },
    {
      name: "Dr. Marcos Kawasaki",
      crm: "OM 75498",
      specialty: "Transplante Capilar",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759413232/Dr_Marcos_Kawasaki_zy97ko.jpg",
      bio: "Mais de 17 anos de experiência clínica. Pós-graduado em Dermatologia (ISMD) e especialista em Transplante Capilar."
    },
    {
      name: "Dra. Aline Marodin",
      crm: "OMD 12330",
      specialty: "Harmonização Facial",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759413228/Dra_Aline_yd8mq5.jpg",
      bio: "Cirurgiã Oral e Maxilofacial com formação em Harmonização Facial Avançada. Atuação voltada para resultados naturais e equilibrados."
    },
    {
      name: "Dra. Pethine Dalsasso",
      crm: "OMD 12228",
      specialty: "Odontopediatria",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759413228/Dra_Pethine_ommkbw.jpg",
      bio: "Médica Dentista especialista em Odontopediatria. Atendimento humanizado com foco no bem-estar e conforto das crianças."
    },
    {
      name: "Dra. Sara Ribeiro",
      crm: "OMD 08560",
      specialty: "Clínica Geral",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759413232/Dra_Sara_muubhr.jpg",
      bio: "Médica Dentista com atuação em odontologia clínica integrada e abordagem personalizada para cada paciente."
    },
    {
      name: "Dr. Leonardo Saraiva",
      crm: "OMD 11846",
      specialty: "Radiologia",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1759413227/Dr_Leonardo_Saraiva_hpzjei.jpg",
      bio: "Médico Dentista com especialização em Radiologia e Estomatologia. Diagnóstico preciso e visão abrangente da saúde orall."
    },
    {
      name: "Dra. Ana Vitória Marques",
      crm: "OMD 15209",
      specialty: "Estética Oral",
      image: "https://ui-avatars.com/api/?name=Ana+Vitoria+Marques&background=random",
      bio: "Mestre em Medicina Dentária pela Universidade do Porto, com foco em estética e reabilitação oral."
    },
    {
      name: "Dra. Patricia Tatsch",
      crm: "OM 47868",
      specialty: "Cirurgia Plástica",
      image: "https://ui-avatars.com/api/?name=Patricia+Tatsch&background=random",
      bio: "Cirurgiã Plástica reconhecida pela excelência em cirurgias da mama, unindo cuidado, técnica e naturalidade. Atuação em mamoplastia de aumento, redução e troca de prótese, além de Lipo HD de definição natural."
    },
    {
      name: "Dra. Thais Perlingeiro",
      crm: "OM 69564",
      specialty: "Nutrologia",
      image: "https://ui-avatars.com/api/?name=Thais+Perlingeiro&background=random",
      bio: "Médica com formação em Endocrinologia e especialização em Nutrologia. Atuação focada em emagrecimento, menopausa e medicina anti-aging, promovendo prevenção de doenças e equilíbrio hormonal."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-vivant text-jet dark:text-white mb-6">
            Corpo Clínico
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-jet/80 dark:text-gray-300 max-w-2xl mx-auto font-vivant-light">
            Nossa equipa de médicos especialistas está comprometida em oferecer o melhor cuidado com excelência e dedicação no padrão IAL
          </p>
        </div>

        {/* Carrossel Container */}
        <div className="relative px-16 pb-8">
          {/* Botões de Navegação */}
          <button
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-[hsl(var(--gold-leaf))] dark:bg-gray-900 hover:bg-amber-500 dark:hover:bg-gray-800 shadow-xl hover:shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110 border-2 border-white dark:border-gray-600"
            onClick={scrollPrev}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-[hsl(var(--gold-leaf))] dark:bg-gray-900 hover:bg-amber-500 dark:hover:bg-gray-800 shadow-xl hover:shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110 border-2 border-white dark:border-gray-600"
            onClick={scrollNext}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>

          {/* Carrossel */}
          <div className="embla overflow-hidden pb-4" ref={emblaRef}>
            <div className="embla__container flex">
              {doctors.map((doctor, index) => (
                <div key={index} className="embla__slide flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3">
                  <div
                    className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 h-full flex flex-col ${hoveredCard === index ? 'scale-105' : ''
                      }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Container da imagem */}
                    <div className="relative overflow-hidden flex-shrink-0">
                      <OptimizedImage
                        src={doctor.image}
                        alt={doctor.name}
                        width={400}
                        height={400}
                        className={`w-full h-80 transition-all duration-700 group-hover:scale-110 object-cover`}
                        style={doctor.name === "Dr. Leonardo Saraiva" ? { objectPosition: 'center 30%' } : {}}
                      />
                      {/* Overlay gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Badge de especialidade */}
                      <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                        <span className="text-xs font-medium text-jet dark:text-white">{doctor.specialty}</span>
                      </div>
                    </div>

                    {/* Informações do médico */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-vivant text-jet dark:text-white text-xl mb-2 group-hover:text-[hsl(var(--gold-leaf))] dark:group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300">
                          {doctor.name}
                        </h3>
                        <p className="text-jet/60 dark:text-gray-400 text-sm font-vivant-light mb-4">
                          {doctor.crm}
                        </p>
                        {doctor.bio && (
                          <p className="text-jet/80 dark:text-gray-300 text-xs font-vivant-light mb-4 line-clamp-4">
                            {doctor.bio}
                          </p>
                        )}
                      </div>

                      <div>
                        {/* Linha decorativa */}
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-transparent mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        {/* Especialidade detalhada */}
                        <div className="flex flex-col space-y-1">
                          <span className="text-sm text-jet/70 dark:text-gray-400">Especialista em</span>
                          <span className="text-sm font-medium text-[hsl(var(--gold-leaf))]">{doctor.specialty}</span>
                        </div>
                      </div>
                    </div>

                    {/* Efeito de borda animada */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(var(--gold-leaf))]/30 rounded-2xl transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CorpoClinicoSection;