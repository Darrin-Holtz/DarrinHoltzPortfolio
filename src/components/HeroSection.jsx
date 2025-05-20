import Speech from "./Speech";
import Shape  from "./Shape";
import { ArrowDown } from "lucide-react";
import { motion }from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="hero" className="container relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-4 py-10">

      <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-8 z-10">
        <h1 className="lg:text-left text-4xl sm:text-8xl md:text-6xl lg:text-[100px] font-bold leading-tight text-primary mt-10 lg:mt-24">
          Hey There,
          <br />
          <span className="text-foreground">I'm Darrin!</span>
        </h1>

        <div className="text-center lg:text-left space-y-4 w-full">
          <h2 className="text-2xl lg:text-3xl font-bold">Top Rated Designer</h2>
          <p className="md:w-1/2 lg:mx-0 mx-auto text-sm lg:text-xl text-[#ddd] sm:text-center md:text-justify lg:text-left">
            Awarded for standout creative work on <strong>Fiverr, Behance, and Dribbble</strong>. Known for clean design, fast delivery, and a passion for turning ideas into high-impact visuals.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            {['award1.png', 'award2.png', 'award3.png'].map((src, i) => (
              <img
                key={i}
                src={`/${src}`}
                alt={`award-${i}`}
                className="w-11 h-11 p-2 bg-white rounded-full"
              />
            ))}
          </div>
        </div>

        <motion.a animate={{y:[0,5], opacity:[0,1,0]}} transition={{repeat: Infinity, duration: 4, ease: "easeInOut"}} href="#about" className="w-full flex justify-center lg:justify-start mb-12 cursor-pointer relative z-10">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="w-full h-full lg:w-1/2 flex flex-col justify-between items-end py-8 space-y-6 mt-12 lg:mt-0">
        <div className="hidden lg:flex flex-col gap-3 p-4 bg-[#2f204e] rounded-br-[10px] z-[10]">
          <a href="https://www.instagram.com/akadarrinholtz/" target="_blank">
            <img src="/instagram.png" alt="" className="rounded-full w-5 h-5"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100095272927131" target="_blank">
            <img src="/facebook.png" alt="" className="rounded-full w-5 h-5"/>
          </a>
          <a href="https://www.linkedin.com/in/darrin-holtz-a6909a2b1/" target="_blank">
            <img src="/linkedin.jpeg" alt="" className="rounded-full w-5 h-5"/>
          </a>
          <div className="rounded-full w-6 h-6">
            <div className="bg-[#dd4c62] text-[12px] rotate-90 w-max h-full origin-top-left translate-x-6 px-2 flex items-center rounded-br-[10px]">Follow Me</div>
          </div> 
        </div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <div className="hidden w-[60%] lg:flex flex-col items-center gap-2 text-center leading-6 font-light text-[#ddd] z-10">
          <img src="/certificate.png" alt="" className="w-[70px] h-[70px]"/>
          LMA CERTIFIED
          <br/>
          Professional
          <br/>
          UI Designer 
        </div>
        {/* CONTACT BUTTON */}
        <motion.a href="/#contact" className="cursor-pointer relative z-10" animate={{ x: [200, 0], opacity: [0, 1]}} transition={{ duration: 2}}>
          <motion.div className="relative" animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear"}}>
              <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-36 md:h-36 lg:w-[150px] lg:h-[150px]"> 
                <circle cx="100" cy="100" r="90" style={{ fill: 'hsl(var(--primary))' }}/>
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="tracking-[3px] text-[20px]">
                  <textPath href="#innerCirclePath">Hire Now •</textPath>
                </text>
                <text className="tracking-[3px] text-[20px]">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 m-auto w-[80px] h-[80px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Circle */}
          <Shape />          
        <div className="absolute bottom-0 right-0 left-0 mx-auto h-[50%] sm:h-[65%] lg:h-[80%] w-max">
          <img src="/hero.png" alt="" className="h-full w-full object-cover"/>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
