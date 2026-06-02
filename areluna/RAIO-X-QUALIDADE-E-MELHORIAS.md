# Raio-X de Qualidade + Plano de Melhoria SEO — Instituto AreLuna
**Data:** 2026-05-20 · **Por:** Pedro · **Para:** equipa de implementação AreLuna (dev + marketing + conteúdo)

> **Objetivo deste documento:** mostrar com clareza **o que existe hoje, qual é a qualidade real, o que precisa mudar e por quê** — para que a equipa de implementação saiba exatamente onde atuar. Não tem código. É a prescrição, não a cirurgia.

---

## ⚠️ Contexto importante para o dev (lê antes de tudo)

**1. Stack atual:** os sites `institutoareluna.pt` e `vivobem.pt` foram iniciados em Lovable e hoje são mantidos/evoluídos em **Antigravity (IDE da Google com Claude)**. Ou seja: o dev usa IA para programar. Isto significa que **este documento foi pensado para ser carregado como contexto no Antigravity**, e a IA gerar o plano de implementação técnica em cima do código actual. O dev valida, ajusta e executa.

**2. Migração já decidida das LPs:** as 3 LPs do `vivobem.pt` (`/alinhadores`, `/facetas`, `/implantes`) **vão migrar para o domínio principal `institutoareluna.pt`**. Isto não está feito ainda — o diagnóstico abaixo cobre as LPs no estado actual em `vivobem.pt`, mas a implementação deve já considerar esta migração. **Acção crítica adicional que esta migração obriga:** configurar redirecionamentos `301` permanentes de cada URL antiga do `vivobem.pt` para a URL nova no `institutoareluna.pt`, para preservar todo o histórico SEO já construído (mesmo que pouco) e não perder backlinks externos que possam existir. URLs sugeridas no novo domínio:

| URL antiga (vivobem.pt) | URL nova sugerida (institutoareluna.pt) |
|---|---|
| `https://vivobem.pt/alinhadores` | `https://www.institutoareluna.pt/alinhadores-invisiveis-porto` |
| `https://vivobem.pt/facetas` | `https://www.institutoareluna.pt/facetas-dentarias-porto` |
| `https://vivobem.pt/implantes` | `https://www.institutoareluna.pt/implantes-dentarios-porto` |
| `https://vivobem.pt/caso-real`, `caso-sandra-maria`, `caso-diana-vieira` | `https://www.institutoareluna.pt/casos/[slug]` |

Após o redirect, o domínio `vivobem.pt` pode ficar a apontar apenas pra home redirecionada ou ser progressivamente desactivado (decisão de marca a tomar depois). **Manter os 301 ativos por pelo menos 12 meses** para o Google consolidar a transferência.

**3. Como usar este documento no Antigravity:**
1. Carrega o ficheiro inteiro como contexto no Antigravity.
2. Carrega também a estrutura actual do código.
3. Pede algo como: *"Com base neste raio-x SEO, propõe o plano de implementação técnica para o nosso código actual. Para cada bloco do roadmap, indica as mudanças concretas no código, ordem de execução, esforço estimado e riscos."*
4. Revê o plano antes de executar. Sempre que tiveres dúvida estratégica (qual schema usar, que palavra-chave escolher, como reescrever um texto), volta a perguntar à IA com o contexto deste documento aberto — as decisões SEO já estão tomadas aqui, é só implementar.

---

## 1. Como avaliámos a qualidade

Cada página foi medida em 5 dimensões. As notas vão de **0 (ausente/quebrado) a 10 (referência de mercado)**.

| Dimensão | O que estamos a medir | Por que importa para SEO |
|---|---|---|
| **A. Indexabilidade** | O Google consegue ler a página? HTML servido tem conteúdo real? `lang` correto? `robots.txt`/sitemap funcionais? | É o ponto zero. Se o Google não lê, nenhuma outra otimização tem efeito. |
| **B. Metadados** | Title único e relevante, meta description, canonical, Open Graph, Twitter Card. | Define como a página aparece na pesquisa e nas redes sociais. Influencia CTR (cliques). |
| **C. Estrutura semântica** | 1 H1 com palavra-chave, hierarquia H2/H3 lógica, alts descritivos, conteúdo com profundidade. | É o "esqueleto" que o Google interpreta para entender do que a página fala. |
| **D. Dados estruturados (Schema)** | JSON-LD: tipo de negócio (Dentist), pessoa (médico), procedimento, FAQ, avaliações. | Destrava resultados ricos (estrelas, FAQ expandida, knowledge panel). Sinal forte de confiança. |
| **E. Sinais de E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness) | Autoria visível, credenciais, NAP completo, avaliações reais, conteúdo original. | Em saúde (YMYL), o Google pondera fortemente. Sites de clínicas sem isto não ranqueiam. |

