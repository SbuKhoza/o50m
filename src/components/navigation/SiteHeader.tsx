import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/for-your-home", label: "For Your Home" },
  { to: "/for-your-business", label: "For Your Business" },
  { to: "/hotspot", label: "Hotspot" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary bg-sky" }}
              inactiveProps={{ className: "text-navy" }}
              className="rounded-lg px-3 py-2 text-[15px] font-semibold hover:bg-sky"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/login" className="ml-3 rounded-xl border-2 border-primary px-4 py-2 text-[15px] font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
            Login / Sign Up
          </Link>
        </nav>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy hover:bg-sky md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background px-4 pb-5 pt-2 md:hidden">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3.5 text-lg font-semibold text-navy hover:bg-sky">
              {l.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-primary px-3 py-3.5 text-center text-lg font-semibold text-primary-foreground">
            Login / Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
}
