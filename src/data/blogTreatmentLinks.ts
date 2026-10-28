import { slugify } from "@/lib/utils";

/**
 * Página de tratamento ligada a cada post do blog, pelo tema do slug e do
 * título. São os links internos que levam o Google às landing pages a partir
 * dos artigos. Só temas em que a página trata diretamente do assunto: um post
 * sobre queda de cabelo não liga ao transplante, por exemplo.
 */
export interface TreatmentLink {
  path: string;
  label: string;
}

const RULES: { pattern: RegExp; link: TreatmentLink }[] = [
  {
    pattern: /implante|all-on|reabilitacao-oral|ponte-dentaria|carga-imediata/,
    link: { path: "/implantes-dentarios-porto", label: "Implantes dentários no Porto" },
  },
  { pattern: /faceta/, link: { path: "/facetas-dentarias-porto", label: "Facetas dentárias no Porto" } },
  {
    pattern: /alinhador|invisalign|aparelho|ortodont/,
    link: { path: "/alinhadores-invisiveis-porto", label: "Alinhadores invisíveis no Porto" },
  },
  { pattern: /transplante|calvicie/, link: { path: "/transplante-capilar", label: "Transplante capilar" } },
  {
    pattern: /botox|toxina|harmonizacao|preenchimento|olheiras|bichectomia|estetica-facial|bioestimulador/,
    link: { path: "/estetica-facial", label: "Estética facial" },
  },
];

/** Até duas páginas de tratamento para o post, pela ordem das regras. */
export const treatmentLinksFor = (post: { slug?: string; title: string }): TreatmentLink[] => {
  const text = `${post.slug ?? ""} ${slugify(post.title)}`;
  return RULES.filter((rule) => rule.pattern.test(text))
    .map((rule) => rule.link)
    .slice(0, 2);
};
