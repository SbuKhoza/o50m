import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/for-your-home", label: "For Your Home" },
  { to: "/for-your-business", label: "For Your Business" },
  { to: "/hotspot", label: "Hotspot" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy/15 bg-brand text-brand-foreground">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-brand-foreground text-brand" }}
              inactiveProps={{ className: "text-brand-foreground" }}
              className="rounded-md px-3 py-2 text-[15px] font-semibold hover:bg-brand-foreground hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="ml-3 h-11 bg-brand-foreground px-4 text-[15px] font-semibold text-brand hover:bg-brand-foreground/90">
            <Link to="/login">Login / Sign Up</Link>
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 text-brand-foreground hover:bg-brand-foreground hover:text-brand md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-brand-foreground/20 bg-brand px-4 pb-5 pt-2 md:hidden">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3.5 text-lg font-semibold text-brand-foreground hover:bg-brand-foreground hover:text-brand">
              {l.label}
            </Link>
          ))}
          <Button asChild className="mt-2 h-13 w-full bg-brand-foreground text-lg font-semibold text-brand hover:bg-brand-foreground/90">
            <Link to="/login" onClick={() => setOpen(false)}>Login / Sign Up</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
