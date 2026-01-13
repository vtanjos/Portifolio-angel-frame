
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  onOpenQuote: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigateTo = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ${
          isScrolled ? 'bg-[#000B1A]/90 backdrop-blur-2xl py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-10'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* LOGO AREA */}
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-4 group outline-none relative z-[220] flex-1"
          >
            <Logo className="w-10 h-10 transition-transform group-hover:scale-105" color="white" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">Angel Frame</span>
              <span className="text-[8px] tracking-[0.4em] text-blue-500 font-bold uppercase mt-1">Elite Mobile Filmmaking</span>
            </div>
          </button>
          
          {/* CENTER MENU (Desktop) */}
          <div className="hidden md:flex gap-12 items-center flex-1 justify-center">
            {['Início', 'Portfólio', 'Diferenciais'].map((item) => (
              <button 
                key={item}
                onClick={() => navigateTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))} 
                className="relative text-[11px] font-bold tracking-[0.25em] uppercase text-white opacity-70 hover:opacity-100 transition-all group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
          </div>

          {/* CTA BUTTON (Desktop) */}
          <div className="hidden md:flex flex-1 justify-end">
            <button 
              onClick={onOpenQuote}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-[10px] font-black transition-all shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:scale-105 uppercase tracking-[0.2em]"
            >
              ORÇAMENTO WHATSAPP
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden relative z-[230]">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none bg-white/5 rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[300] flex items-center justify-center p-6 transition-all duration-500 md:hidden ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-[#000B1A]/95 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`relative w-full max-w-sm bg-[#001026] border border-white/5 rounded-[3rem] p-12 flex flex-col items-center gap-10 shadow-3xl transition-all duration-500 transform ${isMenuOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
          <Logo className="w-16 h-16 mb-2" color="white" />
          <div className="flex flex-col items-center gap-8 w-full">
            <button onClick={() => navigateTo('home')} className="text-xl font-black text-white uppercase tracking-[0.2em] py-2 border-b border-white/5 w-full text-center">Início</button>
            <button onClick={() => navigateTo('portfolio')} className="text-xl font-black text-white uppercase tracking-[0.2em] py-2 border-b border-white/5 w-full text-center">Portfólio</button>
            <button onClick={() => navigateTo('diferenciais')} className="text-xl font-black text-white uppercase tracking-[0.2em] py-2 border-b border-white/5 w-full text-center">Diferenciais</button>
          </div>
          <button onClick={() => { onOpenQuote(); setIsMenuOpen(false); }} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl">Falar no WhatsApp</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
