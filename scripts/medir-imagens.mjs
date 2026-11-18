// Gera lib/dimensoes-imagens.json: largura e altura reais de cada imagem de public/.
// O ImagemNoQuadro usa a tabela para nunca ampliar uma print além do tamanho do arquivo (ampliar borra o texto
// de interface do jogo). Rode depois de adicionar ou trocar imagens: node scripts/medir-imagens.mjs
// O teste tests/imagens.test.mjs falha se a tabela estiver desatualizada.
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLICO = "public";
const EXTENSOES = /\.(webp|avif|png|jpe?g|gif)$/i;

export async function medirImagens(raiz = PUBLICO) {
  const tabela = {};
  async function andar(pasta) {
    for (const entrada of await readdir(pasta, { withFileTypes: true })) {
      const caminho = path.join(pasta, entrada.name);
      if (entrada.isDirectory()) await andar(caminho);
      else if (EXTENSOES.test(entrada.name)) {
        const { width, height } = await sharp(caminho).metadata();
        tabela["/" + path.relative(raiz, caminho).split(path.sep).join("/")] = [width, height];
      }
    }
  }
  await andar(raiz);
  return Object.fromEntries(Object.entries(tabela).sort(([a], [b]) => a.localeCompare(b)));
}

if (import.meta.url === `file://${process.argv[1].split(path.sep).join("/")}` || process.argv[1]?.endsWith("medir-imagens.mjs")) {
  const tabela = await medirImagens();
  await writeFile("lib/dimensoes-imagens.json", JSON.stringify(tabela, null, 1) + "\n");
  console.log(`${Object.keys(tabela).length} imagens medidas em lib/dimensoes-imagens.json`);
}
