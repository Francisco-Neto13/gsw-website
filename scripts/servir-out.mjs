// Servidor local da pasta out/ para conferir o build estático (npm start), com as mesmas regras do Caddy de
// produção (infra/Caddyfile): página sem extensão vira .html, redirects 308 do registro e 404.html.
// Só para a máquina de quem desenvolve; em produção quem serve é o Caddy.
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { redirecionamentos } from "../lib/site-content.ts";

const RAIZ = path.resolve("out");
const PORTA = Number(process.env.PORT || 3000);
const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};
const destinos = new Map(redirecionamentos.map((r) => [r.source, r.destination]));

/**
 * Pré-carregamento do Next 16 no export: o navegador pede `__next.guias.raids.__PAGE__.txt`, mas o arquivo é
 * `__next.guias/raids/__PAGE__.txt` (o 1º segmento fica no nome, os seguintes viram pastas). O Caddy faz o mesmo.
 */
const arquivoDoSegmento = (rota) =>
  rota.replace(/\/__next\.([^/]+)\.txt$/, (_, nome) => `/__next.${nome.split(".").join("/")}.txt`);

const arquivo = async (caminho) => {
  try {
    return (await stat(caminho)).isFile() ? caminho : null;
  } catch {
    return null;
  }
};

createServer(async (pedido, resposta) => {
  const url = new URL(pedido.url, "http://localhost");
  const rota = decodeURIComponent(url.pathname);
  if (destinos.has(rota)) {
    resposta.writeHead(308, { Location: destinos.get(rota) });
    return resposta.end();
  }
  const dentro = (caminho) => path.join(RAIZ, path.normalize(caminho).replace(/^(\.\.[/\\])+/, ""));
  const base = dentro(rota);
  const segmento = dentro(arquivoDoSegmento(rota));
  const achado =
    (await arquivo(base)) ??
    (await arquivo(segmento)) ??
    (await arquivo(`${base}.html`)) ??
    (await arquivo(path.join(base, "index.html")));
  const final = achado ?? path.join(RAIZ, "404.html");
  resposta.writeHead(achado ? 200 : 404, { "Content-Type": TIPOS[path.extname(final)] ?? "application/octet-stream" });
  createReadStream(final).pipe(resposta);
}).listen(PORTA, () => console.log(`out/ em http://localhost:${PORTA}`));
