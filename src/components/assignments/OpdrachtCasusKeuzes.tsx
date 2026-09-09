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
    <div className="rounded-xl border-2 border-[#FCC200] overflow-hidden shadow-2xs bg-[#FEFBEA]">
      {/* Themed Header Bar matching tegel 4 */}
      <div className="bg-[#FCC200] text-[#003340] px-3.5 sm:px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-[#003340] shrink-0" />
          <h3 className="text-xs sm:text-[13.5px] font-bold text-[#003340] tracking-wide">
            Bepaal je handelen: Wat zou jij doen?
          </h3>
        </div>
        <span className="text-[9.5px] font-bold uppercase tracking-wider bg-black/10 text-[#003340] px-2 py-0.5 rounded-full">
          Oefening Stap 4
        </span>
      </div>

      <div className="p-3.5 sm:p-4">
        <p className="text-xs text-[#003340]/80 mb-3">
          Weeg jouw rol als begeleider af in een realistisch dilemma tussen bedrijfsbelang en studentveiligheid.
        </p>

        <div className="bg-white border border-[#E8E4DA] rounded-lg p-3.5 sm:p-4 shadow-2xs">
          <div className="p-3 bg-[#F7EFE3] rounded-lg border border-[#EDE6DA] mb-3 text-xs sm:text-[13px] leading-relaxed text-[#003340]">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#7A756E] block mb-1">
              Casus
            </span>
            {casus4.situatie}
          </div>

          <p className="text-xs sm:text-[13px] font-semibold text-[#003340] mb-2.5">
            Wat is jouw eerste stap?
          </p>

          <div className="space-y-2 mb-3">
            {casus4.keuzes.map((k, i) => {
              const isSelected = gekozen === i;
              return (
                <button
                  key={i}
                  onClick={() => handleKies(i)}
                  disabled={gekozen !== null}
                  className={`w-full text-left p-2.5 sm:p-3 rounded-lg border text-xs sm:text-[12.5px] leading-relaxed transition-all cursor-pointer ${
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
            <div className="p-3 bg-[#FBF7F1] border border-[#EDE6DA] rounded-lg text-xs leading-relaxed animate-in fade-in">
              <div className="font-bold mb-1 flex items-center gap-1.5">
                {casus4.keuzes[gekozen].valkuil ? (
                  <>
                    <AlertTriangle className="w-3.5 h-3.5 text-[#B41E4B]" />
                    <span className="text-[#B41E4B] text-xs">
                      Valkuil: {casus4.keuzes[gekozen].valkuil}
                    </span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3AB7B0]" />
                    <span className="text-[#3AB7B0] text-xs">Sterke keuze: student behoudt regie</span>
                  </>
                )}
              </div>
              <p className="text-xs text-[#003340] leading-relaxed">
                {casus4.keuzes[gekozen].uitleg}
              </p>
            </div>
          )}
        </div>

        <div className="mt-3 flex justify-between items-center">
          <button
            onClick={handleOpnieuw}
            className="inline-flex items-center gap-1 text-xs text-[#5A5A55] hover:text-[#003340] border border-[#C9C4B8] hover:bg-[#F7EFE3] px-2.5 py-1.5 rounded cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Opnieuw proberen</span>
          </button>

          {isVoltooid && (
            <span className="text-xs text-[#3AB7B0] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Voltooid
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
