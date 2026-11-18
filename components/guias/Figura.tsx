import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

type FiguraProps = {
  src: string;
  alt: string;
  legenda?: string;
  largura: number;
  altura: number;
  sizes: string;
  className?: string;
};

/** Print do jogo com legenda; amplia no clique. Largura e altura reais evitam a página pular. */
export default function Figura({ src, alt, legenda, largura, altura, sizes, className = "" }: FiguraProps) {
  return (
    <figure className={className}>
      <ClickableImagePreview src={src} alt={alt}>
        <Image
          src={src}
          alt={alt}
          width={largura}
          height={altura}
          sizes={sizes}
          className="h-auto w-full rounded-md border border-linha bg-carvao"
        />
      </ClickableImagePreview>
      {legenda ? <figcaption className="mt-2 text-[0.95rem] text-texto-3">{legenda}</figcaption> : null}
    </figure>
  );
}
