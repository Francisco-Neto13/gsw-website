# Navegação proposta

## O problema hoje

A top bar faz três trabalhos ao mesmo tempo: escolhe a **área** (Início, Guias, Comunidade), o
**guia** (dropdown com Progressão, Endgame e Especiais) e a **seção** da página atual (o atalho de
seções). Dentro de um guia, o leitor não vê a lista de guias nem o índice da página ao mesmo
tempo que lê; para pular de "Sala 2" para "Sala 3" de uma raid, ele abre um menu no topo. No
celular, o atalho de seções e o menu disputam o mesmo espaço.

## O modelo

Três níveis, cada um com um lugar fixo:

| Nível | Pergunta do leitor | Onde fica |
|---|---|---|
| Área | "Onde estou no site?" | **Top bar**: Início · Guias · Comunidade |
| Guia | "Que outros guias existem?" | **Sidebar esquerda**, só dentro de Guias |
| Seção | "Onde estou nesta página?" | **Índice "Nesta página"** à direita, com a seção atual marcada |

É o modelo de documentação em três colunas (Starlight, Docusaurus), que os leitores de guia já
conhecem, com a pele da direção visual aprovada.

### Top bar (todas as páginas)

```text
[logo GsW]  Início   Guias   Comunidade                 [Buscar  Ctrl K]   [Discord]
```

- Só as três áreas; a área atual fica marcada (`aria-current`).
- **Buscar** abre uma paleta (Ctrl+K ou `/`) que procura em títulos de guia e de seção. Num site
  estático, o índice é gerado no build (Pagefind ou um JSON próprio); sem servidor.
- Discord como ação secundária, fixa à direita.
- Não há mais seletor de seção nem dropdown de guias no topo.
- No celular: logo, botão de busca e botão de menu (abre a gaveta com as três áreas e, dentro de
  Guias, a mesma árvore da sidebar).

### Sidebar dos guias (desktop ≥ 1024 px)

```text
GUIAS
  Começando
    Primeiros passos        (novo)
    Classes                 (novo)
  Progressão
    Leveling
    Profissões
    Montarias               em breve
  Endgame
    Lootrun
    Raids          ▾
      Primeiros passos
      Estrutura
      Raids da guilda
      Guia por raid
      Recompensas
      Extras
    Dungeons
    World Events
  Especiais
    Modos especiais
    Festivais               em breve
```

- Grupos fixos, guias dentro; o guia atual se abre e mostra as seções dele (o mesmo índice da
  direita, para quem prefere tudo à esquerda em telas médias).
- Guia sem conteúdo aparece com o selo "em breve", não some: mostra que o guia está crescendo.
- Item ativo marcado com indicador que desliza até o novo item na troca de página (padrão do Gastos).
- A sidebar rola sozinha, independente da página.
- Lista vem de um único arquivo de dados (evolução de `lib/site-content.ts`), como já é hoje.

### Índice "Nesta página" (desktop ≥ 1280 px)

- H2 e H3 do guia, com a seção visível marcada enquanto se rola (scroll-spy com
  `IntersectionObserver`).
- Para guias com passos numerados (salas de raid, etapas de Lootrun), o índice mostra os números
  das etapas: o leitor no meio da raid vê "Sala 3 de 4" sem rolar.
- "Voltar ao topo" no fim.
- Entre 1024 e 1280 px, o índice sobe para dentro da sidebar (abaixo do guia atual).

### Dentro do artigo

- **Breadcrumb** acima do título: `Guias › Endgame › Raids`.
- **Selo de versão e data** abaixo do título: "Atualizado para a 2.2.4 · nov/2026". Guia sem data
  recente mostra "Pode estar desatualizado".
- **Anterior / Próximo** no fim de cada guia, na ordem da sidebar.
- **Fontes** no fim de cada guia: links para as páginas da wiki e do site oficial consultadas.
- Âncoras com link copiável em cada H2/H3 (para mandar "olha a Sala 3" no Discord).
- **Onde parei**: o guia lembra a última seção lida (no navegador do leitor) e oferece "Continuar
  de Sala 3" ao voltar.

### Celular (< 1024 px)

- Top bar compacta; sidebar vira gaveta pelo botão de menu.
- O índice vira uma barra fixa logo abaixo da top bar com a seção atual ("Sala 3 · Raids ▾");
  tocar abre a lista de seções. É o que o jogador com o celular ao lado do PC usa.
- Alvos de toque de 44 px; nada de hover obrigatório.

## Páginas novas de navegação

| Rota | Papel |
|---|---|
| `/guias` | Índice de todos os guias, nos mesmos grupos da sidebar, em cartões com nível recomendado, estado (completo / em construção) e data de atualização |
| `/comunidade` | Hub da guilda: história, membros, galeria, Silverbull Shares e como entrar (Discord) |

As rotas atuais (`/raids`, `/lootrun`, `/historia`...) **continuam valendo** para não quebrar links
já compartilhados. Se a Fase 3 mover os guias para `/guias/<guia>`, as antigas ganham
`redirects` permanentes no `next.config.ts`. Decisão a confirmar na aprovação.

## Comunidade

Hoje a Comunidade é só a página de História e o guia de Shares. Proposta:

- `/comunidade`: abertura com a identidade da guilda (logo, tag `[GsW]`, ano de fundação, pilares),
  atalhos para história, membros e galeria, e o convite para o Discord;
- membros como mural de retratos com cargo e função (dados que já existem em `members.ts`),
  filtráveis por função;
- galeria em grade com abertura em tela cheia (já existe; ganha navegação por teclado);
- Silverbull Shares continua guia, mas listado também aqui, porque é a economia da guilda.

Na Comunidade não há sidebar de guias: ela usa só a top bar e um índice simples da página.
