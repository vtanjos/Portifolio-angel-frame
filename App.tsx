
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import QuoteModal from './components/QuoteModal';
import Differentials from './components/Differentials';
import About from './components/About';
import Footer from './components/Footer';

// Hook para detectar visibilidade e disparar animação
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// Componente de Contador Dinâmico
const CountUp: React.FC<{ end: number, suffix?: string, duration?: number }> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useReveal();
  const started = useRef(false);

  useEffect(() => {
    if (isVisible && !started.current) {
      started.current = true;
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pitchReveal = useReveal();

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenQuote={openQuoteModal} />
      <Hero onOpenQuote={openQuoteModal} />
      
      {/* Experience / Stats Section */}
      <section id="servicos" className="py-24 glass-card relative z-20 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 transition-all duration-1000">
            <h4 className="text-5xl font-bold text-blue-400 mb-2 animate-pulse">ELITE</h4>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-300">Visual Autoral</p>
            <p className="text-xs text-slate-500 mt-2">A ciência do olhar artístico aplicada a cada take.</p>
          </div>
          <div className="text-center p-8 border-y md:border-y-0 md:border-x border-white/10">
            <h4 className="text-5xl font-bold text-blue-400 mb-2">
              <CountUp end={150} suffix="+" />
            </h4>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-300">Projetos Entregues</p>
            <p className="text-xs text-slate-500 mt-2">Experiência em diversos nichos e demandas.</p>
          </div>
          <div className="text-center p-8">
            <h4 className="text-5xl font-bold text-blue-400 mb-2">
              <CountUp end={100} suffix="%" />
            </h4>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-300">Agilidade Mobile</p>
            <p className="text-xs text-slate-500 mt-2">Ângulos únicos que câmeras pesadas não alcançam.</p>
          </div>
        </div>
      </section>

      <Portfolio />
      
      <Differentials />

      {/* Tech Pitch Section */}
      <section ref={pitchReveal.ref} className="py-32 bg-[#001026] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        
        <div className={`container mx-auto px-6 relative z-10 flex flex-col items-center text-center transition-all duration-1000 ${pitchReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-16 h-1 bg-blue-600 mb-12"></div>
          
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
              O Olhar Além <br /> da <span className="italic text-blue-400">Tecnologia</span>.
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl mb-16 leading-relaxed">
              Na Angel Frame, acreditamos que um vídeo foda nasce do olhar de quem está por trás da lente. Utilizamos <strong>Smartphones Top de Linha</strong> como nossas ferramentas principais pela agilidade extrema, discrição total e uma pós-produção cinematográfica de alto nível que entrega o padrão de luxo que seu projeto merece.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              {[
                { title: 'Performance', desc: 'Captação de alta fidelidade com sensores modernos que entregam cores vibrantes.' },
                { title: 'Emoção', desc: 'Equipamento discreto para capturar momentos espontâneos e reais.' },
                { title: 'Resultado', desc: 'Pós-produção de alto nível para garantir elegância de obra de arte.' }
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group delay-[${i * 200}ms]`}>
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold mb-6 group-hover:scale-110 transition-transform">{i+1}</div>
                  <h5 className="text-lg font-bold text-white mb-3">{item.title}</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={openQuoteModal}
              className="mt-20 bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:scale-105 uppercase tracking-widest text-xs"
            >
              Quero um vídeo nesse nível
            </button>
          </div>
        </div>
      </section>

      {/* About as the last topic before footer */}
      <About />

      <Footer onOpenQuote={openQuoteModal} />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={closeQuoteModal} 
      />
    </main>
  );
};

export default App;
