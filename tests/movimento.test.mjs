// A revelação ao rolar tem a lista de alvos em dois lugares: o CSS esconde, o script revela.
// Se um seletor estiver só no CSS, o elemento some para sempre; este teste impede isso.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Clones no Windows saem com CRLF: normaliza antes de procurar os blocos.
const ler = (caminho) => readFileSync(new URL(caminho, import.meta.url), "utf8").replace(/\r\n/g, "\n");
const css = ler("../app/styles/motion.css");
const ts = ler("../lib/movimento.ts");

const normalizar = (s) => s.replace(/\s+/g, " ").trim();

function alvosDoCss() {
  const inicio = css.indexOf("html.js\n  :is(");
  assert.ok(inicio >= 0, "bloco de alvos não encontrado em motion.css");
  const abre = css.indexOf("(", inicio);
  const fecha = css.indexOf("\n  )", abre);
  return css
    .slice(abre + 1, fecha)
    .split(",\n")
    .map(normalizar)
    .filter(Boolean);
}

function alvosDoScript() {
  const bloco = ts.match(/SELETORES_REVELAR = \[([\s\S]*?)\]\.join/);
  assert.ok(bloco, "SELETORES_REVELAR não encontrado em lib/movimento.ts");
  return [...bloco[1].matchAll(/"([^"]+)"/g)].map((m) => normalizar(m[1]));
}

test("todo alvo escondido pelo CSS é revelado pelo script", () => {
  const script = new Set(alvosDoScript());
  for (const alvo of alvosDoCss()) assert.ok(script.has(alvo), `só no CSS: ${alvo}`);
});

test("o script não revela alvo que o CSS não esconde (exceto o trilho, que tem regra própria)", () => {
  const cssAlvos = new Set(alvosDoCss());
  for (const alvo of alvosDoScript()) {
    if (alvo === ".trilho-desenha") continue;
    assert.ok(cssAlvos.has(alvo), `só no script: ${alvo}`);
  }
});
