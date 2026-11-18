// Converte GIFs pesados em: pôster estático (<nome>.poster.webp) + animação WebP (<nome>.webp),
// ambos com no máximo 960 px de largura. O site mostra o pôster e só baixa a animação no clique.
// Uso: node scripts/gif-para-webp.mjs public/lootrun/arquivo.gif [mais.gif ...]
import { stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const LARGURA_MAXIMA = 960;
const arquivos = process.argv.slice(2).filter((arquivo) => arquivo.toLowerCase().endsWith(".gif"));

if (arquivos.length === 0) {
  console.error("Passe um ou mais arquivos .gif.");
  process.exit(1);
}

const kb = async (arquivo) => Math.round((await stat(arquivo)).size / 1024);

for (const gif of arquivos) {
  const base = gif.slice(0, -path.extname(gif).length);
  const redimensionar = { width: LARGURA_MAXIMA, withoutEnlargement: true };

  await sharp(gif, { pages: 1 }).resize(redimensionar).webp({ quality: 78 }).toFile(`${base}.poster.webp`);
  await sharp(gif, { animated: true }).resize(redimensionar).webp({ quality: 70, effort: 5 }).toFile(`${base}.webp`);

  console.log(`${gif}: ${await kb(gif)} KB -> pôster ${await kb(`${base}.poster.webp`)} KB + animação ${await kb(`${base}.webp`)} KB`);
}
