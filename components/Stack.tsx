export default function Stack() {
  const groups = [
    {
      title: "Core Logic",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-accent">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      items: ["Python", "Java", "Go", "TypeScript", "SQL"],
    },
    {
      title: "Frameworks & APIs",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-accent">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
      items: ["FastAPI", "Spring Boot", "GraphQL", "gRPC", "REST"],
    },
    {
      title: "Data & Storage",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-accent">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75C20.25 19.903 16.556 21.75 12 21.75s-8.25-1.847-8.25-4.125v-3.75" />
        </svg>
      ),
      items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Kafka"],
    },
    {
      title: "Infrastructure",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-accent">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm-3-6h.008v.008h-.008v-.008z" />
        </svg>
      ),
      items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    },
    {
      title: "Frontend Bridge",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-accent">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
      items: ["React", "Next.js", "Tailwind CSS", "Webpack"],
    },
    {
      title: "Observability",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-accent">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      items: ["Prometheus", "Grafana", "OpenTelemetry", "PagerDuty"],
    },
  ];

  return (
    <section id="stack" className="bg-bg min-h-[100dvh] py-16 md:py-24 flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="font-mono text-sm font-semibold tracking-widest uppercase text-mid mb-4 flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent reveal">
          02. The Toolkit
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8 relative inline-block reveal section-title group">
          Built on strong
          <br />
          mental models.
          <span className="block h-1 bg-accent w-0 group-[.in-view]:w-full mt-2 transition-all duration-700 ease-out rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-16 max-w-7xl">
          {groups.map((group, i) => (
            <div
              key={i}
              className="bg-white border border-ghost rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/40 active:shadow-xl active:-translate-y-1 active:border-accent/40 reveal relative overflow-hidden group/card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Decorative top-right corner background */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-ghost/30 rounded-full blur-2xl group-hover/card:bg-accent/10 group-active/card:bg-accent/10 transition-colors duration-500"></div>
              
              <div className="text-sm font-bold tracking-widest uppercase text-ink mb-6 flex items-center gap-3 relative z-10">
                <div className="p-2 bg-bg border border-ghost rounded-lg group-hover/card:border-accent/30 group-active/card:border-accent/30 transition-colors">
                  {group.icon}
                </div>
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="font-mono bg-bg border border-ghost/80 rounded py-1.5 px-3 text-[11px] font-semibold tracking-widest uppercase text-ink/70 transition-all duration-200 hover:border-accent hover:text-accent cursor-default shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
