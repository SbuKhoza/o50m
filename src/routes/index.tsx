import { useEffect } from "react";
import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import hero from "@/assets/hero-community.png.asset.json";
import { CoverageChecker, COVERAGE_INPUT_ID } from "@/components/coverage/CoverageChecker";
import { ProductIntroGrid } from "@/components/products/ProductIntroGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O50M Broadband — Check internet coverage at your address" },
      { name: "description", content: "Reliable internet right where you live. Check which O50M Fibre, 5G, Hotspot and LTE options are available at your address." },
      { property: "og:title", content: "O50M Broadband — Reliable internet, right where you live" },
      { property: "og:description", content: "Check which O50M connections are available at your home or business address." },
    ],
  }),
  component: Index,
});

function focusCoverage() {
  document.getElementById("coverage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => document.getElementById(COVERAGE_INPUT_ID)?.focus({ preventScroll: true }), 400);
}

function Index() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash === "coverage") focusCoverage();
  }, [hash]);

  return (
    <>
      <section className="bg-gradient-to-b from-sky/70 to-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 pt-10 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:pt-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">O50M Broadband</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              Reliable internet. <span className="text-primary">Right where you live.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Discover fast, dependable internet options for your home or business. Check your address to find out which O50M connections are available in your area.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={focusCoverage} className="rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                Check Coverage
              </button>
              <Link to="/login" className="rounded-xl border-2 border-navy/15 bg-card px-7 py-3 text-base font-semibold text-navy hover:border-primary hover:text-primary">
                Login / Sign Up
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={hero.url}
              alt="A township neighbourhood at sunrise where a young woman uses her phone and friends share a laptop outside their homes"
              className="aspect-[4/3] w-full rounded-3xl object-cover object-[18%_center] shadow-soft lg:aspect-[5/4]"
              width={1920}
              height={728}
            />
            <div className="absolute -bottom-4 left-4 rounded-2xl bg-card px-4 py-3 shadow-soft sm:left-6">
              <p className="text-sm font-semibold text-navy">Fibre · 5G · Hotspot · LTE</p>
            </div>
          </div>
        </div>
        <div id="coverage" className="mx-auto max-w-5xl scroll-mt-24 px-4 pb-16 pt-8 sm:px-6">
          <CoverageChecker />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Find the right connection for you.</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Different needs call for different connections. Explore our internet options and discover what suits your home or business.
          </p>
        </div>
        <div className="mt-10">
          <ProductIntroGrid />
        </div>
      </section>
    </>
  );
}
