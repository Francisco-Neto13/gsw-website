import Image from "next/image";
import dimensoes from "@/lib/dimensoes-imagens.json";

type ImagemNoQuadroProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Classes extras da imagem (ex.: p-2). */
  className?: string;
};

const tabela = dimensoes as unknown as Record<string, [number, number]>;

/**
 * Print dentro de um quadro de proporção fixa (o pai tem `relative` e a proporção): cabe inteira, centralizada, e
 * nunca passa do tamanho real do arquivo. Antes, `fill` + `object-contain` esticava prints pequenas de interface
 * (300 a 500 px) para o quadro todo e o texto do jogo borrava. Prints grandes continuam enchendo o quadro.
 */
export default function ImagemNoQuadro({ src, alt, sizes, className = "" }: ImagemNoQuadroProps) {
  const medida = tabela[src];
  if (!medida) {
    // Imagem de fora de public/ ou ainda não medida: comportamento antigo.
    return <Image quality={90} src={src} alt={alt} fill sizes={sizes} className={`object-contain ${className}`} />;
  }
  const [largura, altura] = medida;
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <Image
        quality={90}
        src={src}
        alt={alt}
        width={largura}
        height={altura}
        sizes={sizes}
        className={className}
        // Caixa explícita: no máximo a largura real do arquivo, proporção do arquivo, contida na altura do quadro.
        // Não usa width:auto porque, com srcset por largura, o navegador "encolhe" o tamanho natural de uma fonte
        // pequena (o otimizador devolve 243 px rotulados como 640w) e a print ficaria menor que o próprio arquivo.
        style={{
          width: `min(100%, ${largura}px)`,
          height: "auto",
          maxHeight: "100%",
          aspectRatio: `${largura} / ${altura}`,
          objectFit: "contain",
        }}
      />
    </span>
  );
}
