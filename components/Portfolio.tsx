
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { VideoCategory } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<VideoCategory>(VideoCategory.ALL);
  const [selectedYoutubeId, setSelectedYoutubeId] = useState<string | null>(null);

  const filteredProjects = filter === VideoCategory.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = Object.values(VideoCategory).filter(c => c !== VideoCategory.OTHERS);

  return (
    <section id="portfolio" className="py-24 bg-[#000B1A] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-blue-400 mb-4">Portfólio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Nossas Obras Primas</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider ${
                  filter === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl glass-card aspect-video cursor-pointer"
              onClick={() => setSelectedYoutubeId(project.youtubeId)}
            >
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000B1A] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">{project.category}</span>
                <h4 className="text-xl font-bold text-white mt-1">{project.title}</h4>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedYoutubeId && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedYoutubeId(null)}
        >
          <div className="max-w-5xl w-full aspect-video relative bg-black shadow-2xl rounded-2xl overflow-hidden border border-white/10" onClick={e => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedYoutubeId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <button 
              className="absolute -top-12 right-0 text-white font-bold text-sm uppercase tracking-widest hover:text-blue-400 transition-colors"
              onClick={() => setSelectedYoutubeId(null)}
            >
              Fechar X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
