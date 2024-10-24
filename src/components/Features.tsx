import React from 'react';
import { Bird, Users, Swords, UserCheck, DollarSign } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    { icon: <Bird className="w-8 h-8 text-green-500" />, title: 'Registro de Aves', description: 'Registra detalles como fecha de nacimiento, color y linaje.' },
    { icon: <Users className="w-8 h-8 text-blue-500" />, title: 'Seguimiento Genealógico', description: 'Visualiza árboles genealógicos con nodos de padre o madre desconocidos.' },
    { icon: <Swords className="w-8 h-8 text-red-500" />, title: 'Registro de Peleas', description: 'Registra peleas y evalúa resultados con estadísticas detalladas.' },
    { icon: <UserCheck className="w-8 h-8 text-yellow-500" />, title: 'Manejo de Machos en Cuido', description: 'Monitorea machos bajo cuido, rastreando su estado.' },
    { icon: <DollarSign className="w-8 h-8 text-purple-500" />, title: 'Gestión Financiera', description: 'Registra ingresos y egresos, visualiza resúmenes y genera reportes.' },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
