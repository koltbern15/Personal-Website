"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const links = [
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#journey" },
  { label: "Highlights", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-base/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="focusable rounded font-mono text-sm font-medium text-ink"
        >
          <span className="text-accent">~/</span>
          {profile.name.split(" ")[0].toLowerCase()}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focusable rounded text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="focusable rounded-lg border border-line bg-base-card px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
