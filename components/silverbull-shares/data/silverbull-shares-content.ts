// Guia de Silverbull Shares. Fatos conferidos na wiki (páginas Silverbull Share, Ranks, Silverbull Subscription,
// Bombs, Loot Crates e Pets) em 18/11/2026, jogo 2.2.4, reescritos com as nossas palavras. Preço em Shares de
// assinatura e pets vem do texto antigo da guilda (a wiki não traz); ver docs/PENDENCIAS.md.
// Marcações: [[chave]] abre a caixa de item do glossário.

export type Imagem = { src: string; alt: string; legenda?: string };

export type BombCard = {
  icon: string;
  name: string;
  description: string;
  /** Ilustração da loja (wiki, public/terceiros/); sem ela, o cartão mostra o ícone. */
  imagem?: string;
};

export const sharesIntroParagraphs = [
  "Silverbull Share é a moeda premium do Wynncraft. Com ela você compra ranks permanentes, a assinatura Silverbull, crates de cosméticos, bombas, pets e tokens, tudo pela loja dentro do jogo.",
  "Não é preciso gastar dinheiro de verdade: as Shares negociáveis são vendidas no Trade Market por esmeraldas. Este guia mostra o que cada compra entrega, para você decidir onde vale investir.",
];

export const sharesResumo = [
  "Na loja do site, 1 Share vale US$ 1. No jogo, ela é comprada e vendida por esmeraldas no [[tradeMarket|Trade Market]].",
  "Shares negociáveis (Tradable) vão para o mercado; as não negociáveis (Untradable) só servem para comprar na loja.",
  "Os ranks são permanentes e cumulativos: cada um traz tudo do anterior.",
  "Tokens só podem ser comprados com Shares.",
];

// O que são
export const oQueSaoIntro =
  "Shares não existem como item no inventário. Para ver quantas você tem, abra a loja do jogo e passe o mouse sobre a sua cabeça, no canto inferior esquerdo.";

export const tiposDeShare = [
  {
    titulo: "Tradable Shares",
    texto:
      "Compradas no site ou no Trade Market. Podem ser vendidas por esmeraldas pelo botão próprio no fim do menu de venda do mercado (não dá para passar direto para outro jogador).",
  },
  {
    titulo: "Untradable Shares",
    texto:
      "Vêm da assinatura Silverbull (5 por mês) e de alguns pacotes do site. Compram itens na loja, mas não podem ser vendidas.",
  },
];

export const comoConseguir = [
  "Trade Market: o jeito mais comum, pagando em esmeraldas. O preço muda com o mercado; quando este guia foi escrito, girava em torno de 30 [[le|LE]] por Share.",
  "Loja do site: pacotes pagos com dinheiro real, na proporção de 1 Share por US$ 1.",
];

export const lojaImagens: Imagem[] = [
  { src: "/shares/silverbull.webp", alt: "Menu Silverbull no jogo, com o saldo de Shares e o botão para adicionar", legenda: "O saldo de Shares no menu Silverbull." },
  { src: "/shares/loja_ingame.webp", alt: "Tela inicial da loja do jogo com uma oferta de 20%", legenda: "A loja no jogo, com a oferta do momento." },
  { src: "/shares/loja_virtual.webp", alt: "Categorias da loja no site da Wynncraft: ranks, crates, shares, Silverbull, bombas, pets e gift cards", legenda: "As categorias da loja no site." },
];

// Ranks
export const ranksIntro =
  "Ranks são permanentes e funcionam como um VIP: cada um tem tudo do anterior e mais alguma coisa. Quem já tem um rank paga só a diferença para subir.";

export type Rank = { nome: string; shares: number; badge: string };

export const ranks: Rank[] = [
  { nome: "VIP", shares: 15, badge: "/shares/vip.webp" },
  { nome: "VIP+", shares: 28, badge: "/shares/vip+.webp" },
  { nome: "HERO", shares: 60, badge: "/shares/hero.webp" },
  { nome: "HERO+", shares: 100, badge: "/shares/hero+.webp" },
  { nome: "CHAMPION", shares: 171, badge: "/shares/champion.webp" },
];

