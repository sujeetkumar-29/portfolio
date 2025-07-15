import React, { useState } from 'react';
import { Home, User, FolderOpen, GraduationCap, Mail, Menu, X } from 'lucide-react';

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
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Sujeet Kumar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group"
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 group"
                onClick={() => setIsOpen(false)}
              >
                <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;