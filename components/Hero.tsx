
import React, { useEffect, useState } from 'react';

interface HeroProps {
  onOpenQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 bg-[#001026] z-0">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1492691523567-6170f0275df1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000B1A]/90 via-[#000B1A]/40 to-[#000B1A]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center py-12">
        <div className={`inline-block px-4 py-2 border border-blue-400/30 rounded-full mb-8 glass-card transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-blue-300 font-bold">Produção Audiovisual de Elite</span>
        </div>
        
        <h1 className={`text-4xl sm:text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-gradient leading-[1.1] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Onde a sua história <br className="hidden md:block" /> se torna <span className="text-white italic">eterna</span>.
        </h1>
        
        <p className={`max-w-xl mx-auto text-base md:text-lg text-slate-400 mb-10 font-light leading-relaxed px-4 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Transformamos momentos em obras de arte cinematográficas com agilidade e olhar artístico. Angel Frame: a sua melhor versão em cada frame.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.4)] uppercase tracking-widest text-xs"
          >
            Fazer Orçamento
          </button>
          <button 
            onClick={scrollToPortfolio}
            className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:bg-white/10 glass-card text-white font-bold rounded-xl transition-all text-xs opacity-80 hover:opacity-100 uppercase tracking-widest"
          >
            Ver Portfólio
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
