import Image from "next/image";
import type { ReactNode } from "react";

/** Opinião ou regra da guilda, separada dos fatos do jogo. Painel carvão: a caixa de item fica só para consulta. */
export default function DicaGsw({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <aside className="flex max-w-[60ch] gap-4 rounded-md border border-linha bg-carvao px-5 py-4">
      <Image src="/icon.webp" alt="" width={28} height={28} className="mt-1 h-7 w-7 shrink-0 rounded-full" />
      <div>
        <p className="font-titulo text-xl leading-tight text-texto">{titulo}</p>
        <div className="mt-2 text-texto-2">{children}</div>
      </div>
    </aside>
  );
}
