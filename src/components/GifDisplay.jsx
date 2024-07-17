import React from 'react';
import HuellaAzulGIF from './Huella_azul.gif'; 

function GifDisplay() {
  return (
    <section className="my-12">
      <div className="max-w-2xl mx-auto">
        <figure>
          <img src={HuellaAzulGIF} alt="La Huella Azul GIF" className="w-15 md:w-full rounded-lg shadow-xl" />
          <figcaption className="text-center mt-2 text-sm text-gray-600">La Huella Azul</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default GifDisplay;