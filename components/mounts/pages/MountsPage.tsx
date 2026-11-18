import GuiaEmConstrucao from "@/components/guias/GuiaEmConstrucao";

export default function MountsPage() {
  return (
    <GuiaEmConstrucao
      titulo="Montarias"
      introducao={[
        "A atualização 2.2 trocou os cavalos por um sistema de montarias, com tipos diferentes, atributos que evoluem e cruzamento entre elas.",
        "Este guia está sendo escrito pela guilda, com prints próprios de cada etapa.",
      ]}
      topicos={[
        "Os tipos de montaria e como liberar cada um",
        "Onde comprar e onde guardar as montarias",
        "Atributos, comida e treino",
        "Cruzamento entre montarias",
        "Dicas da GsW para escolher e evoluir a sua",
      ]}
      fontes={[{ rotulo: "Mounts, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Mounts" }]}
    />
  );
}
