
import React from 'react';

const Hero: React.FC = () => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Mockup (Image with Overlay) */}
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover brightness-[0.3]" 
          alt="Produção de Vídeo"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-block mb-6 px-4 py-1.5 border border-af-blue/30 rounded-full bg-af-navy/20 backdrop-blur-sm">
          <span className="text-af-blue text-xs md:text-sm font-bold tracking-[0.3em] uppercase">Cinema & Tecnologia</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-tech font-bold leading-tight mb-8 tracking-tighter">
          SUA HISTÓRIA <br />
          <span className="text-gradient">EM ALTA DEFINIÇÃO</span>
        </h1>

        <p className="max-w-2xl mx-auto text-af-silver text-lg md:text-xl font-light mb-12 leading-relaxed opacity-80">
          De casamentos inesquecíveis a produções corporativas de impacto. 
          Unimos arte e tecnologia para eternizar cada frame.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={scrollToPortfolio}
            className="w-full md:w-auto px-10 py-5 bg-white text-af-navy font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1 text-center cursor-pointer"
          >
            VER PORTFÓLIO
          </button>
          <a 
            href="https://wa.me/5571988111161"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-center uppercase"
          >
            FAZER ORÇAMENTO
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
