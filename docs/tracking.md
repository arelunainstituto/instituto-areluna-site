# Tracking do site — eventos, GTM e GA4

O site envia eventos para o `dataLayer`. O **Google Tag Manager** (`GTM-K94Q8Q2G`) decide para onde vão: GA4 (`G-C04DZ1RFC9`) e Google Ads (`AW-10946516279`).

- **Código:** `src/lib/analytics.ts` (função `track`, ouvinte global de cliques e `section_view`).
- **Formulários:** `src/components/ContactFormSection.tsx` e `src/lp/components/EvaluationForm.tsx`.
- **Secções:** cada secção tem um nome estável em `data-track-section`, que não depende da língua.

**Regra:** os eventos desta lista nunca levam dados pessoais (nome, email, telefone, mensagem). O evento antigo `form_submit_lead`, que já existia, leva-os em `lead_data` para as conversões otimizadas do Google Ads. **Nunca** o encaminhe para o GA4.

## Dicionário de eventos

Todos os eventos levam `page_path` e `page_language`.

| Evento | Quando | Parâmetros |
|---|---|---|
| `whatsapp_click` | Clique em qualquer link de WhatsApp | `cta_section`, `cta_label`, `cta_item`, `contact_id`, `link_url` |
| `phone_click` | Clique em `tel:` | `cta_section`, `cta_label`, `contact_id` |
| `email_click` | Clique em `mailto:` | `cta_section`, `cta_label` |
| `cta_click` | Clique num botão que leva ao formulário (`#contacto-form`) | `cta_section`, `cta_label`, `cta_target` |
| `form_start` | Primeira interação com um formulário | `form_name`, `form_section` (+ `lp_interesse` nas LPs) |
| `generate_lead` | Formulário **enviado com sucesso** | `form_name`, `form_section`, `unit`, `residence` (institucional) ou `lp_interesse` (LPs) |
| `lead_conversion` | O mesmo momento do `generate_lead` (evento que a tag «OST — Google Ads Conversão Lead» já espera) | iguais ao `generate_lead` |
| `form_error` | O envio falhou | `form_name`, `form_section` |
| `section_view` | A secção ocupou metade do ecrã (uma vez por página vista) | `section` |
| `select_content` | Filtro de tratamentos, filtro de casos ou vista de um caso | `content_type`, `item_id`, `cta_section` |
| `faq_open` | Pergunta frequente aberta | `faq_section`, `faq_index`, `faq_question` |

**Valores:**
- `contact_id`: `contact_1` (+351 910 338 912) ou `contact_2` (+351 910 170 972), do round robin em `src/contexts/ContactContext.tsx`.
- `cta_item`: id do tratamento, nos cartões da secção de tratamentos.
- `cta_section`:
  - **Home:** `hero-home`, `galeria`, `corpo-clinico`, `tratamentos`, `transplante-capilar-home`, `casos-clinicos`, `formulario`.
  - **Transplante capilar:** `hero-transplante-capilar`, `transplante-capilar`, `casos-transplante-capilar`, `faq-transplante-capilar`.
  - **Estética facial:** `hero-estetica-facial`, `estetica-facial`, `casos-estetica-facial`, `faq-estetica-facial`.
  - **Tratamentos:** `hero-tratamentos`, `faq-tratamentos`.
  - **Contacto e blog:** `hero-contacto`, `hero-blog`, `artigo-blog`.
  - **Fundadora:** `hero-fundadora`, `fundadora-percurso`, `fundadora-cta`.
  - **Elementos comuns:** `menu`, `rodape`, `botao-flutuante`.
  - **Outras:** `checkup`, `pacientes-internacionais`, `pagina-404`, `em-desenvolvimento`.
  - **Landing pages:** `secao-N`, pela ordem da secção na página.

Para um botão novo de WhatsApp ou telefone não é preciso código de tracking: o ouvinte global regista-o sozinho. Basta a secção ter `data-track-section`. O atributo `data-track-label` fixa um rótulo estável e `data-track-item` identifica o item.

## Configuração no GTM

### 1. Variáveis

Em **Variáveis → Variáveis definidas pelo utilizador → Nova → Variável da camada de dados**, crie uma por parâmetro:

