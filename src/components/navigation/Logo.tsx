import { Link } from "@tanstack/react-router";
import logo from "@/assets/o50M-Logo.png";

export function Logo() {
  return (
    <Link to="/" aria-label="O50M Broadband home" className="inline-flex shrink-0 items-center py-1.5">
      <img src={logo} alt="O50M" width={640} height={220} className="block h-10 w-auto" />
    </Link>
  );
}