import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";
import heroWoman from "@/assets/DSC06081.webp";
import { PageHero } from "@/components/site/PageHero";
import { useContact } from "@/contexts/ContactContext";

const ContatoHeroSection = () => {
  const { t } = useTranslation();
  const { contact, onContactClick } = useContact();

  const contacts = [
    { icon: MapPin, title: t("contact_page.hero.quick_contact.location.title"), info: "Porto, Portugal", href: undefined },
    { icon: Phone, title: t("contact_page.hero.quick_contact.phone.title"), info: contact.phone, href: contact.telUrl },
    { icon: Mail, title: t("contact_page.hero.quick_contact.email.title"), info: "rececao@institutoareluna.pt", href: "mailto:rececao@institutoareluna.pt" },
  ];

  return (
    <PageHero
      image={heroWoman}
      eyebrow={t("contact_page.hero.badge")}
      title={t("contact_page.hero.title_start")}
      highlight={t("contact_page.hero.title_highlight")}
      description={t("contact_page.hero.subtitle")}
      actions={
        <>
          <Button asChild variant="gold-leaf" size="cta">
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
              {t("contact_page.hero.cta_main")}
            </a>
          </Button>
          <Button asChild variant="outline-gold" size="cta">
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContactClick}>
              {t("contact_page.hero.cta_whatsapp")}
            </a>
          </Button>
        </>
      }
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {contacts.map(({ icon: Icon, title, info, href }, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <Icon className="mx-auto mb-3 h-6 w-6 text-gold-leaf" aria-hidden="true" />
            <h3 className="mb-1 font-vivant text-base">{title}</h3>
            {href ? (
              <a
                href={href}
                onClick={href.startsWith("tel:") ? onContactClick : undefined}
                className="break-words font-vivant-light text-sm text-white/80 transition-colors hover:text-gold-leaf"
              >
                {info}
              </a>
            ) : (
              <p className="break-words font-vivant-light text-sm text-white/80">{info}</p>
            )}
          </div>
        ))}
      </div>
    </PageHero>
  );
};

export default ContatoHeroSection;
