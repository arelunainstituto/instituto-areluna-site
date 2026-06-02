import { Play } from "lucide-react";
import SEO from "@/lp/components/SEO";
import LPTracking from "@/lp/components/LPTracking";
import Header from "@/lp/components/Header";
import HeroSection from "@/lp/components/sections/HeroSection";
import FormSection from "@/lp/components/sections/FormSection";
import FinalCTASection from "@/lp/components/sections/FinalCTASection";
import PatientStorySection from "@/lp/components/sections/PatientStorySection";
import PatientBeforeAfterSection from "@/lp/components/sections/PatientBeforeAfterSection";
import PatientTreatmentDaySection from "@/lp/components/sections/PatientTreatmentDaySection";
import PatientQuoteSection from "@/lp/components/sections/PatientQuoteSection";
import Footer from "@/lp/components/Footer";
import { CLINIC_IMAGE, LEAD_WEBHOOK_URL } from "@/lp/config/landingPages";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  organizationSchema,
} from "@/lp/lib/schema";
import { CaseStudy } from "@/lp/config/caseStudies";

const SITE_URL = "https://www.institutoareluna.pt";

const YOUTUBE_PARAMS = new URLSearchParams({
  rel: "0",
  modestbranding: "1",
  playsinline: "1",
  iv_load_policy: "3",
  fs: "1",
  color: "white",
  cc_load_policy: "0",
  disablekb: "1",
}).toString();

const HeroVideo = ({ youtubeId, patientName }: { youtubeId: string; patientName: string }) => (
  <div className="relative mx-auto w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-2xl shadow-gold/30 bg-black aspect-[9/16] border border-white/10">
    {youtubeId ? (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?${YOUTUBE_PARAMS}`}
        title={`Testemunho de ${patientName} — Implantes All-on-Four`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full border-0"
      />
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-primary/20 via-black/60 to-gold/20">
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center shadow-2xl shadow-gold/40">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" />
        </div>
        <p className="text-sm md:text-base font-vivant-medium font-medium text-white mb-1">
          Espaço para vídeo
        </p>
        <p className="text-xs text-white/70 max-w-[200px]">
          Substituir <code className="text-primary">youtubeId</code> em <code className="text-primary">caseStudies.tsx</code>
        </p>
      </div>
    )}
  </div>
);

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

const CaseStudyPage = ({ caseStudy }: CaseStudyPageProps) => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "MedicalProcedure",
      name: "Implantes Dentários All-on-Four",
      procedureType: "Implantologia Dentária",
      provider: { "@id": `${SITE_URL}/#organization` },
    },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: caseStudy.patientName },
    reviewBody: caseStudy.quote.text,
    datePublished: "2026-04-28",
  };

  return (
    <main id="main-content" tabIndex={-1} className="lp-scope">
      <SEO
        title={caseStudy.seo.title}
        description={caseStudy.seo.description}
        keywords={caseStudy.seo.keywords}
        path={caseStudy.path}
        jsonLd={[
          organizationSchema,
          buildServiceSchema({
            name: "Implantes Dentários All-on-Four",
            description:
              "Reabilitação oral completa com 4 implantes por arcada e prótese fixa em 24 horas, demonstrada através de caso clínico real.",
            path: caseStudy.path,
            serviceType: "Implantologia Dentária",
          }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: `Caso Real — ${caseStudy.patientName}`, path: caseStudy.path },
          ]),
          reviewSchema,
        ]}
      />
      <LPTracking />
      <Header />
      <HeroSection
        overlayImage={CLINIC_IMAGE}
        titleTop={caseStudy.hero.titleTop}
        titleHighlight={caseStudy.hero.titleHighlight}
        subtitle={caseStudy.hero.subtitle}
        description={caseStudy.hero.description}
        ctaLabel={caseStudy.hero.ctaLabel}
        rightSlot={
          <HeroVideo
            youtubeId={caseStudy.hero.youtubeId}
            patientName={caseStudy.patientName}
          />
        }
      />
      <FormSection
        eyebrow="AVALIAÇÃO GRATUITA"
        title="Quer a sua próxima"
        titleHighlight="história?"
        description="Preencha os seus dados e uma Gestora de Pacientes do Instituto Areluna entrará em contacto consigo em breve para agendar a sua avaliação clínica."
        formInteresse="Implantes Dentários"
        formDescription={caseStudy.formDescription}
        formTitle={caseStudy.formTitle}
        formFonteLead={caseStudy.formFonteLead}
        formWebhookUrl={LEAD_WEBHOOK_URL}
      />
      <PatientStorySection story={caseStudy.story} />
      <PatientBeforeAfterSection beforeAfter={caseStudy.beforeAfter} />
      <PatientTreatmentDaySection treatmentDay={caseStudy.treatmentDay} />
      <PatientQuoteSection quote={caseStudy.quote} />
      <FinalCTASection
        titlePrefix={caseStudy.finalCta.titlePrefix}
        titleHighlight={caseStudy.finalCta.titleHighlight}
        description={caseStudy.finalCta.description}
        ctaLabel={caseStudy.finalCta.ctaLabel}
        trustIndicators={caseStudy.finalCta.trustIndicators.map((label) => ({ label }))}
      />
      <Footer />
    </main>
  );
};

export default CaseStudyPage;
