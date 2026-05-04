import Speech from "./Speech";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">

      {/* ── FIXED LEFT SOCIAL SIDEBAR ── */}
      <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3 py-4 px-3 bg-[#2f204e]/80 backdrop-blur rounded-r-2xl border-r border-white/10 shadow-xl">
        <a href="https://www.instagram.com/akadarrinholtz/" target="_blank" rel="noreferrer" className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors">
          <img src="/instagram.png" alt="Instagram" className="rounded-full w-5 h-5"/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100095272927131" target="_blank" rel="noreferrer" className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors">
          <img src="/facebook.png" alt="Facebook" className="rounded-full w-5 h-5"/>
        </a>
        <a href="https://www.linkedin.com/in/darrin-holtz-a6909a2b1/" target="_blank" rel="noreferrer" className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors">
          <img src="/linkedin.jpeg" alt="LinkedIn" className="rounded-full w-5 h-5"/>
        </a>
        <div className="w-px h-6 bg-white/20 my-1" />
        <span className="text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase" style={{ writingMode: "vertical-rl" }}>Follow</span>
      </div>

      {/* ── BACKGROUND SHAPE + HERO IMAGE ── */}
      {/* Glow halo */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
      {/* Shape circle – background, centered behind hero figure */}
      <div className="pointer-events-none absolute bottom-[20%] left-1/2 -translate-x-1/2 z-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px]">
        <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" style={{ fill: 'hsl(var(--primary))' }}/>
        </svg>
      </div>
      {/* Hero image – in front of circle */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-[5] h-[72%] sm:h-[78%] lg:h-[90%] w-auto">
        <img src="/hero.png" alt="Darrin Holtz" className="h-full w-auto object-contain object-bottom [mask-image:linear-gradient(to_top,transparent_0%,black_18%)]"/>
      </div>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col">

        {/* TOP ROW: headline left, speech bubble right */}
        <div className="flex flex-col lg:flex-row items-start justify-between pt-20 lg:pt-28 gap-6">

          {/* Headline + subhead + description + awards */}
          <div className="flex flex-col gap-5 max-w-lg">
            {/* Founder badge */}
            <a
              href="https://holtz-digital.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur transition-all duration-300 hover:border-primary hover:bg-primary/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Founder of Holtz-Digital
              <ExternalLink size={11} />
            </a>

            <h1 className="text-left text-5xl sm:text-7xl lg:text-[90px] font-bold leading-[1.05]">
              <span className="text-primary">Hey There,</span>
              <br />
              <span className="text-foreground">I&apos;m Darrin!</span>
            </h1>

            <div className="space-y-3">
              <h2 className="text-left text-xl lg:text-2xl font-bold text-white">Top Rated Designer</h2>
              <p className="text-left text-sm lg:text-base text-white/80 max-w-sm leading-relaxed">
                Awarded for standout creative work on{" "}
                <strong className="text-white">Fiverr, Behance,</strong> and{" "}
                <strong className="text-white">Dribbble</strong>. Known for clean design, fast delivery, and turning ideas into high-impact visuals.
              </p>
            </div>

            {/* Awards row */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-white/50 font-semibold">Recognized on</span>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
                {['award1.png', 'award2.png', 'award3.png'].map((src, i) => (
                  <img key={i} src={`/${src}`} alt={`award-${i}`} className="w-8 h-8 p-1.5 bg-white rounded-full object-contain"/>
                ))}
              </div>
            </div>
          </div>

          {/* Speech bubble – in flex flow, not absolute, so it never overlaps navbar */}
          <div className="hidden lg:flex self-start mt-2 max-w-[300px] xl:max-w-[340px]">
            <Speech />
          </div>
        </div>

        {/* BOTTOM ROW: scroll indicator left-center, certificate + hire button right */}
        <div className="mt-auto mb-10 flex items-end justify-between">

          {/* Animated scroll mouse */}
          <motion.a
            href="#about"
            animate={{ y: [0, 6], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z" stroke="white" strokeWidth="1"/>
              <path d="M12 5V8" stroke="white" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <span className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Scroll</span>
          </motion.a>

          {/* Certificate + rotating hire button */}
          <div className="hidden lg:flex flex-col items-center gap-5">
            {/* Certificate */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
              <img src="/certificate.png" alt="LMA Certificate" className="w-12 h-12 object-contain"/>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">LMA Certified</p>
                <p className="text-sm font-semibold text-white">Professional UI Designer</p>
              </div>
            </div>

            {/* Rotating contact button */}
            <motion.a
              href="/#contact"
              className="cursor-pointer"
              animate={{ x: [80, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
            >
              <motion.div
                className="relative drop-shadow-[0_0_18px_hsl(var(--primary)/0.45)]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 200 200" className="w-32 h-32 lg:w-36 lg:h-36">
                  <circle cx="100" cy="100" r="90" style={{ fill: 'hsl(var(--primary))' }}/>
                  <path id="innerCirclePath" fill="none" d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"/>
                  <text className="tracking-[3px] text-[20px]">
                    <textPath href="#innerCirclePath">Hire Now •</textPath>
                  </text>
                  <text className="tracking-[3px] text-[20px]">
                    <textPath href="#innerCirclePath" startOffset="44%">Contact Me •</textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto w-[80px] h-[80px] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="black" strokeWidth="2">
                    <line x1="6" y1="18" x2="18" y2="6"/>
                    <polyline points="9 6 18 6 18 15"/>
                  </svg>
                </div>
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
