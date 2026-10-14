const experience = [
  {
    role: "Senior Full Stack Engineer",
    company: "Ministry of Justice",
    period: "2024 — Present",
    location: "Remote",
    points: [
      "Build and maintain accessible, high-traffic digital services for the justice system to GDS standards.",
      "Deliver full-stack features — React and Next.js frontends backed by Node.js and GraphQL APIs.",
      "Collaborate with cross-functional teams to ship reliable, well-tested services at scale.",
    ],
    tags: ["React", "Next.js", "Node.js", "GraphQL", "Accessibility"],
  },
  {
    role: "Senior Engineer",
    company: "Togather",
    period: "2021 — 2024",
    location: "Remote",
    points: [
      "Led frontend development across the platform while building and maintaining API endpoints and GraphQL schemas.",
      "Shipped performant, accessible interfaces and improved developer experience with testing and CI pipelines.",
      "Worked closely with product and design to deliver features end to end.",
    ],
    tags: ["React", "TypeScript", "GraphQL", "Node.js"],
  },
  {
    role: "Senior Developer",
    company: "Battalion",
    period: "2020 — 2021",
    location: "Remote",
    points: [
      "Delivered client web applications end to end, from UI through to API integration.",
      "Built responsive, accessible interfaces and contributed to backend endpoints.",
    ],
    tags: ["JavaScript", "React", "APIs"],
  },
  {
    role: "Freelance Engineer",
    company: "Self-employed",
    period: "2012 — 2020",
    location: "Remote",
    points: [
      "Designed and built web applications for a range of clients, from marketing sites to full-stack products.",
      "Owned projects end to end — frontend, backend APIs, deployment, and ongoing maintenance.",
    ],
    tags: ["JavaScript", "React", "Node.js", "APIs"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-10"
    >
      <h2 className="text-2xl tracking-tight text-ink">Experience</h2>
      <div className="mt-6 space-y-8">
        {experience.map((job) => (
          <article
            key={job.company}
            className="border-l-2 border-line pl-5 transition-colors hover:border-ink"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-ink">
                {job.role}{" "}
                <span className="font-normal text-muted">· {job.company}</span>
              </h3>
              <span className="text-sm font-medium text-muted">
                {job.period}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-muted">{job.location}</p>
            <ul className="mt-3 space-y-2">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-5 text-sm leading-relaxed text-body"
                >
                  <span
                    aria-hidden
                    className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-ink"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <ul className="mt-3 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs font-medium text-body"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
