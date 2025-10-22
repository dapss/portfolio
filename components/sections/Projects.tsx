"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "https://via.placeholder.com/600x400/1e293b/3b82f6?text=E-Commerce",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Analytics Dashboard",
    description: "Advanced analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    image: "https://via.placeholder.com/600x400/1e293b/a855f7?text=AI+Dashboard",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with instant messaging, posts, stories, and interactive features.",
    tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    image: "https://via.placeholder.com/600x400/1e293b/10b981?text=Social+App",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management Tool",
    description: "Collaborative project management tool with Kanban boards, team collaboration, and time tracking.",
    tech: ["Vue.js", "Node.js", "Express", "MySQL"],
    image: "https://via.placeholder.com/600x400/1e293b/f59e0b?text=Task+Manager",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Video Streaming Platform",
    description: "Scalable video streaming service with adaptive bitrate, live streaming, and content management.",
    tech: ["React", "AWS", "FFmpeg", "Redis"],
    image: "https://via.placeholder.com/600x400/1e293b/ef4444?text=Video+Stream",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Fitness Tracker App",
    description: "Mobile-first fitness tracking app with workout plans, progress tracking, and social features.",
    tech: ["React Native", "Firebase", "Redux", "Charts.js"],
    image: "https://via.placeholder.com/600x400/1e293b/06b6d4?text=Fitness+Tracker",
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-secondary">
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
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ParallaxSection key={index} speed={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary text-accent text-xs rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2 flex-1"
                        href={project.github}
                      >
                        <Github size={16} />
                        Code
                      </Button>
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="flex items-center gap-2 flex-1"
                        href={project.live}
                      >
                        <ExternalLink size={16} />
                        Live
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" href="https://github.com">
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};