# GsW Website — regras para agentes

Vale para qualquer agente (Claude Code, Codex e outros) que trabalhe neste repositório.
Detalhes ficam em `docs/`; este arquivo traz só o que vale em toda tarefa.

## O projeto

Portal da guilda GsW (Guardians of Wynn), do servidor de Minecraft Wynncraft: home, história da
guilda e guias do jogo (Lootrun, Raids, Dungeons, World Events, Profissões, Leveling, Modos
Especiais, Silverbull Shares, Montarias e Festivais). **Só front**: sem back-end, banco, API
própria ou variáveis de ambiente. Todo o conteúdo é estático, versionado no repositório.
Produto e público: `PRODUCT.md`.

## Grafo do projeto (Graphify)

O grafo de conhecimento fica em `graphify-out/` (`graph.json`, `GRAPH_REPORT.md`). Detalhes,
instalação num clone novo e o que é versionado: `docs/GRAFO.md`.

- **Consulte o grafo antes de explorar arquivos.** Para qualquer pergunta sobre o código, rode
  `graphify query "<pergunta>"` (ou `graphify explain "X"` / `graphify path "A" "B"`) antes do
  primeiro `grep`, busca ou leitura; abra só os trechos que o grafo apontou. Passe esta regra para
  todo subagente que for explorar o código.
- `GRAPH_REPORT.md` só para visão geral da arquitetura, quando query/explain/path não bastarem.
- O hook `post-commit` refaz a parte de código do grafo sozinho. Mudou documentação, rode
  `/graphify . --update`. O `graph.json` atualizado entra num commit próprio no fim da tarefa
  (`chore(repo): update project graph`); diff grande nele é esperado.

## Stack

| Item | Versão |
|---|---|
| Node | 24 (CI e deploy) |
| Next.js (App Router, todas as rotas estáticas) | 16.1.6 |
| React / React DOM | 19.2.3 |
| TypeScript (`strict`) | 5 |
| Tailwind CSS (via `@tailwindcss/postcss`) | 4 |
| ESLint (`eslint-config-next` core-web-vitals + typescript) | 9 |
| sharp (só no script de conversão de imagens) | 0.34 |
| Lenis (rolagem suave, carregada sob demanda) | 1.3.27 |

Hospedagem: a definir (a Vercel não será mais usada; o `deploy.yml` está desligado e precisa ser
reescrito). Ver `docs/INFRAESTRUTURA.md`. Sistema visual: `DESIGN.md`.

## Comandos

```bash
npm install          # instala e liga o hook de pre-push (script prepare)
npm run dev          # servidor local em http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm test             # node --test em tests/ (executor nativo do Node, sem dependência)
npm run build        # next build
npm run check        # typecheck + lint + test + build, a mesma sequência da CI
npm run convert:webp # converte imagens de image-workbench/input/ para webp em output/
```

## Mapa das pastas

| Pasta | Conteúdo |
|---|---|
| `app/` | Rotas do App Router: cada `app/<rota>/page.tsx` só renderiza o componente da página |
| `app/styles/` | CSS global dividido por assunto, importado por `app/globals.css` |
| `components/<area>/pages/` | Componente de página de cada área (compõe as seções) |
| `components/<area>/sections/` | Blocos visuais da página |
| `components/<area>/data/` | Textos, listas e caminhos de mídia da área (`*-content.ts`) |
| `components/shared/` | Top bar, busca, rodapé, imagens do jogo, animação sob demanda, vídeo, zoom |
| `components/guias/` | Peças do modelo de guia (layout com sidebar e índice, ficha, termo, seção) |
| `lib/site-content.ts` | Registro de guias e áreas: navegação, busca, redirects; toda rota nova entra aqui |
| `lib/glossario.ts` | Termos do jogo usados pelo `<Termo>` (`[[chave]]` nos textos) |
| `public/<area>/` | Imagens e vídeos de cada área; prints novas em AVIF + WebP |
| `scripts/` | `convert-to-webp.mjs` (pipeline de imagens) |
| `image-workbench/` | Entrada e saída locais do conversor (conteúdo fora do git) |
| `tests/` | Testes `*.test.mjs` do `node --test` |
| `.githooks/` | `pre-push` (versionado) e hooks do Graphify (locais, fora do git) |
| `graphify-out/` | Grafo do Graphify (`docs/GRAFO.md`) |
| `docs/redesign/` | Diagnóstico e proposta do redesign |
| `.github/workflows/` | `ci.yml` e `deploy.yml` |
| `docs/` | Documentação do projeto |

Arquitetura completa: `docs/ARQUITETURA.md`.

## Commits

Formato do histórico (detalhes e exemplos em `docs/PADROES.md`):

```text
type(scope): imperative lowercase summary in english
- Capitalized imperative note about what changed
- Another note, no trailing period
```

