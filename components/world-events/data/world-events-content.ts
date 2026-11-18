// Guia de World Events. Fatos conferidos na wiki (páginas World Events, Annihilation, Prelude to Annihilation e
// Corrupted Cache) em 18/11/2026, jogo 2.2.4, reescritos com as nossas palavras.
// Marcações: [[chave]] abre a caixa de item do glossário.

export type Imagem = { src: string; alt: string; legenda?: string };
export type Destaque = { tipo: "info" | "aviso" | "dica"; titulo: string; texto: string };

export const worldEventsIntroParagraphs = [
  "World Events são eventos que começam sozinhos em pontos do mapa: algumas ondas de inimigos e, no fim, um chefe. Quem vence ganha XP, esmeraldas e itens, alguns exclusivos do evento.",
  "Participar é bem mais simples que uma raid ou um lootrun: basta ir ao local enquanto o evento está ativo. O maior deles, o Annihilation, é um chefe de nível 250 que aparece a cada 3 dias e pede uma party bem montada.",
];

export const worldEventsResumo = [
  "Cerca de 70 eventos, do nível 3 ao 120, espalhados por 20 regiões do mapa.",
  "Sua party luta numa instância só dela, com os inimigos ajustados ao jogador de nível mais alto.",
  "Basta um jogador sobreviver para a party inteira vencer.",
  "O Annihilation é o único que pode dar a Corrupted Cache, com um de cinco míticos exclusivos.",
];

// Como participar
export const participacaoIntro =
  "Quando um evento começa, o chat avisa o nome, o tempo que falta e onde ele acontece. É só chegar ao local antes de acabar o tempo.";

export const participacaoRegras = [
  "Cada região do mapa tem no máximo um evento ativo por vez. Sem evento na região, o jogo tenta abrir um novo a cada minuto.",
  "O intervalo entre um evento e o próximo muda por região: de 1 a 6 minutos nas regiões de Wynn, chegando a 17 minutos nas de nível alto.",
  "Os eventos do começo do jogo não pedem nada. Os da Silent Expanse e de Fruma pedem a quest da linha principal daquela região, e o aviso no chat diz qual é.",
  "Uma World Event Bomb (da loja) faz todos os eventos do servidor começarem a contagem, exceto o Annihilation.",
];

export const participacaoImagens: Imagem[] = [
  { src: "/worldevents/we.webp", alt: "Jogadores enfrentando as ondas de um world event", legenda: "Um world event em andamento." },
  { src: "/worldevents/we_2.webp", alt: "Outro world event em andamento, com a barra do evento no topo da tela", legenda: "A barra do evento mostra as ondas e o tempo." },
];

// Como funciona
export const mecanicasIntro = "Todo world event segue o mesmo roteiro:";

export const mecanicas = [
  { titulo: "Ondas", texto: "Cada evento tem um número fixo de ondas, de 1 a 9. A próxima só vem quando a anterior acaba." },
  {
    titulo: "Party",
    texto:
      "Dá para ir sozinho ou em party. Vida e dano dos inimigos sobem com o tamanho da party e com o nível de quem está nela.",
  },
  { titulo: "Chefe final", texto: "Depois da última onda aparece o chefe (às vezes mais de um). Vencê-lo encerra o evento." },
  { titulo: "Baú de recompensa", texto: "Vencer o chefe libera o baú de recompensa para quem participou. Evento de nível mais alto dá recompensa melhor." },
];

// Annihilation
export const annihilationIntro =
  "O Annihilation é o chefe do Prelude to Annihilation, o único Major World Event do jogo. Ele aparece no Corruption Portal, nas Roots of Corruption, a cada 3 dias, e o chat avisa com antecedência.";

export const annihilationFicha = [
  { rotulo: "Quando", valor: "A cada 3 dias" },
  { rotulo: "Onde", valor: "Corruption Portal, Roots of Corruption" },
  { rotulo: "Quem pode", valor: "Nível de combate 30 ou mais" },
  { rotulo: "Party", valor: "Até 10 jogadores" },
  { rotulo: "Tempo", valor: "30 minutos para vencer" },
];

