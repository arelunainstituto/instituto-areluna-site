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
        "text": "O tempo depende da complexidade do caso. Na consulta de avaliação indicamos uma estimativa para a sua situação."
      }
    },
    {
      "@type": "Question",
      "name": "Os implantes dentários doem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O procedimento é realizado com anestesia local. No pós-operatório pode haver desconforto, que é controlado com a medicação indicada pelo médico dentista. O tempo de recuperação varia de pessoa para pessoa."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto custam as facetas de porcelana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O preço das facetas depende do número de dentes e da complexidade do caso, e é apresentado num orçamento escrito após a consulta. A primeira consulta de avaliação não tem custo; exames de imagem, se forem necessários, são orçamentados à parte."
      }
    },
    {
      "@type": "Question",
      "name": "O branqueamento dentário é seguro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quando indicado e realizado por profissionais qualificados, com produtos aprovados. Pode haver sensibilidade temporária. Fazemos sempre uma avaliação prévia da saúde dentária."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso de enxerto ósseo para colocar implantes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende da quantidade e da qualidade do osso disponível, que avaliamos na consulta com exames de imagem. Se for necessário enxerto, explicamos o procedimento, os riscos e os custos."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a durabilidade dos tratamentos estéticos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A durabilidade depende do tratamento, dos hábitos de cada pessoa e da manutenção. Na consulta explicamos o que esperar no seu caso e o plano de consultas de controlo."
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
        "text": "Em alguns casos é possível combinar tratamentos, quando for clinicamente adequado. O plano de tratamento é definido após a consulta de avaliação."
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
        "text": "Pode haver desconforto durante e após os procedimentos. Quando necessário, usamos anestesia tópica. Explicamos na consulta o que esperar em cada tratamento."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo demoram a surgir os resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo até se notarem efeitos varia conforme o tratamento e a pessoa. Na consulta explicamos o que esperar em cada procedimento."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a duração dos resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A duração dos efeitos varia conforme o tratamento, a zona e a pessoa. Na consulta explicamos o plano de manutenção indicado para si."
      }
    },
    {
      "@type": "Question",
      "name": "Como é o período de recuperação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende do tratamento. Pode haver inchaço ou vermelhidão temporários. Entregamos sempre instruções escritas para os cuidados após o tratamento."
      }
    },
    {
      "@type": "Question",
      "name": "Quem pode fazer harmonização orofacial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A indicação depende de uma consulta de avaliação e de diagnóstico individual. Os resultados variam de pessoa para pessoa."
      }
    },
    {
      "@type": "Question",
      "name": "Os tratamentos são seguros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Utilizamos produtos certificados e seguimos protocolos de segurança e higiene. Como qualquer ato clínico, estes tratamentos têm riscos, que explicamos na consulta de avaliação."
      }
    },
    {
      "@type": "Question",
      "name": "É possível combinar diferentes procedimentos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em alguns casos é possível combinar tratamentos, por exemplo toxina botulínica com preenchimentos, respeitando os intervalos de segurança. O plano é definido na consulta de avaliação."
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
        "text": "FUE (Follicular Unit Extraction) é uma técnica de transplante capilar em que se extraem unidades foliculares individuais da área dadora, que depois são implantadas na área recetora. A indicação depende da avaliação clínica."
      }
    },
    {
      "@type": "Question",
      "name": "O transplante capilar dói?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O procedimento é realizado com anestesia local. Nos primeiros dias pode haver desconforto, que é controlado com a medicação indicada pelo médico."
      }
    },
    {
      "@type": "Question",
      "name": "Quando começam a nascer os novos cabelos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O cabelo transplantado cresce de forma progressiva ao longo de vários meses. Na consulta explicamos a evolução esperada no seu caso; os resultados variam de pessoa para pessoa."
      }
    },
    {
      "@type": "Question",
      "name": "Quantas sessões são necessárias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O número de sessões depende do grau de queda e da área dadora, e é definido na consulta de avaliação."
      }
    },
    {
      "@type": "Question",
      "name": "O cabelo transplantado mantém-se?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os folículos são retirados de uma área dadora habitualmente menos afetada pela queda. A evolução depende de cada pessoa e da progressão da queda no cabelo não transplantado, que avaliamos em consultas de controlo."
      }
    },
    {
      "@type": "Question",
      "name": "Como é a recuperação pós-operatória?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo de recuperação varia de pessoa para pessoa. Na consulta explicamos os cuidados pós-operatórios e o calendário de consultas de controlo."
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
