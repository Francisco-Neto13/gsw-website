# Grafo do projeto (Graphify)

O projeto tem um grafo de conhecimento gerado pelo [Graphify](https://github.com/safishamsi/graphify)
(`graphifyy` 0.9.104), usado por agentes para navegar no código antes de abrir arquivos.

## O que entra no grafo

- Código (`.ts`, `.tsx`, `.mjs`, `.css`, configs, workflows): extração estrutural (AST), sem custo.
- Documentação (`*.md` da raiz e de `docs/`): extração semântica pelo próprio agente.
- Fica de fora (`.graphifyignore`): `public/` e `image-workbench/` (cada imagem viraria uma
  extração por visão, sem ganho para o código), `node_modules/`, `.next/`, `package-lock.json`,
  `LICENSE` e o próprio `graphify-out/`.

Primeira extração (18/11/2026): 120 arquivos (112 de código, 8 documentos), 748 nós, 1.444 arestas,
28 comunidades. Uma aresta pendurada e um laço; as 43 arestas colapsadas são chaves repetidas dos
YAML (`name`, `run`), esperado.

## O que é versionado

| Arquivo | Por quê |
|---|---|
| `graphify-out/graph.json` | O grafo; base de `query`, `explain` e `path` |
| `graphify-out/GRAPH_REPORT.md` | Resumo: comunidades, nós centrais, conexões |
| `graphify-out/manifest.json` | Hashes dos arquivos, para o `--update` reextrair só o que mudou |
| `graphify-out/.graphify_labels.json` | Nomes das comunidades |
| `graphify-out/cache/semantic/` | Extração dos documentos; evita pagar de novo num clone novo |

Fora do git (`.gitignore`): `graph.html`, `cost.json`, `cache/ast/`, `cache/stat-index.json`,
`.graphify_root` e `.graphify_python` (têm caminhos da máquina).

Nada no grafo é segredo: ele é derivado dos arquivos versionados, sem `.env`. Conferido em
18/11/2026 com busca por padrões de chave/token (nenhum achado) e sem caminhos absolutos nos
arquivos versionados. O gitleaks da CI cobre o histórico em todo PR.

## Uso

```bash
graphify query "como a navbar sabe a seção ativa?"
graphify explain "LazyYouTubeEmbed"
graphify path "Navbar" "site-content.ts"
```

## Atualização

- **Código**: o hook `post-commit` do Graphify refaz a parte de código em segundo plano depois de
  cada commit (log em `~/.cache/graphify-rebuild.log`). `post-checkout`, `post-merge` e
  `post-rewrite` fazem o mesmo ao trocar de branch, mesclar e reescrever.
- **Documentação**: o hook não reextrai `.md`. Depois de mudar docs, rode `/graphify . --update`.
- O `graph.json` atualizado entra num commit próprio no fim da tarefa:
  `chore(repo): update project graph`.

## Clone novo

```bash
uv tool install graphifyy      # ou pipx install graphifyy
graphify hook install          # grava os hooks em .githooks/ (core.hooksPath) e o merge driver
graphify claude install        # hooks do Claude Code em .claude/settings.json
git checkout CLAUDE.md         # o comando acima acrescenta regras ao CLAUDE.md; elas já estão no AGENTS.md
```

Os hooks do Graphify e o `.claude/settings.json` ficam fora do git porque guardam o caminho do
Python e do executável desta máquina. O `.gitattributes` liga `graph.json` ao merge driver
`graphify` (une os dois grafos num conflito); sem o driver instalado, o git faz o merge de texto
normal.
