// Variantes responsivas das imagens, geradas no build (scripts/gerar-variantes.mjs) e servidas como arquivo
// estático: o site não tem o otimizador do Next em tempo real (output: "export", docs/MIGRACAO-VPS.md).
// Arquivo só de dados e funções puras: o carregador do next/image e o script do build usam as mesmas regras.

/** Larguras geradas. Devem cobrir `deviceSizes` e `imageSizes` do next.config.ts. */
export const LARGURAS = [32, 64, 128, 256, 384, 640, 960, 1280, 1920];

/** Larguras que existem para uma imagem com essa largura original: as menores que ela, mais a própria (até 1920). */
export const largurasPara = (original: number) => {
  const teto = Math.min(original, LARGURAS[LARGURAS.length - 1]);
  return [...LARGURAS.filter((largura) => largura < teto), teto];
};

/** Caminho da variante: /fotos/a.webp em 640 px vira /_v/fotos/a-640.webp. */
export const caminhoDaVariante = (src: string, largura: number) => `/_v${src.replace(/\.[a-z0-9]+$/i, "")}-${largura}.webp`;

/** Escolhe a menor variante que cobre a largura pedida; se nenhuma cobre, a maior que existe. */
export const escolherLargura = (original: number, pedida: number) => {
  const opcoes = largurasPara(original);
  return opcoes.find((largura) => largura >= pedida) ?? opcoes[opcoes.length - 1];
};

/** Imagem que ganha variantes: raster de public/, exceto pôsteres de animação e as variantes do ImagemDoJogo. */
export const geraVariante = (caminho: string) =>
  /\.(webp|png|jpe?g)$/i.test(caminho) && !caminho.endsWith(".poster.webp") && !/-(640|1280|1920)\.(webp|avif)$/.test(caminho);
