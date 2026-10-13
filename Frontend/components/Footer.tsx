"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { logoSrc } from "@/lib/assets";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 365 * 24 * 60 * 60 * 1000 - new Date().getMilliseconds());
    return () => clearInterval(timer);
  }, [year]);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <a className="footer__logo" href="/" aria-label="The Process">
            <img alt="The Process" src={logoSrc} />
          </a>
          <p className="footer__description">
            Building better habits, one step at a time.
          </p>
        </div>

        <nav className="footer__navs">
          {navLinks.map((l) => {
            const isHome = l.href === "/";
            const on = isHome ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <a
                key={l.href}
                href={l.href}
                className={on ? "footer__nav-item--active" : "footer__nav-item"}
                aria-current={on ? "page" : undefined}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {year} The Process. All rights reserved.
        </p>
      </div>
    </footer>
  );
}