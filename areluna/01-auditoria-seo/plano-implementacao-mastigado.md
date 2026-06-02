# Plano de Implementação Mastigado — AreLuna SEO + Blog
**Para quem vai executar:** o programador/dev que receber este plano. Cada item tem passo a passo, código pronto e critério de "feito".

> **Regra de ouro:** começar pelo Bloco 0 (fundações técnicas). Sem isso, o resto não terá efeito.

---

## BLOCO 0 — Fundações técnicas (1ª semana, sem isto nada funciona)

### Tarefa 0.1 — Decidir o futuro de `institutoareluna.pt` e `vivobem.pt`
**Problema:** os 2 sites são React SPA Lovable. Google demora a indexar, perde sinal.
**Opções (escolher 1):**
- **(A) Habilitar SSR/Prerender no Lovable** — verificar com o suporte Lovable se há export Next.js ou plugin SSR. Mais rápido.
- **(B) Contratar prerender.io** — $15/mês, serve HTML pré-renderizado aos bots. Plug-and-play. Recomendado se (A) não rolar.
- **(C) Migrar para Next.js (App Router)** — mais trabalhoso, mas dá controle total. Recomendado se houver budget de dev (estimativa: 2 semanas).
**Critério de feito:** `curl https://www.institutoareluna.pt/blog` retorna HTML com conteúdo real, não `<div id="root"></div>` vazio.

### Tarefa 0.2 — Corrigir `<html lang>` no `institutoareluna.pt`
**Arquivo:** `index.html` do projeto Lovable.
**De:** `<html lang="en">`
**Para:** `<html lang="pt-PT">`
**Critério de feito:** ver `pt-PT` no view-source.

### Tarefa 0.3 — Criar `robots.txt` estático em `institutoareluna.pt`
**Arquivo:** `public/robots.txt` (Lovable serve `public/` como estático).
**Conteúdo:**
```
User-agent: *
Allow: /
Disallow: /privacidade
Disallow: /termos

Sitemap: https://www.institutoareluna.pt/sitemap.xml
```
**Critério de feito:** `curl -I https://www.institutoareluna.pt/robots.txt` retorna `Content-Type: text/plain`.

### Tarefa 0.4 — Hreflang entre `.pt` e `.com.br`
**Onde:** `<head>` de AMBOS os sites, em TODAS as páginas.
**Código:**
```html
<link rel="alternate" hreflang="pt-PT" href="https://www.institutoareluna.pt/" />
<link rel="alternate" hreflang="pt-BR" href="https://institutoareluna.com.br/" />
<link rel="alternate" hreflang="x-default" href="https://www.institutoareluna.pt/" />
```
> No `.pt` (Lovable), injetar via `react-helmet-async`. No `.com.br` (WordPress), adicionar via Rank Math (Tarefa 0.6) ou no `functions.php`.
**Critério de feito:** Google Search Console → Internacionalização não acusa erro.

### Tarefa 0.5 — Trocar `twitter:site` no `index.html` do `institutoareluna.pt`
**De:** `<meta name="twitter:site" content="@lovable_dev" />`
**Para:** `<meta name="twitter:site" content="@instituto_areluna" />` (handle X/Twitter da clínica é `@institutoarelun` por sinal, validar)
**Critério de feito:** sem `@lovable_dev` em nenhum lugar do código.

### Tarefa 0.6 — Instalar Rank Math no WordPress (`institutoareluna.com.br`)
**Passos:**
1. WP Admin → Plugins → Adicionar Novo → buscar "Rank Math SEO" → instalar e ativar.
2. Wizard inicial: tipo de site = "Local Business" → subtype = "MedicalBusiness".
3. Conectar Google Search Console + Analytics 4.
4. Sitemap: habilitar "Posts", "Pages", "Categories", "Tags". Excluir "Authors" se desnecessário.
5. Schema → habilitar global: `Organization`, `LocalBusiness`/`MedicalBusiness`, `Person` (Dra. Arethuza Luna), `BreadcrumbList`.
6. Open Graph: definir imagem padrão 1200x630 da fachada/logo institucional.

**Configurar dados NAP em "Local SEO" do Rank Math:**
- Nome: `Instituto AreLuna`
- Tipo: `Dentist`
- Endereço: `Rua Treze de Maio, 439, Galeria David Olympio Carneiro loja 1, Centro, Curitiba-PR, 80020-270`
- Telefone: `[adicionar]`
- E-mail: `[adicionar]`
- Horário: `Mo-Fr 09:00-19:00`
- Coordenadas geo: extrair do Google Maps
- Imagem: logo da clínica
- Preço de avaliação: opcional
- Aceita: cartão, dinheiro, Pix
- Áreas atendidas: Curitiba e Região Metropolitana

**Critério de feito:** rich result test (`https://search.google.com/test/rich-results`) na home `institutoareluna.com.br` retorna 2+ schemas válidos.

### Tarefa 0.7 — Limpar `wp-sitemap` do WordPress (`institutoareluna.com.br`)
**Diagnóstico:** o sitemap atual lista apenas `wp-sitemap-posts-page-1.xml` (pages) e nenhum `wp-sitemap-posts-post-1.xml` (posts) — sinal de que NÃO HÁ POSTS publicados (e o único da home é "rascunho" ou está em outro post type).
**Ação:**
- Após instalar Rank Math, o sitemap dele substitui o nativo do WP.
- Publicar os 2 artigos (Bloco 2) → forçar regeneração do sitemap.
- Submeter `https://institutoareluna.com.br/sitemap_index.xml` ao Google Search Console.
**Critério de feito:** GSC mostra "Submitted: 3, Indexed: 3" em 7 dias.

---

## BLOCO 1 — Schemas JSON-LD (semana 2)

> Adicionar JSON-LD é a alavanca técnica de maior ROI agora. Templates abaixo são prontos para copiar.

### 1.1. Schema `Dentist` + `LocalBusiness` para AMBOS os sites

**Onde colar:** `<head>` da home (e idealmente em todas as páginas com NAP visível).

**Versão `institutoareluna.pt`:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Instituto AreLuna",
  "image": "https://www.institutoareluna.pt/assets/logo-DgaYdIJI.png",
  "url": "https://www.institutoareluna.pt/",
  "telephone": "+351 220 430 090",
  "email": "rececao@institutoareluna.pt",
  "priceRange": "€€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua de Júlio Dinis 194 R/C",
    "addressLocality": "Porto",
    "postalCode": "4050-024",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.1530,
    "longitude": -8.6307
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "19:00"
  }],
  "sameAs": [
    "https://www.instagram.com/institutoareluna",
    "https://www.facebook.com/institutoareluna",
    "https://www.tiktok.com/@institutoareluna",
    "https://www.youtube.com/@institutoareluna",
    "https://x.com/institutoarelun"
  ],
  "medicalSpecialty": ["Dentistry", "CosmeticDentistry", "Orthodontics", "OralAndMaxillofacialSurgery"],
  "isAcceptingNewPatients": true,
  "areaServed": [
    {"@type": "City", "name": "Porto"},
    {"@type": "Country", "name": "Portugal"}
  ]
}
</script>
```

**Versão `institutoareluna.com.br`** — idêntica trocando NAP, geo (Curitiba: lat -25.4284, lon -49.2733), `addressCountry": "BR"`, `priceRange`, sameAs `institutoarelunabr`.

### 1.2. Schema `Person` para Dra. Arethuza Luna (em ambos os sites)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dra. Arethuza Luna",
  "jobTitle": "Médica-Dentista, Ortodontia e Harmonização Orofacial",
  "image": "https://www.institutoareluna.pt/assets/dra-arethuza-luna.jpg",
  "url": "https://www.institutoareluna.pt/",
  "worksFor": {"@type": "Dentist", "name": "Instituto AreLuna"},
  "alumniOf": "Universidade Federal do Paraná",
  "knowsAbout": ["Ortodontia", "Ortopedia Facial", "Harmonização Orofacial", "Estética Facial"],
  "sameAs": [
    "https://www.instagram.com/dra.arethuzaluna",
    "https://www.doctoralia.pt/dra-arethuza-luna"
  ]
}
</script>
```

### 1.3. Schema `MedicalProcedure` para cada LP (vivobem.pt)

**Template para `/alinhadores`:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Alinhadores Invisíveis",
  "alternateName": ["Ortodontia Invisível", "Aparelho Transparente"],
  "procedureType": "https://schema.org/TherapeuticProcedure",
  "bodyLocation": "Mouth",
  "preparation": "Avaliação clínica + escaneamento intraoral 3D + planeamento digital.",
  "howPerformed": "Sequência personalizada de alinhadores transparentes removíveis, trocados a cada 2 semanas, movimentando os dentes gradualmente até à posição planeada.",
  "followup": "Consultas regulares de acompanhamento e retentores após a fase ativa.",
  "performedBy": {
    "@type": "Dentist",
    "name": "Instituto AreLuna",
    "url": "https://www.institutoareluna.pt/"
  },
  "url": "https://vivobem.pt/alinhadores"
}
</script>
```
Análogo para `/facetas` (procedureType `Therapeutic`, descrição própria) e `/implantes` (procedureType `Surgical`, recoveryTime "6 meses para osseointegração").

### 1.4. Schema `FAQPage` para cada LP — exemplo `/alinhadores`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Quanto tempo demora o tratamento com alinhadores invisíveis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Em média, entre 6 e 18 meses, dependendo da complexidade do caso. Casos simples podem demorar 4 meses; reabilitações maiores até 24 meses." }},
    { "@type": "Question", "name": "Os alinhadores são realmente invisíveis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. São fabricados em material transparente de alta qualidade, sendo praticamente impercetíveis na boca a partir de uma curta distância." }},
    { "@type": "Question", "name": "Posso comer com os alinhadores?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não — devem ser retirados para todas as refeições e bebidas (exceto água). Isto permite higiene completa e preserva o material." }},
    { "@type": "Question", "name": "Quanto custam os alinhadores no Porto?",
      "acceptedAnswer": { "@type": "Answer", "text": "O valor depende do número de alinhadores e da complexidade. No Instituto AreLuna a avaliação 3D inicial é gratuita e fornece o orçamento exato após o planeamento." }},
    { "@type": "Question", "name": "Alinhadores ou aparelho fixo: qual é melhor?",
      "acceptedAnswer": { "@type": "Answer", "text": "Depende do caso. Alinhadores são mais confortáveis e estéticos; aparelhos fixos podem ser mais indicados em rotações complexas. A avaliação especializada determina." }}
  ]
}
</script>
```
> **OBS:** se o schema FAQPage é usado, as mesmas perguntas DEVEM aparecer visualmente na página (Google penaliza FAQ schema "invisível"). Por isso, adicionar bloco FAQ visual nas 3 LPs vivobem.pt.

---

## BLOCO 2 — Blog (semana 3-4)

> Plano completo está em `../02-plano-editorial-blog/plano-editorial-areluna.md`.
> Primeiros 2 artigos prontos estão em `../03-artigos-formatados/`.

### 2.1. Decidir ONDE publicar o blog
**Diagnóstico:**
- `institutoareluna.pt/blog` está vazio. Lovable SPA. Sem CMS.
- `institutoareluna.com.br/blog/` é WordPress. Tem CMS. Mas é o site BR — público brasileiro.

**Recomendação:**
- **Curto prazo (já):** publicar os 2 artigos no `institutoareluna.com.br/blog/` (WP tem CMS, mais rápido).
- **Médio prazo (1-2 meses):** decidir se o blog do `.pt` será:
  - (a) WordPress paralelo (`blog.institutoareluna.pt`) — mais autonomia
  - (b) Headless CMS (Sanity/Strapi) puxando para o SPA Lovable — mantém stack
  - (c) Migrar tudo para Next.js + MDX (como o blog Sari já tem)
- **Hreflang entre versões BR/PT do mesmo post** quando o conteúdo for republicado adaptado.

### 2.2. Configurar permalinks WP em `institutoareluna.com.br`
**WP Admin → Configurações → Links Permanentes → "Nome do post"** (`/%postname%/`).
**Critério:** URLs ficam tipo `/blog/diferencial-reabilitacao-oral-areluna/`.

### 2.3. Criar categorias do blog
**WP Admin → Posts → Categorias:**
- `Reabilitação Oral`
- `Estética Integrada`
- `Implantes Dentários`
- `Alinhadores e Ortodontia`
- `Facetas Dentárias`
- `Turismo Dentário`
- `Harmonização Orofacial`

### 2.4. Publicar os 2 artigos
**Arquivos:** `../03-artigos-formatados/01-diferencial-reabilitacao-oral-areluna.html` e `02-estetica-integrada-naturalidade-tecnologia.html`.
**Como publicar:**
1. WP Admin → Posts → Adicionar Novo.
2. Colar título no campo "Título".
3. Trocar para editor "HTML" (não Gutenberg/Visual). Colar o conteúdo `<article>...</article>` (sem `<html>` e `<body>`).
4. Configurar: categoria, tags, autor (Dra. Arethuza Luna), excerpt (já vem no comentário no topo do arquivo HTML).
5. Imagem destacada: ver brief em `../04-briefs-imagens/`.
6. Rank Math:
   - Focus Keyword: ver no topo do HTML.
   - Title SEO: ver no topo do HTML.
   - Meta description: ver no topo do HTML.
   - Schema: Article (auto pelo Rank Math) + Author (Person).
7. Publicar.
8. Replicar tudo no `institutoareluna.pt/blog` quando o CMS estiver pronto.

---

## BLOCO 3 — Otimizar as 3 LPs vivobem.pt (semana 4-5)

Para cada LP (`/alinhadores`, `/facetas`, `/implantes`):

### 3.1. Adicionar via `react-helmet-async` (no componente de rota)
```jsx
<Helmet>
  <title>Alinhadores Invisíveis no Porto | Instituto AreLuna</title>
  <meta name="description" content="Alinhadores invisíveis no Porto — Instituto AreLuna. Tratamento ortodôntico discreto, removível e confortável. Avaliação 3D gratuita. Marque já." />
  <link rel="canonical" href="https://vivobem.pt/alinhadores" />
  <meta property="og:title" content="Alinhadores Invisíveis no Porto | Instituto AreLuna" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="https://vivobem.pt/og/alinhadores-1200x630.jpg" />
  <meta property="og:url" content="https://vivobem.pt/alinhadores" />
  <meta name="twitter:title" content="..." />
  <meta name="twitter:description" content="..." />
  <meta name="twitter:image" content="https://vivobem.pt/og/alinhadores-1200x630.jpg" />