---

## 2. Scorecard — qualidade atual por URL

| Página | A. Indexabilidade | B. Metadados | C. Estrutura | D. Schema | E. E-E-A-T | **Média** |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| `institutoareluna.pt` (home) | **2/10** | 3/10 | 6/10 | **0/10** | 5/10 | **3,2** |
| `institutoareluna.pt/blog` (listagem + 3 posts) | 2/10 | **1/10** | 4/10 | 0/10 | 3/10 | **2,0** |
| `institutoareluna.com.br` (home) | 7/10 | **1/10** | 4/10 | **0/10** | 4/10 | **3,2** |
| `vivobem.pt/alinhadores` | 3/10 | 4/10 | 7/10 | **0/10** | 5/10 | **3,8** |
| `vivobem.pt/facetas` | 3/10 | 4/10 | 7/10 | 0/10 | 5/10 | **3,8** |
| `vivobem.pt/implantes` | 3/10 | 4/10 | 7/10 | 0/10 | 5/10 | **3,8** |
| **Média global AreLuna** | **3,3** | **3,0** | **5,3** | **0** | **4,3** | **3,2 / 10** |

**Para comparação — Medway (concorrente que ranqueia P1 em "implantes dentários porto"):**

| Página | A | B | C | D | E | **Média** |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| `medway.pt/tratamentos/implantes-dentarios/` | 9/10 | 8/10 | 9/10 | 6/10 | 7/10 | **7,8 / 10** |

**Leitura crítica:** o AreLuna está em **3,2/10**. O concorrente em **7,8/10**. A boa notícia: **nenhum dos buracos é caro de resolver** — é tudo correção técnica + disciplina de produção de conteúdo. Em 90 dias dá pra chegar a 6,5/10 e em 180 dias passar o Medway.

---

## 3. Diagnóstico página por página

Cada bloco abaixo segue o mesmo padrão:
- **Como está hoje** (factual, sem suavizar)
- **Como deveria estar** (o padrão a perseguir)
- **O que tem de mudar** (lista de ações, sem código)
- **Impacto / esforço** (1-5 estrelas em cada eixo)

---

### 3.1. `institutoareluna.pt` — Home (Porto)

#### Como está hoje
- O site é construído com a plataforma **Lovable (React, single-page app)**. Quando o navegador (ou o Google) pede a página, **o servidor não devolve a página com conteúdo dentro** — devolve um esqueleto vazio e um ficheiro de JavaScript que monta a página no navegador.
- **Consequência prática:** todas as rotas (`/`, `/tratamentos`, `/blog`, `/turismo-dentario`, etc) compartilham o **mesmo título** e a **mesma meta description**, vindos do `index.html` global. Para o Google, é como se fossem 11 versões da mesma página.
- O atributo `lang` declarado é **"en" (inglês)**, sendo um site português. Isso faz o Google catalogar o site como conteúdo em inglês — derruba a relevância em qualquer pesquisa em português europeu ("clínica dentária Porto", "implantes Porto", "harmonização orofacial Portugal").
- O ficheiro `robots.txt` **não existe formalmente** — quando se pede `/robots.txt`, o servidor devolve o HTML do site (Content-Type errado), porque qualquer rota desconhecida cai no router do SPA. Crawlers ficam sem instruções.
- Quando o conteúdo é renderizado (depois do JavaScript correr), a estrutura é **boa**: H1 com palavra-chave, 10 H2 organizados, equipa clínica completa com bio individual, fotos da clínica, NAP no rodapé, CTAs claros (WhatsApp + pagamento).
- **Zero dados estruturados (JSON-LD)** — nem `Dentist`, nem `LocalBusiness`, nem `Person` para a Dra. Arethuza Luna, nem `Review`.
- **Twitter Card declara `@lovable_dev`** (o handle da plataforma de construção, não o da clínica). Detalhe pequeno, sinaliza descuido.
- Imagens com `alt` em **inglês** ("Modern dental office", "Treatment environment"), mesmo em rotas que deveriam estar em português.

#### Como deveria estar
- **Cada rota tem o seu próprio título e meta description**, refletindo o conteúdo da página.
- Servidor entrega HTML pronto (com conteúdo, H1, meta tags certas) **antes** do JavaScript correr — para que o Google leia tudo na primeira tentativa.
- `<html lang="pt-PT">` na versão portuguesa, `pt-BR` na versão brasileira, com sinalização `hreflang` cruzada entre os dois domínios para o Google entender que são versões do mesmo conteúdo em mercados diferentes.
- `robots.txt` real, em texto puro, a apontar para o `sitemap.xml`.
- Esquema de dados (JSON-LD) declarando: a clínica é um `Dentist` com NAP, horário, geocoordenadas, redes sociais; a Dra. Arethuza Luna é uma `Person` com formação e ligação à clínica; cada médico da equipa também.
- Todos os `alt` em português, descrevendo o que está na imagem (preferencialmente com nome do profissional ou tipo de tratamento).

