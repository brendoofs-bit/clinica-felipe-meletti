import React from 'react';
import { MapPin } from 'lucide-react';

const Locations: React.FC = () => {
  const units = [
    {
      city: 'São Paulo',
      state: 'SP',
      name: 'Hospital IBIRAPUERA',
      address: 'Avenida Ibirapuera, 1326\nJardim Luzitânia',
      color: 'from-slate-800 to-slate-900'
    },
    {
      city: 'Caxias do Sul',
      state: 'RS',
      name: 'Prime Offices',
      address: 'Rua Sinimbu, 1878 – Sala 903\nCentro',
      color: 'from-slate-700 to-slate-800'
    },
    {
      city: 'Brasília',
      state: 'DF',
      name: 'Life Centro Médico',
      address: 'Sgam, 608 – Módulo F – Bloco A\nSalas 226/228/229/230 – Asa Norte',
      color: 'from-slate-800 to-slate-900'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-cream border-t border-gold-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Nossas Unidades</span>
          <h2 className="font-serif text-4xl text-dark-900 mt-4">Encontre-nos em <span className="text-gold-500">Três Estados</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {units.map((unit, idx) => (
            <div 
              key={idx}
              className={`relative overflow-hidden rounded-2xl p-8 text-white bg-gradient-to-br ${unit.color} group hover:-translate-y-2 transition-transform duration-300 shadow-xl`}
            >
               {/* Background decoration */}
               <MapPin className="absolute -bottom-4 -right-4 text-white/5 w-32 h-32 transform group-hover:scale-110 transition-transform" />
               
               <div className="relative z-10">
                 <span className="inline-block px-3 py-1 bg-gold-500/20 border border-gold-500/50 text-gold-400 text-xs font-bold rounded-full mb-6">
                   {unit.state}
                 </span>
                 <h3 className="font-serif text-2xl mb-2">{unit.city}</h3>
                 <p className="font-bold text-lg mb-4 text-slate-300">{unit.name}</p>
                 <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed">{unit.address}</p>
                 
                 <a 
                   href={`https://maps.google.com/?q=${unit.name} ${unit.city}`} 
                   target="_blank" 
                   rel="noreferrer"
                   className="inline-block mt-8 text-gold-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest border-b border-gold-400/30 hover:border-white pb-1"
                 >
                   Ver no Mapa
                 </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;