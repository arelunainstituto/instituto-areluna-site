# Contrato da API do Blog — Instituto AreLuna

Especificação dos posts esperados pelo frontend em
`/api/public/marketing/posts` para que voltem a ser consumidos via API
e substituam (ou complementem) os posts estáticos em
`src/data/blogStaticPosts.ts`.

## 1. Endpoints

```
GET  /api/public/marketing/posts?page=1&limit=10   → PostsResponse
GET  /api/public/marketing/posts/{id}              → Post (com `content`)

Header obrigatório: x-api-key: <chave pública>
```

A listagem **não** precisa enviar `content` (poupa payload). O detalhe
**precisa**.

## 2. Schema do Post

### Campos obrigatórios

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | string | ID único |
| `title` | string | Vira `<h1>` na página; gera o slug se `slug` faltar |
| `content` | string (HTML) | Corpo do artigo — ver §4 |
| `image_url` | string (URL absoluta) | Hero + Open Graph + JSON-LD image |
| `published_at` | string ISO-8601 | Ex.: `"2026-06-08T10:00:00.000Z"` |

### Campos recomendados

| Campo | Tipo | Descrição |
|---|---|---|
| `excerpt` | string (≤155 chars) | Card da listagem e meta description |
| `author_name` | string | Linha do autor |
| `updated_at` | string ISO-8601 | Default: igual a `published_at` |
| `tags` | string[] | Reservado para categorias futuras |

### Campos extra (replicar do schema dos estáticos)

| Campo | Tipo | Default | O que faz |
|---|---|---|---|
| `slug` | string | `slugify(title)` | URL própria |
| `subtitle` | string | — | Subtítulo em itálico sob o H1 |
| `image_caption` | string | — | Legenda centrada sob o hero |
| `image_object_position` | string (CSS) | `center center` | `object-position` do crop. Crítico para retratos (ex: `center 15%`, `top`). |

Sem estes, o frontend funciona com fallbacks naturais — mas perdem-se
slug personalizado, subtítulo, legenda e enquadramento dos retratos.

### Campos de compatibilidade

`author_id`, `custom_author` — mantidos no schema histórico, podem ser
`""`.

## 3. Ordem da página (renderizada pelo frontend)

```
1. ← Voltar para o Blog
2. <h1>{title}</h1>
3. <p italic>{subtitle}</p>                ← se existir
4. 📅 {published_at} · 👤 {author_name}
5. <figure>
     <img src={image_url}
          style={objectPosition: {image_object_position}}/>
     <figcaption>{image_caption}</figcaption>  ← se existir
   </figure>
6. <div class="blog-content">{content}</div>     ← HTML do `content`
7. CTA padrão                              ← só se isStatic ≠ true
```

## 4. Convenções do HTML em `content`

Renderizado via `dangerouslySetInnerHTML` num `<div class="blog-content prose ...">`.

### Regras críticas

1. ❌ **Não incluir `<h1>`** — já é renderizado fora.
2. ❌ **Não incluir a imagem destaque** — `image_url` é hero separado.
3. ❌ **Não incluir título, subtítulo, data ou autor** — vêm do schema.
4. ✅ **HTML real**, não escapado. Tem de ser `<p>Texto</p>`, NÃO
   `&lt;p&gt;Texto&lt;/p&gt;`. Foi este o problema do editor Quill ao colar source.
5. ✅ Imagens com URL absoluto (ou path absoluto do mesmo domínio).
6. ✅ `alt` em PT-PT descritivo, `loading="lazy"`, `decoding="async"`.

### Tags com estilo automático

`<h2>`, `<h3>`, `<p>`, `<strong>`, `<em>`, `<ul><li>`, `<a>`,
`<figure><img/><figcaption/></figure>`.

### Classes CSS especiais

**CTA box verde (rodapé do artigo):**
```html
<div class="article-cta">
  <p class="article-cta__text">Cada caso é único. Fale com a nossa equipa para uma avaliação personalizada.</p>
  <a class="article-cta__btn"
     href="https://wa.me/351910098226?text=Olá!%20Li%20o%20artigo..."
     target="_blank" rel="noopener noreferrer">Falar com a nossa equipa</a>
</div>
```