#### O que tem de mudar
1. **Resolver a renderização do lado do servidor (SSR).** Tem 3 caminhos:
   - (A) Verificar com a Lovable se a plataforma já tem opção de pré-renderização nativa (era a aposta principal há ~6 meses).
   - (B) Contratar um serviço externo (prerender.io ou Rendertron) que serve uma versão estática do HTML quando o pedido vem de um crawler. Custo baixo, plug-and-play, decisão reversível.
   - (C) Migrar para uma stack com SSR nativo (Next.js é a referência) — mais investimento, mais autonomia a longo prazo. Recomendável se houver plano de crescimento do site.
   - **Decisão necessária antes de qualquer outra coisa.** Sem SSR resolvido, os outros pontos viram desperdício.
2. **Corrigir o atributo `lang`** no HTML raiz para `pt-PT`.
3. **Implementar reescrita dinâmica de title / meta description / canonical / Open Graph** por cada rota. Hoje todas partilham o mesmo bloco.
4. **Criar o ficheiro `robots.txt`** correto, em texto puro, na raiz pública do projeto.
5. **Adicionar `hreflang`** declarando a relação entre `institutoareluna.pt` (pt-PT), `institutoareluna.com.br` (pt-BR) e `x-default`.
6. **Implementar JSON-LD nos templates de página:**
   - Tipo `Dentist` na home (NAP, horários, geo, redes sociais, especialidades).
   - Tipo `Person` para a Dra. Arethuza Luna e para cada médico da equipa (com `worksFor` apontando à clínica).
   - Tipo `BreadcrumbList` em todas as páginas internas.
7. **Reescrever todos os `alt` para português**, contextualizados (nome do médico, tipo de procedimento, nome do espaço da clínica).
8. **Trocar `twitter:site` de `@lovable_dev` para o handle real da clínica.**
9. **Adicionar telefone visível no cabeçalho do site** (hoje só aparece no rodapé).

#### Impacto / Esforço
- **Impacto:** ★★★★★ (sem isto resolvido, todo o site está invisível ao Google)
- **Esforço:** ★★★☆☆ (depende da decisão SSR — opção B é 1 dia de trabalho; opção C é 2-3 semanas)

---

### 3.2. `institutoareluna.pt/blog`

> **Correção importante face à primeira análise:** o blog NÃO está vazio. Tem 3 posts publicados (Janeiro 2026: turismo dentário, procedimentos de estética facial, aparelho ortodôntico em idade avançada). Eu não os vi na primeira passagem porque o site é uma SPA e o HTML servido cru devolve um esqueleto vazio. O conteúdo só aparece depois do JavaScript correr no navegador. Já o vi renderizado e está abaixo.

#### Como está hoje
- A listagem `/blog` tem 3 posts: turismo dentário, procedimentos de estética facial, aparelho ortodôntico em idade avançada. Todos datados de Janeiro 2026 — a cadência atual é praticamente zero (4 meses sem publicar).
- **Cada post existe como página individual** com URL própria (ex.: `/blog/turismo-dentario-como-funciona-vantagens-e-desafios`) e tem conteúdo escrito decente — 700-1.000 palavras, com imagem destacada, links internos para a clínica.
- **As imagens vêm de um Supabase storage** (`hvqckoajxhdqaxfawisd.supabase.co/storage/v1/object/public/item-images/marketing/...`) — sinal de que **já existe alguma infraestrutura de CMS por trás**, provavelmente um painel custom integrado ao Lovable com Supabase como base de dados. **Isto é uma boa notícia** — significa que o sistema de publicação já existe e provavelmente é só refinar.
- **MAS — problemas graves de SEO em cada post:**
  - **O `<title>` do post NÃO contém o título do post.** Todos os 3 posts entregam o `<title>` genérico do site ("Instituto Areluna | Clínica Dentária e de Estética Avançada"). Para o Google, o post não existe como "post sobre turismo dentário" — existe apenas como "mais uma URL do site genérico".
  - **A meta description e o Open Graph também são herdados** do `index.html` global. Quando alguém partilha o post no WhatsApp ou Facebook, aparece a imagem e a descrição genéricas do site, não as do post.
  - **Vários `H1` no mesmo post.** Cada subtítulo grande está marcado como `H1` ("O que é turismo dentário e como funciona?", "Vantagens e desvantagens", "O Instituto Areluna um exemplo..."). Pela regra do Google, **só pode haver UM `H1` por página** — o resto deve ser `H2`, `H3`. É erro de template, não erro do redator.
  - **Português misturado** dentro do mesmo post — usa "planejamento" (pt-BR) em vez de "planeamento" (pt-PT) em várias frases. Sinal de que o conteúdo foi escrito por alguém com perfil mais Brasil e não foi revisto para o registo português.
  - **Sem autor visível com bio.** O post mostra apenas "Instituto Areluna" como autor — nem o nome da Dra. Arethuza, nem credencial, nem foto. Em saúde, o Google penaliza fortemente a falta de autoria.
  - **Sem CTA de conversão no fim do post.** O post acaba e simplesmente cai no rodapé padrão — perdemos o visitante mais qualificado (que leu até ao fim).
  - **Sem "posts relacionados" no final.** Aumentaria muito o tempo de sessão, sinal positivo pro Google.
  - **Sem botões de partilha** (WhatsApp, Facebook, LinkedIn).
  - **Sem schema `Article`/`BlogPosting`** — outra coisa que destrancaria as caixinhas ricas (data, autor, imagem) no resultado de pesquisa.
  - **Datas em texto puro** ("22 de janeiro, 2026") sem marcação semântica (`<time datetime="2026-01-22">`).

