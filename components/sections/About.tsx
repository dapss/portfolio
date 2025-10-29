"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/Button";
import { Download, ArrowRight, Sparkles, Target, Rocket } from "lucide-react";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Sparkles,
      title: "Creative Problem Solver",
      description: "Turning complex challenges into elegant solutions",
    },
    {
      icon: Target,
      title: "Detail-Oriented",
      description: "Pixel-perfect implementation with clean code",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and frameworks",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-accent rounded-full"></div>
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-text mb-4">
                    Hi, I'm a Front-end Developer
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    With over 4 years of experience, I specialize in building
                    scalable web applications that deliver exceptional user
                    experiences. My journey in tech has been driven by curiosity
                    and a passion for solving real-world problems.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in writing clean, maintainable code and staying
                    up-to-date with the latest industry trends. When I'm not
                    coding, you'll find me exploring new frameworks,
                    contributing to open-source, or sharing knowledge with the
                    developer community.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/50 border border-gray-700 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <Button
                  variant="primary"
                  className="group flex items-center gap-2"
                >
                  <a href="https://dapss.github.io/resume/Resume.pdf">Download CV</a>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </Button>
              </div>
            </motion.div>

            {/* Right Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 20,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  className="bg-primary/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-text font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
