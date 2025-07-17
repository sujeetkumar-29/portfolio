import React, { useState } from 'react';
import { Home, User, FolderOpen, GraduationCap, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import DarkModeToggler from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Skills', icon: User, href: '#skills' },
    { name: 'Projects', icon: FolderOpen, href: '#projects' },
    { name: 'Education', icon: GraduationCap, href: '#education' },
    { name: 'Contact', icon: Mail, href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Sujeet Kumar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-1 lg:space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors duration-300 group"
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="hidden lg:inline">{item.name}</span>
                  </a>
                );
              })}
            </div>
            
            {/* Dark Mode Toggle */}
            <DarkModeToggler />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-700 px-3 py-3 rounded-md text-sm sm:text-base font-medium transition-colors duration-300 group"
                onClick={() => setIsOpen(false)}
              >
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{item.name}</span>
              </a>
            );
          })}
          
          {/* Mobile Dark Mode Toggle */}
          <div className="px-3 py-2">
            <DarkModeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;