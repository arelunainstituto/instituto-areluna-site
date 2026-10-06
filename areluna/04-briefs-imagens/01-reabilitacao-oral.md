# Briefs de imagem — Post 1: "O Diferencial da Reabilitação Oral no Instituto AreLuna"

> Cada bloco abaixo é uma imagem que o post usa. Entregar todas no padrão WebP (com fallback JPG se necessário), preservando o nome do ficheiro exato indicado em "Filename" — o HTML já referencia esses paths.

---

## IMG-01 (HERO — imagem destacada)
- **Filename:** `reabilitacao-oral-areluna-hero.webp`
- **Path final no WP:** `/wp-content/uploads/2026/06/reabilitacao-oral-areluna-hero.webp`
- **Dimensão:** 1200×630 px (proporção 1.91:1 — também serve para Open Graph)
- **Peso máx:** 200 KB
- **Cenário/composição:** equipa AreLuna (2-3 profissionais) em volta de um monitor com planeamento digital 3D de uma arcada dentária. Ambiente sofisticado, luz natural, paleta gold/branco da clínica. Foco nos rostos concentrados, não no ecrã.
- **Alt:** `Equipa do Instituto AreLuna em planeamento digital de reabilitação oral no Porto`
- **Caption visível:** `Sala de planeamento digital — Instituto AreLuna, Porto.`
- **Variação OG (mesma imagem, alt diferente):** alt = `Reabilitação oral no Porto: planeamento digital multidisciplinar no Instituto AreLuna`
- **Se não houver foto real:** usar uma da galeria já existente em `institutoareluna.pt` — `Clinica-AreLuna-D1-44-BVCF__lg.jpg` (sala de procedimento) é um bom fallback. Recortar e refinar para 1200×630.

---

## IMG-02 (Paciente — prova social)
- **Filename:** `paciente-areluna-sorriso-natural.webp`
- **Dimensão:** 1080×720 px
- **Peso máx:** 150 KB
- **Cenário:** retrato natural de paciente real (com **autorização escrita de uso de imagem** — RGPD!) sorrindo após reabilitação. Plano americano ou close. Sem photoshop pesado.
- **Alternativa sem paciente real:** foto produzida — modelo brasileira/portuguesa, 35-55 anos, sorriso natural; **NÃO usar foto de banco de imagens internacional óbvio (gringa loira sorrindo perfeita).**
- **Alt:** `Paciente do Instituto AreLuna a sorrir após reabilitação oral completa`
- **Caption:** `Resultado real de reabilitação oral no AreLuna — naturalidade preservada.`

---

## IMG-03 (Junta médica)
- **Filename:** `junta-medica-areluna-porto.webp`
- **Dimensão:** 1080×720 px
- **Peso máx:** 150 KB
- **Cenário:** 4-5 profissionais da equipa AreLuna sentados/em pé volta de uma mesa com um plano de caso (papéis + tablet com radiografia/3D). Conversa ativa, gesto de discussão. Não posado.
- **Alt:** `Junta médica multidisciplinar do Instituto AreLuna discutindo plano de reabilitação`
- **Caption:** `Junta médica multidisciplinar — cada caso é discutido entre especialistas.`
- **Dica:** capturar durante uma reunião real, no momento natural. Vale fazer 5 frames e escolher o mais autêntico.

---

## IMG-04 (Receção — ambiente spa)
- **Filename:** `areluna-recepcao-spa.webp`
- **Dimensão:** 1080×720 px
- **Peso máx:** 150 KB
- **Cenário:** receção do Instituto AreLuna no Porto em ângulo amplo. Luz quente, plantas, mobiliário, sem pessoas (ou com staff de costas, discreto). Transmitir "spa", não "consultório".
- **Alt:** `Receção do Instituto AreLuna no Porto, com ambiente acolhedor e sofisticado`
- **Caption:** `Receção do Instituto AreLuna — pensada para acolher, não intimidar.`
- **Fallback:** já existem fotos boas em `institutoareluna.pt` — `Clinica-AreLuna-D1-2-BP3yfe7i.jpg` (rotulada como "Areluna clinic reception"). Usar essa.

---

## IMG-AUTHOR (perfil da fundadora)
- **Filename:** `dra-arethuza-luna-perfil.webp`
- **Dimensão:** 240×240 px (display 120×120, retina 2x)
- **Peso máx:** 30 KB
- **Cenário:** retrato profissional da Dra. Arethuza Luna, fundo neutro/clínica, busto/ombros, sorriso suave. Usada na bio do autor de todos os posts.
- **Alt:** `Dra. Arethuza Luna, fundadora do Instituto AreLuna`
- **Importante:** essa mesma imagem é usada nos posts 2 e 3 — só precisa entregar 1 vez.

---

## Padrões técnicos (todas as imagens deste post)

- **Formato:** WebP (qualidade 80-85). Manter JPG de backup.
- **Naming:** sempre minúsculas, sem acentos, hífens (`-`) entre palavras. Já está definido nos filenames acima — não renomear.
- **Compressão:** passar por https://squoosh.app/ ou similar antes de subir ao WP.
- **Lazy loading:** apenas a hero usa `loading="eager"`. As demais já estão com `loading="lazy"` no HTML.
- **Largura/altura no HTML:** já preenchidas (evita CLS — Cumulative Layout Shift, métrica Core Web Vitals).
- **Alts:** copiar EXATAMENTE como escrito acima — foi pensado para SEO + acessibilidade.
- **Direitos:** se imagem é de paciente, anexar consentimento RGPD em pasta separada.