#### Como deveria estar
- **Cada post do blog tem o SEU próprio `<title>`** (com o título do post + nome da clínica) e a SUA própria meta description, gerados pelo template e entregues no HTML antes do JS correr.
- Cada post tem **imagem de Open Graph própria** (a imagem destacada do post), para que partilhas em redes sociais "vendam" o tema.
- Cada post tem **um único `<h1>`** (o título do post). Todos os outros subtítulos são `H2`, `H3` em hierarquia lógica.
- Cada post mostra o **autor com nome real, foto e mini-bio** (preferencialmente Dra. Arethuza Luna ou o médico especialista da área).
- Cada post termina com um **CTA padronizado** (WhatsApp + link pra LP comercial relacionada com o tema).
- Cada post tem **bloco de "posts relacionados"** abaixo do CTA — para manter o visitante navegando.
- Cada post tem **botões de partilha** discretos.
- O conteúdo está em **português europeu consistente** (registo pt-PT na versão `.pt`).
- Cada post tem **schema `Article`/`BlogPosting`** declarado, com autor, data de publicação, imagem destacada.
- Categorias clínicas organizadas (Reabilitação Oral, Estética Integrada, Implantes, Alinhadores, Facetas, Turismo Dentário, Casos Reais).
- Cadência mínima de 2 posts por mês.

#### O que tem de mudar
1. **Descobrir o que existe hoje por trás do blog.** A pista do Supabase sugere que já existe um painel/CMS — vale confirmar com o dev (perguntas C1, C2 do guia de conversa). Pode ser que o sistema actual já seja suficiente e que falte apenas corrigir o template.
2. **Corrigir o template do post para:**
   - Reescrever `<title>`, meta description, `og:title`, `og:description`, `og:image` por post (dependendo do título e da imagem do próprio post);
   - Usar **apenas um `H1`** (o título do post);
   - Marcar a data com `<time datetime="...">`;
   - Adicionar bloco de autor (foto + nome + mini-bio + link pra página `/sobre-a-fundadora`);
   - Adicionar bloco de CTA padronizado;
   - Adicionar bloco de "posts relacionados";
   - Adicionar botões de partilha (WhatsApp, Facebook, LinkedIn, link copiável);
   - Adicionar schema `BlogPosting` injectado no `<head>` da rota.
3. **Rever os 3 posts existentes** para uniformizar português europeu e corrigir hierarquia de cabeçalhos. É reescrita ligeira, não rewrite total.
4. **Decidir se o sistema de publicação atual aguenta a cadência prevista** (2 posts/mês) e se a equipa de marketing consegue publicar sozinha. Se sim, mantém. Se não, considerar substituir/reforçar por um CMS mais robusto (Sanity, Strapi headless ligado ao site Lovable, ou WordPress paralelo em subdomínio `blog.institutoareluna.pt`).
5. **Publicar os 2 artigos já produzidos** (pasta `03-artigos-formatados/`) — assim que o template estiver corrigido. **Não publicar antes** de o template ter title/meta dinâmicos, ou criaremos mais 2 URLs invisíveis.
6. **Definir cadência editorial:** 2 posts/mês + 1 estudo de caso/mês. Plano de 24 posts para 12 meses está em `02-plano-editorial-blog/plano-editorial-areluna.md`.

