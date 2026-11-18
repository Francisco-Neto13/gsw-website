/**
 * `sizes` das imagens dentro do artigo de um guia, derivados do layout (DESIGN.md, Layout):
 * a partir de 1280 px o artigo é a tela menos casca (2×2 rem), sidebar (16 rem), índice (15 rem) e
 * o respiro da seção (2×2,5 rem); entre 1024 e 1279 não há índice; acima de 1920 px a casca para de crescer.
 * Com o `sizes` certo, a tela grande e a de alta densidade recebem a versão grande, sem imagem esticada.
 * Mudou a largura da sidebar, do índice ou da casca, mude aqui.
 */
const faixa = (divisor: number, celular: string) =>
  [
    `(min-width: 1920px) ${+(78 / divisor).toFixed(2)}rem`,
    `(min-width: 1280px) calc(${+(100 / divisor).toFixed(2)}vw - ${+(40 / divisor).toFixed(2)}rem)`,
    `(min-width: 1024px) calc(${+(100 / divisor).toFixed(2)}vw - ${+(25 / divisor).toFixed(2)}rem)`,
    celular,
  ].join(", ");

const UMA_COLUNA = "calc(100vw - 2rem)";
const DUAS_NO_TABLET = `(min-width: 640px) calc(50vw - 1.5rem), ${UMA_COLUNA}`;

export const tamanhos = {
  /** Imagem na largura toda do artigo. */
  artigo: faixa(1, UMA_COLUNA),
  /** Duas por linha a partir do tablet. */
  metade: faixa(2, DUAS_NO_TABLET),
  /** Três por linha no desktop, duas no tablet. */
  terco: faixa(3, DUAS_NO_TABLET),
  /** Quatro por linha no desktop, duas no tablet. */
  quarto: faixa(4, DUAS_NO_TABLET),
  /** Coluna lateral de 26 rem ao lado dos cartões (a partir de 1024 px). */
  lateral: `(min-width: 1024px) 26rem, ${UMA_COLUNA}`,
  /** Imagem solta com teto de 48 rem (prints pequenas que não devem esticar). */
  solta: `(min-width: 1024px) 48rem, ${UMA_COLUNA}`,
} as const;
