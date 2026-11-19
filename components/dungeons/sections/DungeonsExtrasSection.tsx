import Destaque from "@/components/guias/Destaque";
import DicaGsw from "@/components/guias/DicaGsw";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { dicaDaGuilda, dungeonsDicas } from "@/components/dungeons/data/dungeons-content";

export default function DungeonsExtrasSection() {
  return (
    <SecaoGuia id="dicas" titulo="Dicas">
      <div className="flex flex-col gap-3">
        {dungeonsDicas.map((dica) => (
          <Destaque key={dica} tipo="dica" titulo="Dica" texto={dica} />
        ))}
      </div>
      <div className="mt-6">
        <DicaGsw titulo="Dica da GsW">{dicaDaGuilda}</DicaGsw>
      </div>
    </SecaoGuia>
  );
}
