"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xjkaqynz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mochamaddaffa05@gmail.com", href: "mailto:mochamaddaffa05@gmail.com" },
    { icon: Phone, label: "WhatsApp", value: "+62 (813) 9902-2005", href: "https://wa.me/6281399022005" },
    { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", href: "https://www.google.com/maps/place/Jakarta" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/dapss" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/mochamaddaffa/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_daaps/" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Have a project in mind? I'd love to hear about it</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8">I'm always interested in hearing about new projects and opportunities.</p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target flex items-center gap-4 p-4 bg-primary/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-accent/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <info.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-text font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-800/50">
              <p className="text-gray-400 mb-4">Connect on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-target w-10 h-10 bg-primary/40 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cursor-target w-full px-4 py-3 bg-primary/40 border border-gray-700/50 rounded-lg text-text placeholder-gray-500 focus:border-accent/50 focus:outline-none transition-colors backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cursor-target w-full px-4 py-3 bg-primary/40 border border-gray-700/50 rounded-lg text-text placeholder-gray-500 focus:border-accent/50 focus:outline-none transition-colors backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="cursor-target w-full px-4 py-3 bg-primary/40 border border-gray-700/50 rounded-lg text-text placeholder-gray-500 focus:border-accent/50 focus:outline-none transition-colors resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                className="cursor-target w-full py-4 bg-accent text-primary rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <> <CheckCircle size={20} /> Message Sent! </>
                ) : isSubmitting ? (
                  "Sending..."
                ) : (
                  <> <Send size={20} /> Send Message </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};