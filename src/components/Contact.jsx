import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", formData);
    // TODO: Integrate with EmailJS, Formspree, or backend API
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(75,85,99,0.1) 14px, rgba(75,85,99,0.1) 15px),
            repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(75,85,99,0.1) 14px, rgba(75,85,99,0.1) 15px)
          `,
        }}
      />

      <section
        id="contact"
        className="relative z-10 py-20 px-4 sm:px-8 lg:px-12"
      >
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ✉️ Contact Me
          </motion.h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Feel free to reach out for opportunities, collaborations, or just to
            say hello! I’d love to connect with you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md shadow hover:shadow-lg transition">
                <div className="bg-blue-100 dark:bg-blue-600/20 p-3 rounded-full">
                  <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <span className="text-gray-800 dark:text-gray-300">
                  sujeetkr503@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md shadow hover:shadow-lg transition">
                <div className="bg-blue-100 dark:bg-blue-600/20 p-3 rounded-full">
                  <MapPin className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <span className="text-gray-800 dark:text-gray-300">
                  Durg, Chhattisgarh, India
                </span>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md shadow-md space-y-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-900/40 backdrop-blur-sm rounded-lg text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-900/40 backdrop-blur-sm rounded-lg text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-900/40 backdrop-blur-sm rounded-lg text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
