const SITE_URL = "https://www.institutoareluna.pt";
const LOGO = `${SITE_URL}/lp/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${SITE_URL}/#organization`,
  name: "Instituto Areluna",
  alternateName: "Instituto Areluna - Clínica Estética e Dentária",
  url: SITE_URL,
  logo: LOGO,
  image: LOGO,
  telephone: "+351916880681",
  email: "geral@institutoareluna.pt",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua de Júlio Dinis 194 R/C",
    postalCode: "4050-024",
    addressLocality: "Porto",
    addressRegion: "Porto",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.1573,
    longitude: -8.6308,
  },
  areaServed: { "@type": "Country", name: "Portugal" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/institutoareluna",
    "https://www.facebook.com/institutoareluna",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Instituto Areluna",
  inLanguage: "pt-PT",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

interface ServiceArgs {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}

export const buildServiceSchema = ({ name, description, path, serviceType }: ServiceArgs) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name,
  description,
  url: `${SITE_URL}${path}`,
  procedureType: serviceType,
  bodyLocation: "Boca",
  provider: { "@id": `${SITE_URL}/#organization` },
  availableService: {
    "@type": "MedicalTherapy",
    name,
  },
});

interface FAQItem {
  question: string;
  answer: string;
}

export const buildFAQSchema = (items: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

interface BreadcrumbItem {
  name: string;
  path: string;
}

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});
