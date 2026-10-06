import { useState, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Play } from 'lucide-react';
import thumbImg from '../assets/thumb.webp';
import { Button } from '@/components/ui/button';
import { Section, SectionHeading, Reveal } from '@/components/site';

const VIDEO_SRC =
  "https://hvqckoajxhdqaxfawisd.supabase.co/storage/v1/object/sign/video/214-Legendado.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZmNGRkNy02NjAwLTRlYmMtYTc1OC1hNTBiYTczYzE0YzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby8yMTQtTGVnZW5kYWRvLm1wNCIsImlhdCI6MTc3NjQyNTc1OCwiZXhwIjoxOTM0MTA1NzU4fQ.Ev3jnYFKqtq3n0zFau2nIh-NtCEFy58REYfH59hDq_s";

// Padrão inspirado em "hero/feature com vídeo" do 21st.dev.
const TourismDentarioSection = () => {
  const { t } = useTranslation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <Section id="programa" tone="muted">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 space-y-6 lg:order-1">
          <div>
            <SectionHeading
              align="left"
              title={t("tourism.title.main")}
              highlight={t("tourism.title.highlight")}
              className="mb-0 lg:mb-0"
            />
          </div>

          <p className="rounded-2xl border border-jet/10 bg-white p-6 font-vivant text-xl leading-relaxed text-jet shadow-elegant dark:border-white/10 dark:bg-gray-900 dark:text-white md:text-2xl">
            <Trans
              i18nKey="tourism.question"
              components={{ highlight: <span className="font-medium text-gold-leaf" /> }}
            />
          </p>

          <p className="font-vivant-light text-lg leading-relaxed text-jet/80 dark:text-gray-300">
            {t("tourism.description")}
          </p>

          <div className="pt-2">
            <Button asChild variant="gold" size="cta">
              <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
                {t("tourism.button")}
              </a>
            </Button>
          </div>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm rounded-3xl border border-gold-leaf/30 bg-white p-4 shadow-elegant dark:border-white/10 dark:bg-gray-900">
            <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-black">
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                className="h-full w-full cursor-pointer object-cover"
                onClick={togglePlay}
                onPause={() => setIsVideoPlaying(false)}
                onPlay={() => setIsVideoPlaying(true)}
                playsInline
                preload="metadata"
                title="Pacientes que vivem fora de Portugal"
                poster={thumbImg}
              />
              {!isVideoPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Reproduzir vídeo"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-leaf text-jet shadow-gold transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default TourismDentarioSection;
