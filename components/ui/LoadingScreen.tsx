import React from 'react';

interface LoadingScreenProps {
  finishLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ finishLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-dark-900 transition-all duration-1000 ${
        finishLoading ? 'opacity-0 pointer-events-none translate-y-[-100%]' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-2 border-b-2 border-gold-400 animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-r-2 border-l-2 border-gold-600 animate-spin reverse" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-serif text-gold-200">F</span>
        </div>
      </div>
      <h1 className="mt-8 text-xl font-serif text-gold-100 tracking-[0.2em] uppercase animate-pulse">
        Clínica Felipe Meletti
      </h1>
      <p className="mt-2 text-xs text-gold-400/60 uppercase tracking-widest">Excelência em Estética</p>
    </div>
  );
};

export default LoadingScreen;