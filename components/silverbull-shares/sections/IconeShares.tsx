import {
  CalendarClock,
  Gauge,
  Gem,
  Gift,
  Globe,
  KeyRound,
  Megaphone,
  PackageOpen,
  PartyPopper,
  PenLine,
  Pickaxe,
  RefreshCcw,
  RotateCcw,
  ScrollText,
  Sprout,
  Swords,
  type LucideIcon,
} from "lucide-react";

// Ícones de bombas e tokens (no lugar dos emojis, que viravam quadrados em alguns sistemas).
const icones: Record<string, LucideIcon> = {
  espadas: Swords,
  picareta: Pickaxe,
  velocidade: Gauge,
  grito: Megaphone,
  gema: Gem,
  presente: Gift,
  chave: KeyRound,
  bau: PackageOpen,
  mundo: Globe,
  pergaminho: ScrollText,
  ingrediente: Sprout,
  festa: PartyPopper,
  rerolar: RefreshCcw,
  resetar: RotateCcw,
  renomear: PenLine,
  recarregar: CalendarClock,
};

export default function IconeShares({ nome }: { nome: string }) {
  const Icone = icones[nome] ?? Gem;
  return <Icone aria-hidden size={22} strokeWidth={1.75} className="shrink-0 text-violeta" />;
}
