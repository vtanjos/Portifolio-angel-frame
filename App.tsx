
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-af-blue selection:text-white overflow-x-hidden relative">
      {/* Background Animated Tech Texture Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 tech-grid animate-grid-move opacity-40"></div>
        
        {/* Animated Dots */}
        <div className="absolute inset-0 tech-dots opacity-30"></div>

        {/* Floating Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-af-blue/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-af-navy/30 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>
        
        {/* Digital Particles Decoration */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-af-blue/40 w-1 h-1 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
