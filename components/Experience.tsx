export default function Experience() {
  const experiences = [
    {
      date: "2023 \u2014 Present",
      role: "Senior Backend Engineer",
      company: "Fintech Startup, Jakarta",
      desc: [
        "Redesigned the payment processing pipeline, reducing transaction failure rates from 2.1% to 0.3%.",
        "Led migration from monolith to microservices, enabling independent scaling and cutting infrastructure costs 38%.",
        "Mentored three junior engineers and established internal RFCs for architectural decisions.",
      ],
    },
    {
      date: "2021 \u2014 2023",
      role: "Backend Developer",
      company: "E-commerce Platform, Remote",
      desc: [
        "Built the inventory reservation system handling flash sales with 50k concurrent users.",
        "Implemented CDC pipelines from PostgreSQL to Elasticsearch, enabling real-time search indexing.",
        "Delivered the internal SDK that reduced new service onboarding time by 60%.",
      ],
    },
    {
      date: "2020 \u2014 2021",
      role: "Junior Software Engineer",
      company: "Software Agency, Bandung",
      desc: [
        "Developed REST APIs for government and healthcare clients using Spring Boot.",
        "Introduced automated testing pipelines, raising code coverage from 12% to 71%.",
      ],
    },
    {
      date: "2016 \u2014 2020",
      role: "B.Sc. Computer Science",
      company: "Institut Teknologi Bandung",
      desc: [
        'Graduated with distinction. Thesis: "Optimizing graph traversal for geospatial routing at scale."',
        "Founded the Backend Engineering study group, 120+ active members at peak.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-bg min-h-[100dvh] py-16 md:py-24 flex flex-col justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="font-mono text-sm font-semibold tracking-widest uppercase text-mid mb-4 flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-accent reveal">
          04. Work history
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-12 relative inline-block reveal section-title group">
          Where I&apos;ve built
          <br />& what I&apos;ve learned.
          <span className="block h-1 bg-accent w-0 group-[.in-view]:w-full mt-2 transition-all duration-700 ease-out rounded-full"></span>
        </h2>

        <div className="max-w-3xl mt-12 relative border-l-2 border-ghost ml-2 md:ml-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="pl-7 md:pl-10 pb-16 relative group last:pb-0 reveal"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-bg border-4 border-ink transition-colors duration-300 group-hover:bg-accent group-hover:border-accent"></div>

              <div className="font-mono text-sm font-bold tracking-widest uppercase text-mid mb-2">
                {exp.date}
              </div>
              <div className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-ink mb-1 group-hover:text-accent transition-colors">
                {exp.role}
              </div>
              <div className="font-mono text-sm font-semibold text-accent mb-4 tracking-wider uppercase">
                {exp.company}
              </div>
              <ul className="text-base text-ink/70 leading-relaxed space-y-2">
                {exp.desc.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-accent before:font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
