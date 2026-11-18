// Converte GIFs em: pôster estático (<nome>.poster.webp) + animação WebP (<nome>.webp), os dois SEM PERDA.
// A animação fica idêntica ao GIF, pixel a pixel, e cerca de 10% menor; o peso é resolvido pelo carregamento
// sob demanda (AnimacaoSobDemanda baixa a animação só quando ela chega perto da tela), não por compressão.
// Vídeo (MP4) foi testado e não compensa: o pontilhado dos GIFs do jogo deixa o vídeo do mesmo tamanho e pior.
// Uso: node scripts/gif-para-webp.mjs [--saida pasta] arquivo.gif [mais.gif ...]
import { stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const iSaida = args.indexOf("--saida");
const saida = iSaida >= 0 ? args.splice(iSaida, 2)[1] : null;
const arquivos = args.filter((arquivo) => arquivo.toLowerCase().endsWith(".gif"));

if (arquivos.length === 0) {
  console.error("Passe um ou mais arquivos .gif.");
  process.exit(1);
}

const kb = async (arquivo) => Math.round((await stat(arquivo)).size / 1024);

for (const gif of arquivos) {
  const nome = path.basename(gif, path.extname(gif));
  const base = path.join(saida ?? path.dirname(gif), nome);

  await sharp(gif, { pages: 1 }).webp({ lossless: true, effort: 6 }).toFile(`${base}.poster.webp`);
  await sharp(gif, { animated: true }).webp({ lossless: true, effort: 6 }).toFile(`${base}.webp`);

  console.log(`${nome}: GIF ${await kb(gif)} KB -> pôster ${await kb(`${base}.poster.webp`)} KB + animação ${await kb(`${base}.webp`)} KB`);
}
