import type { ReactNode } from "react";

type FichaGuiaProps = {
  titulo: string;
  tipo: string;
  linhas: { rotulo: string; valor: ReactNode }[];
  rodape?: ReactNode;
};

/** A caixa de item do guia: uma por página, com o que o leitor precisa saber antes de começar. */
export default function FichaGuia({ titulo, tipo, linhas, rodape }: FichaGuiaProps) {
  return (
    <aside aria-label={`Ficha do guia: ${titulo}`} className="caixa-item max-w-leitura px-5 py-4 sm:px-6 sm:py-5">
      <p className="font-titulo text-titulo-4 leading-tight text-violeta">{titulo}</p>
      <p className="mt-0.5 text-apoio italic text-texto-3">{tipo}</p>
      <dl className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-[max-content_1fr]">
        {linhas.map((linha) => (
          <div key={linha.rotulo} className="contents">
            <dt className="text-apoio text-texto-3">{linha.rotulo}</dt>
            <dd className="text-texto">{linha.valor}</dd>
          </div>
        ))}
      </dl>
      {rodape ? <div className="mt-4 border-t border-linha pt-3">{rodape}</div> : null}
    </aside>
  );
}
