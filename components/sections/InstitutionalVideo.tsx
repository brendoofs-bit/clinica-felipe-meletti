import React from 'react';
import { Play, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const InstitutionalVideo: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden border-t border-slate-800">
      {/* Decorative Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm mb-4">
             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
             <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest">Assista</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Conheça nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Essência</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">Mergulhe na atmosfera única da Clínica Felipe Meletti. Tecnologia, conforto e um olhar artístico para a sua beleza.</p>
        </div>

        {/* Video Frame */}
        <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
           {/* Gold border accent */}
           <div className="absolute inset-0 border border-gold-500/20 rounded-3xl pointer-events-none z-20"></div>
           
           <iframe 
             width="100%" 
             height="100%" 
             src="https://www.youtube.com/embed/u_tiyFzcq2U?start=18&rel=0&modestbranding=1" 
             title="Institutional Video" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen
             className="w-full h-full object-cover"
           ></iframe>
        </div>

        {/* Conversion Area */}
        <div className="mt-16 bg-gradient-to-r from-dark-800 to-slate-900 p-8 md:p-12 rounded-3xl border border-slate-700 max-w-4xl w-full text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Pronto para viver essa experiência?</h3>
                <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                    Não espere mais para investir na sua autoestima. Agende sua avaliação personalizada com o Dr. Felipe Meletti e descubra o melhor da sua beleza.
                </p>
                <Button 
                    variant="primary" 
                    icon={<MessageCircle size={18} />}
                    onClick={() => window.open('https://wa.me/5554991928750', '_blank')}
                    className="w-full md:w-auto px-12 py-4 text-lg"
                >
                    Quero Agendar Minha Avaliação
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default InstitutionalVideo;