import React from 'react';
import { FaInfoCircle, FaLeaf, FaShareAlt } from 'react-icons/fa';

function ProjectInfo() {
  return (
    <section id="project" className="my-12">
      <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-700 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-600">
          <FaInfoCircle className="mr-3 animate-pulse" />
          La Huella Azul
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start transform transition-transform duration-500 hover:scale-105">
            <FaLeaf className="text-green-500 mt-1 mr-3 flex-shrink-0 animate-bounce" />
            <p className="text-gray-700 leading-relaxed">
            Así como la huella de carbono es un grave problema por su contaminación directa al medio ambiente, la contaminación tecnológica no es tan evidente a simple vista. Este tipo de contaminación la representamos como una “huella digital”, cada logo en la obra representa una compañía tecnológica y se va llenando a medida que estas empresas fueron fundadas. La última gran compañía de alto consumo tecnológico, OpenAI, decora el dedo pulgar de esta huella de carbono digital, simbolizando su impacto reciente en el medio ambiente.

            </p>
          </div>

          <div className="flex items-start transform transition-transform duration-500 hover:scale-105">
            <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0 animate-bounce" />
            <p className="text-gray-700 leading-relaxed">
            “La Huella Azul” aborda el impacto ambiental de la huella de carbono digital, evidenciando cómo el uso creciente de tecnologías digitales, dispositivos electrónicos y servicios en la nube incrementa la demanda de energía y las emisiones de gases de efecto invernadero. Hemos elegido este tema porque la contaminación derivada de las nuevas tecnologías a menudo pasa desapercibida en comparación con otros tipos de contaminación, aunque es igual de dañina para el medio ambiente.
            </p>
          </div>

          <div className="flex items-start transform transition-transform duration-500 hover:scale-105">
            <FaShareAlt className="text-purple-500 mt-1 mr-3 flex-shrink-0 animate-bounce" />
            <p className="text-gray-700 leading-relaxed">
            El formato GIF fue elegido por su atractivo visual, capacidad para captar la atención rápidamente y facilidad para compartir en línea, aumentando así el alcance de nuestro mensaje sobre la sostenibilidad tecnológica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
