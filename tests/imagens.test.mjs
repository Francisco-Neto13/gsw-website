// A tabela de dimensões (lib/dimensoes-imagens.json) precisa bater com os arquivos de public/: com ela errada,
// o ImagemNoQuadro mostraria uma print maior ou menor do que o arquivo real.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { medirImagens } from "../scripts/medir-imagens.mjs";

test("lib/dimensoes-imagens.json está em dia com public/ (rode node scripts/medir-imagens.mjs)", async () => {
  const salva = JSON.parse(readFileSync(new URL("../lib/dimensoes-imagens.json", import.meta.url), "utf8"));
  const atual = await medirImagens();
  assert.deepEqual(salva, atual);
});
