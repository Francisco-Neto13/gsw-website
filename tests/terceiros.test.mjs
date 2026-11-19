// Imagens de terceiros (wiki e arte oficial da Wynncraft) ficam isoladas em public/terceiros/ para serem removidas
// de uma vez se pedirem. Cada arquivo precisa de linha em docs/CREDITOS.md e de link de origem em lib/terceiros.ts.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { origemDasImagens } from "../lib/terceiros.ts";

const raiz = join(import.meta.dirname, "..");
const pasta = join(raiz, "public", "terceiros");

const arquivos = (dir) =>
  existsSync(dir)
    ? readdirSync(dir, { withFileTypes: true }).flatMap((item) =>
        item.isDirectory() ? arquivos(join(dir, item.name)) : [item.name],
      )
    : [];

test("toda imagem de public/terceiros/ tem crédito em docs/CREDITOS.md e link de origem", () => {
  const creditos = readFileSync(join(raiz, "docs", "CREDITOS.md"), "utf8");
  for (const nome of arquivos(pasta)) {
    assert.ok(creditos.includes(nome), `${nome} fora da tabela de terceiros em docs/CREDITOS.md`);
    assert.match(origemDasImagens[nome] ?? "", /^https:\/\//, `${nome} sem link de origem em lib/terceiros.ts`);
  }
});
