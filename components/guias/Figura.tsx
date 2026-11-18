import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import ImagemNoQuadro from "@/components/shared/ImagemNoQuadro";

type FiguraProps = {
  src: string;
  alt: string;
  legenda?: string;
  /** Tamanho real da print; dispensável quando há `proporcao` (o quadro define o tamanho). */
  largura?: number;
  altura?: number;
  sizes: string;
  /**
   * Quadro de proporção fixa (ex.: "16 / 9"): a print cabe inteira dentro dele (`object-contain`, sem corte e
   * sem distorção) sobre o poço escuro. Numa galeria, todas as figuras da linha ficam com a mesma altura e as
   * legendas começam na mesma linha.
   */
  proporcao?: string;
  className?: string;
};

/** Print do jogo com legenda; amplia no clique, então o tamanho na grade não esconde nada. */
export default function Figura({ src, alt, legenda, largura, altura, sizes, proporcao, className = "" }: FiguraProps) {
  return (
    <figure className={className}>
      <ClickableImagePreview src={src} alt={alt}>
        {proporcao ? (
          <div className="relative w-full overflow-hidden rounded-md border border-linha bg-poco" style={{ aspectRatio: proporcao }}>
            <ImagemNoQuadro src={src} alt={alt} sizes={sizes} />
          </div>
        ) : (
          <Image
            quality={90}
            src={src}
            alt={alt}
            width={largura}
            height={altura}
            sizes={sizes}
            className="h-auto w-full rounded-md border border-linha bg-carvao"
          />
        )}
      </ClickableImagePreview>
      {legenda ? <figcaption className="mt-2 text-apoio text-texto-3">{legenda}</figcaption> : null}
    </figure>
  );
}
