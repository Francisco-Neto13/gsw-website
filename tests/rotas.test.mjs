// Confere que a navegação (lib/site-content.ts) e as rotas de app/ batem.
// Roda com o executor nativo do Node 24 (`npm test`), que lê o .ts direto (type stripping).
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { navbarItems, sitePageLinks } from "../lib/site-content.ts";

const raiz = join(import.meta.dirname, "..");
const temPagina = (href) => existsSync(join(raiz, "app", href, "page.tsx"));

const rotasDoApp = readdirSync(join(raiz, "app"), { withFileTypes: true })
  .filter((item) => item.isDirectory() && temPagina(`/${item.name}`))
  .map((item) => `/${item.name}`);

const linksDoNavbar = navbarItems.flatMap((item) =>
  item.type === "link" ? [item.href] : item.sections.flatMap((secao) => secao.links.map((link) => link.href))
);

test("todo link de sitePageLinks aponta para uma página existente", () => {
  for (const { href } of sitePageLinks) assert.ok(temPagina(href), `sem app${href}/page.tsx`);
});

test("todo link do navbar aponta para uma página existente", () => {
  for (const href of linksDoNavbar) assert.ok(temPagina(href), `sem app${href}/page.tsx`);
});

test("toda rota de app/ aparece em sitePageLinks", () => {
  const hrefs = new Set(sitePageLinks.map((link) => link.href));
  for (const rota of rotasDoApp) assert.ok(hrefs.has(rota), `${rota} fora de sitePageLinks`);
});

test("hrefs de sitePageLinks não se repetem", () => {
  const hrefs = sitePageLinks.map((link) => link.href);
  assert.equal(new Set(hrefs).size, hrefs.length);
});
