type ImagemDoJogoProps = {
  /** Caminho sem o sufixo de largura e extensão, ex.: /raids/prints/raid-twp-chefe-anathema */
  base: string;
  alt: string;
  /** Larguras geradas para essa imagem (a maior vira o fallback). */
  larguras: number[];
  largura: number;
  altura: number;
  sizes: string;
  prioridade?: boolean;
  className?: string;
};

/**
 * Print do jogo em AVIF com WebP de reserva, na largura certa para a tela e carregada sob demanda.
 * As variantes são geradas fora do build (curadoria em docs/CREDITOS.md).
 */
export default function ImagemDoJogo({
  base,
  alt,
  larguras,
  largura,
  altura,
  sizes,
  prioridade = false,
  className = "",
}: ImagemDoJogoProps) {
  const srcSet = (formato: string) => larguras.map((w) => `${base}-${w}.${formato} ${w}w`).join(", ");
  const maior = Math.max(...larguras);

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`${base}-${maior}.webp`}
        alt={alt}
        width={largura}
        height={altura}
        loading={prioridade ? "eager" : "lazy"}
        fetchPriority={prioridade ? "high" : "auto"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
