import {
  membershipBenefits,
  membershipImage,
  membershipIntro,
  membershipSummary,
} from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullMembershipSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
            {membershipIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {membershipIntro.description}
          </p>
        </div>

        <div className="mb-6 mx-auto max-w-3xl">
          <SilverbullImageSlot label={membershipImage.label} src={membershipImage.src} alt={membershipImage.alt} />
        </div>

        <div className="rounded-md border border-linha bg-carvao p-5 sm:p-6">
          <h3 className="text-lg font-bold tracking-tight text-texto sm:text-xl">Sobre a assinatura</h3>
          <div className="mt-4 space-y-3">
            {membershipSummary.map((line) => (
              <p key={line} className="text-texto-2">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {membershipBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-md border border-linha bg-carvao p-4 sm:p-5">
              <div className="mb-2 flex items-center gap-2 border-b border-linha pb-2">
                <span className="text-xs font-bold tracking-[0.25em] text-violeta/80">{benefit.icon}</span>
                <h3 className="text-sm font-bold tracking-tight text-texto sm:text-base">{benefit.title}</h3>
              </div>
              <p className="text-[0.95rem] text-texto-2">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
