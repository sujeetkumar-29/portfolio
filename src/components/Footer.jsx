import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t  px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left - Branding */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <h2 className="text-xl  font-semibold">Sujeet Kumar</h2>
          <p className="text-gray-600 text-sm">Frontend Developer & Problem Solver</p>
        </div>

        {/* Middle - Social Links */}
        <div className="flex gap-6 text-gray-700">
          <a
            href="https://github.com/sujeetkr503"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/sujeetkr503"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:sujeetkr503@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 text-sm mb-4">
        © {new Date().getFullYear()} Sujeet Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
