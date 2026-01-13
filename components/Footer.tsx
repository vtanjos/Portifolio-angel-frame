
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

interface FooterProps {
  onOpenQuote: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer id="contato" className="bg-[#000B1A] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="Logo a.jpg" 
                alt="Angel Frame Logo" 
                className="w-14 h-14 object-contain brightness-0 invert" 
              />
              <h2 className="text-3xl font-bold text-white tracking-tighter">ANGEL FRAME</h2>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Elevando o padrão audiovisual no Brasil. Especialistas em produções de luxo, casamentos cinematográficos e branding corporativo de alta performance.
            </p>
            <div className="flex gap-4">
               {['instagram', 'vimeo', 'youtube', 'facebook'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#000B1A] transition-all">
                    <span className="text-[10px] uppercase font-bold">{social[0]}</span>
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Navegação</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfólio</a></li>
              <li><button onClick={onOpenQuote} className="hover:text-blue-400 transition-colors">Fazer Orçamento</button></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">W:</span> 71 98811-1161
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">E:</span> contato@angelframe.com.br
              </li>
              <li className="flex items-center gap-2 italic">
                Sediada na Bahia
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            &copy; 2024 Angel Frame. Todos os direitos reservados. Design & Tech by Premium Solutions.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp CTA - agora abre o modal primeiro */}
      <button 
        onClick={onOpenQuote}
        className="fixed bottom-8 right-8 z-[70] bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
      >
        <div className="flex items-center gap-3">
          <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 text-xs font-bold whitespace-nowrap">
            Fazer Orçamento
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </button>
    </footer>
  );
};

export default Footer;
