import { ReactNode } from "react";

export interface CaseStudyBlock {
  number: number;
  title: string;
  paragraphs: ReactNode[];
}

export interface CaseStudyStep {
  /** Hora ou rotulo curto (ex: "08:30" ou "Etapa 1"). Vazio = nao mostra badge. */
  hour?: string;
  title: string;
  description: string;
  icon: "clock" | "stethoscope" | "smile";
}

export interface CaseStudy {
  slug: string;
  path: string;
  patientName: string;

  seo: {
    title: string;
    description: string;
    keywords: string;
  };

  hero: {
    titleTop: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
    /** ID do YouTube Short. Vazio = mostra placeholder. */
    youtubeId: string;
  };

  story: {
    eyebrow: string;
    titleMain: string;
    titleHighlight: string;
    intro: ReactNode;
    quote: string;
    blocks: CaseStudyBlock[];
  };

  beforeAfter: {
    titleMain: string;
    titleHighlight: string;
    description: string;
    /** Caminho da foto antes (frontal/destaque). Vazio = placeholder. */
    fotoAntes: string;
    /** Caminho da foto depois (frontal/destaque). Vazio = placeholder. */
    fotoDepois: string;
    altPrefix: string;
    /** Rotulo do badge esquerdo. Default: "Antes". */
    labelAntes?: string;
    /** Rotulo do badge direito. Default: "Depois — 24 horas". */
    labelDepois?: string;
    /** Fotos laterais ou de outros angulos (antes). Opcional. */
    lateraisAntes?: string[];
    /** Fotos laterais ou de outros angulos (depois). Opcional. */
    lateraisDepois?: string[];
  };

  treatmentDay: {
    titleMain: string;
    titleHighlight: string;
    description: string;
    steps: CaseStudyStep[];
  };

  quote: {
    text: string;
    author: string;
    subtitle: string;
  };

  finalCta: {
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    ctaLabel: string;
    trustIndicators: string[];
  };

  formFonteLead: string;
  formTitle: string;
  formDescription: string;
}

