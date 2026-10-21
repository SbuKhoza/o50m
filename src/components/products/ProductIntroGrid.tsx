import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TECHNOLOGIES } from "@/data/mockProducts";
import type { TechnologyId } from "@/types";
import { TechIcon } from "./TechIcon";

const LEARN: Record<TechnologyId, "/for-your-home" | "/for-your-business" | "/hotspot"> = {
  fibre: "/for-your-home",
  "5g": "/for-your-home",
  hotspot: "/hotspot",
  lte: "/for-your-home",
};

export function ProductIntroGrid({ only }: { only?: TechnologyId[] }) {
  const list = only ? TECHNOLOGIES.filter((t) => only.includes(t.id)) : TECHNOLOGIES;
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
      {list.map((t) => (
        <article key={t.id} className="group rounded-xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky text-primary">
            <TechIcon id={t.id} className="h-5 w-5" />
          </span>
          <h3 className="mt-3 font-display text-base font-semibold text-navy">{t.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
          <Link to={LEARN[t.id]} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            Learn more <span className="sr-only">about {t.name}</span>
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  );
}
