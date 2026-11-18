import GuiaEmConstrucao from "@/components/guias/GuiaEmConstrucao";

export default function FestivalsPage() {
  return (
    <GuiaEmConstrucao
      titulo="Festivais"
      introducao={[
        "Ao longo do ano, o Wynncraft recebe quatro festivais sazonais, cada um com eventos, moeda própria e recompensas por tempo limitado.",
        "Este guia está sendo escrito pela guilda e vai reunir o que fazer em cada um.",
      ]}
      topicos={[
        "Festival of the Heroes",
        "Festival of the Bonfire",
        "Festival of the Spirits",
        "Festival of the Blizzard",
        "Como aproveitar cada festival e o que vale a pena pegar",
      ]}
      fontes={[
        { rotulo: "Festivais, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Festival_(disambiguation)" },
      ]}
    />
  );
}