// =====================================================================
// Sergio Emanuel — caso real publicado, com video e fotos
// =====================================================================
export const sergioEmanuel: CaseStudy = {
  slug: "sergio-emanuel",
  path: "/caso-real",
  patientName: "Sergio Emanuel",

  seo: {
    title: "Caso Real: Sergio Emanuel — Implantes em 24h | Areluna",
    description:
      "A história do Sergio Emanuel: depois de anos a esconder o sorriso, recuperou a autoestima e a vontade de viver com implantes All-on-Four no Instituto Areluna.",
    keywords:
      "caso real implantes, depoimento implantes dentários, all-on-four testemunho, antes e depois implantes Porto, Sergio Emanuel Instituto Areluna",
  },

  hero: {
    titleTop: "A história do Sergio Emanuel:",
    titleHighlight: "voltou a ter fome de viver em 24h",
    subtitle:
      "Durante anos, escondeu o sorriso, evitou fotografias e sentiu a autoestima cair a cada dia.",
    description:
      "Depois dos implantes All-on-Four, não voltou a sorrir apenas para a câmara — voltou a sorrir para a vida. Veja o testemunho do Sergio na primeira pessoa.",
    ctaLabel: "🔘 Quero a minha avaliação gratuita",
    youtubeId: "eIgxjA8X4WM",
  },

  story: {
    eyebrow: "CASO REAL",
    titleMain: "A história do",
    titleHighlight: "Sergio Emanuel",
    intro: (
      <>
        Anos a esconder o sorriso, a evitar convívios e a sentir <em>"vergonha de aparecer"</em>.
        Hoje, o Sergio descreve a transformação numa frase simples:
      </>
    ),
    quote: "Desde o dia da cirurgia, nunca mais parei de sorrir, seja para aquilo que for.",
    blocks: [
      {
        number: 1,
        title: "Anos a evitar o mundo",
        paragraphs: [
          "Antes do tratamento, o Sergio vivia com muito desconforto e vergonha da boca. Sentia que isso afetava diretamente a autoestima, a forma como se via ao espelho e até a vontade de sair de casa.",
          "Começou a evitar fotografias, encontros sociais e situações em que tivesse de falar ou rir à vontade.",
          <>
            Ele próprio descreve esse período como uma fase <strong>sem vontade de viver</strong>,
            em que a "vergonha de aparecer" pesava todos os dias.
          </>,
        ],
      },
      {
        number: 2,
        title: "A decisão que mudou tudo",
        paragraphs: [
          "Cansado de se esconder e de se limitar, o Sergio decidiu procurar uma solução definitiva.",
          <>
            Na consulta de avaliação especializada, percebeu que era candidato à técnica{" "}
            <strong>All-on-Four</strong>: implantes que permitem uma prótese fixa em 24 horas,
            sem enxertos complexos e com um plano totalmente personalizado.
          </>,
          "Pela primeira vez em muito tempo, sentiu que alguém o ouvia, explicava cada passo e mostrava um caminho claro para recuperar o sorriso e a autoestima.",
        ],
      },
    ],
  },

  beforeAfter: {
    titleMain: "Antes e depois",
    titleHighlight: "em apenas 24 horas",
    description:
      "O resultado fala por si. À esquerda, o Sergio antes do tratamento. À direita, no dia seguinte à colocação dos implantes e da prótese fixa, a sorrir sem medo e sem vergonha.",
    fotoAntes: "/lp/sergio-emanuel/foto-antes.jpg",
    fotoDepois: "/lp/sergio-emanuel/foto-depois.jpg",
    altPrefix: "Sergio Emanuel",
  },

  treatmentDay: {
    titleMain: "O dia que",
    titleHighlight: "mudou tudo",
    description:
      "Um único dia separou o Sergio do passado que queria deixar para trás e da vida nova que começou com o sorriso.",
    steps: [
      {
        hour: "08:30",
        title: "Chegada ao Instituto",
        description:
          "Receção, conversa final com a equipa e revisão do plano de tratamento. Confiança, segurança e a certeza de que estava no sítio certo.",
        icon: "clock",
      },
      {
        hour: "10:00",
        title: "Cirurgia All-on-Four",
        description:
          "Colocação dos implantes sob anestesia local, com protocolos de conforto e segurança. Uma equipa que ele descreve como \"maravilhosa\" acompanhou cada passo.",
        icon: "stethoscope",
      },
      {
        hour: "16:00",
        title: "Colocação da prótese fixa",
        description:
          "No mesmo dia, o Sergio recebeu a prótese fixa e saiu do Instituto com um novo sorriso e uma nova forma de estar na vida.",
        icon: "smile",
      },
    ],
  },

  quote: {
    text: "Desde o dia da cirurgia, nunca mais parei de sorrir, seja para aquilo que for.",
    author: "Sergio Emanuel",
    subtitle: "Paciente · Tratamento All-on-Four no Instituto Areluna",
  },

  finalCta: {
    titlePrefix: "A história do Sergio podia ser a sua.",
    titleHighlight: "O próximo capítulo começa aqui.",
    description:
      "Marque a sua avaliação clínica gratuita e descubra se também é candidato ao tratamento All-on-Four. Uma Gestora de Pacientes do Instituto Areluna entra em contacto consigo nas próximas horas.",
    ctaLabel: "🔘 Quero marcar a minha avaliação",
    trustIndicators: [
      "Avaliação sem compromisso",
      "Plano de tratamento personalizado",
      "Implantes em 24 horas",
      "Acompanhamento clínico contínuo",
    ],
  },

  formFonteLead: "Caso Real - Sergio Emanuel",
  formTitle: "Avaliação Gratuita",
  formDescription: "Descubra se é candidato ao All-on-Four",
};

