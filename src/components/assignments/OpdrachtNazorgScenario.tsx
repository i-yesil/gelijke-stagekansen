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
    <div className="bg-[#FBF7F1] border-2 border-[#B6E8E5] rounded-xl p-5 md:p-6 my-6 shadow-2xs">
      <div className="flex items-center gap-2.5 mb-2 text-[#003340]">
        <div className="w-6 h-6 rounded-full bg-[#3AB7B0] text-white flex items-center justify-center shadow-2xs">
          <Target className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-[#003340]">Kies passende nazorg: Wat past bij deze student?</h3>
      </div>
      <p className="text-sm text-[#5A5A55] mb-4">
        Nazorg vraagt maatwerk: reageer op drie verschillende casussen na afloop van een incident.
      </p>

      {isAfgerond ? (
        <div className="p-5 bg-[#EDFAF9] border border-[#3AB7B0]/30 rounded-lg text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#3AB7B0]/20 text-[#3AB7B0] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-sm md:text-base font-bold text-[#003340]">
            Alle drie casussen doorlopen!
          </p>
          <p className="text-xs md:text-sm text-[#5A5A55] max-w-lg mx-auto">
            Je hebt scherp hoe individuele nazorg (decaan, emotioneel herstel) en structurele nazorg (bedrijfsdossier, rode lijst) elkaar versterken.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-[#E8E4DA] rounded-lg p-5 shadow-2xs">
          <div className="flex justify-between items-center text-xs text-[#7A756E] mb-3">
            <span className="font-semibold uppercase tracking-wider text-[#3AB7B0]">
              Casus {huidig + 1} van {nazorgStudenten.length}
            </span>
            <span>Student: {currentStudent.naam}</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#3AB7B0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              {currentStudent.naam.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#003340]">{currentStudent.naam}</h4>
              <p className="text-xs text-[#7A756E]">Nazorggesprek na 3 weken</p>
            </div>
          </div>

          <p className="p-3.5 bg-[#F7EFE3] rounded-lg border border-[#EDE6DA] text-sm leading-relaxed text-[#003340] italic mb-4">
            "{currentStudent.verhaal}"
          </p>

          <p className="text-xs md:text-sm font-semibold text-[#003340] mb-2.5">
            Wat is de meest passende reactie?
          </p>

          <div className="space-y-2 mb-4">
            {currentStudent.opties.map((opt, oIdx) => {
              const isSelected = gekozenOptieIdx === oIdx;
              return (
                <button
                  key={oIdx}
                  onClick={() => handleKies(oIdx)}
                  disabled={gekozenOptieIdx !== null}
                  className={`w-full text-left p-3 rounded-lg border text-xs md:text-sm leading-relaxed transition-all cursor-pointer ${
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
            <div className="p-3.5 bg-[#FBF7F1] border border-[#EDE6DA] rounded-lg text-xs md:text-sm leading-relaxed animate-in fade-in">
              <div className="font-bold mb-1 flex items-center gap-1.5">
                {currentStudent.opties[gekozenOptieIdx].juist ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#3AB7B0]" />
                    <span className="text-[#3AB7B0]">Passende keuze</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#B41E4B]">
                      Dit past minder goed. Beter passend is optie {currentStudent.juistOptie}.
                    </span>
                  </>
                )}
              </div>
              <p className="text-xs text-[#003340] mb-3">
                {currentStudent.opties[gekozenOptieIdx].uitleg}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={handleVolgende}
                  className="inline-flex items-center gap-1.5 bg-[#003340] hover:bg-[#004558] text-white px-4 py-2 rounded-md text-xs font-semibold cursor-pointer transition-colors"
                >
                  <span>{huidig < nazorgStudenten.length - 1 ? 'Volgende casus' : 'Afronden'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

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
