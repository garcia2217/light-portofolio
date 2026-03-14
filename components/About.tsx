export default function About() {
  return (
    <section id="about" className="bg-white border-y border-ghost py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-sm font-semibold tracking-widest uppercase text-mid mb-4 flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent reveal">
          About me
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8 relative inline-block reveal section-title group">
          The human behind
          <br />
          the architecture.
          <span className="block h-1 bg-accent w-0 group-[.in-view]:w-full mt-2 transition-all duration-700 ease-out rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start mt-12">
          {/* Portrait placeholder */}
          <div className="aspect-square md:aspect-[4/5] bg-bg border border-ghost rounded-2xl overflow-hidden relative reveal shadow-sm group">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-ghost/50 to-ghost transition-transform duration-700 group-hover:scale-105">
              <div className="font-serif text-7xl font-bold text-ink/10">
                AM
              </div>
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
            
            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-ghost">
              <div className="bg-bg border border-ghost rounded-xl p-5 hover:border-mid/30 transition-colors">
                <div className="text-2xl mb-3">⚡</div>
                <div className="font-bold text-ink mb-1">Performance-first</div>
                <div className="text-sm text-mid leading-snug">
                  Latency is a feature, not an afterthought.
                </div>
              </div>
              <div className="bg-bg border border-ghost rounded-xl p-5 hover:border-mid/30 transition-colors">
                <div className="text-2xl mb-3">🔍</div>
                <div className="font-bold text-ink mb-1">Observability</div>
                <div className="text-sm text-mid leading-snug">
                  If you can&apos;t measure it, you can&apos;t improve it.
                </div>
              </div>
              <div className="bg-bg border border-ghost rounded-xl p-5 hover:border-mid/30 transition-colors">
                <div className="text-2xl mb-3">🧱</div>
                <div className="font-bold text-ink mb-1">Solid Foundations</div>
                <div className="text-sm text-mid leading-snug">Build for scale from day one.</div>
              </div>
              <div className="bg-bg border border-ghost rounded-xl p-5 hover:border-mid/30 transition-colors">
                <div className="text-2xl mb-3">🤝</div>
                <div className="font-bold text-ink mb-1">Cross-functional</div>
                <div className="text-sm text-mid leading-snug">
                  Bridging engineering and product thinking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
