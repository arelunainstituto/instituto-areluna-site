import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import EvaluationForm from "@/lp/components/EvaluationForm";

interface HeroSectionProps {
  overlayImage: string;
  overlayBackgroundPosition?: string;
  titleTop: ReactNode;
  titleHighlight: ReactNode;
  subtitle: ReactNode;
  description?: ReactNode;
  ctaLabel: string;
  ctaTargetId?: string;
  /** Conteudo customizado na coluna direita. Se passado, substitui o EvaluationForm. */
  rightSlot?: ReactNode;
  formInteresse?: string;
  formDescription?: string;
  formWebhookUrl?: string;
  formFonteLead?: string;
  formTitle?: string;
  formSuccessRedirect?: string;
  formWhatsappAfterSubmit?: React.ComponentProps<typeof EvaluationForm>["whatsappAfterSubmit"];
  formWrapperClassName?: string;
  showScrollIndicator?: boolean;
  showGradientBorders?: boolean;
}

const MARBLE_BG = "/lp/lovable-uploads/bad3a722-534a-44c5-a5a1-36043811b0f7.png";
const LOGO = "/lp/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png";

const HeroSection = ({
  overlayImage,
  overlayBackgroundPosition = "center",
  titleTop,
  titleHighlight,
  subtitle,
  description,
  ctaLabel,
  ctaTargetId = "evaluation-form",
  rightSlot,
  formInteresse,
  formDescription,
  formWebhookUrl,
  formFonteLead,
  formTitle,
  formSuccessRedirect,
  formWhatsappAfterSubmit,
  formWrapperClassName = "lg:col-span-2",
  showScrollIndicator = true,
  showGradientBorders = true,
}: HeroSectionProps) => {
  const right =
    rightSlot ??
    (formInteresse && formDescription && formWebhookUrl ? (
      <EvaluationForm
        interesse={formInteresse}
        description={formDescription}
        webhookUrl={formWebhookUrl}
        fonte_lead={formFonteLead}
        title={formTitle}
        successRedirect={formSuccessRedirect}
        whatsappAfterSubmit={formWhatsappAfterSubmit}
      />
    ) : null);

  return (
    <section className="relative min-h-[640px] md:min-h-[75svh] flex items-center overflow-hidden pt-[max(5rem,calc(var(--header-offset)+0.5rem))] pb-12 md:pb-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${MARBLE_BG}')` }}
      />

      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url('${overlayImage}')`,
          backgroundPosition: overlayBackgroundPosition,
        }}
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 text-left">
            <div className="mb-6">
              <img
                src={LOGO}
                alt="Instituto Areluna"
                width={320}
                height={120}
                fetchPriority="high"
                decoding="async"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
              />
            </div>

            <h1 className="font-vivant-black text-[clamp(1.875rem,7vw,3.75rem)] lg:text-6xl font-medium text-white mb-4 md:mb-6 leading-[1.15] tracking-tight text-pretty">
              {titleTop}
              <br />
              <span className="text-transparent bg-gradient-gold bg-clip-text">
                {titleHighlight}
              </span>
            </h1>

            <p className="font-vivant-light text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed text-pretty">
              {subtitle}
            </p>

            {description && (
              <p className="font-vivant-light text-base md:text-lg text-white/80 mb-8 leading-relaxed text-pretty">
                {description}
              </p>
            )}

            <Button
              variant="premium"
              size="xl"
              className="font-sans font-medium tracking-wide text-sm md:text-base w-full sm:w-auto whitespace-normal h-auto min-h-[3rem] py-3"
              onClick={() => document.getElementById(ctaTargetId)?.scrollIntoView({ behavior: "smooth" })}
            >
              {ctaLabel}
            </Button>
          </div>

          {right && <div className={formWrapperClassName}>{right}</div>}
        </div>
      </div>

      {showScrollIndicator && (
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      )}

      {showGradientBorders && (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-60" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-gold opacity-60" />
        </>
      )}
    </section>
  );
};

export default HeroSection;
