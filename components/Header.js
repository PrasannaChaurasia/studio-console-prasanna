"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/work", "Work"],
  ["/conceptuals", "Conceptuals"],
  ["/real-projects", "Real Projects"],
  ["/bim", "BIM"],
  ["/profile", "Profile"],
  ["/archive", "Archive"],
  ["/contact", "Contact"]
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header studio-topbar">
      <Link className="brand" href="/" aria-label="Go to homepage">
        <span className="brand-stack">
          <span>P</span>
          <span>R</span>
          <span>A</span>
          <span>S</span>
        </span>
        <span className="brand-meta">
          <strong>Prasanna Chaurasia</strong>
          <em>Architecture . BIM . Speculative Futures</em>
        </span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      <nav className={`site-nav ${open ? "open" : ""}`} id="site-menu">
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className={pathname === href || pathname.startsWith(`${href}/`) ? "is-active" : ""}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
