import React, { useState, useRef, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../../constants';
import { Quote } from 'lucide-react';

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
      className="relative h-[400px] w-full overflow-hidden select-none cursor-ew-resize group"
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
             <polyline points="9 18 3 12 9 6" opacity="0"></polyline> {/* Visual balance */}
             <polyline points="19 12 13 12" opacity="0"></polyline>
             <path d="M4 12h16"></path>
           </svg>
        </div>
      </div>
    </div>
  );
};

const BeforeAfter: React.FC = () => {
  // Removed 'all', default to 'peeling' as per "Remover o filtro Todos"
  const [filter, setFilter] = useState<'facial' | 'corporal' | 'peeling' | 'gluteo'>('peeling');

  // Filter and Limit to 2
  const filtered = TESTIMONIALS
    .filter(t => t.category === filter)
    .slice(0, 2);

  const filters = [
    { id: 'peeling', label: 'Peeling' },
    { id: 'gluteo', label: 'Glúteo' },
    { id: 'facial', label: 'Facial' },
    { id: 'corporal', label: 'Corporal' },
  ];

  return (
    <section className="py-24 bg-dark-900 text-white border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase">Resultados Reais</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Antes & <span className="text-gold-400 italic">Depois</span></h2>
          <p className="mt-4 text-slate-400">Transformações que inspiram confiança e celebram a beleza única de cada paciente</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === f.id 
                  ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg shadow-teal-900/50' 
                  : 'bg-dark-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((item) => (
            <div key={item.id} className="bg-dark-800 rounded-2xl overflow-hidden border border-slate-800 hover:border-teal-500/30 transition-all duration-500 group">
              <CompareImage before={item.beforeImage} after={item.afterImage} />
              <div className="p-8">
                <Quote className="text-gold-500 mb-4 opacity-50" size={32} />
                <p className="font-serif italic text-lg text-slate-200 mb-6">"{item.quote}"</p>
                <div>
                  <h4 className="font-bold text-white">{item.patientName}</h4>
                  <p className="text-teal-400 text-sm">{item.procedure}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;