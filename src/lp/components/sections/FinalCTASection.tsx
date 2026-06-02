import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface TrustIndicator {
  label: string;
}

interface FinalCTASectionProps {
  titlePrefix?: ReactNode;
  titleHighlight: ReactNode;
  description: ReactNode;
  ctaLabel: string;
  ctaTargetId?: string;
  trustIndicators: TrustIndicator[];
  beforeCta?: ReactNode;
}

const MARBLE_BG = "/lp/lovable-uploads/bad3a722-534a-44c5-a5a1-36043811b0f7.png";

const FinalCTASection = ({
  titlePrefix,
  titleHighlight,
  description,
  ctaLabel,
  ctaTargetId = "evaluation-form",
  trustIndicators,
  beforeCta,
}: FinalCTASectionProps) => {
  return (
    <section className="py-section-lg bg-gradient-hero relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('${MARBLE_BG}')` }}
      />

      <div className="container mx-auto px-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 md:mb-8">
            {titlePrefix && <>{titlePrefix} </>}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              {titleHighlight}
            </span>
          </h2>

          <p className="font-vivant-light text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {beforeCta}

          <div className="flex justify-center">
            <Button
              variant="premium"
              size="xl"
              className="font-sans font-medium tracking-wide text-base md:text-lg px-8 py-4"
              onClick={() => document.getElementById(ctaTargetId)?.scrollIntoView({ behavior: "smooth" })}
            >
              {ctaLabel}
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
              {trustIndicators.map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
