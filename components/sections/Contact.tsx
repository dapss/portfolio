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
    { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", href: "#" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Let's Connect</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Have a project in mind? I'd love to hear about it</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Get in Touch</h3>
              <p className="text-slate-400 mb-8">I'm always interested in hearing about new projects and opportunities.</p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target flex items-center gap-4 p-4 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center group-hover:bg-sky-500/20 transition-colors border border-sky-500/10">
                    <info.icon className="text-sky-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    <p className="text-slate-200 font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-800">
              <p className="text-slate-400 mb-4">Connect on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-target w-10 h-10 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/30 hover:shadow-sky-500/10 transition-all duration-300"
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
                <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cursor-target w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 focus:bg-slate-900/80 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cursor-target w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 focus:bg-slate-900/80 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="cursor-target w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 focus:bg-slate-900/80 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                className="cursor-target w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold tracking-wide hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-900/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border border-transparent hover:border-sky-400/50"
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