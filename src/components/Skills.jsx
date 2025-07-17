import React from 'react';

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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider text-gray-900 dark:text-white">
            SKILLS
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Cutting Edge Technical Expertise
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110 shadow-lg border border-gray-200 dark:border-gray-700">
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              18+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Technologies</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              3+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Years Experience</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              20+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Projects</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
