// O carregador do next/image (lib/carregador-de-imagem.ts) e o build (scripts/gerar-variantes.mjs) seguem as
// mesmas regras de lib/variantes.ts: se elas divergirem, a página pede uma variante que o build não gerou.
import { test } from "node:test";
import assert from "node:assert/strict";
import { caminhoDaVariante, escolherLargura, geraVariante, largurasPara } from "../lib/variantes.ts";

test("a variante escolhida sempre existe e nunca passa da largura original", () => {
  for (const original of [20, 32, 215, 640, 700, 1200, 1920, 2560]) {
    const existentes = largurasPara(original);
    for (const pedida of [16, 32, 100, 384, 640, 1080, 1920, 3840]) {
      const escolhida = escolherLargura(original, pedida);
      assert.ok(existentes.includes(escolhida), `${original}px pedindo ${pedida}: ${escolhida} não é gerada`);
      assert.ok(escolhida <= Math.max(original, 0), `${original}px pedindo ${pedida}: ${escolhida} passa do original`);
    }
  }
});

test("o caminho da variante troca a extensão e fica em /_v", () => {
  assert.equal(caminhoDaVariante("/guild-house/a.webp", 640), "/_v/guild-house/a-640.webp");
  assert.equal(caminhoDaVariante("/x/foto.png", 32), "/_v/x/foto-32.webp");
});

test("pôsteres de animação e as variantes do ImagemDoJogo não ganham variante", () => {
  assert.equal(geraVariante("/lootrun/jump_pads.poster.webp"), false);
  assert.equal(geraVariante("/raids/prints/raid-twp-chefe-anathema-1280.webp"), false);
  assert.equal(geraVariante("/guild-house/guild-house-sede.webp"), true);
});