/** Linhas da tabela de ranks (wiki, Ranks); um valor por rank, na ordem de `ranks`. */
export const ranksTabela: { rotulo: string; valores: string[] }[] = [
  { rotulo: "Slots de personagem", valores: ["7", "8", "10", "13", "15"] },
  { rotulo: "Slots no Trade Market", valores: ["5", "10", "15", "18", "21"] },
  { rotulo: "Crate diária", valores: ["—", "Tier 1", "Tier 2", "Tier 2", "Tier 2"] },
  { rotulo: "Mob Totems por dia", valores: ["2", "4", "6", "7", "8"] },
  { rotulo: "Gathering Totems por dia", valores: ["—", "—", "—", "1", "2"] },
  { rotulo: "Pets invocados juntos", valores: ["1", "2", "3", "3", "3"] },
  { rotulo: "Fila para entrar", valores: ["Normal", "Normal", "Prioridade", "Prioridade", "Super prioridade"] },
];

export const ranksDestaques = [
  { rank: "VIP+", texto: "Skins de classe, /rename e /changetag, ícones de personagem e o jukebox com a trilha do jogo." },
  { rank: "HERO", texto: "Comando /switch (troca de mundo sem passar pelo lobby), acesso ao beta das atualizações e /relore." },
  { rank: "HERO+", texto: "Apelido por personagem, warp para world events, exclusão instantânea e backup de personagem." },
  { rank: "CHAMPION", texto: "Aviso de bomba em outros mundos e uma barraca temporária que vende seus itens do Trade Market." },
];

export const dicaDeRank =
  "Para a maioria dos jogadores, o HERO (60 Shares) tem o melhor custo-benefício: fila prioritária, /switch e o beta, sem pagar o preço do CHAMPION.";

// Assinatura
export const assinaturaIntro =
  "A assinatura Silverbull é um complemento ao rank, não um rank permanente. Pela loja do jogo, custa 6 Tradable Shares a cada 14 dias; no site, US$ 11,99 por mês.";

export const assinaturaBeneficios = [
  { titulo: "Taxa menor no Trade Market", texto: "A taxa de compra e venda cai 2 pontos percentuais." },
  { titulo: "Shares de graça", texto: "5 Untradable Shares por mês, a partir do segundo mês seguido de assinatura." },
  { titulo: "Recompensas diárias em dobro", texto: "Crate diária e totems do rank dobram. Em festival, as crates das missões diárias e semanais também." },
  { titulo: "Bônus diário em dobro", texto: "O bônus diário de lootrun e de raid conta em dobro enquanto a assinatura estiver ativa." },
  { titulo: "Scrap mais barato", texto: "Bastam 3 cosméticos iguais, em vez de 5, para trocar por um de tier acima." },
  { titulo: "Visual", texto: "Esconder peças da armadura e aplicar glints em armas e armaduras (mais glints quanto mais tempo assinando)." },
  { titulo: "Guild Boost", texto: "As Shares também servem para impulsionar a sua guilda e liberar vantagens extras para ela." },
  { titulo: "Tag no chat e beta", texto: "A tag da assinatura nas mensagens e acesso ao beta das atualizações, quando houver." },
];

export const assinaturaImagem: Imagem = {
  src: "/shares/assinatura_silverbull.webp",
  alt: "Lista de benefícios da assinatura Silverbull na loja do jogo",
  legenda: "Os benefícios da assinatura na loja.",
};

// Crates
export const cratesIntro =
  "Crates dão um cosmético aleatório (exceto os exclusivos de festival e de pacotes). Quanto maior o tier da crate, maior a chance de um cosmético raro.";

export const cratesOrigem = [
  "Crate diária dos ranks: Tier 1 no VIP+, Tier 2 do HERO em diante.",
  "Uma crate grátis por mês, resgatada na loja do site.",
  "Crates temáticas das missões de festival (Heroes, Bonfire, Spirits e Blizzard).",
  "Tiers 3 e 4 só saem comprando, ou como a crate grátis do mês.",
];

