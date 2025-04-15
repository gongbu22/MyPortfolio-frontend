import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50 max-w-full overflow-x-hidden">
    
      <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-500">
        My Portfolio
      </Link>

    
      <nav className="flex space-x-6 ml-auto flex-wrap">
        {isHome && (
          <>
            <a href="#about" className="text-gray-700 hover:text-blue-500">About Me</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
