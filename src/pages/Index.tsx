import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { buildTeamPersonSchemas } from "@/data/teamSchema";

const GallerySection = lazy(() => import("@/components/GallerySection"));
const CorpoClinicoSection = lazy(() => import("@/components/CorpoClinicoSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const TreatmentsSection = lazy(() => import("@/components/TreatmentsSection"));
const CheckupIntegradoSection = lazy(() => import("@/components/CheckupIntegradoSection"));
const TourismDentarioSection = lazy(() => import("@/components/TourismDentarioSection"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const ContactFormSection = lazy(() => import("@/components/ContactFormSection"));

const SectionSkeleton = () => (
  <div
    className="mx-auto my-16 h-64 w-11/12 max-w-6xl animate-pulse rounded-3xl bg-gray-200/70 dark:bg-gray-800/40"
    aria-hidden="true"
  />
);

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Instituto AreLuna",
  "image": "https://www.institutoareluna.pt/og-institutoareluna.jpg",
  "url": "https://www.institutoareluna.pt/",
  "telephone": "+351220430090",
  "email": "rececao@institutoareluna.pt",
  "priceRange": "€€€",
  "description": "Clínica dentária e de estética avançada no Porto, com equipa multidisciplinar e padrão europeu de excelência.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua de Júlio Dinis 194 R/C",
    "addressLocality": "Porto",
    "postalCode": "4050-024",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.1530,
    "longitude": -8.6307
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "19:00"
  }],
  "sameAs": [
    "https://www.instagram.com/institutoareluna",
    "https://www.facebook.com/institutoareluna",
    "https://www.tiktok.com/@institutoareluna",
    "https://www.youtube.com/@institutoareluna",
    "https://x.com/institutoarelun"
  ],
  "medicalSpecialty": ["Dentistry","CosmeticDentistry","Orthodontics","OralAndMaxillofacialSurgery"],
  "isAcceptingNewPatients": true,
  "areaServed": [{"@type": "City", "name": "Porto"},{"@type": "Country", "name": "Portugal"}],
  "hasMap": "https://maps.google.com/?q=Instituto+AreLuna+Porto",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Multibanco, Cartão de Crédito, Transferência Bancária"
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dra. Arethuza Luna",
  "jobTitle": "Médica-Dentista, Ortodontia e Harmonização Orofacial",
  "image": "https://www.institutoareluna.pt/og-institutoareluna.jpg",
  "url": "https://www.institutoareluna.pt/sobre-a-fundadora",
  "worksFor": {"@type": "Dentist", "name": "Instituto AreLuna"},
  "alumniOf": "Universidade Federal do Paraná",
  "knowsAbout": ["Ortodontia","Ortopedia Facial","Harmonização Orofacial","Estética Facial","Harmonização Orofacial Avançada"],
  "sameAs": ["https://www.instagram.com/dra.arethuzaluna"]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Instituto AreLuna",
  "url": "https://www.institutoareluna.pt/",
  "description": "Clínica dentária e de estética avançada no Porto — Instituto AreLuna",
  "inLanguage": "pt-PT",
  "publisher": {"@type": "Organization", "name": "Instituto AreLuna"}
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Clínica Dentária e Estética Avançada Porto | Instituto AreLuna"
        description="Instituto AreLuna no Porto — tratamentos dentários e estética avançada com padrão europeu. Implantes, alinhadores, facetas, harmonização orofacial. Equipa multidisciplinar. Agende a sua consulta."
        canonical="https://www.institutoareluna.pt/"
        jsonLd={[dentistSchema, personSchema, websiteSchema, ...buildTeamPersonSchemas()]}
      />
      <Header />
      <HeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CorpoClinicoSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TreatmentsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CheckupIntegradoSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TourismDentarioSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BeforeAfterSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ContactFormSection />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

