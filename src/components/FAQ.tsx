import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cómo empiezo a usar BirdTracker?",
      answer: "Simplemente regístrate en nuestra plataforma, elige un plan y comienza a registrar tus aves. Ofrecemos un tutorial guiado para nuevos usuarios."
    },
    {
      question: "¿Puedo acceder desde mi teléfono móvil?",
      answer: "Sí, BirdTracker es completamente responsive y funciona en cualquier dispositivo. También tenemos apps nativas para iOS y Android."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias locales."
    },
    {
      question: "¿Cómo funciona el soporte técnico?",
      answer: "Ofrecemos soporte por correo electrónico 24/7 para todos los usuarios, y soporte telefónico para usuarios Premium."
    },
    {
      question: "¿Puedo exportar mis datos?",
      answer: "Sí, puedes exportar todos tus datos en formatos CSV, PDF y Excel en cualquier momento."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;