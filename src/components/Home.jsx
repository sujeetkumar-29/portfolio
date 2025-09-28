import React from 'react';
import {
  Download,
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
    <div className="min-h-screen w-full relative text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900">
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(75,85,99,0.06) 14px, rgba(75,85,99,0.06) 15px),
            repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(75,85,99,0.06) 14px, rgba(75,85,99,0.06) 15px)
          `,
        }}
      />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-10 my-6">

            {/* Left Side - Text Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
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
                Passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I create dynamic, responsive web applications with modern technologies and best practices. Always eager to learn new technologies and solve complex problems with innovative solutions.
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
                      className="p-3 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400"
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
              <div className="relative mb-40">
                <div className="relative rounded-full shadow-2xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-md">
                  <img
                    src="/assets/sujeet.jpg"
                    alt="Sujeet Kumar"
                    className="w-40 h-40 sm:w-96 sm:h-96 lg:w-40 lg:h-40 xl:w-60 xl:h-60 rounded-full border border-gray-200 dark:border-gray-600 shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
