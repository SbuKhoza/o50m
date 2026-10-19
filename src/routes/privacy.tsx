import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — O50M Broadband" },
      { name: "description", content: "O50M Broadband privacy policy (placeholder)." },
      { property: "og:title", content: "Privacy Policy — O50M Broadband" },
      { property: "og:description", content: "O50M Broadband privacy policy." },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-navy">Privacy Policy</h1>
      <p className="mt-4 text-lg text-muted-foreground">Placeholder — the final privacy policy will be published here.</p>
    </section>
  ),
});
