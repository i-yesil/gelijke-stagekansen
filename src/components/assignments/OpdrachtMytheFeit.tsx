import React, { useState } from 'react';
import { Target, CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';
import { stellingenMF } from '../../data/bouwstenen';

interface OpdrachtMytheFeitProps {
  onComplete: () => void;
  onReset: () => void;
  isVoltooid: boolean;
}

export const OpdrachtMytheFeit: React.FC<OpdrachtMytheFeitProps> = ({
  onComplete,
  onReset,
  isVoltooid
}) => {
  const [huidig, setHuidig] = useState<number>(0);
  const [gekozen, setGekozen] = useState<'mythe' | 'feit' | null>(null);

  const handleKies = (keuze: 'mythe' | 'feit') => {
    if (gekozen !== null) return;
    setGekozen(keuze);
  };

  const handleVolgende = () => {
    const nextIdx = huidig + 1;
    if (nextIdx >= stellingenMF.length) {
      onComplete();
    }
    setHuidig(nextIdx);
    setGekozen(null);
  };

  const handleOpnieuw = () => {
    setHuidig(0);
    setGekozen(null);
    onReset();
  };

  const stelling = stellingenMF[huidig];
  const isAfgerond = huidig >= stellingenMF.length;

  return (
    <div className="rounded-xl border-2 border-[#007AA8] overflow-hidden shadow-2xs bg-[#F0F8FC]">
      {/* Themed Header Bar matching tegel 1 */}
      <div className="bg-[#007AA8] text-white px-3.5 sm:px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-white shrink-0" />
          <h3 className="text-xs sm:text-[13.5px] font-bold text-white tracking-wide">
            Onderscheid mythe en feit
          </h3>
        </div>
        <span className="text-[9.5px] font-bold uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-full">
          Oefening Stap 1
        </span>
      </div>

      <div className="p-3.5 sm:p-4">
        <p className="text-xs text-[#003340]/80 mb-3">
          Toets je kennis over hardnekkige aannames rondom stagediscriminatie.
        </p>

        {isAfgerond ? (
          <div className="p-4 bg-[#EDFAF9] border border-[#3AB7B0]/30 rounded-lg text-center space-y-2">
            <div className="w-9 h-9 rounded-full bg-[#3AB7B0]/20 text-[#3AB7B0] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm font-bold text-[#003340]">
              Alle drie stellingen beantwoord!
            </p>
            <p className="text-xs text-[#5A5A55] max-w-lg mx-auto leading-relaxed">
              Je hebt het verschil tussen mythe en feit scherp in beeld: stilte betekent nooit automatisch afwezigheid van discriminatie.
            </p>
            <button
              onClick={handleOpnieuw}
              className="mt-1 inline-flex items-center gap-1.5 text-xs text-[#007AA8] hover:underline font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Opnieuw proberen</span>
            </button>
          </div>
        ) : (
          <div className="bg-white border border-[#E8E4DA] rounded-lg p-3.5 sm:p-4 shadow-2xs">
            <div className="flex justify-between items-center text-[11px] text-[#7A756E] mb-2.5">
              <span className="font-bold uppercase tracking-wider text-[#007AA8]">Stelling {huidig + 1} van {stellingenMF.length}</span>
              <span>Kies mythe of feit</span>
            </div>

            <p className="text-[13px] sm:text-[13.5px] text-[#003340] italic font-medium leading-relaxed mb-3.5">
              "{stelling.stelling}"
            </p>

            <div className="grid grid-cols-2 gap-2.5 mb-3">
              <button
                onClick={() => handleKies('mythe')}
                disabled={gekozen !== null}
                className={`py-2 px-3 rounded-md font-semibold text-xs sm:text-[13px] border transition-all cursor-pointer ${
                  gekozen === 'mythe'
                    ? stelling.antwoord === 'mythe'
                      ? 'bg-[#3AB7B0] text-white border-[#3AB7B0]'
                      : 'bg-[#FDEEF3] text-[#B41E4B] border-[#B41E4B]'
                    : gekozen !== null
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-white hover:bg-[#F7EFE3] text-[#003340] border-[#003340]'
                }`}
              >
                Mythe
              </button>
              <button
                onClick={() => handleKies('feit')}
                disabled={gekozen !== null}
                className={`py-2 px-3 rounded-md font-semibold text-xs sm:text-[13px] border transition-all cursor-pointer ${
                  gekozen === 'feit'
                    ? stelling.antwoord === 'feit'
                      ? 'bg-[#3AB7B0] text-white border-[#3AB7B0]'
                      : 'bg-[#FDEEF3] text-[#B41E4B] border-[#B41E4B]'
                    : gekozen !== null
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-white hover:bg-[#F7EFE3] text-[#003340] border-[#003340]'
                }`}
              >
                Feit
              </button>
            </div>

            {gekozen !== null && (
              <div className="mt-3 p-3 bg-[#FBF7F1] border border-[#EDE6DA] rounded-md text-xs leading-relaxed animate-in fade-in">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  {gekozen === stelling.antwoord ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3AB7B0]" />
                      <span className="text-[#3AB7B0] text-xs">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3.5 h-3.5 text-[#B41E4B]" />
                      <span className="text-[#B41E4B] text-xs">Niet helemaal: het juiste antwoord is {stelling.antwoord}.</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-[#003340] mb-2.5 leading-relaxed">
                  {stelling.toelichting}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={handleVolgende}
                    className="inline-flex items-center gap-1 bg-[#003340] hover:bg-[#004558] text-white px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <span>{huidig < stellingenMF.length - 1 ? 'Volgende stelling' : 'Afronden'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
