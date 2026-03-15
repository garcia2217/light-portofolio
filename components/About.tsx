import dynamic from "next/dynamic";

const AvatarCanvas = dynamic(() => import("./AvatarCanvas"), { ssr: false });

export default function About() {
  return (
    <section id="about" className="bg-white border-y border-ghost py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="font-mono text-sm font-semibold tracking-widest uppercase text-mid mb-4 flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent reveal">
          01. The Narrative
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8 relative inline-block reveal section-title group">
          The human behind
          <br />
          the architecture.
          <span className="block h-1 bg-accent w-0 group-[.in-view]:w-full mt-2 transition-all duration-700 ease-out rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start mt-12">
          {/* 3D Avatar */}
          <div className="aspect-square md:aspect-[4/5] bg-bg border border-ghost rounded-2xl overflow-hidden relative reveal shadow-sm">
            <AvatarCanvas className="w-full h-full" />
            <div className="absolute bottom-8 left-0 w-full text-center font-sans font-bold text-base text-ink tracking-wide pointer-events-none">
              Emmanuel Garcia Sumargo
            </div>
            <div className="absolute bottom-3 left-0 w-full text-center font-mono text-[10px] uppercase text-mid tracking-[0.15em] pointer-events-none">
              ← Move mouse · Hover to wave · Click to spin →
            </div>
          </div>
          
          {/* Text Content */}
          <div className="reveal text-lg leading-relaxed text-ink/80 space-y-6">
            <p>
              I&apos;m a <strong className="text-ink font-semibold">Backend Developer & Systems Engineer</strong> based in
              Jakarta. My journey started in the lecture halls of a CS
              program—where I fell in love not with the syntax, but with the{" "}
              <span className="font-medium text-accent">logic beneath it</span>.
            </p>
            <p>
              Today, I architect distributed systems that handle real-world load.
              I care deeply about code that&apos;s readable in three years, APIs that
              feel intuitive, and services that wake you up at 3am as rarely as
              possible.
            </p>
            <p>
              I believe the best engineering is <strong className="text-ink font-semibold">invisible</strong>—when
              users never think about the infrastructure because it simply works.
            </p>
            
            {/* Interactive Value Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ghost mt-12 border-t border-b border-ghost shadow-sm rounded-xl overflow-hidden">
              {/* Item 1 */}
              <div className="bg-white p-8 hover:bg-bg transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-300">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="font-mono text-[10px] text-accent mb-4 tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm">01 / PERF</div>
                <div className="font-serif text-xl font-bold text-ink mb-2">Performance-first</div>
                <div className="text-sm text-mid leading-relaxed relative z-10">
                  Latency is a feature, not an afterthought. Every millisecond counts.
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="bg-white p-8 hover:bg-bg transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-300">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <div className="font-mono text-[10px] text-accent mb-4 tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm">02 / OBSV</div>
                <div className="font-serif text-xl font-bold text-ink mb-2">Observability</div>
                <div className="text-sm text-mid leading-relaxed relative z-10">
                  If you can&apos;t measure it, you can&apos;t improve it. Tracing at scale.
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white p-8 hover:bg-bg transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-300">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                </div>
                <div className="font-mono text-[10px] text-accent mb-4 tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm">03 / ARCH</div>
                <div className="font-serif text-xl font-bold text-ink mb-2">Solid Foundations</div>
                <div className="text-sm text-mid leading-relaxed relative z-10">
                  Architecting for scale and resilience from day one.
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-white p-8 hover:bg-bg transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-300">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <div className="font-mono text-[10px] text-accent mb-4 tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm">04 / SYNC</div>
                <div className="font-serif text-xl font-bold text-ink mb-2">Cross-functional</div>
                <div className="text-sm text-mid leading-relaxed relative z-10">
                  Bridging complex engineering challenges with product thinking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
