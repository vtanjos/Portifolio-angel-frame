
import React, { useEffect, useRef, useState } from 'react';

const Differentials: React.FC = () => {
  const features = [
    { name: 'Captação Mobile Premium (iPhone & S Line)', angel: true, others: false },
    { name: 'Discrição Total em Eventos', angel: true, others: false },
    { name: 'Ângulos e Movimentos Dinâmicos', angel: true, others: false },
    { name: 'Pós-Produção Cinematográfica', angel: true, others: true },
    { name: 'Entrega em Tempo Recorde', angel: true, others: false },
    { name: 'Olhar Artístico e Storytelling', angel: true, others: true },
    { name: 'Equipamentos Intimidadores', angel: false, others: true },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diferenciais" className="py-32 bg-[#000B1A] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/5 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div ref={sectionRef} className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-20">
          <h2 className="text-sm font-black tracking-[0.5em] uppercase text-blue-500 mb-6">Por que a Angel Frame?</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter max-w-3xl mx-auto leading-tight">
            O comparativo que define a <span className="text-gradient">nova era audiovisual</span>
          </h3>
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-[2.5rem] overflow-hidden border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-8 px-8 text-slate-400 font-black uppercase text-[10px] tracking-widest">Diferencial</th>
                  <th className="py-8 px-8 text-center text-blue-400 font-black uppercase text-[10px] tracking-widest">Angel Frame</th>
                  <th className="py-8 px-8 text-center text-slate-600 font-black uppercase text-[10px] tracking-widest">Padrão Comum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {features.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-6 px-8 text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{item.name}</td>
                    <td className="py-6 px-8 text-center">
                      <div className="flex justify-center">
                        {item.angel ? (
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <span className="text-slate-700 font-black text-lg">✕</span>
                        )}
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <div className="flex justify-center">
                        {item.others ? (
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 border border-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <span className="text-slate-800 font-black text-lg">✕</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-10 bg-gradient-to-r from-blue-600/10 to-transparent border-t border-white/5 text-center">
            <p className="text-sm text-blue-300/80 leading-relaxed italic font-medium max-w-2xl mx-auto">
              "Não é sobre a marca do aparelho, mas sobre o poder da tecnologia mobile premium nas mãos certas para eternizar sua história com perfeição."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
