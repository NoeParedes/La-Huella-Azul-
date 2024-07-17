import React from 'react';
import HuellaAzulGIF from './Huella_azul.gif';

function GifDisplay() {
  return (
    <section className="my-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
        <figure className="relative">
          <div 
            className="border-20 border-blue-500 rounded-lg overflow-hidden shadow-md 
                       hover:shadow-lg hover:scale-[1.05] active:shadow-lg active:scale-[1.1] 
                       transition-all duration-150"
          >
            <img 
              src={HuellaAzulGIF} 
              alt="La Huella Azul GIF" 
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-center mt-3 text-xs sm:text-sm text-gray-600">
            La Huella Azul
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default GifDisplay;
