import { Building2, Clock, Gamepad2, Gem, Package, ScrollText } from "lucide-react";
import Destaque from "@/components/guias/Destaque";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import { avisoEquipamento, estruturaDoFestival, estruturaIntro } from "@/components/festivals/data/festivals-content";

const icones = { duracao: Clock, cidade: Building2, missao: ScrollText, minigame: Gamepad2, recompensas: Gem, caixas: Package };

export default function FestivaisEstrutura() {
  return (
    <SecaoGuia id="estrutura" titulo="O que esperar de um festival" introducao={estruturaIntro}>
      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {estruturaDoFestival.map((item) => {
          const Icone = icones[item.icone as keyof typeof icones];
          return (
            <li key={item.titulo} className="rounded-md border border-linha bg-carvao px-5 py-4">
              <p className="flex items-center gap-2.5 font-bold text-texto">
                <Icone aria-hidden size={20} strokeWidth={1.75} className="shrink-0 text-violeta" />
                {item.titulo}
              </p>
              <p className="mt-2 text-texto-2">
                <TextoComTermos texto={item.texto} />
              </p>
            </li>
          );
        })}
      </ul>
      <Destaque tipo="dica" titulo="Armadura com moeda do evento" texto={avisoEquipamento} className="mt-6" />
    </SecaoGuia>
  );
}
