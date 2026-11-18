// Imagens de terceiros (wiki e arte oficial da Wynncraft) ficam isoladas em public/terceiros/ para serem removidas
// de uma vez se pedirem. Este teste garante que cada arquivo da pasta está listado em docs/CREDITOS.md.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const raiz = join(import.meta.dirname, "..");
const pasta = join(raiz, "public", "terceiros");

const arquivos = (dir) =>
  existsSync(dir)
    ? readdirSync(dir, { withFileTypes: true }).flatMap((item) =>
        item.isDirectory() ? arquivos(join(dir, item.name)) : [item.name],
      )
    : [];

test("toda imagem de public/terceiros/ está listada em docs/CREDITOS.md", () => {
  const creditos = readFileSync(join(raiz, "docs", "CREDITOS.md"), "utf8");
  for (const nome of arquivos(pasta)) assert.ok(creditos.includes(nome), `${nome} fora da tabela de terceiros em docs/CREDITOS.md`);
});
