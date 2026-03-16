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

  // Count-Up Animation for stat cards
  useEffect(() => {
    const timer = setTimeout(() => {
      const counters = document.querySelectorAll<HTMLSpanElement>(".count-up");
      counters.forEach((counter) => {
        const target = parseInt(counter.dataset.target ?? "0", 10);
        const suffix = counter.dataset.suffix ?? "";
        const duration = 1400;
        const startTime = performance.now();

        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        const update = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.round(easeOut(progress) * target);
          counter.innerHTML = `${value}<span class="text-accent">${suffix}</span>`;
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      });
    }, 600);
    return () => clearTimeout(timer);
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
      className="min-h-[100svh] relative flex flex-col opacity-0 animate-hero-in"
    >
      {/* Dynamic top spacer — clears the fixed nav on all screen sizes */}
      <div className="h-20 sm:h-32 md:h-40 shrink-0" />
      <div className="flex-1 flex flex-col justify-center">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center max-w-2xl relative">
            <p className="font-mono text-xs md:text-sm font-semibold tracking-widest uppercase text-accent mb-6 flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent">
              Available for opportunities
            </p>
            <h1 className="font-serif text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight text-ink mb-6">
              Building systems
              <br />
              that{" "}
              <em className="italic font-light text-accent pr-2">actually</em>
              <br className="hidden sm:block" />
              scale.
            </h1>
            <p className="font-mono text-base md:text-lg font-light text-mid min-h-[2.5rem] mb-10 flex items-center gap-2">
              <span
                id="typed-text"
                ref={typedTextRef}
                className="text-ink font-medium"
              ></span>
              <span className="inline-block w-[3px] h-[1.2em] bg-accent animate-blink rounded-sm"></span>
            </p>

            <div className="flex items-center gap-6 flex-wrap pb-8 md:pb-0">
              <div className="inline-block" ref={btnWrapRef}>
                <button
                  onClick={handleScroll}
                  className="relative inline-flex items-center gap-2 bg-ink text-white font-sans text-sm md:text-base font-medium py-4 px-8 border-none rounded shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="absolute inset-0 bg-accent scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    View my work &darr;
                  </span>
                </button>
              </div>
              <a
                href="#contact"
                className="text-base font-medium text-mid pb-1 relative group transition-colors hover:text-ink inline-block"
              >
                Let&apos;s talk &rarr;
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-ink scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
              </a>
            </div>
          </div>

          {/* Right Content / Visuals */}
          <div className="hidden lg:flex relative h-full min-h-[500px] w-full items-center justify-center overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            {/* Animated Blob */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-pulse-slow"></div>

            {/* Floating Stat Cards (Glassmorphic + Count-Up) */}
            <div className="relative w-full max-w-md h-[450px]">
              <div className="absolute bottom-10 left-0 bg-white/95 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/5 transition-transform hover:-translate-y-2 duration-300">
                <div className="font-serif text-4xl font-bold text-ink">
                  <span className="count-up" data-target="4" data-suffix="+">
                    0
                  </span>
                </div>
                <div className="font-mono text-xs font-semibold text-mid tracking-widest uppercase mt-2">
                  Years Building
                </div>
              </div>

              <div className="absolute top-10 right-0 bg-white/95 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/5 transition-transform hover:-translate-y-2 duration-300 delay-100">
                <div className="font-serif text-4xl font-bold text-ink">
                  <span className="count-up" data-target="18" data-suffix="+">
                    0
                  </span>
                </div>
                <div className="font-mono text-xs font-semibold text-mid tracking-widest uppercase mt-2">
                  Projects Shipped
                </div>
              </div>

              <div className="absolute bottom-24 right-10 bg-white/95 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/5 transition-transform hover:-translate-y-2 duration-300 delay-200">
                <div className="font-serif text-4xl font-bold text-ink">
                  <span className="count-up" data-target="99" data-suffix="%">
                    0
                  </span>
                </div>
                <div className="font-mono text-xs font-semibold text-mid tracking-widest uppercase mt-2">
                  Uptime Maintained
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — in flow, shrink-0 so flex doesn't crush it */}
      <div
        className="shrink-0 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
        style={{
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 3rem)",
          marginBottom: "0.5rem",
        }}
      >
        <div className="w-[20px] h-[32px] border-2 border-mid rounded-full relative flex justify-center">
          <div className="w-[2px] h-[6px] bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mid">
          Scroll
        </span>
      </div>
    </section>
  );
}
