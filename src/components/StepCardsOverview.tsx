import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { bouwstenen } from '../data/bouwstenen';

interface StepCardsOverviewProps {
  actieveStap: number | null;
  geopend: Record<number, boolean>;
  opdrachtGedaan: Record<number, boolean>;
  onSelectStap: (id: number) => void;
  onToggleOpdracht?: (id: number) => void;
}

// Bepaal de achtergrondkleur en contrastconfiguratie per stap
const getStepVisuals = (id: number) => {
  switch (id) {
    case 1:
      return {
        bg: '#007AA8', // HR blauw
        isLightCard: false
      };
    case 2:
      return {
        bg: '#D3104C', // HR rood
        isLightCard: false
      };
    case 3:
      return {
        bg: '#003340', // HR zwart-blauw
        isLightCard: false
      };
    case 4:
      return {
        bg: '#FCC200', // HR geel
        isLightCard: true
      };
    case 5:
      return {
        bg: '#3AB7B0', // HR groen
        isLightCard: true
      };
    default:
      return {
        bg: '#003340',
        isLightCard: false
      };
  }
};

export const StepCardsOverview: React.FC<StepCardsOverviewProps> = ({
  actieveStap,
  opdrachtGedaan,
  onSelectStap,
  onToggleOpdracht
}) => {
  const afgerondAantal = Object.values(opdrachtGedaan).filter(Boolean).length;

  return (
    <section id="aanpak-stappen" className="my-6 md:my-8 scroll-mt-6">
      {/* Section Header with Progress indicator */}
      <div className="mb-4 md:mb-5 border-b border-[#EAE4D8] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-[#003340] tracking-tight">
            Kies één van de stappen hieronder om te starten
          </h2>
          <p className="text-xs md:text-sm text-[#5A5A55] max-w-2xl mt-0.5 leading-relaxed">
            Volg de aanbevolen volgorde of pak direct de stap die je vandaag nodig hebt.
          </p>
        </div>

        {/* Voortgang: Waar was ik gebleven */}
        <div className="flex items-center gap-2.5 bg-white px-3 py-1.5 rounded-lg border border-[#E8E4DA] shadow-2xs self-start sm:self-auto shrink-0">
          <div className="text-left sm:text-right">
            <div className="text-[11px] font-bold text-[#003340] leading-tight">
              Voortgang: {afgerondAantal} van {bouwstenen.length} afgerond
            </div>
            <div className="text-[10px] text-[#7A756E] leading-tight mt-0.5">
              {afgerondAantal === 5 ? 'Alle stappen doorlopen 🎉' : afgerondAantal === 0 ? 'Nog niet gestart' : 'Opgeslagen in je browser'}
            </div>
          </div>
          <div className="flex items-center gap-1 pl-1 border-l border-[#EDE6DA]">
            {bouwstenen.map((b) => (
              <span
                key={b.id}
                title={`Stap ${b.id}: ${opdrachtGedaan[b.id] ? 'Afgerond' : 'Nog niet afgerond'}`}
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${
                  opdrachtGedaan[b.id]
                    ? 'bg-[#3AB7B0] text-white'
                    : actieveStap === b.id
                    ? 'bg-[#003340] text-white ring-2 ring-[#003340]/20'
                    : 'bg-[#EDE6DA] text-[#7A756E]'
                }`}
              >
                {opdrachtGedaan[b.id] ? '✓' : b.id}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Volledig gekleurde stappentegels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 items-stretch">
        {bouwstenen.map((b) => {
          const visual = getStepVisuals(b.id);
          const isActief = actieveStap === b.id;
          const isGedaan = !!opdrachtGedaan[b.id];

          return (
            <button
              key={b.id}
              type="button"
              onClick={() => onSelectStap(b.id)}
              aria-pressed={isActief}
              className={`text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden h-full shadow-xs ${
                isActief
                  ? 'ring-3 ring-offset-2 ring-[#003340] -translate-y-1 shadow-md'
                  : 'hover:-translate-y-0.5 hover:shadow-md'
              }`}
              style={{
                backgroundColor: visual.bg
              }}
            >
              <div className="relative z-10 w-full">
                {/* Bovenste rij: Nummer links, 'Nu geopend' en/of 'Afgerond' vinkje rechts */}
                <div className="flex items-center justify-between gap-1 mb-3">
                  <span className="inline-flex items-center justify-center w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full font-black text-xs sm:text-sm shrink-0 shadow-2xs bg-white text-[#003340]">
                    {b.id}
                  </span>

                  {/* Badges container: Nu geopend en/of Afgerond */}
                  <div className="flex items-center gap-1 flex-wrap justify-end">
                    {/* Nu geopend indicator */}
                    {isActief && (
                      <span
                        className={`inline-flex items-center gap-0.5 text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs ${
                          visual.isLightCard
                            ? 'bg-[#003340] text-white'
                            : 'bg-white text-[#003340]'
                        }`}
                      >
                        Nu geopend
                      </span>
                    )}

                    {/* Afgerond vinkje / badge */}
                    {isGedaan ? (
                      <span
                        onClick={(e) => {
                          if (onToggleOpdracht) {
                            e.stopPropagation();
                            onToggleOpdracht(b.id);
                          }
                        }}
                        title={onToggleOpdracht ? 'Klik om afgerond-status te wijzigen' : 'Afgerond'}
                        className={`inline-flex items-center gap-1 text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full cursor-pointer transition-transform hover:scale-105 ${
                          visual.isLightCard
                            ? 'bg-[#003340] text-[#3AB7B0] shadow-2xs'
                            : 'bg-white text-[#003340] shadow-2xs'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#3AB7B0] shrink-0" />
                        <span className={visual.isLightCard ? 'text-white' : 'text-[#003340]'}>Afgerond</span>
                      </span>
                    ) : (
                      /* Als nog niet afgerond en niet actief */
                      !isActief && (
                        <span
                          className={`inline-flex items-center gap-0.5 text-[10px] sm:text-[10.5px] font-semibold px-2 py-0.5 rounded-full transition-all group-hover:underline ${
                            visual.isLightCard
                              ? 'bg-[#003340]/10 text-[#003340] group-hover:bg-[#003340]/20'
                              : 'bg-white/20 text-white group-hover:bg-white/30'
                          }`}
                        >
                          Bekijk stap
                          <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Titel van de stap (groter en duidelijker) */}
                <h3
                  className={`text-[15px] sm:text-[15.5px] font-black leading-snug mb-2 ${
                    visual.isLightCard ? 'text-[#003340]' : 'text-white'
                  }`}
                >
                  {b.titel}
                </h3>

                {/* 2 zinnen toelichting per stap volledig zichtbaar */}
                <p
                  className={`text-[11px] sm:text-[11.5px] leading-relaxed ${
                    visual.isLightCard ? 'text-[#003340]/90 font-medium' : 'text-white/95 font-normal'
                  }`}
                >
                  {b.korteToelichting || b.inleiding}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
