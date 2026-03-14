export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-ink text-white text-center py-32"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-4xl flex flex-col items-center">
          <div className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-6 flex items-center justify-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent reveal">
            Get in touch
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 relative inline-block text-white reveal section-title group">
            Let&apos;s build something
            <br />
            worth scaling.
            <span className="block h-1 bg-accent w-0 group-[.in-view]:w-full mt-2 transition-all duration-700 ease-out rounded-full mx-auto"></span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-6 mb-12 leading-relaxed reveal">
            Open to senior backend roles, system design consulting, and
            interesting side-project collaborations. I respond within 48 hours.
          </p>
          <a
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-2 bg-accent text-white font-sans text-lg font-bold py-4 px-10 rounded shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/40 hover:-translate-y-1 hover:shadow-2xl reveal"
          >
            Send me a message &nearr;
          </a>
          
          <div className="flex flex-wrap justify-center gap-8 mt-20 reveal">
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
