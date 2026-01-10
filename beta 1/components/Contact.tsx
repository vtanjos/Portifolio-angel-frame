
import React from 'react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/5571988111161";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-tech text-af-blue tracking-[0.5em] uppercase mb-4">Contato</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">PRONTO PARA <br /> <span className="text-gradient">VIRALIZAR?</span></h3>
            <p className="text-af-silver text-lg mb-12 opacity-80 leading-relaxed max-w-md">
              Seja para um dia inesquecível ou para impulsionar sua empresa, nossa equipe está pronta para dar o play na sua história.
            </p>

            <div className="space-y-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-af-navy rounded-2xl flex items-center justify-center border border-af-blue/20 group-hover:border-af-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-af-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <div>
                  <h6 className="text-xs font-bold text-af-silver tracking-widest uppercase opacity-50 mb-1">WhatsApp</h6>
                  <p className="text-lg font-bold group-hover:text-af-blue transition-colors">+55 (71) 98811-1161</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-af-navy rounded-2xl flex items-center justify-center border border-af-blue/20 group-hover:border-af-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-af-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h6 className="text-xs font-bold text-af-silver tracking-widest uppercase opacity-50 mb-1">E-mail</h6>
                  <p className="text-lg font-bold">contato@angelframe.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
            {/* Animated bg for form */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-af-blue/20 rounded-full blur-3xl group-hover:bg-af-blue/30 transition-all"></div>
            
            <form className="relative z-10 space-y-6">
              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-af-silver/60 mb-3">Seu Nome</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-af-blue focus:outline-none transition-all placeholder:text-white/20" placeholder="Ex: João Silva" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-af-silver/60 mb-3">WhatsApp</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-af-blue focus:outline-none transition-all placeholder:text-white/20" placeholder="(71) 98811-1161" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-af-silver/60 mb-3">Tipo de Vídeo</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-af-blue focus:outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-[#0a0a0a]">Casamento</option>
                    <option className="bg-[#0a0a0a]">Corporativo</option>
                    <option className="bg-[#0a0a0a]">Palestra</option>
                    <option className="bg-[#0a0a0a]">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-af-silver/60 mb-3">Sua Mensagem</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-af-blue focus:outline-none transition-all placeholder:text-white/20" placeholder="Conte-nos um pouco sobre seu projeto..."></textarea>
              </div>

              <button className="w-full py-5 bg-af-blue text-white font-bold rounded-xl hover:bg-white hover:text-af-navy transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-af-blue/20">
                ENVIAR SOLICITAÇÃO
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
