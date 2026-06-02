import { Clock, Smile, Stethoscope } from "lucide-react";
import { CaseStudy, CaseStudyStep } from "@/lp/config/caseStudies";

interface PatientTreatmentDaySectionProps {
  treatmentDay: CaseStudy["treatmentDay"];
}

const ICONS: Record<CaseStudyStep["icon"], typeof Clock> = {
  clock: Clock,
  stethoscope: Stethoscope,
  smile: Smile,
};

const PatientTreatmentDaySection = ({ treatmentDay }: PatientTreatmentDaySectionProps) => {
  return (
    <section className="py-section-lg bg-gradient-marble">
      <div className="container mx-auto px-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              {treatmentDay.titleMain}{" "}
              <span className="text-transparent bg-gradient-gold bg-clip-text">
                {treatmentDay.titleHighlight}
              </span>
            </h2>
            <p className="font-vivant-light text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {treatmentDay.description}
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Linha conectora alinhada ao centro vertical dos icones (32px padding + 40px half-icon = 72px) */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-[4.5rem] left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30"
            />

            {treatmentDay.steps.map((step, idx) => {
              const Icon = ICONS[step.icon];
              return (
                <article
                  key={idx}
                  className="relative bg-white rounded-2xl shadow-premium p-6 md:p-8 transition-shadow duration-300 hover:shadow-gold"
                >
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gradient-gold rounded-full shadow-gold">
                    <Icon className="w-9 h-9 text-white" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    {step.hour && (
                      <div className="inline-block px-3 py-1 bg-foreground text-white rounded-full text-xs font-bold tracking-wider mb-3">
                        {step.hour}
                      </div>
                    )}
                    <h3 className="font-vivant-medium text-xl md:text-2xl font-medium text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="font-vivant-light text-sm md:text-base text-foreground/80 leading-relaxed text-pretty">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientTreatmentDaySection;
