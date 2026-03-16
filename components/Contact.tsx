export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-ink text-white text-center min-h-[100dvh] py-16 md:py-24 flex flex-col justify-center"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-4xl flex flex-col items-center">
          <div className="font-mono text-sm font-semibold tracking-widest uppercase text-white/50 mb-6 flex items-center justify-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent reveal">
            05. What&apos;s Next?
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 relative inline-block text-white reveal section-title group">
            Let&apos;s build something
            <br />
            worth scaling.
            <span className="block h-1 bg-accent w-0 group-[.in-view]:w-full mt-2 transition-all duration-700 ease-out rounded-full mx-auto"></span>
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto mt-6 mb-12 md:mb-16 leading-relaxed reveal px-4">
            Open to senior backend roles, system design consulting, and
            interesting side-project collaborations. I respond within 48 hours.
          </p>
          <a
            href="mailto:hello@emmanuelgarcia.dev"
            className="font-serif text-[clamp(1.25rem,7vw,4rem)] font-bold text-white relative inline-block group mb-6 hover:text-white transition-colors reveal z-10 break-all sm:break-normal leading-tight sm:leading-normal"
          >
            hello@emmanuelgarcia.dev
            <span className="absolute -bottom-2 left-0 w-full h-[2px] md:h-[4px] bg-accent scale-x-0 origin-right transition-transform duration-[400ms] ease-[cubic-bezier(0.86,0,0.07,1)] group-hover:scale-x-100 group-hover:origin-left -z-10"></span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-16 md:mt-20 reveal px-4">
            <a
              href="#"
              className="text-sm font-bold tracking-widest uppercase text-white/50 border-b-2 border-white/20 pb-1 transition-all duration-200 hover:text-white hover:border-white/50"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm font-bold tracking-widest uppercase text-white/50 border-b-2 border-white/20 pb-1 transition-all duration-200 hover:text-white hover:border-white/50"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm font-bold tracking-widest uppercase text-white/50 border-b-2 border-white/20 pb-1 transition-all duration-200 hover:text-white hover:border-white/50"
            >
              Twitter / X
            </a>
            <a
              href="#"
              className="text-sm font-bold tracking-widest uppercase text-white/50 border-b-2 border-white/20 pb-1 transition-all duration-200 hover:text-white hover:border-white/50"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-white/30 text-center py-8 px-6 text-sm border-t border-white/10 tracking-wider">
        Designed & coded by{" "}
        <span className="text-accent font-medium hover:text-white transition-colors cursor-pointer">
          Emmanuel Garcia Sumargo
        </span>{" "}
        &middot; 2024 &middot; Built with Next.js & Tailwind
      </footer>
    </>
  );
}
