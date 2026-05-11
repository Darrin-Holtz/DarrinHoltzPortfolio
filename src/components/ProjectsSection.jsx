import { ArrowRight, ExternalLink } from "lucide-react";
// @ts-expect-error Deprecated but still works
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie Booking App",
    description:
      "QuickShow is a full-featured movie ticketing demo that simulates the complete cinema booking experience, from discovering films to confirming seats. Built with Next.js App Router, React, TypeScript, Convex, Better Auth, and TMDB, it includes movie browsing, rich detail pages, real-time seat holds, account management, favorites, bookings, Stripe checkout, and QR-based mobile tickets with staff scanning support. The app is production-ready with resilient TMDB integrations, metadata and sharing support, booking lifecycle logic for upcoming and past tickets, and analytics hooks for key funnel events. It is optimized for modern web deployment, with clear environment setup and verification steps using lint and build checks before release.",
    image: "/Screenshot-movie-booking-app.png",
    tags: ['Reactjs', 'Sanity.io', 'SCSS'],
    demoUrl: "https://movie-booking-app-weld.vercel.app/",
    githubUrl: "https://github.com/Darrin-Holtz/movie-booking-app",
  },
  {
    id: 2,
    title: "Harbor Lights Ministry",
    description:
     "A custom WordPress theme built from the ground up for a faith-based organization focused on spiritual retreats, events, and outreach. The site features a clean, responsive design with Tailwind CSS, dynamic event listings, a custom contact form with SMTP integration, and admin-friendly controls via the WordPress Customizer.Key Features: Fully responsive WordPress theme using TailwindCSS, Custom post types for Events and Retreats with dynamic schema, Integration with Google Calendar and iCal for event syncing, Custom-built contact form with Inputmask and Gmail SMTP support, Admin-controlled content via WordPress Customizer (hero images, contact info, etc.)Focused on UX clarity and accessibility for all age groups",
    image: "/HarborLights.png",
    tags: ['WordPress', 'Tailwindcss', 'PHP', 'UX Design'],
    demoUrl: "",
    githubUrl: "https://github.com/Darrin-Holtz/ministry-theme",
  },
  {
    id: 3,
    title: "HoltzDigital",
    description:
     "Buffalo web design agency website and blog built with Next.js 16, Convex, Better Auth, Tailwindcss and a custom admin dashboard. The site features a clean, modern design with a focus on showcasing the agency's portfolio and expertise. It includes a custom-built admin dashboard for easy content management, a blog section for sharing industry insights, and a contact form with SMTP integration for lead generation. The site is optimized for performance and SEO, with dynamic metadata and schema support for enhanced search visibility.",
    image: "/HoltzDigital.png",
    tags: ['Nextjs', 'Tailwindcss', 'Convex', 'UX Design'],
    demoUrl: "https://holtz-digital.vercel.app",
    githubUrl: "https://github.com/Darrin-Holtz/holtz-digital",
  },
];

export const ProjectsSection = () => {
  const getExcerpt = (text, limit = 200) => {
    if (text.length <= limit) return text;
    return `${text.slice(0, limit).trim()}...`;
  };

  return (
    <section id="projects" className="relative px-4 py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

        <div className="container mx-auto">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Selected Work
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="mt-3 text-white/80 md:text-lg">
            Each build below is focused on conversion-minded UX, speed, and
            maintainable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.09] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-black/40 via-black/20 to-black/40 p-3 md:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full rounded-2xl object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/30 bg-black/35 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
                  {String(index + 1).padStart(2, "0")} • Live Project
                </div>

                <h3 className="absolute bottom-4 left-4 right-4 text-left text-xl font-semibold text-white md:text-2xl">
                  {project.title}
                </h3>
              </div>

              <div className="p-6 md:p-7">
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mb-6 text-left text-sm leading-relaxed text-white/80 md:text-base">
                  {getExcerpt(project.description)}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-primary/60 hover:bg-white/10"
                  >
                    Source Code <Github size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-6 py-3 font-semibold text-primary transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/25"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Darrin-Holtz"
          >
            <Github size={20} />
            View More on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