**Bloco "Leia também":**
```html
<aside class="article-leia-tambem">
  <h2>Leia também</h2>
  <ul>
    <li>🦷 <a href="/blog/outro-slug">Outro artigo</a></li>
  </ul>
</aside>
```

**Tabela comparativa (responsiva):**
```html
<div class="blog-tabela-wrapper">
  <table class="blog-tabela-comparativa">
    <thead><tr><th></th><th>Opção A</th><th>Opção B</th></tr></thead>
    <tbody>
      <tr><td>Linha</td><td>X</td><td>Y</td></tr>
    </tbody>
  </table>
</div>
```

**Imagem inline com legenda:**
```html
<figure>
  <img src="https://cdn.../foto.jpg" alt="Descrição em PT-PT" loading="lazy" decoding="async" />
  <figcaption>Legenda em itálico</figcaption>
</figure>
```

## 5. Imagens

- Formato: JPG ou WebP
- Tamanho: ≤ 250KB (checklist guia DEV)
- Largura: ≤ 1200px (largura útil do layout)
- Naming SEO: hífens, sem acentos
  (ex: `implante-dentario-doi-instituto-areluna.jpg`)
- Hosting: qualquer CDN/storage; o frontend só consome o URL

## 6. Exemplo JSON pronto

```json
{
  "id": "post-reabilitacao-oral",
  "title": "O Diferencial da Reabilitação Oral no Instituto AreLuna",
  "slug": "reabilitacao-oral-muito-mais-do-que-colocar-dentes",
  "subtitle": "Muito mais do que \"colocar dentes\": devolver saúde, confiança e uma nova vida",
  "excerpt": "Muito mais do que \"colocar dentes\": como a reabilitação oral devolve função, equilíbrio facial e qualidade de vida no Instituto AreLuna.",
  "image_url": "https://cdn.example.com/a1-hero-recepcao.jpg",
  "image_caption": "Recepção do Instituto Areluna no Porto",
  "image_object_position": null,
  "published_at": "2026-05-27T10:00:00.000Z",
  "updated_at": "2026-05-27T10:00:00.000Z",
  "author_name": "Instituto Areluna",
  "author_id": "",
  "custom_author": "Instituto Areluna",
  "tags": ["Reabilitação Oral", "Implantes"],
  "content": "<p>Quando falamos em reabilitação oral...</p>... (todo o HTML)"
}
```

O `content` exato dos 4 posts está em `src/data/blogStaticPosts.ts`.
Copia o valor da propriedade `content` de cada post.

## 7. Reativar o consumo da API

**Passo 1.** Em `src/data/blogStaticPosts.ts`:
```ts
export const ENABLE_ERP_POSTS = true;  // antes: false
```

**Passo 2.** Decidir o que fazer com os estáticos:
- (A) Manter como fallback. Estáticos têm prioridade sobre a API se o
  slug bater. Útil enquanto a API estiver instável.
- (B) Remover:
  ```ts
  export const staticPosts: Post[] = [];
  ```
  E retirar as rotas dos posts estáticos do `PRERENDER_ROUTES` em
  `vite.config.ts`.

**Passo 3.** Atualizar `PRERENDER_ROUTES` em `vite.config.ts` — adicionar
os slugs novos da API que se queira pré-renderizar.

## 8. Verificação rápida

```bash
# 1. content vem em HTML real (não escapado)
curl -s "https://erp.institutoareluna.pt/api/public/marketing/posts/<id>" \
  -H "x-api-key: $KEY" | jq -r '.content' | head -c 300
# Deve mostrar: <p>Quando falamos...
# NÃO deve mostrar: &lt;p&gt; ou <p>

# 2. excerpt cabe em meta description
curl -s ... | jq -r '.excerpt | length'
# Ideal: 140-155

# 3. image_url é acessível
curl -I "$(curl -s ... | jq -r '.image_url')"
# Deve responder 200
```
