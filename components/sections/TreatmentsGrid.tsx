import React from 'react';
import { TREATMENTS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';

const TreatmentsGrid: React.FC = () => {
  return (
    <section id="treatments" className="py-24 bg-cream relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Excelência em cada detalhe</span>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-900 mt-4">Tratamentos Especializados</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-200 border border-gold-200">
          {TREATMENTS.map((treatment) => (
            <div 
              key={treatment.id} 
              className="group relative bg-white p-10 hover:bg-gold-50 transition-all duration-300 cursor-hover"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-xl text-dark-800 group-hover:text-gold-700 transition-colors">
                  {treatment.name}
                </h3>
                <ArrowUpRight className="text-gold-300 group-hover:text-gold-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
              </div>
              <p className="mt-4 text-sm text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                Tecnologia avançada para resultados superiores.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline">
            Ver Todos os Tratamentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsGrid;