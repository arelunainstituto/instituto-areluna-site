# Auditoria SEO + Gap Analysis — Instituto AreLuna (PT + BR) + VivoBem
**Data:** 2026-05-20 · **Auditor:** Pedro · **Método:** curl + parser próprio (HTML cru) + Jina Reader (para SPAs) + comparação com 2 concorrentes top-rank (Medway PT, Curitiba aesthetic cluster) · **URLs auditadas:** 6 (`institutoareluna.pt`, `institutoareluna.com.br`, `vivobem.pt/alinhadores`, `vivobem.pt/facetas`, `vivobem.pt/implantes`, `institutoareluna.pt/blog`)

---

## 1. Sumário Executivo — Top 8 buracos por impacto/esforço

> **Atenção:** os 4 primeiros são CRÍTICOS e impedem o site de ranquear. Têm de ser resolvidos antes de qualquer otimização de conteúdo.

1. **`institutoareluna.pt` e `vivobem.pt` são React SPAs (Lovable) sem SSR/prerendering.** O servidor entrega `<div id="root"></div>` vazio + index.html com apenas 1 título/meta hardcoded. **Todas as rotas (`/`, `/blog`, `/tratamentos`, `/turismo-dentario`, `/estetica-facial`, etc.) compartilham o MESMO `<title>` e a MESMA meta description.** Google consegue renderizar JS, mas com atraso, baixa prioridade e perda de sinais. **Solução obrigatória:** ativar SSR/SSG (Next.js, Astro ou serviço de prerender tipo prerender.io) OU migrar para WordPress/Webflow com server-side rendering nativo. Sem isso, **nada feito de SEO terá impacto real**.
2. **`institutoareluna.pt` declara `<html lang="en">` (INGLÊS!) numa clínica portuguesa.** O Google interpreta o site como conteúdo em inglês, derruba a relevância em buscas em pt-PT ("clínica dentária Porto", "implantes Porto") e atrapalha o sinal de geolocalização. Correção: 1 linha de código — `<html lang="pt-PT">`. Esforço: 5 minutos. Impacto: gigantesco.
3. **A página `/blog` de `institutoareluna.pt` está LITERALMENTE VAZIA.** Tem header + footer + a palavra "Blog" e nada mais. Zero artigos. Zero estrutura de listagem. O sitemap declara `/blog` com `priority 0.8` apontando para um buraco. No `institutoareluna.com.br` há apenas **1 post** ("O fim da face padronizada — Bioarquitetura Facial"). Sitemap brasileiro do WP retorna `wp-sitemap-posts-page-1.xml` mas o `-post-1.xml` (posts reais) sequer existe — mesmo problema que a Sari Doctors teve em 2026-04. **O blog é o ativo de aquisição orgânica mais importante e está zerado.**
4. **`robots.txt` de `institutoareluna.pt` retorna HTML (Content-Type `text/html`), não plain text.** O arquivo não existe — o roteador SPA serve o index para qualquer rota desconhecida. Crawlers ficam sem instruções formais. `vivobem.pt` tem `robots.txt` correto (text/plain). Correção: criar arquivo estático `public/robots.txt` no projeto Lovable apontando para `sitemap.xml`.
5. **`institutoareluna.com.br` (WordPress + Elementor) NÃO tem plugin SEO instalado.** Zero Yoast/Rank Math/SEOPress. Resultado: 0 meta description, 0 Open Graph, 0 Twitter Card, 0 JSON-LD, 0 controle de title por página. Mesmíssimo problema diagnosticado no Sari Doctors. Custo: 1 plugin (Rank Math grátis) + 4h de configuração = maior alavanca/menor esforço do site BR.
6. **Hierarquia H2/H3 quebrada nos 2 sites institucionais.** `areluna.com.br` tem 1 H1 + 40 H2 + **0 H3** (achatado, igual ao problema da Sari Doctors Obesidade); `areluna.pt` (após renderização) tem H1 "The main destination for advanced aesthetics and dentistry in Portugal" — apenas 1, ok, mas em INGLÊS no site PT em modo PT. Subseções de equipe usam H3 corretamente, isso está bem.
7. **Imagens 0/100% com alt descritivo no site BR.** 37 imagens, 15 com alt mas só 12 descritivos (e maioria genérica). Site PT: imagens em Cloudinary com nomes tipo `Clinica-AreLuna-D1-38-0Z4HhmQq.jpg` e alts em inglês ("Modern dental office", "Treatment environment"). Concorrente Medway: alt descritivo em ~70% das imagens.
8. **Sem JSON-LD em NENHUMA das páginas auditadas.** Concorrente Medway tem 2 blocos (`MedicalBusiness` + `WebPage`). Para clínica dentária, faltam: `Dentist` ou `MedicalBusiness` (NAP + horário + ratings) + `LocalBusiness` (geo coordenadas) + `Person` (Dra. Arethuza Luna + equipe) + `MedicalProcedure` (alinhadores/facetas/implantes/transplante capilar) + `FAQPage` (perguntas frequentes nas LPs) + `Review`/`AggregateRating` (depoimentos). Isso destrava rich results no Google.

