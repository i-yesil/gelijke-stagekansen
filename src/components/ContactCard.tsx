import React from 'react';
import { Mail, HelpCircle } from 'lucide-react';

export const ContactCard: React.FC = () => {
  return (
    <div className="mt-8 md:mt-10 mb-8">
      <div className="bg-[#003340] text-white border border-[#002630] rounded-xl p-5 md:p-6 shadow-none relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
                <HelpCircle className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-white tracking-tight">
                Advies of ondersteuning nodig?
              </h3>
            </div>
            <p className="text-xs md:text-sm text-[#EDE6DA] leading-relaxed pl-8">
              Heb je advies of ondersteuning nodig over een casus, twijfel je over de juiste aanpak of wil je overleggen over een situatie rondom stagediscriminatie? Of je nu onderwijsmanager, stagecoördinator, docent, studieloopbaancoach of stagebegeleider bent: de adviseurs van de Themagroep Studentgerichte Omgeving (TG-SO) denken graag met je mee en bieden rugdekking.
            </p>
          </div>

          <div className="pl-8 md:pl-0 shrink-0">
            <a
              href="mailto:TG-SO-adviseurs@hr.nl?subject=Adviesvraag%20stagediscriminatie%20TG-SO"
              className="inline-flex items-center gap-2 bg-[#D3104C] hover:bg-[#B41E4B] text-white px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition-colors shadow-none cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Neem contact op</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
