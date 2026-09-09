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
    <div className="bg-[#FBF7F1] border-2 border-[#B0E5F8] rounded-xl p-5 md:p-6 my-6 shadow-2xs">
      <div className="flex items-center gap-2.5 mb-2 text-[#003340]">
        <div className="w-6 h-6 rounded-full bg-[#00B0F0] text-white flex items-center justify-center shadow-2xs">
          <Target className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-[#003340]">Onderscheid mythe en feit</h3>
      </div>
      <p className="text-sm text-[#5A5A55] mb-4">
        Toets je kennis over hardnekkige aannames rondom stagediscriminatie.
      </p>

      {isAfgerond ? (
        <div className="p-5 bg-[#EDFAF9] border border-[#3AB7B0]/30 rounded-lg text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#3AB7B0]/20 text-[#3AB7B0] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-sm md:text-base font-bold text-[#003340]">
            Alle drie stellingen beantwoord!
          </p>
          <p className="text-xs md:text-sm text-[#5A5A55] max-w-lg mx-auto">
            Je hebt het verschil tussen mythe en feit scherp in beeld: stilte betekent nooit automatisch afwezigheid van discriminatie.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-[#E8E4DA] rounded-lg p-5 shadow-2xs">
          <div className="flex justify-between items-center text-xs text-[#7A756E] mb-3">
            <span className="font-semibold uppercase tracking-wider text-[#00B0F0]">Stelling</span>
            <span>{huidig + 1} van {stellingenMF.length}</span>
          </div>

          <p className="text-base text-[#003340] italic font-medium leading-relaxed mb-5">
            {stelling.stelling}
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => handleKies('mythe')}
              disabled={gekozen !== null}
              className={`p-3 rounded-md font-medium text-sm border transition-all cursor-pointer ${
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
              className={`p-3 rounded-md font-medium text-sm border transition-all cursor-pointer ${
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
            <div className="mt-4 p-3.5 bg-[#FBF7F1] border border-[#EDE6DA] rounded-md text-sm leading-relaxed animate-in fade-in">
              <div className="flex items-center gap-1.5 font-bold mb-1.5">
                {gekozen === stelling.antwoord ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#3AB7B0]" />
                    <span className="text-[#3AB7B0]">Correct!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-[#B41E4B]" />
                    <span className="text-[#B41E4B]">Niet helemaal: het juiste antwoord is {stelling.antwoord}.</span>
                  </>
                )}
              </div>
              <p className="text-xs md:text-sm text-[#003340] mb-3">
                {stelling.toelichting}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={handleVolgende}
                  className="inline-flex items-center gap-1.5 bg-[#003340] hover:bg-[#004558] text-white px-4 py-2 rounded-md text-xs font-semibold cursor-pointer transition-colors"
                >
                  <span>{huidig < stellingenMF.length - 1 ? 'Volgende stelling' : 'Afronden'}</span>
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
