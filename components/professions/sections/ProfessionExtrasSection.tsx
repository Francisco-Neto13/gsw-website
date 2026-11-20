import Destaque from "@/components/guias/Destaque";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { professionsDicas } from "@/components/professions/data/professions-content";

export default function ProfessionExtrasSection() {
  return (
    <SecaoGuia id="dicas" titulo="Dicas">
      <div className="flex flex-col gap-3">
        {professionsDicas.map((dica) => (
          <Destaque key={dica} tipo="dica" titulo="Dica" texto={dica} />
        ))}
      </div>
    </SecaoGuia>
  );
}
