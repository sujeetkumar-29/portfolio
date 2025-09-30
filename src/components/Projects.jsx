import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Doctor Appointment Booking",
    description:
      "A full-stack MERN app to book doctor appointments with role-based dashboards, secure authentication, and admin features.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT"],
    image: "/assets/pulsemate.png",
    demoLink: "https://puslemate-doctor-appointment-bookin.vercel.app/",
    codeLink: "https://github.com/sujeetkumar-29/puslemate-doctor-appointment-booking",
  },
  {
    title: "Expense Tracker",
    description:
      "Track daily/monthly expenses by category with interactive charts and clean UI. Built with React and local storage.",
    tech: ["React", "JavaScript", "Chart.js", "LocalStorage", "Tailwind CSS"],
    image: "/assets/expensetracker.png",
    demoLink: "https://expense-tracker-frontend-two-green.vercel.app/",
    codeLink: "https://github.com/sujeetkumar-29/expense-tracker",
  },
  {
    title: "Multiple AI Tools",
    description:
      "A collection of AI-powered tools including text generation, image generation, and code generation using OpenAI's API.",
    tech: ["React", "JavaScript", "Chart.js", "LocalStorage", "Tailwind CSS"],
    image: "/assets/multipleaitools.png",
    demoLink: "https://tasktrek-task-manager-frontend.vercel.app/",
    codeLink: "hhttps://github.com/sujeetkumar-29/tasktrek-task-manager",
  },
  {
    title: "TaskTrek- Task Management App",
    description:
      "TaskTrek is a full-stack productivity application for managing tasks, built with a React + Vite frontend and an Express + MongoDB backend.",
    tech: ["React", "JavaScript", "Chart.js", "LocalStorage", "Tailwind CSS"],
    image: "/assets/tasktrek.png",
    demoLink: "https://all-write-ai-studio-frontend-1vghw4ht8-sujeetkumar-29s-projects.vercel.app/",
    codeLink: "https://github.com/sujeetkumar-29/AllWrite-Ai-Studio",
  },
  {
    title: "Project with Javascript",
    description:
      "A collection of simple JavaScript projects demonstrating various functionalities and concepts.",
    tech: [ "JavaScript", "HTML", "CSS"],
    image: "/assets/projectjs.png",
    demoLink: "https://sujeetkumar-29.github.io/Project-with-JavaScript/",
    codeLink: "hhttps://github.com/sujeetkumar-29/Project-with-JavaScript",
  },
  {
    title: "PicServe- image website",
    description:
    "PicServe is a web application that allows users to upload images and download them. It provides a simple and intuitive interface for managing image files.",
    tech: ["HTML", "JavaScript", "CSS", "Node.js", "Express.js",  "MongoDB", "EJS",],
    image: "/assets/picserve.png",
    demoLink: "https://picserve-img-web.onrender.com/images",
    codeLink: "https://github.com/sujeetkumar-29/PicServe-img-web",
  },
  {
    title: "Pagepixel- Landing Page",
    description:
      "A collection of AI-powered tools including text generation, image generation, and code generation using OpenAI's API.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: "/assets/pagepixel.png",
    demoLink: "https://pagepixel.netlify.app/",
    codeLink: "https://github.com/sujeetkumar-29/PagePixel-Image-generator-app-LandingPage",
  },
  // {
  //   title: "Quora Post with crud operation",
  //   description:
  //     "This project demonstrates a RESTful CRUD application for managing Quora-like posts. It provides functionality to create, read, update, and delete posts, showcasing the integration of back-end logic and front-end templates.",
  //   tech: ["HTML", "JavaScript", "CSS", "Node.js", "Express.js",  "MongoDB", "EJS",],
  //   image: "/assets/quorapost.png",
  //   demoLink: "https://quora-posts-by-restful-api-crud-operation.onrender.com/posts",
  //   codeLink: "https://github.com/sujeetkumar-29/Quora-posts-by-RESTful-API-CRUD-operation",
  // },
];

const Projects = () => {
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
        id="projects"
        className="relative z-10 py-20 px-4 sm:px-8 lg:px-14"
      >
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">🚀 Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16">
            Here are some of the projects I've built, showcasing my skills in
            full-stack development, clean UI design, and efficient data handling.
          </p>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col bg-white/20 dark:bg-gray-800/20 backdrop-blur-md"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/30 dark:bg-gray-700/30 border border-gray-300 dark:border-gray-600 rounded-full text-xs text-gray-800 dark:text-gray-200 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-200/70 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition backdrop-blur-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
