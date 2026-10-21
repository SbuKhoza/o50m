import { useEffect } from "react";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import hero from "@/assets/hero.png";
import { CoverageChecker, COVERAGE_INPUT_ID } from "@/components/coverage/CoverageChecker";
import { ProductIntroGrid } from "@/components/products/ProductIntroGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O50M Broadband — Check internet coverage at your address" },
      { name: "description", content: "Reliable internet right where you live. Check which O50M Fibre, 5G, Hotspot and LTE options are available at your address." },
      { property: "og:title", content: "O50M Broadband — Reliable internet, right where you live" },
      { property: "og:description", content: "Check which O50M connections are available at your home or business address." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <section className="relative isolate overflow-hidden bg-navy">
        {/* Background image: fills the whole section and sits behind all content */}
        <img
          src={hero}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        {/* Dark gradient so the white text stays readable over the photo */}
        <div className="hero-shade absolute inset-0 -z-10" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pt-14 lg:pb-14 lg:pt-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-hero-foreground sm:text-5xl lg:text-6xl">
              O50M Broadband
            </h1>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-brand sm:text-3xl">Reliable internet. Right where you live.</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-hero-foreground/90">
              Discover fast, dependable internet options for your home or business. Check your address to find out which O50M connections are available in your area.
            </p>
            <p className="mt-6 text-sm font-semibold text-hero-foreground">Fibre · 5G · Hotspot · LTE</p>
          </div>
          <div id="coverage" className="mt-6 max-w-5xl scroll-mt-24">
            <CoverageChecker />
          </div>
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