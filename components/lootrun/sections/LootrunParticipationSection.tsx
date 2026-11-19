import Coordenada from "@/components/guias/Coordenada";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { lootrunParticipation } from "@/components/lootrun/data/lootrun-content";
import MidiasLootrun from "@/components/lootrun/sections/MidiasLootrun";

export default function LootrunParticipationSection() {
  const [primeiro, ...resto] = lootrunParticipation.paragraphs;
  return (
    <SecaoGuia id="participar" titulo="Como participar" introducao={primeiro}>
      {resto.map((paragrafo) => (
        <p key={paragrafo} className="max-w-leitura text-texto-2">
          {paragrafo}
        </p>
      ))}
      <p className="mt-3 max-w-leitura text-texto-2">
        Onde fica: <Coordenada valor={lootrunParticipation.location} />. {lootrunParticipation.npcNote}
      </p>
      <MidiasLootrun itens={lootrunParticipation.media} className="mt-6" />
    </SecaoGuia>
  );
}
