import React, { useRef, useEffect } from 'react';
import Button from '../ui/Button';
import { ArrowRight, Star } from 'lucide-react';
import { IMAGES } from '../../constants';

const MARQUEE_ITEMS = [
  "Medicina Clínica", "Peeling Fenol Like", "Remodelação Glútea",
  "Medicina Clínica", "Peeling Fenol Like", "Remodelação Glútea",
  "Medicina Clínica", "Peeling Fenol Like", "Remodelação Glútea",
  "Medicina Clínica", "Peeling Fenol Like", "Remodelação Glútea",
  "Medicina Clínica", "Peeling Fenol Like", "Remodelação Glútea",
  "Medicina Clínica", "Peeling Fenol Like", "Remodelação Glútea",
];

const GlobeMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const requestRef = useRef<number>();
  const offsetRef = useRef(0);

  useEffect(() => {
    const animate = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const center = containerWidth / 2;
        offsetRef.current += 0.5; // Speed
        
        const spacing = 150; // Reduced spacing for smaller text
        const totalWidth = MARQUEE_ITEMS.length * spacing;
        
        itemsRef.current.forEach((item, index) => {
          if (!item) return;
          
          // Calculate wrapped position
          let x = (index * spacing - offsetRef.current) % totalWidth;
          if (x < -spacing) x += totalWidth;
          
          // Center of the item
          const itemCenter = x + spacing / 2;
          
          // Distance from center of container
          const dist = Math.abs(center - itemCenter);
          const maxDist = center; // Distance to edge
          
          // Normalize distance (0 = center, 1 = edge)
          const normDist = Math.min(dist / maxDist, 1);
          
          // Effect logic:
          // "próximo dos 30% das laterais" -> visible area is center 40% (0.3 to 0.7 of width)
          // Threshold is 0.4 (distance from center)
          
          let scale = 1;
          let opacity = 1;
          
          if (normDist > 0.4) {
             const factor = (normDist - 0.4) / 0.6; // 0 to 1
             
             // Scale down significantly to simulate going back
             scale = 1 - factor * 0.5; 
             
             // Fade out
             opacity = 1 - factor;
          }
          
          item.style.transform = `translateX(${x}px) scale(${scale})`;
          item.style.opacity = opacity.toString();
        });
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden select-none pointer-events-none">
      {MARQUEE_ITEMS.map((text, i) => (
        <div
          key={i}
          ref={el => itemsRef.current[i] = el}
          className="absolute top-0 h-full flex items-center justify-center w-[150px]"
          style={{ left: 0, willChange: 'transform, opacity' }}
        >
           <span className="text-gold-500/80 font-serif italic text-[7px] mx-2 opacity-70">✦</span>
           <span className="text-[7px] font-bold tracking-[0.3em] uppercase text-slate-300">
             {text}
           </span>
        </div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[800px] md:h-[600px] w-full overflow-hidden flex items-center justify-center bg-dark-900 group">
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
      <div className="absolute bottom-0 left-0 w-full h-6 bg-dark-900/95 backdrop-blur-md border-t border-gold-500/20 flex items-center justify-center overflow-hidden z-20">
         {/* Globe Lighting Effect (Center Highlight) */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,54,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>
         
         {/* Custom Globe Marquee */}
         <div className="w-full h-full z-10">
            <GlobeMarquee />
         </div>
      </div>
    </section>
  );
};

export default Hero;
