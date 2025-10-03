import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#F7DF1E",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          color: "#3178C6",
        },
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
          color: "#00599C",
        }
        // {
        //   name: "Python",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //   color: "#3776AB",
        // },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#E34F26",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#1572B6",
        },
        {
          name: "ReactJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61DAFB",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          color: "#000000",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          color: "#06B6D4",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          color: "#7952B3",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "#339933",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          color: "#000000",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47A248",
        },
        {
          name: "Mongoose",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
          color: "#880000",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "#4479A1",
        },
        // {
        //   name: "Redis",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        //   color: "#DC382D",
        // },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "#F05032",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          color: "#181717",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          color: "#007ACC",
        },
        {
          name: "Postman",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
          color: "#FF6C37",
        }
      ],
    },
  ];

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
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
        id="skills"
        className="relative z-10 py-20 px-6 sm:px-10 lg:px-14"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
              🚀 Skills
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
              My technical expertise across multiple domains
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-10 relative inline-block">
                  {category.title}
                  <span className="block w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-2 rounded-full"></span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center group cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-20 h-20 flex items-center justify-center rounded-2xl shadow-md border border-gray-300 dark:border-gray-700 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md transition-all duration-300 group-hover:shadow-xl">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className={`w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 ${
                            ["Next.js", "Express.js", "GitHub"].includes(
                              skill.name
                            )
                              ? "dark:invert"
                              : ""
                          }`}
                        />
                      </div>
                      <h3 className="mt-3 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                        {skill.name}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          {/* <motion.div
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                value: "18+",
                label: "Technologies",
                color: "from-blue-500 to-indigo-500",
              },
              {
                value: "3+",
                label: "Years Experience",
                color: "from-green-400 to-emerald-500",
              },
              {
                value: "20+",
                label: "Projects",
                color: "from-purple-500 to-pink-500",
              },
              {
                value: "100%",
                label: "Dedication",
                color: "from-orange-400 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-md shadow-md hover:shadow-lg transition"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-700 dark:text-gray-400 text-sm md:text-base mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