`cta_section`, `cta_label`, `cta_item`, `cta_target`, `contact_id`, `link_url`, `form_name`, `form_section`, `unit`, `residence`, `lp_interesse`, `section`, `content_type`, `item_id`, `faq_section`, `faq_index`, `faq_question`, `page_language`

Sugestão de nome: `DLV - cta_section`, e assim por diante.

### 2. Acionadores

- **`CE - Eventos do site`:** evento personalizado, nome
  `^(whatsapp_click|phone_click|email_click|cta_click|form_start|generate_lead|form_error|section_view|select_content|faq_open)$`, com «Usar correspondência de regex» ligado.
- **`CE - whatsapp_click`:** evento personalizado `whatsapp_click`.
- **`CE - phone_click`:** evento personalizado `phone_click`.
- **`CE - lead_conversion`:** já existe, usado pela tag «OST — Google Ads Conversão Lead».

### 3. Tags

1. **`GA4 - Eventos do site`:** tipo «Google Analytics: evento GA4».
   - ID de medição: `G-C04DZ1RFC9`.
   - Nome do evento: `{{Event}}`.
   - Parâmetros: os da lista de variáveis acima (nome do parâmetro = nome da variável).
   - Acionador: `CE - Eventos do site`.
2. **`Google Ads - Conversão WhatsApp`** (recomendado). Primeiro, no Google Ads, crie uma ação de conversão **«Clique WhatsApp»**:
   - categoria «Contactar», contagem «Uma»;
   - definida como **secundária** no início, para não alterar as licitações enquanto avalia o volume.

   Depois, no GTM, crie uma tag «Acompanhamento de conversões do Google Ads» com o ID `10946516279`, a etiqueta dessa nova ação e o acionador `CE - whatsapp_click`.
3. **(Opcional) `Google Ads - Conversão Chamada`:** igual à anterior, com uma ação «Clique telefone» e o acionador `CE - phone_click`.

Antes de publicar, use o **Pré-visualizar** do GTM no site. Clique num cartão de tratamento e confirme que a tag GA4 e a de conversão WhatsApp disparam.

## Configuração no GA4

1. **Admin → Definições personalizadas → Criar dimensão personalizada** (âmbito Evento), uma para cada um de:
   `cta_section`, `cta_label`, `cta_item`, `contact_id`, `form_name`, `section`, `content_type`, `item_id`, `faq_question`, `unit`, `lp_interesse`.
2. **Admin → Eventos-chave:** marque `generate_lead`, `whatsapp_click` e `phone_click`.
3. **Admin → Fluxos de dados → Medição otimizada:** confirme que «Alterações de página com base em eventos do histórico do browser» está ligado. O site é uma SPA e é isto que regista as visualizações de página ao navegar.

As dimensões só têm dados a partir do momento em que são criadas. Não são retroativas.

## Relatórios para a revisão periódica

No GA4, em **Explorar**:

- **Que secção gera contactos:**
  - **Livre:** linhas `cta_section`, colunas «Nome do evento» (filtro `whatsapp_click`, `phone_click`, `cta_click`), valores «Contagem de eventos».
  - **Taxa de conversão por secção:** junte `section_view` com `section` e compare quantos viram cada secção com quantos clicaram nela.
- **Que tratamentos interessam:** `whatsapp_click` com `cta_section = tratamentos`, por `cta_label` / `cta_item`.
- **Funil do formulário:** `cta_click` → `form_start` → `generate_lead`, e `form_error` à parte.
- **Dúvidas dos pacientes:** `faq_open` por `faq_question`. As perguntas mais abertas são candidatas a subir na página ou a entrar no texto principal.
- **Round robin:** `whatsapp_click` e `phone_click` por `contact_id`.
- **Origem do tráfego:** acrescente «Origem / meio da sessão» e «Campanha da sessão» a qualquer um dos anteriores.

## Pendente: consentimento (RGPD / Consent Mode v2)

O banner de cookies (`src/components/CookieBanner.tsx`) guarda a escolha em `localStorage` (`cookie-consent`), mas **não a comunica ao Google**: o GTM, o GA4 e o Ads carregam mesmo depois de «Rejeitar». Na UE, o Google Ads exige o Consent Mode v2 desde março de 2024, e o RGPD exige que a recusa seja respeitada. Ver a decisão em aberto no PR / com a equipa.
