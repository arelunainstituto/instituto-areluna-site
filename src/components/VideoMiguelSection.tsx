import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClinicalDisclaimer from "@/components/ClinicalDisclaimer";
import { Reveal, Section, SectionHeading } from "@/components/site";
import { HOME_VIDEO } from "@/data/homeVideo";
import { track } from "@/lib/analytics";
import poster from "@/assets/video-miguel-1280.webp";
import poster640 from "@/assets/video-miguel-640.webp";

/**
 * «A história do Miguel» na home, no lugar da antiga faixa de pacientes que
 * vivem fora de Portugal. O vídeo está no YouTube: até ao clique só se mostra a
 * miniatura (servida pelo site), e o leitor carrega depois a partir do
 * youtube-nocookie.com. Assim a home não descarrega o leitor do YouTube nem
 * deixa cookies dele a quem não vê o vídeo.
 */
const VideoMiguelSection = () => {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    track("video_start", {
      video_title: HOME_VIDEO.title,
      video_provider: "youtube",
      video_url: `https://www.youtube.com/watch?v=${HOME_VIDEO.id}`,
      cta_section: "video-miguel",
    });
  };

  return (
    <Section data-track-section="video-miguel" id="historia-miguel" tone="dark">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow={t("video_home.eyebrow")}
            title={t("video_home.title")}
            highlight={t("video_home.highlight")}
            description={t("video_home.description")}
            className="mb-6 lg:mb-6"
          />
          <p className="mb-8 font-vivant-light text-lg leading-relaxed text-white/80">{t("video_home.invite")}</p>
          <Button asChild variant="gold-leaf" size="cta">
            <a href="#contacto-form">{t("video_home.cta")}</a>
          </Button>
          <ClinicalDisclaimer className="mx-0 mt-4 text-white/60" />
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2 lg:col-span-7">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-elegant ring-1 ring-gold-leaf/30">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${HOME_VIDEO.id}?autoplay=1&rel=0&playsinline=1`}
                title={HOME_VIDEO.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={play}
                aria-label={t("video_home.play", { title: HOME_VIDEO.title })}
                className="group absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-leaf"
              >
                <img
                  src={poster}
                  srcSet={`${poster640} 640w, ${poster} 1280w`}
                  sizes="(min-width:1152px) 640px, (min-width:1024px) 55vw, 100vw"
                  alt=""
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/5 to-transparent" aria-hidden="true" />
                <span
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-leaf text-jet shadow-gold transition-transform group-hover:scale-110 sm:h-20 sm:w-20"
                  aria-hidden="true"
                >
                  <Play className="ml-1 h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" />
                </span>
                <span
                  className="absolute left-4 top-4 rounded-full bg-jet-fixed/85 px-4 py-2 font-vivant text-xs uppercase tracking-[0.18em] text-gold-leaf"
                  aria-hidden="true"
                >
                  {t("video_home.duration")}
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default VideoMiguelSection;
