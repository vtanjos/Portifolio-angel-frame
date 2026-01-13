
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenDifferentials: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenDifferentials }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#000B1A]/80 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={scrollToTop} className="flex items-center gap-3 group">
          <img 
            src="Logo a.jpg" 
            alt="Angel Frame Logo" 
            className="w-10 h-10 object-contain brightness-0 invert transition-transform group-hover:scale-110" 
          />
          <span className="text-xl font-bold tracking-tighter text-white">ANGEL FRAME</span>
        </a>
        
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase items-center">
          <a href="#home" onClick={scrollToTop} className="opacity-70 hover:opacity-100 transition-opacity">Início</a>
          <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="opacity-70 hover:opacity-100 transition-opacity">Portfólio</a>
          <button onClick={onOpenDifferentials} className="opacity-70 hover:opacity-100 transition-opacity uppercase tracking-widest text-sm font-medium">Diferenciais</button>
        </div>

        <button 
          onClick={onOpenQuote}
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-xs font-bold transition-all shadow-lg hover:shadow-blue-500/20 uppercase tracking-widest"
        >
          ORÇAMENTO
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
