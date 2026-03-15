"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (!spot) return;

    let raf: number;
    let tx = -9999;
    let ty = -9999;
    let cx = -9999;
    let cy = -9999;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      cx = lerp(cx, tx, 0.1);
      cy = lerp(cy, ty, 0.1);
      spot.style.left = cx + "px";
      spot.style.top = cy + "px";
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ top: -9999, left: -9999 }}
      aria-hidden
    >
      <div
        className="w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,85,255,0.06) 0%, rgba(0,85,255,0.02) 35%, transparent 70%)",
          filter: "blur(0px)",
        }}
      />
    </div>
  );
}
