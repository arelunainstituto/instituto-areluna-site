/**
 * FAQPage schemas (schema.org) para as páginas com FAQ do Instituto AreLuna.
 * Ocupa espaço qualificado na SERP do Google (Rich Results / Perguntas Frequentes).
 */

export const treatmentsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto tempo demora um tratamento ortodôntico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo varia conforme a complexidade do caso, geralmente entre 12 a 30 meses. Com alinhadores invisíveis, pode ser mais rápido (12-24 meses). Durante a consulta inicial, fornecemos uma estimativa mais precisa baseada na sua situação específica."
      }
    },
    {
      "@type": "Question",
      "name": "Os implantes dentários doem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O procedimento é realizado com anestesia local, pelo que não sentirá dor durante a cirurgia. No pós-operatório, pode haver algum desconforto que é facilmente controlado com medicação. A maioria dos pacientes retoma as atividades normais em 2-3 dias."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto custam as facetas de porcelana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O preço das facetas varia conforme o número de dentes e complexidade do caso. Oferecemos planeamento digital personalizado e planos de pagamento flexíveis na consulta de avaliação."
      }
    },
    {
      "@type": "Question",
      "name": "O branqueamento dentário é seguro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, quando realizado por profissionais qualificados. Utilizamos técnicas aprovadas e produtos de qualidade farmacêutica. Pode haver sensibilidade temporária, que desaparece em poucos dias. Fazemos sempre uma avaliação prévia da saúde dentária."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso de enxerto ósseo para colocar implantes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende da quantidade e qualidade do osso disponível. Utilizamos técnicas avançadas de regeneração e protocolos como All-on-Four que reduzem significativamente a necessidade de enxertos extensos."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a durabilidade dos tratamentos estéticos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Facetas cerâmicas duram 15-20 anos com os cuidados adequados, branqueamento 2-3 anos, e implantes podem durar toda a vida com manutenção preventiva contínua."
      }
    },
    {
      "@type": "Question",
      "name": "Aceitam seguros de saúde?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, trabalhamos com os principais sistemas de saúde e emitimos documentação clínica detalhada para efeitos de reembolso e comparticipação."
      }
    },
    {
      "@type": "Question",
      "name": "É possível fazer vários tratamentos em simultâneo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, a abordagem multidisciplinar do Instituto AreLuna permite desenhar planos de tratamento integrados para otimizar tempo e resultados numa mesma jornada clínica."
      }
    }
  ]
};

export const esteticaFacialFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quais os tratamentos de estética facial disponíveis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Disponibilizamos harmonização orofacial completa, incluindo toxina botulínica, ácido hialurónico, bioestimuladores de colagénio, fios de sustentação e tratamentos para rejuvenescimento da pele."
      }
    },
    {
      "@type": "Question",
      "name": "Os tratamentos de harmonização facial doem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os procedimentos são minimamente invasivos e realizados com recurso a anestésicos tópicos ou locais e microcânulas, proporcionando o máximo conforto ao paciente."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo demoram a surgir os resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os preenchedores apresentam efeito imediato, enquanto a toxina botulínica consolida o resultado entre 3 a 14 dias. Os bioestimuladores revelam o pico de síntese de colagénio após 30 a 90 dias."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a duração dos resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A toxina botulínica dura entre 4 a 6 meses. O ácido hialurónico dura entre 9 a 18 meses, dependendo da área e densidade do produto. Bioestimuladores podem durar até 2 anos."
      }
    },
    {
      "@type": "Question",
      "name": "Como é o período de recuperação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A maioria dos pacientes retoma a sua rotina social e profissional imediatamente no próprio dia, com pequenas recomendações como evitar exposição solar e exercício intenso nas primeiras 24 horas."
      }
    },
    {
      "@type": "Question",
      "name": "Quem pode fazer harmonização orofacial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Homens e mulheres que pretendam prevenir ou tratar sinais de envelhecimento, assimetrias faciais ou realçar a harmonia facial. Cada plano é 100% individualizado após avaliação médica."
      }
    },
    {
      "@type": "Question",
      "name": "Os tratamentos são seguros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, todos os tratamentos são executados por médicos dentistas especialistas e cirurgiões registados na OMD/OM, utilizando produtos de padrão farmacêutico europeu e técnicas seguras com cânulas."
      }
    },
    {
      "@type": "Question",
      "name": "É possível combinar diferentes procedimentos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A combinação sinérgica de toxina, preenchimento e bioestimuladores no protocolo do Instituto AreLuna proporciona resultados mais harmónicos, naturais e duradouros."
      }
    }
  ]
};

export const transplanteCapilarFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é a técnica FUE de transplante capilar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A técnica FUE (Follicular Unit Extraction) consiste na extração individual de unidades foliculares da zona dadora sem necessidade de cortes lineares ou bisturi, eliminando cicatrizes visíveis."
      }
    },
    {
      "@type": "Question",
      "name": "O transplante capilar dói?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O procedimento é realizado sob anestesia local de alta precisão, sendo indolor durante toda a intervenção. O pós-operatório é tranquilo e sem dor intensa."
      }
    },
    {
      "@type": "Question",
      "name": "Quando começam a nascer os novos cabelos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os novos fios começam a emergir por volta do 3º ao 4º mês pós-procedimento. O resultado significativo é visível aos 6-9 meses, atingindo a maturação e densidade definitiva aos 12 meses."
      }
    },
    {
      "@type": "Question",
      "name": "Quantas sessões são necessárias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na vasta maioria dos casos, uma única sessão completa é suficiente para restaurar a linha capilar e a densidade desejada. Casos de calvície muito avançada são planeados estrategicamente."
      }
    },
    {
      "@type": "Question",
      "name": "O resultado do transplante capilar é permanente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Os folículos implantados provêm da zona dadora posterior e lateral da cabeça, geneticamente programados para não sofrer a ação da hormona DHT responsável pela calvície."
      }
    },
    {
      "@type": "Question",
      "name": "Como é a recuperação pós-operatória?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A recuperação é rápida. Em 3 a 5 dias o paciente pode regressar ao trabalho que não exija esforço físico. As pequenas crostas caem naturalmente entre o 7º e o 10º dia."
      }
    },
    {
      "@type": "Question",
      "name": "A área dadora fica com falhas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. A extração é realizada com micromotor de diâmetro milimétrico e cálculo rigoroso da densidade dadora, mantendo a homogeneidade estética sem clareiras."
      }
    },
    {
      "@type": "Question",
      "name": "O aspeto final fica natural?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Totalmente natural. A implantação de cada folículo respeita a direção, o ângulo anatómico e a densidade natural do cabelo de cada paciente."
      }
    }
  ]
};
