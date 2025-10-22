"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary rounded-xl p-8 shadow-xl"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-text font-semibold mb-2">Email</h3>
                <p className="text-gray-400">your.email@example.com</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="text-text font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="text-text font-semibold mb-2">Location</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Button variant="primary" size="lg" href="mailto:your.email@example.com">
                Send Me a Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};