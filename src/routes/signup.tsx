import { createFileRoute } from "@tanstack/react-router";
import { AuthShell, SignUpForm } from "@/components/auth/AuthForms";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create an Account — O50M Broadband" },
      { name: "description", content: "Sign up for an O50M Broadband customer account." },
      { property: "og:title", content: "Create an Account — O50M Broadband" },
      { property: "og:description", content: "Join O50M Broadband." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AuthShell title="Create an account" text="It only takes a minute.">
      <SignUpForm />
    </AuthShell>
  ),
});
