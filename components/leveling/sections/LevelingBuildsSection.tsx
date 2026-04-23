import Image from "next/image";
import {
  buildLevelingItemGuideIconUrl,
  buildLevelingItemGuideLink,
  levelingAbilityTrees,
  levelingArmorNotes,
  levelingArmorPieces,
  levelingBuildHighlights,
  levelingBuildsIntro,
  levelingItemGuideUrl,
  levelingWeaponTip,
  levelingWeapons,
} from "@/components/leveling/data/leveling-content";

const classShowcaseImages: Record<string, string> = {
  Assassin: "/leveling/assassin.webp",
  Archer: "/leveling/archer.webp",
  Mage: "/leveling/mage.webp",
  Warrior: "/leveling/warrior.webp",
  Shaman: "/leveling/shaman.webp",
};
const localGenericItemIconUrl = "/icon.webp";

type ParsedArmorPiece = {
  level: number;
  item: string;
  guideQuery: string;
  iconName: string;
  source?: string;
};

const armorGuideQueryOverrides: Record<string, string> = {
  "Arakadicius' Body": "Arakadicus' Body",
  "Cosmic Set": "Altum Spatium",
};

const armorIconByGuideQuery: Record<string, string> = {
  Tosach: "helmet.pale_leather",
  Rarity: "ring.basicGem",
  Secret: "bracelet.basicIron",
  "Guard's Garment": "chestplate.pale_leather",
  Heliophilia: "helmet.pale_leather",
  "Silken Slippers": "boots.pale_leather",
  Opulenity: "leggings.pale_leather",
  "Witherhead's Talisman": "necklace.basicCross",
  "Arakadicus' Body": "chestplate.gold",
  "Sound of Silence": "helmet.gold",
  "Regal Chaps": "leggings.gold",
  "Laen's Curiosity": "bracelet.water1",
  "Durum's Serenity": "necklace.earth1",
  Prologue: "boots.gold",
  Yume: "helmet.gold",
  "Chained Pixels": "leggings.gold",
  "Bob's Battle Chestplate": "chestplate.chainmail",
  "Bridge of the Divide": "leggings.chainmail",
  Venison: "helmet.chainmail",
  "Matryoshka Shell": "chestplate.pale_chainmail",
  "Greaves of Honor": "leggings.chainmail",
  "Bad Wolf": "boots.chainmail",
  "Rayshyroth's Knowledge": "bracelet.water2",
  "The Jingling Jester": "chestplate.iron",
  Papyrus: "chestplate.iron",
  Vanguard: "bracelet.multi2",
  "Gale's Sight": "helmet.diamond",
  Ringlets: "leggings.iron",
  "Altum Spatium": "necklace.multi2",
  Summa: "ring.thunder2",
  "Dragon's Tear": "ring.fire2",
  "Due Debts": "bracelet.basicIron",
};

function normalizeArmorGuideQuery(itemName: string) {
  return itemName.replace(/\s*\(\d+x\)\s*/gi, "").split("+")[0].trim();
}

function parseArmorPiece(piece: string): ParsedArmorPiece {
  const match = piece.match(/^Lvl\s+(\d+):\s*(.+)$/i);
  if (!match) {
    const fallbackQuery = piece.trim();
    return {
      level: 0,
      item: piece,
      guideQuery: fallbackQuery,
      iconName: armorIconByGuideQuery[fallbackQuery] ?? "helmet.pale_leather",
    };
  }

  const level = Number(match[1]);
  const content = match[2].trim();
  const sourceMatch = content.match(/^(.*)\s+\(([^()]+)\)$/);

  if (!sourceMatch) {
    const normalizedQuery = normalizeArmorGuideQuery(content);
    const guideQuery = armorGuideQueryOverrides[normalizedQuery] ?? normalizedQuery;
    return {
      level,
      item: content,
      guideQuery,
      iconName: armorIconByGuideQuery[guideQuery] ?? "helmet.pale_leather",
    };
  }

  const item = sourceMatch[1].trim();
  const normalizedQuery = normalizeArmorGuideQuery(item);
  const guideQuery = armorGuideQueryOverrides[normalizedQuery] ?? normalizedQuery;

  return {
    level,
    item,
    guideQuery,
    iconName: armorIconByGuideQuery[guideQuery] ?? "helmet.pale_leather",
    source: sourceMatch[2].trim(),
  };
}