---

## 2. Inventário dos sites — o que existe hoje

### 2.1. `www.institutoareluna.pt` (clínica Porto)
- **Stack:** React SPA (Lovable). Build em Vite. Bundle JS único `/assets/index-*.js`. Imagens em Cloudinary (`res.cloudinary.com/dli5oe4qg`).
- **Sitemap declara 11 URLs:** `/`, `/tratamentos`, `/turismo-dentario`, `/transplante-capilar`, `/estetica-facial`, `/contato`, `/blog`, `/casos-clinicos`, `/ortodontia`, `/privacidade`, `/termos`.
- **Páginas reais com conteúdo (via Jina render):** home (rica — equipe completa, casos, instituto), `/blog` (VAZIA), demais não auditadas individualmente mas o template é o mesmo.
- **CTAs:** WhatsApp `wa.me/351910098226` e link de pagamento Stripe `pagamento.institutoareluna.pt`.
- **NAP:** Porto · `+351 220 430 090` · `rececao@institutoareluna.pt` · Seg-Sex 09-19h · ERS Nº E161637 · Alvará 21593/2022.
- **Redes sociais (footer):** Facebook, Instagram (`institutoareluna`), TikTok, YouTube (`@institutoareluna`), X/Twitter (`institutoarelun`).

### 2.2. `institutoareluna.com.br` (clínica Curitiba)
- **Stack:** WordPress + Elementor + LiteSpeed Cache. PHP 8.3. Sem plugin SEO.
- **Sitemap:** `wp-sitemap-posts-page-1.xml` é o único mapa real → indica blog praticamente vazio. `wp-sitemap-posts-post-1.xml` (URL esperada de posts) sequer responde.
- **Home:** 720 palavras (raso), 1 H1 OK ("O padrão europeu de estética facial chega a Curitiba."), 40 H2, **0 H3** (estrutura achatada), 37 imagens (12 alt descritivo), 0 OG, 0 Twitter, 0 JSON-LD, 0 meta description, canonical OK, lang OK (`pt-BR`).
- **Endereço:** Rua Treze de Maio, 439, Galeria David Olympio Carneiro loja 1, Centro, Curitiba-PR CEP 80020-270. **Telefone não visível na home** (gap de SEO local).
- **Redes:** Instagram `institutoarelunabr`, Facebook `institutoareluna`.

### 2.3. `vivobem.pt` (landings de serviços do AreLuna PT)
- **Stack:** React SPA (Lovable). `lang="pt-PT"` ✅. GTM `GTM-K94Q8Q2G`, Meta Pixel `4096645043937889`, Google Consent Mode v2 + Cookieconsent (orestbida). `react-helmet-async` para tentar reescrever title por rota — funciona pra Google moderno mas não para todos os crawlers.
- **Sitemap declara 11 URLs:** `/`, `/implantes`, `/alinhadores`, `/facetas`, `/wellen-novato`, `/open-week`, `/caso-real`, `/caso-sandra-maria`, `/caso-diana-vieira`, `/politica-privacidade`, `/termos`.
- **Estrutura das 3 LPs principais (alinhadores, facetas, implantes):** muito boa (via render): H1 com palavra-chave + cidade, 5-6 H2 bem estruturados (Resultados Reais → Por que escolher → O processo → Depoimentos → Especialistas → CTA), formulário (Nome, Telemóvel, E-mail, consentimento RGPD), 3 depoimentos com estrelas, 3 casos visuais antes/depois, NAP completo no rodapé. **Conteúdo de LP está acima da média do mercado.** O único problema é a renderização client-side.
- **Title por LP (renderizado):**
  - `/alinhadores`: "Alinhadores Invisíveis no Porto | Instituto Areluna" (51 chars ✅)
  - `/facetas`: "Facetas Dentárias no Porto | Instituto Areluna" (47 chars ✅)
  - `/implantes`: a inferir (mesmo padrão)

