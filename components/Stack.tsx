export default function Stack() {
  const groups = [
    {
      title: "Core Logic",
      items: [
        { icon: "🐍", name: "Python" },
        { icon: "☕", name: "Java" },
        { icon: "🦫", name: "Go" },
        { icon: "📐", name: "TypeScript" },
        { icon: "🗄️", name: "SQL" },
      ],
    },
    {
      title: "Frameworks & APIs",
      items: [
        { icon: "🚀", name: "FastAPI" },
        { icon: "🌿", name: "Spring Boot" },
        { icon: "🔷", name: "GraphQL" },
        { icon: "⚡", name: "gRPC" },
        { icon: "🔗", name: "REST" },
      ],
    },
    {
      title: "Data & Storage",
      items: [
        { icon: "🐘", name: "PostgreSQL" },
        { icon: "🔴", name: "Redis" },
        { icon: "🍃", name: "MongoDB" },
        { icon: "📊", name: "Elasticsearch" },
        { icon: "📨", name: "Kafka" },
      ],
    },
    {
      title: "Infrastructure",
      items: [
        { icon: "☁️", name: "AWS" },
        { icon: "🐳", name: "Docker" },
        { icon: "⎈", name: "Kubernetes" },
        { icon: "🔄", name: "GitHub Actions" },
        { icon: "📡", name: "Terraform" },
      ],
    },
    {
      title: "Frontend Bridge",
      items: [
        { icon: "⚛️", name: "React" },
        { icon: "🔺", name: "Next.js" },
        { icon: "🎨", name: "Tailwind CSS" },
        { icon: "📦", name: "Webpack" },
      ],
    },
    {
      title: "Observability",
      items: [
        { icon: "📈", name: "Prometheus" },
        { icon: "📉", name: "Grafana" },
        { icon: "🔭", name: "OpenTelemetry" },
        { icon: "🔔", name: "PagerDuty" },
      ],
    },
  ];

  return (
    <section id="stack" className="bg-bg py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-sm font-semibold tracking-widest uppercase text-mid mb-4 flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent reveal">
          Technical fluency
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
              className="bg-white border border-ghost rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-mid/30 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-sm font-bold tracking-widest uppercase text-mid mb-6 flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
                {group.title}
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center gap-2 bg-bg border border-ghost rounded-full py-2 px-4 text-sm font-medium text-ink shadow-sm transition-all duration-200 hover:bg-accent-soft hover:border-accent-line hover:text-accent hover:shadow-md cursor-default"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.name}
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