function getItemIconBackground(iconName: string) {
  const normalized = iconName.toLowerCase();
  const usesArmorSprite =
    normalized.startsWith("helmet.") ||
    normalized.startsWith("chestplate.") ||
    normalized.startsWith("leggings.") ||
    normalized.startsWith("boots.");

  if (usesArmorSprite) {
    return {
      backgroundImage: `url("${localGenericItemIconUrl}")`,
      imageRendering: "auto" as const,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }

  const primary = buildLevelingItemGuideIconUrl(iconName);
  return {
    backgroundImage: `url("${primary}")`,
    imageRendering: "pixelated" as const,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
}

export default function LevelingBuildsSection() {
  const parsedArmorPieces = levelingArmorPieces.map(parseArmorPiece);
  const armorLevels = parsedArmorPieces.map((piece) => piece.level).filter((level) => level > 0);
  const armorMinLevel = armorLevels.length > 0 ? Math.min(...armorLevels) : 0;
  const armorMaxLevel = armorLevels.length > 0 ? Math.max(...armorLevels) : 0;

  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {levelingBuildsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {levelingBuildsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {levelingBuildsIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {levelingBuildHighlights.map((item) => (
            <article key={item.title} className="leveling-card-soft rounded-2xl border border-white/10 bg-zinc-900/20 p-5 sm:p-6">
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-6">
          {levelingAbilityTrees.map((tree, treeIndex) => (
            <article
              key={tree.className}
              className={`leveling-card-medium group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30 ${
                treeIndex % 2 === 0 ? "leveling-tilt-left" : "leveling-tilt-right"
              }`}
            >
              <div className="border-b border-white/5 px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-4">
                  <Image
                    src={tree.icon}
                    alt={`Icone ${tree.archetype}`}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold tracking-tight text-white sm:text-2xl">{tree.className}</h3>
                    <p className="text-xs font-semibold text-gsw sm:text-sm">{tree.archetype}</p>
                  </div>
                  <a
                    href={tree.treeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center rounded-md border border-gsw/40 bg-gsw/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gsw transition-colors hover:border-gsw hover:text-white"
                  >
                    Ver Tree
                  </a>
                </div>
              </div>

              <ul className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                {tree.notes.map((note) => (
                  <li
                    key={`${tree.className}-${note}`}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gsw/30 bg-gsw/5 p-5 sm:mt-10 sm:p-6">
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">{levelingWeaponTip}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Referencia oficial:
            {" "}
            <a
              href={levelingItemGuideUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gsw transition-colors hover:text-white"
            >
              wynncraft.com/help/item-guide
            </a>
          </p>
        </div>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
          {levelingWeapons.map((weapon, weaponIndex) => (
            <article
              key={weapon.className}
              className={`leveling-card-medium group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30 ${
                weaponIndex % 2 === 0 ? "leveling-tilt-right" : "leveling-tilt-left"
              }`}
            >
              <div className="border-b border-white/5 bg-zinc-900/40 px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={classShowcaseImages[weapon.className]}
                    alt={`Classe ${weapon.className}`}
                    width={56}
                    height={56}
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                  />
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-white sm:text-2xl">{weapon.className}</h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gsw/80">
                      {weapon.entries.length} recomendacoes
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                {weapon.entries.map((entry) => (
                  <li
                    key={`${weapon.className}-${entry.level}`}
                    className="leveling-card-soft rounded-xl border border-white/10 bg-black/30 p-3 text-sm leading-relaxed sm:p-4 sm:text-base"
                  >
                    <span className="mb-2 inline-flex rounded-md border border-gsw/30 bg-gsw/10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gsw">
                      {entry.level}
                    </span>
                    <div className="space-y-1.5">
                      {entry.options.map((option, index) => (
                        <div key={`${weapon.className}-${entry.level}-${option.guideQuery}`} className="space-y-1.5">
                          <a
                            href={buildLevelingItemGuideLink(option.guideQuery)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-zinc-200 transition-colors hover:text-white"
                          >
                            <span
                              aria-hidden
                              className="inline-block h-[18px] w-[18px] shrink-0 self-center rounded-[2px] bg-center bg-no-repeat"
                              style={getItemIconBackground(option.iconName)}
                            />
                            <span>{option.name}</span>
                            {option.tag ? (
                              <span className="text-xs text-gsw">
                                {option.tag}
                              </span>
                            ) : null}
                          </a>
                          {index < entry.options.length - 1 ? (
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                              ou
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="leveling-panel-3d mt-8 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 sm:mt-10">
          <div className="border-b border-white/5 bg-zinc-900/40 px-5 py-4 sm:px-7 sm:py-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-bold tracking-tight text-white sm:text-2xl">Armaduras</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-md border border-gsw/30 bg-gsw/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gsw">
                  {parsedArmorPieces.length} pecas
                </span>
                <span className="inline-flex rounded-md border border-white/15 bg-black/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-300">
                  Lvl {armorMinLevel} - {armorMaxLevel}
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {levelingArmorNotes.map((note) => (
                <p key={note} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {note}
                </p>
              ))}
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-3 px-5 py-5 sm:px-7 sm:py-6 lg:grid-cols-2">
            {parsedArmorPieces.map((piece) => (
              <li key={`${piece.level}-${piece.item}`} className="leveling-card-soft rounded-xl border border-white/10 bg-black/30 p-3 sm:p-4">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-[24px] items-center rounded-md border border-gsw/30 bg-gsw/10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gsw">
                    Lvl {piece.level}
                  </span>
                  <a
                    href={buildLevelingItemGuideLink(piece.guideQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-0 items-center gap-2 text-sm font-medium leading-relaxed text-zinc-200 transition-colors hover:text-white sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="inline-block h-[18px] w-[18px] shrink-0 rounded-[2px] bg-center bg-no-repeat"
                      style={getItemIconBackground(piece.iconName)}
                    />
                    <span className="truncate">{piece.item}</span>
                  </a>
                </div>
                {piece.source ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-500 sm:text-sm">{piece.source}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