---

## 3. Tabela comparativa — elemento por elemento

Legenda: ✅ OK · ⚠️ parcial · ❌ ausente/crítico

### 3.1. AreLuna (próprios)

| Elemento | `institutoareluna.pt` (home) | `institutoareluna.pt/blog` | `institutoareluna.com.br` | `vivobem.pt/alinhadores` | `vivobem.pt/facetas` | `vivobem.pt/implantes` |
|---|---|---|---|---|---|---|
| HTTP status | ✅ 200 | ✅ 200 | ✅ 200 | ✅ 200 | ✅ 200 | ✅ 200 |
| HTML servidor | ❌ 1.8 KB (SPA vazio) | ❌ 1.8 KB (SPA vazio) | ✅ 184 KB (SSR) | ❌ 4.5 KB (SPA) | ❌ 4.5 KB (SPA) | ❌ 4.5 KB (SPA) |
| Server-Side Rendering | ❌ não | ❌ não | ✅ sim (WP) | ❌ não | ❌ não | ❌ não |
| `lang` attribute | ❌ `en` (errado) | ❌ `en` (errado) | ✅ `pt-BR` | ✅ `pt-PT` | ✅ `pt-PT` | ✅ `pt-PT` |
| Title (no HTML cru) | ⚠️ genérico fixo p/ todas as rotas (60 chars) | ❌ herda o da home | ⚠️ "Instituto Areluna" (17 chars, sem keyword) | ⚠️ "Instituto Areluna - Clínica Estética e Dentária no Porto" — igual em todas as LPs no HTML cru | idem | idem |
| Title renderizado (JS) | ✅ corrige p/ rota | ❌ continua igual ao da home | n/a | ✅ "Alinhadores Invisíveis no Porto \| IA" (51 chars) | ✅ "Facetas Dentárias no Porto \| IA" (47 chars) | ✅ (mesmo padrão) |
| Meta description | ⚠️ única p/ site | ❌ idem | ❌ AUSENTE | ⚠️ única (do index) | ⚠️ idem | ⚠️ idem |
| Canonical | ❌ ausente | ❌ ausente | ✅ self | ❌ ausente | ❌ ausente | ❌ ausente |
| Meta robots | ❌ ausente | ❌ ausente | ⚠️ só `max-image-preview:large` | ❌ ausente | ❌ ausente | ❌ ausente |
| Hreflang | ❌ ausente (e há .pt + .com.br!) | ❌ | ❌ idem | ❌ | ❌ | ❌ |
| H1 (HTML cru) | ❌ 0 | ❌ 0 | ✅ 1 | ❌ 0 | ❌ 0 | ❌ 0 |
| H1 (renderizado) | ✅ 1 com kw | ⚠️ "Blog" só | ✅ 1 com kw | ✅ 1 com kw | ✅ 1 com kw | ✅ 1 com kw |
| H2 estrutura | ✅ ~10 (renderizado) | ❌ 0 | ❌ 40 H2 + 0 H3 (achatado) | ✅ 6-7 (renderizado) | ✅ 6-7 | ✅ 6-7 |
| H3 | ✅ usado p/ médicos | ❌ 0 | ❌ 0 | ✅ ok | ✅ ok | ✅ ok |
| Open Graph | ⚠️ 4 tags fixas | ⚠️ idem | ❌ 0 | ⚠️ defaults genéricos | ⚠️ idem | ⚠️ idem |
| Twitter Card | ⚠️ 3 tags fixas (`@lovable_dev`!) | ⚠️ idem | ❌ 0 | ⚠️ defaults | ⚠️ idem | ⚠️ idem |
| JSON-LD | ❌ 0 | ❌ 0 | ❌ 0 | ❌ 0 | ❌ 0 | ❌ 0 |
| Imagens com alt descritivo | ⚠️ em inglês ("Modern dental office") | n/a | ⚠️ 12/37 | ⚠️ poucos, genéricos ("Alinhamento Perfeito") | idem | idem |
| Word count main | ✅ ~2000 (renderizado) | ❌ ~30 | ⚠️ 720 (raso) | ✅ ~900 (renderizado) | ✅ ~900 | ✅ ~900 |
| Links internos | ✅ ~10 | ⚠️ só rodapé | ✅ 38 | ⚠️ apenas footer | ⚠️ idem | ⚠️ idem |
| CTAs | ✅ WhatsApp + Pagamento | ⚠️ só footer | ⚠️ não auditado | ✅ formulário + WhatsApp | ✅ idem | ✅ idem |
| Sitemap declara URL | ✅ | ✅ | n/a | ✅ | ✅ | ✅ |
| Robots.txt | ❌ retorna HTML | ❌ idem | ⚠️ não verificado | ✅ text/plain | ✅ idem | ✅ idem |
| Plugin SEO | n/a (SPA) | n/a | ❌ NENHUM | n/a | n/a | n/a |
| FAQ visível | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Schema MedicalBusiness/Dentist | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Schema FAQPage | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Schema Review | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| GTM / Pixel | ❌ não verificado | n/a | ⚠️ a verificar | ✅ GTM-K94Q8Q2G + FB Pixel | ✅ idem | ✅ idem |

