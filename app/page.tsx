"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    // Global Scroll Reveal Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            // stagger children
            const parent = e.target.parentElement;
            if (parent) {
              const siblings = parent.querySelectorAll(".reveal");
              siblings.forEach((s, i) => {
                (s as HTMLElement).style.transitionDelay = i * 0.07 + "s";
              });
            }
          }
        });
      },
      { threshold: 0.12 }
    );

    const elementsToObserve = document.querySelectorAll(".reveal, .section-title");
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
