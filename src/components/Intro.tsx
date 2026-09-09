import React, { useState } from 'react';
import { ExternalLink, Mic, Headphones, ChevronDown, ChevronUp } from 'lucide-react';

export const Intro: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
      {/* Linker kolom: Inleiding (ca. 67% breedte op desktop) */}
      <div className="lg:col-span-8 flex flex-col justify-start bg-[#F7EFE3] p-5 md:p-6 rounded-xl border border-[#EDE6DA] text-[#003340]">
        <div>
          <p className="mb-3 text-[#003340] text-sm md:text-[15px] leading-relaxed">
            Gelijke stagekansen zijn een vanzelfsprekende norm binnen de hogeschool: elke student verdient dezelfde kans op een passende stage. Toch is stagediscriminatie een reëel en vaak onderschat probleem. Uit{' '}
            <a
              href="https://www.inholland.nl/onderzoek/publicaties/stagediscriminatie-in-het-hbo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A0DB] hover:text-[#007BA8] underline inline-flex items-center gap-0.5 font-medium"
            >
              <span>onderzoek</span>
              <ExternalLink className="w-3 h-3 inline-block ml-0.5" />
            </a>{' '}
            blijkt dat het voorkomt bij het zoeken van een stageplek, tijdens het sollicitatiegesprek én tijdens de stage zelf. Daarnaast laat het rapport{' '}
            <a
              href="https://open.overheid.nl/documenten/5d364320-c785-4a46-87b5-2652bd586f81/file"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A0DB] hover:text-[#007BA8] underline inline-flex items-center gap-0.5 font-medium"
            >
              <span>Stagediscriminatie onder de radar (2025)</span>
              <ExternalLink className="w-3 h-3 inline-block ml-0.5" />
            </a>{' '}
            zien dat veel signalen onopgemerkt blijven.
          </p>

          <p className="text-[#003340] text-sm md:text-[15px] leading-relaxed">
            Deze aanpak is voor iedereen die met studenten werkt: studentcoach, stagecoördinator, stagebegeleider, docent of onderwijsmanager. Als begeleider ben jij vaak het eerste en meest vertrouwde aanspreekpunt voor de student, en daarmee degene die het verschil maakt.
          </p>

          {expanded && (
            <div className="pt-3 mt-3 border-t border-[#E8E4DA] text-sm md:text-[15px] text-[#003340] space-y-2 leading-relaxed animate-in fade-in">
              <p>
                Hogeschool Rotterdam pakt dit actief aan. Wij ondertekenden{' '}
                <a
                  href="https://www.rijksoverheid.nl/actueel/nieuws/2022/07/13/manifest-ondertekend-om-stagediscriminatie-tegen-te-gaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A0DB] hover:text-[#007BA8] underline inline-flex items-center gap-0.5 font-medium"
                >
                  <span>het Manifest tegen stagediscriminatie</span>
                  <ExternalLink className="w-3 h-3 inline-block" />
                </a>{' '}
                en bouwen, in navolging van{' '}
                <a
                  href="https://haagseaanpak.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A0DB] hover:text-[#007BA8] underline inline-flex items-center gap-0.5 font-medium"
                >
                  <span>de Haagse aanpak</span>
                  <ExternalLink className="w-3 h-3 inline-block" />
                </a>
                , aan een eigen Rotterdamse aanpak.
              </p>
              <p>
                In de aflevering{' '}
                <a
                  href="https://www.youtube.com/watch?v=_IMXbKP1qt8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A0DB] hover:text-[#007BA8] underline inline-flex items-center gap-0.5 font-medium"
                >
                  <span>WAAROM?! bestaat stagediscriminatie nog steeds?</span>
                  <ExternalLink className="w-3 h-3 inline-block" />
                </a>{' '}
                vat RAC docent Mourad el Moussati de urgentie samen: minder onderzoek, méér actie. Met deze 5 stappen werken we gezamenlijk aan gelijke stagekansen.
              </p>
            </div>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 self-start text-xs font-semibold text-[#D3104C] hover:text-[#B41E4B] inline-flex items-center gap-1 cursor-pointer transition-colors"
        >
          {expanded ? (
            <>
              <span>Minder lezen</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              <span>Lees meer over de Rotterdamse aanpak</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      {/* Rechter kolom: Twee compacte externe bron-tegels onder elkaar (ca. 33% breedte) */}
      <div className="lg:col-span-4 flex flex-col gap-3 justify-start">
        {/* Tegel 1: ECHO-podcast */}
        <a
          href="https://echo-net.nl/stagediscriminatie-onder-de-loep/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-white border border-[#EDE6DA] hover:border-[#D3104C] rounded-xl text-[#003340] hover:bg-[#FFF8FA] transition-all shadow-xs group"
          title="Open de ECHO-podcastserie"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D3104C] bg-[#FDEEF3] px-2 py-0.5 rounded">
              Podcast &middot; ECHO
            </span>
            <span className="text-[11px] font-bold text-[#D3104C] group-hover:underline flex items-center gap-0.5">
              Beluister &rarr;
            </span>
          </div>

          <div className="flex items-start gap-2.5 mb-1.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D3104C] to-[#8C002B] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Mic className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="text-xs md:text-[13px] font-bold text-[#003340] leading-snug group-hover:text-[#D3104C] transition-colors">
              Stagediscriminatie onder de loep
            </h4>
          </div>

          <p className="text-[11px] md:text-xs text-[#5A5A55] leading-relaxed">
            5 afleveringen met ervaringen van studenten en praktische handvatten voor begeleiders.
          </p>
        </a>

        {/* Tegel 2: Anne Frank Stichting */}
        <a
          href="https://www.annefrank.org/nl/elearning/module/begeleider-van-stagiairs/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-white border border-[#EDE6DA] hover:border-[#217772] rounded-xl text-[#003340] hover:bg-[#F2FAF9] transition-all shadow-xs group"
          title="Open de Anne Frank Stichting e-learning"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#217772] bg-[#EDFAF9] px-2 py-0.5 rounded">
              E-learning &middot; Anne Frank
            </span>
            <span className="text-[11px] font-bold text-[#217772] group-hover:underline flex items-center gap-0.5">
              Bekijk module &rarr;
            </span>
          </div>

          <div className="flex items-start gap-2.5 mb-1.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#217772] to-[#003340] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Headphones className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="text-xs md:text-[13px] font-bold text-[#003340] leading-snug group-hover:text-[#217772] transition-colors">
              Als begeleider van stagiairs
            </h4>
          </div>

          <p className="text-[11px] md:text-xs text-[#5A5A55] leading-relaxed">
            Audiofragmenten en concrete handelingsperspectieven voor de praktijk.
          </p>
        </a>
      </div>
    </div>
  );
};
