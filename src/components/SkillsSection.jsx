import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", description: "Semantic markup and responsive, accessible styling" },
  { name: "JavaScript", level: 90, category: "frontend", description: "Modern ES6+ syntax, DOM manipulation, event handling" },
  { name: "React", level: 90, category: "frontend", description: "Reusable components, hooks, and SPA architecture" },
  { name: "TypeScript", level: 85, category: "frontend", description: "Typed React components and safer JavaScript" },
  { name: "Tailwind CSS", level: 90, category: "frontend", description: "Utility-first CSS for responsive and fast UI design" },
  { name: "Next.js", level: 80, category: "frontend", description: "Server-side rendering, API routes, and app routing" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", description: "Server-side JavaScript with event-driven architecture" },
  { name: "Express", level: 75, category: "backend", description: "REST APIs and middleware in a lightweight Node.js framework" },
  { name: "MongoDB", level: 70, category: "backend", description: "NoSQL database for flexible, document-based data modeling" },
  { name: "PostgreSQL", level: 65, category: "backend", description: "Relational database with strong data integrity and SQL" },
  { name: "PHPMyAdmin", level: 90, category: "backend", description: "GUI for managing MySQL databases, tables, and queries" },

  // CMS
  { name: "WordPress", level: 95, category: "cms", description: "Custom themes, Elementor, content workflows" },
  { name: "Sanity.io", level: 80, category: "cms", description: "Structured content modeling with real-time editing" },
  { name: "Payload CMS", level: 75, category: "cms", description: "Headless CMS with full backend control and TypeScript support" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", description: "Version control, branching, and collaboration workflows" },
  { name: "Photopea", level: 70, category: "tools", description: "Browser-based image editing for quick design tasks" },
  { name: "Figma", level: 85, category: "tools", description: "UI design, wireframes, and prototyping with collaboration" },
  { name: "VS Code", level: 95, category: "tools", description: "Code editing with extensions, snippets, and terminal integration" },

  // Payment Gateways
  { name: "Stripe", level: 85, category: "payment gateways", description: "Checkout, API integration, webhooks, and invoicing" },
];

const categories = ["all", "frontend", "backend", "tools", "cms", "payment gateways"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span> Set
          <p className="mt-4 text-xl">Tools I'm familiar with when designing, building, and deploying projects</p>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 relative group cursor-pointer">
                <h3 className="font-semibold text-lg"> {skill.name}
                    <span className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-max max-w-xs rounded bg-gray-800 px-3 py-1 text-xs text-white shadow-lg z-10">
                        {skill.description}
                    </span>
                </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};