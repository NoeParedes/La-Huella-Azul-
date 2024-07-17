import React from 'react';
import nvidiaLogo from '../assets/nvidia.png'; 

// Lista de logos con sus rutas, nombres y años de creación
const logos = [
  { src: nvidiaLogo, name: 'NVIDIA', year: 1993 },
  { src: nvidiaLogo, name: 'NVIDIA', year: 1993 },
  { src: nvidiaLogo, name: 'NVIDIA', year: 1993 },
  
  // Añade más logos
];

function TechLogos() {
  return (
    <div className="overflow-hidden mt-5">
      <div className="flex animate-scroll space-x-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={logo.src} alt={logo.name} className="w-24 h-auto mb-2" />
            <p>{logo.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechLogos;