#### Impacto / Esforço
- **Impacto:** ★★★★★ (blog é a maior alavanca de aquisição orgânica não-paga; está zerado hoje)
- **Esforço:** ★★★★☆ (depende do caminho A/B/C; B é o mais rápido — 1 semana de setup)

---

### 3.3. `institutoareluna.com.br` — Home (Curitiba)

#### Como está hoje
- O site está em **WordPress com Elementor**. Boa notícia: o servidor entrega HTML completo (184 KB) com tudo renderizado. O Google consegue ler.
- **Más notícias técnicas:**
  - **Nenhum plugin de SEO instalado.** Sem Rank Math, sem Yoast, sem SEOPress. Resultado: nenhum controle sobre title, description, OG, sitemap inteligente.
  - **`<title>` é apenas "Instituto Areluna"** (17 caracteres) — sem palavra-chave, sem cidade, sem diferencial. Aparece assim na pesquisa.
  - **Meta description ausente.** O Google inventa uma a partir do primeiro parágrafo (geralmente mal).
  - **Zero Open Graph, zero Twitter Card.** Quando alguém partilha o link no WhatsApp, Facebook ou LinkedIn, aparece sem imagem ou com imagem qualquer.
  - **Zero dados estruturados (JSON-LD).** O Google não sabe que isto é uma clínica dentária com endereço fixo em Curitiba.
- **Estrutura de cabeçalhos achatada:** 1 H1 (bom), **40 H2** e **zero H3**. Tudo virou H2 — incluindo itens que deveriam ser bullets ou H3. O Google interpreta como ruído estrutural.
- **Conteúdo raso:** 720 palavras na home. Concorrentes de Curitiba (Dra. Ariane Almeida, Dra. Patrícia Giacomelli, Armonee) têm home com 1.500+ palavras.
- **Imagens:** 37 no total, **12 com alt descritivo**, 25 sem alt útil.
- **Telefone não visível na home** (só endereço). Concorrentes têm telefone no cabeçalho, clicável.
- **Sitemap quebrado:** só lista a "página" de listagem de posts (que está vazia), nada dos posts reais. **Mesmo padrão de erro que diagnosticámos na SariDoctors em abril de 2026** — sintoma de WordPress sem plugin de SEO.
- Existe um único post de blog (sobre Bioarquitetura Facial) mas o sitemap não o expõe, o que sugere que mal será descoberto.

#### Como deveria estar
- Plugin de SEO instalado e configurado.
- `<title>` único da home com palavra-chave + cidade + diferencial: algo no espírito de **"Estética Facial e Harmonização Orofacial em Curitiba | Instituto AreLuna"**.
- Meta description com chamada para acção (≈ 150 caracteres).
- Imagem padrão de partilha (Open Graph) — retrato da Dra. Arethuza Luna ou fachada da clínica, formato 1200×630.
- Hierarquia limpa: 5-7 H2 macro (Quem somos / Como é uma consulta / Especialidades / Equipa / Casos reais / FAQ) com H3 nas subsecções.
- Word count entre 1.500 e 2.000 na home.
- Telefone visível no cabeçalho, clicável.
- Dados estruturados a declarar: `MedicalBusiness`/`Dentist` (com NAP, horários, geo, áreas atendidas), `Person` para a Dra. Arethuza Luna, `BreadcrumbList`.
- Sitemap funcional, submetido ao Google Search Console.
- Todos os `alt` preenchidos e descritivos.

#### O que tem de mudar
1. **Instalar plugin de SEO** (Rank Math gratuito é a recomendação técnica — mesmo que o Yoast seja mais conhecido, o Rank Math entrega mais valor na versão gratuita e tem assistente de schema embutido).
2. **Reescrever o título da home** para incluir palavra-chave + cidade + marca.
3. **Escrever uma meta description** para a home (e progressivamente para todas as páginas).
4. **Definir imagem padrão de Open Graph** (1200×630). Sugestão de brief: retrato editorial da Dra. Arethuza + nome da clínica + cidade.
5. **Reformatar a hierarquia de cabeçalhos:** rever cada H2 actual e decidir se é mesmo H2 (uma secção macro) ou se deveria ser H3 dentro de uma secção maior. Meta: 5-7 H2 + 10-20 H3.
6. **Aumentar o conteúdo da home para 1.500-2.000 palavras** com 4 blocos novos:
   - "Como é a sua primeira consulta no AreLuna" (passo a passo)
   - "Padrão europeu, sotaque brasileiro" (diferencial)
   - "Especialidades sob o mesmo teto" (lista da equipa multidisciplinar)
   - "Perguntas frequentes" (FAQ, 5-7 perguntas)