/** Chance de cada raridade por tier de crate (wiki, Loot Crates). */
export const cratesChances = [
  { tier: "Tier 1", valores: ["75%", "20%", "4%", "1%", "0%"] },
  { tier: "Tier 2", valores: ["45%", "47%", "7%", "1%", "0%"] },
  { tier: "Tier 3", valores: ["0%", "50%", "25%", "24%", "1%"] },
  { tier: "Tier 4", valores: ["0%", "0%", "34%", "33%", "33%"] },
];
export const raridades = ["Common", "Rare", "Epic", "Godly", "Black Market"];

export const scrap =
  "Cosméticos repetidos não se perdem: 5 da mesma raridade (3 com a assinatura) viram 1 aleatório da raridade acima. Um Black Market pode ser desfeito em 10 Epic.";

export const dicaDeCrate =
  "Se for comprar crates, prefira um pacote maior a vários pequenos: pelo mesmo total, ele garante mais crates de tier alto.";

export const cratesImagens: Imagem[] = [
  { src: "/shares/crates.webp", alt: "Tabela de tiers e pacotes de crates na loja", legenda: "Tiers e pacotes de crates." },
  { src: "/shares/chests.webp", alt: "Aba de crates na loja do jogo", legenda: "A aba de crates na loja." },
  { src: "/shares/crates_gratuitas.webp", alt: "Crate grátis disponível na loja", legenda: "Crate grátis." },
  { src: "/shares/caixa_evento_sazonal.webp", alt: "Crate de um festival", legenda: "Crate de festival." },
];

// Bombas
export const bombasIntro =
  "Bombas dão um bônus para todo mundo que está no mesmo mundo de quem usou. Não precisa comprar para aproveitar: basta entrar num mundo com bomba ativa.";

export const bombasImagem: Imagem = { src: "/shares/bombs.webp", alt: "Aba de bombas na loja do jogo", legenda: "A aba de bombas na loja." };

export const bombCards: BombCard[] = [
  { icon: "espadas", name: "Combat XP Bomb", imagem: "/terceiros/wynncraft/bomba-combat-xp.webp", description: "XP de mobs em dobro por 20 minutos (triplo num fim de semana de XP em dobro)." },
  { icon: "picareta", name: "Profession XP Bomb", imagem: "/terceiros/wynncraft/bomba-profession-xp.webp", description: "XP de coleta e crafting em dobro por 20 minutos." },
  { icon: "velocidade", name: "Profession Speed Bomb", imagem: "/terceiros/wynncraft/bomba-profession-speed.webp", description: "Por 10 minutos, coleta e crafting duas vezes mais rápidos, recursos voltam na metade do tempo e o craft gasta metade do material." },
  { icon: "grito", name: "Shout Bomb", imagem: "/terceiros/wynncraft/bomba-shout.webp", description: "Manda uma mensagem para toda a rede da Wynncraft. Dá para cancelar se usar sem querer." },
  { icon: "gema", name: "Loot Bomb", imagem: "/terceiros/wynncraft/bomba-loot.webp", description: "Drop de mobs em dobro por 20 minutos." },
  { icon: "presente", name: "Item Bomb", imagem: "/terceiros/wynncraft/bomba-item.webp", description: "Cada jogador no mundo ganha dois itens aleatórios perto do próprio nível." },
  { icon: "chave", name: "Dungeon Bomb", imagem: "/terceiros/wynncraft/bomba-dungeon.webp", description: "Entrada grátis em qualquer dungeon por 10 minutos." },
  { icon: "bau", name: "Loot Chest Bomb", description: "Mais itens nos baús do mapa por 20 minutos." },
  { icon: "mundo", name: "World Event Bomb", description: "Faz todos os world events do mundo começarem a contagem, exceto o Annihilation." },
  { icon: "pergaminho", name: "Scroll Charge Bomb", imagem: "/terceiros/wynncraft/bomba-scroll-charge.webp", description: "Dá 2 cargas de teleport scroll a cada jogador, até o máximo de 3." },
  { icon: "ingrediente", name: "Ingredient Bomb", imagem: "/terceiros/wynncraft/bomba-ingredient.webp", description: "Cada jogador ganha 2 ingredientes e 6 materiais aleatórios, perto do próprio nível de profissão." },
  { icon: "festa", name: "Party Crackers", imagem: "/terceiros/wynncraft/bomba-party-crackers.webp", description: "Uma festa em volta de quem usou, com direito a guerra de bolas de neve." },
];

