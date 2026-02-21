import React from 'react';
import { IMPACT_STATS } from '../../constants';
import Button from '../ui/Button';
import { MessageCircle } from 'lucide-react';

const ScientificImpact: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-slate-500 text-sm font-medium tracking-[0.2em] uppercase block mb-4">O Poder da Transformação</span>
          
          <h2 className="font-serif text-5xl md:text-7xl text-gold-400 mt-4 mb-8">Ciência & Autoestima</h2>
          
          <p className="mt-4 text-white text-xl md:text-2xl font-serif max-w-3xl mx-auto leading-relaxed">
            <span className="text-teal-400 font-bold block mb-2">Estudos científicos comprovam:</span> 
            Procedimentos estéticos vão muito além da aparência. São investimentos em autoconfiança, bem-estar emocional e qualidade de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-gold-500/50 transition-all hover:-translate-y-2">
              <div className="mb-4 text-teal-400">
                <stat.icon className="w-6 h-6 text-gold-500" />
              </div>
              <div className="text-5xl font-serif text-white mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-white mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Fonte: Journal of Aesthetic Medicine</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 bg-teal-900/50 rounded-lg flex items-center justify-center mb-6 text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h4 className="text-white font-bold mb-3">Impacto Psicológico</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Estudos demonstram correlação direta entre satisfação com a aparência e bem-estar emocional.</p>
           </div>
           
           <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 bg-teal-900/50 rounded-lg flex items-center justify-center mb-6 text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 className="text-white font-bold mb-3">Segurança Comprovada</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Procedimentos realizados com protocolos rigorosos e tecnologia de última geração.</p>
           </div>

           <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 bg-teal-900/50 rounded-lg flex items-center justify-center mb-6 text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h4 className="text-white font-bold mb-3">Qualidade de Vida</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Pacientes relatam melhoras significativas na vida social e profissional pós-procedimento.</p>
           </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
             <Button 
                variant="primary" 
                icon={<MessageCircle size={18} />}
                onClick={() => window.open('https://wa.me/5554991928750', '_blank')}
            >
                Agende sua consulta agora
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ScientificImpact;