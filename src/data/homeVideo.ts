/**
 * Vídeo da home («A história do Miguel», canal do Instituto no YouTube).
 * Usado pela secção (src/components/VideoMiguelSection.tsx) e pelo JSON-LD
 * VideoObject da home (src/pages/Index.tsx), para os dois nunca divergirem.
 */
export const HOME_VIDEO = {
  id: "9nPZ-yl-1x4",
  title: "Conheça a história de superação do Miguel",
  description:
    "Durante 30 anos, o Miguel escondeu o sorriso e foi adiando para as próximas férias, até ao dia em que decidiu marcar a consulta.",
  uploadDate: "2026-11-09T13:23:18-08:00",
  duration: "PT2M44S",
};

export const homeVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: HOME_VIDEO.title,
  description: HOME_VIDEO.description,
  thumbnailUrl: `https://i.ytimg.com/vi/${HOME_VIDEO.id}/maxresdefault.jpg`,
  uploadDate: HOME_VIDEO.uploadDate,
  duration: HOME_VIDEO.duration,
  embedUrl: `https://www.youtube.com/embed/${HOME_VIDEO.id}`,
  publisher: { "@type": "Organization", name: "Instituto AreLuna" },
};
