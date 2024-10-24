import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Guía Completa de Crianza de Aves",
      excerpt: "Aprende las mejores prácticas para la crianza exitosa de aves de competición.",
      image: "https://images.unsplash.com/photo-1548247661-3d7905940716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      category: "Guías",
      readTime: "5 min"
    },
    {
      title: "Optimiza tus Registros Genealógicos",
      excerpt: "Descubre cómo mantener un registro efectivo del linaje de tus aves.",
      image: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      category: "Tips",
      readTime: "3 min"
    },
    {
      title: "Análisis Financiero para Criadores",
      excerpt: "Estrategias para maximizar la rentabilidad de tu criadero.",
      image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      category: "Finanzas",
      readTime: "4 min"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Recursos y Artículos</h2>
          <a href="#" className="text-green-500 hover:text-green-600 flex items-center">
            Ver todos
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{post.readTime} lectura</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 font-medium flex items-center"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;