- Tipos usados: `feat`, `fix`, `refactor`, `perf`, `docs`, `chore` (mais `ci`, `test`, `build`).
- Escopo é a área: `raids`, `lootrun`, `navbar`, `ui`, `theme`, `home`, `assets`, `ci`, `docs`...
- Resumo e notas **em inglês**; as notas vêm logo abaixo do resumo, sem linha em branco.
- Use um arquivo de mensagem ou um único bloco `-m`; vários `-m` separam as notas em parágrafos.
- **Sem coautor**: nenhuma linha `Co-Authored-By`, nenhuma menção a IA, agente ou ferramenta. O
  único autor é o usuário do git configurado na máquina.
- Um commit por assunto; não misture documentação, ferramentas e código da aplicação.

## Branches e PR

```text
<tipo>/<assunto>  --PR + CI verde-->  develop  --CI verde-->  main  -->  deploy (desligado)
```

- Branch nova sempre a partir da `develop`: `git switch -c feat/assunto origin/develop`.
  O prefixo é o tipo do commit (`feat/`, `fix/`, `docs/`, `chore/`, `refactor/`, `ci/`).
- PR para a `develop`. Com a CI verde, o próprio workflow mescla (merge commit) e apaga a branch.
  PR em rascunho roda a CI sem mesclar.
- A `main` só recebe a `develop`, por fast-forward feito pela CI. PR para a `main` só da `develop`.
- Fluxo completo, secrets e como ativar o deploy: `docs/CI-CD.md`.

## CI/CD

- `ci.yml`, em todo PR para `develop`/`main` e push nelas: branch de origem, tipos, lint, testes,
  build e gitleaks no histórico; depois mescla na `develop` e promove a `main`.
- `deploy.yml`: **obsoleto** (escrito para a Vercel, que não será mais usada), desligado por
  `DEPLOY_HABILITADO`; reescrever para a hospedagem nova antes de ligar. Nada vai para a produção
  por outro caminho.
- `.githooks/pre-push`: recusa push em `main`/`develop` e roda tipos, lint e testes.

## Regras de trabalho

1. **Leia antes de mudar**: o componente, o `*-content.ts` da área e os usos em `lib/site-content.ts`.
2. **Texto de guia mora em `data/`**, nunca escrito direto na seção (`docs/PADROES.md`).
3. **Guia novo** = `app/guias/<slug>/page.tsx` (com `metadataDoGuia`) + `components/<area>/` +
   entrada em `guias` de `lib/site-content.ts`, no modelo de Raids. O `npm test` falha se faltar algo.
4. **Imagem nova**: passe por `npm run convert:webp` e salve em `public/<area>/` como `.webp`.
   Fonte, imagem, ícone ou fonte tipográfica de terceiro entra em `docs/CREDITOS.md` no mesmo PR.
5. **Documentação na mesma tarefa**: mudou estrutura, comando, rota, fluxo ou infraestrutura,
   atualize o arquivo de `docs/` correspondente (e este, se a regra for geral) no mesmo PR.
   Pendência encontrada e não resolvida vai para `docs/PENDENCIAS.md`.
6. **Valide antes de concluir**: `npm run check` verde. Mudança visual: confira no `npm run dev`
   as páginas afetadas nos temas claro e escuro, em 1440 px e 390 px.
7. **Commit só com a tarefa validada**; push só quando o usuário pedir.
8. Este arquivo tem limite de 200 linhas: detalhe novo vai para `docs/`.

## Nunca

- Nunca dar push, commitar direto ou abrir PR para `main` ou `develop` sem passar pelo fluxo acima.
- Nunca usar `git push --no-verify` nem `--force` em `main`/`develop`; se o hook atrapalhar um caso
  legítimo, ajuste `.githooks/pre-push` num PR.
- Nunca adicionar `Co-Authored-By` ou assinatura de IA em commit ou PR.
- Nunca publicar Artifacts (claude.ai) neste projeto: entregue tudo no chat ou em arquivos de `docs/`.
- Nunca escrever valor de secret, token ou ID da Vercel no repositório, nem em `docs/`; só os nomes.
- Nunca commitar `.env*`, `.vercel/`, `node_modules/`, `.next/` nem o conteúdo de `image-workbench/`.
- Nunca ligar a integração Git da Vercel de novo nem criar `DEPLOY_HABILITADO` sem pedido explícito.
- Nunca usar ícones ou imagens da CDN oficial da Wynncraft sem autorização escrita dela; nunca usar
  emoji como ícone; nunca reintroduzir tema claro sem pedido explícito.
- Nunca adicionar back-end, banco, painel administrativo ou dependência de runtime sem pedido
  explícito: o projeto é só front de propósito (o Supabase e o painel foram removidos).
- Nunca adicionar dependência para o que o Next, o React ou o Node já fazem.
- Nunca subir imagem `.png`/`.jpg` em `public/` (use `.webp`) nem GIF novo acima de 2 MB.
- Nunca colocar texto de guia direto nos componentes de `sections/`.
- Nunca copiar ou adaptar texto da wiki ou do site oficial (a wiki é CC BY-NC-SA): reescreva e
  linke a fonte. Nunca usar imagens da wiki, logos ou arte oficial do Minecraft e da Wynncraft, nem
  chamar o site de "oficial" (`docs/CREDITOS.md`).
- Nunca alterar `LICENSE` nem trechos de direitos autorais.
