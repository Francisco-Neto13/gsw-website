import { lootrunBeacons, lootrunBeaconsIntro } from "@/components/lootrun/data/lootrun-content";

function getBeaconEmoji(color: string) {
  switch (color) {
    case "Blue":
      return "🟦";
    case "Purple":
      return "🟪";
    case "Yellow":
      return "🟨";
    case "Pink":
      return "🟪";
    case "Aqua":
      return "🟦";
    case "Orange":
      return "🟧";
    case "Green":
      return "🟩";
    case "Dark Grey":
      return "⬛";
    case "White":
      return "⬜";
    case "Grey":
      return "◻️";
    case "Red":
      return "🟥";
    case "Crimson":
      return "🟥";
    case "Rainbow":
      return "🌈";
    default:
      return "🟧";
  }
}

export default function LootrunBeaconsSection() {
  return (
    <section className="bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {lootrunBeaconsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunBeaconsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunBeaconsIntro.description}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {lootrunBeacons.map((beacon) => (
            <article
              key={beacon.color}
              className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4 sm:px-7 sm:py-5"
            >
              <div className="mb-2 flex items-start gap-4">
                <span className="select-none text-2xl sm:text-3xl" aria-label={`Beacon ${beacon.color}`}>
                  {getBeaconEmoji(beacon.color)}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">{beacon.color}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400 sm:text-base">{beacon.effect}</p>
                </div>
              </div>

              {beacon.notes && beacon.notes.length > 0 ? (
                <div className="space-y-1.5 pl-10 sm:pl-12">
                  {beacon.notes.map((note) => (
                    <p key={note} className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                      - {note}
                    </p>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
