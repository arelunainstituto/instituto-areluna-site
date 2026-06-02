import { Calendar, Clock, Globe, Heart, Stethoscope, Eye, Scissors, FlaskConical } from "lucide-react";
import { useTranslation } from "react-i18next";

const CheckupIntegradoSection = () => {
  const { t } = useTranslation();

  const checkupServices = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: t("checkup.services.dental.title"),
      description: t("checkup.services.dental.description"),
      duration: t("checkup.services.dental.duration")
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: t("checkup.services.hair.title"),
      description: t("checkup.services.hair.description"),
      duration: t("checkup.services.hair.duration")
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: t("checkup.services.facial.title"),
      description: t("checkup.services.facial.description"),
      duration: t("checkup.services.facial.duration")
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: t("checkup.services.labs.title"),
      description: t("checkup.services.labs.description"),
      duration: t("checkup.services.labs.duration")
    }
  ];

  const benefits = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: t("checkup.benefits.one_day.title"),
      description: t("checkup.benefits.one_day.description")
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: t("checkup.benefits.personal_assistant.title"),
      description: t("checkup.benefits.personal_assistant.description")
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: t("checkup.benefits.integrated_care.title"),
      description: t("checkup.benefits.integrated_care.description")
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t("checkup.benefits.efficiency.title"),
      description: t("checkup.benefits.efficiency.description")
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(var(--gold-leaf))] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[hsl(var(--ring))] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--gold-leaf))]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full animate-pulse"></div>
            <span className="text-[hsl(var(--gold-leaf))] font-vivant text-sm font-medium tracking-wide">
              {t("checkup.pill")}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-vivant-skinny font-thin mb-6 text-jet dark:text-white leading-tight">
            {t("checkup.title.main")}
            <span className="block text-[hsl(var(--gold-leaf))] font-vivant"> {t("checkup.title.highlight")}</span>
          </h2>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold-leaf))] to-transparent"></div>
          </div>

          <p className="text-lg md:text-xl text-jet/70 dark:text-gray-300 font-vivant-light max-w-3xl mx-auto leading-relaxed">
            {t("checkup.description")}
          </p>
        </div>

        {/* Serviços do Check-up */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-vivant text-center mb-12 text-jet dark:text-white">
            {t("checkup.services_title.main")} <span className="text-[hsl(var(--gold-leaf))]">{t("checkup.services_title.highlight")}</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checkupServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[hsl(var(--gold-leaf))]/10 hover:border-[hsl(var(--gold-leaf))]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-vivant text-[hsl(var(--gold-leaf))] font-medium text-lg leading-tight">
                        {service.title}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3 text-jet/50 dark:text-gray-400" />
                        <span className="text-xs text-jet/50 dark:text-gray-400 font-vivant-light">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-jet/70 dark:text-gray-300 font-vivant-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div className="mb-16">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[hsl(var(--gold-leaf))]/15">
            <h3 className="text-2xl md:text-3xl font-vivant text-center mb-8 text-jet dark:text-white">
              {t("checkup.benefits_title.main")} <span className="text-[hsl(var(--gold-leaf))]">{t("checkup.benefits_title.highlight")}</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="font-vivant text-[hsl(var(--gold-leaf))] font-medium mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-jet/70 dark:text-gray-300 font-vivant-light">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-vivant mb-4">
              {t("checkup.cta.title")}
            </h3>
            <p className="text-lg font-vivant-light mb-8 opacity-90">
              {t("checkup.cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/351910098226"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[hsl(var(--gold-leaf))] px-8 py-4 rounded-2xl font-vivant font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>{t("checkup.cta.button")}</span>
                <Calendar className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-2 text-white/80">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-vivant-light">
                  {t("checkup.cta.support")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckupIntegradoSection;