# AreLuna — Pacote SEO + Blog (2026-05-20)

**Snapshot:** 2026-05-20
**Cliente:** Instituto AreLuna (Porto + Curitiba) + VivoBem (LPs de serviços PT)
**Auditor:** Pedro
**Para quem vai implementar:** dev/marketing — todos os arquivos são auto-explicativos. Começar pelo `01-auditoria-seo/plano-implementacao-mastigado.md`.

---

## URLs auditadas

1. `https://www.institutoareluna.pt/` — site institucional Portugal (Porto)
2. `https://institutoareluna.com.br/` — site institucional Brasil (Curitiba)
3. `https://vivobem.pt/alinhadores` — LP de alinhadores invisíveis
4. `https://vivobem.pt/facetas` — LP de facetas dentárias
5. `https://vivobem.pt/implantes` — LP de implantes dentários
6. `https://www.institutoareluna.pt/blog` — blog (vazio hoje)

Concorrentes mapeados: Medway (Porto/Gaia), Doctoralia (agregador), Hormofy/Lapidare (cluster Curitiba comparativo).

---

## Conteúdo deste pacote

```
00-LEIA.md                                 ← você está aqui (índice)
CONVERSA-COM-O-DEV-PERGUNTAS-CHAVE.md      ← *** PARA O PEDRO LEVAR NA CONVERSA COM O DEV ***
                                              Perguntas em ordem, em linguagem natural, com o que cada
                                              resposta significa. Glossário express ao final.
RAIO-X-QUALIDADE-E-MELHORIAS.md            ← *** DOCUMENTO PARA A EQUIPA DE IMPLEMENTAÇÃO ***
                                              Scorecard de qualidade hoje + prescrição clara de melhoria
                                              página a página + roadmap em 3 ondas. SEM código.
01-auditoria-seo/
  auditoria-seo-areluna-2026-05-20.md      ← anexo técnico: tabela comparativa elemento a elemento
                                              + comparativo com concorrente Medway (dados brutos)
  plano-implementacao-mastigado.md         ← anexo técnico: snippets de código JSON-LD prontos
                                              (referência opcional para o dev — não obrigatório)
02-plano-editorial-blog/
  plano-editorial-areluna.md               ← 3 pilares clínicos, 24 posts em 12 meses, template,
                                              taxonomia, regra de hreflang entre BR/PT
03-artigos-formatados/
  01-diferencial-reabilitacao-oral-areluna.html       ← Texto 1 pronto para publicar
  02-estetica-integrada-naturalidade-tecnologia.html  ← Texto 2 pronto para publicar
  03-sobre-dra-arethuza-luna-carta-fundadora.html     ← Texto 3 (excerto do livro)
                                                         Recomendado como página /sobre-a-fundadora
04-briefs-imagens/
  01-reabilitacao-oral.md                  ← brief das imagens do post 1
  02-estetica-integrada.md                 ← brief das imagens do post 2
  03-sobre-fundadora.md                    ← brief do retrato da fundadora
```

> **Por onde começar:** abra primeiro o `RAIO-X-QUALIDADE-E-MELHORIAS.md`. Ele tem o diagnóstico
> claro, a prescrição e o roadmap em linguagem natural — pensado para a equipa de implementação
> entender o que precisa ser feito (e por quê) sem precisar mergulhar em código.
> Os arquivos da pasta `01-auditoria-seo/` são anexos técnicos para consulta opcional.

---

## Top 8 achados (resumo do diagnóstico)

> Detalhe completo em [01-auditoria-seo/auditoria-seo-areluna-2026-05-20.md](01-auditoria-seo/auditoria-seo-areluna-2026-05-20.md)

1. **`institutoareluna.pt` e `vivobem.pt` são React SPAs (Lovable) sem SSR.** Servidor entrega HTML vazio com 1 título genérico fixo. Todas as rotas compartilham o mesmo `<title>`. **Nada feito de SEO terá efeito enquanto isto não for resolvido.**
2. **`institutoareluna.pt` declara `<html lang="en">` (inglês!)** — clínica portuguesa marcada como conteúdo em inglês. Fix: 5 minutos.
3. **`/blog` do .pt está LITERALMENTE vazio.** O .com.br tem 1 post. Blog é o maior ativo de aquisição orgânica e está zerado.
4. **`robots.txt` do .pt retorna HTML** (não plain text) — arquivo não existe formalmente.
5. **`institutoareluna.com.br` não tem plugin SEO.** Zero meta description, zero OG, zero Twitter, zero JSON-LD. Mesmo padrão que tinha o Sari Doctors em 2026-04.
6. **Hierarquia H2/H3 quebrada:** site BR tem 40 H2 + 0 H3 (achatado).
7. **Imagens com alts genéricos ou em inglês** (no .pt aparece "Modern dental office").
8. **Zero JSON-LD em todas as páginas.** Faltam Dentist/MedicalBusiness/Person/MedicalProcedure/FAQPage/Review.

---

## Para começar amanhã de manhã

**Semana 1 — Fundações (Bloco 0 do plano):**
- Decidir SSR/Prerender no Lovable (ou contratar prerender.io) — sem isso, nada do resto funciona.
- Trocar `<html lang="en">` para `pt-PT` no `index.html` do .pt.
- Criar `public/robots.txt`.
- Instalar Rank Math no `institutoareluna.com.br`.
- Adicionar hreflang entre os 2 domínios.

**Semana 2 — Schemas JSON-LD:**
- Colar templates do Bloco 1 do plano: Dentist, Person, MedicalProcedure, FAQPage.

**Semana 3 — Publicar 2 primeiros posts:**
- Pegar os arquivos em `03-artigos-formatados/`.
- Produzir imagens conforme `04-briefs-imagens/`.
- Publicar no WP do `.com.br` (Rank Math já configurado).

**Semana 4-5 — Otimizar LPs do vivobem.pt:**
- Adicionar `react-helmet-async` para meta dinâmica por rota.
- Adicionar seção FAQ visível + schema FAQPage.
- Adicionar bloco "Quanto custa?".

**Semana 5-6 — Otimizar home do .com.br:**
- Aumentar word count para 1.500+.
- Reformatar H2/H3.
- Telefone visível no header.

**Mês 2+ — Aquisição local + reviews + backlinks:**
- Google Business Profile completo.
- Doctoralia.
- Guest posts em portais PT/BR.

---

## KPIs sugeridos (180 dias)

| Métrica | Hoje (estimado) | Meta 90d | Meta 180d |
|---|---|---|---|
| Páginas indexadas (.pt) | ~5 | 15 | 25 |
| Posts de blog publicados | 1 | 8 | 16 |
| Reviews Google (cada unidade) | ? | +20 | +50 |
| Cliques orgânicos (GSC) | ? | +50% | +200% |

---

## Como aproveitar a referência SariDoctors

O pacote SariDoctors em `../_stage/` serve como playbook validado:
- **Auditoria:** mesmo formato (tabelas, gaps, página a página) está em `_stage/01-auditoria-seo/`.
- **Plano editorial:** estrutura de 3 pilares + cluster de posts está em `_stage/02-plano-editorial-blog/`.
- **Blog Next.js:** se decidirmos migrar o blog do `.pt` para Next.js, há template pronto em `_stage/04-blog-nextjs/` (substituir conteúdo da Sari pelo da AreLuna).
- **Skill landing:** se quisermos criar mais LPs além de alinhadores/facetas/implantes (ex: harmonização orofacial, transplante capilar), há templates em `_stage/05-landings-html/5a-skill-landing/`.

---

**Próximos passos abertos para você decidir:**
- (1) Migrar blog do `.pt` para Next.js (como a Sari) ou ficar no WP do `.com.br` + redirect?
- (2) Investir em sessão fotográfica profissional da Dra. Arethuza Luna + equipa (alavanca de alto ROI)?
- (3) Contratar prerender.io agora ($15/mês) ou esperar discussão com Lovable sobre SSR?

Quando tiver decidido, dá pra rodar a próxima fase: produzir os 6 posts seguintes do calendário + 3 schemas adicionais por LP.
