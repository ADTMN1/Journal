"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { logoSrc } from "@/lib/assets";

// Single source of truth for the navigation. Extend here and every page's
// navbar updates.
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Desktop x-offsets, matching the original design pixel-for-pixel.
const lefts = ["53.3rem", "63rem", "72.7rem", "83.9rem", "92.6rem"];

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="logo" href="/" aria-label="The Process">
        <img alt="The Process" src={logoSrc} />
      </a>

      <button
        className="burger"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <nav className={open ? "nav open" : "nav"} aria-label="Main">
        {links.map((l, i) => {
          const on = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <a
              key={l.href}
              href={l.href}
              className={on ? "on" : undefined}
              aria-current={on ? "page" : undefined}
              style={{ left: lefts[i] }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          );
        })}
      </nav>

      <a className="btn cta" href="/contact" onClick={() => setOpen(false)}>
        Get Started {arrow}
      </a>
    </>
  );
}
