import {
  membershipBenefits,
  membershipImage,
  membershipIntro,
  membershipSummary,
} from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullMembershipSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {membershipIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {membershipIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {membershipIntro.description}
          </p>
        </div>

        <div className="mb-6 mx-auto max-w-3xl">
          <SilverbullImageSlot label={membershipImage.label} src={membershipImage.src} alt={membershipImage.alt} />
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/20 p-5 sm:p-6">
          <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">Sobre a assinatura</h3>
          <div className="mt-4 space-y-3">
            {membershipSummary.map((line) => (
              <p key={line} className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {membershipBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-5">
              <div className="mb-2 flex items-center gap-2 border-b border-white/5 pb-2">
                <span className="text-xs font-bold tracking-[0.25em] text-gsw/80">{benefit.icon}</span>
                <h3 className="text-sm font-bold tracking-tight text-white sm:text-base">{benefit.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
