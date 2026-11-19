"use client";

// Carregador do next/image no site estático: em vez do otimizador em tempo real (/_next/image), aponta para a
// variante gerada no build (lib/variantes.ts). Imagem externa (miniatura do YouTube) passa direto.
import dimensoes from "@/lib/dimensoes-imagens.json";
import { caminhoDaVariante, escolherLargura, geraVariante } from "@/lib/variantes";

const tabela = dimensoes as unknown as Record<string, [number, number]>;

export default function carregarImagem({ src, width }: { src: string; width: number; quality?: number }) {
  const medida = tabela[src];
  if (!src.startsWith("/") || !medida || !geraVariante(src)) return src;
  return caminhoDaVariante(src, escolherLargura(medida[0], width));
}
