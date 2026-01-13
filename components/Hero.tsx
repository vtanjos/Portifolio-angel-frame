
import React from 'react';

interface HeroProps {
  onOpenQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#001026] z-0">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1492691523567-6170f0275df1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000B1A]/80 via-[#000B1A]/40 to-[#000B1A]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1 border border-blue-400/30 rounded-full mb-6 glass-card">
          <span className="text-[10px] tracking-[0.3em] uppercase text-blue-300 font-bold">Produção Audiovisual de Elite</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-gradient leading-tight">
          Onde a sua história <br /> se torna <span className="text-white italic">eterna</span>.
        </h1>
        
        <p className="max-w-xl mx-auto text-lg text-slate-400 mb-10 font-light leading-relaxed">
          Transformamos momentos em obras de arte cinematográficas com agilidade e olhar artístico. Angel Frame: a sua melhor versão em cada frame.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onOpenQuote}
            className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] uppercase tracking-widest text-sm"
          >
            Fazer Orçamento
          </button>
          <button 
            onClick={scrollToPortfolio}
            className="px-10 py-5 border border-white/20 hover:bg-white/10 glass-card text-white font-bold rounded-xl transition-all text-sm opacity-80 hover:opacity-100"
          >
            Ver Portfólio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
