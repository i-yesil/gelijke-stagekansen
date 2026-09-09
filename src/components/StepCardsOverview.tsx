import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { bouwstenen, stepThemes } from '../data/bouwstenen';

interface StepCardsOverviewProps {
  actieveStap: number | null;
  geopend: Record<number, boolean>;
  opdrachtGedaan: Record<number, boolean>;
  onSelectStap: (id: number) => void;
}

export const StepCardsOverview: React.FC<StepCardsOverviewProps> = ({
  actieveStap,
  geopend,
  opdrachtGedaan,
  onSelectStap
}) => {
  return (
    <section id="aanpak-stappen" className="my-6 md:my-8 scroll-mt-6">
      {/* Section Header / Uitnodiging direct na de inleiding */}
      <div className="mb-5 md:mb-6 border-b border-[#EAE4D8] pb-3.5">
        <h2 className="text-xl md:text-2xl font-black text-[#003340] tracking-tight">
          Kies een van de bouwstenen hieronder om te starten
        </h2>
        <p className="text-xs md:text-sm text-[#5A5A55] max-w-2xl mt-1 leading-relaxed">
          Ontdek hoe je als onderwijsprofessional stagediscriminatie voorkomt, herkent, bespreekt en opvolgt binnen Hogeschool Rotterdam.
        </p>
      </div>

      {/* Modular Dashboard Tiles Grid (Voorstel 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 md:gap-4 items-stretch">
        {bouwstenen.map((b) => {
          const theme = stepThemes[b.id];
          const isActief = actieveStap === b.id;
          const isGedaan = !!opdrachtGedaan[b.id];
          const isGeopend = !!geopend[b.id];

          return (
            <button
              key={b.id}
              type="button"
              onClick={() => onSelectStap(b.id)}
              aria-pressed={isActief}
              className={`text-left p-4 md:p-4.5 rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden h-full ${
                isActief
                  ? 'bg-white ring-2 ring-offset-2 -translate-y-0.5'
                  : 'bg-white hover:bg-[#FAF8F5] hover:-translate-y-0.5'
              }`}
              style={{
                borderColor: theme.primary,
                borderWidth: '2px',
                borderStyle: 'solid',
                ['--tw-ring-color' as string]: theme.primary
              }}
            >
              {/* Subtle light background when active */}
              {isActief && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{ backgroundColor: theme.lightBg }}
                />
              )}

              <div className="relative z-10">
                {/* Top row: Step Number Circle & Status Pill */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-xs"
                    style={{
                      backgroundColor: theme.primary,
                      color: b.kleur === '#FCC200' ? '#003340' : '#ffffff'
                    }}
                  >
                    {b.id}
                  </span>

                  <div>
                    {isGedaan ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#217772] bg-[#EDFAF9] px-2 py-0.5 rounded-full border border-[#3AB7B0]/40">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        Gedaan
                      </span>
                    ) : isGeopend ? (
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                        style={{
                          backgroundColor: theme.badgeBg,
                          color: theme.badgeText,
                          borderColor: theme.border
                        }}
                      >
                        Geopend
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-[#7C776E] bg-[#F4EFE6] px-2 py-0.5 rounded-full">
                        Stap {b.id}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold text-[#003340] group-hover:text-[#00222B] transition-colors leading-snug mb-2">
                  {b.titel}
                </h3>

                {/* Concise toelichting */}
                <p className="text-[12px] md:text-[12.5px] text-[#4A4740] leading-relaxed">
                  {b.korteToelichting || b.inleiding}
                </p>
              </div>

              {/* Footer action trigger */}
              <div
                className="relative z-10 mt-4 pt-2.5 border-t border-[#F0EBE3] flex items-center justify-between text-xs font-semibold transition-colors"
                style={{ color: theme.labelColor }}
              >
                <span className="group-hover:underline">
                  {isActief ? 'Nu geopend' : 'Bekijk stap'}
                </span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
