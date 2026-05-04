const capabilities = [
  {
    title: "Frontend Engineering",
    summary: "Responsive, component-driven interfaces that stay fast and stable as products grow.",
    proof: "Built modern React and Next.js experiences with polished UX and clean architecture.",
    stack: ["React", "Next.js", "TypeScript"],
    accent: "from-cyan-400/25 to-sky-400/5",
  },
  {
    title: "CMS and Content Systems",
    summary: "Editor-friendly sites that make publishing simple without sacrificing design quality.",
    proof: "Delivered custom WordPress and headless CMS setups that non-technical teams can manage.",
    stack: ["WordPress", "Sanity", "Payload"],
    accent: "from-emerald-400/25 to-lime-400/5",
  },
  {
    title: "E-commerce and Payments",
    summary: "Checkout and booking flows built for trust, clarity, and conversion.",
    proof: "Integrated Stripe checkout and webhook-driven booking confirmation workflows.",
    stack: ["Stripe", "Webhooks", "Checkout UX"],
    accent: "from-amber-400/25 to-orange-400/5",
  },
  {
    title: "Full-stack Integration",
    summary: "Connected frontends and APIs with reliable data models and secure request handling.",
    proof: "Shipped server-backed session and seat-hold flows with robust request/response logic.",
    stack: ["Node.js", "Express", "Convex"],
    accent: "from-violet-400/25 to-indigo-400/5",
  },
  {
    title: "Performance and Accessibility",
    summary: "Interfaces optimized for speed, readability, and smooth interaction across devices.",
    proof: "Applied semantic structure, responsive layouts, and lightweight animation strategies.",
    stack: ["Core Web Vitals", "A11y", "Responsive UI"],
    accent: "from-fuchsia-400/25 to-rose-400/5",
  },
  {
    title: "Delivery and Collaboration",
    summary: "Consistent shipping workflows from planning to production deployment.",
    proof: "Used Git-based collaboration and production checks to keep launches predictable.",
    stack: ["GitHub", "Vercel", "QA Flow"],
    accent: "from-teal-400/25 to-cyan-400/5",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-8 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

        <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Capabilities
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Skills That Create <span className="text-primary">Real Impact</span>
          </h2>

          <p className="mt-4 text-base text-white/80 md:text-lg">
            Instead of just listing tools, this is the value I bring to projects,
            from UX decisions to production delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/45 hover:bg-white/[0.09] hover:shadow-[0_20px_55px_rgba(0,0,0,0.32)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-40 transition-opacity duration-500 group-hover:opacity-75`}
              />

              <div className="relative z-10">
                <h3 className="text-left text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-left text-sm leading-relaxed text-white/85">
                  {item.summary}
                </p>

                <p className="mt-4 rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-left text-sm text-white/80">
                  {item.proof}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};