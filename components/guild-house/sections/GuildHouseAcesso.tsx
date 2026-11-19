import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { acessoImagens, acessoIntro, acessoPassos } from "@/components/guild-house/data/guild-house-content";
import { dimensoesDe } from "@/lib/imagens";

export default function GuildHouseAcesso() {
  const imagens = acessoImagens.filter((imagem) => dimensoesDe(imagem.src));
  return (
    <SecaoGuia id="acesso" titulo="Como acessar" introducao={acessoIntro}>
      <ol className="grid gap-4 sm:grid-cols-2">
        {acessoPassos.map((passo, indice) => (
          <li key={passo.titulo} className="rounded-md border border-linha bg-carvao px-5 py-4">
            <p className="flex items-baseline gap-2 font-bold text-texto">
              <span className="numeros font-mono text-violeta">{indice + 1}.</span>
              {passo.titulo}
            </p>
            <p className="mt-1 text-texto-2">{passo.texto}</p>
          </li>
        ))}
      </ol>
      {imagens.length > 0 ? <Galeria className="mt-8" itens={imagens} /> : null}
    </SecaoGuia>
  );
}
