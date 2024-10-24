import React from 'react';
import { Users, Bird, Award, Building } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, number: "5,000+", label: "Criadores Activos" },
    { icon: <Bird className="w-8 h-8 text-green-500" />, number: "50,000+", label: "Aves Registradas" },
    { icon: <Award className="w-8 h-8 text-yellow-500" />, number: "98%", label: "Satisfacción" },
    { icon: <Building className="w-8 h-8 text-purple-500" />, number: "100+", label: "Criaderos Premium" }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;