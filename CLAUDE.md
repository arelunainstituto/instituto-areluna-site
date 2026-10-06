# CLAUDE.md — Instituto AreLuna (site)

# Agentes: modelo, esforço e como orquestrar

## 1. Tabela de modelos

O agente principal é o ORQUESTRADOR: faz o que é difícil e distribui o resto.
Todo agente é lançado com o modelo E o esforço fixados por esta tabela
(preço médio por tarefa e nota de inteligência, para comparar):

| Uso | Modelo · esforço | Preço/tarefa | Nota | Para quê |
|---|---|---|---|---|
| Padrão (melhor preço) | Sonnet 5.5 · low | US$ 0,41 | 36 | Telas, fluxos, testes, textos, a maior parte do trabalho |
| Melhor equilíbrio | Opus 5.5 · medium | US$ 1,34 | 51 | Segurança, permissões, cobrança, migrações delicadas, isolamento entre clientes, revisões, integração |
| Maior nota | Opus 5.5 · max | US$ 5,98 | 58 | Só o crítico: arquitetura, revisão de segurança crítica, depuração que as outras não resolveram |

- EVITAR: Sonnet 5.5 em medium (US$ 0,59), xhigh (US$ 2,74) ou max (US$ 7,60), e Opus 5 em max (US$ 5,86). Sempre há uma opção mais barata e melhor.
- Haiku 4.5: só tarefas triviais e mecânicas de texto, quando pedido.
- O agente principal roda em Opus 5.5 · medium. Max só no crítico.
- Ao lançar um agente, dizer ao usuário o modelo e o esforço. Avisar quando algo for rodar numa configuração da lista «evitar».

## 2. Definições dos agentes

Definidas em `~/.claude/agents/*.md` (valem para todos os projetos); cada arquivo fixa o modelo e o esforço.
Lance com `subagent_type: <nome>`, sem `model`.

| subagent_type | Modelo · esforço |
|---|---|
| `sonnet-5-5-low` | claude-sonnet-5-5 · low (padrão) |
| `opus-5-5-medium` | claude-opus-5-5 · medium |
| `opus-5-5-max` | claude-opus-5-5 · max |
| `haiku-4-5` | claude-haiku-4-5-20251001 (só quando pedido) |

Elas só são carregadas na abertura da sessão. Numa sessão já aberta, use a ferramenta
de workflow com `model` e `effort` explícitos.

## 3. Como o orquestrador divide o trabalho

- Quebre o trabalho em LOTES. Cada lote é um agente, com pastas exclusivas, para dois agentes nunca editarem o mesmo arquivo ao mesmo tempo. Arquivos compartilhados mudam só pelo orquestrador ou por pedido escrito.
- Ordem de cada lote: especificação curta (com o bloco de segurança, se tocar dados) → código → testes no mesmo lote → portões (tipos, lint, regras de qualidade) → commit.
- Lotes de banco escrevem em rascunho; só o orquestrador promove as migrações, roda tudo numa base descartável e gera os tipos.
- Rode em paralelo o que não depende entre si. Use pipeline (cada item segue para a próxima etapa assim que termina), não barreira.
- Revisão independente depois do lote crítico: outro agente (Opus medium, ou max se for segurança crítica) tenta derrubar o resultado.
- Testes de tela (e2e) em grupos pequenos e com 1 worker: com muitos agentes rodando e2e ao mesmo tempo, o servidor trava.

## 4. Cabeçalho comum de todo prompt de agente

    Português de PORTUGAL em tudo. NÃO PARE PARA PERGUNTAR: decida e siga.
    PEDIDO DO USUÁRIO (literal): «...»  ← cite a frase do usuário que autoriza a tarefa
    Regras do CLAUDE.md valem inteiras (especificação antes, testes com o código,
    nunca enfraquecer teste nem portão, limites de código).
    Nunca abrir .env nem imprimir segredo. Não pare o servidor de desenvolvimento.
    Escreva só nas pastas do seu lote (outros agentes trabalham em paralelo).
    Testes de tela com 1 worker; apague capturas e rastros no fim (o disco enche).
    UM commit no fim (com o hook, nunca --no-verify; espere o lock do git).
    Entrega curta: arquivos, comandos rodados com a saída, pendências.

## 5. Lições que custaram caro

- O agente lê a ÚLTIMA mensagem do usuário como «o pedido». Se essa mensagem for sobre outro assunto, ele pode recusar o lote ou fazer outra coisa. Sempre cite literalmente, no prompt, a frase do usuário que autoriza a tarefa.
- Merge no main a cada commit, mas SÓ de versão estável: rode o CI completo no commit exato e faça o merge só se o CI passar. O deploy sai do main depois do CI verde, então a produção nunca recebe algo quebrado.
- Regrave instantâneos ou snapshots de teste a partir de uma cópia limpa do HEAD (git worktree), nunca da pasta de trabalho, que tem arquivos ainda sem commit de outros agentes.
- Vigie o disco: capturas e rastros de teste lotaram o disco e derrubaram o Docker.
- Limite de login nos testes: com muitos agentes, o login de teste bate no limite de tentativas. Relaxe esse limite só no ambiente de desenvolvimento e religue no fim.
- Fuso: confirme o horário do usuário antes de agendar prazos.
