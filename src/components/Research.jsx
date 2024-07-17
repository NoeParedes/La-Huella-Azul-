import React from 'react';
import { FaChartBar } from 'react-icons/fa';
import Grafica1 from './grafico1.png'; 
import Grafica2 from './grafico2.png'; 

function Research() {
  return (
    <section id="research" className="my-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-600">
          <FaChartBar className="mr-3" />
          Investigación y Datos
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Estudios recientes muestran que la huella de carbono digital representa entre el 1,8% y el 2,8% de las emisiones totales de gases de efecto invernadero (GEI). Se espera que en menos de 10 años, las actividades en línea consuman el 20% de la energía mundial.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-3 text-blue-800">Número de usuarios de Internet</h3>
            <p className="text-gray-800">Datos de crecimiento anual</p>
            <img src={Grafica1} alt="Gráfica 1" className="mt-4 rounded-lg shadow-md" />
            <p className="text-sm text-gray-500 mt-2">Extraído de <a href="https://es.statista.com/estadisticas/541434/numero-mundial-de-usuarios-de-internet/">Statista</a></p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-3 text-green-800">Tiempo diario dedicado a Internet por usuario</h3>
            <p className="text-gray-800">Estadísticas de uso</p>
            <img src={Grafica2} alt="Gráfica 2" className="mt-4 rounded-lg shadow-md" />
            <p className="text-sm text-gray-500 mt-2">Extraído de <a href="https://es.statista.com/estadisticas/1327038/promedio-de-tiempo-de-uso-diario-de-internet/">Statista</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
