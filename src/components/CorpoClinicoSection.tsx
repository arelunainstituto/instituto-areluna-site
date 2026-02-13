import { useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import OptimizedImage from "@/components/ui/OptimizedImage";
import { useTranslation } from 'react-i18next';

import draYaraImg from "@/assets/Dra_Yara_Campos.jpg";
import draFedericaImg from "@/assets/Dra_Federica_Laporta.jpg";
import draPatriciaImg from "@/assets/Dra_Patrícia_Tatsch.jpg";
import draArethuzaImg from "@/assets/Dra_Arethuza_Luna.jpg";
import drLeonardoImg from "@/assets/Dr_Leonardo_Saraiva.jpg";
import draDaianeImg from "@/assets/Dra_Daiane_Andrade.jpg";
import draCarlaImg from "@/assets/Dra_Carla_Salvi.jpg";
import drMarcosImg from "@/assets/Dr_Marcos_Kawasaki.jpg";
import draAlineImg from "@/assets/Dra_Aline_Marodin.jpg";
import draPethineImg from "@/assets/Dra_Pethine_Dalsasso.jpg";
import draSaraImg from "@/assets/Dra_Sara_Ribeiro.jpg";

const CorpoClinicoSection = () => {
  const { t } = useTranslation();
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
      id: "leonardo",
      name: "Dr. Leonardo Saraiva",
      crm: "OMD 11846",
      peloBrasil: true,
      image: drLeonardoImg
    },
    {
      id: "daiane",
      name: "Dra. Daiane Andrade",
      crm: "OMD 22681",
      peloBrasil: true,
      image: draDaianeImg
    },
    {
      id: "carla",
      name: "Dra. Carla Salvi",
      crm: "OMD 15214",
      peloBrasil: true,
      image: draCarlaImg
    },
    {
      id: "marcos",
      name: "Dr. Marcos Kawasaki",
      crm: "OM 75498",
      peloBrasil: true,
      image: drMarcosImg
    },
    {
      id: "aline",
      name: "Dra. Aline Marodin",
      crm: "OMD 12330",
      peloBrasil: true,
      image: draAlineImg
    },
    {
      id: "pethine",
      name: "Dra. Pethine Dalsasso",
      crm: "OMD 12228",
      peloBrasil: true,
      image: draPethineImg
    },
    {
      id: "sara",
      name: "Dra. Sara Ribeiro",
      crm: "OMD 08560",
      peloBrasil: false,
      image: draSaraImg
    },
    {
      id: "yara",
      name: "Dra. Yara Campos",
      crm: "OMD 15666",
      peloBrasil: true,
      image: draYaraImg
    },
    {
      id: "patricia",
      name: "Dra. Patrícia Tatsch",
      crm: "OMD 47868",
      peloBrasil: false,
      image: draPatriciaImg
    },
    {
      id: "federica",
      name: "Federica Laporta",
      crm: "",
      peloBrasil: false,
      image: draFedericaImg
    },
    {
      id: "thais",
      name: "Dra. Thais Perlingeiro",
      crm: "OM 69564",
      peloBrasil: true,
      image: ''
    },
    {
      id: "anavitoria",
      name: "Dra. Ana Vitória Marques",
      crm: "OMD 15209",
      peloBrasil: false,
      image: ''
    },
    {
      id: "arethuza",
      name: "Dra. Arethuza Luna",
      crm: "OMD 11845",
      peloBrasil: true,
      image: draArethuzaImg
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
            {t('team.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-jet/80 dark:text-gray-300 max-w-2xl mx-auto font-vivant-light">
            {t('team.subtitle')}
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
              {doctors.map((doctor, index) => {
                const bio = t(`team.doctors.${doctor.id}.bio`);
                const fullSpecialties = t(`team.doctors.${doctor.id}.specs`, { returnObjects: true }) as string[];
                const specialty = t(`team.doctors.${doctor.id}.specialty`);

                return (
                  <div key={index} className="embla__slide flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3">
                    <div
                      className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 h-full flex flex-col ${hoveredCard === index ? 'scale-105' : ''
                        }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Container da imagem */}
                      <div className="relative overflow-hidden flex-shrink-0">
                        {doctor.image ? (
                          <>
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
                          </>
                        ) : (
                          <div className="w-full h-80 bg-gradient-to-br from-[hsl(var(--gold-leaf))] to-amber-600 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center transition-all duration-700 group-hover:scale-110">
                            <span className="text-9xl font-vivant text-white/90">
                              {doctor.name.split(' ').pop()?.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}

                        {/* Badge de especialidade */}
                        <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                          <span className="text-xs font-medium text-jet dark:text-white">{specialty}</span>
                        </div>
                      </div>

                      {/* Informações do médico */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-vivant text-jet dark:text-white text-xl mb-2 group-hover:text-[hsl(var(--gold-leaf))] dark:group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300">
                            {doctor.name}
                          </h3>
                          <p className="text-jet/60 dark:text-gray-400 text-sm font-vivant-regular mb-4">
                            {doctor.crm}
                          </p>
                          {bio && (
                            <p className="text-jet/80 dark:text-gray-300 text-xs mb-4">
                              {bio}
                            </p>
                          )}
                        </div>

                        <div>
                          {/* Linha decorativa */}
                          <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                          {/* Especialidade detalhada */}
                          <div className="flex flex-col space-y-1">
                            <span className="text-sm text-jet/70 dark:text-gray-400">
                              {t('team.specialist_in')}
                            </span>
                            {Array.isArray(fullSpecialties) ? (
                              fullSpecialties.map((spec, i) => (
                                <span key={i} className="text-sm font-medium text-[hsl(var(--gold-leaf))] block">
                                  {spec}
                                </span>
                              ))
                            ) : (
                              <span className="text-sm font-medium text-[hsl(var(--gold-leaf))]">
                                {specialty}
                              </span>
                            )}
                            {doctor.peloBrasil && (
                              <span className="text-xs text-jet/50 dark:text-gray-500 italic mt-1 block">
                                {t('team.by_brazil')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Efeito de borda animada */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(var(--gold-leaf))]/30 rounded-2xl transition-all duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CorpoClinicoSection;