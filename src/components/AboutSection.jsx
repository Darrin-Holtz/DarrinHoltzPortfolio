import { ArrowRight, Briefcase, Handshake, Sparkles } from "lucide-react";

const impactCards = [
  {
    title: "Product-Ready Development",
    description:
      "I build modern web experiences that balance clean UI, performance, and maintainable architecture.",
    icon: Briefcase,
  },
  {
    title: "Conversion-Minded UX",
    description:
      "Every page is designed to guide people clearly, reduce friction, and help them take the next step.",
    icon: Sparkles,
  },
  {
    title: "Reliable Collaboration",
    description:
      "From planning to launch, I communicate clearly, hit milestones, and keep projects moving forward.",
    icon: Handshake,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            About Me
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Building Digital Experiences With
            <span className="text-primary"> Purpose</span>
          </h2>

          <p className="mt-4 text-base text-white/80 md:text-lg">
            I help brands and organizations turn ideas into practical, modern
            digital products that people actually enjoy using.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-7 text-left backdrop-blur-md md:p-8">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              What I&apos;ve Been Focused On
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
              <p>
                I combine engineering and design to ship websites and products
                that are fast, clear, and conversion-minded. My work usually
                sits at the intersection of custom development, thoughtful UX,
                and practical business goals.
              </p>
              <p>
                Over the last few years, I&apos;ve worked with clients through
                platforms like Fiverr, Behance, and direct collaborations,
                building everything from ministry websites to booking and
                e-commerce flows.
              </p>
              <p>
                My approach is simple: listen first, build intentionally, and
                deliver work that keeps performing after launch.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-left">
                <p className="text-xs uppercase tracking-wide text-white/60">Focus</p>
                <p className="mt-1 text-sm font-semibold text-white">Web Apps + UX</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-left">
                <p className="text-xs uppercase tracking-wide text-white/60">Strength</p>
                <p className="mt-1 text-sm font-semibold text-white">CMS + Custom Builds</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-left">
                <p className="text-xs uppercase tracking-wide text-white/60">Now</p>
                <p className="mt-1 text-sm font-semibold text-white">Booking + Payment Flows</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105">
                Let&apos;s Build Something
                <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-primary/60 hover:bg-white/10"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {impactCards.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-white/15 bg-white/5 p-5 text-left backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/45 hover:bg-white/[0.09]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/20 bg-black/25 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
