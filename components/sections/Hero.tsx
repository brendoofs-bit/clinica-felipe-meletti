import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-dark-900">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Clínica Felipe Meletti" 
          className="w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl">
          <span className="block text-gold-400 uppercase tracking-[0.4em] text-sm mb-6 animate-slide-up opacity-0" style={{ animationDelay: '1.2s' }}>
            Medicina Estética de Excelência
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 animate-slide-up opacity-0" style={{ animationDelay: '1.4s' }}>
            A Arte de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Rejuvenescer</span> com Naturalidade
          </h1>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl animate-slide-up opacity-0" style={{ animationDelay: '1.6s' }}>
            Protocolos exclusivos desenvolvidos pelo Dr. Felipe Meletti para realçar sua beleza individual com segurança e sofisticação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: '1.8s' }}>
            <Button variant="primary" icon={<ArrowRight size={18} />}>
              Agendar Avaliação
            </Button>
            <Button variant="outline">
              Conheça a Clínica
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-slate-400">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;