7. **Adicionar telefone clicável no cabeçalho.**
8. **Reescrever todos os `alt`** das 25 imagens sem descrição útil.
9. **Configurar Local Business no plugin de SEO** (NAP, horário, áreas atendidas, formas de pagamento).
10. **Submeter sitemap ao Google Search Console.**

#### Impacto / Esforço
- **Impacto:** ★★★★★ (são correcções básicas que destrancam visibilidade local em Curitiba)
- **Esforço:** ★★☆☆☆ (a maior parte é configuração + reescrita; sem desenvolvimento pesado)

---

### 3.4. `vivobem.pt/alinhadores`, `/facetas`, `/implantes` (3 LPs comerciais)

> Avaliação conjunta — as 3 partilham a mesma arquitectura e padrão.

#### Como está hoje
- Stack idêntico ao `institutoareluna.pt`: **React/Lovable, single-page app**, sem renderização do lado do servidor. Mesmo problema raiz.
- Boa notícia parcial: o atributo `lang` está correto (`pt-PT`).
- Boa notícia em estrutura de conteúdo: **as 3 páginas têm uma copy MUITO ACIMA DA MÉDIA do mercado** quando renderizadas. Cada LP tem:
  - H1 com palavra-chave + cidade ("Alinhadores Invisíveis no Porto");
  - 6-7 H2 bem organizados (Resultados Reais → Por que escolher → O processo → Depoimentos → Especialistas → CTA);
  - Formulário de avaliação com RGPD compliant;
  - 3 casos visuais antes/depois (com legenda);
  - 3 depoimentos com nome, idade e classificação por estrelas;
  - NAP completo no rodapé;
  - Aproximadamente 900 palavras por LP.
- O título de cada LP, **quando o JavaScript termina de correr**, fica correcto (51 caracteres para alinhadores, 47 para facetas, presumivelmente similar para implantes). Mas o HTML servidor entrega um título genérico, comum às 3 LPs.
- Open Graph e Twitter Card são **defaults globais** — não específicos por tratamento. Quando alguém partilha o link de alinhadores no Instagram, aparece a mesma imagem do link de implantes.
- **Zero dados estruturados** em todas as 3 LPs.
- **Não há secção FAQ visível** em nenhuma das 3. Perguntas como "Quanto custa?", "Quanto tempo demora?", "Dói?" — que são pesquisas de alta intenção comercial — não estão respondidas no corpo da página.
- **Não há bloco de "preço" nem "faixa de investimento".** Concorrentes capturam tráfego de pesquisa por "implantes preço Porto" e "facetas quanto custam" — o AreLuna está fora dessa SERP.

#### Como deveria estar
- Servidor entrega HTML pronto, com título e meta description específicos da LP, antes do JavaScript correr.
- Open Graph dedicado a cada tratamento (imagem específica + descrição específica). Quando partilhado, vende o tratamento certo.
- Dados estruturados:
  - `MedicalProcedure` por cada tratamento (nome, tipo, preparação, como é feito, follow-up, executado por quem);
  - `FAQPage` com as 5-8 perguntas que o paciente real faz;
  - `AggregateRating` se a clínica tiver avaliações reais (Google Reviews) que possam ser referenciadas.
- Secção FAQ visível na página, com as mesmas perguntas do schema.
- Secção "Quanto custa?" explicativa (sem necessariamente revelar preço fixo — pode falar de fatores que compõem o orçamento e oferecer avaliação gratuita).
- Bloco "Antes e Depois" expandido para 5-6 casos (hoje são 3).
- Prova social institucional além dos depoimentos: logos de associações (Ordem dos Médicos Dentistas, ERS), parceiros tecnológicos (Invisalign, Straumann, Nobel Biocare se aplicável).

#### O que tem de mudar
1. **Resolver SSR/prerender** (mesma decisão técnica da home `.pt` — uma vez resolvido para o domínio principal, replica para vivobem).
2. **Implementar title + meta description específicos** por LP, entregues no HTML servidor (não dependentes de JavaScript).
3. **Criar imagens Open Graph dedicadas a cada tratamento** (1200×630):
   - Alinhadores: foto de alinhador em mão + sorriso ao fundo;
   - Facetas: comparativo discreto antes/depois ou close de sorriso restaurado;
   - Implantes: imagem clínica de implante 3D ou caso real com legenda.
4. **Adicionar secção FAQ visível em cada LP**, com 5-8 perguntas estratégicas:
   - "Quanto custa [tratamento]?"
   - "Quanto tempo demora?"
   - "Dói? É invasivo?"
   - "Quanto duram os resultados?"
   - "Qual a diferença entre [tratamento] e a alternativa popular?"
   - "É reversível?"
   - "Posso fazer se [condição comum]?"
