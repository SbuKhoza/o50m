import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — O50M Broadband" },
      { name: "description", content: "O50M Broadband terms and conditions (placeholder)." },
      { property: "og:title", content: "Terms — O50M Broadband" },
      { property: "og:description", content: "O50M Broadband terms and conditions." },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-navy">Terms &amp; Conditions</h1>
      <p className="mt-4 text-lg text-muted-foreground">Placeholder — the final terms will be published here.</p>
    </section>
  ),
});
