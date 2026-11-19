// Confere que a navegação (lib/site-content.ts), as rotas de app/ e os redirects batem.
// Roda com o executor nativo do Node 24 (`npm test`), que lê o .ts direto (type stripping).
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { areas, guias, guiaHref, paginasDaComunidade, redirecionamentos, sitePageLinks } from "../lib/site-content.ts";

const raiz = join(import.meta.dirname, "..");
const app = join(raiz, "app");
const temPagina = (href) => existsSync(join(app, href, "page.tsx"));

/** Todas as rotas com page.tsx, inclusive aninhadas (ex.: /guias/raids). */
function rotasDoApp(pasta = app) {
  const rotas = [];
  for (const item of readdirSync(pasta, { withFileTypes: true })) {
    if (!item.isDirectory()) continue;
    const caminho = join(pasta, item.name);
    if (existsSync(join(caminho, "page.tsx"))) rotas.push("/" + relative(app, caminho).split(sep).join("/"));
    rotas.push(...rotasDoApp(caminho));
  }
  return rotas;
}

test("todo link de sitePageLinks e das áreas aponta para uma página existente", () => {
  for (const { href } of [...sitePageLinks, ...areas]) assert.ok(temPagina(href), `sem app${href}/page.tsx`);
});

test("toda rota de app/ aparece em sitePageLinks", () => {
  const hrefs = new Set(sitePageLinks.map((link) => link.href));
  for (const rota of rotasDoApp()) assert.ok(hrefs.has(rota), `${rota} fora de sitePageLinks`);
});

test("hrefs de sitePageLinks e slugs de guia não se repetem", () => {
  const hrefs = sitePageLinks.map((link) => link.href);
  assert.equal(new Set(hrefs).size, hrefs.length);
  const slugs = guias.map((guia) => guia.slug);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("toda rota antiga redireciona para um guia que existe, e nenhuma ainda tem página própria", () => {
  const antigas = paginasDaComunidade.reduce((soma, pagina) => soma + pagina.rotasAntigas.length, 0);
  assert.equal(redirecionamentos.length, guias.length + antigas);
  for (const { source, destination, permanent } of redirecionamentos) {
    assert.equal(permanent, true, `${source} deveria ser redirect permanente`);
    assert.ok(temPagina(destination), `redirect de ${source} para ${destination}, que não existe`);
    assert.ok(!temPagina(source), `${source} ainda tem página; o redirect nunca seria usado`);
  }
});

test("seções declaradas no registro têm ids únicos", () => {
  for (const guia of guias) {
    const ids = (guia.secoes ?? []).map((secao) => secao.id);
    assert.equal(new Set(ids).size, ids.length, `ids repetidos em ${guiaHref(guia.slug)}`);
  }
});
