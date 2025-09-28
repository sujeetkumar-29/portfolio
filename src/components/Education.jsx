import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    course: "B.Tech in Computer Science",
    institution: "Shri Shankaracharya Technical Campus, Bhilai",
    duration: "2022 - Present",
    cgpa: 8.5,
    logo: "/assets/shankaraLogo.png",
    description:
      "Pursuing B.Tech with a focus on full stack web development, data structures, and modern technologies such as React, Node.js, and MongoDB.",
  },
];

const Education = () => {
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
        id="education"
        className="relative z-10 py-20 px-6 sm:px-8 lg:px-12"
      >
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-extrabold mb-14 text-center text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            🎓 Education
          </motion.h2>

          <div className="space-y-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-gray-300 dark:border-gray-700 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-20 h-20 object-contain rounded-xl bg-white/60 dark:bg-gray-700/60 p-2 shadow-sm backdrop-blur-md"
                  />
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {edu.course}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3">
                    <span>{edu.duration}</span>
                    <span className="px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100/70 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300 backdrop-blur-sm">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Education;
