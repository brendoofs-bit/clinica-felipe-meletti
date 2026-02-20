import React from 'react';
import { CAROUSEL_IMAGES } from '../../constants';

const ImageLoop: React.FC = () => {
  return (
    <section className="py-12 bg-white overflow-hidden relative border-b border-gold-100/50">
      {/* Reduced opacity overlay: 5% on sides */}
      <div className="absolute inset-y-0 left-0 w-[5%] z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[5%] z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      
      <div className="flex animate-[scroll_40s_linear_infinite] gap-8 w-max px-8">
        {CAROUSEL_IMAGES.map((img, index) => (
          <div 
            key={`orig-${index}`} 
            className="w-[300px] h-[200px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={img} 
              alt="Clínica Felipe Meletti" 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
         {CAROUSEL_IMAGES.map((img, index) => (
          <div 
            key={`dup-${index}`} 
            className="w-[300px] h-[200px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={img} 
              alt="Clínica Felipe Meletti" 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
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

export default ImageLoop;