import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Info, RotateCcw } from "lucide-react";
import { getOptionsFor, getTechnology } from "@/data/mockProducts";
import type { CoverageResult, TechnologyId } from "@/types";
import { TechIcon } from "@/components/products/TechIcon";

export function CoverageResults({ result, onReset }: { result: CoverageResult; onReset: () => void }) {
  const [open, setOpen] = useState<TechnologyId | null>(null);

  if (result.status === "not_found") {
    return (
      <div className="rounded-3xl border border-accent/40 bg-accent/10 p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-navy">We couldn't confirm coverage for this address yet.</h3>
        <p className="mt-2 max-w-2xl text-base text-muted-foreground">
          Check that your address is correct, try entering your suburb or postal code, or contact our team for assistance.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button onClick={onReset} className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Try Another Address
          </button>
          <Link to="/contact" className="inline-flex h-12 items-center rounded-xl border border-navy/20 bg-card px-5 font-semibold text-navy hover:bg-sky">
            Contact Us
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-navy">Internet options for {result.address}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Info className="h-4 w-4" aria-hidden="true" /> Demonstration result · {result.areaLabel}. Not a confirmed coverage check.
          </p>
        </div>
        <button onClick={onReset} className="inline-flex h-11 items-center gap-2 rounded-xl border border-border px-4 font-semibold text-navy hover:bg-sky">
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Search again
        </button>
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {result.available.map((id) => {
          const t = getTechnology(id);
          const isOpen = open === id;
          return (
            <li key={id} className={`flex flex-col rounded-2xl border p-5 transition ${isOpen ? "border-primary bg-sky" : "border-border bg-background"}`}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <TechIcon id={id} className="h-5 w-5" />
              </span>
              <h4 className="mt-4 font-display text-lg font-semibold text-navy">{t.name}</h4>
              <p className="mt-1 flex items-center gap-1 text-sm font-medium text-success">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Available in demo area
              </p>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.description}</p>
              <button
                onClick={() => setOpen(isOpen ? null : id)}
                aria-expanded={isOpen}
                aria-controls="product-options"
                className="mt-4 h-11 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {isOpen ? "Hide Options" : "View Options"}
              </button>
            </li>
          );
        })}
      </ul>

      {open && (
        <section id="product-options" className="mt-6 rounded-2xl border border-primary/30 bg-sky/60 p-5 sm:p-6" aria-label={`${getTechnology(open).name} options`}>
          <h4 className="font-display text-xl font-semibold text-navy">{getTechnology(open).name} options</h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {getOptionsFor(open).map((p) => (
              <div key={p.id} className="rounded-xl bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{p.suitableFor}</p>
                <p className="mt-1 font-semibold text-navy">{p.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Package details and pricing will appear here once live product data is connected.{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">Log in or sign up</Link> to continue.
          </p>
        </section>
      )}

      {result.unavailable.length > 0 && (
        <div className="mt-6 border-t border-border pt-5">
          <p className="text-sm font-medium text-muted-foreground">Not currently available in this demonstration area</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {result.unavailable.map((id) => (
              <li key={id} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                <TechIcon id={id} className="h-3.5 w-3.5" /> {getTechnology(id).name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
