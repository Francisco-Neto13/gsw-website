// Passo final do build estático (npm run build): roda depois do `next build` e completa a pasta out/.
//   1. Variantes responsivas de cada imagem de public/ em out/_v/ (lib/variantes.ts), em WebP 82.
//   2. Versões zstd, brotli e gzip de HTML, JS, CSS, JSON, SVG e TXT, para o Caddy servir já comprimido.
//   3. infra/gerado/redirects.caddy: os redirects 308 das rotas antigas, tirados do registro.
// Uso: node scripts/gerar-variantes.mjs   (o `npm run build` já chama)
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import zlib from "node:zlib";
import sharp from "sharp";
import { largurasPara, caminhoDaVariante, geraVariante } from "../lib/variantes.ts";
import { redirecionamentos } from "../lib/site-content.ts";

const SAIDA = "out";
const PUBLICO = "public";
sharp.cache(false);
sharp.concurrency(2);

async function arquivos(pasta) {
  const lista = [];
  for (const entrada of await readdir(pasta, { withFileTypes: true })) {
    const caminho = path.join(pasta, entrada.name);
    if (entrada.isDirectory()) lista.push(...(await arquivos(caminho)));
    else lista.push(caminho);
  }
  return lista;
}

const web = (caminho) => "/" + caminho.split(path.sep).join("/");

async function variantes() {
  const inicio = Date.now();
  let geradas = 0;
  let bytes = 0;
  const imagens = (await arquivos(PUBLICO)).filter((f) => geraVariante(web(path.relative(PUBLICO, f))));
  // Em lotes pequenos: o build roda na VPS e o sharp pode passar de 1 GB com muitas imagens grandes ao mesmo tempo.
  for (let i = 0; i < imagens.length; i += 4) {
    await Promise.all(
      imagens.slice(i, i + 4).map(async (arquivo) => {
        const src = web(path.relative(PUBLICO, arquivo));
        const entrada = await readFile(arquivo);
        const { width } = await sharp(entrada).metadata();
        for (const largura of largurasPara(width)) {
          const destino = path.join(SAIDA, caminhoDaVariante(src, largura));
          await mkdir(path.dirname(destino), { recursive: true });
          const saida = await sharp(entrada).resize({ width: largura, withoutEnlargement: true }).webp({ quality: 82, effort: 4 }).toBuffer();
          await writeFile(destino, saida);
          geradas += 1;
          bytes += saida.length;
        }
      }),
    );
  }
  console.log(`Variantes: ${geradas} de ${imagens.length} imagens, ${(bytes / 1048576).toFixed(1)} MB, ${((Date.now() - inicio) / 1000).toFixed(0)} s`);
}

async function comprimir() {
  const alvos = (await arquivos(SAIDA)).filter((f) => /\.(html|js|css|json|svg|txt|xml|webmanifest)$/.test(f));
  let feitos = 0;
  for (const arquivo of alvos) {
    if ((await stat(arquivo)).size < 1024) continue;
    const dados = await readFile(arquivo);
    await writeFile(`${arquivo}.zst`, zlib.zstdCompressSync(dados, { params: { [zlib.constants.ZSTD_c_compressionLevel]: 19 } }));
    await writeFile(`${arquivo}.br`, zlib.brotliCompressSync(dados, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } }));
    await writeFile(`${arquivo}.gz`, zlib.gzipSync(dados, { level: 9 }));
    feitos += 1;
  }
  console.log(`Pré-compressão: ${feitos} arquivos em zstd, brotli e gzip`);
}

async function redirects() {
  const linhas = [
    "# Gerado por scripts/gerar-variantes.mjs a partir de lib/site-content.ts (redirecionamentos). Não editar.",
    ...redirecionamentos.map(({ source, destination }) => `redir ${source} ${destination} 308`),
    "",
  ];
  await mkdir("infra/gerado", { recursive: true });
  await writeFile("infra/gerado/redirects.caddy", linhas.join("\n"));
  console.log(`Redirects: ${redirecionamentos.length} em infra/gerado/redirects.caddy`);
}

await variantes();
await comprimir();
await redirects();
