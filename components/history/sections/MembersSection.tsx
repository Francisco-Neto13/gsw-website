import Image from "next/image";
import { memo } from "react";
import { members, type Member } from "@/components/history/data/members";

function normalizeImageSrc(src: string) {
  if (!src) {
    return "";
  }

  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("blob:") ||
    src.startsWith("/")
  ) {
    return src;
  }

  return `/${src}`;
}

function createFallbackAvatar(name: string) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "GS";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <rect width="200" height="200" rx="24" fill="#7116ad" />
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff">
        ${initials}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const MemberCard = memo(function MemberCard({ member }: { member: Member }) {
  const fallbackSrc = createFallbackAvatar(member.name);
  const imageSrc = member.img?.trim() ? normalizeImageSrc(member.img.trim()) : fallbackSrc;

  return (
    <div className="rounded-md border border-linha bg-carvao p-3">
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded bg-elevada">
        <Image quality={90}
          src={imageSrc}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 10rem"
          className="object-cover object-top"
          unoptimized={imageSrc.startsWith("data:")}
        />
      </div>
      <div>
        <h3 className="text-titulo-4 font-bold text-texto">{member.name}</h3>
        <p className="text-apoio text-texto-3">{member.role}</p>
        {member.tags && member.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {member.tags.map((tag) => (
              <span
                key={`${member.name}-${tag}`}
                className="rounded border border-linha px-1.5 py-px text-detalhe text-texto-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default function MembersSection() {
  return (
    <section id="membros" className="border-t border-linha py-16 sm:py-20">
      <div className="casca grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="mb-10 max-w-leitura lg:sticky lg:top-24 lg:mb-0 lg:self-start">
          <h2 className="text-titulo-2 text-texto">
            Os Guardiões Principais
          </h2>
          <p className="mt-3 text-texto-2">
            &ldquo;Não são apenas nomes em uma lista, são as lendas que escrevem as crônicas da
            GsW a cada batalha.&rdquo;
          </p>
        </div>
        <div className="min-w-0">

        {members.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 2xl:grid-cols-7">
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-linha bg-carvao px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="text-texto-2">
              Adicione os retratos em{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-detalhe text-violeta">public/members</code>{" "}
              e preencha a lista em{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-detalhe text-violeta">
                components/history/data/members.ts
              </code>
              .
            </p>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
