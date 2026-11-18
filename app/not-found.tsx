import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Página não encontrada" };

export default function NaoEncontrada() {
  return (
    <div className="mx-auto flex max-w-[44rem] flex-col items-start px-4 py-24 sm:px-6">
      <div className="caixa-item w-full px-6 py-6">
        <p className="font-titulo text-titulo-4 text-violeta">Página não encontrada</p>
        <p className="mt-0.5 italic text-texto-3">Erro 404</p>
        <p className="mt-4 text-texto-2">
          Esse endereço não existe ou mudou de lugar. Os guias agora ficam em <span className="font-mono">/guias</span>;
          links antigos como <span className="font-mono">/raids</span> levam direto para o guia novo.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/guias" className="flex h-11 items-center gap-2 rounded-md bg-gsw px-4 font-medium text-white hover:bg-[#7f1bc2]">
          Ver todos os guias
          <ArrowRight aria-hidden size={16} strokeWidth={1.75} />
        </Link>
        <Link href="/" className="flex h-11 items-center rounded-md border border-linha-forte px-4 text-texto hover:border-violeta-borda">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
