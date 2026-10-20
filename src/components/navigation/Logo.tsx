import { Link } from "@tanstack/react-router";
import logo from "@/assets/o50m-logo.png.asset.json";
import type { CSSProperties } from "react";

export function Logo() {
  return (
    <Link to="/" aria-label="O50M Broadband home" className="inline-flex shrink-0 items-center py-1.5">
      <span aria-hidden="true" className="brand-logo block h-9 w-24" style={{ "--logo-image": `url("${logo.url}")` } as CSSProperties} />
    </Link>
  );
}
