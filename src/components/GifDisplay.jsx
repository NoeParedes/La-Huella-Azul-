import React from 'react';
import HuellaAzulGIF from './Huella_azul.gif';  // Importa el GIF desde la ruta correcta

function GifDisplay() {
  return (
    <section className="my-12">
      <div className="max-w-2xl mx-auto">
        <img src={HuellaAzulGIF} alt="La Huella Azul GIF" className="w-full rounded-lg shadow-xl" />
      </div>
    </section>
  );
}

export default GifDisplay;
