import React, { useState } from 'react';
import { Target, CheckCircle2, RotateCcw, AlertTriangle } from 'lucide-react';
import { casus4 } from '../../data/bouwstenen';

interface OpdrachtCasusKeuzesProps {
  onComplete: () => void;
  onReset: () => void;
  isVoltooid: boolean;
}

export const OpdrachtCasusKeuzes: React.FC<OpdrachtCasusKeuzesProps> = ({
  onComplete,
  onReset,
  isVoltooid
}) => {
  const [gekozen, setGekozen] = useState<number | null>(null);

  const handleKies = (idx: number) => {
    if (gekozen !== null) return;
    setGekozen(idx);
    onComplete();
  };

  const handleOpnieuw = () => {
    setGekozen(null);
    onReset();
  };

  return (
    <div className="bg-[#FBF7F1] border-2 border-[#FCE88F] rounded-xl p-5 md:p-6 my-6 shadow-2xs">
      <div className="flex items-center gap-2.5 mb-2 text-[#003340]">
        <div className="w-6 h-6 rounded-full bg-[#FCC200] text-[#003340] flex items-center justify-center shadow-2xs">
          <Target className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-[#003340]">Bepaal je handelen: Wat zou jij doen?</h3>
      </div>
      <p className="text-sm text-[#5A5A55] mb-4">
        Weeg jouw rol als begeleider af in een realistisch dilemma tussen bedrijfsbelang en studentveiligheid.
      </p>

      <div className="bg-white border border-[#E8E4DA] rounded-lg p-5 shadow-2xs">
        <div className="p-4 bg-[#F7EFE3] rounded-lg border border-[#EDE6DA] mb-4 text-sm md:text-[15px] leading-relaxed text-[#003340]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7A756E] block mb-1">
            Casus
          </span>
          {casus4.situatie}
        </div>

        <p className="text-xs md:text-sm font-semibold text-[#003340] mb-3">
          Wat is jouw eerste stap?
        </p>

        <div className="space-y-2.5 mb-4">
          {casus4.keuzes.map((k, i) => {
            const isSelected = gekozen === i;
            return (
              <button
                key={i}
                onClick={() => handleKies(i)}
                disabled={gekozen !== null}
                className={`w-full text-left p-3.5 rounded-lg border text-sm leading-relaxed transition-all cursor-pointer ${
                  isSelected
                    ? k.valkuil
                      ? 'bg-[#FDEEF3] border-[#B41E4B] text-[#003340] ring-2 ring-[#B41E4B]/20 font-medium'
                      : 'bg-[#EDFAF9] border-[#3AB7B0] text-[#003340] ring-2 ring-[#3AB7B0]/20 font-medium'
                    : gekozen !== null
                    ? 'opacity-40 bg-gray-50 border-gray-200 cursor-not-allowed'
                    : 'bg-white hover:bg-[#F7EFE3] border-[#E8E4DA] text-[#003340]'
                }`}
              >
                {k.tekst}
              </button>
            );
          })}
        </div>

        {gekozen !== null && (
          <div className="p-4 bg-[#FBF7F1] border border-[#EDE6DA] rounded-lg text-sm leading-relaxed animate-in fade-in">
            <div className="font-bold mb-1.5 flex items-center gap-1.5">
              {casus4.keuzes[gekozen].valkuil ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-[#B41E4B]" />
                  <span className="text-[#B41E4B]">
                    Valkuil: {casus4.keuzes[gekozen].valkuil}
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#3AB7B0]" />
                  <span className="text-[#3AB7B0]">Sterke keuze: student behoudt regie</span>
                </>
              )}
            </div>
            <p className="text-xs md:text-sm text-[#003340]">
              {casus4.keuzes[gekozen].uitleg}
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleOpnieuw}
          className="inline-flex items-center gap-1 text-xs text-[#5A5A55] hover:text-[#003340] border border-[#C9C4B8] hover:bg-[#F7EFE3] px-2.5 py-1.5 rounded cursor-pointer transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Opnieuw doen</span>
        </button>

        {isVoltooid && (
          <span className="text-xs text-[#3AB7B0] font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Voltooid
          </span>
        )}
      </div>
    </div>
  );
};
