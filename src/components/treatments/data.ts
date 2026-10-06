// Dados estáticos da grelha de tratamentos (os textos vêm de i18n: treatments.items.<id>.*).
export const WHATSAPP_URL = "https://wa.me/351910098226";

export const CATEGORY_IDS = [
  "todos",
  "medicina-dentaria",
  "harmonizacao-orofacial",
  "estetica-facial",
  "estetica-corporal",
  "terapia-capilar",
  "transplante-capilar",
  "nutricao",
  "endocrinologia",
  "ansiedade",
  "cirurgia-plastica",
  "dermatologia",
] as const;

export interface TreatmentMeta {
  id: number;
  category: (typeof CATEGORY_IDS)[number];
}

const group = (category: TreatmentMeta["category"], from: number, to: number): TreatmentMeta[] =>
  Array.from({ length: to - from + 1 }, (_, i) => ({ id: from + i, category }));

export const TREATMENTS: TreatmentMeta[] = [
  ...group("medicina-dentaria", 1, 6),
  ...group("harmonizacao-orofacial", 7, 11),
  ...group("estetica-facial", 12, 15),
  ...group("estetica-corporal", 16, 18),
  ...group("terapia-capilar", 19, 21),
  ...group("transplante-capilar", 22, 23),
  { id: 24, category: "nutricao" },
  { id: 25, category: "endocrinologia" },
  { id: 26, category: "ansiedade" },
];