// =====================================================================
// Sandra Maria — caso real publicado.
// As fotos antes/depois ainda nao foram fornecidas: colocar em
// public/lp/sandra-maria/foto-antes.jpg e foto-depois.jpg quando estiverem
// disponiveis. O placeholder aparece automaticamente enquanto faltarem.
// =====================================================================
export const sandraMaria: CaseStudy = {
  slug: "sandra-maria",
  path: "/caso-sandra-maria",
  patientName: "Sandra Maria",

  seo: {
    title: "Caso Real: Sandra Maria — Implantes em 24h | Areluna",
    description:
      "A história da Sandra Maria: portuguesa a viver em França recuperou o sorriso e a mastigação com implantes All-on-Four no Instituto Areluna. Veja o testemunho.",
    keywords:
      "caso real implantes, depoimento implantes dentários, all-on-four testemunho, antes e depois implantes Porto, Sandra Maria Instituto Areluna",
  },

  hero: {
    titleTop: "A história da Sandra:",
    titleHighlight: "voltou a sorrir e a mastigar sem medo",
    subtitle:
      "Portuguesa a viver em França. Durante anos, sentiu vergonha do próprio sorriso e tinha dificuldades na mastigação.",
    description:
      "Hoje, depois dos implantes e das próteses definitivas, fala com orgulho de um sorriso bonito, limpo e de uma clínica que a tratou \"como cinco estrelas\".",
    ctaLabel: "🔘 Quero a minha avaliação gratuita",
    youtubeId: "LGnhkCPatsg",
  },

  story: {
    eyebrow: "CASO REAL",
    titleMain: "A história da",
    titleHighlight: "Sandra",
    intro: (
      <>
        Portuguesa, vive em França. Durante anos sentiu vergonha do próprio sorriso —
        os dentes tortos, as dificuldades na mastigação e o desconforto ao falar faziam
        com que se sentisse mal sempre que mostrava os dentes. Hoje, resume tudo numa
        frase simples:
      </>
    ),
    quote:
      "Fomos super bem atendidos, adorámos a cirurgia e até hoje correu tudo bem.",
    blocks: [
      {
        number: 1,
        title: "Anos a sentir vergonha ao sorrir",
        paragraphs: [
          <>
            Antes de chegar ao Instituto Areluna, descrevia o seu sorriso como{" "}
            <em>"não bonito"</em> e sentia-se mal sempre que ria ou tirava fotografias.
          </>,
          "Tinha dificuldades na mastigação e não conseguia comer com conforto, o que afetava o dia a dia e a confiança.",
          <>
            Depois de ser mãe, notou ainda mais alterações nos dentes —{" "}
            <em>"fui mãe, comi muito cálcio"</em>, conta, associando essa fase ao
            agravamento da situação.
          </>,
          "Os dentes tortos e a sensação de um sorriso descuidado acabaram por afetar também a autoestima.",
        ],
      },
      {
        number: 2,
        title: "A decisão que mudou tudo",
        paragraphs: [
          "Foi através de uma publicação no Facebook que a Sandra e o marido descobriram a clínica.",
          "Ele ligou, marcou a consulta e os dois vieram juntos conhecer o Instituto Areluna.",
          "Na primeira visita, sentiram-se bem recebidos, ouviram a explicação detalhada do plano e decidiram avançar com a mesma cirurgia para ambos.",
          <>
            A Sandra descreve a experiência de forma simples:{" "}
            <em>"Fomos super bem atendidos, adorámos a cirurgia e até hoje correu tudo bem."</em>
          </>,
        ],
      },
    ],
  },

  beforeAfter: {
    titleMain: "Antes e depois",
    titleHighlight: "em apenas 24 horas",
    description:
      "O resultado é visível no sorriso e na forma como a Sandra fala da sua experiência. À esquerda, o sorriso que a envergonhava. À direita, o sorriso limpo e alinhado com que se apresenta hoje.",
    fotoAntes: "/lp/sandra-maria/foto-antes-frente.jpg",
    fotoDepois: "/lp/sandra-maria/foto-depois-frente.jpg",
    altPrefix: "Sandra Maria",
    lateraisAntes: [
      "/lp/sandra-maria/foto-antes-lateral-1.jpg",
      "/lp/sandra-maria/foto-antes-lateral-2.jpg",
    ],
    lateraisDepois: [
      "/lp/sandra-maria/foto-depois-lateral-1.jpg",
      "/lp/sandra-maria/foto-depois-lateral-2.jpg",
    ],
  },

  treatmentDay: {
    titleMain: "O dia que",
    titleHighlight: "mudou tudo",
    description:
      "Tal como o marido, a Sandra passou por todo o processo no mesmo dia, com acompanhamento próximo da equipa clínica do Instituto Areluna.",
    steps: [
      {
        hour: "08:30",
        title: "Chegada ao Instituto",
        description:
          "Primeiro contacto presencial, receção calorosa e revisão do plano de tratamento, esclarecendo todas as dúvidas.",
        icon: "clock",
      },
      {
        hour: "10:00",
        title: "Cirurgia de implantes",
        description:
          "Procedimento realizado com protocolos de segurança e conforto. A Sandra relata que \"adorou a cirurgia\" e sentiu-se tranquila em todas as etapas.",
        icon: "stethoscope",
      },
      {
        hour: "16:00",
        title: "Colocação da prótese fixa",
        description:
          "No mesmo dia recebeu a prótese fixa provisória. Mais tarde regressou para as próteses definitivas — \"hoje levo as próteses definitivas e estamos felizes\".",
        icon: "smile",
      },
    ],
  },

  quote: {
    text: "Desde que caí na mão da Dra. Sara, eu amei. Ser tratada por ela é maravilhosa. Cinco estrelas.",
    author: "Sandra Maria",
    subtitle: "Paciente · Tratamento All-on-Four no Instituto Areluna",
  },

  finalCta: {
    titlePrefix: "A história da Sandra podia ser a sua.",
    titleHighlight: "O próximo capítulo começa aqui.",
    description:
      "Marque a sua avaliação clínica gratuita e descubra se também é candidato ao tratamento All-on-Four. Uma Gestora de Pacientes do Instituto Areluna entra em contacto consigo nas próximas horas.",
    ctaLabel: "🔘 Quero marcar a minha avaliação",
    trustIndicators: [
      "Avaliação sem compromisso",
      "Plano de tratamento personalizado",
      "Implantes em 24 horas",
      "Acompanhamento clínico contínuo",
    ],
  },

  formFonteLead: "Caso Real - Sandra Maria",
  formTitle: "Avaliação Gratuita",
  formDescription: "Descubra se é candidato/a ao All-on-Four",
};

