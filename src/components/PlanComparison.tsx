import React from 'react';
import { Check, X } from 'lucide-react';

const PlanComparison: React.FC = () => {
  const features = [
    { name: 'Registro de Aves', basic: true, pro: true, enterprise: true },
    { name: 'Seguimiento Genealógico', basic: true, pro: true, enterprise: true },
    { name: 'Registro de Peleas', basic: '50/mes', pro: 'Ilimitado', enterprise: 'Ilimitado' },
    { name: 'Gestión Financiera', basic: 'Básica', pro: 'Avanzada', enterprise: 'Personalizada' },
    { name: 'Soporte', basic: 'Email', pro: '24/7', enterprise: 'Dedicado' },
    { name: 'API Access', basic: false, pro: true, enterprise: true },
    { name: 'Reportes Personalizados', basic: false, pro: true, enterprise: true },
    { name: 'Multi-usuario', basic: false, pro: '5 usuarios', enterprise: 'Ilimitado' },
    { name: 'Backups', basic: 'Diario', pro: '12h', enterprise: 'Tiempo real' },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Comparativa de Planes</h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 px-6 text-left">Características</th>
                <th className="py-4 px-6 text-center">Básico</th>
                <th className="py-4 px-6 text-center bg-green-50">Pro</th>
                <th className="py-4 px-6 text-center">Empresarial</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">{feature.name}</td>
                  <td className="py-4 px-6 text-center">{renderValue(feature.basic)}</td>
                  <td className="py-4 px-6 text-center bg-green-50">{renderValue(feature.pro)}</td>
                  <td className="py-4 px-6 text-center">{renderValue(feature.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;