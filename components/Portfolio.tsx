
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, WHATSAPP_NUMBER } from '../constants';
import { VideoCategory } from '../types';

const PortfolioItem: React.FC<{ project: any, index: number, onOpen: (id: string) => void }> = ({ project, index, onOpen }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 80);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const getGridSpan = () => {
    if (project.category === VideoCategory.WEDDING && index === 0) return 'md:col-span-2 md:row-span-2';
    if (project.aspectRatio === '9/16') return 'md:row-span-2';
    return '';
  };

  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-[#001026] border border-white/5 cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${getGridSpan()} hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]`}
      onClick={() => onOpen(project.vimeoId)}
    >
      <div className="scanline"></div>

      <div className="viewfinder-corner top-4 left-4 border-t-2 border-l-2"></div>
      <div className="viewfinder-corner top-4 right-4 border-t-2 border-r-2"></div>
      <div className="viewfinder-corner bottom-4 left-4 border-b-2 border-l-2"></div>
      <div className="viewfinder-corner bottom-4 right-4 border-b-2 border-r-2"></div>

      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700 group-hover:opacity-80 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#000B1A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
      
      <div className="absolute top-6 left-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
        <span className="text-[8px] font-black text-white tracking-[0.2em] uppercase">REC | 4K HDR</span>
      </div>

      <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-4 bg-blue-500"></span>
            <span className="text-[9px] uppercase font-black text-blue-400 tracking-[0.4em]">{project.category}</span>
          </div>
          <h4 className="text-xl md:text-2xl font-black text-white mt-2 leading-none tracking-tighter uppercase">{project.title}</h4>
          <p className="text-[10px] text-slate-500 mt-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100 max-w-xs leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-110">
        <div className="w-16 h-16 border border-white/20 backdrop-blur-xl rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<VideoCategory>(VideoCategory.ALL);
  const [selectedVimeoId, setSelectedVimeoId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const filteredProjects = filter === VideoCategory.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = Object.values(VideoCategory).filter(c => c !== VideoCategory.OTHERS);

  const openVideo = (id: string) => {
    setIsLoading(true);
    setSelectedVimeoId(id);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVimeoId(null);
    document.body.style.overflow = 'unset';
  };

  const currentProject = PROJECTS.find(p => p.vimeoId === selectedVimeoId);

  const handleWhatsAppCTA = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentProject) return;
    const message = encodeURIComponent(
      `Olá Angel Frame! Acabei de assistir ao vídeo "${currentProject.title}" (${currentProject.category}) no seu portfólio e fiquei impressionado. Quero um orçamento para uma produção exatamente nesse mesmo nível premium. Como podemos começar?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeVideo();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section id="portfolio" className="py-32 bg-[#000B1A] scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase text-blue-500 mb-6">Cinema Digital</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Portfólio <span className="text-blue-600">Autoral</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-[10px] font-black transition-all uppercase tracking-[0.2em] border ${
                  filter === cat 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                    : 'bg-white/5 border-white/5 text-slate-500 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
          {filteredProjects.map((project, index) => (
            <PortfolioItem 
              key={project.id} 
              project={project} 
              index={index} 
              onOpen={openVideo} 
            />
          ))}
        </div>
      </div>

      {selectedVimeoId && (
        <div 
          className="fixed inset-0 z-[500] bg-[#000B1A] flex flex-col items-center justify-center p-0 md:p-0 animate-in fade-in duration-300 overflow-hidden"
          onClick={closeVideo}
        >
          {/* Top Bar - Garantido que esteja acima de tudo */}
          <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-[600]">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-blue-500 uppercase tracking-widest">Cinema em Foco</span>
              <h4 className="text-xs md:text-sm font-black text-white uppercase tracking-tighter">{currentProject?.title}</h4>
            </div>
            
            <button 
              onClick={(e) => { e.stopPropagation(); closeVideo(); }}
              className="bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-90 z-[700]"
              aria-label="Fechar vídeo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Video Container - Centralizado e Sem Bordas Brancas */}
          <div 
            className={`relative flex items-center justify-center bg-[#000B1A] ${
              currentProject?.aspectRatio === '9/16' 
                ? 'h-[80vh] aspect-[9/16]' 
                : 'w-full aspect-video max-w-7xl'
            }`}
            onClick={e => e.stopPropagation()}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#000B1A]">
                <div className="w-12 h-12 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <iframe
              className="w-full h-full border-0 bg-transparent"
              src={`https://player.vimeo.com/video/${selectedVimeoId}?autoplay=1&muted=0&loop=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
              title="Angel Frame Video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>

          {/* Bottom Action Bar */}
          <div className="absolute bottom-8 md:bottom-12 left-0 w-full flex justify-center p-6 z-[600]" onClick={e => e.stopPropagation()}>
            <button 
              onClick={handleWhatsAppCTA}
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] transition-all flex flex-col items-center gap-1 shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 group"
            >
              <span className="text-[7px] opacity-60 tracking-[0.2em]">GOSTOU DO RESULTADO?</span>
              <div className="flex items-center gap-3">
                QUERO UM VÍDEO COMO ESTE
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
