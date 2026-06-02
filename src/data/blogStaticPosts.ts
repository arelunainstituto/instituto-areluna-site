import type { Post } from "@/services/marketingApi";
import { slugify } from "@/lib/utils";

/**
 * Toggle: enquanto `false`, o blog mostra **apenas** os posts estáticos
 * definidos abaixo — a API do ERP não é consultada.
 * Mudar para `true` quando a publicação no ERP estiver arrumada e quisermos
 * voltar a mostrar os posts vindos de lá em conjunto com os estáticos.
 */
export const ENABLE_ERP_POSTS = false;

/**
 * Posts publicados diretamente no frontend (não vêm do ERP).
 *
 * Porquê estáticos: o editor do ERP é WYSIWYG e escapa HTML colado, o que
 * impede manter a estrutura/sequência exata destes artigos. Defini-los aqui
 * dá controlo total sobre conteúdo, ordem das imagens e design.
 *
 * As imagens vivem em /public/blog/ e a ordem em que aparecem no `content`
 * é exatamente a ordem renderizada (HTML inline) — igual ao modelo aprovado.
 */

const ctaBox = (frase: string, waUrl: string) => `
<div class="article-cta">
  <p class="article-cta__text">${frase}</p>
  <a class="article-cta__btn" href="${waUrl}" target="_blank" rel="noopener noreferrer">Falar com a nossa equipa</a>
</div>`;

