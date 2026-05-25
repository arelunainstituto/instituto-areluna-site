import Header from "@/components/Header";
import ContatoHeroSection from "@/components/ContatoHeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Instituto AreLuna",
  "url": "https://www.institutoareluna.pt/contato",
  "telephone": "+351220430090",
  "email": "rececao@institutoareluna.pt",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua de Júlio Dinis 194 R/C",
    "addressLocality": "Porto",
    "postalCode": "4050-024",
    "addressCountry": "PT"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "19:00"
  }],
  "hasMap": "https://maps.google.com/?q=Instituto+AreLuna+Porto"
};

const ContatoPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contacto e Marcasão de Consulta no Porto | Instituto AreLuna"
        description="Marque a sua consulta no Instituto AreLuna, Porto. Clínica dentária e de estética avançada. Telefone +351 220 430 090, e-mail e WhatsApp disponíveis. Seg-Sex 09h-19h."
        canonical="https://www.institutoareluna.pt/contato"
        jsonLd={contactSchema}
      />
      <Header />
      <ContatoHeroSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContatoPage;