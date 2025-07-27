import React from 'react';
import { motion } from 'framer-motion';


const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#F7DF1E"
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          color: "#3178C6"
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "#3776AB"
        }
      ]
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#E34F26"
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#1572B6"
        },
        {
          name: "ReactJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61DAFB"
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          color: "#000000"
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          color: "#06B6D4"
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          color: "#7952B3"
        }
      ]
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "#339933"
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          color: "#000000"
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47A248"
        },
        {
          name: "Mongoose",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
          color: "#880000"
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "#4479A1"
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
          color: "#DC382D"
        }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "#F05032"
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          color: "#181717"
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          color: "#007ACC"
        }
      ]
    }
  ];

  return (
       <div className="min-h-screen w-full bg-white relative text-gray-800">
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      `,
    }}
  />  
   <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
  <motion.div
    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Header */}
    <motion.div
      className="text-center mb-16"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider text-gray-900 dark:text-white">
        SKILLS
      </h1>
      <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
        Cutting Edge Technical Expertise
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
            {category.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 justify-items-center">
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
                <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-all duration-300 shadow-lg border border-gray-200 dark:border-gray-700">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-10 h-10 md:w-12 md:h-12 object-contain group-hover:drop-shadow-lg transition-all duration-300 
                      ${["Next.js", "Express.js", "GitHub"].includes(skill.name) ? "dark:invert" : ""}
                    `}
                  />
                </div>
                <h3 className="text-sm md:text-base font-medium text-center text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors duration-300">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom Stats */}
    <motion.div
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {[
        { value: "18+", label: "Technologies", color: "text-blue-500" },
        { value: "3+", label: "Years Experience", color: "text-green-500" },
        { value: "20+", label: "Projects", color: "text-purple-500" },
        { value: "100%", label: "Dedication", color: "text-orange-500" },
      ].map((stat, index) => (
        <motion.div
          key={index}
          className="group"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
            {stat.value}
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</section>
        </div>

  );
};

export default Skills;
