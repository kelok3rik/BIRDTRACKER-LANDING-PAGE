import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">BirdTracker</h3>
            <p className="text-gray-400">La mejor app para el manejo de aves</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Características</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Precios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Términos de Servicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 BirdTracker. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;