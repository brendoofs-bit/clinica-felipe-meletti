import React, { useRef } from 'react';
import { PREMIUM_SERVICES } from '../../constants';
import { Check, ArrowRight, Star, MessageCircle, ChevronLeft, ChevronRight, Hand } from 'lucide-react';
import Button from '../ui/Button';

const PremiumServices: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-dark-900 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase">Nossos Procedimentos</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Serviços <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Premium</span></h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Tecnologia de ponta aliada à expertise médica para resultados excepcionais.</p>
        </div>

        {/* Controls / Indicators */}
        <div className="flex justify-between items-center mb-6 max-w-[1400px] mx-auto">
            <div className="md:hidden flex items-center gap-2 text-gold-500 animate-pulse mx-auto">
                <Hand size={16} className="rotate-90" />
                <span className="text-xs font-bold uppercase tracking-widest">Arraste para ver</span>
            </div>
            <div className="hidden md:flex gap-4 ml-auto">
                <button onClick={() => scroll('left')} className="p-2 rounded-full border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all shadow-[0_0_15px_rgba(212,165,54,0.5)] animate-pulse hover:animate-none">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={() => scroll('right')} className="p-2 rounded-full border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all shadow-[0_0_15px_rgba(212,165,54,0.5)] animate-pulse hover:animate-none">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 mb-12"
        >
          {PREMIUM_SERVICES.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className="min-w-[85vw] md:min-w-[400px] snap-center group relative bg-dark-800 rounded-3xl overflow-hidden border border-slate-800 hover:border-gold-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-900/20 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent"></div>
                
                {/* Tag */}
                <div className="absolute top-6 left-6 flex gap-2">
                  {service.tags?.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-gold-500/90 text-white text-[10px] font-bold tracking-widest uppercase rounded-full flex items-center gap-1">
                       {tag === 'MAIS PROCURADO' && <Star size={10} fill="white" />}
                       {tag}
                     </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                <span className="text-gold-600 text-xs uppercase tracking-wider mb-4 block">{service.subtitle}</span>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 border-b border-slate-700 pb-6 line-clamp-3">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check size={16} className="text-gold-500 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 bg-slate-800 rounded-xl border border-slate-700 group-hover:bg-gold-600/10 group-hover:border-gold-500/30 text-white group-hover:text-gold-400 font-medium transition-all flex items-center justify-center gap-2 mt-auto">
                  Saiba Mais <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
          {/* Spacer */}
          <div className="min-w-[1px] md:hidden"></div>
        </div>

        {/* CTA */}
        <div className="text-center">
             <Button 
                variant="primary" 
                icon={<MessageCircle size={18} />}
                onClick={() => window.open('https://wa.me/5554991928750', '_blank')}
            >
                Falar com Especialista
            </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;