import React from 'react';
import { FaPalette } from 'react-icons/fa';
import AddieWagenknechtPhoto from './addie_wagenknecht_photo.jpg';
import AddieWagenknechtArtwork from './addie_wagenknecht_artwork.jpg';
import JoanaMollPhoto from './joana_moll_photo.jpg';
import JoanaMollArtwork from './joana_moll_artwork.jpg';
import StephenWilhitePhoto from './stephen_wilhite_photo.jpg';
import FirstGif from './first_gif.gif';

function ArtisticReferences() {
  const artists = [
    {
      name: "Addie Wagenknecht",
      photo: AddieWagenknechtPhoto,
      artwork: AddieWagenknechtArtwork,
      description: "Explora la intersección entre la tecnología y el medio ambiente, cuestionando la sostenibilidad y el impacto ambiental de la tecnología moderna. Su trabajo nos inspiró en la determinación del valor y el mensaje que queríamos transmitir con nuestro proyecto.",
    },
    {
      name: "Joana Moll",
      photo: JoanaMollPhoto,
      artwork: JoanaMollArtwork,
      description: "Busca visibilizar cómo el uso de la tecnología afecta al planeta y a sus habitantes. Su enfoque nos ayudó a determinar cómo queríamos mostrar nuestro proyecto de manera disruptiva.",
    },
    {
      name: "Stephen Wilhite",
      photo: StephenWilhitePhoto,
      artwork: FirstGif,
      description: "Creador del formato GIF en 1987, revolucionó la forma de compartir imágenes en la web. Su trabajo nos inspiró en la elección del formato artístico para nuestro proyecto.",
    },
  ];

  return (
    <section id="artistic-references" className="my-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-600">
          <FaPalette className="mr-3" />
          Referentes Artísticos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img src={artist.photo} alt={artist.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                  <h3 className="text-xl font-semibold text-gray-800">{artist.name}</h3>
                </div>
                <img src={artist.artwork} alt={`Obra de ${artist.name}`} className="w-full h-48 object-cover mb-4 rounded" />
                <p className="text-gray-700 text-sm">{artist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArtisticReferences;
