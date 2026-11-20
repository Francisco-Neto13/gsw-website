import Destaque from "@/components/guias/Destaque";
import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { dicasImagens, sharesDicas } from "@/components/silverbull-shares/data/silverbull-shares-content";
import { dimensoesDe } from "@/lib/imagens";

export default function SilverbullExtrasSection() {
  const imagens = dicasImagens.filter((imagem) => dimensoesDe(imagem.src));
  return (
    <SecaoGuia id="dicas" titulo="Dicas">
      <div className="flex flex-col gap-3">
        {sharesDicas.map((dica) => (
          <Destaque key={dica} tipo="dica" titulo="Dica" texto={dica} />
        ))}
      </div>
      {imagens.length > 0 ? <Galeria className="mt-8" itens={imagens} /> : null}
    </SecaoGuia>
  );
}