</Helmet>
```

### 3.2. Adicionar seção FAQ visível (5-8 perguntas) — pré-requisito do schema FAQPage.
Componente novo `<FAQSection>` com accordion. Mesmas perguntas do schema.

### 3.3. Adicionar bloco "Quanto custa?" — pré-requisito para captar long-tail comercial.
Sem revelar preço fixo (estratégico), explicar fatores: complexidade, número de alinhadores, especialista, materiais. CTA para avaliação.

### 3.4. Adicionar bloco "Antes e Depois" expandido — 5 casos visuais.
Cada caso com legenda descritiva (alt + caption: "Caso 1 — Apinhamento dentário corrigido em 11 meses com 22 alinhadores").

### 3.5. Adicionar prova social institucional além de testemunhos.
Logos: ERS, OMD, eventuais parceiros (Invisalign, Straumann, Nobel Biocare).

---

## BLOCO 4 — Otimizar home do `institutoareluna.com.br` (semana 5-6)

### 4.1. Tarefas técnicas
- Meta description (Tarefa 0.6 do Rank Math).
- Telefone visível no header (não só endereço).
- Reduzir H2s e introduzir H3s na hierarquia.
- Adicionar JSON-LD (Bloco 1).
- Adicionar bloco FAQ "Quem somos / Como é uma consulta / Diferenciais".
- Reescrever 25 alts de imagem.

### 4.2. Tarefas de conteúdo (aumentar word count para 1.500+)
Adicionar 4 blocos novos:
1. **"Como é a sua primeira consulta no AreLuna"** (300 palavras) — passo a passo do paciente.
2. **"Padrão europeu, sotaque brasileiro"** (300 palavras) — diferencial Brasil+Europa.
3. **"Especialidades sob o mesmo teto"** (200 palavras) — equipe multidisciplinar.
4. **"Perguntas frequentes"** (250 palavras + schema FAQPage) — 5 a 7 perguntas.

---

## BLOCO 5 — Aquisição local + reviews (mês 2 em diante)

### 5.1. Google Business Profile (ex-Google My Business)
**Ambos os sites devem ter perfis 100% completos:**
- Foto fachada + 10 fotos do interior + 5 da equipe + 3 antes-depois.
- Categoria principal: `Clínica dentária` + secundárias `Ortodontista`, `Clínica de medicina estética`.
- Horário, telefone, site, descrição (750 chars max).
- Produtos: criar entradas para "Alinhadores invisíveis", "Facetas", "Implantes", "Harmonização orofacial", "Transplante capilar" com fotos.
- **Publicar 1 post/semana** (Google posts) — anúncios, dicas, casos.
- **Pedir reviews:** envio automatizado de link após alta. Meta: 50 reviews em 6 meses, média ≥ 4.7.

### 5.2. Doctoralia
- Verificar/reivindicar perfil da Dra. Arethuza Luna e demais médicos da equipa em ambos os países.
- Sincronizar agenda → captura de tráfego de busca por nome.

### 5.3. Backlinks táticos (mês 3+)
- Guest post em portais portugueses: `noticiasaominuto.com` (saúde), `lifestyle.sapo.pt`, `viagensemedicina.pt`.
- Brasil: blog HCor (parceria), `vivabem.uol.com.br`, `metropoles.com/saude`.
- Citação local: diretórios de clínicas dentárias PT (`saudecuf.pt`/diretórios), `tratamentosdentarios.pt`, `dentistas.pt`.

---

## BLOCO 6 — Mensuração e cadência

### 6.1. Setup obrigatório
- Google Search Console (GSC) para ambos os domínios.
- Google Analytics 4 — já tem GTM `GTM-K94Q8Q2G` no vivobem.pt; replicar no `.pt` e `.com.br`.
- Hotjar ou Microsoft Clarity (grátis) em todas as LPs.

### 6.2. KPIs por trimestre
| KPI | Baseline (estimado hoje) | Meta T+90 dias | Meta T+180 dias |
|---|---|---|---|
| Páginas indexadas (.pt) | ~5 | 15 | 25 |
| Páginas indexadas (.com.br) | ~5 | 12 | 20 |
| Posts de blog publicados | 1 | 8 | 16 |
| Reviews Google (cada unidade) | ? | +20 | +50 |
| Conversões de formulário/mês | ? | +30% | +100% |
| Cliques orgânicos (GSC) | ? | +50% | +200% |

### 6.3. Cadência editorial
- 2 posts novos por mês (1 a cada 2 semanas).
- Atualizar 1 post antigo por mês com novas pesquisas + republicar.
- 1 estudo de caso "antes e depois" por mês.

---

## Anexo — Checklist de "feito" antes de ir para o cliente

- [ ] Bloco 0 completo (5 tarefas).
- [ ] JSON-LD `Dentist` validado em rich-results.test em ambos os sites.
- [ ] 2 artigos publicados e indexados (verificar em `site:institutoareluna.com.br`).
- [ ] LPs vivobem com meta dinâmica, FAQ visível e schema MedicalProcedure validado.
- [ ] Google Business Profile com 10+ fotos novas em cada unidade.
- [ ] GSC submetido + sem erros críticos.
- [ ] Rastreamento de conversão (GA4 + Meta Pixel) testado nas 3 LPs.