export const annihilationVideo = {
  videoId: "NEvfcrQujDI",
  title: "Speedrun do Annihilation",
  caption: "Speedrun do Annihilation.",
};

export const annihilationParty = [
  "Dano constante: a vida do chefe sobe muito com o tamanho da party, então todo mundo precisa estar batendo.",
  "Cura: um ou dois healers (Shaman ou Mage) seguram a party, porque a maioria dos ataques dá para aguentar com cura constante.",
  "Use os scrolls de dano, vida, defesa e mana uns 20 a 30 segundos antes da luta, junto com os outros consumíveis.",
  "Fiquem juntos para receber os efeitos de suporte uns dos outros.",
];

export const annihilationSol = [
  "Com 50% e de novo com 20% de vida, o chefe invoca o New Sun: uma bola de luz que desce a ponte e cresce aos poucos.",
  "Se o New Sun chegar ao tamanho máximo, todos na luta morrem na hora. Ele é a prioridade número um.",
  "Mire no centro: a área de acerto do New Sun é pequena, mesmo quando ele parece grande.",
  "Junto com o sol, surgem dois Infernal Subjugates, um em cada lado da arena. Eles curam o chefe rápido, então saem logo depois do sol.",
  "Abaixo de 70% de vida, o chefe também invoca outro Subjugate na ponta da ponte oposta a ele. Mesma regra: derrube rápido.",
];

export const annihilationOutros = [
  "Apocalyptic Sigil: um círculo vermelho segue você e depois vira um raio. Ande em círculo para sair dele.",
  "Cauterize Them All: afaste-se do chefe para escapar da primeira chuva de meteoros e chegue perto para as duas seguintes.",
  "Caustic Phlegm: pequenos inimigos que reduzem a cura que você recebe em 25%.",
];

export const annihilationImagens: Imagem[] = [
  { src: "/worldevents/Annihilation.webp", alt: "O Annihilation na arena, de frente para a ponte", legenda: "O Annihilation." },
  { src: "/worldevents/annihilation_portal.webp", alt: "O Corruption Portal, onde o Annihilation aparece", legenda: "O Corruption Portal, nas Roots of Corruption." },
];

export const corruptedCache: Destaque = {
  tipo: "info",
  titulo: "Corrupted Cache",
  texto:
    "Vencer o Annihilation pode dar uma Corrupted Cache, que sempre contém um de cinco míticos exclusivos: Bloodbath, Trance, Labyrinth, Hanafubuki ou Resonance (chance igual para cada, não importa a classe).",
};

// Recompensas
export const recompensasIntro = "O baú de cada evento muda com a região e o nível. Em geral, ele traz:";

export const recompensas = [
  { titulo: "XP e esmeraldas", texto: "Sobem com o nível do evento. Pela experiência da guilda, os mais altos chegam a cerca de 4 LE." },
  { titulo: "Ingredientes", texto: "Comuns da região e alguns que só existem naquele evento." },
  { titulo: "Equipamentos", texto: "Itens comuns e exclusivos. Pela experiência da guilda, eventos de nível 90+ têm uma chance pequena de mítico." },
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
  "Ao entrar no evento com uma party, os inimigos se ajustam ao jogador de nível mais alto. Levar alguém de nível muito acima deixa o evento mais difícil para os outros.",
  "O aviso do Annihilation chega com horas de antecedência e mostra quanto falta. Dá tempo de montar a party de 10 e preparar scrolls e consumíveis.",
];

export const dicaDaGuilda =
  "Alguns ingredientes importantes só caem em eventos específicos. Se precisar de um, pergunte no chat da guilda: sempre tem alguém que sabe onde farmar.";

export const worldEventsFontes = [
  { rotulo: "World Events, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/World_Events" },
  { rotulo: "Annihilation, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Annihilation" },
  { rotulo: "Prelude to Annihilation, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Prelude_to_Annihilation" },
  { rotulo: "Corrupted Cache, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Corrupted_Cache" },
];
