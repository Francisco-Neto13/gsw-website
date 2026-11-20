import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { guildRaidAspectDistribution, guildRaidAvailableImage, guildRaidsDescription } from "@/components/raids/data/raids-content";
import { tamanhoDe } from "@/components/raids/data/raids-midia";

export default function RaidsDaGuilda() {
  return (
    <SecaoGuia id="raids-da-guilda" titulo="Raids da guilda" introducao={guildRaidsDescription}>
      <div className="grid items-center gap-8 md:grid-cols-[1fr_15rem]">
        <div className="max-w-leitura">
          <h3 className="text-titulo-5 font-bold text-texto">Como os aspects são repassados</h3>
          <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-texto-2 marker:text-violeta">
            {guildRaidAspectDistribution.map((regra) => (
              <li key={regra}>{regra}</li>
            ))}
          </ul>
        </div>
        <Figura
          src={guildRaidAvailableImage.src}
          alt={guildRaidAvailableImage.alt}
          legenda={guildRaidAvailableImage.caption}
          sizes="15rem"
          {...tamanhoDe(guildRaidAvailableImage.src)}
        />
      </div>
    </SecaoGuia>
  );
}
