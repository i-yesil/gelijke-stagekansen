import React, { useState } from 'react';
import { Target, CheckCircle2, RotateCcw, ArrowRight, User } from 'lucide-react';
import { nazorgStudenten } from '../../data/bouwstenen';

interface OpdrachtNazorgScenarioProps {
  onComplete: () => void;
  onReset: () => void;
  isVoltooid: boolean;
}

export const OpdrachtNazorgScenario: React.FC<OpdrachtNazorgScenarioProps> = ({
  onComplete,
  onReset,
  isVoltooid
}) => {
  const [huidig, setHuidig] = useState<number>(0);
  const [gekozenOptieIdx, setGekozenOptieIdx] = useState<number | null>(null);

  const currentStudent = nazorgStudenten[huidig];

  const handleKies = (optieIdx: number) => {
    if (gekozenOptieIdx !== null) return;
    setGekozenOptieIdx(optieIdx);
  };

  const handleVolgende = () => {
    const nextIdx = huidig + 1;
    if (nextIdx >= nazorgStudenten.length) {
      onComplete();
    }
    setHuidig(nextIdx);
    setGekozenOptieIdx(null);
  };

  const handleOpnieuw = () => {
    setHuidig(0);
    setGekozenOptieIdx(null);
    onReset();
  };

  const isAfgerond = huidig >= nazorgStudenten.length;

  return (
    <div className="rounded-xl border-2 border-[#3AB7B0] overflow-hidden shadow-2xs bg-[#EDFAF9]">
      {/* Themed Header Bar matching tegel 5 */}
      <div className="bg-[#3AB7B0] text-white px-3.5 sm:px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-white shrink-0" />
          <h3 className="text-xs sm:text-[13.5px] font-bold text-white tracking-wide">
            Kies passende nazorg: Wat past bij deze student?
          </h3>
        </div>
        <span className="text-[9.5px] font-bold uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-full">
          Oefening Stap 5
        </span>
      </div>

      <div className="p-3.5 sm:p-4">
        <p className="text-xs text-[#003340]/80 mb-3">
          Nazorg vraagt maatwerk: reageer op drie verschillende casussen na afloop van een incident.
        </p>

        {isAfgerond ? (
          <div className="p-4 bg-[#EDFAF9] border border-[#3AB7B0]/30 rounded-lg text-center space-y-2">
            <div className="w-9 h-9 rounded-full bg-[#3AB7B0]/20 text-[#3AB7B0] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm font-bold text-[#003340]">
              Alle drie casussen doorlopen!
            </p>
            <p className="text-xs text-[#5A5A55] max-w-lg mx-auto leading-relaxed">
              Je hebt scherp hoe individuele nazorg (decaan, emotioneel herstel) en structurele nazorg (bedrijfsdossier, rode lijst) elkaar versterken.
            </p>
            <button
              onClick={handleOpnieuw}
              className="mt-1 inline-flex items-center gap-1.5 text-xs text-[#3AB7B0] hover:underline font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Opnieuw proberen</span>
            </button>
          </div>
        ) : (
          <div className="bg-white border border-[#E8E4DA] rounded-lg p-3.5 sm:p-4 shadow-2xs">
            <div className="flex justify-between items-center text-[11px] text-[#7A756E] mb-2.5">
              <span className="font-bold uppercase tracking-wider text-[#3AB7B0]">
                Casus {huidig + 1} van {nazorgStudenten.length}
              </span>
              <span>Student: {currentStudent.naam}</span>
            </div>

            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-full bg-[#3AB7B0] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                {currentStudent.naam.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-[13px] text-[#003340]">{currentStudent.naam}</h4>
                <p className="text-[10.5px] text-[#7A756E]">Nazorggesprek na 3 weken</p>
              </div>
            </div>

            <p className="p-3 bg-[#F7EFE3] rounded-lg border border-[#EDE6DA] text-xs sm:text-[13px] leading-relaxed text-[#003340] italic mb-3">
              "{currentStudent.verhaal}"
            </p>

            <p className="text-xs sm:text-[13px] font-semibold text-[#003340] mb-2">
              Wat is de meest passende reactie?
            </p>

            <div className="space-y-2 mb-3">
              {currentStudent.opties.map((opt, oIdx) => {
                const isSelected = gekozenOptieIdx === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleKies(oIdx)}
                    disabled={gekozenOptieIdx !== null}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-lg border text-xs sm:text-[12.5px] leading-relaxed transition-all cursor-pointer ${
                      isSelected
                        ? opt.juist
                          ? 'bg-[#EDFAF9] border-[#3AB7B0] text-[#003340] ring-2 ring-[#3AB7B0]/20 font-medium'
                          : 'bg-[#FDEEF3] border-[#B41E4B] text-[#003340] ring-2 ring-[#B41E4B]/20 font-medium'
                        : gekozenOptieIdx !== null
                        ? opt.juist
                          ? 'bg-[#EDFAF9]/60 border-[#3AB7B0]/50 text-[#003340]'
                          : 'opacity-40 bg-gray-50 border-gray-200 cursor-not-allowed'
                        : 'bg-white hover:bg-[#F7EFE3] border-[#E8E4DA] text-[#003340]'
                    }`}
                  >
                    <span className="font-bold mr-1.5">{opt.letter}.</span>
                    <span>{opt.tekst}</span>
                  </button>
                );
              })}
            </div>

            {gekozenOptieIdx !== null && (
              <div className="p-3 bg-[#FBF7F1] border border-[#EDE6DA] rounded-lg text-xs leading-relaxed animate-in fade-in">
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  {currentStudent.opties[gekozenOptieIdx].juist ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3AB7B0]" />
                      <span className="text-[#3AB7B0] text-xs">Passende keuze</span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#B41E4B] text-xs">
                        Dit past minder goed. Beter passend is optie {currentStudent.juistOptie}.
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs text-[#003340] mb-2.5 leading-relaxed">
                  {currentStudent.opties[gekozenOptieIdx].uitleg}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={handleVolgende}
                    className="inline-flex items-center gap-1 bg-[#003340] hover:bg-[#004558] text-white px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <span>{huidig < nazorgStudenten.length - 1 ? 'Volgende casus' : 'Afronden'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

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
