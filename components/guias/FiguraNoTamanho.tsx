import Figura from "@/components/guias/Figura";
import { dimensoesDe } from "@/lib/imagens";

type FiguraNoTamanhoProps = {
  imagem: { src: string; alt: string; legenda?: string };
  sizes: string;
  className?: string;
};

/**
 * Figura solta no tamanho da própria imagem: o quadro tem a proporção dela e nunca passa da largura real,
 * então print pequena não fica perdida numa faixa escura. Some se a imagem não estiver medida.
 */
export default function FiguraNoTamanho({ imagem, sizes, className = "" }: FiguraNoTamanhoProps) {
  const medida = dimensoesDe(imagem.src);
  if (!medida) return null;
  return (
    <div className={`w-full justify-self-center ${className}`} style={{ maxWidth: `${medida[0]}px` }}>
      <Figura src={imagem.src} alt={imagem.alt} legenda={imagem.legenda} sizes={sizes} proporcao={`${medida[0]} / ${medida[1]}`} />
    </div>
  );
}
