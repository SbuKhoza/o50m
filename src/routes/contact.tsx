import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — O50M Broadband" },
      { name: "description", content: "Get help from the O50M Broadband team by phone or email." },
      { property: "og:title", content: "Contact Us — O50M Broadband" },
      { property: "og:description", content: "Talk to the O50M team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-navy">Contact us</h1>
      <p className="mt-3 text-lg text-muted-foreground">Our team can help you check coverage or choose the right connection.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a href="tel:+27107450462" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary">
          <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
          <span><span className="block text-sm text-muted-foreground">Call</span><span className="text-lg font-semibold text-navy">+27 10 745 0462</span></span>
        </a>
        <a href="mailto:info@o50m.co.za" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary">
          <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
          <span><span className="block text-sm text-muted-foreground">Email</span><span className="text-lg font-semibold text-navy">info@o50m.co.za</span></span>
        </a>
      </div>
    </section>
  );
}
