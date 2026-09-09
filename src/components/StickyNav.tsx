import React from 'react';
import { Check } from 'lucide-react';
import { bouwstenen, stepThemes } from '../data/bouwstenen';

interface StickyNavProps {
  actieveStap: number | null;
  geopend: Record<number, boolean>;
  opdrachtGedaan: Record<number, boolean>;
  onSelectStap: (id: number) => void;
}

export const StickyNav: React.FC<StickyNavProps> = ({
  actieveStap,
  geopend,
  opdrachtGedaan,
  onSelectStap
}) => {
  return (
    <div className="sticky top-0 z-40 bg-[#FBF7F1]/95 backdrop-blur-md border-b border-[#EDE6DA] shadow-xs py-3 px-2 md:px-4 mb-6">
      <div className="max-w-4xl mx-auto">
        {!actieveStap && (
          <p className="text-center text-xs text-[#7A756E] italic mb-2">
            Klik op een van de 5 stappen om de inhoud te openen
          </p>
        )}

        <div className="flex items-start justify-between relative">
          {bouwstenen.map((b, i) => {
            const isActief = actieveStap === b.id;
            const isGedaan = !!opdrachtGedaan[b.id];
            const isGeopend = !!geopend[b.id];
            const isLast = i === bouwstenen.length - 1;
            const theme = stepThemes[b.id];

            return (
              <div
                key={b.id}
                className="flex-1 flex flex-col items-center relative group"
              >
                {/* Connecting horizontal line */}
                {!isLast && (
                  <div
                    className={`absolute top-4 md:top-6 left-1/2 w-full h-[2.5px] z-0 transition-colors duration-300 ${
                      isGedaan || isGeopend ? 'bg-[#3AB7B0]' : 'bg-[#E0D8CE]'
                    }`}
                  />
                )}

                {/* Step Circle Button */}
                <button
                  onClick={() => onSelectStap(b.id)}
                  className="relative z-10 flex flex-col items-center cursor-pointer focus:outline-none transition-transform hover:scale-105 active:scale-95"
                >
                  <div
                    className={`w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all duration-200 border-2.5 shadow-xs`}
                    style={{
                      backgroundColor: isGedaan || isGeopend ? theme.primary : isActief ? '#ffffff' : theme.lightBg,
                      borderColor: isActief ? theme.primary : (isGedaan || isGeopend) ? theme.primary : theme.border,
                      color: (isGedaan || isGeopend)
                        ? (b.kleur === '#FCC200' ? '#003340' : '#ffffff')
                        : theme.labelColor,
                      boxShadow: isActief ? `0 0 0 4px ${theme.subtle}` : undefined
                    }}
                  >
                    {isGedaan ? (
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <span>{b.id}</span>
                    )}
                  </div>

                  {/* Title Label */}
                  <span
                    className={`text-[10.5px] md:text-xs text-center mt-1.5 leading-tight max-w-[85px] md:max-w-[120px] transition-colors line-clamp-2 ${
                      isActief
                        ? 'font-bold'
                        : isGedaan || isGeopend
                        ? 'font-semibold'
                        : 'font-medium'
                    }`}
                    style={{
                      color: isActief || isGedaan || isGeopend ? theme.labelColor : '#5A5A55'
                    }}
                  >
                    {b.titel}
                  </span>

                  {/* Status label */}
                  <span
                    className="text-[9px] md:text-[10px] mt-0.5 hidden sm:block font-medium"
                    style={{
                      color: isGedaan ? '#217772' : isGeopend ? theme.labelColor : 'transparent'
                    }}
                  >
                    {isGedaan ? 'Gedaan ✓' : isGeopend ? 'Geopend' : '•'}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

