import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">Reliable internet for homes and businesses in South African communities.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-1.5 text-sm font-medium text-navy">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/for-your-home" className="hover:text-primary">For Your Home</Link></li>
            <li><Link to="/for-your-business" className="hover:text-primary">For Your Business</Link></li>
            <li><Link to="/hotspot" className="hover:text-primary">Hotspot</Link></li>
            <li><Link to="/login" className="hover:text-primary">Login / Sign Up</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold text-navy">Contact</p>
          <ul className="mt-1.5 grid gap-1.5 text-sm text-muted-foreground">
            <li><a href="tel:+27107450462" className="hover:text-primary">+27 10 745 0462</a></li>
            <li><a href="mailto:info@o50m.co.za" className="hover:text-primary">info@o50m.co.za</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-4 py-4 text-[13px] text-muted-foreground sm:px-6">
          <p>© {new Date().getFullYear()} O50M Broadband</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
