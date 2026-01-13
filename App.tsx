
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import QuoteModal from './components/QuoteModal';
import DifferentialsModal from './components/DifferentialsModal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDifferentialsOpen, setIsDifferentialsOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);
  
  const openDifferentials = () => setIsDifferentialsOpen(true);
  const closeDifferentials = () => setIsDifferentialsOpen(false);

  return (
    <main className="min-h-screen">
      <Navbar 
        onOpenQuote={openQuoteModal} 
        onOpenDifferentials={openDifferentials}
      />
      <Hero onOpenQuote={openQuoteModal} />
      
      {/* Experience / Stats Section */}
      <section id="servicos" className="py-24 glass-card relative z-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8">
            <h4 className="text-5xl font-bold text-blue-400 mb-2">PRO</h4>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-300">Qualidade de Cinema</p>
            <p className="text-xs text-slate-500 mt-2">Tecnologia S24 aliada ao olhar técnico.</p>
          </div>
          <div className="text-center p-8 border-x border-white/10">
            <h4 className="text-5xl font-bold text-blue-400 mb-2">150+</h4>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-300">Projetos Entregues</p>
            <p className="text-xs text-slate-500 mt-2">Experiência em diversos nichos e demandas.</p>
          </div>
          <div className="text-center p-8">
            <h4 className="text-5xl font-bold text-blue-400 mb-2">100%</h4>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-300">Agilidade Mobile</p>
            <p className="text-xs text-slate-500 mt-2">Ângulos únicos que câmeras pesadas não alcançam.</p>
          </div>
        </div>
      </section>

      <Portfolio />
      
      {/* Tech Pitch Section */}
      <section className="py-24 bg-[#001026]">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              O Olhar Além <br /> da <span className="italic text-blue-400">Tecnologia</span>.
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Na Angel Frame, acreditamos que um vídeo foda nasce do olhar de quem está por trás da lente. Utilizamos o <strong>Samsung S24</strong> como nossa ferramenta principal por um motivo estratégico: 
              a liberdade. O que você vê no nosso portfólio não é "apenas celular", é a união de <strong>agilidade extrema, discrição total e uma pós-produção cinematográfica</strong> de alto nível.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                <div>
                  <h5 className="text-lg font-bold text-white mb-1">Poder do S24</h5>
                  <p className="text-sm text-slate-400">Captação em altíssima definição com sensores modernos que entregam cores vibrantes e texturas reais.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">2</div>
                <div>
                  <h5 className="text-lg font-bold text-white mb-1">O Foco na Emoção</h5>
                  <p className="text-sm text-slate-400">Equipamento discreto permite capturar momentos espontâneos e íntimos que câmeras enormes intimidariam.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">3</div>
                <div>
                  <h5 className="text-lg font-bold text-white mb-1">Resultado Final Imbatível</h5>
                  <p className="text-sm text-slate-400">Não importa a ferramenta, o que importa é o resultado. Nossos vídeos entregam o padrão de luxo que seu projeto merece.</p>
                </div>
              </div>
            </div>
            <button 
              onClick={openQuoteModal}
              className="mt-12 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/20 uppercase tracking-widest text-xs"
            >
              Quero um vídeo nesse nível
            </button>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full"></div>
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
               <img 
                 src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=1000" 
                 alt="Professional Smartphone Cinematography" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#000B1A] to-transparent opacity-60"></div>
               <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-sm tracking-widest uppercase">Expertise em Captação Mobile</p>
                  <p className="text-blue-400 text-xs mt-1">O talento define o frame, a tecnologia o eterniza.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      <Footer onOpenQuote={openQuoteModal} />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={closeQuoteModal} 
      />

      <DifferentialsModal 
        isOpen={isDifferentialsOpen}
        onClose={closeDifferentials}
      />
    </main>
  );
};

export default App;
