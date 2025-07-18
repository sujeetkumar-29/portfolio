import React from 'react';
import {
  Download,
  MessageCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Briefcase,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const handleResumeDownload = () => {
    console.log('Downloading resume...');
  };

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sujeetkumar-29', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sujeetkumar29', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sujeetkr503@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 my-6">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Sujeet Kumar
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  Full Stack MERN Developer
                </h2>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-600 dark:text-gray-400">Based in India</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
              I create dynamic, responsive web applications with modern technologies and best practices. 
              Always eager to learn new technologies and solve complex problems with innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </motion.button>
              <motion.button
                onClick={handleHireMe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
              >
                <Briefcase className="h-5 w-5" />
                Hire Me
              </motion.button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border hover:border-blue-600 dark:border-gray-600 dark:hover:border-blue-400"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-6 w-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Profile Picture */}
          <motion.div
            className="flex-shrink-0 lg:order-first"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-800 rounded-full shadow-2xl">
                <img
                  src="/assets/sujeet.jpg"
                  alt="Sujeet Kumar"
                  className="w-40 h-40 sm:w-96 sm:h-96 lg:w-60 lg:h-60 xl:w-80 xl:h-80 rounded-full border shadow-lg"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Code className="h-8 w-8 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
