import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Básico',
      price: '$9.99/mes',
      features: [
        'Registro de hasta 50 aves',
        'Seguimiento genealógico básico (2 generaciones)',
        'Registro de peleas',
        'Soporte por correo electrónico (24-48h de respuesta)'
      ],
      cta: 'Elegir Plan Básico',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$19.99/mes',
      features: [
        'Registro de hasta 200 aves',
        'Seguimiento genealógico avanzado (hasta 5 generaciones)',
        'Registro de peleas ilimitado',
        'Gestión financiera avanzada (resumen de ingresos/egresos)',
        'Reportes financieros básicos',
        'Soporte por correo electrónico (12-24h de respuesta)'
      ],
      cta: 'Elegir Plan Pro',
      highlighted: true,  // Destacar como el plan recomendado
    },
    {
      name: 'Empresarial',
      price: '$39.99/mes',
      features: [
        'Registro ilimitado de aves',
        'Seguimiento genealógico completo (generaciones ilimitadas)',
        'Registro de peleas ilimitado con estadísticas avanzadas',
        'Gestión financiera completa (reportes detallados y personalización)',
        'Soporte prioritario 24/7',
        'Personalización de informes',
      ],
      cta: 'Elegir Plan Empresarial',
      highlighted: false,
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Planes Diseñados para Criadores Profesionales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl p-8 ${plan.highlighted ? 'border-2 border-green-500 shadow-xl' : 'border border-gray-200'}`}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-3">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-4 rounded-lg ${plan.highlighted ? 'bg-green-500 text-white' : 'bg-gray-800 text-white'} font-semibold hover:opacity-90 transition duration-300`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
