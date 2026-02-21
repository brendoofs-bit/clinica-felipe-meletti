import React from 'react';
import { CAROUSEL_IMAGES } from '../../constants';

const ImageLoop: React.FC = () => {
  return (
    <section className="py-12 bg-white overflow-hidden relative border-b border-gold-100/50 flex flex-col gap-4">
      {/* Reduced opacity overlay: 5% on sides */}
      <div className="absolute inset-y-0 left-0 w-[5%] z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[5%] z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      
      {/* Row 1: Left to Right */}
      <div className="flex animate-[scroll_40s_linear_infinite] gap-4 w-max px-4">
        {CAROUSEL_IMAGES.map((img, index) => (
          <div 
            key={`r1-orig-${index}`} 
            className="w-[300px] h-[200px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={img} 
              alt="Clínica Felipe Meletti" 
              className="w-full h-full object-cover transition-all duration-500" 
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
         {CAROUSEL_IMAGES.map((img, index) => (
          <div 
            key={`r1-dup-${index}`} 
            className="w-[300px] h-[200px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={img} 
              alt="Clínica Felipe Meletti" 
              className="w-full h-full object-cover transition-all duration-500" 
            />
          </div>
        ))}
      </div>

      {/* Row 2: Right to Left (Reverse) */}
      <div className="flex animate-[scroll-reverse_45s_linear_infinite] gap-4 w-max px-4">
        {CAROUSEL_IMAGES.map((img, index) => (
          <div 
            key={`r2-orig-${index}`} 
            className="w-[300px] h-[200px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={img} 
              alt="Clínica Felipe Meletti" 
              className="w-full h-full object-cover transition-all duration-500" 
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
         {CAROUSEL_IMAGES.map((img, index) => (
          <div 
            key={`r2-dup-${index}`} 
            className="w-[300px] h-[200px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={img} 
              alt="Clínica Felipe Meletti" 
              className="w-full h-full object-cover transition-all duration-500" 
            />
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default ImageLoop;