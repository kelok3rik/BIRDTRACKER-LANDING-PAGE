import React from 'react';
import { ChevronRight, LogIn } from 'lucide-react';
import GalloPortada from '../assets/GalloPortada.jpg'


const Hero: React.FC = () => {
  const handleLogin = () => {
    window.location.href = 'https://birdtracker-fe-js.vercel.app';
  };

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 py-24">
      <div className="container mx-auto px-4">
        <div className="absolute top-4 right-4">
          <button
            onClick={handleLogin}
            className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300 flex items-center"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Iniciar Sesión
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Gestión Avanzada para Criadores de Gallos
            </h1>
            <p className="text-xl mb-8 opacity-90">
              BirdTracker: La solución definitiva para gestionar registros, genealogías, peleas y finanzas en la cría de gallos.
            </p>

          </div>
          <div className="md:w-1/2 md:pl-12">
            <img
              src={GalloPortada}
              alt="Gallo de pelea"
              className="rounded-lg shadow-2xl mx-auto w-[500px] h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;