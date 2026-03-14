export default function Projects() {
  const projects = [
    {
      type: "Distributed Systems",
      name: "PulseQueue",
      desc: "A horizontally-scalable message broker built from scratch. Handles 450k+ events/second with at-least-once delivery guarantees and consumer group semantics.",
      tech: ["Go", "gRPC", "Raft Consensus", "Redis"],
      links: [
        { label: "GitHub \u2192", url: "#" },
        { label: "Case Study \u2192", url: "#" },
      ],
    },
    {
      type: "API Design",
      name: "Strata Auth",
      desc: "OAuth 2.0 / OIDC provider with multi-tenancy support. Sub-20ms token validation at the edge via Redis caching and JWT introspection.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
      links: [
        { label: "GitHub \u2192", url: "#" },
        { label: "Docs \u2192", url: "#" },
      ],
    },
    {
      type: "Data Engineering",
      name: "LedgerFlow",
      desc: "Real-time financial analytics pipeline ingesting 2M+ transactions/day. Leverages Kafka streams and Flink for sub-second aggregation with audit-grade durability.",
      tech: ["Java", "Kafka", "Apache Flink", "S3"],
      links: [
        { label: "GitHub \u2192", url: "#" },
        { label: "Architecture \u2192", url: "#" },
      ],
    },
    {
      type: "Infrastructure",
      name: "Scaff CLI",
      desc: "Developer experience tool that bootstraps production-ready microservice repositories with CI pipelines, Dockerfile, and IaC templates in under 30 seconds.",
      tech: ["Go", "Cobra CLI", "Terraform", "GitHub Actions"],
      links: [
        { label: "GitHub \u2192", url: "#" },
        { label: "npm \u2192", url: "#" },
      ],
    },
    {
      type: "Search & Retrieval",
      name: "SemanticVault",
      desc: "Vector-search layer over existing product catalogs. Implements HNSW indexing with hybrid BM25 + dense retrieval, cutting search latency from 800ms to 45ms.",
      tech: ["Python", "Elasticsearch", "pgvector", "OpenAI Ada"],
      links: [
        { label: "GitHub \u2192", url: "#" },
        { label: "Blog Post \u2192", url: "#" },
      ],
    },
    {
      type: "Open Source",
      name: "Metrik",
      desc: "Lightweight observability SDK for Python services. Auto-instruments FastAPI, SQLAlchemy, and Redis clients with zero-config Prometheus export and span context propagation.",
      tech: ["Python", "OpenTelemetry", "Prometheus", "PyPI"],
      links: [
        { label: "GitHub \u2192", url: "#" },
        { label: "PyPI \u2192", url: "#" },
      ],
    },
  ];

  return (
    <section id="projects" className="bg-white border-y border-ghost py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-sm font-semibold tracking-widest uppercase text-mid mb-4 flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent reveal">
          Selected work
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8 relative inline-block reveal section-title group">
          Problems solved,
          <br />
          systems shipped.
          <span className="block h-1 bg-accent w-0 group-[.in-view]:w-full mt-2 transition-all duration-700 ease-out rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="group relative bg-bg border border-ghost rounded-2xl p-8 cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl reveal flex flex-col h-full"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-accent scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>

              <div className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
                {proj.type}
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-tight leading-tight text-ink mb-4 group-hover:text-accent transition-colors">
                {proj.name}
              </h3>
              <p className="text-base text-ink/70 leading-relaxed mb-8 flex-grow">
                {proj.desc}
              </p>
              
              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-ghost border border-ghost/50 rounded-md py-1 px-3 text-xs font-semibold text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 mt-2 pt-4 border-t border-ghost">
                  {proj.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      className="text-sm font-bold text-ink flex items-center gap-1 border-b border-transparent hover:border-accent hover:text-accent transition-all pb-1 group/link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
