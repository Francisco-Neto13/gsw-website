// Largura e altura reais das imagens de public/ usadas no guia de Raids (lidas com sharp).
export const dimensoes: Record<string, [number, number]> = {
  "/raids/notg.webp": [1920, 1080],
  "/raids/nol.webp": [1920, 1080],
  "/raids/tcc.webp": [1920, 1080],
  "/raids/tna.webp": [1920, 1080],
  "/raids/twp.webp": [1920, 991],
  "/raids/raid_chief.webp": [1920, 991],
  "/raids/party_queue.webp": [583, 288],
  "/raids/party_queue2.webp": [444, 491],
  "/raids/iniciar_raid.webp": [739, 470],
  "/raids/raid_encontrada.webp": [494, 298],
  "/raids/runas.webp": [1920, 1080],
  "/raids/guild_raid.webp": [246, 209],
  "/raids/reward_chest.webp": [1920, 1080],
  "/raids/rewards_raid.webp": [520, 444],
  "/raids/gambit.webp": [535, 343],
  "/raids/nivel_raid.webp": [787, 279],
  "/lootrun/Cinfras_silverbull.webp": [1920, 1080],
};

export const tamanhoDe = (src: string): { largura: number; altura: number } => {
  const [largura, altura] = dimensoes[src] ?? [1280, 720];
  return { largura, altura };
};
