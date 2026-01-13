import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-32 bg-[#000B1A] relative overflow-hidden border-t border-white/5">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div 
        ref={sectionRef} 
        className={`container mx-auto px-6 lg:px-12 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Lado da Imagem com Moldura Tecnológica */}
          <div className="w-full lg:w-2/5 relative group">
            <div className="absolute -inset-4 border border-blue-500/20 rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            <div className="absolute -inset-4 border border-blue-500/10 rounded-3xl -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 delay-100"></div>
            
            {/* Viewfinder Corners para a foto */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-600 z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-600 z-20"></div>
            
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl bg-[#001026]">
              {/* Fallback caso a imagem não exista - Um gradiente elegante */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-[#000B1A]"></div>
              
              {/* AQUI ESTÁ A MUDANÇA: src aponta para a raiz /foto-victor.jpg */}
              <img 
                src="/foto-victor.jpg" 
                alt="Victor Anjos - Angel Frame" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 relative z-10"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#000B1A] via-transparent to-transparent opacity-60 z-20"></div>
              
              {/* Badge Digital */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border-white/10 z-30">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-1">Founder & Director</p>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter">Victor Anjos</h4>
              </div>
            </div>
          </div>

          {/* Lado do Texto - Copywriting de Impacto */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase text-blue-500 mb-6">O Coração da Angel Frame</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
              A mente criativa <br /> por trás da <span className="text-blue-600 italic">Angel Frame</span>.
            </h3>
            
            <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
              <p>
                Nascido sob o sol de <span className="text-white font-semibold">Salvador, Bahia</span>, minha conexão com o audiovisual começou muito cedo. Aos 10 anos, o que era uma brincadeira de criança já revelava uma obsessão pela estética e pelo poder de contar histórias.
              </p>
              <p>
                Hoje, aos <span className="text-white font-semibold">23 anos</span>, celebro meia década de trajetória profissional sólida. Uso o dom que <span className="text-blue-400 font-medium">Deus me deu</span> para elevar o nível das produções locais, unindo a agilidade da tecnologia mobile com um olhar artístico refinado que enxerga o que ninguém mais vê.
              </p>
              <p className="border-l-2 border-blue-600 pl-6 italic text-slate-300">
                "Crio pontes para o passado. Meu objetivo é que as pessoas possam revisitar seus momentos mais especiais com a mesma emoção do dia em que foram vividos."
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-12">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none">5+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold">Anos de Carreira</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none">Narrativa</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold">Storytelling</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none">SSA</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold">Salvador, Bahia</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;