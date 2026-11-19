import GuiaLayout from "@/components/guias/GuiaLayout";

/** Página da Comunidade no formato de guia: índice "Nesta página", sem a sidebar dos guias do jogo. */
export default function LayoutDaGuildHouse({ children }: { children: React.ReactNode }) {
  return <GuiaLayout>{children}</GuiaLayout>;
}