// Pets
export const petsIntro =
  "Pets acompanham você e atacam junto. A loja vende três pacotes de quatro pets cada; avulso, cada pet custa 15 Shares, e os Dragonlings, 25. O pacote completo sai por 35.";

export const petBundles = [
  { nome: "Crimson Bundle", pets: "Fiery Dragonling, Rat, Singing Tiger e The Eye", imagem: { src: "/shares/crimson_bundles.webp", alt: "Os quatro pets do Crimson Bundle" } },
  { nome: "Frostpaw Bundle", pets: "Water Dragonling, Baby Penguin, Colossal Rat e Dusk Kantyr Calf", imagem: { src: "/shares/Frostpaw_bundles.webp", alt: "Os quatro pets do Frostpaw Bundle" } },
  { nome: "Verdant Bundle", pets: "Emerald Dragonling, Playful Bear, Rolling Potato e Top Hat Alligator", imagem: { src: "/shares/Verdant_bundles.webp", alt: "Os quatro pets do Verdant Bundle" } },
];

export const petsRank =
  "Todo pet sobe até o nível 100, mas o rank limita até onde valem as vantagens dele: nível 30 sem rank ou no VIP, 40 no VIP+, 60 no HERO, 80 no HERO+ e 100 no CHAMPION.";

export const petsImagem: Imagem = { src: "/shares/bundle.webp", alt: "Vitrine de pacotes de pets na loja", legenda: "A vitrine de pacotes." };

// Tokens
export const tokensIntro = "Tokens são itens de uso único para ajustes específicos. Só podem ser comprados com Shares.";

export const tokenCards: BombCard[] = [
  { icon: "rerolar", name: "Tracker Reroll Token", description: "Sorteia um novo valor para o contador shiny de um mítico." },
  { icon: "resetar", name: "Tracker Reset Token", description: "Zera o contador shiny de um mítico." },
  { icon: "renomear", name: "Guild Rename Token", description: "Troca o nome de uma guilda." },
  { icon: "recarregar", name: "Daily Bonus Refresh", description: "Renova o bônus diário de lootrun ou de raid." },
];

export const tokensImagem: Imagem = { src: "/shares/tokens.webp", alt: "Aba de tokens na loja do jogo", legenda: "A aba de tokens na loja." };

// Dicas
export const sharesDicas = [
  "A aba de ofertas mostra promoções que mudam de tempos em tempos e são diferentes para cada jogador: ranks, bombas, tokens ou pacotes. Vale olhar antes de comprar avulso.",
  "Algumas cidades têm um ponto de acesso à loja, onde dá para abrir a loja, ver as ofertas e pegar as caixas diárias.",
];

export const dicaDaGuilda =
  "Confira a loja com frequência para pegar as melhores ofertas. Se o foco é progressão, priorize o que ajuda no dia a dia antes dos cosméticos.";

export const dicasImagens: Imagem[] = [
  { src: "/shares/ofertas.webp", alt: "Oferta aleatória na loja do jogo", legenda: "Uma oferta da semana." },
  { src: "/shares/local.webp", alt: "Ponto de acesso à loja dentro de uma cidade", legenda: "Ponto de acesso à loja numa cidade." },
];

export const sharesFontes = [
  { rotulo: "Silverbull Share, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Silverbull_Share" },
  { rotulo: "Ranks, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Ranks" },
  { rotulo: "Silverbull Subscription, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Silverbull_Subscription" },
  { rotulo: "Bombs, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Bombs" },
  { rotulo: "Loot Crates, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Loot_Crates" },
  { rotulo: "Pets, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Pets" },
  { rotulo: "Ranks na loja oficial", href: "https://wynncraft.com/store/ranks" },
];
