import dimensoes from "@/lib/dimensoes-imagens.json";

const tabela = dimensoes as unknown as Record<string, [number, number]>;

/** Largura e altura reais de uma imagem de public/ (lib/dimensoes-imagens.json), ou null se não estiver medida. */
export const dimensoesDe = (src: string): [number, number] | null => tabela[src] ?? null;

/**
 * Imagens de terceiros (wiki e arte oficial da Wynncraft) moram só em public/terceiros/, com crédito automático na
 * legenda. Para remover todas: apagar a pasta e rodar `node scripts/medir-imagens.mjs` (docs/CREDITOS.md).
 */
export const creditoDe = (src: string) => (src.startsWith("/terceiros/wynncraft/") ? "© Wynncraft" : null);

/**
 * Print pequena (recorte de interface com menos de 700 px): numa linha sozinha ela ficaria perdida no meio de um
 * quadro largo, porque não é ampliada além do arquivo. Nesses casos ela vai para a coluna lateral, ao lado do texto.
 */
export const ehPrintPequena = (src?: string) => {
  if (!src) return false;
  const medida = tabela[src];
  return medida ? medida[0] < 700 : false;
};
