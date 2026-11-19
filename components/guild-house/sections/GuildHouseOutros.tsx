import { Footprints, Puzzle, Rat, TreePine, type LucideIcon } from "lucide-react";
import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { outrosIntro, outrosPontos, type PontoId } from "@/components/guild-house/data/guild-house-content";
import { dimensoesDe } from "@/lib/imagens";
import { tamanhos } from "@/lib/tamanhos";

const icones: Record<PontoId, LucideIcon> = { esgoto: Rat, parkour: Footprints, labirinto: Puzzle, bosque: TreePine };

export default function GuildHouseOutros() {
  return (
    <SecaoGuia id="outros" titulo="Outros pontos de interesse" introducao={outrosIntro}>
      <ul className="grid gap-6 md:grid-cols-2">
        {outrosPontos.map((ponto) => {
          const Icone = icones[ponto.id];
          return (
            <li key={ponto.id} className="flex flex-col">
              {dimensoesDe(ponto.imagem.src) ? (
                <Figura src={ponto.imagem.src} alt={ponto.imagem.alt} sizes={tamanhos.metade} proporcao="16 / 9" />
              ) : null}
              <div className="mt-4">
                <h3 className="flex items-center gap-2.5 font-bold text-texto">
                  <Icone aria-hidden size={20} strokeWidth={1.75} className="shrink-0 text-violeta" />
                  {ponto.titulo}
                </h3>
                <p className="mt-2 text-texto-2">{ponto.texto}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </SecaoGuia>
  );
}
