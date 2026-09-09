import React from 'react';
import { Mail } from 'lucide-react';

export const ContactCard: React.FC = () => {
  return (
    <div className="mt-8 md:mt-10 mb-8">
      <div className="bg-[#003340] text-white border border-[#002630] rounded-xl p-5 md:p-6 shadow-none relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <p className="text-xs md:text-sm text-[#EDE6DA] leading-relaxed">
              Wil je sparren over een casus, heb je advies nodig of wil je voor jouw opleidingsteam een aanvraag doen voor professionalisering op maat? Neem contact op met de adviseurs van de Themagroep Studentgerichte Omgeving (TG-SO).
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:TG-SO-adviseurs@hr.nl?subject=Vraag%20over%20stagediscriminatie%20/%20professionalisering%20op%20maat"
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
