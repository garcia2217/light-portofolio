"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ease-out px-6 md:px-12 flex items-center justify-between ${
        scrolled
          ? "h-16 bg-white/70 backdrop-blur-xl border-b border-ghost shadow-sm"
          : "h-24 bg-transparent"
      }`}
    >
      <div className="font-serif font-bold text-xl tracking-tight text-ink">
        Emmanuel<span className="text-accent">.</span>Garcia
      </div>
      <ul className="hidden md:flex items-center gap-10">
        <li>
          <Link
            href="#about"
            className="text-sm font-medium tracking-wider uppercase text-mid hover:text-ink transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#stack"
            className="text-sm font-medium tracking-wider uppercase text-mid hover:text-ink transition-colors"
          >
            Stack
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="text-sm font-medium tracking-wider uppercase text-mid hover:text-ink transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#experience"
            className="text-sm font-medium tracking-wider uppercase text-mid hover:text-ink transition-colors"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="text-sm font-medium tracking-wider uppercase text-mid hover:text-ink transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
