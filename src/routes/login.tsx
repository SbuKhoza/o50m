import { createFileRoute } from "@tanstack/react-router";
import { AuthShell, LoginForm } from "@/components/auth/AuthForms";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In — O50M Broadband" },
      { name: "description", content: "Log in to your O50M Broadband account." },
      { property: "og:title", content: "Log In — O50M Broadband" },
      { property: "og:description", content: "Access your O50M account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AuthShell title="Welcome back" text="Log in to manage your O50M account.">
      <LoginForm />
    </AuthShell>
  ),
});
