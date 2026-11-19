import Image from "next/image";

/** Ícone pequeno da profissão, ao lado do nome nas tabelas. */
export default function IconeProfissao({ src }: { src: string }) {
  return (
    <span className="relative inline-block h-7 w-7 shrink-0 overflow-hidden rounded-md border border-linha bg-poco">
      <Image src={src} alt="" fill sizes="28px" className="object-contain p-0.5" />
    </span>
  );
}
