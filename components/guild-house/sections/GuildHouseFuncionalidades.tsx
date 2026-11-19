import { Moon, MessagesSquare, Store, Swords, type LucideIcon } from "lucide-react";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import { funcionalidades, funcionalidadesIntro, type Funcionalidade } from "@/components/guild-house/data/guild-house-content";

const icones: Record<Funcionalidade["id"], LucideIcon> = {
  npcs: Store,
  encontro: MessagesSquare,
  annihilation: Swords,
  afk: Moon,
};

export default function GuildHouseFuncionalidades() {
  return (
    <SecaoGuia id="funcionalidades" titulo="Funcionalidades e vantagens" introducao={funcionalidadesIntro}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {funcionalidades.map((item) => {
          const Icone = icones[item.id];
          return (
            <li key={item.id} className="rounded-md border border-linha bg-carvao px-5 py-4">
              <h3 className="flex items-center gap-2.5 font-bold text-texto">
                <Icone aria-hidden size={20} strokeWidth={1.75} className="shrink-0 text-violeta" />
                {item.titulo}
              </h3>
              <p className="mt-2 text-texto-2">
                <TextoComTermos texto={item.texto} />
              </p>
            </li>
          );
        })}
      </ul>
    </SecaoGuia>
  );
}
