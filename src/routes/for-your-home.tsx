import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/home-family.jpg";
import { CheckCoverageLink, PageHero, SecondaryLink } from "@/components/PageHero";
import { ProductIntroGrid } from "@/components/products/ProductIntroGrid";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/for-your-home")({
  head: () => ({
    meta: [
      { title: "Home Internet — O50M Broadband" },
      { name: "description", content: "Internet for South African households: online learning, remote work, streaming and staying in touch." },
      { property: "og:title", content: "Home Internet — O50M Broadband" },
      { property: "og:description", content: "Find an internet connection that fits your household." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="For your home"
        title="Better connected at home."
        text="From online learning and working remotely to streaming and staying in touch, find an internet connection that fits your household."
        image={img}
        alt="A learner studies on a laptop at the kitchen table while her mother looks on"
        actions={<><CheckCoverageLink /><SecondaryLink to="/login">Login / Sign Up</SecondaryLink></>}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-navy">Connections for your household</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">Homework, video calls, music and catching up with family — choose the connection that suits how your home uses the internet.</p>
        <div className="mt-10"><ProductIntroGrid /></div>
        <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl bg-sky p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-3 text-lg text-navy">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            Availability depends on your address. Check yours to see which options you can get.
          </p>
          <CheckCoverageLink />
        </div>
      </section>
    </>
  );
}
