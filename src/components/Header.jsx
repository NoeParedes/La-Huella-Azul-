import React, { useState } from 'react';
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaLeaf className="text-2xl mr-2" />
          <h1 className="text-2xl font-bold">La Huella Azul</h1>
        </div>
        
        {/* Botón de hamburguesa para móviles */}
        <button 
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú para pantallas grandes */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li><a href="#project" className="hover:underline transition duration-300">Proyecto</a></li>
            <li><a href="#methodology" className="hover:underline transition duration-300">Metodología</a></li>
            <li><a href="#research" className="hover:underline transition duration-300">Investigación</a></li>
            <li><a href="#artistic-references" className="hover:underline transition duration-300">Referentes</a></li>
            <li><a href="#team" className="hover:underline transition duration-300">Equipo</a></li>
          </ul>
        </nav>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-blue-700">
          <ul className="flex flex-col py-2">
            <li><a href="#project" className="block px-4 py-2 hover:bg-blue-800 transition duration-300">Proyecto</a></li>
            <li><a href="#methodology" className="block px-4 py-2 hover:bg-blue-800 transition duration-300">Metodología</a></li>
            <li><a href="#research" className="block px-4 py-2 hover:bg-blue-800 transition duration-300">Investigación</a></li>
            <li><a href="#artistic-references" className="block px-4 py-2 hover:bg-blue-800 transition duration-300">Referentes</a></li>
            <li><a href="#team" className="block px-4 py-2 hover:bg-blue-800 transition duration-300">Equipo</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;