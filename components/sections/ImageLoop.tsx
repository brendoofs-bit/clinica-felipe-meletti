import React from 'react';
import { IMAGES } from '../../constants';

const ImageLoop: React.FC = () => {
  // Using array of images repeated to ensure smooth loop
  const loopImages = [
    IMAGES.clinicInterior1,
    IMAGES.procedure1,
    IMAGES.clinicInterior2,
    IMAGES.procedure2,
    IMAGES.procedure3,
    IMAGES.clinicInterior1, 
    IMAGES.procedure1,
    IMAGES.clinicInterior2,
  ];

  return (
    <section className="py-12 bg-white overflow-hidden relative border-b border-gold-100/50">
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-white via-transparent to-white w-full h-full" />
      
      <div className="flex animate-[scroll_40s_linear_infinite] gap-8 w-max px-8">
        {loopImages.map((img, index) => (
          <div 
            key={index} 
            className="w-[300px] h-[200px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500"
          >
            <img 
              src={img} 
              alt="Ambiente Clínica" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
         {loopImages.map((img, index) => (
          <div 
            key={`dup-${index}`} 
            className="w-[300px] h-[200px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500"
          >
            <img 
              src={img} 
              alt="Ambiente Clínica" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
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