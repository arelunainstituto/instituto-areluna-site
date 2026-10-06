import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site";
import useEmblaCarousel from 'embla-carousel-react';
import OptimizedImage from "@/components/ui/OptimizedImage";
import { useTranslation } from 'react-i18next';

import draYaraImg_400 from "@/assets/Dra_Yara_Campos-400.webp";
import draYaraImg_800 from "@/assets/Dra_Yara_Campos-800.webp";
import draArethuzaImg_400 from "@/assets/Dra_Arethuza_Luna-400.webp";
import draArethuzaImg_800 from "@/assets/Dra_Arethuza_Luna-800.webp";
import drLeonardoImg_400 from "@/assets/Dr_Leonardo_Saraiva-400.webp";
import drLeonardoImg_800 from "@/assets/Dr_Leonardo_Saraiva-800.webp";
import draDaianeImg_400 from "@/assets/Dra_Daiane_Andrade-400.webp";
import draDaianeImg_800 from "@/assets/Dra_Daiane_Andrade-800.webp";
import draCarlaImg_400 from "@/assets/Dra_Carla_Salvi-400.webp";
import draCarlaImg_800 from "@/assets/Dra_Carla_Salvi-800.webp";
import drMarcosImg_400 from "@/assets/Dr_Marcos_Kawasaki-400.webp";
import drMarcosImg_800 from "@/assets/Dr_Marcos_Kawasaki-800.webp";
import draPethineImg_400 from "@/assets/Dra_Pethine_Dalsasso-400.webp";
import draPethineImg_800 from "@/assets/Dra_Pethine_Dalsasso-800.webp";
import draSaraImg_400 from "@/assets/Dra_Sara_Ribeiro-400.webp";
import draSaraImg_800 from "@/assets/Dra_Sara_Ribeiro-800.webp";

const CorpoClinicoSection = () => {
  const { t } = useTranslation();
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
      image: drLeonardoImg_800,
      imageSrcSet: `${drLeonardoImg_400} 400w, ${drLeonardoImg_800} 800w`
    },
    {
      id: "daiane",
      name: "Dra. Daiane Andrade",
      crm: "OMD 22681",
      peloBrasil: true,
      image: draDaianeImg_800,
      imageSrcSet: `${draDaianeImg_400} 400w, ${draDaianeImg_800} 800w`
    },
    {
      id: "carla",
      name: "Dra. Carla Salvi",
      crm: "OMD 15214",
      peloBrasil: true,
      image: draCarlaImg_800,
      imageSrcSet: `${draCarlaImg_400} 400w, ${draCarlaImg_800} 800w`
    },
    {
      id: "marcos",
      name: "Dr. Marcos Kawasaki",
      crm: "OM 75498",
      peloBrasil: true,
      image: drMarcosImg_800,
      imageSrcSet: `${drMarcosImg_400} 400w, ${drMarcosImg_800} 800w`
    },
    {
      id: "pethine",
      name: "Dra. Pethine Dalsasso",
      crm: "OMD 12228",
      peloBrasil: true,
      image: draPethineImg_800,
      imageSrcSet: `${draPethineImg_400} 400w, ${draPethineImg_800} 800w`
    },
    {
      id: "sara",
      name: "Dra. Sara Ribeiro",
      crm: "OMD 08560",
      peloBrasil: false,
      image: draSaraImg_800,
      imageSrcSet: `${draSaraImg_400} 400w, ${draSaraImg_800} 800w`
    },
    {
      id: "yara",
      name: "Dra. Yara Campos",
      crm: "OMD 15666",
      peloBrasil: true,
      image: draYaraImg_800,
      imageSrcSet: `${draYaraImg_400} 400w, ${draYaraImg_800} 800w`
    },
    {
      id: "thais",
      name: "Dra. Thais Perlingeiro",
      crm: "OM 69564",
      peloBrasil: true,
      image: ''
    },
    {
      id: "arethuza",
      name: "Dra. Arethuza Luna",
      crm: "OMD 11845",
      peloBrasil: true,
      image: draArethuzaImg_800,
      imageSrcSet: `${draArethuzaImg_400} 400w, ${draArethuzaImg_800} 800w`
    }
  ];

  return (
    <Section tone="muted" width="wide">
      <SectionHeading title={t('team.title')} description={t('team.subtitle')} />

      <div className="relative">
        <button
          type="button"
          aria-label="Anterior"
          onClick={scrollPrev}
          className="absolute -left-1 top-40 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-jet/10 bg-white text-jet shadow-elegant transition-colors hover:border-gold-leaf hover:text-gold-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf sm:-left-4 dark:bg-gray-900 dark:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Seguinte"
          onClick={scrollNext}
          className="absolute -right-1 top-40 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-jet/10 bg-white text-jet shadow-elegant transition-colors hover:border-gold-leaf hover:text-gold-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf sm:-right-4 dark:bg-gray-900 dark:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="embla overflow-hidden px-1 py-2" ref={emblaRef}>
          <div className="embla__container flex">
            {doctors.map((doctor) => {
              const bio = t(`team.doctors.${doctor.id}.bio`);
              const fullSpecialties = t(`team.doctors.${doctor.id}.specs`, { returnObjects: true }) as string[];
              const specialty = t(`team.doctors.${doctor.id}.specialty`);

              return (
                <div key={doctor.id} className="embla__slide w-full flex-none px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-jet/10 bg-white transition-all duration-300 ease-elegant hover:border-gold-leaf/50 hover:shadow-elegant dark:border-white/10 dark:bg-gray-900">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                      {doctor.image ? (
                        <OptimizedImage
                          src={doctor.image}
                          srcSet={doctor.imageSrcSet}
                          sizes="(min-width:1280px) 20vw, (min-width:1024px) 25vw, (min-width:768px) 33vw, (min-width:640px) 50vw, 100vw"
                          alt={doctor.name}
                          width={400}
                          height={500}
                          className="h-full w-full object-cover"
                          style={doctor.id === "leonardo" ? { objectPosition: 'center 30%' } : undefined}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-gold">
                          <span className="font-vivant text-7xl text-jet/80">
                            {doctor.name.split(' ').pop()?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <span className="absolute left-3 top-3 rounded-full border border-gold-leaf/40 bg-white/95 px-3 py-1 font-vivant text-xs text-jet dark:bg-gray-900/95 dark:text-white">
                        {specialty}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-vivant text-lg leading-snug text-jet dark:text-white">{doctor.name}</h3>
                      <p className="mt-1 font-vivant-light text-sm text-jet/60 dark:text-gray-400">{doctor.crm.replace(/^(OMD|OM) /, "$1 n.º ")}</p>
                      {bio && <p className="mt-3 font-vivant-light text-xs leading-relaxed text-jet/75 dark:text-gray-300">{bio}</p>}

                      <div className="mt-auto flex flex-col gap-1 border-t border-jet/10 pt-4 dark:border-white/10">
                        <span className="font-vivant-light text-sm text-jet/70 dark:text-gray-400">{t('team.specialist_in')}</span>
                        {Array.isArray(fullSpecialties) ? (
                          fullSpecialties.map((spec, i) => (
                            <span key={i} className="block font-vivant text-sm text-gold-leaf">{spec}</span>
                          ))
                        ) : (
                          <span className="font-vivant text-sm text-gold-leaf">{specialty}</span>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CorpoClinicoSection;
