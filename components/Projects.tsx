"use client";

import { useRef } from "react";

interface Project {
  type: string;
  name: string;
  desc: string;
  tech: string[];
  links: { label: string; url: string }[];
}

function TiltCard({ proj, i }: { proj: Project; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    card.style.boxShadow = "0 24px 48px rgba(0,0,0,0.10)";
    card.style.borderColor = "rgba(0,85,255,0.2)";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    card.style.boxShadow = "";
    card.style.borderColor = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-bg border border-ghost rounded-2xl p-8 cursor-default overflow-hidden will-change-transform reveal flex flex-col h-full"
      style={{
        transition:
          "transform 0.15s cubic-bezier(0.25,1,0.5,1), box-shadow 0.3s ease, border-color 0.3s ease",
        transitionDelay: `${i * 100}ms`,
      }}
    >
      {/* Top Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-accent scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100"></div>

      {/* Subtle inner glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: "inset 0 0 40px rgba(0,85,255,0.04)" }}
      ></div>

      <div className="font-mono text-xs font-bold tracking-widest uppercase text-accent mb-4 relative z-10">
        {proj.type}
      </div>
      <h3 className="font-serif text-2xl font-bold tracking-tight leading-tight text-ink mb-4 group-hover:text-accent group-active:text-accent transition-colors relative z-10">
        {proj.name}
      </h3>
      <p className="text-base text-ink/70 leading-relaxed mb-8 flex-grow relative z-10">
        {proj.desc}
      </p>

      <div className="flex flex-col gap-6 mt-auto relative z-10">
        <div className="flex flex-wrap gap-2">
          {proj.tech.map((tag, j) => (
            <span
              key={j}
              className="font-mono bg-ghost border border-ghost/50 rounded-md py-1 px-3 text-[11px] font-semibold text-ink/70 uppercase tracking-wider"
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
              className="text-sm font-bold text-ink flex items-center gap-1 relative group/link"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-accent scale-x-0 origin-right transition-transform duration-300 group-hover/link:scale-x-100 group-hover/link:origin-left"></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      type: "Distributed Systems",
      name: "PulseQueue",
      desc: "A horizontally-scalable message broker built from scratch. Handles 450k+ events/second with at-least-once delivery guarantees and consumer group semantics.",
      tech: ["Go", "gRPC", "Raft Consensus", "Redis"],
      links: [
        { label: "GitHub →", url: "#" },
        { label: "Case Study →", url: "#" },
      ],
    },
    {
      type: "API Design",
      name: "Strata Auth",
      desc: "OAuth 2.0 / OIDC provider with multi-tenancy support. Sub-20ms token validation at the edge via Redis caching and JWT introspection.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
      links: [
        { label: "GitHub →", url: "#" },
        { label: "Docs →", url: "#" },
      ],
    },
    {
      type: "Data Engineering",
      name: "LedgerFlow",
      desc: "Real-time financial analytics pipeline ingesting 2M+ transactions/day. Leverages Kafka streams and Flink for sub-second aggregation with audit-grade durability.",
      tech: ["Java", "Kafka", "Apache Flink", "S3"],
      links: [
        { label: "GitHub →", url: "#" },
        { label: "Architecture →", url: "#" },
      ],
    },
    {
      type: "Infrastructure",
      name: "Scaff CLI",
      desc: "Developer experience tool that bootstraps production-ready microservice repos with CI pipelines, Dockerfile, and IaC templates in under 30 seconds.",
      tech: ["Go", "Cobra CLI", "Terraform", "GitHub Actions"],
      links: [
        { label: "GitHub →", url: "#" },
        { label: "npm →", url: "#" },
      ],
    },
    {
      type: "Search & Retrieval",
      name: "SemanticVault",
      desc: "Vector-search layer over existing product catalogs. Implements HNSW indexing with hybrid BM25 + dense retrieval, cutting search latency from 800ms to 45ms.",
      tech: ["Python", "Elasticsearch", "pgvector", "OpenAI Ada"],
      links: [
        { label: "GitHub →", url: "#" },
        { label: "Blog Post →", url: "#" },
      ],
    },
    {
      type: "Open Source",
      name: "Metrik",
      desc: "Lightweight observability SDK for Python services. Auto-instruments FastAPI, SQLAlchemy, and Redis clients with zero-config Prometheus export and span context propagation.",
      tech: ["Python", "OpenTelemetry", "Prometheus", "PyPI"],
      links: [
        { label: "GitHub →", url: "#" },
        { label: "PyPI →", url: "#" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white border-y border-ghost min-h-[100dvh] py-16 md:py-24 flex flex-col justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="font-mono text-sm font-semibold tracking-widest uppercase text-mid mb-4 flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent reveal">
          03. Selected work
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8 relative inline-block reveal section-title group">
          Problems solved,
          <br />
          systems shipped.
          <span className="block h-1 bg-accent w-0 group-[.in-view]:w-full mt-2 transition-all duration-700 ease-out rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl">
          {projects.map((proj, i) => (
            <TiltCard key={i} proj={proj} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
