import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

function ProjectInfo() {
  return (
    <section id="project" className="my-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-600">
          <FaInfoCircle className="mr-3" />
          Sobre el Proyecto
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          "La Huella Azul" es un proyecto que aborda la huella de carbono generada por el uso de tecnologías digitales. Nuestro GIF animado representa el aumento de dispositivos electrónicos, servicios en la nube y la digitalización en general, que han incrementado significativamente la demanda de energía y las emisiones de gases de efecto invernadero.
        </p>
        <p className="text-gray-700 leading-relaxed">
          El formato GIF fue elegido por su atractivo visual, capacidad para captar la atención rápidamente y facilidad para compartir en línea, aumentando así el alcance de nuestro mensaje sobre la sostenibilidad tecnológica.
        </p>
      </div>
    </section>
  );
}

export default ProjectInfo;