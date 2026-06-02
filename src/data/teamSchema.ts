/**
 * Person schemas (schema.org) para o corpo clínico do Instituto AreLuna.
 * Usado no JSON-LD da home — completa o Dentist + Person da Dra. Arethuza.
 *
 * Dados em PT (registo do .pt). Mantidos aqui (e não em i18n) porque o
 * JSON-LD é entregue no HTML SSR/prerenderizado, antes do i18next correr.
 * Sincronizar com src/components/CorpoClinicoSection.tsx e
 * src/locales/pt/translation.json (chave `team.doctors.<id>`).
 */

interface TeamMember {
  id: string;
  name: string;
  /** Cédula da Ordem (ex: "OMD 11846") */
  crm?: string;
  jobTitle: string;
  knowsAbout: string[];
}

const TEAM: TeamMember[] = [
  { id: "leonardo",  name: "Dr. Leonardo Saraiva",     crm: "OMD 11846", jobTitle: "Médico Dentista — Radiologia",         knowsAbout: ["Radiologia", "Estomatologia e Patologia Oral"] },
  { id: "daiane",    name: "Dra. Daiane Andrade",      crm: "OMD 22681", jobTitle: "Médica Dentista — Endodontia",         knowsAbout: ["Endodontia", "Reabilitação Oral"] },
  { id: "carla",     name: "Dra. Carla Salvi",         crm: "OMD 15214", jobTitle: "Cirurgiã Oral e Maxilofacial",         knowsAbout: ["Cirurgia Oral"] },
  { id: "marcos",    name: "Dr. Marcos Kawasaki",      crm: "OM 75498",  jobTitle: "Médico — Transplante Capilar",         knowsAbout: ["Transplante Capilar", "Dermatologia"] },
  { id: "aline",     name: "Dra. Aline Marodin",       crm: "OMD 12330", jobTitle: "Cirurgiã Oral — Harmonização Facial",  knowsAbout: ["Harmonização Orofacial", "Cirurgia Oral"] },
  { id: "pethine",   name: "Dra. Pethine Dalsasso",    crm: "OMD 12228", jobTitle: "Médica Dentista — Odontopediatria",    knowsAbout: ["Odontopediatria"] },
  { id: "sara",      name: "Dra. Sara Ribeiro",        crm: "OMD 08560", jobTitle: "Médica Dentista — Clínica Geral",      knowsAbout: ["Clínica Geral e Reabilitação Oral", "Harmonização Orofacial"] },
  { id: "yara",      name: "Dra. Yara Campos",         crm: "OMD 15666", jobTitle: "Médica Dentista — Clínica Geral",      knowsAbout: ["Clínica Geral", "Estética Oral"] },
  { id: "patricia",  name: "Dra. Patrícia Tatsch",     crm: "OMD 47868", jobTitle: "Cirurgiã Plástica",                    knowsAbout: ["Cirurgia Plástica"] },
  { id: "federica",  name: "Federica Laporta",         crm: "",          jobTitle: "Higienista Oral",                      knowsAbout: ["Higienista Oral"] },
  { id: "thais",     name: "Dra. Thais Perlingeiro",   crm: "OM 69564",  jobTitle: "Médica — Endocrinologia",              knowsAbout: ["Endocrinologia", "Nutrologia", "Medicina Anti-Aging"] },
  { id: "anavitoria", name: "Dra. Ana Vitória Marques", crm: "OMD 15209", jobTitle: "Médica Dentista — Estética Oral",      knowsAbout: ["Estética Oral", "Reabilitação Oral"] },
];

const CLINIC_REF = {
  "@type": "Dentist",
  "name": "Instituto AreLuna",
  "url": "https://www.institutoareluna.pt/",
};

/**
 * Devolve um array de objectos `Person` (schema.org), um por membro da equipa,
 * todos vinculados ao Instituto AreLuna via `worksFor`.
 *
 * A Dra. Arethuza Luna **não** está incluída aqui (já tem o seu próprio
 * `Person` schema em Index.tsx e em SobreAFundadora.tsx).
 */
export const buildTeamPersonSchemas = () =>
  TEAM.map((m) => {
    const identifier = m.crm
      ? { "identifier": { "@type": "PropertyValue", "propertyID": "OMD/OM", "value": m.crm } }
      : {};
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": m.name,
      "jobTitle": m.jobTitle,
      "worksFor": CLINIC_REF,
      "knowsAbout": m.knowsAbout,
      ...identifier,
    };
  });
