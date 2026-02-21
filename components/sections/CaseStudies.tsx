import React, { useState, useEffect } from 'react';
import { CASE_STUDIES } from '../../constants';
import { ArrowRight, X, Hand, MessageCircle } from 'lucide-react';
import { CaseStudy } from '../../types';
import Button from '../ui/Button';

const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCase]);

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12 flex justify-between items-end">
           <div>
             <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Estudos Clínicos</span>
             <h2 className="font-serif text-4xl text-dark-900 mt-2">Diagnóstico & Conduta</h2>
           </div>
           <div className="hidden md:block w-1/3 h-[1px] bg-gold-200 mb-4"></div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex items-center gap-2 text-gold-600 mb-4 animate-pulse">
           <Hand size={16} className="rotate-90" />
           <span className="text-xs font-bold uppercase tracking-widest">Arraste para ver mais</span>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex gap-4 md:gap-8 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
           {CASE_STUDIES.map((study) => (
             <div 
               key={study.id}
               className="min-w-[85vw] md:min-w-[350px] snap-center bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-all duration-300"
               onClick={() => setSelectedCase(study)}
             >
               <div className="h-[250px] overflow-hidden relative">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                     <p className="text-xs uppercase tracking-wider bg-gold-500/80 inline-block px-2 py-1 rounded mb-2">{study.technique}</p>
                     <h3 className="font-serif text-xl">{study.title}</h3>
                  </div>
               </div>
               <div className="p-6">
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">{study.shortDescription}</p>
                  <button className="text-gold-600 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    Ver Caso Completo <ArrowRight size={14} />
                  </button>
               </div>
             </div>
           ))}
           {/* Spacer for better scrolling on mobile */}
           <div className="min-w-[1px] md:hidden"></div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
             <Button 
                variant="outline" 
                icon={<MessageCircle size={18} />}
                onClick={() => window.open('https://wa.me/5554991928750', '_blank')}
            >
                Agendar Avaliação
            </Button>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedCase && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
           <div 
             className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm transition-opacity"
             onClick={() => setSelectedCase(null)}
           ></div>
           
           <div className="bg-white w-full max-w-[1000px] max-h-[90vh] rounded-2xl shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden animate-slide-up">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white p-2 rounded-full transition-colors"
              >
                <X size={24} className="text-dark-900" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
                <img src={selectedCase.fullImage} alt={selectedCase.title} className="w-full h-full object-cover" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                 <h2 className="font-serif text-3xl text-gold-600 mb-2">{selectedCase.title}</h2>
                 <p className="text-slate-400 text-sm uppercase tracking-wider mb-8">{selectedCase.technique}</p>

                 <div className="space-y-8">
                    <div>
                      <h4 className="text-dark-900 font-bold mb-2 border-b border-gold-200 pb-2">Diagnóstico</h4>
                      <p className="text-slate-600 leading-relaxed">{selectedCase.details.diagnosis}</p>
                    </div>

                    <div>
                      <h4 className="text-dark-900 font-bold mb-2 border-b border-gold-200 pb-2">Conduta Médica</h4>
                      <p className="text-slate-600 leading-relaxed">{selectedCase.details.conduct}</p>
                    </div>

                    <div className="bg-gold-50 p-6 rounded-lg border border-gold-200">
                      <h4 className="text-gold-700 font-bold mb-2">Resultado</h4>
                      <p className="text-gold-900 leading-relaxed">{selectedCase.details.result}</p>
                    </div>
                 </div>

                 <button 
                   onClick={() => window.open(`https://wa.me/5554991928750?text=Olá, gostaria de saber mais sobre o caso de ${selectedCase.title}`, '_blank')}
                   className="w-full mt-8 bg-dark-900 text-white py-4 rounded-lg hover:bg-gold-500 transition-colors font-bold uppercase tracking-widest text-sm"
                 >
                   Agendar Avaliação Semelhante
                 </button>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;