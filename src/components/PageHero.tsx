import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function CheckCoverageLink({ className = "" }: { className?: string }) {
  return (
    <Link to="/" hash="coverage" className={`inline-flex h-13 items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 ${className}`}>
      Check Coverage
    </Link>
  );
}

export function PageHero({ eyebrow, title, text, image, alt, actions }: { eyebrow: string; title: string; text: string; image: string; alt: string; actions: ReactNode }) {
  return (
    <section className="bg-sky/50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
        </div>
        <img src={image} alt={alt} width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
      </div>
    </section>
  );
}

export function SecondaryLink({ to, children }: { to: "/login" | "/contact" | "/"; children: ReactNode }) {
  return (
    <Link to={to} className="inline-flex items-center justify-center rounded-xl border-2 border-navy/15 bg-card px-6 py-3 text-base font-semibold text-navy hover:border-primary hover:text-primary">
      {children}
    </Link>
  );
}
