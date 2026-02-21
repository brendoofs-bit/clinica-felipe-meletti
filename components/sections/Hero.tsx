import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Star } from 'lucide-react';
import { IMAGES } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[600px] w-full overflow-hidden flex items-center justify-center bg-dark-900 group">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <img 
          src={IMAGES.hero} 
          alt="Clínica Felipe Meletti" 
          className="hidden md:block w-full h-full object-contain object-center"
        />
        {/* Mobile Image */}
        <img 
          src={IMAGES.heroMobile} 
          alt="Clínica Felipe Meletti" 
          className="block md:hidden w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center md:items-start md:text-left">
        <div className="max-w-3xl pt-10">
          {/* Highlight Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-md mb-8 animate-slide-up opacity-0" style={{ animationDelay: '1s' }}>
             <Star size={14} className="text-gold-400 fill-gold-400" />
             <span className="text-xs font-bold text-gold-300 uppercase tracking-widest">
               Referência em Glúteos & Peeling de Fenol
             </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up opacity-0" style={{ animationDelay: '1.2s' }}>
            A Arte de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Rejuvenescer</span> com Naturalidade
          </h1>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl animate-slide-up opacity-0" style={{ animationDelay: '1.4s' }}>
            Protocolos exclusivos Dr. Felipe Meletti. Transforme sua autoestima com a segurança de quem é autoridade em tratamentos corporais e faciais avançados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up opacity-0" style={{ animationDelay: '1.6s' }}>
            <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => window.open('https://wa.me/5554991928750', '_blank')}>
              Agendar Avaliação
            </Button>
            <Button variant="outline">
              Conheça a Clínica
            </Button>
          </div>
        </div>
      </div>

      {/* Luxury Marquee Separator - Globe Effect */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-dark-900/95 backdrop-blur-md border-t border-gold-500/20 flex items-center justify-center overflow-hidden z-20">
         {/* Globe Lighting Effect (Center Highlight) */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,54,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>
         
         {/* Scroller with Fade Mask (5% edges) */}
         <div className="w-full h-full flex items-center [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] z-10">
             <div className="flex whitespace-nowrap animate-[scroll_25s_linear_infinite] w-max items-center">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                   <React.Fragment key={i}>
                     <span className="text-gold-500/80 font-serif italic text-[10px] mx-6 opacity-70">✦</span>
                     <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-300 mx-6 hover:text-white transition-colors">Medicina Clínica</span>
                     <span className="text-gold-500/80 font-serif italic text-[10px] mx-6 opacity-70">✦</span>
                     <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-300 mx-6 hover:text-white transition-colors">Peeling Fenol Like</span>
                     <span className="text-gold-500/80 font-serif italic text-[10px] mx-6 opacity-70">✦</span>
                     <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-300 mx-6 hover:text-white transition-colors">Remodelação Glútea</span>
                   </React.Fragment>
                ))}
             </div>
         </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;