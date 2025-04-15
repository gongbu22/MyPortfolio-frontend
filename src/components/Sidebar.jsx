import React from 'react';

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-56 h-[calc(45vh-5rem)] fixed top-20 left-0 p-6 bg-white rounded-lg border border-blue-500 shadow-lg">
      <nav className="space-y-4">
        <a href="#home" className="text-gray-800 hover:text-blue-500 font-semibold block py-2 px-4 rounded-lg transition-all duration-300">Home</a>
        <a href="#about" className="text-gray-800 hover:text-blue-500 font-semibold block py-2 px-4 rounded-lg transition-all duration-300">About Me</a>
        <a href="#projects" className="text-gray-800 hover:text-blue-500 font-semibold block py-2 px-4 rounded-lg transition-all duration-300">Projects</a>
        <a href="#contact" className="text-gray-800 hover:text-blue-500 font-semibold block py-2 px-4 rounded-lg transition-all duration-300">Contact</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