### 3.2. Concorrentes-referência

| Elemento | Medway (`/tratamentos/implantes-dentarios/`) | Doctoralia Porto (índice) | Hormofy (referência Sari já mapeada) |
|---|---|---|---|
| Title | ✅ "Implantes Dentários \| Clínica Porto/Gaia e Feira - Medway" (71) | n/a (agregador) | "Home - Hormofy" (14, péssimo) |
| Meta description | ✅ 171 chars com CTA "Marque já a sua Avaliação Gratuita" | n/a | ausente |
| H1 | ✅ 1 ("Implantes Dentários") | n/a | 17 (carrossel) |
| H2 / H3 | ✅ 12 H2 + 16 H3 (rico) | n/a | 5 H2 |
| Word count | ✅ 2.660 palavras | n/a | 330 |
| OG | ✅ 5 tags | n/a | 10 |
| JSON-LD | ✅ 2 blocos | n/a | 6+ |
| Plugin SEO | ⚠️ não Yoast/RankMath visível (manual) | n/a | manual |
| Posição P1 buscas-alvo | "implantes dentários porto", "clínica dentária porto/gaia" | aparece nas SERPs de comparação | "imersão hormônios médicos" |

**Leitura crítica:** AreLuna **não compete** com Medway em conteúdo (2.660 vs ~900 palavras renderizadas), nem em sinais técnicos (SSR vs SPA), nem em rich results (2 schemas vs 0). E ainda assim, **a estrutura visual e copy das LPs vivobem.pt está acima da média** — basta servir esse conteúdo direito (SSR + meta dinâmicas + schemas) que se equipara em 30 dias.

---

## 4. Diagnóstico página por página

### 4.1. `https://www.institutoareluna.pt/` (home Porto)

**Estado:**
- React SPA Lovable, `lang="en"`, title genérico fixo "Instituto Areluna | Clínica Dentária e de Estética Avançada" (60 chars OK, mas é o MESMO em todas as rotas no HTML cru).
- Após renderização: estrutura excelente — H1 + apresentação clínica + galeria fotos + equipa completa (10 profissionais com OMD/OM, especialidade, mini-bio, foto), seção Casos Clínicos, Tratamentos, Turismo Dentário, Testemunhos, FAQ implícito, footer NAP completo.
- **Conteúdo navegacional/equipa está totalmente em INGLÊS** ("The Institute", "Treatments", "Dental Tourism") quando acessado sem trocar pra PT.
- WhatsApp + link Stripe de pagamento embutido.

**Comparativo:** Medway tem 2.660 palavras numa LP de serviço e ranqueia P1. AreLuna home tem ~2000 palavras renderizadas mas Google só "vê" o que conseguir crawlear via JS. Doctoralia (agregador) supera a AreLuna em buscas locais por confiança e estrutura.

**Recomendação cirúrgica:**
1. **Migrar para SSR ou habilitar prerender.** No Lovable: ativar build de prerender por rota (eles têm essa feature OU exportar para Next.js). Se inviável, contratar prerender.io (~$15/mês) que serve HTML pré-renderizado a bots.
2. **Trocar `<html lang="en">` para `<html lang="pt-PT">` no `index.html`.** Adicionar `<html lang="pt-BR">` numa rota futura `/br/` se for atender Brasil daqui.
3. **Adicionar `react-helmet-async` (igual ao vivobem.pt) para reescrever title/meta/canonical por rota.** Cada rota precisa de title + description + canonical próprios.
4. **Hreflang entre os dois domínios:** declarar no `<head>` de ambos:
   ```html
   <link rel="alternate" hreflang="pt-PT" href="https://www.institutoareluna.pt/" />
   <link rel="alternate" hreflang="pt-BR" href="https://institutoareluna.com.br/" />
   <link rel="alternate" hreflang="x-default" href="https://www.institutoareluna.pt/" />
   ```
