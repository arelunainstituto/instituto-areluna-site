import { Quote, Star } from "lucide-react";
import { CaseStudy } from "@/lp/config/caseStudies";

interface PatientQuoteSectionProps {
  quote: CaseStudy["quote"];
}

const PatientQuoteSection = ({ quote }: PatientQuoteSectionProps) => {
  return (
    <section className="py-section-lg bg-background">
      <div className="container mx-auto px-container">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-14 h-14 md:w-20 md:h-20 text-primary mb-6 mx-auto" />

          <blockquote className="font-vivant-light text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug md:leading-tight mb-8 text-pretty">
            "{quote.text}"
          </blockquote>

          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary" />
            ))}
          </div>

          <div>
            <p className="font-vivant-medium text-lg md:text-xl font-medium text-foreground">
              {quote.author}
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              {quote.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientQuoteSection;
