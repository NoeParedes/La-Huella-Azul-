import React from 'react';
import { FaUsers } from 'react-icons/fa';

function Team() {
  const team = [
    "Chavarria Humareda, Javier Omar",
    "Isidro Salazar, Leonardo Daniel",
    "Maravi Anyosa, Matias Fabricio",
    "Paredes Rauraico, Noe Ananias"
  ];

  return (
    <section id="team" className="my-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-600">
          <FaUsers className="mr-3" />
          Nuestro Equipo
        </h2>
        <ul className="space-y-2">
          {team.map((member, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              {member}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Team;