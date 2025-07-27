import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Doctor Appointment Booking',
    description:
      'A full-stack MERN app to book doctor appointments with role-based dashboards, secure authentication, and admin features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'JWT'],
    image: '/assets/pulsemate.png',
    demoLink: 'https://doctor-booking-demo.vercel.app',
    codeLink: 'https://github.com/sujeetkumar-29/doctor-appointment-booking',
  },
  {
    title: 'Expense Tracker',
    description:
      'Track daily/monthly expenses by category with interactive charts and clean UI. Built with React and local storage.',
    tech: ['React', 'JavaScript', 'Chart.js', 'LocalStorage', 'Tailwind CSS'],
    image: '/assets/expensetracker.png',
    demoLink: 'https://expense-tracker-demo.vercel.app',
    codeLink: 'https://github.com/sujeetkumar-29/expense-tracker',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
          Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16">
          Here are some of the projects I've worked on, showcasing my skills in full-stack development,
          clean UI design, and efficient data handling.
        </p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-xs text-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
