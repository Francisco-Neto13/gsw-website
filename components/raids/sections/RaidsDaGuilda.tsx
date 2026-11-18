import DicaGsw from "@/components/guias/DicaGsw";
import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { guildRaidAspectDistribution, guildRaidAvailableImage, guildRaidsDescription } from "@/components/raids/data/raids-content";
import { tamanhoDe } from "@/components/raids/data/raids-midia";

export default function RaidsDaGuilda() {
  return (
    <SecaoGuia id="raids-da-guilda" titulo="Raids da guilda" introducao={guildRaidsDescription}>
      <div className="grid max-w-[56rem] items-start gap-8 md:grid-cols-[1fr_15rem]">
        <DicaGsw titulo="Como a GsW distribui os aspects">
          <p>Os aspects que ficam com a guilda são repassados assim:</p>
          <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 marker:text-violeta">
            {guildRaidAspectDistribution.map((regra) => (
              <li key={regra}>{regra}</li>
            ))}
          </ul>
        </DicaGsw>
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
