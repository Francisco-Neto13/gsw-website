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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 transition-transform duration-200 will-change-transform hover:-translate-y-1 hover:border-gsw/40">
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-zinc-900 sm:mb-6">
        <Image
          src={imageSrc}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover object-top"
          unoptimized={imageSrc.startsWith("data:")}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      <div className="text-center">
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-gsw/80">
          {member.role}
        </span>
        <h3 className="mb-3 text-lg font-black italic tracking-tight text-white transition-colors duration-200 group-hover:text-gsw sm:mb-4 sm:text-xl">
          {member.name}
        </h3>
        {member.tags && member.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {member.tags.map((tag) => (
              <span
                key={`${member.name}-${tag}`}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300"
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
    <section id="membros" className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-32">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(113,22,173,0.03)_0%,transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-20">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-4">
            Elite de Wynn
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:mb-8 sm:text-5xl lg:text-7xl">
            Os <span className="text-gsw">Guardiões Principais</span>
          </h2>
          <p className="mx-auto max-w-2xl px-2 text-sm italic leading-relaxed text-zinc-400 sm:text-base">
            &ldquo;Não são apenas nomes em uma lista, são as lendas que escrevem as crônicas da
            GsW a cada batalha.&rdquo;
          </p>
        </div>

        {members.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-black/30 px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              Adicione os retratos em{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-gsw">public/members</code>{" "}
              e preencha a lista em{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-gsw">
                components/history/data/members.ts
              </code>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
