# Padrões

## Commits

Padrão tirado do histórico do repositório (`git log`, 83 commits até `f8063b4`). Os commits
antigos eram em português; desde a remoção do back-end (`refactor: remove backend stack...`)
todos são em inglês, e esse é o padrão a seguir.

### Formato

```text
type(scope): imperative lowercase summary
- Capitalized imperative note
- Another note
```

- **Resumo**: `type(scope): `, verbo no imperativo em minúsculas (`add`, `fix`, `refine`,
  `normalize`, `restructure`), sem ponto final. Costuma ter entre 50 e 80 caracteres.
- **Notas**: começam com `- ` e verbo no imperativo com **inicial maiúscula** (`- Add`, `- Keep`,
  `- Replace`), sem ponto final, **logo abaixo do resumo, sem linha em branco** e sem linhas em
  branco entre elas. Commits pequenos podem não ter notas (`docs: correcting documentation`).
- **Escopo** é a área afetada, no singular e em minúsculas. Vários escopos separados por vírgula
  quando o commit cruza áreas (`feat(raids,shares): ...`).
- **Sem coautor**: nada de `Co-Authored-By`, assinatura ou menção a IA. Autor único: o usuário do
  git (`Francisco-Neto13`).
- No terminal, escreva a mensagem num arquivo (`git commit -F msg.txt`) ou num único `-m` com
  quebras de linha; vários `-m` criam linhas em branco entre as notas.

### Tipos

| Tipo | Uso no histórico |
|---|---|
| `feat` | Página, seção ou comportamento novo (37 commits) |
| `fix` | Correção de layout, texto ou comportamento (17) |
| `refactor` | Reorganização sem mudar o que o usuário vê (14) |
| `docs` | README e documentação (6) |
| `perf` | Melhoria de desempenho (3) |
| `chore` | Manutenção, assets, ferramentas (2) |
| `ci`, `test`, `build` | Ainda sem uso; reservados para workflows, testes e dependências |

### Escopos já usados

`ui`, `theme`, `navbar`, `footer`, `home`, `history`/`gallery`, `leveling`, `lootrun`, `raids`,
`shares`, `dungeons`, `guides`, `content`, `responsive`, `assets`, `readme`, `project`, `admin`
(antigo). Novos: `ci`, `docs`, `repo`, `deps`.

### Exemplos reais

```text
fix(lootrun): fix inconsistent media card sizing in lootrun sections
- Enforce full-height media cards with 'h-full' for better grid alignment
- Normalize 'compact' aspect ratio on 'sm+' to prevent uneven card heights
- Keep secondary media smaller in 'Camps and Unlocks' when only one item is present
```

```text
docs(readme): update overview and guides to match current portal structure
```

### Quando separar

- Documentação, ferramentas/CI e código da aplicação em commits diferentes.
- Um commit por área ou assunto, não um por arquivo.
- Se a mensagem precisa de mais de seis notas, o commit está grande demais.

## Branches

`<tipo>/<assunto-em-kebab-case>`, com o mesmo tipo do commit: `feat/guia-montarias`,
`fix/navbar-mobile`, `chore/estrutura-base`. Fluxo em `docs/CI-CD.md`.

## Código

### Estrutura de uma área

Toda área segue `pages/` + `sections/` + `data/` (introduzido em
`refactor(content): enforce data-driven section architecture...`):

- `app/<rota>/page.tsx` só importa e renderiza `<Area>Page`;
- `<Area>Page` compõe Navbar, intro, seções e Footer, sem texto próprio;
- cada seção recebe ou importa os dados de `data/<area>-content.ts`;
- textos, rótulos, legendas, listas e caminhos de imagem ficam em `data/`, com os tipos
  exportados no mesmo arquivo.

### Nomes

| O quê | Padrão | Exemplo |
|---|---|---|
| Componente | PascalCase, prefixado pela área | `LootrunBeaconsSection.tsx` |
| Página | `<Area>Page.tsx` | `RaidsPage.tsx` |
| Dados | `<area>-content.ts` em kebab-case | `silverbull-shares-content.ts` |
| Tipos | PascalCase, prefixados pela área | `RaidGuideRoom` |
| Pastas de componentes | inglês, kebab-case | `special-modes/` |
| Rotas de guia | `/guias/<slug>` em pt-BR, declaradas no registro | `/guias/profissoes` |
| Componentes do modelo de guia | pt-BR, em `components/guias/` | `FichaGuia.tsx`, `SecaoGuia.tsx` |
| Mídia | `public/<area>/` em minúsculas | `public/lootrun/beacon_rr.webp` |
| Prints novas | kebab-case pt-BR + largura | `public/raids/prints/raid-twp-chefe-anathema-1280.avif` |

### Modelo de guia (Raids é a referência)

- Abertura: breadcrumb, H1, uma frase, `FichaGuia` (a caixa de item, **uma por página**), resumo.
- Cada seção é um `SecaoGuia` com `id` igual ao declarado em `guia.secoes` do registro.
- Fatos do jogo conferidos e datados; quando as fontes se contradizem, o texto diz isso.
- Dicas, inclusive as da experiência da guilda, em `Destaque` do tipo `dica`; nada de bloco separado de "Dica da GsW".
- Termina com `FimDoGuia` (fontes consultadas + anterior/próximo).
- Termos do jogo no texto de `data/`: `[[chave]]` ou `[[chave|texto exibido]]`, com a chave em
  `lib/glossario.ts`. Marque só a primeira aparição por bloco.

### Estilo (detalhes em `docs/DESIGN.md`)

- Só escuro. Cores por token (`text-texto`, `text-texto-2`, `text-violeta`, `bg-carvao`...),
  nunca hex solto no componente.
- Violeta da marca (`bg-gsw`) só como preenchimento de ação e estado ativo; texto violeta é
  `text-violeta`.
- Pixelify Sans só em títulos e selos com 20 px ou mais e **nunca em números** (o 5 vira S);
  números e coordenadas em `font-mono` com a classe `numeros`.
- Largura de leitura `max-w-[60ch]`.
- Nada de rótulo pequeno acima de título, cards dentro de cards, borda colorida grossa de um lado
  só, números decorativos ou emoji. Ícones do Lucide, traço 1,75.
- Estado (em construção, revisão pendente, lido) por ícone e texto, nunca só por cor.

### Boas práticas

- Server Components por padrão; `"use client"` só onde há estado, evento ou API do navegador.
- `next/image` com `sizes` explícito; `priority` só no que aparece sem rolar. Prints novas pelo
  `ImagemDoJogo`; animação pelo `AnimacaoSobDemanda` (nunca GIF pesado direto na página).
- Vídeos do YouTube pelo `LazyYouTubeEmbed`, nunca iframe direto.
- Modais com `<dialog>` nativo (`showModal`): foco preso, Esc e fundo inerte de graça.
- Texto em português do Brasil, com acentos reais. Arquivos em UTF-8 **sem BOM**. No Windows, não
  edite texto com `Get-Content`/`Set-Content` do PowerShell 5.1 (lê UTF-8 como ANSI e grava BOM);
  use as ferramentas de arquivo ou o Node.
- Acessibilidade: botões só com ícone têm `aria-label`; imagens têm `alt` (decorativas, `alt=""`);
  movimento respeita `prefers-reduced-motion`.
- Sem dependência nova para o que o Next, o React ou o Node já fazem.
