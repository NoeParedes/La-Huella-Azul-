import React from 'react';
import Header from './components/Header';
import GifDisplay from './components/GifDisplay';
import ProjectInfo from './components/ProjectInfo';
import Research from './components/Research';
import Team from './components/Team';
import References from './components/References';
import Footer from './components/Footer';
import TechLogos from './components/TechLogos';
import ArtisticReferences from './components/ArtisticReferences';
import Methodology from './components/Methodology';


function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <GifDisplay />
        <TechLogos /> {/* Añadir el componente de los logos aquí */}
        <ProjectInfo />
        <Methodology />
        <Research />
        <ArtisticReferences />
        <Team />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App;
