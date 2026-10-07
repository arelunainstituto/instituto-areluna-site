import { CalendarCheck, Check, Leaf, Stethoscope } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ClinicalDisclaimer from "@/components/ClinicalDisclaimer";
import { Reveal, Section, SectionHeading } from "@/components/site";
import casoImg from "@/assets/transplante-caso-1-960.webp";
import casoImg480 from "@/assets/transplante-caso-1-480.webp";

/**
 * Teaser do transplante capilar na home (padrão "feature split",
 * inspirado nos blocos de features do 21st.dev). Leva à página completa.
 * Textos alinhados com /transplante-capilar (conformidade ERS); a imagem é
 * um dos casos clínicos que essa página publica com autorização do paciente.
 */
const CapilarHomeSection = () => {
  const { t } = useTranslation();

  const points = [
    { icon: Leaf, title: t("capilar_home.points.fue.title"), desc: t("capilar_home.points.fue.desc") },
    { icon: Stethoscope, title: t("capilar_home.points.evaluation.title"), desc: t("capilar_home.points.evaluation.desc") },
    { icon: CalendarCheck, title: t("capilar_home.points.follow_up.title"), desc: t("capilar_home.points.follow_up.desc") },
  ];

  return (
    <Section id="transplante-capilar" tone="muted">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow={t("capilar_home.eyebrow")}
            title={t("capilar_home.title")}
            highlight={t("capilar_home.highlight")}
            description={t("capilar_home.description")}
            className="mb-8 lg:mb-8"
          />
          <ul className="mb-10 space-y-5">
            {points.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-leaf/40 bg-gold-leaf/10 text-gold-leaf">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-vivant text-base text-jet dark:text-white">{title}</p>
                  <p className="font-vivant-light text-sm text-jet/70 dark:text-gray-300">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="cta">
              <a href="/transplante-capilar">{t("capilar_home.cta_primary")}</a>
            </Button>
            <Button asChild variant="outline-dark" size="cta">
              <a href="#contacto-form">{t("capilar_home.cta_secondary")}</a>
            </Button>
          </div>
          <ClinicalDisclaimer className="mt-4 mx-0 text-jet/60 dark:text-gray-400" />
        </Reveal>

        <Reveal delay={120}>
          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <img
              src={casoImg}
              srcSet={`${casoImg480} 480w, ${casoImg} 960w`}
              sizes="(min-width:1024px) 50vw, (min-width:448px) 448px, 100vw"
              alt={t("capilar_home.image_alt")}
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
            />
            <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-jet-fixed/85 px-4 py-2 text-xs font-vivant uppercase tracking-[0.18em] text-gold-leaf">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              {t("capilar_home.caption")}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
};

export default CapilarHomeSection;
