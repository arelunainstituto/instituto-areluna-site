import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { CaseStudy } from "@/lp/config/caseStudies";

interface PatientBeforeAfterSectionProps {
  beforeAfter: CaseStudy["beforeAfter"];
}

const ImageOrPlaceholder = ({
  src,
  alt,
  hint,
  aspectRatio = "4 / 3",
}: {
  src: string;
  alt: string;
  hint: string;
  aspectRatio?: string;
}) => {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className="w-full bg-gradient-marble border-2 border-dashed border-primary/40 flex items-center justify-center text-center p-6"
        style={{ aspectRatio }}
        role="img"
        aria-label={hint}
      >
        <div className="space-y-2">
          <ImagePlus className="w-10 h-10 text-primary mx-auto opacity-70" />
          <p className="text-sm font-vivant-medium font-medium text-foreground/80">
            {hint}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      className="w-full h-full object-cover"
      style={{ aspectRatio }}
    />
  );
};

const PatientBeforeAfterSection = ({ beforeAfter }: PatientBeforeAfterSectionProps) => {
  const hasLaterais =
    (beforeAfter.lateraisAntes?.length ?? 0) > 0 ||
    (beforeAfter.lateraisDepois?.length ?? 0) > 0;

  return (
    <section className="py-section-lg bg-gradient-marble">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 text-pretty">
              {beforeAfter.titleMain}{" "}
              <span className="text-transparent bg-gradient-gold bg-clip-text">
                {beforeAfter.titleHighlight}
              </span>
            </h2>
            <p className="font-vivant-light text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {beforeAfter.description}
            </p>
          </div>

          {/* Par frontal destacado */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <figure className="space-y-4">
              <div className="text-center">
                <span className="inline-block px-4 py-1 bg-foreground text-white rounded-full text-xs uppercase tracking-wider font-medium">
                  {beforeAfter.labelAntes ?? "Antes"}
                </span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-premium bg-white">
                <ImageOrPlaceholder
                  src={beforeAfter.fotoAntes}
                  alt={`${beforeAfter.altPrefix} antes do tratamento`}
                  hint={`Foto do/a ${beforeAfter.altPrefix} antes do tratamento`}
                />
              </div>
            </figure>

            <figure className="space-y-4">
              <div className="text-center">
                <span className="inline-block px-4 py-1 bg-gradient-gold text-white rounded-full text-xs uppercase tracking-wider font-medium">
                  {beforeAfter.labelDepois ?? "Depois — 24 horas"}
                </span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-gold bg-white">
                <ImageOrPlaceholder
                  src={beforeAfter.fotoDepois}
                  alt={`${beforeAfter.altPrefix} após o tratamento`}
                  hint={`Foto do/a ${beforeAfter.altPrefix} após o tratamento`}
                />
              </div>
            </figure>
          </div>

          {/* Galeria adicional de outros angulos */}
          {hasLaterais &&
            (() => {
              const hasAntes = (beforeAfter.lateraisAntes?.length ?? 0) > 0;
              const hasDepois = (beforeAfter.lateraisDepois?.length ?? 0) > 0;
              const ambosLados = hasAntes && hasDepois;

              return (
                <div className="mt-10 md:mt-14">
                  <h3 className="text-center font-vivant-medium text-lg md:text-xl text-foreground/80 mb-6">
                    Outras perspectivas
                  </h3>
                  <div
                    className={`grid gap-6 md:gap-8 ${
                      ambosLados ? "md:grid-cols-2" : "md:grid-cols-1 max-w-3xl mx-auto"
                    }`}
                  >
                    {hasAntes && (
                      <div className="space-y-3">
                        <div className="text-center">
                          <span className="inline-block px-3 py-1 bg-foreground text-white rounded-full text-[10px] uppercase tracking-wider font-medium">
                            Antes
                          </span>
                        </div>
                        <div
                          className={`grid gap-3 md:gap-4 ${
                            (beforeAfter.lateraisAntes?.length ?? 0) >= 3
                              ? "grid-cols-2 sm:grid-cols-3"
                              : "grid-cols-2"
                          }`}
                        >
                          {beforeAfter.lateraisAntes!.map((src, i) => (
                            <div key={src} className="rounded-lg overflow-hidden shadow-premium bg-white">
                              <ImageOrPlaceholder
                                src={src}
                                alt={`${beforeAfter.altPrefix} antes — ângulo ${i + 1}`}
                                hint="Lateral antes"
                                aspectRatio="3 / 4"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {hasDepois && (
                      <div className="space-y-3">
                        <div className="text-center">
                          <span className="inline-block px-3 py-1 bg-gradient-gold text-white rounded-full text-[10px] uppercase tracking-wider font-medium">
                            Depois
                          </span>
                        </div>
                        <div
                          className={`grid gap-3 md:gap-4 ${
                            (beforeAfter.lateraisDepois?.length ?? 0) >= 3
                              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                              : "grid-cols-2"
                          }`}
                        >
                          {beforeAfter.lateraisDepois!.map((src, i) => (
                            <div key={src} className="rounded-lg overflow-hidden shadow-gold bg-white">
                              <ImageOrPlaceholder
                                src={src}
                                alt={`${beforeAfter.altPrefix} depois — ângulo ${i + 1}`}
                                hint="Lateral depois"
                                aspectRatio="3 / 4"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            Fotografias autênticas, com autorização expressa do paciente para divulgação.
            Resultados individuais podem variar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PatientBeforeAfterSection;
