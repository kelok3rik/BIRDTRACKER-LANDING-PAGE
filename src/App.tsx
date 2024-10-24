import React from 'react';
import { ChevronRight } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import PlanComparison from './components/PlanComparison';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Testimonials />
      <PlanComparison />
      <Pricing />
      <Blog />
      <FAQ />
      <div className="bg-green-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¡Empieza a Rastrear Tus Aves Hoy!</h2>
          <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 flex items-center mx-auto">
            Comienza Ahora
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
