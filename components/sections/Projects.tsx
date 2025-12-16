"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

const getImagePath = (src: string) => {
  const repoName = "portfolio"; 
  const isProd = process.env.NODE_ENV === "production";
  return isProd ? `/${repoName}${src}` : src;
};

const projects = [
  {
    title: "Visit North Sumatra Portal",
    description: "A comprehensive travel guide SPA for North Sumatra. Features seamless client-side navigation, cultural insights, and culinary guides.",
    tech: ["React.js", "React Router", "Tailwind CSS"], 
    image: "/images/projects/visit-sumatra.png",
    github: "https://github.com/dapss/visitnorthsumatra",
    live: "#",
    featured: true,
  },
  {
    title: "Vocational HS Alumni Portal",
    description: "Dedicated alumni portal for SMK Negeri 4 Bandung. Allows graduates to register, update profiles, and network for career opportunities.",
    tech: ["React.js", "JavaScript", "REST API"],
    image: "/images/projects/alumni-portal.png",
    github: "https://github.com/RaditZX/AlumnieFe",
    live: "#",
    featured: false,
  },
  {
    title: "Donut KPK E-Catalog",
    description: "Digital storefront for a local MSME (UMKM). Serves as a company profile and catalog to build brand awareness.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/images/projects/donut-kpk.png",
    github: "https://github.com/dapss/donatkpk",
    live: "#",
    featured: false,
  },
  {
    title: "PHP-Electron Auction System",
    description: "Full-stack auction platform with a desktop client. Features real-time bidding, user auth, and item listings.",
    tech: ["PHP", "Electron.js", "MySQL"],
    image: "/images/projects/auction-system.png",
    github: "https://github.com/dapss/Auction",
    live: "#",
    featured: false,
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-black/20 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A selection of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col group hover:border-accent/50 transition-colors">
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={getImagePath(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/800x400/1e293b/ffffff?text=${encodeURIComponent(project.title)}`; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-accent/90 text-primary px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">Featured</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/50 border border-gray-700 text-gray-300 text-xs rounded-md">{tech}</span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto relative z-10">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-target flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 border border-gray-700 rounded-lg text-gray-300 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-105 active:scale-95">
                      <Github size={16} /> Code
                    </a>
                    {project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="cursor-target flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-primary rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 active:scale-95">
                        <ExternalLink size={16} /> Live
                        </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.8 }} className="text-center mt-12">
          <Button variant="outline" size="lg" className="group bg-primary/20 backdrop-blur-sm" href="https://github.com/dapss">
            View All Projects
            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};