// =====================================================================
// Diana Vieira ("Dina") — caso real publicado.
// Fotos: colocar em public/lp/diana-vieira/ com os nomes
//   foto-antes-frente.jpg, foto-depois-frente.jpg
//   foto-antes-lateral-1.jpg, foto-antes-lateral-2.jpg (opcional)
//   foto-depois-lateral-1.jpg, foto-depois-lateral-2.jpg (opcional)
// Enquanto faltarem ficheiros, o placeholder aparece automaticamente.
// =====================================================================
export const dianaVieira: CaseStudy = {
  slug: "diana-vieira",
  path: "/caso-diana-vieira",
  patientName: "Diana Vieira",

  seo: {
    title: "Caso Real: Diana Vieira — Próteses Definitivas | Areluna",
    description:
      "A história da Dina: depois de anos a esconder o sorriso, recuperou a confiança com as próteses definitivas no Instituto Areluna. Veja o testemunho real.",
    keywords:
      "caso real proteses dentarias, depoimento implantes, proteses definitivas Porto, antes e depois proteses, Diana Vieira Instituto Areluna",
  },

  hero: {
    titleTop: "A história da Dina:",
    titleHighlight: "voltou a rir sem medo, para o resto da vida",
    subtitle:
      "Durante anos, sentiu que o sorriso que tinha não era o que queria para si.",
    description:
      "Hoje, com as próteses definitivas, fala de uma \"vida longa a sorrir, brincar e conversar sem vergonha, sem tapar a boca e sem medo de comer\".",
    ctaLabel: "🔘 Quero a minha avaliação gratuita",
    youtubeId: "e0pjbWsx__U",
  },

  story: {
    eyebrow: "CASO REAL",
    titleMain: "A história da",
    titleHighlight: "Dina",
    intro: (
      <>
        A Dina sempre sentiu que o sorriso que tinha não a representava. Mesmo com as
        próteses provisórias, sabia que ainda não era <em>"aquele sorriso"</em> com que
        sonhava — o que a fizesse sentir-se totalmente confiante.
      </>
    ),
    quote: "Foi um longo tempo, mas valeu a pena.",
    blocks: [
      {
        number: 1,
        title: "Viver a tapar a boca",
        paragraphs: [
          "Antes do tratamento definitivo, a Dina vivia com medo de sorrir e com receio constante de que algo corresse mal ao comer.",
          "Tinha de ter cuidado em cada refeição, com medo de partir, soltar ou estragar alguma coisa, e isso afetava a forma como se relacionava com os outros.",
          "Sorrir, brincar, conversar à vontade… tudo vinha acompanhado da necessidade de tapar a boca e de controlar cada gesto.",
        ],
      },
      {
        number: 2,
        title: "A decisão que mudou tudo",
        paragraphs: [
          <>
            A Dina já usava próteses provisórias, mas sabia que ainda faltava o passo
            mais importante: os <strong>definitivos</strong>, o sorriso que queria
            "mesmo para si".
          </>,
          "Decidiu avançar com o tratamento no Instituto Areluna, com o objetivo claro de ter um sorriso estável, bonito e que a acompanhasse por muitos anos.",
          <>
            Foi um processo longo, com várias etapas e ajustes até chegar às próteses
            definitivas, mas, nas palavras da própria Dina:{" "}
            <em>"foi um longo tempo, mas valeu a pena"</em>.
          </>,
        ],
      },
    ],
  },

  beforeAfter: {
    titleMain: "Antes e depois",
    titleHighlight: "das próteses definitivas",
    description:
      "A diferença está no espelho, nas fotografias e, sobretudo, na forma como a Dina se sente. À esquerda, o sorriso com que conviveu durante anos, sempre com reservas. À direita, o sorriso definitivo, com o qual se sente finalmente segura e confiante.",
    fotoAntes: "/lp/diana-vieira/foto-antes-frente.jpg",
    fotoDepois: "/lp/diana-vieira/foto-depois-frente.jpg",
    altPrefix: "Diana Vieira",
    labelAntes: "Antes",
    labelDepois: "Depois — próteses definitivas",
    // Diana so usa o par frontal antes/depois — sem galeria adicional
  },

  treatmentDay: {
    titleMain: "O dia que",
    titleHighlight: "mudou tudo",
    description:
      "A entrega das próteses definitivas foi o capítulo final de um percurso de transformação.",
    steps: [
      {
        title: "Chegada ao Instituto",
        description:
          "Revisão de todo o processo, prova final, ajustes necessários e explicação detalhada de como seria a adaptação às próteses definitivas.",
        icon: "clock",
      },
      {
        title: "Ajustes e confirmação",
        description:
          "Verificação da mordida, do conforto e da estética, garantindo que o sorriso era exatamente aquilo que a Dina queria para si.",
        icon: "stethoscope",
      },
      {
        title: "Colocação das próteses definitivas",
        description:
          "Com o tratamento concluído, a Dina descreve que ganhou \"uma vida longa a sorrir, brincar, não ter vergonha, não tapar a boca e não ter medo de comer\".",
        icon: "smile",
      },
    ],
  },

  quote: {
    text: "Aquele que eu tinha antes não era o sorriso que eu queria para mim. Agora, com os definitivos, vou ter uma vida longa a sorrir, a brincar, sem vergonha de tapar a boca e sem medo de comer.",
    author: "Diana Vieira",
    subtitle: "Paciente · Próteses definitivas no Instituto Areluna",
  },

  finalCta: {
    titlePrefix: "A história da Dina podia ser a sua.",
    titleHighlight: "O próximo capítulo começa aqui.",
    description:
      "A Dina recomenda o tratamento \"à maioria das pessoas que gostava um dia de sorrir sem dificuldade, de rir e contactar com pessoas sem medo\". Marque a sua avaliação clínica gratuita e descubra o caminho certo para si.",
    ctaLabel: "🔘 Quero marcar a minha avaliação",
    trustIndicators: [
      "Avaliação sem compromisso",
      "Plano de tratamento personalizado",
      "Acompanhamento clínico contínuo",
      "Equipa especializada em reabilitação oral",
    ],
  },

  formFonteLead: "Caso Real - Diana Vieira",
  formTitle: "Avaliação Gratuita",
  formDescription: "Descubra o melhor plano de reabilitação oral para si",
};

/** Resolve um caso pelo slug — usado pela rota /casos/:slug. */
export const caseStudiesBySlug: Record<string, CaseStudy> = {
  [sergioEmanuel.slug]: sergioEmanuel,
  [sandraMaria.slug]: sandraMaria,
  [dianaVieira.slug]: dianaVieira,
};
