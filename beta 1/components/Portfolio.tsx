
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  
  const categories = ['Todos', 'Casamento', 'Corporativo', 'Palestra', 'Pre-Wedding'];

  const filteredItems = filter === 'Todos' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter || (filter === 'Corporativo' && item.category === 'Branding'));

  const openVideo = (item: PortfolioItem) => {
    setSelectedVideo(item);
    document.body.style.overflow = 'hidden'; // Trava scroll
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset'; // Destrava scroll
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0e0e0e] rounded-t-[50px] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-sm font-tech text-af-blue tracking-[0.5em] uppercase mb-4">Galeria</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">PORTFÓLIO SELECIONADO</h3>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                  filter === cat ? 'bg-white text-af-navy' : 'border border-white/10 text-white/50 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => openVideo(item)}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer bg-af-navy border border-white/5"
            >
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-af-navy/40 opacity-40 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 group-hover:bg-white/20 transition-all duration-500 shadow-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-white ml-1">
                    <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <span className="text-af-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">{item.category}</span>
                <h5 className="text-lg font-bold text-white group-hover:text-af-silver transition-colors">{item.title}</h5>
              </div>
              
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-af-blue to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-af-silver/60 mb-8 italic">"A tecnologia é o nosso pincel, a luz é a nossa tela."</p>
          <a href="https://youtube.com/@AngelFrame" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-white group">
            <span className="h-[1px] w-12 bg-af-blue transition-all group-hover:w-20"></span>
            <span className="text-sm font-bold tracking-widest uppercase">Ver todo o catálogo no YouTube</span>
          </a>
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          onClick={closeVideo}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity animate-in fade-in duration-500"></div>
          
          <div 
            className="relative w-full max-w-6xl aspect-video glass rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(30,75,109,0.3)] animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeVideo}
              className="absolute top-4 right-4 z-[110] w-12 h-12 bg-black/50 hover:bg-white hover:text-af-navy rounded-full flex items-center justify-center text-white transition-all backdrop-blur-md border border-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title Overlay (Top) */}
            <div className="absolute top-0 left-0 w-full p-8 bg-gradient-to-b from-black/80 to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
               <span className="text-af-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">{selectedVideo.category}</span>
               <h4 className="text-2xl font-bold text-white tracking-tight">{selectedVideo.title}</h4>
            </div>

            {/* Video Iframe */}
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
