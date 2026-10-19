import { createFileRoute, Link } from "@tanstack/react-router";
import img from "@/assets/hotspot-community.jpg";
import { CheckCoverageLink, PageHero } from "@/components/PageHero";
import { getOptionsFor } from "@/data/mockProducts";

export const Route = createFileRoute("/hotspot")({
  head: () => ({
    meta: [
      { title: "Hotspot Wi-Fi — O50M Broadband" },
      { name: "description", content: "Explore O50M hotspot connectivity and check whether a supported service is available at your location." },
      { property: "og:title", content: "Hotspot Wi-Fi — O50M Broadband" },
      { property: "og:description", content: "Stay connected with O50M Hotspot." },
    ],
  }),
  component: HotspotPage,
});

function HotspotPage() {
  return (
    <>
      <PageHero
        eyebrow="Hotspot"
        title="Stay connected with Hotspot."
        text="Explore hotspot connectivity options and check whether a supported service is available at your location."
        image={img}
        alt="Friends at a community café table using phones and a laptop on Wi-Fi"
        actions={<><CheckCoverageLink /><a href="#hotspot-options" className="inline-flex items-center rounded-xl border-2 border-navy/15 bg-card px-6 py-3 font-semibold text-navy hover:border-primary hover:text-primary">View Options</a></>}
      />
      <section id="hotspot-options" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-navy">How Hotspot works</h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Hotspot gives you wireless internet at supported locations — connect your phone, tablet or laptop without a fixed line at home.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {getOptionsFor("hotspot").map((p) => (
            <div key={p.id} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{p.suitableFor}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-navy">{p.name}</h3>
              <p className="mt-2 text-muted-foreground">{p.summary}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 rounded-2xl bg-sky p-5 text-navy">
          Hotspot isn't available at every address.{" "}
          <Link to="/" hash="coverage" className="font-semibold text-primary hover:underline">Check your address</Link> to see if it's offered near you.
        </p>
        <div className="mt-8"><CheckCoverageLink /></div>
      </section>
    </>
  );
}
