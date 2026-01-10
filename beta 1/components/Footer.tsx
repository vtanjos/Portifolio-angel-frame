
import React from 'react';
import { LOGO_ICON } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 overflow-hidden rounded-lg flex items-center justify-center">
                <img src={LOGO_ICON} alt="Angel Frame" className="w-full h-full object-contain" />
             </div>
             <span className="text-white font-tech tracking-widest text-xs font-bold uppercase opacity-80">ANGEL <span className="text-af-blue">FRAME</span></span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-af-silver/40 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-af-silver/40 hover:text-white transition-colors">Vimeo</a>
            <a href="#" className="text-af-silver/40 hover:text-white transition-colors">YouTube</a>
          </div>

          <p className="text-[10px] font-bold text-af-silver/30 tracking-widest uppercase text-center md:text-right">
            © 2024 Angel Frame - Todos os direitos reservados. <br className="md:hidden" /> Desenvolvido para o extraordinário.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
