import Destaque from "@/components/guias/Destaque";
import DicaGsw from "@/components/guias/DicaGsw";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { dicaDaGuilda, professionsDicas } from "@/components/professions/data/professions-content";

export default function ProfessionExtrasSection() {
  return (
    <SecaoGuia id="dicas" titulo="Dicas">
      <div className="flex flex-col gap-3">
        {professionsDicas.map((dica) => (
          <Destaque key={dica} tipo="dica" titulo="Dica" texto={dica} />
        ))}
      </div>
      <div className="mt-6">
        <DicaGsw titulo="Dica da GsW">{dicaDaGuilda}</DicaGsw>
      </div>
    </SecaoGuia>
  );
}
