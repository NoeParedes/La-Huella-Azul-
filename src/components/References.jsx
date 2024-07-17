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
          <li>Friedmann, J. (2023, Noviembre 20). Powering a Greener Future: How Data Centers Can Slash Emissions. Transforming Data with Intelligence.</li>
          <li>Castañeda Olvera, D. R. (2022). La nube contaminante. Un análisis socioambiental de la huella de carbono digital. Paakat: Revista de Tecnología y Sociedad, 12(22).</li>
          <li>Delgado A. (2022, Marzo 24). Steve Wilhite, creador de los GIFs, fallece a los 74 años.</li>
          <li>Sarah-Indra. (2024, 30 Abril). Our Digital Carbon Footprint: What's the Environmental Impact of the Online World? Digital for Good | RESET.org.</li>
        </ul>
      </div>
    </section>
  );
}

export default References;