5. **Implementar schemas** `MedicalProcedure` e `FAQPage` correspondentes (FAQ schema só pode existir se houver FAQ visível na página — não pode ser "invisível").
6. **Adicionar bloco "Investimento" / "Faixa de preço"** sem revelar valor fixo. Concorrentes top usam esta estratégia para capturar long-tail comercial.
7. **Expandir "Antes e Depois"** para 5-6 casos por LP, cada um com legenda descritiva (que serve como conteúdo textual rico para SEO).
8. **Adicionar logos de associações e fabricantes** ao rodapé das LPs (sinal de E-E-A-T).
9. **Cruzar com a estratégia de Google Business Profile e Doctoralia** para alimentar `AggregateRating` real.

#### Impacto / Esforço
- **Impacto:** ★★★★★ (estas 3 LPs são as páginas comerciais de maior valor — capturam intenção de compra)
- **Esforço:** ★★★☆☆ (estrutura visual já existe; falta sobretudo SSR + meta dinâmica + FAQ + schema)

---

## 4. Padrões que devem virar regra da casa

Para evitar que o problema se repita à medida que páginas e posts novos forem criados, vale adotar como **padrão obrigatório**:

### 4.1. Para cada página nova
| Checkpoint | Critério mínimo |
|---|---|
| Title | ≤ 60 caracteres, único, com palavra-chave + cidade quando aplicável |
| Meta description | 140-155 caracteres, com chamada para ação |
| URL (slug) | Sem acentos, lowercase, palavras separadas por hífen, sem ID nem data |
| H1 | Existe, é único, contém a palavra-chave principal |
| Hierarquia H2/H3 | Lógica e indentada (H2 macro, H3 dentro de H2) |
| Canonical | Aponta para a própria URL (`self`) |
| Open Graph | Title + description + image (1200×630) |
| Twitter Card | `summary_large_image` |
| Schema | Mínimo: o tipo apropriado à página (Article / MedicalProcedure / FAQPage / Person / Dentist) |
| Imagens | Formato moderno (WebP), peso < 200 KB hero / 150 KB demais, alt descritivo em português |
| Carregamento | Hero com `loading="eager"`, demais com `loading="lazy"` |

### 4.2. Para cada post de blog
- Categoria + tags definidas (não criar livre — usar taxonomia fixa).
- Autor visível com bio.
- Imagem destacada produzida (não banco de imagens genérico).
- Pelo menos 2 links internos contextuais.
- 1 CTA estruturado para uma das LPs comerciais ou para a página de contacto.
- Word count mínimo: 800 (post satélite) ou 1.800 (pillar page).

### 4.3. Para imagens
- Naming consistente (`lowercase-com-hifen.webp`).
- `alt` em português, descritivo, com nome do profissional ou tipo de tratamento quando aplicável.
- Caption (legenda visível) quando agregar contexto.

---

## 5. Roadmap priorizado (impacto × esforço)

A sugestão é organizar a execução em **3 ondas**. Cada onda só começa quando a anterior estiver minimamente estável.

### Onda 1 — Fundações técnicas (Semanas 1-2)
Sem isto, todo o resto é desperdício.
1. **Decidir e implementar SSR/prerender** para `institutoareluna.pt` e `vivobem.pt`.
2. **Corrigir `<html lang>`** no `.pt`.
3. **Criar `robots.txt` real.**
4. **Adicionar `hreflang`** entre os domínios `.pt` e `.com.br`.
5. **Instalar plugin de SEO** no `institutoareluna.com.br`.
6. **Configurar sitemap** correto em ambos os domínios e submetê-los ao Google Search Console.

### Onda 2 — Metadados e estrutura (Semanas 3-5)
7. **Implementar title + description + OG dinâmicos** por rota nos sites Lovable.
8. **Adicionar schemas JSON-LD** principais (Dentist, Person, MedicalProcedure, FAQPage) em todos os sites.
9. **Reformatar hierarquia H2/H3** no `institutoareluna.com.br`.
10. **Aumentar word count** da home `.com.br` para 1.500-2.000 palavras.
11. **Reescrever alts** em todos os sites para português descritivo.
12. **Adicionar telefone visível no cabeçalho** em ambas as homes.

