# Pendências

Coisas notadas na etapa 1 (estrutura) e deixadas para as próximas etapas. Ao resolver um item,
apague-o daqui no mesmo PR.

## Front (reestruturação)

| Prioridade | Item | Detalhe |
|---|---|---|
| Alta | GIFs pesados no Lootrun | 16 GIFs somam 91 MB (até 10 MB cada) e vão sem otimização. Trocar por `<video autoplay muted loop playsinline>` em mp4/webm reduz em torno de 90% |
| Alta | SEO por página | Só o `layout` tem `metadata`: todas as páginas saem com o mesmo título. Faltam `metadata` por rota, `sitemap`, `robots`, imagem Open Graph e `not-found` próprio |
| Média | `AnimationInitializer` caro | A cada rolagem refaz um `querySelectorAll` de 12 seletores na página inteira, além do `IntersectionObserver` e de um `MutationObserver` no `body`. Provável travada em celular nas páginas longas |
| Média | `Navbar.tsx` com 455 linhas | Separar desktop e mobile |
| Baixa | Codificação mista | Alguns `.ts` têm BOM (`raids-content.ts`) e o histórico já teve texto corrompido (`fix(raids)... broken accented text`). Padronizar UTF-8 sem BOM e adicionar no `.gitattributes` |
| Baixa | Sem CSP | `next.config.ts` tem os outros cabeçalhos de segurança, mas não `Content-Security-Policy` (precisa liberar YouTube e `i.ytimg.com`) |
| Baixa | Rotas em dois idiomas | `/historia` e `/professions` convivem. Se renomear, criar `redirects` no `next.config.ts` |
| Baixa | Páginas vazias | `/montarias` e `/festivais` ainda estão "Em desenvolvimento" |

## CI/CD e repositório

| Item | Detalhe |
|---|---|
| Ativar o deploy | Seguir `docs/CI-CD.md`, "Ativar o deploy". Até lá a produção fica no commit `f8063b4` |
| Criar a `develop` no GitHub | `docs/CI-CD.md`, "Primeira vez no GitHub" |
| Dependabot | Não adicionado. Se entrar: uma PR agrupada por mês, `target-branch: develop`, como no Guardian-Of-Wynn |
| `npm audit` na CI | Não adicionado: o único pacote de runtime fora do Next/React é o `sharp`, usado só no script local |
| Rulesets do GitHub | Opcionais (repositório público). Ver `docs/CI-CD.md` |
| README | Não cita `docs/`, os comandos novos nem o fluxo de PR. Atualizar junto com a reestruturação |
| Testes de interface | Só existe o teste de rotas. Na reestruturação, avaliar Playwright para navegação e tema |
