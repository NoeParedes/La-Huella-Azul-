import React from 'react';
import { FaCode, FaPencilAlt } from 'react-icons/fa';

function Methodology() {
  return (
    <section id="methodology" className="my-12">
      <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-700 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-600">
          <FaPencilAlt className="mr-3 animate-bounce" />
          Metodología
        </h2>
        <div className="space-y-6">
          <div className="transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Proceso de Trabajo</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Investigación exhaustiva sobre tecnología y medio ambiente</li>
              <li>Definición de la problemática centrada en el ámbito tecnológico</li>
              <li>Selección del formato artístico (GIF animado)</li>
            </ol>
          </div>
          <div className="transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Diseño del GIF</h3>
            <p className="text-gray-700">
              El GIF consta de 15 imágenes consecutivas que muestran la evolución del impacto tecnológico.
              Se utilizan íconos de empresas tecnológicas y código binario, con tamaños que representan
              su huella de carbono.
            </p>
          </div>
          <div className="transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800">
              <FaCode className="mr-2 animate-bounce" />
              Código de Creación del GIF
            </h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm transform transition-transform duration-500 hover:scale-105">
              <code className="language-python">
{`from PIL import Image
import imageio.v2 as imageio
import numpy as np

# Lista de archivos de imagen que deseas incluir en el GIF
image_files = ['image1.png', 'image2.png', 'image3.png']

# Tamaño al que redimensionar las imágenes
size = (500, 500)  # Ajusta el tamaño según sea necesario

# Crear una lista de arrays de numpy redimensionados y con el mismo modo de color
image_arrays = []
for file in image_files:
    img = Image.open(file).convert('RGB')  # Asegurarse de que todas las imágenes estén en modo RGB
    img = img.resize(size, Image.Resampling.LANCZOS)
    image_arrays.append(np.array(img))

# Crear el GIF
output_gif = 'output.gif'
imageio.mimsave(output_gif, image_arrays, duration=3, loop=0)

print(f"GIF creado y guardado como {output_gif}")`}
              </code>
            </pre>
            <p className="mt-4 text-gray-700">
              Este código utiliza las bibliotecas PIL, imageio y numpy para crear el GIF a partir de una serie de imágenes.
              Redimensiona las imágenes, las convierte a arrays de numpy y luego las combina en un GIF animado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
