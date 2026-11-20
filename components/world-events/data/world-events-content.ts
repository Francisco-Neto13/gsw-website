// Guia de World Events. Fatos conferidos na wiki (páginas World Events, Annihilation, Prelude to Annihilation e
// Corrupted Cache) em 18/11/2026, jogo 2.2.4, reescritos com as nossas palavras.
// Marcações: [[chave]] abre a caixa de item do glossário.

export type Imagem = { src: string; alt: string; legenda?: string };
export type Destaque = { tipo: "info" | "aviso" | "dica"; titulo: string; texto: string };

export const worldEventsIntroParagraphs = [
  "World Events são eventos que começam sozinhos em vários pontos do mapa: algumas ondas de mobs e, no fim, um boss. Quem completa ganha XP, esmeraldas e itens, alguns que só saem daquele evento.",
  "É bem mais simples que uma raid ou um lootrun: é só ir até o local enquanto o evento está rolando. O maior deles, o Annihilation, é um boss de nível 250 que aparece a cada 3 dias e pede uma party bem montada.",
];

export const worldEventsResumo = [
  "Cerca de 70 eventos, do nível 3 ao 120, espalhados por 20 regiões do mapa.",
  "Sua party luta numa instância só dela, com os mobs ajustados ao jogador de nível mais alto.",
  "Basta um jogador sobreviver para a party inteira completar.",
  "O Annihilation é o único que pode dar a Corrupted Cache, com um de cinco míticos exclusivos.",
];

// Como participar
export const participacaoIntro =
  "Quando um evento começa, o chat avisa o nome, onde ele é e quanto tempo falta. É só chegar lá antes do tempo acabar.";

export const participacaoRegras = [
  "Cada região do mapa tem no máximo um evento ativo ao mesmo tempo. Se a região está sem evento, o jogo tenta começar um novo a cada minuto.",
  "O tempo entre um evento e o próximo muda de região para região: de 1 a 6 minutos nas regiões de Wynn e até 17 minutos nas de nível alto.",
  "Os eventos do começo do jogo não pedem nada. Os da Silent Expanse e de Fruma pedem a quest da história principal daquela região, e o aviso no chat diz qual é.",
  "Uma World Event Bomb (da loja) faz todos os eventos do servidor começarem a contagem, menos o Annihilation.",
];

export const participacaoImagens: Imagem[] = [
  { src: "/worldevents/we.webp", alt: "Jogadores enfrentando as ondas de um world event", legenda: "Um world event em andamento." },
  { src: "/worldevents/we_2.webp", alt: "Outro world event em andamento, com a barra do evento no topo da tela", legenda: "A barra do evento mostra as ondas e o tempo." },
];

// Como funciona
export const mecanicasIntro = "Todo world event funciona do mesmo jeito:";

export const mecanicas = [
  { titulo: "Ondas", texto: "Cada evento tem um número fixo de ondas, de 1 a 9. A próxima só começa quando a anterior acaba." },
  {
    titulo: "Party",
    texto:
      "Dá para ir sozinho ou de party. A vida e o dano dos mobs sobem com o tamanho da party e com o nível de quem está nela.",
  },
  { titulo: "Boss final", texto: "Depois da última onda aparece o boss (às vezes mais de um). Matou, o evento acaba." },
  { titulo: "Baú de recompensa", texto: "Matar o boss libera o baú de recompensa para quem participou. Quanto mais alto o nível do evento, melhor a recompensa." },
];

// Annihilation
export const annihilationIntro =
  "O Annihilation é o boss do Prelude to Annihilation, o único Major World Event do jogo. Ele aparece a cada 3 dias no Corruption Portal, nas Roots of Corruption, e o chat avisa com antecedência.";

export const annihilationFicha = [
  { rotulo: "Quando", valor: "A cada 3 dias" },
  { rotulo: "Onde", valor: "Corruption Portal, Roots of Corruption" },
  { rotulo: "Quem pode", valor: "Nível de combate 30 ou mais" },
  { rotulo: "Party", valor: "Até 10 jogadores" },
  { rotulo: "Tempo", valor: "30 minutos para matar" },
];

export const annihilationVideo = {
  videoId: "NEvfcrQujDI",
  title: "Speedrun do Annihilation",
  caption: "Speedrun do Annihilation.",
};

