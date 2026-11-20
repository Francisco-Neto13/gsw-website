import Destaque from "@/components/guias/Destaque";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { worldEventsDicas } from "@/components/world-events/data/world-events-content";

export default function WorldEventsExtrasSection() {
  return (
    <SecaoGuia id="dicas" titulo="Dicas">
      <div className="flex flex-col gap-3">
        {worldEventsDicas.map((dica) => (
          <Destaque key={dica} tipo="dica" titulo="Dica" texto={dica} />
        ))}
      </div>
    </SecaoGuia>
  );
}
