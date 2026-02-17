import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

const WhatsAppWidget: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 group cursor-hover">
      {/* Tooltip Label */}
      <div className="bg-white px-4 py-2 rounded-lg shadow-xl shadow-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0 hidden md:block">
        <p className="text-sm font-semibold text-slate-800">Agende sua Avaliação</p>
      </div>

      {/* Button */}
      <button 
        onClick={handleClick}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-xl shadow-gold-500/40 transition-transform duration-300 hover:scale-110"
        aria-label="Contatar via WhatsApp"
      >
        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75 animate-ping duration-[3s]"></span>
        
        {/* Icon */}
        <MessageCircle className="w-8 h-8 text-white fill-white relative z-10" />
        
        {/* Online Indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full z-20"></span>
      </button>
    </div>
  );
};

export default WhatsAppWidget;