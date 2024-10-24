import React from 'react';
import { Clipboard, Swords, DollarSign } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: <Clipboard className="w-12 h-12 text-green-500" />, title: 'Registra un Ave', description: 'Ingresa los detalles de cada ave, incluyendo fecha de nacimiento, color y linaje.' },
    { icon: <Swords className="w-12 h-12 text-red-500" />, title: 'Sigue las Peleas', description: 'Registra los resultados de las peleas y analiza el rendimiento de tus aves.' },
    { icon: <DollarSign className="w-12 h-12 text-blue-500" />, title: 'Gestiona las Finanzas', description: 'Lleva un registro de ingresos y gastos, y genera informes financieros detallados.' },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona BirdTracker</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <img
            src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="BirdTracker App Screenshot"
            className="rounded-lg shadow-xl inline-block max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;