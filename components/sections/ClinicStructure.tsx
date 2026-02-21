import React from 'react';
import { Shield, Thermometer, Heart, Star, MessageCircle } from 'lucide-react';
import { IMAGES } from '../../constants';
import Button from '../ui/Button';

const ClinicStructure: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div>
           <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Estrutura & Segurança</span>
           <h2 className="font-serif text-4xl text-dark-900 mt-4 mb-6">Excelência Hospitalar em Ambiente <span className="text-gold-500">Luxuoso</span></h2>
           
           <p className="text-slate-600 leading-relaxed mb-8">
             Na medicina estética, a segurança é o alicerce da beleza. Nossa clínica opera sob rigorosos protocolos de esterilização hospitalar e rastreabilidade total de insumos (ANVISA). Diferente de franquias, aqui não existe delegação de risco: procedimentos invasivos são planejados e executados exclusivamente pelo Dr. Felipe Meletti.
           </p>

           <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                    <Shield className="text-gold-600" size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-dark-900">Segurança Total</h4>
                    <p className="text-sm text-slate-500">Retaguarda completa para intercorrências e suporte 24h pós-procedimento.</p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                    <Thermometer className="text-gold-600" size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-dark-900">Ambiente Controlado</h4>
                    <p className="text-sm text-slate-500">Climatização com filtros hospitalares e esterilização constante.</p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                    <Heart className="text-gold-600" size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-dark-900">Atendimento Humanizado</h4>
                    <p className="text-sm text-slate-500">Experiência sensorial única, desde a recepção até o pós-consulta.</p>
                 </div>
              </div>
           </div>

           <Button 
                variant="primary" 
                icon={<MessageCircle size={18} />}
                onClick={() => window.open('https://wa.me/5554991928750', '_blank')}
            >
                Conheça nossa estrutura
            </Button>
        </div>

        {/* Visuals */}
        <div className="relative">
           <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.clinicInterior1} alt="Recepção" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12" />
              <img src={IMAGES.clinicInterior2} alt="Sala de Procedimento" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
           </div>
           
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-6 rounded-full shadow-2xl border border-gold-200">
              <Star className="text-gold-500 w-8 h-8 fill-current" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default ClinicStructure;