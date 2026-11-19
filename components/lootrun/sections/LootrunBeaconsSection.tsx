import Image from "next/image";
import CreditoImagem from "@/components/guias/CreditoImagem";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { dimensoesDe } from "@/lib/imagens";
import {
  lootrunBeacons,
  lootrunBeaconsIntro,
  lootrunBeaconsRegras,
  type LootrunBeacon,
} from "@/components/lootrun/data/lootrun-content";

/** Ícone do beacon no jogo (wiki, public/terceiros/): "Dark Grey" vira beacon-dark-gray.webp. */
const iconeDoBeacon = (beacon: LootrunBeacon) =>
  `/terceiros/wynncraft/beacon-${beacon.color.toLowerCase().replace(/grey/, "gray").replace(/\s+/g, "-")}.webp`;

/** Ícone do jogo; sem ele (pasta de terceiros removida), o marcador desenhado na cor do beacon. */
function MarcadorBeacon({ beacon }: { beacon: LootrunBeacon }) {
  const icone = iconeDoBeacon(beacon);
  if (dimensoesDe(icone)) {
    return <Image src={icone} alt="" width={32} height={32} sizes="32px" quality={90} className="h-8 w-8 shrink-0 [image-rendering:pixelated]" />;
  }
  return <MarcadorDesenhado beacon={beacon} />;
}

function MarcadorDesenhado({ beacon }: { beacon: LootrunBeacon }) {
  const fundo =
    beacon.hex === "arco-iris"
      ? "linear-gradient(135deg, #ff5555, #ffaa00, #ffff55, #55ff55, #55ffff, #5555ff, #ff55ff)"
      : beacon.hex;
  return (
    <span aria-hidden className="relative flex h-9 w-6 shrink-0 items-end justify-center">
      <span className="absolute bottom-0 h-3 w-6 rounded-sm border border-black/40 bg-[#3a3a3a]" />
      <span className="absolute bottom-3 h-6 w-2 rounded-t-sm opacity-90" style={{ background: fundo }} />
    </span>
  );
}

export default function LootrunBeaconsSection() {
  return (
    <SecaoGuia id="beacons" titulo="Beacons" introducao={lootrunBeaconsIntro.description}>
      <ul className="flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {lootrunBeaconsRegras.map((regra) => (
          <li key={regra}>{regra}</li>
        ))}
      </ul>

      <div className="mt-8 max-w-[60rem] overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[44rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Beacons da lootrun: efeito, valores por tier e rank que libera</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Beacon
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Efeito
              </th>
              {["T0", "T1", "T2", "T3"].map((tier) => (
                <th key={tier} scope="col" className="px-3 py-2.5 text-right font-bold">
                  {tier}
                </th>
              ))}
              <th scope="col" className="px-4 py-2.5 font-bold">
                Libera em
              </th>
            </tr>
          </thead>
          <tbody>
            {lootrunBeacons.map((beacon) => (
              <tr key={beacon.color} className="border-t border-linha align-top">
                <th scope="row" className="px-4 py-3 font-normal">
                  <span className="flex items-center gap-3">
                    <MarcadorBeacon beacon={beacon} />
                    <span className="font-medium text-texto">{beacon.color}</span>
                  </span>
                </th>
                <td className="px-4 py-3 text-texto-2">
                  {beacon.effect}
                  {beacon.usos ? <span className="block text-apoio text-texto-3">Limite: {beacon.usos}</span> : null}
                  {beacon.notes?.map((nota) => (
                    <span key={nota} className="mt-1 block text-apoio text-texto-3">
                      {nota}
                    </span>
                  ))}
                </td>
                {beacon.tiers.map((valor, indice) => (
                  <td key={indice} className="numeros whitespace-nowrap px-3 py-3 text-right font-mono text-texto">
                    {valor}
                  </td>
                ))}
                <td className="px-4 py-3 text-texto-2">{beacon.libera}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 max-w-leitura text-apoio text-texto-3">
        Valores conferidos na wiki da Wynncraft para a versão 2.2.4.{" "}
        {dimensoesDe(iconeDoBeacon(lootrunBeacons[0])) ? (
          <>
            Ícones dos beacons: <CreditoImagem src={iconeDoBeacon(lootrunBeacons[0])} />, da wiki.
          </>
        ) : (
          "A cor do Crimson é aproximada."
        )}
      </p>
    </SecaoGuia>
  );
}
