"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const links = [
    ["/#menu", "Menu"],
    ["/#our-story", "About"],
    ["/#selection", "Products"],
    ["/#contact", "Find Us"],
    ["/#pickup", "Order"],
  ];
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="editorial-nav">
        <div className="nav-inner">
          <nav className="nav-left" aria-label="Main navigation">
            {links.slice(0, 3).map(([href, label]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <Link
            className="wordmark"
            href="/"
            aria-label="Cloud Bun Bakery home"
          >
            Cloud Bun<span>BAKERY</span>
          </Link>
          <nav className="nav-right" aria-label="Order navigation">
            {links.slice(3).map(([href, label]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {links.map(([href, label]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
