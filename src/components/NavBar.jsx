import React, { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-16 px-8 flex items-center bg-nav-bg text-nav-text justify-between shadow-md relative">
        {/* Yassir Chakour name */}
        <p className="text-lg font-bold text-nav-text z-20">
          Yassir Chakour
        </p>
        
        {/* Hamburger menu icon for small screens */}
        <div className="md:hidden flex items-center z-20">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
               ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation links - hidden on small screens, flex on medium and larger */}
        <div className="hidden md:flex gap-8">
          <a 
            href="#" 
            className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-nav-text-hover after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out hover:text-nav-text-hover transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="#" 
            className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-nav-text-hover after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out hover:text-nav-text-hover transition-colors duration-300"
          >
            About Me
          </a>
          <a 
            href="#" 
            className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-nav-text-hover after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out hover:text-nav-text-hover transition-colors duration-300"
          >
            Projects
          </a>
        </div>
        
        {/* Contact Me button - hidden on small screens, flex on medium and larger */}
        <div className="hidden md:flex gap-4 items-center">
          <button 
            className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold mr-10 
                       hover:bg-red-700 hover:shadow-lg 
                       transition-all duration-300 ease-in-out 
                       transform hover:scale-105 cursor-pointer"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile menu - appears when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-nav-bg flex flex-col items-center justify-center space-y-6 z-10 animate-slide-down">
            <a 
              href="#" 
              className="text-2xl text-nav-text hover:text-nav-text-hover transition-colors duration-300"
              onClick={toggleMenu} // Close menu on click
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-2xl text-nav-text hover:text-nav-text-hover transition-colors duration-300"
              onClick={toggleMenu}
            >
              About Me
            </a>
            <a 
              href="#" 
              className="text-2xl text-nav-text hover:text-nav-text-hover transition-colors duration-300"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <button 
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold mt-8 
                         hover:bg-red-700 hover:shadow-lg 
                         transition-all duration-300 ease-in-out 
                         transform hover:scale-105 cursor-pointer"
              onClick={toggleMenu}
            >
              Contact Me
            </button>
          </div>
        )}
    </nav>
  );
}

export default NavBar;
