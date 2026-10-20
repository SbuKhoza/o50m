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
    <header className="sticky top-0 z-40 border-b border-border bg-card text-navy">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:flex sm:justify-between sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-primary/10 text-primary" }}
              inactiveProps={{ className: "text-navy" }}
              className="rounded-md px-3 py-2 text-[15px] font-semibold hover:bg-primary/10 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="ml-3 h-11 px-4 text-[15px] font-semibold">
            <Link to="/login">Login / Sign Up</Link>
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 shrink-0 text-navy hover:bg-primary/10 hover:text-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-card px-4 pb-5 pt-2 md:hidden">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base font-semibold text-navy hover:bg-primary/10 hover:text-primary">
              {l.label}
            </Link>
          ))}
          <Button asChild className="mt-2 h-12 w-full text-base font-semibold">
            <Link to="/login" onClick={() => setOpen(false)}>Login / Sign Up</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
