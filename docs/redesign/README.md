# Redesign do site da GsW: proposta (Fase 2)

Estado: **aguardando aprovação**. Nada do front foi alterado.

## Leia nesta ordem

| Arquivo | O que tem |
|---|---|
| `diagnostico.md` | Resultado do Impeccable (critique e audit) e das cinco queixas conferidas, com prioridades |
| `direcao-visual.md` | Direção proposta (Caixa de Item), paleta com contrastes, tipografia, componentes, ícones, animação, claro/escuro e as alternativas |
| `navegacao.md` | Top bar só com as áreas, sidebar dos guias, índice "Nesta página", celular, Comunidade |
| `estrutura-do-guia.md` | Mapa do guia completo, modelo de página de guia e plano de conteúdo |
| `inventario-conteudo.md` | O que existe hoje, área por área: o que está bom, desatualizado, prints a manter ou trocar |
| `fontes-e-licencas.md` | O que cada fonte permite (Mojang, Wynncraft, wiki, CDN de itens, ícones) |
| `impeccable/` | Relatórios completos das três avaliações |

O registro permanente de créditos e licenças fica em `docs/CREDITOS.md`; o produto e o público,
em `PRODUCT.md` na raiz.

## Decisões para aprovar

1. **Direção visual**: Caixa de Item (proposta), Obsidiana e Encantamento, Percurso, o padrão da
   categoria, ou outro sorteio (normal, mais seguro ou mais ousado).
2. **Modo claro**: só escuro na v1 (proposta) ou um claro refeito a partir dos mesmos tokens.
3. **Rotas**: manter as atuais ou mover os guias para `/guias/<guia>` com redirecionamento.
4. **Contato no aviso de site não oficial**: e-mail ou formulário (a Mojang não aceita só Discord).
5. **Ícones de itens da CDN da Wynncraft**: usar com crédito e moderação, ou só arte própria até a
   Wynncraft autorizar por escrito.
6. **Ordem da Fase 3**: Início + um guia modelo (proposta: **Raids**, o mais rico e o que mais sofre
   com a navegação atual), depois os outros guias e a Comunidade.

## Como foi feito

- Graphify para navegar no código; Impeccable `init` (com `PRODUCT.md`), `critique` (duas
  avaliações isoladas) e `audit`, com o site rodando em modo produção.
- Sorteio de direção do Impeccable no modo leitura (`seed:658dcb521c289a54`), com seis
  desafiantes de catálogo pesados contra a direção sorteada.
- Pesquisa de referências: chiconeto.dev, o projeto Gastos (só leitura), sites de guia e wikis de
  jogo.
- Pesquisa de conteúdo e licenças: Minecraft Usage Guidelines, termos da Wynncraft e da API,
  licença da wiki, item guide oficial.
- Sem prints nem vídeos na entrega: as capturas usadas para avaliar ficaram fora do repositório.
