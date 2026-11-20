export const homeHero = {
  titulo: "O guia de Wynncraft em português",
  texto:
    "Feito por jogadores da GsW: raids sala a sala, lootrun, dungeons, profissões e o resto do jogo, com prints e vídeos gravados pela guilda.",
  imagem: {
    base: "/inicio/inicio-hero-ilha-cerejeiras",
    alt: "Ilha flutuante com cerejeiras rosadas e uma torre de pedra sob um céu escuro, no Wynncraft",
  },
};

export const homeComeco = {
  titulo: "Por onde começar",
  texto: "Os guias seguem a ordem do jogo. Escolha a etapa em que você está.",
};

/** Faixas compactas na Início para os grupos sem arte de categoria (hoje, Ferramentas). */
export const homeFaixas: Record<string, { texto: string; imagem: { src: string; alt: string } }> = {
  ferramentas: {
    texto: "Os sites que a comunidade usa para montar builds, acompanhar o mercado e consultar dados.",
    imagem: { src: "/terceiros/sites/wynnbuilder.webp", alt: "Prévia do WynnBuilder, o simulador de builds" },
  },
};

/** Prévia de cada grupo de guias na Início: o que a pessoa aprende e uma print do jogo (docs/CREDITOS.md). */
export const homeCategorias: Record<string, { resumo: string; imagem: { base: string; alt: string } }> = {
  progressao: {
    resumo: "Do nível 1 ao 121: onde upar, como montar a party, as profissões que sustentam o resto do jogo e as montarias.",
    imagem: {
      base: "/inicio/categorias/categoria-progressao-trono",
      alt: "Uma rainha coroada no trono de um palácio vermelho e verde-água, com dois acompanhantes ao lado",
    },
  },
  endgame: {
    resumo: "O conteúdo de nível máximo: lootruns, as cinco raids sala a sala, dungeons corrompidas e eventos no mapa.",
    imagem: {
      base: "/inicio/categorias/categoria-endgame-silhueta",
      alt: "Silhuetas escuras de garras gigantes contra o céu vermelho da raid The Wartorn Palace",
    },
  },
  economia: {
    resumo: "Shares, ranks e a loja do Silverbull: o que cada compra libera e quando vale a pena.",
    imagem: {
      base: "/inicio/categorias/categoria-economia-token",
      alt: "Banca de Token Offer com estandartes coloridos e um NPC ao lado, numa cidade",
    },
  },
  especiais: {
    resumo: "Hardcore, Ironman, Craftsman e outros modos com regras próprias, além dos festivais de cada temporada.",
    imagem: {
      base: "/inicio/categorias/categoria-especiais-traje",
      alt: "Personagem com traje cerimonial de cocar de penas e capa colorida num jardim de colunas brancas",
    },
  },
};

export const homeDestaque = {
  titulo: "Raids, sala a sala",
  texto:
    "O primeiro guia no formato novo: as cinco raids com cada variação de sala explicada, requisitos conferidos para a versão atual e POVs gravados pela guilda.",
  acao: "Abrir o guia de Raids",
  imagem: {
    base: "/raids/prints/raid-twp-chefe-anathema",
    alt: "Anathema, boss da The Wartorn Palace: criatura alada vermelha e preta",
  },
};

export const homeComunidade = {
  titulo: "Feito pela GsW",
  texto:
    "A Guardians of Wynn é uma guilda brasileira de Wynncraft. Este guia nasceu do que a guilda aprendeu jogando junta, e continua sendo escrito por ela.",
  acaoHistoria: "Conhecer a história da guilda",
  acaoDiscord: "Entrar no Discord",
};
