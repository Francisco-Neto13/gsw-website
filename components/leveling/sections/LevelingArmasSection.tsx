import Image from "next/image";
import Destaque from "@/components/guias/Destaque";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  armasIntro,
  iconeDoItem,
  levelingArmorNotes,
  levelingArmorPieces,
  levelingWeaponTip,
  levelingWeapons,
  linkDoItem,
} from "@/components/leveling/data/leveling-content";
import { dimensoesDe } from "@/lib/imagens";

const fotoDaClasse: Record<string, string> = {
  Assassin: "/leveling/assassin.webp",
  Archer: "/leveling/archer.webp",
  Mage: "/leveling/mage.webp",
  Warrior: "/leveling/warrior.webp",
  Shaman: "/leveling/shaman.webp",
};

/** Ícone dos acessórios da lista de armaduras (armadura não tem arquivo próprio). */
const iconeDoAcessorio: Record<string, string> = {
  Rarity: "ring.basicGem",
  Secret: "bracelet.basicIron",
  "Witherhead's Talisman": "necklace.basicCross",
  "Laen's Curiosity": "bracelet.water1",
  "Durum's Serenity": "necklace.earth1",
  "Rayshyroth's Knowledge": "bracelet.water2",
  Vanguard: "bracelet.multi2",
  "Altum Spatium": "necklace.multi2",
  Summa: "ring.thunder2",
  "Dragon's Tear": "ring.fire2",
  "Due Debts": "bracelet.basicIron",
};

/** Nome no guia oficial quando difere do texto da lista. */
const nomeNoGuia: Record<string, string> = { "Arakadicius' Body": "Arakadicus' Body", "Cosmic Set": "Altum Spatium" };

/** "Lvl 21: Arakadicius' Body (Infested Pit Reward Rain)" → nível, item, nome no guia e origem. */
function lerPeca(peca: string) {
  const [, nivel = "", resto = peca] = peca.match(/^Lvl\s+(\d+):\s*(.+)$/i) ?? [];
  // A origem é o último parêntese, desde que não seja a quantidade ("(2x)" fica no nome).
  const [, item = resto, origem] = resto.match(/^(.*?)\s+\((?!\d+x\))([^()]+)\)$/) ?? [];
  const base = item.replace(/\s*\(\d+x\)\s*/gi, "").split("+")[0].trim();
  return { nivel, item, origem, guia: nomeNoGuia[base] ?? base };
}

function IconeDoItem({ icone }: { icone?: string }) {
  const src = icone ? iconeDoItem(icone) : null;
  return src && dimensoesDe(src) ? (
    <Image src={src} alt="" width={24} height={24} className="h-6 w-6 shrink-0" />
  ) : (
    <span aria-hidden className="h-6 w-6 shrink-0" />
  );
}

function LinkDoItem({ nome, guia, icone }: { nome: string; guia: string; icone?: string }) {
  return (
    <a
      href={linkDoItem(guia)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-texto underline decoration-violeta/40 hover:decoration-violeta"
    >
      <IconeDoItem icone={icone} />
      {nome}
    </a>
  );
}

export default function LevelingArmasSection() {
  return (
    <>
      <SecaoGuia id="armas" titulo="Rota de armas" introducao={armasIntro}>
        <Destaque tipo="dica" titulo="Começando do zero" texto={levelingWeaponTip} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {levelingWeapons.map((rota) => (
            <div key={rota.className} className="overflow-x-auto rounded-md border border-linha">
              <table className="w-full border-collapse text-left text-apoio">
                <caption className="bg-carvao px-4 py-2.5 text-left">
                  <span className="flex items-center gap-3 font-bold text-texto">
                    <Image src={fotoDaClasse[rota.className]} alt="" width={28} height={32} className="h-8 w-auto" />
                    {rota.className}
                  </span>
                </caption>
                <tbody>
                  {rota.entries.map((entrada) => (
                    <tr key={entrada.level} className="border-t border-linha align-top">
                      <th scope="row" className="numeros w-28 whitespace-nowrap px-4 py-2 font-mono font-normal text-violeta">
                        {entrada.level.replace("Lvl ", "")}
                      </th>
                      <td className="px-4 py-2">
                        <ul className="flex flex-col gap-1">
                          {entrada.options.map((opcao) => (
                            <li key={opcao.name} className="flex flex-wrap items-center gap-x-2">
                              <LinkDoItem nome={opcao.name} guia={opcao.guideQuery} icone={opcao.iconName} />
                              {opcao.tag ? <span className="text-detalhe text-texto-3">{opcao.tag}</span> : null}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </SecaoGuia>

      <SecaoGuia id="armaduras" titulo="Armaduras e acessórios">
        <ul className="flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
          {levelingArmorNotes.map((nota) => (
            <li key={nota}>{nota}</li>
          ))}
        </ul>
        <div className="mt-6 overflow-x-auto rounded-md border border-linha">
          <table className="w-full min-w-[30rem] border-collapse text-left text-apoio">
            <caption className="sr-only">Peças de armadura e acessórios recomendados por nível</caption>
            <thead className="bg-carvao text-texto">
              <tr>
                <th scope="col" className="w-20 px-4 py-2.5 text-right font-bold">
                  Nível
                </th>
                <th scope="col" className="px-4 py-2.5 font-bold">
                  Peça
                </th>
                <th scope="col" className="px-4 py-2.5 font-bold">
                  Onde conseguir
                </th>
              </tr>
            </thead>
            <tbody>
              {levelingArmorPieces.map(lerPeca).map((peca) => (
                <tr key={`${peca.nivel}-${peca.item}`} className="border-t border-linha">
                  <td className="numeros px-4 py-1.5 text-right font-mono text-violeta">{peca.nivel}</td>
                  <th scope="row" className="px-4 py-1.5 font-normal">
                    <LinkDoItem nome={peca.item} guia={peca.guia} icone={iconeDoAcessorio[peca.guia]} />
                  </th>
                  <td className="px-4 py-1.5 text-texto-3">{peca.origem ?? "Trade Market ou drop"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SecaoGuia>
    </>
  );
}
