import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Doctor Appointment Booking',
    description:
      'A full-stack MERN app to book doctor appointments with role-based dashboards, secure authentication, and admin features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'JWT'],
    image: '/images/doctor-app.png', // Replace with your actual image path
    demoLink: 'https://doctor-booking-demo.vercel.app', // Replace with actual URL
    codeLink: 'https://github.com/sujeetkumar-29/doctor-appointment-booking',
  },
  {
    title: 'Expense Tracker',
    description:
      'Track daily/monthly expenses by category with interactive charts and clean UI. Built with React and local storage.',
    tech: ['React', 'JavaScript', 'Chart.js', 'LocalStorage', 'Tailwind CSS'],
    image: '/images/expense-tracker.png', // Replace with your actual image path
    demoLink: 'https://expense-tracker-demo.vercel.app',
    codeLink: 'https://github.com/sujeetkumar-29/expense-tracker',
  },
  {
    title: 'Expense Tracker',
    description:
      'Track daily/monthly expenses by category with interactive charts and clean UI. Built with React and local storage.',
    tech: ['React', 'JavaScript', 'Chart.js', 'LocalStorage', 'Tailwind CSS'],
    image: '/images/expense-tracker.png', // Replace with your actual image path
    demoLink: 'https://expense-tracker-demo.vercel.app',
    codeLink: 'https://github.com/sujeetkumar-29/expense-tracker',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
          Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Here are some of the projects I've worked on, showcasing my skills in full-stack development,
          clean UI design, and efficient data handling.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs text-gray-700"
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
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
