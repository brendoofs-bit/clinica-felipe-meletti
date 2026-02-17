import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Peeling Fenol Like', href: '#fenol' },
    { name: 'Remodelação Glútea', href: '#gluteo' },
    { name: 'Tratamentos', href: '#treatments' },
    // Removed Dr. Felipe Meletti and Contato from menu as requested
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex flex-col items-end">
           <span className={`text-[0.6rem] md:text-xs uppercase tracking-[0.3em] font-bold mb-[-4px] z-10 ${scrolled ? 'text-gold-600' : 'text-gold-400'}`}>
             Clínica
           </span>
           <h1 className={`font-serif text-2xl md:text-3xl tracking-wide font-bold transition-colors ${scrolled ? 'text-gold-600' : 'text-gold-500'}`}>
             DR. FELIPE MELETTI
           </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest font-sans font-medium hover:text-gold-500 transition-colors cursor-hover relative group ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            className={`px-6 py-2 border rounded-full text-xs uppercase tracking-widest hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300 ${
               scrolled ? 'border-gold-600 text-gold-600' : 'border-white text-white'
            }`}
          >
            Agendar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark-900/95 backdrop-blur-xl z-50 transform transition-transform duration-500 flex items-center justify-center ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-8 right-8 text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;