import React from 'react';
import { FaLeaf } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaLeaf className="text-2xl mr-2" />
          <h1 className="text-2xl font-bold">La Huella Azul</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#project" className="hover:underline transition duration-300">Proyecto</a></li>
            <li><a href="#methodology" className="hover:underline transition duration-300">Metodología</a></li>
            <li><a href="#research" className="hover:underline transition duration-300">Investigación</a></li>
            <li><a href="#artistic-references" className="hover:underline transition duration-300">Referentes</a></li>
            <li><a href="#team" className="hover:underline transition duration-300">Equipo</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;