const reabilitacaoOral: Post = {
  id: "static-reabilitacao-oral",
  isStatic: true,
  slug: "reabilitacao-oral-muito-mais-do-que-colocar-dentes",
  title: "O Diferencial da Reabilitação Oral no Instituto AreLuna",
  author_name: "Instituto Areluna",
  custom_author: "Instituto Areluna",
  author_id: "",
  published_at: "2026-05-27T10:00:00.000Z",
  tags: ["Reabilitação Oral", "Implantes"],
  excerpt:
    "Muito mais do que \"colocar dentes\": como a reabilitação oral devolve função, equilíbrio facial e qualidade de vida no Instituto AreLuna.",
  image_url: "/blog/a1-hero-recepcao.jpg",
  image_caption: "Recepção do Instituto Areluna no Porto",
  subtitle: 'Muito mais do que "colocar dentes": devolver saúde, confiança e uma nova vida',
  content: `
<p>Quando falamos em reabilitação oral, muitas pessoas pensam apenas numa solução estética — "colocar dentes" e voltar a sorrir.</p>

<p>Mas a realidade é muito mais profunda.</p>

<p>Na verdade, uma reabilitação bem feita devolve algo essencial: função biológica, equilíbrio facial e qualidade de vida.</p>

<p>E é exatamente aqui que começa o verdadeiro diferencial do Instituto AreLuna.</p>

<h2>Não tratamos apenas dentes. Tratamos pessoas.</h2>

<p>Ao longo dos anos, temos assistido a algo que vai muito além da medicina dentária.</p>

<p>Pacientes que chegam retraídos, com vergonha de sorrir, com dificuldades em mastigar, com impacto na vida social e profissional. E que, após o tratamento, transformam completamente a sua realidade.</p>

<p>Não é apenas o sorriso que muda.</p>

<ul>
  <li>Ganham confiança</li>
  <li>Melhoram a autoestima</li>
  <li>Sentem-se mais seguros nas relações</li>
  <li>Evoluem na carreira</li>
  <li>Voltam a viver com leveza</li>
</ul>

<p>Já vimos pacientes mudarem de emprego, iniciarem relacionamentos, voltarem a sair, a falar, a sorrir sem medo.</p>

<p><strong>Porque o sorriso é o nosso verdadeiro cartão de visita.</strong></p>

<h2>Saúde começa na boca</h2>

<p>Para além da estética, existe um impacto direto na saúde:</p>

<ul>
  <li>Melhor mastigação → melhor digestão</li>
  <li>Redução de problemas gástricos</li>
  <li>Melhoria do hálito</li>
  <li>Mais conforto no dia a dia</li>
  <li>Prevenção de complicações futuras</li>
</ul>

<p><strong>A reabilitação oral não é um luxo. É um investimento na sua saúde global.</strong></p>

<h2>Porque é que tantos tratamentos falham no mercado?</h2>

<p>Infelizmente, vemos com frequência pacientes que já passaram por tratamentos mal planeados.</p>

<p>Problemas comuns incluem:</p>

<ul>
  <li>Implantes mal posicionados</li>
  <li>Falta de integração entre especialidades</li>
  <li>Resultados artificiais</li>
  <li>Desconforto ao mastigar</li>
  <li>Complicações a médio prazo</li>
</ul>

<p>E a causa quase sempre é a mesma: falta de planeamento e visão multidisciplinar.</p>

<figure>
  <img src="/blog/a2-corredor-ambiente.jpg" alt="Ambiente do Instituto Areluna" loading="lazy" decoding="async" />
  <figcaption>Ambiente do Instituto Areluna</figcaption>
</figure>

<h2>O método AreLuna: precisão, ciência e visão integrada</h2>

<p>No Instituto AreLuna, cada caso é tratado com um nível de rigor que faz toda a diferença.</p>

<h3>Junta médica em todos os casos</h3>
<p>Nenhum plano é feito de forma isolada. Os casos são discutidos entre diferentes especialistas para garantir a melhor decisão clínica.</p>

<h3>Equipa altamente especializada</h3>
<p>Profissionais com formação contínua, especializações, mestrados e doutoramentos — cada um focado na sua área.</p>

<h3>Tecnologia de última geração</h3>
<p>Planeamento digital, equipamentos avançados e técnicas minimamente invasivas que aumentam a previsibilidade e segurança.</p>

<h3>Materiais de excelência</h3>
<p>Trabalhamos apenas com materiais testados e reconhecidos internacionalmente.</p>

<p><strong>Resultado? Tratamentos mais seguros, mais duradouros e com resultados naturais.</strong></p>

<h2>Segurança que se traduz em tranquilidade</h2>

<p>Um dos maiores receios dos pacientes é: "E se correr mal?"</p>

<p>Na AreLuna, a tecnologia e o planeamento reduzem drasticamente esse risco.</p>

<ul>
  <li>Simulações digitais antes do procedimento</li>
  <li>Planeamento cirúrgico guiado</li>
  <li>Protocolos clínicos rigorosos</li>
  <li>Acompanhamento contínuo</li>
</ul>

<p>O paciente sabe exatamente o que esperar e isso traz confiança.</p>

<h2>O toque AreLuna: onde a Europa encontra o Brasil</h2>

<p>A essência do Instituto AreLuna nasce de uma visão muito clara: unir o melhor de dois mundos.</p>

<ul>
  <li>O rigor técnico europeu</li>
  <li>A sensibilidade estética brasileira</li>
</ul>

<p>Enquanto a Europa é referência em precisão e tecnologia, o Brasil é reconhecido mundialmente pela excelência estética e técnicas avançadas.</p>

<p>Na AreLuna, essa combinação traduz-se em resultados que são:</p>

<ul>
  <li>Funcionais</li>
  <li>Naturais</li>
  <li>Esteticamente harmoniosos</li>
</ul>

<p><strong>Não criamos sorrisos artificiais. Criamos sorrisos que parecem seus, só que melhores.</strong></p>

<h2>Uma clínica que não parece uma clínica</h2>

<p>Sabemos que muitas pessoas ainda associam o dentista a medo e desconforto. Por isso, criámos algo diferente.</p>

<p>O Instituto AreLuna foi pensado para ser:</p>

<ul>
  <li>Acolhedor</li>
  <li>Tranquilo</li>
  <li>Confortável</li>
  <li>Sofisticado</li>
</ul>

<p>Muitos pacientes dizem que se sentem como num spa. Porque acreditamos que o ambiente também faz parte da cura. Aqui, cada pessoa é tratada como parte da nossa família.</p>

<figure>
  <img src="/blog/a3-lounge-sala-espera.jpg" alt="Sala de espera do Instituto Areluna" loading="lazy" decoding="async" />
  <figcaption>Sala de espera do Instituto Areluna</figcaption>
</figure>

<h2>Medicina dentária integrativa e personalizada</h2>

<p>A nossa abordagem é multidisciplinar. Hoje, a estética facial e oral caminham juntas — e os pacientes estão cada vez mais conscientes disso.</p>

<p>Por isso, oferecemos um acompanhamento completo, que integra:</p>

<ul>
  <li>Reabilitação oral</li>
  <li>Implantes dentários</li>
  <li>Alinhadores invisíveis</li>
  <li>Estética facial</li>
</ul>

<p>Tudo pensado de forma personalizada, respeitando a individualidade de cada paciente.</p>

<h2>Turismo dentário: tratar e viver uma experiência</h2>

<p>O Porto tornou-se um destino de excelência para tratamentos dentários — e o Instituto AreLuna é hoje uma referência nessa área.</p>

<p>Recebemos pacientes de vários países que procuram:</p>

<ul>
  <li>Qualidade superior</li>
  <li>Atendimento personalizado</li>
  <li>Uma experiência completa</li>
</ul>

<p>E oferecemos uma experiência completa:</p>

<ul>
  <li>Recepção desde o aeroporto</li>
  <li>Apoio com alojamento</li>
  <li>Planeamento eficiente do tratamento</li>
  <li>Possibilidade de sair com dentes fixos no próprio dia</li>
</ul>

<p><strong>Tratamento e experiência, tudo no mesmo lugar.</strong></p>

<p class="article-internal-link">🦷 <a href="/tratamentos">Confira também — Todos os tratamentos oferecidos pelo Instituto Areluna no Porto</a></p>

<h2>Mais do que técnica. É humano.</h2>

<p>No Instituto AreLuna, acreditamos que a medicina dentária vai muito além da técnica. Ela toca identidade. Confiança. Felicidade.</p>

<p>Por isso, o nosso compromisso não é apenas clínico. É humano.</p>

<figure>
  <img src="/blog/a4-dra-arethuza-retrato.jpg" alt="Dra. Arethuza Luna, Instituto Areluna" loading="lazy" decoding="async" />
  <figcaption>Dra. Arethuza Luna, Instituto Areluna</figcaption>
</figure>

<p><strong>Nós transformamos sorrisos, mas não só. Transformamos vidas.</strong></p>
${ctaBox(
    "Cada caso é único. Fale com a nossa equipa para uma avaliação personalizada.",
    "https://wa.me/351910098226?text=Ol%C3%A1!%20Li%20o%20artigo%20sobre%20reabilita%C3%A7%C3%A3o%20oral%20e%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20personalizada.",
  )}
`,
};

