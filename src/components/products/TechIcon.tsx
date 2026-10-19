import { Cable, RadioTower, Wifi, Signal } from "lucide-react";
import type { TechnologyId } from "@/types";

const ICONS = { fibre: Cable, "5g": RadioTower, hotspot: Wifi, lte: Signal } as const;

export function TechIcon({ id, className }: { id: TechnologyId; className?: string }) {
  const Icon = ICONS[id];
  return <Icon className={className} aria-hidden="true" />;
}
