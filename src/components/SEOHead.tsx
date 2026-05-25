import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Instituto AreLuna';
const BASE_URL = 'https://www.institutoareluna.pt';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-institutoareluna.jpg`;

interface SEOHeadProps {
  /** ≤ 60 chars — título único da página */
  title: string;
  /** 140-155 chars — com chamada para ação */
  description: string;
  /** URL completa da rota (para canonical e og:url) */
  canonical: string;
  /** URL da imagem OG 1200×630 (usa default se não fornecida) */
  ogImage?: string;
  /** alt text da imagem OG */
  ogImageAlt?: string;
  /** "website" ou "article" */
  ogType?: 'website' | 'article';
  /** JSON-LD schema(s) — pode ser objecto único ou array */
  jsonLd?: object | object[];
  /** true para páginas que não devem ser indexadas (ex: /privacidade) */
  noindex?: boolean;
  /** para artigos: data ISO 8601 de publicação */
  articlePublishedTime?: string;
  /** para artigos: data ISO 8601 de modificação */
  articleModifiedTime?: string;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = `${SITE_NAME} — Clínica Dentária e Estética Avançada no Porto`,
  ogType = 'website',
  jsonLd,
  noindex = false,
  articlePublishedTime,
  articleModifiedTime,
}: SEOHeadProps) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  // Normalizar jsonLd para array
  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      {/* Básico */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />

      {/* Artigo específico */}
      {articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@institutoarelun" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
