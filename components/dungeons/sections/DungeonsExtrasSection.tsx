import Destaque from "@/components/guias/Destaque";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { dungeonsDicas } from "@/components/dungeons/data/dungeons-content";

export default function DungeonsExtrasSection() {
  return (
    <SecaoGuia id="dicas" titulo="Dicas">
      <div className="flex flex-col gap-3">
        {dungeonsDicas.map((dica) => (
          <Destaque key={dica} tipo="dica" titulo="Dica" texto={dica} />
        ))}
      </div>
    </SecaoGuia>
  );
}
