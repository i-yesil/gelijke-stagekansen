import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mic, Headphones, ExternalLink } from 'lucide-react';

export const Intro: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-7 bg-[#F7EFE3] p-5 sm:p-6 md:p-7 rounded-2xl border border-[#EDE6DA] text-[#003340] shadow-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Linkerkolom: Inleidingstekst & Achtergrond (meer ruimte) */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-between space-y-3.5">
          <div>
            <p className="text-[#003340] text-sm md:text-base leading-relaxed font-medium mb-3.5">
              Gelijke stagekansen zijn een vanzelfsprekende norm binnen de hogeschool: elke student verdient dezelfde kans op een passende en veilige stage. Toch is stagediscriminatie een reëel en vaak onderschat probleem. Uit onderzoek blijkt dat het voorkomt bij het zoeken naar een stageplek, tijdens sollicitatiegesprekken én op de werkvloer zelf. Veel signalen blijven onder de radar omdat studenten zelden uit zichzelf melding maken door schaamte, twijfel of angst voor vertraging.
            </p>

            <p className="text-[#003340] text-sm md:text-base leading-relaxed text-[#003340]/90">
              Deze aanpak is er voor iedereen die met studenten werkt: onderwijsmanager, stagecoördinator, docent, studieloopbaancoach of stagebegeleider. Wie de student ook spreekt of begeleidt: jij maakt het cruciale verschil in veiligheid, opvang en rugdekking. Met het onderstaande 5-stappenkader heb je altijd duidelijke houvast in handen.
            </p>

            {expanded && (
              <div className="pt-3 mt-3 border-t border-[#E8E4DA] text-sm md:text-base text-[#003340] space-y-3 leading-relaxed animate-in fade-in">
                <p>
                  Hogeschool Rotterdam pakt dit actief aan. Wij ondertekenden{' '}
                  <a
                    href="https://www.rijksoverheid.nl/actueel/nieuws/2022/07/13/manifest-ondertekend-om-stagediscriminatie-tegen-te-gaan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007AA8] hover:text-[#005B7F] underline inline-flex items-center gap-0.5 font-semibold"
                  >
                    <span>het landelijke Manifest tegen stagediscriminatie</span>
                    <ExternalLink className="w-3.5 h-3.5 inline-block" />
                  </a>{' '}
                  en bouwen, in navolging van{' '}
                  <a
                    href="https://haagseaanpak.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007AA8] hover:text-[#005B7F] underline inline-flex items-center gap-0.5 font-semibold"
                  >
                    <span>de Haagse aanpak</span>
                    <ExternalLink className="w-3.5 h-3.5 inline-block" />
                  </a>
                  , aan een eigen Rotterdamse aanpak.
                </p>
                <p>
                  Het doel is helder: minder onderzoek en méér concrete actie in de onderwijspraktijk. Met deze 5 stappen werken we gezamenlijk aan gelijke stagekansen en sociale veiligheid voor iedere student.
                </p>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-xs md:text-sm font-semibold text-[#D3104C] hover:text-[#B41E4B] inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              {expanded ? (
                <>
                  <span>Minder lezen</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Lees meer over de Rotterdamse aanpak</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Rechterkolom: Podcast & E-learning (smaller en langer/verticaler) */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between gap-3 lg:border-l lg:border-[#E8DFD1] lg:pl-5 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E8DFD1]">
          {/* Podcast ECHO */}
          <a
            href="https://echo-net.nl/stagediscriminatie-onder-de-loep/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-3.5 bg-white/95 hover:bg-white border border-[#EDE6DA] hover:border-[#D3104C] rounded-xl text-[#003340] hover:bg-[#FFF8FA] transition-all shadow-none group flex-1 flex flex-col justify-between"
            title="Beluister de ECHO-podcastserie: Stagediscriminatie onder de loep"
          >
            <div>
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-[#D3104C] bg-[#FDEEF3] px-2 py-0.5 rounded-full border border-[#FAD8E2]">
                  Podcast ECHO
                </span>
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#D3104C] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  Luister
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
              <div className="flex items-start gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#D3104C] to-[#8C002B] text-white flex items-center justify-center shrink-0 shadow-none mt-0.5">
                  <Mic className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xs sm:text-[12.5px] font-bold text-[#003340] leading-snug group-hover:text-[#D3104C] transition-colors">
                  Stagediscriminatie onder de loep
                </h3>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-[#5A5A55] leading-relaxed">
                5-delige audioserie over studentervaringen, meldingsdrempels en praktische handelingsperspectieven.
              </p>
            </div>
          </a>

          {/* E-learning Anne Frank */}
          <a
            href="https://www.annefrank.org/nl/elearning/module/begeleider-van-stagiairs/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-3.5 bg-white/95 hover:bg-white border border-[#EDE6DA] hover:border-[#217772] rounded-xl text-[#003340] hover:bg-[#F2FAF9] transition-all shadow-none group flex-1 flex flex-col justify-between"
            title="Start de gratis e-learning van de Anne Frank Stichting"
          >
            <div>
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-[#217772] bg-[#EDFAF9] px-2 py-0.5 rounded-full border border-[#C5EDE9]">
                  E-learning Anne Frank
                </span>
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#217772] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  Starten
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
              <div className="flex items-start gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#217772] to-[#003340] text-white flex items-center justify-center shrink-0 shadow-none mt-0.5">
                  <Headphones className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xs sm:text-[12.5px] font-bold text-[#003340] leading-snug group-hover:text-[#217772] transition-colors">
                  Als begeleider van stagiairs
                </h3>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-[#5A5A55] leading-relaxed">
                Interactieve online module over vooroordelen, discriminatie op de werkvloer en gespreksvoering.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
