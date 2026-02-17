import React from 'react';
import { IMAGES } from '../../constants';
import { GraduationCap, Award, Star, Users } from 'lucide-react';

const DoctorProfile: React.FC = () => {
  return (
    <section id="doctor" className="py-24 bg-gradient-to-br from-dark-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Image Column */}
        <div className="relative group">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-700 shadow-2xl">
             <img src={IMAGES.doctor} alt="Dr. Felipe Meletti" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
             
             {/* Floating Badge with Dynamic Border Loop */}
             <div className="absolute bottom-8 right-8 bg-dark-900/95 backdrop-blur-md p-6 rounded-2xl border-none max-w-[240px] overflow-hidden group-crm">
                {/* Dynamic Looping Border */}
                <div className="absolute inset-0 p-[2px] rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-[spin_4s_linear_infinite]" style={{content: "''", width: '200%', height: '200%', left: '-50%', top: '-50%'}}></div>
                </div>
                
                <div className="relative bg-dark-900 rounded-xl p-4 z-10 h-full">
                  <div className="bg-gold-500 w-8 h-8 rounded-full flex items-center justify-center mb-3">
                     <Award className="text-white" size={16} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-300 uppercase tracking-wider">CRM SP – 247683</p>
                    <p className="text-xs text-slate-300 uppercase tracking-wider">CRM RS – 26251</p>
                    <p className="text-xs text-slate-300 uppercase tracking-wider">CRM DF – 30072</p>
                  </div>
                </div>
             </div>
          </div>
          {/* Backdrops */}
          <div className="absolute top-10 -left-10 w-full h-full border border-gold-500/20 rounded-[3rem] -z-0 hidden md:block"></div>
        </div>

        {/* Content Column */}
        <div>
           <h2 className="font-serif text-5xl md:text-6xl mb-6">Dr. Felipe <span className="text-teal-400 font-light">Meletti</span></h2>
           
           <p className="text-lg text-slate-300 leading-relaxed mb-8">
             Com mais de 15 anos dedicados à medicina estética, desenvolvi uma abordagem única que combina <span className="text-gold-400">técnica refinada</span>, tecnologia de ponta e um olhar artístico para entregar resultados que respeitam e realçam a <span className="text-gold-400">beleza individual</span> de cada paciente.
           </p>

           <p className="text-slate-400 text-sm mb-12 italic border-l-2 border-gold-500 pl-6">
             "Minha filosofia é simples: cada pessoa é única, e assim devem ser seus tratamentos. Acredito que a verdadeira transformação acontece quando combinamos ciência, arte e um profundo respeito pela individualidade."
           </p>

           {/* Timeline/Stats */}
           <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                 <div>
                    <h4 className="text-gold-400 font-bold mb-1">2008</h4>
                    <p className="text-white font-serif">Graduação em Medicina</p>
                    <p className="text-slate-500 text-xs">Universidade de São Paulo (USP)</p>
                 </div>
                 <div>
                    <h4 className="text-gold-400 font-bold mb-1">2012</h4>
                    <p className="text-white font-serif">Especialização</p>
                    <p className="text-slate-500 text-xs">Medicina Estética Avançada</p>
                 </div>
              </div>
              <div className="space-y-6">
                 <div>
                    <h4 className="text-gold-400 font-bold mb-1">2015</h4>
                    <p className="text-white font-serif">Fellowship Internacional</p>
                    <p className="text-slate-500 text-xs">Barcelona, Espanha</p>
                 </div>
                 <div>
                    <h4 className="text-gold-400 font-bold mb-1">2018</h4>
                    <p className="text-white font-serif">Fundação da Clínica</p>
                    <p className="text-slate-500 text-xs">São Paulo, Brasil</p>
                 </div>
              </div>
           </div>

           {/* Stats Grid */}
           <div className="grid grid-cols-4 gap-4 border-t border-slate-800 pt-8">
             <div className="text-center">
                <div className="mx-auto w-10 h-10 mb-2 text-teal-500"><Award /></div>
                <div className="text-xl font-bold text-white">15+</div>
                <div className="text-[10px] uppercase text-slate-500">Anos de Experiência</div>
             </div>
             <div className="text-center">
                <div className="mx-auto w-10 h-10 mb-2 text-teal-500"><Users /></div>
                <div className="text-xl font-bold text-white">10.000+</div>
                <div className="text-[10px] uppercase text-slate-500">Pacientes Atendidos</div>
             </div>
             <div className="text-center">
                <div className="mx-auto w-10 h-10 mb-2 text-teal-500"><GraduationCap /></div>
                <div className="text-xl font-bold text-white">5+</div> {/* Changed from 50+ to 5+ */}
                <div className="text-[10px] uppercase text-slate-500">Certificações</div>
             </div>
             <div className="text-center">
                <div className="mx-auto w-10 h-10 mb-2 text-teal-500"><Star /></div>
                <div className="text-xl font-bold text-white">98%</div>
                <div className="text-[10px] uppercase text-slate-500">Satisfação</div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;