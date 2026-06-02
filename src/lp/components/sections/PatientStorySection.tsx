import { CaseStudy } from "@/lp/config/caseStudies";

interface PatientStorySectionProps {
  story: CaseStudy["story"];
}

const PatientStorySection = ({ story }: PatientStorySectionProps) => {
  return (
    <section className="py-section-lg bg-background">
      <div className="container mx-auto px-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-gold text-white rounded-full text-sm font-medium mb-4">
              {story.eyebrow}
            </span>
            <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-pretty">
              {story.titleMain}{" "}
              <span className="text-transparent bg-gradient-gold bg-clip-text">
                {story.titleHighlight}
              </span>
            </h2>
            <p className="font-vivant-light text-lg md:text-xl text-muted-foreground text-pretty">
              {story.intro}
            </p>
            <blockquote className="mt-6 mx-auto max-w-2xl border-l-4 border-primary pl-4 sm:pl-6 text-left font-vivant-medium italic text-foreground text-lg md:text-xl text-pretty">
              "{story.quote}"
            </blockquote>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {story.blocks.map((block) => (
              <article
                key={block.number}
                className="bg-gradient-marble rounded-2xl p-6 md:p-8 shadow-premium"
              >
                <div className="w-10 h-10 bg-gradient-gold text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {block.number}
                </div>
                <h3 className="font-vivant-medium text-xl sm:text-2xl font-medium text-foreground mb-4">
                  {block.title}
                </h3>
                <div className="space-y-3 font-vivant-light text-base md:text-lg text-foreground leading-relaxed text-pretty">
                  {block.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientStorySection;
