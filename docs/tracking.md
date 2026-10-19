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

## Passo a passo: conversões no Google Ads + tags no GTM

### Passo 0. Conversões a ter (o que conta como lead)

| Conversão no Google Ads | Evento do site | Categoria | Contagem | Principal / Secundária |
|---|---|---|---|---|
| **Lead — formulário** (já existe; tag «OST — Google Ads Conversão Lead») | `lead_conversion` | Submeter formulário de lead | Uma | Principal |
| **Clique WhatsApp** (criar) | `whatsapp_click` | Contactar | Uma | Secundária no início |
| **Clique telefone** (criar) | `phone_click` | Contactar | Uma | Secundária no início |

As conversões «Clique WhatsApp» e «Clique telefone» começam como **secundárias**: aparecem nos relatórios, mas não alteram as licitações. Ao fim de 2 a 4 semanas, se o volume e a qualidade fizerem sentido, passe-as a principais.

Cada conversão tem duas peças, e são elas que a identificam no GTM:
- **ID de conversão:** o número da conta, igual para todas (`10946516279`).
- **Etiqueta de conversão:** um código único por ação (ex.: `AbC-D_efG-h12_34-567`).

### Passo 1. Criar cada conversão no Google Ads e copiar o ID e a etiqueta

Repita para «Clique WhatsApp» e «Clique telefone».

1. **Google Ads → Objetivos → Conversões → Resumo → + Criar ação de conversão.**
2. Escolha **Site**, introduza `institutoareluna.pt` e clique em **Analisar**.
3. Em baixo, escolha **«Adicionar uma ação de conversão manualmente»**.
4. Preencha:
   - **Objetivo e ação:** Contactar.
   - **Nome:** Clique WhatsApp.
   - **Valor:** «Não utilizar um valor», ou um valor médio por lead, se o tiver.
   - **Contagem:** Uma.
   - **Janela de conversão por clique:** 30 dias.
5. Guarde e, no ecrã de configuração, escolha **«Utilizar o Google Tag Manager»**. Copie:
   - **ID de conversão:** `10946516279`;
   - **Etiqueta de conversão:** o código dessa ação.
6. Em **Conversões → Resumo**, abra a ação → **Editar definições** → **Ação de otimização: Secundária**.

Para confirmar a etiqueta da conversão **Lead** que já existe: abra essa ação → **Configuração da etiqueta → Utilizar o Google Tag Manager**. A etiqueta tem de ser igual à da tag «OST — Google Ads Conversão Lead» no GTM.

### Passo 2. Variáveis no GTM

**GTM → Variáveis → Variáveis definidas pelo utilizador → Nova → Variável da camada de dados.** Crie uma por linha, com o nome `DLV - <parâmetro>` e o «Nome da variável da camada de dados» igual ao parâmetro:

`cta_section`, `cta_label`, `cta_item`, `cta_target`, `contact_id`, `link_url`, `form_name`, `form_section`, `unit`, `residence`, `lp_interesse`, `section`, `content_type`, `item_id`, `faq_section`, `faq_index`, `faq_question`, `page_language`

### Passo 3. Acionadores no GTM

**GTM → Acionadores → Novo → Evento personalizado.**

| Nome do acionador | Nome do evento | Regex |
|---|---|---|
| `CE - whatsapp_click` | `whatsapp_click` | não |
| `CE - phone_click` | `phone_click` | não |
| `CE - lead_conversion` | `lead_conversion` | não (já existe) |
| `CE - Eventos do site` | `^(whatsapp_click\|phone_click\|email_click\|cta_click\|form_start\|generate_lead\|form_error\|section_view\|select_content\|faq_open)$` | **sim** |

### Passo 4. Tags no GTM

**GTM → Etiquetas → Nova.**

1. **`Google Ads - Conversão WhatsApp`**
   - **Tipo:** Acompanhamento de conversões do Google Ads.
   - **ID de conversão:** `10946516279`.
   - **Etiqueta de conversão:** a do passo 1 («Clique WhatsApp»).
   - **Acionador:** `CE - whatsapp_click`.
2. **`Google Ads - Conversão Telefone`:** igual à anterior, com a etiqueta «Clique telefone» e o acionador `CE - phone_click`.
3. **`OST — Google Ads Conversão Lead`** (já existe): confirme que o acionador é `CE - lead_conversion`. O site passou a enviar este evento só quando o formulário é **enviado com sucesso**; antes não o enviava.
4. **`GA4 - Eventos do site`**
   - **Tipo:** Google Analytics → Evento GA4.
   - **ID de medição:** `G-C04DZ1RFC9`.
   - **Nome do evento:** `{{Event}}` (variável integrada «Event»; ative-a em Variáveis → Configurar).
   - **Parâmetros do evento:** uma linha por parâmetro do passo 2, com o nome à esquerda e `{{DLV - …}}` à direita. Não inclua o `lead_data`.
   - **Acionador:** `CE - Eventos do site`.