5. **Criar `public/robots.txt` estático:**
   ```
   User-agent: *
   Allow: /
   Sitemap: https://www.institutoareluna.pt/sitemap.xml
   ```
6. **Injetar JSON-LD `Dentist` + `MedicalBusiness` + `LocalBusiness` no `<head>`** (ver template em §7.3).
7. **Trocar `twitter:site` de `@lovable_dev` para `@instituto_areluna`** (vergonhoso ter o handle do framework no meta).
8. **Substituir alts em inglês ("Modern dental office") por português** com nome do médico ou tipo de procedimento ("Dra. Aline Marodin — Cirurgiã Maxilofacial e Harmonização Orofacial", "Sala cirúrgica do Instituto AreLuna — Porto").

---

### 4.2. `https://www.institutoareluna.pt/blog`

**Estado:** PÁGINA VAZIA. Após renderização, mostra header + footer + um `<h1>Blog</h1>` solitário. Zero artigos. Zero CTA. Zero listing.

**Comparativo:** o blog deveria ser o motor de SEO orgânico. Clínicas dentárias rivais (Medway, AIC, Dentalcore) têm blogs com 30-100+ posts. Sem blog ativo, **o AreLuna PT depende inteiramente de ads pagos e tráfego direto**.

**Recomendação cirúrgica:** ver **§6 — Reestruturação completa do blog**. Primeiros 2 posts já estão prontos (textos enviados pelo cliente, formatados em §7 abaixo).

---

### 4.3. `https://institutoareluna.com.br/` (home Curitiba)

**Estado:** WordPress + Elementor + LiteSpeed. 720 palavras (raso para home institucional). 1 H1 OK, 40 H2 com 0 H3 (estrutura achatada), 0 meta description, 0 OG, 0 Twitter, 0 JSON-LD. Sem plugin SEO instalado. Telefone não visível na home (apenas endereço). Apenas 3 links externos.

**Comparativo:** concorrentes Curitiba (Dra. Ariane Almeida, Dra. Patrícia Giacomelli, Armonee) têm sites com Yoast/RankMath, FAQ, depoimentos com schema, mais word count.

**Recomendação cirúrgica:**
1. **Instalar Rank Math (grátis) no WordPress.** Configurar: index/follow, OG image, sitemap, breadcrumbs, schema MedicalBusiness.
2. **Adicionar meta description** (≤155 chars): `Clínica de estética facial e harmonização orofacial em Curitiba. Padrão europeu, equipa multidisciplinar e tratamentos personalizados. Marque sua avaliação.`
3. **Reformatar hierarquia:** converter H2s que são bullets de feature em H3 dentro de seções maiores. Meta: 5-7 H2 macro + H3 dentro de cada.
4. **Adicionar Schema:** `MedicalBusiness` + `LocalBusiness` (NAP + geo + horário) + `Person` (Dra. Arethuza Luna com sameAs Instagram + Doctoralia) + `Review`/`AggregateRating` se houver reviews Google My Business.
5. **Telefone visível no header** + WhatsApp click-to-chat.
6. **Reescrever alts de 25 imagens sem alt descritivo.**
7. **Aumentar word count para 1.500+** com bloco "Como funciona uma consulta", "Diferenciais", "FAQ".
8. **Linkar internamente para os futuros posts de blog.**

---

### 4.4. `https://vivobem.pt/alinhadores`

**Estado renderizado:** EXCELENTE para conversão — H1 "Alinhe o seu sorriso com Alinhadores Invisíveis", 6 H2 (Transformações Reais, Por que escolher, O processo, Depoimentos, Especialistas, CTA final), formulário lateral com RGPD, 3 casos visuais antes/depois, 3 depoimentos com estrelas, NAP completo. ~900 palavras. Title renderizado bom ("Alinhadores Invisíveis no Porto | Instituto Areluna", 51 chars).

**Problema técnico:** tudo isso é client-rendered. Google "vê" via headless render mas com perda de sinal. OG/Twitter compartilhados com `vivobem.pt` index (sem imagem específica do tratamento).

**Recomendação:**
1. **SSR via Lovable prerender** OU migração para Next.js.
2. **OG image específica:** `og:image` para foto de alinhador transparente em mão + sorriso. **Brief de imagem em §8.**
3. **Schema `MedicalProcedure`:**
   ```json
   { "@type": "MedicalProcedure", "name": "Alinhadores Invisíveis", "procedureType": "Therapeutic", "bodyLocation": "Mouth", "preparation": "Escaneamento intraoral 3D", "howPerformed": "Sequência de alinhadores transparentes personalizados...", "followup": "Trocas a cada 2 semanas", "performedBy": { "@type": "Dentist", "name": "Instituto AreLuna" } }
   ```
