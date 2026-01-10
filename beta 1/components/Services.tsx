
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-tech text-af-blue tracking-[0.5em] uppercase mb-4">Nossa Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">CRIANDO O EXTRAORDINÁRIO</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-af-navy via-transparent to-transparent opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="w-12 h-[2px] bg-af-blue mb-4 transition-all group-hover:w-full"></div>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h4>
                <p className="text-af-silver/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
                <button className="mt-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-af-blue transition-colors">
                  Saiba Mais 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
