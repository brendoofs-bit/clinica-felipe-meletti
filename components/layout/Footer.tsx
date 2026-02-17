import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10 border-t border-gold-500/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-serif text-2xl text-gold-500 mb-4">Dr. Felipe Meletti</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Transformando vidas através da medicina estética de alta precisão, com resultados naturais e sofisticados.
          </p>
          <div className="flex gap-4">
             <a href="https://www.instagram.com/clinicafelipemeletti/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all group">
                <Instagram size={18} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="https://www.facebook.com/clinicafelipemeletti" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all group">
                <Facebook size={18} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="https://www.youtube.com/user/ClinicaFelipeMeletti" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all group">
                <Youtube size={18} className="text-slate-400 group-hover:text-white" />
              </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-gold-200 font-serif text-lg mb-6">Navegação</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="https://www.clinicafelipemeletti.com.br/a-clinica" className="hover:text-gold-500 transition-colors">A Clínica</a></li>
            <li><a href="https://www.clinicafelipemeletti.com.br/tratamentos" className="hover:text-gold-500 transition-colors">Serviços</a></li>
            <li><a href="https://www.clinicafelipemeletti.com.br/duvidas-frequentes" className="hover:text-gold-500 transition-colors">Dúvidas Frequentes</a></li>
            <li><a href="https://www.clinicafelipemeletti.com.br/fale-conosco" className="hover:text-gold-500 transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Procedures */}
        <div>
          <h3 className="text-gold-200 font-serif text-lg mb-6">Procedimentos</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="https://www.clinicafelipemeletti.com.br/dt_procedures/peeling-de-fenol-like" className="hover:text-gold-500 transition-colors">Peeling Fenol Like</a></li>
            <li><a href="https://www.clinicafelipemeletti.com.br/dt_procedures/remodelacao-glutea" className="hover:text-gold-500 transition-colors">Remodelação Glútea</a></li>
            <li><a href="https://www.clinicafelipemeletti.com.br/dt_procedures/ultraformer" className="hover:text-gold-500 transition-colors">Ultraformer</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gold-200 font-serif text-lg mb-6">Contato</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold-500 shrink-0" />
              <div className="flex flex-col">
                <span>(54) 99192-8750</span>
                <span>(61) 99289-8064</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold-500 shrink-0" />
              <span>falecom@clinicafelipemeletti.com.br</span>
            </li>
            <li className="flex items-start gap-3 mt-2 pt-4 border-t border-slate-800">
              <Clock size={18} className="text-gold-500 shrink-0 mt-1" />
              <div>
                <span className="block font-bold text-white mb-1">Horário de Atendimento</span>
                <span className="block">Segunda a Sexta</span>
                <span className="block">8:30 – 12:00</span>
                <span className="block">13:30 – 18:30</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2026 Dr. Felipe Meletti. Todos os direitos reservados.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span>Feito com <span className="text-gold-500">♥</span> para transformar vidas</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;