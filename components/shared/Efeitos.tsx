"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

type LenisMinimo = {
  destroy: () => void;
  scrollTo: (alvo: number | string | HTMLElement, opcoes?: { immediate?: boolean; offset?: number }) => void;
  stop: () => void;
  start: () => void;
};
type JanelaComLenis = Window & { __lenis?: LenisMinimo };

const movimentoReduzido = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const ponteiroFino = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/** Contagem de 0 até o valor com saída exponencial (como o contador do suamarcaseulegado). */
function contar(elemento: HTMLElement) {
  const final = Number(elemento.dataset.contar);
  if (!Number.isFinite(final)) return;
  const inicio = performance.now();
  const duracao = 1400;
  const passo = (agora: number) => {
    const t = Math.min(1, (agora - inicio) / duracao);
    const suave = t === 1 ? 1 : 1 - 2 ** (-10 * t);
    elemento.textContent = String(Math.round(final * suave));
    if (t < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}

/**
 * O motor de efeitos do site, sem nada na tela (mesma ideia do Gastos e do chiconeto.dev):
 * - rolagem suave (Lenis) só no desktop e sem movimento reduzido, baixada depois de a página abrir;
 * - holofote (--mx/--my) nos `.holofote` e inclinação nos `[data-inclinar]`, num único listener;
 * - progresso da rolagem (--p, 0 a 1) nos `[data-trilho]` e posição do cursor (--px/--py) nos `[data-paralaxe]`;
 * - `data-rolou` no <html> para a top bar ganhar vidro; contagem animada nos `[data-contar]`;
 * - página nova abre no topo.
 */
export default function Efeitos() {
  const pathname = usePathname();

  // Rolagem suave: uma instância para a vida inteira do site.
  useEffect(() => {
    if (movimentoReduzido() || !ponteiroFino()) return;
    let cancelado = false;
    let lenis: LenisMinimo | undefined;
    const ocioso =
      (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ??
      ((cb: () => void) => window.setTimeout(cb, 300));
    ocioso(() => {
      import("lenis").then(({ default: Lenis }) => {
        if (cancelado) return;
        // lerp 0.15: chega rápido sem parecer pesado em páginas longas de leitura.
        // anchors: o índice "Nesta página" e os links internos rolam suave; o ponto de parada vem do CSS
        // (scroll-padding-top da top bar e scroll-margin da barra do índice no celular), igual à rolagem nativa.
        const instancia = new Lenis({
          autoRaf: true,
          lerp: 0.15,
          allowNestedScroll: true,
          anchors: true,
          prevent: (no: HTMLElement) => Boolean(no.closest("dialog, [data-lenis-prevent], [role='dialog']")),
        });
        lenis = instancia as unknown as LenisMinimo;
        (window as JanelaComLenis).__lenis = lenis;
        document.documentElement.classList.add("lenis");
      });
    });
    return () => {
      cancelado = true;
      lenis?.destroy();
      delete (window as JanelaComLenis).__lenis;
    };
  }, []);

  // Cursor: holofote, inclinação e paralaxe do palco. Um quadro por vez.
  useEffect(() => {
    if (movimentoReduzido() || !ponteiroFino()) return;
    let quadro = 0;
    let ultimo: PointerEvent | null = null;
    const aplicar = () => {
      quadro = 0;
      const evento = ultimo;
      if (!evento) return;
      const alvo = evento.target as Element | null;
      const holofote = alvo?.closest<HTMLElement>(".holofote, [data-guia-conteudo] section article:not([id])");
      if (holofote) {
        const caixa = holofote.getBoundingClientRect();
        holofote.style.setProperty("--mx", `${evento.clientX - caixa.left}px`);
        holofote.style.setProperty("--my", `${evento.clientY - caixa.top}px`);
      }
      const inclinar = alvo?.closest<HTMLElement>("[data-inclinar]");
      if (inclinar) {
        const caixa = inclinar.getBoundingClientRect();
        const y = ((evento.clientX - caixa.left) / caixa.width - 0.5) * 6;
        const x = ((evento.clientY - caixa.top) / caixa.height - 0.5) * -5;
        inclinar.style.transform = `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) translateY(-3px)`;
      }
      document.querySelectorAll<HTMLElement>("[data-paralaxe]").forEach((palco) => {
        palco.style.setProperty("--px", ((evento.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        palco.style.setProperty("--py", ((evento.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };
    const mover = (evento: PointerEvent) => {
      ultimo = evento;
      if (!quadro) quadro = requestAnimationFrame(aplicar);
    };
    const sair = (evento: PointerEvent) => {
      const inclinar = (evento.target as Element | null)?.closest<HTMLElement>("[data-inclinar]");
      if (!inclinar || inclinar.contains(evento.relatedTarget as Node | null)) return;
      inclinar.style.transform = "";
    };
    document.addEventListener("pointermove", mover, { passive: true });
    document.addEventListener("pointerout", sair, { passive: true });
    return () => {
      document.removeEventListener("pointermove", mover);
      document.removeEventListener("pointerout", sair);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, []);

  // Rolagem: progresso dos palcos e top bar. Refaz a lista a cada página.
  useEffect(() => {
    const raiz = document.documentElement;
    const trilhos = Array.from(document.querySelectorAll<HTMLElement>("[data-trilho]"));
    let quadro = 0;
    const medir = () => {
      quadro = 0;
      if (window.scrollY > 24) raiz.setAttribute("data-rolou", "");
      else raiz.removeAttribute("data-rolou");
      for (const trilho of trilhos) {
        const caixa = trilho.getBoundingClientRect();
        const percurso = Math.max(1, caixa.height - window.innerHeight);
        const p = Math.min(1, Math.max(0, -caixa.top / percurso));
        trilho.style.setProperty("--p", p.toFixed(4));
      }
    };
    const rolar = () => {
      if (!quadro) quadro = requestAnimationFrame(medir);
    };
    medir();
    window.addEventListener("scroll", rolar, { passive: true });
    window.addEventListener("resize", rolar, { passive: true });
    return () => {
      window.removeEventListener("scroll", rolar);
      window.removeEventListener("resize", rolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [pathname]);

  // Contadores: zera os que ainda estão fora da tela (sem piscar) e conta quando entram.
  useEffect(() => {
    const numeros = Array.from(document.querySelectorAll<HTMLElement>("[data-contar]"));
    if (numeros.length === 0 || movimentoReduzido()) return;
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          contar(entrada.target as HTMLElement);
          observador.unobserve(entrada.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const numero of numeros) {
      if (numero.getBoundingClientRect().top > window.innerHeight) numero.textContent = "0";
      observador.observe(numero);
    }
    return () => observador.disconnect();
  }, [pathname]);

  // Página nova abre no topo (com o Lenis ligado, pelo Lenis, para ele não puxar de volta).
  useLayoutEffect(() => {
    if (window.location.hash) return;
    const lenis = (window as JanelaComLenis).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
