import { ArrowRight, ExternalLink } from "lucide-react";
// @ts-expect-error Deprecated but still works
import { Github } from "lucide-react";

const projects = [ 
  {
    id: 1,
    title: "Reactjs-Portfolio",
    description:
      "Built in 2024 when I was brainstorming portfolio ideas. It's a clean, animated developer portfolio built with React and styled-components. Features smooth scrolling, project showcases, and responsive design.",
    image: "/portfolio-website.png",
    tags: ['Reactjs', 'Sanity.io', 'SCSS'],
    demoUrl: "https://reactjs-portfolio-two-dun.vercel.app/",
    githubUrl: "https://github.com/Darrin-Holtz/Reactjs-Portfolio",
  },
  {
    id: 2,
    title: "Freedom Mountain Ministries",
    description:
     "A custom WordPress theme built from the ground up for a faith-based organization focused on spiritual retreats, events, and outreach. The site features a clean, responsive design with Tailwind CSS, dynamic event listings, a custom contact form with SMTP integration, and admin-friendly controls via the WordPress Customizer.Key Features: Fully responsive WordPress theme using TailwindCSS, Custom post types for Events and Retreats with dynamic schema, Integration with Google Calendar and iCal for event syncing, Custom-built contact form with Inputmask and Gmail SMTP support, Admin-controlled content via WordPress Customizer (hero images, contact info, etc.)Focused on UX clarity and accessibility for all age groups",
    image: "/fmm.png",
    tags: ['WordPress', 'Tailwindcss', 'PHP', 'UX Design'],
    demoUrl: "https://freedommountainministries.com",
    githubUrl: "https://github.com/Darrin-Holtz/freedom-mountain-ministries",
  }, 
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto text-sm italic">
          ⚠️ I'm currently in the process of recovering several of my past projects that were taken offline due to lost environment variables and hosting disruptions. Thanks for your patience!
        </p>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-justify text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>        
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Darrin-Holtz"
          >
            <Github size={20} /> Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