export const annihilationParty = [
  "Dano o tempo todo: a vida do boss sobe muito com o tamanho da party, então todo mundo precisa estar batendo.",
  "Cura: um ou dois healers (Shaman ou Mage) seguram a party, porque dá para tankar a maioria dos ataques com cura constante.",
  "Use os scrolls de dano, vida, defesa e mana uns 20 a 30 segundos antes da luta, junto com o resto dos consumíveis.",
  "Fiquem juntos para pegar os buffs uns dos outros.",
];

export const annihilationSol = [
  "Com 50% e de novo com 20% de vida, o boss invoca o New Sun: uma bola de luz que desce a ponte e vai crescendo.",
  "Se o New Sun chegar ao tamanho máximo, todo mundo na luta morre na hora. Ele é a prioridade número um.",
  "Mire no centro: a área de acerto do New Sun é pequena, mesmo quando ele parece grande.",
  "Junto com o sol aparecem dois Infernal Subjugates, um de cada lado da arena. Eles curam o boss rápido, então são os próximos a morrer depois do sol.",
  "Abaixo de 70% de vida, o boss também invoca outro Subjugate na ponta da ponte do lado oposto. Mesma regra: mate rápido.",
];

export const annihilationOutros = [
  "Apocalyptic Sigil: um círculo vermelho segue você e depois vira um raio. Ande em círculos para escapar dele.",
  "Cauterize Them All: na primeira chuva de meteoros, fique longe do boss; nas duas seguintes, fique perto.",
  "Caustic Phlegm: mobs pequenos que cortam em 25% a cura que você recebe.",
];

export const annihilationImagens: Imagem[] = [
  { src: "/worldevents/Annihilation.webp", alt: "O Annihilation na arena, de frente para a ponte", legenda: "O Annihilation." },
  { src: "/worldevents/annihilation_portal.webp", alt: "O Corruption Portal, onde o Annihilation aparece", legenda: "O Corruption Portal, nas Roots of Corruption." },
];

export const corruptedCache: Destaque = {
  tipo: "info",
  titulo: "Corrupted Cache",
  texto:
    "Matar o Annihilation pode dar uma Corrupted Cache, que sempre vem com um de cinco míticos exclusivos: Bloodbath, Trance, Labyrinth, Hanafubuki ou Resonance (todos com a mesma chance, seja qual for a sua classe).",
};

// Recompensas
export const recompensasIntro = "O baú de cada evento muda com a região e o nível. No geral, ele dá:";

export const recompensas = [
  { titulo: "XP e esmeraldas", texto: "Sobem com o nível do evento. Pela experiência da guilda, os mais altos chegam a cerca de 4 LE." },
  { titulo: "Ingredientes", texto: "Os comuns da região e alguns que só dropam naquele evento." },
  { titulo: "Equipamentos", texto: "Itens comuns e exclusivos. Pela experiência da guilda, eventos de nível 90+ têm uma chance pequena de dropar mítico." },
  { titulo: "Chaves e runas", texto: "Chaves de dungeon (inclusive as corrompidas, que vêm quebradas) e runas." },
];

export const recompensasAnnihilation =
  "O Annihilation dá 15.000 de XP, de 15 a 50 [[le|LE]] e pode dar runas (Az, Nii, Uth, Tol), [[abilityShards|Ability Shards]], powders de tier VI e chaves corrompidas, além de equipamentos e ingredientes que só saem dele.";

export const recompensasImagem: Imagem = {
  src: "/worldevents/bau_final_we.webp",
  alt: "Baú de recompensa aberto no fim de um world event",
  legenda: "O baú de recompensa no fim do evento.",
};

// Dicas
export const worldEventsDicas = [
  "Em party, os mobs se ajustam ao jogador de nível mais alto. Levar alguém de nível muito acima deixa o evento mais difícil para o resto.",
  "O aviso do Annihilation sai com horas de antecedência e mostra quanto falta. Dá tempo de montar a party de 10 e separar scrolls e consumíveis.",
  "Alguns ingredientes importantes só dropam em eventos específicos. Se precisar de um, pergunte no chat da guilda: sempre tem alguém que sabe onde farmar.",
];

export const worldEventsFontes = [
  { rotulo: "World Events, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/World_Events" },
  { rotulo: "Annihilation, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Annihilation" },
  { rotulo: "Prelude to Annihilation, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Prelude_to_Annihilation" },
  { rotulo: "Corrupted Cache, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Corrupted_Cache" },
];