### Onda 3 — Migração das LPs + conteúdo + conversão (Semanas 6-12)
13. **Migrar as 3 LPs (`alinhadores`, `facetas`, `implantes`) do `vivobem.pt` para `institutoareluna.pt`** com slugs SEO-friendly (ver tabela no topo do documento).
14. **Configurar redirecionamentos 301** de cada URL antiga do `vivobem.pt` para a nova no `institutoareluna.pt`, e manter por 12+ meses.
15. **Corrigir o template do post de blog** (title/meta/OG dinâmico por post, único H1, schema BlogPosting, autor, CTA, posts relacionados, partilha social).
16. **Rever os 3 posts existentes do blog** (uniformizar para português europeu, corrigir hierarquia de cabeçalhos).
17. **Publicar os 2 primeiros artigos novos** + página "Sobre a Fundadora" (`/sobre-a-fundadora`).
18. **Adicionar secção FAQ visível** nas LPs (agora no domínio principal).
19. **Adicionar bloco "Investimento"** nas LPs.
20. **Expandir Antes/Depois** para 5-6 casos por LP.
21. **Activar cadência editorial** de 2 posts/mês.

### Em paralelo, a partir da Onda 2 — Sinais externos
- **Google Business Profile** completo (ambas as unidades): fotos novas, posts semanais, campanha de reviews.
- **Doctoralia**: reivindicar perfil da Dra. Arethuza e da equipa.
- **Backlinks** táticos: guest posts em portais portugueses de saúde/lifestyle e em portais brasileiros relevantes.

---

## 6. Como medir progresso

Sugiro acompanhar **mensalmente** estas métricas no Google Search Console e no Google Analytics 4 — para os 2 domínios e para o vivobem.

| Métrica | Onde medir | Baseline a estabelecer | Meta 90 dias | Meta 180 dias |
|---|---|---|---|---|
| Páginas indexadas | GSC → Cobertura | medir hoje | +5 por mês | dobrar |
| Impressões orgânicas | GSC → Performance | medir hoje | +50% | +200% |
| Cliques orgânicos | GSC → Performance | medir hoje | +50% | +200% |
| Posição média | GSC → Performance | medir hoje | melhorar 5 posições | melhorar 15 posições |
| Posts publicados | Auditoria manual | 1 (BR) + 0 (PT) | 8 | 16 |
| Reviews Google (cada unidade) | Google Business Profile | medir hoje | +20 | +50 |
| Conversões de formulário/mês | GA4 → eventos | medir hoje | +30% | +100% |

**Sugestão prática:** marcar **uma revisão mensal de 1 hora** com a equipa para ver estes números e decidir os próximos posts e ajustes técnicos.

---

## 7. Decisões abertas

Antes de a equipa de implementação começar a Onda 1, é preciso resolver estas 4 decisões. Cada uma desbloqueia uma parte do plano:

1. **Como resolver a renderização do React:** (A) ativar pré-render no sistema actual, (B) usar um serviço externo tipo prerender.io, ou (C) migrar para Next.js (com Antigravity isto deixa de ser projeto longo). **O dev deve avaliar e propor o caminho recomendado.**
2. **Blog:** confirmado que fica no domínio `.pt`. Falta o dev confirmar se o sistema de publicação actual (provavelmente Supabase + painel custom) aguenta a cadência prevista, ou se vale a pena reforçar/substituir.
3. **Sessão fotográfica profissional** da Dra. Arethuza Luna + equipa. É o ativo de imagem mais reutilizado do site e dos posts — alto ROI.
4. **Redação dos posts:** equipa interna ou redator(a) freelance? Sem cadência, blog perde valor mesmo bem implementado.

---

## Anexos disponíveis nesta pasta

- [01-auditoria-seo/auditoria-seo-areluna-2026-05-20.md](01-auditoria-seo/auditoria-seo-areluna-2026-05-20.md) — auditoria técnica detalhada (tabelas comparativas elemento a elemento, comparativo com concorrente Medway, dados brutos da análise).
- [02-plano-editorial-blog/plano-editorial-areluna.md](02-plano-editorial-blog/plano-editorial-areluna.md) — plano editorial de 12 meses (24 posts, 3 pilares clínicos, calendário, template de produção).
- [03-artigos-formatados/](03-artigos-formatados/) — os 3 textos enviados pelo cliente, já formatados em HTML semântico com meta SEO no cabeçalho, prontos para a equipa colar no CMS.
- [04-briefs-imagens/](04-briefs-imagens/) — briefs detalhados das imagens necessárias para os 2 primeiros posts + retrato da fundadora.
- [01-auditoria-seo/plano-implementacao-mastigado.md](01-auditoria-seo/plano-implementacao-mastigado.md) — versão técnica do plano (com exemplos de código JSON-LD, configurações de plugin, snippets HTML). Útil se a equipa de implementação quiser referência rápida — **não é obrigatório seguir literalmente**, é guia.