5. Confirme que existe uma **Etiqueta Google `G-C04DZ1RFC9`** com o acionador **Initialization - All Pages** (é a que regista as visualizações de página do GA4). Se não existir, crie-a: **Tipo** Etiqueta Google, **ID** `G-C04DZ1RFC9`.

### Passo 5. Consentimento no GTM (Consent Mode v2)

O site já define o consentimento: tudo **negado** por omissão e **concedido** quando o visitante clica «Aceitar» no banner.

- As tags da Google (Etiqueta Google, GA4, conversões do Ads, Vinculador de conversões) já respeitam o consentimento sozinhas. Não é preciso mudar nada nelas.
- **Admin → Definições do contentor → «Ativar a vista geral do consentimento».** Em **Etiquetas**, o ícone de escudo mostra o estado de cada tag.
- **Tags de terceiros no GTM** (Meta, TikTok, Hotjar, etc.): em **Definições avançadas → Definições de consentimento**, escolha **«Exigir consentimento adicional para a etiqueta disparar»** e acrescente `ad_storage` (publicidade) ou `analytics_storage` (estatística).
- O site envia também o evento `cookie_consent_update` (com `consent_choice` = `accepted` / `rejected`), útil como acionador.

### Passo 6. Testar e publicar

1. Clique em **Pré-visualizar** e abra `https://www.institutoareluna.pt`. No banner, clique **Aceitar**.
2. Clique num cartão da secção «Tratamentos»:
   - no Tag Assistant, o evento `whatsapp_click` deve mostrar disparadas as tags `Google Ads - Conversão WhatsApp` e `GA4 - Eventos do site`;
   - em **Camada de dados**, confirme `cta_section = tratamentos`.
3. Repita com o telefone do menu (`phone_click`).
4. Clique em **Submeter → Publicar** com uma descrição (ex.: «Conversões WhatsApp/telefone + eventos GA4»).
5. Nas 24 a 48 horas seguintes, em **Google Ads → Conversões**, o estado das ações novas passa de «Não verificada» para «Registar conversões».

## Configuração no GA4

1. **Admin → Definições personalizadas → Criar dimensão personalizada** (âmbito Evento), uma para cada um de:
   `cta_section`, `cta_label`, `cta_item`, `contact_id`, `form_name`, `section`, `content_type`, `item_id`, `faq_question`, `unit`, `lp_interesse`.
2. **Admin → Eventos-chave:** marque `generate_lead`, `whatsapp_click` e `phone_click`.
3. **Admin → Fluxos de dados → Medição otimizada:** confirme que «Alterações de página com base em eventos do histórico do browser» está ligado. O site é uma SPA e é isto que regista as visualizações de página ao navegar.
4. **Não importe** estes eventos-chave do GA4 para o Google Ads como conversões. As conversões já são enviadas diretamente pelas tags do Ads, e importá-las também contaria cada conversão duas vezes.

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

## Consentimento (RGPD / Consent Mode v2)

- **Consentimento por omissão:** o bloco no `<head>` do `index.html` define `consent default`, com tudo **negado** exceto `functionality_storage` e `security_storage`, antes do GTM. Se o visitante já tiver aceitado (`localStorage` `cookie-consent = accepted`), repõe logo o `update` concedido.
- **Banner** (`src/components/CookieBanner.tsx`): chama `setConsent()` de `src/lib/consent.ts`, que envia `consent update` (granted ou denied) e o evento `cookie_consent_update`.
- **Rodapé:** tem «Preferências de cookies», que reabre o banner para mudar ou retirar a escolha.
- **Modo avançado:** com o consentimento negado, as tags da Google carregam mas só enviam sinais sem cookies. O Google usa-os para estimar conversões e visitas.
- **Pixel da Meta nas LPs** (`src/lp/components/LPTracking.tsx`): começa em `fbq('consent','revoke')` e passa a `grant` quando o visitante aceita.
  - O pixel não dispara em navegadores automatizados, por isso verifique-o em **Gestor de Eventos da Meta → Testar eventos**.
  - O antigo banner cookieconsent das LPs foi removido, porque nunca chegava a correr.
