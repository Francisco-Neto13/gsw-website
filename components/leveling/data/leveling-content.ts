export type LevelingSpot = {
  name: string;
  range: string;
  coords: string;
  image: string;
  notes: string[];
};

export const levelingIntroParagraphs = [
  "O leveling no Wynncraft pode parecer simples à primeira vista, mas existe uma diferença enorme entre upar de forma aleatória e upar de forma eficiente e organizada. Escolher o spot errado para o seu nível, ignorar a importância de uma party ou não saber usar totens pode fazer com que você leve o dobro do tempo para chegar ao endgame.",
  "As recomendações a seguir são baseadas em matar mobs e bônus de XP. Se for sua primeira classe, é fortemente recomendado que você faça quests, caves e descobertas antes de focar em grinding, porque o XP das quests ainda pesa bastante nos levels iniciais.",
];

export const levelingSpots: LevelingSpot[] = [
  {
    name: "Emerald Trail",
    range: "Lvl 1 - 10",
    coords: "-753, -1574",
    image: "/leveling/emerald_trail.webp",
    notes: [
      "Está logo após os portões de Ragni e funciona como a área de início do leveling.",
      "Nos primeiros levels o XP vem rápido, então totens ainda não são necessários.",
      "Apenas encontre mobs próximos e siga em frente.",
    ],
  },
  {
    name: "Pigman Ravines",
    range: "Lvl 5 - 25",
    coords: "-818, -1260",
    image: "/leveling/pigman_ravines.webp",
    notes: [
      "Esteja bem equipado, porque os mobs conseguem te matar com facilidade.",
      "Primeiro spot onde totens passam a fazer bastante diferença.",
      "Healer e party ainda não são obrigatórios aqui.",
      "Tome cuidado com o Pigman Overlord, que tem mais vida e dano do que os mobs normais.",
    ],
  },
  {
    name: "Mt. Wynn Spiders",
    range: "Lvl 20 - 35",
    coords: "-30, -1960",
    image: "/leveling/mt_wynn_spiders.webp",
    notes: [
      "Spot mais seguro do que o Saint's Row, mas com ganho de XP menor.",
      "Tome cuidado com a Spider Tamer e com as teias das aranhas.",
      "A partir daqui, um healer se torna essencial.",
    ],
  },
  {
    name: "Saint's Row",
    range: "Lvl 20 - 40",
    coords: "320, -2048",
    image: "/leveling/saints_row.webp",
    notes: [
      "O ganho de XP é enorme, mas os mobs podem te matar muito rápido.",
      "É necessário completar a quest Grave Digger para entrar no spot.",
      "Healer é indispensável aqui.",
      "Se sua classe tiver bom alcance, é possível matar mobs de fora do cemitério.",
    ],
  },
  {
    name: "Llevigar Spiders",
    range: "Lvl 35 - 50",
    coords: "-2151, -4717",
    image: "/leveling/llevigar_spiders.webp",
    notes: [
      "Vale iniciar no level 35 para poder descobrir Llevigar e respawnar lá se morrer.",
      "Fique atento ao Holehold Orc Marathon, que pode aparecer após um totem ser usado.",
    ],
  },
  {
    name: "Herb Cave",
    range: "Lvl 40 - 70",
    coords: "-499, -810",
    image: "/leveling/herb_cave.webp",
    notes: [
      "Spot muito bom que pode ser usado por bastante tempo.",
      "A parte de baixo costuma render mais XP.",
      "Se a party estiver com dificuldade, a parte de cima ainda é uma boa alternativa.",
    ],
  },
  {
    name: "Flesh Cave",
    range: "Lvl 55 - 75",
    coords: "-996, -5558",
    image: "/leveling/flesh_cave.webp",
    notes: [
      "Por ser uma caverna, os mobs podem dropar itens e esmeraldas.",
      "Fique atento a itens como The Jingling Jester e Suppression.",
      "Use totens no corredor estreito antes do baú para maximizar o spawn de mobs.",
    ],
  },
  {
    name: "Waterfall",
    range: "Lvl 65 - 80",
    coords: "-106, -4592",
    image: "/leveling/waterfall.webp",
    notes: [
      "Tem XP superior ao da Flesh Cave, mas sobreviver é mais difícil.",
      "Healer é altamente necessário, então fique sempre próximo dele.",
      "Os mobs têm muita vida, então a party precisa de bom dano para manter o ritmo.",
    ],
  },
  {
    name: "Scrapyard",
    range: "Lvl 75 - 106",
    coords: "-1445, -2522",
    image: "/leveling/scrapyard.webp",
    notes: [
      "Pode ser utilizado com tranquilidade até o level 106.",
      "A partir daqui, o healer também pode ajudar com dano sem atrapalhar o XP da party.",
      "Use os totens na parte esquerda do spot.",
    ],
  },
  {
    name: "Church",
    range: "Lvl 100 - 106",
    coords: "1023, -390",
    image: "/leveling/church.webp",
    notes: [
      "Spot menos popular devido ao Scrapyard, mas ainda muito eficiente.",
      "Necessita da quest A Journey Beyond para ser acessado.",
      "Também pode ser usado para farmar XP para a guilda.",
    ],
  },
];
