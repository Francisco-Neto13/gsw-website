/**
 * Revelação ao rolar (docs/redesign/ANIMACOES.md). Roda inline no <head>, antes do primeiro desenho e sem
 * esperar o React: põe a classe `js` no <html> (o CSS esconde os alvos só com ela) e revela cada alvo uma vez
 * quando ele entra na tela, marcando `data-visto`. Irmãos que aparecem juntos ganham `data-i` (0 a 5) para
 * entrar em sequência. Alvos dentro de outro alvo (cartões, etapas, figuras dentro da seção) entram em sequência
 * depois do pai. O que aparece no primeiro 1,2 s da página ganha `data-cedo`: espera 900 ms o cabeçalho (título,
 * abertura) terminar de entrar antes de subir. O relógio volta a zero quando uma página nova (um H1 novo) entra.
 * Áreas com entrada própria marcam `data-sem-revelar` e ficam fora.
 * O MutationObserver pega o que entra depois (navegação entre páginas).
 */

/** Manter igual à lista de `app/styles/motion.css` (o teste tests/movimento.test.mjs confere). */
export const SELETORES_REVELAR = [
  // A seção inteira é um bloco: nenhum parágrafo aparece pronto antes da animação. A de H1 tem entrada própria.
  "main section:not(:has(h1))",
  "main section h2",
  "main section h3",
  "main figure",
  "main picture",
  "main table",
  "main section article:not([id])",
  "main .caixa-item:not(.caixa-abre)",
  "main section ol > li",
  "main section ul.grid > li",
  "main [data-revelar-item]",
  ".trilho-desenha",
].join(", ");

function revelar(seletores: string) {
  const raiz = document.documentElement;
  raiz.classList.add("js");
  if (!("IntersectionObserver" in window)) {
    raiz.classList.remove("js");
    return;
  }
  const vistos = new WeakSet<Element>();
  // <picture> é inline e a <img> dentro é bloco: a caixa do picture fica vazia e o observer nunca a vê.
  // Observa a img e marca o picture.
  const alvoDe = new WeakMap<Element, Element>();
  let inicio = performance.now();
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        const alvo = alvoDe.get(entrada.target) ?? entrada.target;
        if (performance.now() - inicio < 1200) alvo.setAttribute("data-cedo", "");
        alvo.setAttribute("data-visto", "");
        observador.unobserve(entrada.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
  );
  const preparar = (alvo: Element) => {
    if (vistos.has(alvo)) return;
    vistos.add(alvo);
    // Quem tem entrada própria (o palco do Início) fica fora.
    if (alvo.closest("[data-sem-revelar]")) return;
    let indice = 0;
    let irmao = alvo.previousElementSibling;
    while (irmao && indice < 5) {
      if (irmao.matches(seletores)) indice += 1;
      irmao = irmao.previousElementSibling;
    }
    if (indice) alvo.setAttribute("data-i", String(indice));
    const observado = alvo.tagName === "PICTURE" ? (alvo.querySelector("img") ?? alvo) : alvo;
    alvoDe.set(observado, alvo);
    observador.observe(observado);
  };
  const varrer = (no: ParentNode) => {
    if (no instanceof Element && no.matches(seletores)) preparar(no);
    no.querySelectorAll(seletores).forEach(preparar);
  };
  const iniciar = () => {
    varrer(document);
    new MutationObserver((mudancas) => {
      for (const mudanca of mudancas)
        mudanca.addedNodes.forEach((no) => {
          if (!(no instanceof Element)) return;
          if (no.matches("h1") || no.querySelector("h1")) inicio = performance.now();
          varrer(no);
        });
    }).observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
}

/** O script inline: a função acima serializada, chamada com a lista de seletores. */
export const scriptDeRevelacao = `(${revelar.toString()})(${JSON.stringify(SELETORES_REVELAR)});`;
