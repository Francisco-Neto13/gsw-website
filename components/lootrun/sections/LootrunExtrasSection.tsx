import SecaoGuia from "@/components/guias/SecaoGuia";
import { lootrunExtraSupportMedia, lootrunExtras, lootrunExtrasIntro } from "@/components/lootrun/data/lootrun-content";
import MidiasLootrun from "@/components/lootrun/sections/MidiasLootrun";

export default function LootrunExtrasSection() {
  return (
    <SecaoGuia id="dicas" titulo="Antes de começar" introducao={lootrunExtrasIntro}>
      <ul className="flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {lootrunExtras.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <MidiasLootrun itens={lootrunExtraSupportMedia} className="mt-8" />
    </SecaoGuia>
  );
}
