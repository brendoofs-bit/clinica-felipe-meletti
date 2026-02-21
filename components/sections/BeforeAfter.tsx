import React, { useState, useRef, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../../constants';
import { Quote, MessageCircle, Hand, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const CompareImage: React.FC<{ before: string; after: string }> = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[300px] md:h-[380px] w-full overflow-hidden select-none cursor-ew-resize group" // Reduced height
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img src={after} alt="Depois" className="absolute top-0 left-0 h-full w-full object-cover" />
      <span className="absolute top-4 right-4 bg-teal-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold z-10 pointer-events-none">Depois</span>

      {/* Before Image (Foreground with Clip) */}
      <div 
        className="absolute top-0 left-0 h-full w-full overflow-hidden border-r-2 border-white/80"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={before} alt="Antes" className="absolute top-0 left-0 h-full w-full max-w-none object-cover" style={{ width: containerRef.current?.offsetWidth || '100%' }} />
        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold pointer-events-none">Antes</span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark-900">
             <polyline points="15 18 9 12 15 6"></polyline>
             <polyline points="9 18 3 12 9 6" opacity="0"></polyline>
             <polyline points="19 12 13 12" opacity="0"></polyline>
             <path d="M4 12h16"></path>
           </svg>
        </div>
      </div>
    </div>
  );
};

const BeforeAfter: React.FC = () => {
  const [filter, setFilter] = useState<'facial' | 'peeling' | 'gluteo'>('peeling'); // Default to 'peeling', removed 'all'
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = TESTIMONIALS.filter(t => t.category === filter);

  const filters = [
    { id: 'peeling', label: 'Peeling' },
    { id: 'gluteo', label: 'Glúteo' },
    { id: 'facial', label: 'Facial' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-dark-900 text-white border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase">Resultados Reais</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Antes & <span className="text-gold-400 italic">Depois</span></h2>
          <p className="mt-4 text-slate-400">Transformações que inspiram confiança e celebram a beleza única de cada paciente</p>
        </div>

        {/* Filters - Enhanced with Glow */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-500 border ${
                filter === f.id 
                  ? 'bg-gold-500 text-white border-gold-500 shadow-[0_0_20px_rgba(212,165,54,0.3)] scale-105' 
                  : 'bg-transparent text-gold-400 border-gold-500/50 shadow-[0_0_15px_rgba(212,165,54,0.15)] animate-pulse hover:animate-none hover:bg-gold-500/10 hover:border-gold-400'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Visual Cues for Carousel */}
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-gold-500 animate-pulse md:hidden mx-auto">
               <Hand size={16} className="rotate-90" />
               <span className="text-xs font-bold uppercase tracking-widest">Arraste</span>
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

        {/* Carousel Grid */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
        >
          {filtered.map((item) => (
            <div 
              key={item.id} 
              // Mobile: min-w-[90vw] (1 per screen)
              // Desktop: min-w-[calc(50%-12px)] (2 per screen accounting for gap)
              className="min-w-[90vw] md:min-w-[calc(50%-12px)] snap-center bg-dark-800 rounded-3xl overflow-hidden border border-slate-800 hover:border-gold-500/30 transition-all duration-500 group shadow-2xl flex flex-col"
            >
              <CompareImage before={item.beforeImage} after={item.afterImage} />
              <div className="p-6 relative flex-1">
                <Quote className="text-gold-500 mb-2 opacity-30 absolute top-6 right-6" size={40} />
                <p className="font-serif italic text-lg text-slate-200 mb-4 relative z-10 line-clamp-3">"{item.quote}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-base">{item.patientName}</h4>
                  <p className="text-gold-400 text-xs font-bold uppercase tracking-wider">{item.procedure}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Filler div to ensure last item is visible with padding */}
          <div className="min-w-[1px] h-full"></div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
            <Button 
                variant="primary" 
                icon={<MessageCircle size={18} />}
                onClick={() => window.open('https://wa.me/5554991928750', '_blank')}
            >
                Quero ter esse resultado
            </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;