const esteticaIntegrada: Post = {
  id: "static-estetica-integrada",
  isStatic: true,
  slug: "estetica-integrada-o-equilibrio-entre-naturalidade-e-tecnologia",
  title: "Estética Integrada: o equilíbrio entre a naturalidade e a tecnologia",
  author_name: "Dra. Arethuza Luna",
  custom_author: "Dra. Arethuza Luna",
  author_id: "",
  published_at: "2026-05-26T10:00:00.000Z",
  tags: ["Estética Integrada", "Harmonização Orofacial"],
  excerpt:
    "Porque a verdadeira beleza nunca deve parecer artificial: a jornada e a filosofia da Dra. Arethuza Luna sobre estética integrada.",
  image_url: "/blog/b1-hero-dra-autoridade.jpg",
  image_caption: "Dra. Arethuza Luna, especialista em Harmonização Orofacial",
  subtitle: "Porque a verdadeira beleza nunca deve parecer artificial",
  content: `
<h2>A minha jornada na medicina dentária</h2>

<p>Trabalho há mais de 20 anos na medicina dentária, mas a minha especialização é em Ortodontia, Ortopedia Facial e Harmonização Orofacial.</p>

<p>Confesso que quando começou a surgir a Harmonização Facial, fui um pouco reticente e era até mesmo contra. Pensava que os dentistas estavam a invadir a área dos Dermatologistas e Cirurgiões plásticos. Entretanto, com o tempo, após a finalização da minha primeira especialização, comecei a ver os pacientes de maneira diferente. Antes, eu analisava primeiro os dentes e então passei a olhar primeiro a face, porque aprendemos muito sobre análise facial, bases ósseas e avaliar o paciente como um todo.</p>

<p>Por isso, percebi que precisava de um complemento na finalização dos tratamentos ortodônticos. Então surgiu a minha segunda paixão na medicina dentária, a Harmonização Orofacial, que veio complementar todo este processo de equilíbrio entre o sorriso e a face, com especial incidência na autoestima e confiança dos pacientes.</p>

<p>Diferentemente do que muitas pessoas acreditam, os médicos dentistas não tratam somente os dentes ou a cavidade bucal. Tratamos todo o sistema estomatognático (cabeça e pescoço). Ou seja, precisamos de saber tratar todo o conjunto. Devemos conseguir unir os dentes com a face, para que o paciente se sinta totalmente satisfeito.</p>

<p>Sentimos que a estética facial e oral estão cada vez mais a caminhar em conjunto. Com isso, os portugueses passaram a preocupar-se mais com este aspeto e a deixar de lado o tabu que existe em relação a procedimentos estéticos.</p>

<h2>O exagero nunca foi sinónimo de beleza</h2>

<p>Durante muitos anos, a estética foi associada a exagero. Rostos sem expressão. Traços padronizados. Lábios excessivamente volumosos. Mudanças tão drásticas que a pessoa deixava de se reconhecer ao espelho.</p>

<p>Felizmente, esse paradigma está a mudar.</p>

<p>Hoje, existe uma procura muito maior pela naturalidade, pela harmonia e pelo envelhecimento saudável. E, no Instituto AreLuna, esse sempre foi o nosso posicionamento.</p>

<p><strong>Nunca acreditámos em transformar rostos. Acreditamos em realçar a beleza individual de cada pessoa.</strong></p>

<p>Porque não existem rostos perfeitos. Existem identidades únicas. E preservar essa identidade é, para nós, uma das maiores formas de respeito pelo paciente.</p>

<p>Existe uma frase muito verdadeira na estética: "É no excesso que mora o perigo."</p>

<p>Durante algum tempo, principalmente no Brasil, viveu-se uma procura muito intensa por procedimentos exagerados e padrões irreais de perfeição. A busca constante pelo "mais" acabou por afastar muitas pessoas da essência da estética: o equilíbrio.</p>

<p>Foi precisamente essa experiência internacional que nos ensinou algo muito importante. Na Europa, aprendemos profundamente o conceito de que "menos é mais".</p>

<ul>
<li>Mais naturalidade</li>
<li>Mais elegância</li>
<li>Mais discrição</li>
<li>Mais segurança</li>
</ul>

<figure>
  <img src="/blog/b2-dra-pessoal.jpg" alt="Dra. Arethuza Luna no Instituto Areluna" loading="lazy" decoding="async" />
  <figcaption>Dra. Arethuza Luna no Instituto Areluna</figcaption>
</figure>

<h2>A beleza que não parece "feita"</h2>

<p>Para nós, um resultado de sucesso é simples. É quando alguém olha para si e pensa: "Estou mais bonita, mas continuo a ser eu." E as pessoas dizem que está mais bonita, mas não conseguem identificar o que está diferente.</p>

<p>A melhor estética é aquela que:</p>

<ul>
  <li>Rejuvenesce sem artificializar</li>
  <li>Harmoniza sem padronizar</li>
  <li>Corrige sem apagar identidade</li>
  <li>Valoriza sem exagerar</li>
</ul>

<p>Sempre defendemos uma abordagem baseada em naturalidade, ciência, segurança e individualidade.</p>

<p>Cada rosto possui características próprias. Cada paciente tem uma beleza diferente. E nenhuma face deve ser tratada como um molde.</p>

<h2>A ciência antes da tendência</h2>

<p>Na medicina estética, as modas mudam constantemente. Mas o corpo humano não pode ser tratado como uma tendência passageira.</p>

<p>Por isso, no Instituto AreLuna, somos extremamente criteriosos com aquilo que utilizamos. Preferimos trabalhar com:</p>

<ul>
  <li>Produtos reconhecidos internacionalmente</li>
  <li>Tecnologias consolidadas</li>
  <li>Técnicas cientificamente comprovadas</li>
  <li>Protocolos seguros e estudados ao longo de anos</li>
</ul>

<p>Não acreditamos em excessos nem em procedimentos sem evidência científica robusta. Até porque ainda não existem respostas definitivas sobre os impactos futuros do uso exagerado de determinados produtos ao longo de décadas.</p>

<p><strong>E quando falamos de saúde e rosto, cautela não é limitação. É responsabilidade.</strong></p>

<figure>
  <img src="/blog/b3-sala-estetica.jpg" alt="Sala de estética do Instituto Areluna" loading="lazy" decoding="async" />
  <figcaption>Sala de estética do Instituto Areluna</figcaption>
</figure>

<h2>Brasil e Europa: o melhor de dois mundos</h2>

<p>A história do Instituto AreLuna nasce precisamente dessa união.</p>

<p>O Brasil foi o grande berço da nossa formação estética. É reconhecido mundialmente pela inovação, criatividade e evolução das técnicas na área da medicina estética e harmonização facial. Grande parte do conhecimento avançado que adquirimos começou lá.</p>

<p>Mas também tivemos a oportunidade de estudar nos Estados Unidos, em vários países da Europa e acompanhar diferentes abordagens internacionais.</p>

<p>E foi essa experiência que nos permitiu criar algo muito especial em Portugal: a união entre o senso estético refinado e artístico brasileiro e o rigor técnico e a segurança europeia.</p>

<p>Na AreLuna, acreditamos que a excelência verdadeira nasce precisamente dessa integração.</p>

<h3>O diferencial do "senso estético brasileiro"</h3>

<p>O chamado "senso estético brasileiro" não significa exagero. Significa:</p>

<ul>
  <li>Saber analisar proporções</li>
  <li>Entender harmonia facial</li>
  <li>Trabalhar detalhes subtis</li>
  <li>Valorizar expressão e feminilidade</li>
  <li>Criar resultados leves e naturais</li>
</ul>

<p>É um olhar artístico aliado à medicina. E esse olhar tornou-se um enorme diferencial em Portugal. Porque hoje os pacientes procuram exatamente isso: resultados sofisticados, mas discretos.</p>

<h2>A estética integrada: tratar a face como um todo</h2>

<p>No Instituto AreLuna, não acreditamos em tratamentos isolados. Acreditamos numa visão integrada da estética e da saúde.</p>

<p>Não faz sentido, por exemplo, preencher lábios quando existe um problema dentário importante por resolver. Aliás, muitas vezes dizemos aos nossos pacientes: "Primeiro cuidamos da estrutura. Depois aperfeiçoamos os detalhes."</p>

<p>Já tivemos inúmeros casos em que apenas a reabilitação oral transformou completamente o rosto do paciente, ao ponto de outras pessoas perguntarem se tinha feito harmonização facial. Porque dentes, ossos, músculos, pele e expressão facial estão totalmente interligados.</p>

<h2>Quando as especialidades trabalham juntas, o rejuvenescimento torna-se real</h2>

<p>A verdadeira estética não nasce de um único procedimento. Ela nasce da integração inteligente entre especialidades.</p>

<p>Foi exatamente isso que grandes referências mundiais, como Ivo Pitanguy, sempre defenderam: o rosto deve ser tratado como um conjunto.</p>

<p>Ivo Pitanguy, um dos cirurgiões plásticos mais renomados do Brasil e do mundo, valorizava profundamente a saúde bucal e a estética do sorriso como parte fundamental do rejuvenescimento facial. Ele dizia: "Dentes em falta ou feios chamam mais atenção que uma pele lisa e sem rugas."</p>

<p>Por isso, no Instituto AreLuna, contamos com uma abordagem multidisciplinar.</p>

<h3>O dermatologista</h3>
<p>Cuida da pele, qualidade cutânea, skincare, peelings e saúde da pele.</p>

<h3>O médico dentista</h3>
<p>Possui um conhecimento extremamente aprofundado da anatomia da cabeça e pescoço, simetrias, bases ósseas, mordida e sustentação facial.</p>

<h3>O cirurgião plástico</h3>
<p>Quando necessário, corrige aquilo que procedimentos não cirúrgicos já não conseguem resolver com excelência.</p>

<p>Porque também é importante saber reconhecer limites. Há situações em que conseguimos adiar cirurgias. Outras em que insistir apenas em tratamentos minimamente invasivos seria frustrar o paciente.</p>

<p><strong>E nós não trabalhamos para "vender procedimentos". Trabalhamos para alcançar resultados reais, seguros e satisfatórios.</strong></p>

<h2>Naturalidade é a nova sofisticação</h2>

<p>Durante anos, a estética viveu uma fase de excessos. Hoje, felizmente, o mundo começa a regressar àquilo que realmente faz sentido:</p>

<ul>
  <li>Prevenção</li>
  <li>Elegância</li>
  <li>Saúde</li>
  <li>Envelhecimento inteligente</li>
  <li>Individualidade</li>
</ul>

<p>E no Instituto AreLuna sentimos orgulho em dizer: nunca saímos desse caminho.</p>

<p>Sempre acreditámos que a verdadeira sofisticação está na naturalidade. Na beleza que transmite frescura sem parecer artificial. Na estética que melhora a autoestima sem apagar a essência da pessoa.</p>

<h2>Mais do que estética. Confiança. Bem-estar. Identidade.</h2>

<p>Quando um paciente se sente bem consigo próprio, tudo muda. Muda a forma como sorri. Como comunica. Como entra num espaço. Como vive.</p>

<p>Por isso, para nós, estética nunca foi apenas aparência. É confiança. É bem-estar. É equilíbrio. É qualidade de vida.</p>

<p><strong>E é exatamente isso que procuramos entregar todos os dias no Instituto AreLuna: resultados naturais, seguros e atemporais.</strong></p>
${ctaBox(
    "Cada rosto é único. Fale com a nossa equipa para uma avaliação personalizada.",
    "https://wa.me/351910098226?text=Ol%C3%A1!%20Li%20o%20artigo%20sobre%20est%C3%A9tica%20integrada%20e%20harmoniza%C3%A7%C3%A3o%20facial%20e%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20personalizada.",
  )}
`,
};

/** Posts estáticos, do mais recente para o mais antigo. */
export const staticPosts: Post[] = [reabilitacaoOral, esteticaIntegrada];

/** Slugs de URL próprios destes posts. */
export const staticPostSlugs = new Set(staticPosts.map((p) => p.slug));

/**
 * Slugs derivados do TÍTULO. Usado para esconder, na listagem, qualquer post
 * do ERP com o mesmo título (ex.: a versão antiga colada no editor do ERP),
 * já que o ERP gera o slug a partir do título.
 */
export const staticPostTitleSlugs = new Set(staticPosts.map((p) => slugify(p.title)));

export const findStaticPostBySlug = (slug?: string): Post | undefined =>
  staticPosts.find((p) => p.slug === slug || slugify(p.title) === slug);
