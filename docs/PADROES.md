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
| Rotas | as atuais (pt e en misturados); não renomear | `/modos-especiais`, `/raids` |
| Mídia | `public/<area>/` em minúsculas, `_` como separador | `public/lootrun/beacon_rr.gif` |

### Boas práticas já usadas

- Server Components por padrão; `"use client"` só onde há estado, evento ou API do navegador
  (hoje 11 componentes).
- `next/image` com `sizes` explícito; `priority` só no que aparece sem rolar.
- GIFs com `unoptimized`; vídeos do YouTube pelo `LazyYouTubeEmbed`, nunca iframe direto.
- Imagens em `.webp`, geradas pelo `npm run convert:webp`.
- Texto da interface em português do Brasil, com acentos reais (arquivos em UTF-8).
- Tema: toda cor nova precisa funcionar nos dois temas; os ajustes do claro ficam em
  `app/styles/theme-remaps.css` e `hero-light.css`.
- Acessibilidade: botões só com ícone têm `aria-label`; imagens têm `alt`.
- Sem dependência nova para o que o Next, o React ou o Node já fazem.
