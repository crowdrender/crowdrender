"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        className={`link ${pathname === "/" ? "font-mono font-bold" : ""}`}
        href="/"
      >
        Home
      </Link>

      <Link
        className={`link ${pathname === "/about" ? "font-mono font-bold" : ""}`}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
