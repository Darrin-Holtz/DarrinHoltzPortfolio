import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Meet <span className="text-primary">Darrin</span>
          <p className="mt-4 text-xl">Curious mind. Builder at heart. Always building something useful, creative, or just plain cool.</p>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6 text-primary">What I&apos;ve Been Up To</h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
              <p>
                When I’m not serving in ministry, worshipping, or studying the Word of God with my brothers and sisters in Christ,
                I’m usually building something — software, designs, or digital tools that solve real problems and spark curiosity.
              </p>
              <p>
                I’ve spent the last few years creating and offering my work through platforms like{" "}
                <strong>Fiverr</strong>, <strong>Behance</strong>, and <strong>Dribbble</strong> — connecting with people, developing
                custom projects, and keeping up on the latest technologies.
              </p>
              <p>
                Whether I’m coding a web app, designing a print for Etsy, or launching a new product through my store, I approach it all with
                the same mindset: build with purpose, stay curious, and keep growing — in faith, in craft, and in impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="cosmic-button text-center">
                  Get In Touch
                </a>
                <a
                  href="" className="px-6 py-2 rounded-full border border-primary text-center text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10" >
                  <Code className="w-6 h-6 text-primary"/>
                </div> 
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Whether it's a simple app or a full platform, every project is a chance to build with purpose, excellence, and love.
                  </p>
                </div>                 
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10" >
                  <User className="w-6 h-6 text-primary"/>
                </div> 
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    It's not just about how things look, but how easy it is for visitors to navigate your site and feeling welcome.
                  </p>
                </div>              
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10" >
                  <Briefcase className="w-6 h-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    It's about Bringing vision to life — aligning ideas, people, and purpose to build something that truly serves. It’s where strategy meets stewardship.
                  </p>
                </div>                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
