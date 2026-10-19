import { Link } from "@tanstack/react-router";
import logo from "@/assets/o50m-logo.png.asset.json";

export function Logo() {
  return (
    <Link to="/" aria-label="O50M Broadband home" className="inline-flex items-center rounded-xl bg-navy px-3 py-1.5">
      <img src={logo.url} alt="O50M" className="h-8 w-auto" width={130} height={64} />
    </Link>
  );
}
