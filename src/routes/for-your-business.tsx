import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/business-owner.jpg";
import { CheckCoverageLink, PageHero, SecondaryLink } from "@/components/PageHero";
import { ProductIntroGrid } from "@/components/products/ProductIntroGrid";

export const Route = createFileRoute("/for-your-business")({
  head: () => ({
    meta: [
      { title: "Business Internet — O50M Broadband" },
      { name: "description", content: "Reliable internet for local shops, salons and offices. Check what's available at your business address." },
      { property: "og:title", content: "Business Internet — O50M Broadband" },
      { property: "og:description", content: "Keep your business connected with O50M." },
    ],
  }),
  component: BusinessPage,
});

const POINTS = [
  { t: "Serve customers", d: "Take card payments, sell airtime and stay reachable." },
  { t: "Run your day", d: "Order stock, manage bookings and keep records online." },
  { t: "Grow", d: "Reach new customers on social media and messaging apps." },
];

function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="For your business"
        title="Keep your business connected."
        text="Reliable internet helps your business serve customers, manage daily operations, and grow. Discover the connectivity options available at your business address."
        image={img}
        alt="A shop owner helps a customer pay with a card machine outside her spaza and salon"
        actions={<><CheckCoverageLink /><SecondaryLink to="/contact">Request Assistance</SecondaryLink></>}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.t} className="rounded-2xl border-l-4 border-accent bg-card p-6">
              <h3 className="font-display text-xl font-semibold text-navy">{p.t}</h3>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-16 font-display text-3xl font-bold text-navy">Business connection types</h2>
        <div className="mt-8"><ProductIntroGrid /></div>
        <div className="mt-12 flex flex-wrap gap-3">
          <CheckCoverageLink />
          <SecondaryLink to="/contact">Contact Us</SecondaryLink>
          <SecondaryLink to="/login">Login / Sign Up</SecondaryLink>
        </div>
      </section>
    </>
  );
}
