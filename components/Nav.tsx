"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about",      label: "About" },
  { href: "#stack",      label: "Stack" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Track scroll for frosted glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ease-out px-5 lg:px-12 flex items-center justify-between ${
          scrolled || open
            ? "h-16 bg-white/90 backdrop-blur-xl border-b border-ghost shadow-sm"
            : "h-20 lg:h-24 bg-transparent"
        }`}
      >
        {/* Wordmark — abbreviated on small phones, full name on sm+ */}
        <div className="font-serif font-bold tracking-tight text-ink z-[110]">
          <span className="hidden sm:inline text-lg lg:text-xl">
            Emmanuel<span className="text-accent">.</span>Garcia<span className="text-accent">.</span>Sumargo
          </span>
          <span className="sm:hidden text-base">
            E<span className="text-accent">.</span>Garcia<span className="text-accent">.</span>S
          </span>
        </div>

        {/* Desktop links — hidden below lg (1024px covers all iPads) */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium tracking-wider uppercase text-mid hover:text-ink transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — shows on everything under lg */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden z-[110] flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-ink transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-ink transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-ink transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile / Tablet Fullscreen Drawer */}
      <div
        className={`fixed inset-0 z-[105] lg:hidden flex flex-col justify-center items-center bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Explicit close (×) button inside the drawer */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full border border-ghost text-ink text-2xl hover:bg-bg transition-colors"
        >
          ×
        </button>

        <ul className="flex flex-col items-center gap-6 md:gap-8">
          {links.map(({ href, label }, i) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`font-serif text-4xl md:text-5xl font-bold text-ink/30 hover:text-ink transition-all duration-300 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom social row in drawer */}
        <div className="absolute bottom-10 flex gap-8">
          {["GitHub", "LinkedIn", "Resume"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-mono text-xs uppercase tracking-widest text-mid hover:text-ink transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
