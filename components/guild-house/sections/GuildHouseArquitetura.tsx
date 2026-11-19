import { Eye, Hammer, Landmark, PenTool } from "lucide-react";
import SecaoGuia from "@/components/guias/SecaoGuia";
import RostoDoJogador from "@/components/shared/RostoDoJogador";
import { arquitetura, arquiteturaIntro, convite, segredos } from "@/components/guild-house/data/guild-house-content";

export default function GuildHouseArquitetura() {
  return (
    <SecaoGuia id="arquitetura" titulo="Arquitetura e design" introducao={arquiteturaIntro}>
      <p className="flex max-w-leitura items-start gap-2.5 text-texto-2">
        <Landmark aria-hidden size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-violeta" />
        <span>
          <span className="font-bold text-texto">Conceito: </span>
          {arquitetura.conceito}
        </span>
      </p>

      {/* Crédito de quem projetou e construiu, em destaque (a caixa de item fica só para a ficha do guia). */}
      <dl className="mt-6 grid rounded-md border border-violeta-borda/60 bg-carvao max-w-leitura gap-5 px-5 py-5 sm:grid-cols-[max-content_1fr] sm:px-6">
        <dt className="flex items-center gap-2 text-apoio text-texto-3">
          <PenTool aria-hidden size={18} strokeWidth={1.75} className="text-violeta" />
          Projeto
        </dt>
        <dd className="flex items-center gap-2.5 font-titulo text-titulo-4 text-texto">
          <RostoDoJogador nick={arquitetura.projeto.nick} uuid={arquitetura.projeto.uuid} tamanho={32} />
          {arquitetura.projeto.nick}
        </dd>
        <dt className="flex items-center gap-2 text-apoio text-texto-3">
          <Hammer aria-hidden size={18} strokeWidth={1.75} className="text-violeta" />
          Execução
        </dt>
        <dd>
          <ul className="flex flex-wrap gap-2">
            {arquitetura.execucao.map((jogador) => (
              <li
                key={jogador.nick}
                className="flex items-center gap-2 rounded border border-linha bg-poco py-1 pl-1 pr-2.5 text-texto"
              >
                <RostoDoJogador nick={jogador.nick} uuid={jogador.uuid} tamanho={22} />
                {jogador.nick}
              </li>
            ))}
          </ul>
        </dd>
      </dl>

      <p className="mt-8 max-w-leitura text-texto-2">{convite}</p>
      <p className="mt-4 flex max-w-leitura items-center gap-2.5 font-bold text-texto">
        <Eye aria-hidden size={20} strokeWidth={1.75} className="shrink-0 text-violeta" />
        {segredos}
      </p>
    </SecaoGuia>
  );
}
