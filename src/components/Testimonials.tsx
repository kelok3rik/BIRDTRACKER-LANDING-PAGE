import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "BirdTracker ha revolucionado la forma en que manejo mi criadero. Es fácil de usar y me ahorra horas de trabajo.",
      author: "María Rodríguez, Criadora Profesional"
    },
    {
      quote: "Gracias a BirdTracker, puedo llevar un control preciso de la genealogía de mis aves. ¡Es una herramienta indispensable!",
      author: "Carlos Gómez, Entusiasta de Aves"
    },
    {
      quote: "La función de gestión financiera me ha ayudado a optimizar mis operaciones y aumentar mis ganancias.",
      author: "Ana Martínez, Propietaria de Granja Avícola"
    }
  ];

  return (
    <div className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que Dicen Nuestros Usuarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-800">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;