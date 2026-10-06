import { Check, Leaf, Sparkles, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Reveal, Section, SectionHeading } from "@/components/site";
import casoImg from "@/assets/transplante-caso-1.webp";

/**
 * Teaser do transplante capilar na home (padrão "feature split",
 * inspirado nos blocos de features do 21st.dev). Leva à página completa.
 */
const CapilarHomeSection = () => {
  const { t } = useTranslation();

  const points = [
    { icon: Leaf, title: t("capilar_home.points.fue.title"), desc: t("capilar_home.points.fue.desc") },
    { icon: Sparkles, title: t("capilar_home.points.natural.title"), desc: t("capilar_home.points.natural.desc") },
    { icon: ShieldCheck, title: t("capilar_home.points.lasting.title"), desc: t("capilar_home.points.lasting.desc") },
  ];

  return (
    <Section id="transplante-capilar" tone="light">
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
        </Reveal>

        <Reveal delay={120}>
          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <img
              src={casoImg}
              alt={t("capilar_home.image_alt")}
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
            />
            <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-jet/85 px-4 py-2 text-xs font-vivant uppercase tracking-[0.18em] text-gold-leaf">
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
