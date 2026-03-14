"use client";

import { useEffect, useRef } from "react";

const phrases = [
  "Building Scalable Backends",
  "Solving Complex Logic",
  "Designing Resilient APIs",
  "Optimising for 99.9% Uptime",
  "Making Systems Observable",
];

export default function Hero() {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const btnWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ph = 0;
    let ch = 0;
    let deleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const el = typedTextRef.current;
      if (!el) return;
      const current = phrases[ph];

      if (!deleting) {
        el.textContent = current.substring(0, ch + 1);
        ch++;
        if (ch === current.length) {
          deleting = true;
          timeoutId = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.substring(0, ch - 1);
        ch--;
        if (ch === 0) {
          deleting = false;
          ph = (ph + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(type, deleting ? 42 : 68);
    };
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const wrap = btnWrapRef.current;
    if (!wrap) return;
    const btn = wrap.querySelector("button");
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = "";
    };

    wrap.addEventListener("mousemove", handleMouseMove);
    wrap.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrap.removeEventListener("mousemove", handleMouseMove);
      wrap.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleScroll = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center pt-24 pb-12 overflow-hidden opacity-0 animate-hero-in"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center max-w-2xl">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-mid mb-6 flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent">
            Available for opportunities
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight text-ink mb-6">
            Building systems
            <br />
            that {" "}
            <em className="italic font-light text-accent pr-2">actually</em>
            <br className="hidden sm:block" />
            scale.
          </h1>
          <p className="text-lg md:text-xl font-light text-mid min-h-[2.5rem] mb-10 flex items-center gap-2">
            <span id="typed-text" ref={typedTextRef} className="text-ink font-medium"></span>
            <span className="inline-block w-[3px] h-[1.2em] bg-accent animate-blink rounded-sm"></span>
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <div className="inline-block" ref={btnWrapRef}>
              <button
                onClick={handleScroll}
                className="relative inline-flex items-center gap-2 bg-ink text-white font-sans text-sm md:text-base font-medium py-4 px-8 border-none rounded shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <div className="absolute inset-0 bg-accent scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  View my work &darr;
                </span>
              </button>
            </div>
            <a
              href="#contact"
              className="text-base font-medium text-mid border-b-2 border-ghost pb-1 transition-all hover:text-ink hover:border-ink"
            >
              Let&apos;s talk &rarr;
            </a>
          </div>
        </div>

        {/* Right Content / Visuals */}
        <div className="hidden lg:flex relative h-full min-h-[500px] w-full items-center justify-center">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          {/* Animated Blob */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-pulse-slow"></div>

          {/* Floating Stat Cards */}
          <div className="relative w-full max-w-md h-[450px]">
            <div className="absolute bottom-10 left-0 bg-white/80 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl transition-transform hover:-translate-y-2 duration-300">
              <div className="font-serif text-4xl font-bold text-ink">
                4<span className="text-accent">+</span>
              </div>
              <div className="text-xs font-semibold text-mid tracking-widest uppercase mt-1">
                Years Building
              </div>
            </div>

            <div className="absolute top-10 right-0 bg-white/80 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl transition-transform hover:-translate-y-2 duration-300 delay-100">
              <div className="font-serif text-4xl font-bold text-ink">
                18<span className="text-accent">+</span>
              </div>
              <div className="text-xs font-semibold text-mid tracking-widest uppercase mt-1">
                Projects Shipped
              </div>
            </div>

            <div className="absolute bottom-24 right-10 bg-white/80 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl transition-transform hover:-translate-y-2 duration-300 delay-200">
              <div className="font-serif text-4xl font-bold text-ink">
                99<span className="text-accent">%</span>
              </div>
              <div className="text-xs font-semibold text-mid tracking-widest uppercase mt-1">
                Uptime Maintained
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
