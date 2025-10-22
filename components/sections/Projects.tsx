"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://placehold.co/800x600/1e293b/ffffff?text=800x600",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Project Beta",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    tech: ["React", "Python", "TensorFlow"],
    image: "https://placehold.co/800x600/1e293b/ffffff?text=800x600",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Project Gamma",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    tech: ["Next.js", "Socket.io", "MongoDB"],
    image: "https://placehold.co/800x600/1e293b/ffffff?text=800x600",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Project Delta",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    tech: ["Vue.js", "Node.js", "MySQL"],
    image: "https://placehold.co/800x600/1e293b/ffffff?text=800x600",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Project Epsilon",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    tech: ["React", "AWS", "FFmpeg"],
    image: "https://placehold.co/800x600/1e293b/ffffff?text=800x600",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Project Zeta",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    tech: ["React Native", "Firebase"],
    image: "https://placehold.co/800x600/1e293b/ffffff?text=800x600",
    github: "#",
    live: "#",
    featured: false,
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary border border-gray-800 hover:border-accent/30 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/50 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/50 border border-gray-700 rounded-lg text-gray-300 hover:text-accent hover:border-accent/30 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-primary rounded-lg hover:bg-blue-600 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group" href="https://github.com/dapss">
            View All Projects
            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};