import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Screenshots: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const screenshots = [
    {
      image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      title: "Panel de Control",
      description: "Vista general de todas las estadísticas y métricas importantes",
    },
    {
      image: "https://images.unsplash.com/photo-1548247661-3d7905940716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      title: "Registro de Aves",
      description: "Interfaz intuitiva para el registro y seguimiento de aves",
    },
    {
      image: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      title: "Análisis Financiero",
      description: "Visualización detallada de ingresos y gastos",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Explora BirdTracker en Acción
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
            <img
              src={screenshots[currentIndex].image}
              alt={screenshots[currentIndex].title}
              className="w-full h-full object-cover cursor-pointer transform hover:scale-105 transition duration-500"
              onClick={() => setShowModal(true)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {screenshots[currentIndex].title}
              </h3>
              <p className="text-gray-200">
                {screenshots[currentIndex].description}
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition"
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </button>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-7xl w-full">
            <img
              src={screenshots[currentIndex].image}
              alt={screenshots[currentIndex].title}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Screenshots;
