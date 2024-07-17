import React from 'react';
import { FaBook } from 'react-icons/fa';

function References() {
  return (
    <section className="my-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-600">
          <FaBook className="mr-3" />
          Referencias
        </h2>
        <ul className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Castañeda Olvera, D. R. (2022). La nube contaminante. Un análisis socioambiental de la huella de carbono digital. <i>Paakat: Revista de Tecnología y Sociedad, 12</i>(22).</li>
          <li>Delgado A. (2022, marzo 24). Steve Wilhite, creador de los GIFs, fallece a los 74 años.</li>
          <li>Friedmann, J. (2023, noviembre 20). Powering a greener future: How data centers can slash emissions. <i>Transforming Data with Intelligence.</i></li>
          <li>Sarah-Indra. (2024, abril 30). Our digital carbon footprint: What's the environmental impact of the online world? <i>Digital for Good | RESET.org.</i></li>
        </ul>
      </div>
    </section>
  );
}

export default References;
