import FimDoGuia from "@/components/guias/FimDoGuia";
import { setores } from "@/components/guild-house/data/guild-house-content";
import GuildHouseAbertura from "@/components/guild-house/sections/GuildHouseAbertura";
import GuildHouseAcesso from "@/components/guild-house/sections/GuildHouseAcesso";
import GuildHouseArquitetura from "@/components/guild-house/sections/GuildHouseArquitetura";
import GuildHouseFuncionalidades from "@/components/guild-house/sections/GuildHouseFuncionalidades";
import GuildHouseMapa from "@/components/guild-house/sections/GuildHouseMapa";
import GuildHouseOutros from "@/components/guild-house/sections/GuildHouseOutros";
import GuildHouseSetor from "@/components/guild-house/sections/GuildHouseSetor";

/** Guia da Guild House, a sede da GsW, no modelo de Raids. */
export default function GuildHousePage() {
  return (
    <article>
      <GuildHouseAbertura />
      <GuildHouseFuncionalidades />
      <GuildHouseAcesso />
      <GuildHouseMapa />
      {setores.map((setor) => (
        <GuildHouseSetor key={setor.id} setor={setor} />
      ))}
      <GuildHouseOutros />
      <GuildHouseArquitetura />
      <FimDoGuia slug="guild-house" fontes={[]} introducao="Guia e prints da GsW, feitos na nossa ilha." />
    </article>
  );
}