4. **Schema `FAQPage`** com 5-8 perguntas frequentes (incluir na LP visualmente — está faltando seção FAQ que é alta intenção de busca).
5. **Schema `AggregateRating`** se houver Google Reviews da clínica.
6. **Meta description específica** (155 chars): `Alinhadores invisíveis no Porto — Instituto AreLuna. Tratamento ortodôntico discreto, removível e confortável. Avaliação 3D gratuita. Marque já.`
7. **Adicionar bloco "Quanto custa?" / "Preço de alinhadores"** mesmo sem valor — só explicar fatores. Capta long-tail comercial alta.

### 4.5. `https://vivobem.pt/facetas` — mesmas conclusões.
**Title:** "Facetas Dentárias no Porto | Instituto Areluna" (47 chars ✅).
**Meta description sugerida:** `Facetas dentárias no Porto — lentes de contacto dentárias ultrafinas, naturais e duradouras. Design digital do sorriso. Avaliação especializada no Instituto AreLuna.`
**Schemas adicionais:** `MedicalProcedure` (Facetas Dentárias) + `FAQPage` ("Quanto duram?" "É reversível?" "Quanto custa?").

### 4.6. `https://vivobem.pt/implantes` — mesmas conclusões.
**Title sugerido:** "Implantes Dentários no Porto | Instituto AreLuna" (51 chars ✅).
**Meta description sugerida:** `Implantes dentários no Porto com tecnologia digital e equipa multidisciplinar. Recuperação de função e estética com segurança. Avaliação especializada no Instituto AreLuna.`
**Crítico:** essa é a SERP mais disputada (Medway, AIC, CMDP, Dentalcore, Bioimplantes). Precisa de:
- Word count ≥ 2.000 (matchar Medway).
- Bloco "Antes e Depois" com 5+ casos.
- Calculadora de preço ou faixa de valor (Medway captura long-tail "implante dentário preço").
- Schema `MedicalProcedure` + `FAQPage` + `Service` + `Offer` (mesmo "a partir de").

---

## 5. Mapa de quem domina cada cluster orgânico

| Cluster de busca | P1-P3 hoje | AreLuna está em SERP? | Estratégia |
|---|---|---|---|
| "implantes dentários porto" | Medway, AIC, Dentalcore, CMDP, Bioimplantes | ❌ não | Reforçar `vivobem.pt/implantes` com 2K+ palavras, schema + SSR. Ganhar 6 meses. |
| "alinhadores invisíveis porto" | Smile.com.pt, Invisalign provider directory, Medway | ⚠️ marginal | Vivobem já tem boa LP. Só falta SSR + schema. Mais fácil de ranquear. |
| "facetas dentárias porto" | OralMD, Medway, Dentalcore | ❌ não | Vivobem `/facetas` precisa de SSR + bloco "preço facetas". |
| "clínica dentária porto" | Yelp directory, Doctoralia, Medway, AIC | ⚠️ não direto | Foco em "clínica dentária [bairro]" — long-tail menos disputado. Schema LocalBusiness. |
| "turismo dentário portugal" | Medway, Smileinvest, MedicalPortugal | ❌ não | AreLuna tem página `/turismo-dentario`, mas vazia tecnicamente. Cluster de alto ticket. |
| "harmonização orofacial curitiba" | Dra. Ariane Almeida, Dra. Patrícia Giacomelli, Armonee | ❌ não | AreLuna BR é nova em Curitiba — precisa de blog + reviews + parcerias para autoridade local. |
| "transplante capilar porto/portugal" | Insparya, HairClinic, Norik | ❌ não | Página `/transplante-capilar` precisa de conteúdo + Dr. Marcos Kawasaki como autoridade nominal. |

---

## 6. Próxima etapa
- Auditoria → você está aqui.
- **Reestruturação do blog** → arquivo separado: `../02-plano-editorial-blog/plano-editorial-areluna.md`
- **Artigos formatados prontos para publicar** → pasta `../03-artigos-formatados/`
- **Briefs de imagens para os artigos** → pasta `../04-briefs-imagens/`
- **Plano de implementação mastigado** → `./plano-implementacao-mastigado.md` (próximo arquivo).
