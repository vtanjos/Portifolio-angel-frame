
import React from 'react';
import { LOGO_ICON } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 glass shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button onClick={(e) => scrollToSection(e as any, 'root')} className="flex items-center gap-3 group cursor-pointer">
             <div className="w-10 h-10 overflow-hidden rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <img src={LOGO_ICON} alt="Angel Frame Icon" className="w-full h-full object-contain" />
             </div>
             <div className="hidden md:block">
                <span className="text-white font-tech tracking-widest text-lg font-bold">ANGEL <span className="text-af-blue">FRAME</span></span>
             </div>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button onClick={(e) => scrollToSection(e, 'services')} className="text-sm font-medium text-af-silver hover:text-white transition-colors tracking-wide uppercase">Serviços</button>
          <button onClick={(e) => scrollToSection(e, 'portfolio')} className="text-sm font-medium text-af-silver hover:text-white transition-colors tracking-wide uppercase">Portfólio</button>
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-6 py-2.5 bg-white text-af-navy text-sm font-bold rounded-full hover:bg-af-blue hover:text-white transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter"
          >
            Fazer Orçamento
          </button>
        </div>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
