import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
       <div className="bg-white dark:bg-gray-900 relative text-gray-800">
  {/* <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      `,
    }}
  />   */}
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-t dark:border-gray-700 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-6">
        {/* Left - Branding */}
        <div className="text-center md:text-left md:mb-0">
          <h2 className="text-xl font-semibold">Sujeet Kumar</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Frontend Developer & Problem Solver
          </p>
        </div>

        {/* Middle - Social Links */}
        <div className="flex gap-6 text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/sujeetkr503"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/sujeetkr503"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:sujeetkr503@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm py-4">
        © {new Date().getFullYear()} Sujeet Kumar. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;
