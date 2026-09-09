import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ExternalLink,
  Download,
  Lightbulb,
  Play,
  ArrowUp,
  Mail,
  Save,
  CheckCircle2,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { Bouwsteen, LinkItem } from '../types';
import { bouwstenen, stepThemes } from '../data/bouwstenen';
import { OpdrachtMytheFeit } from './assignments/OpdrachtMytheFeit';
import { OpdrachtSignaleerAudio } from './assignments/OpdrachtSignaleerAudio';
import { OpdrachtGespreksvoering } from './assignments/OpdrachtGespreksvoering';
import { OpdrachtCasusKeuzes } from './assignments/OpdrachtCasusKeuzes';
import { OpdrachtNazorgScenario } from './assignments/OpdrachtNazorgScenario';

interface StepPanelProps {
  stap: Bouwsteen;
  opdrachtGedaan: boolean;
  onCompleteOpdracht: (id: number) => void;
  onResetOpdracht: (id: number) => void;
  onToggleOpdracht?: (id: number) => void;
  onSelectStap: (id: number) => void;
  onNaarOverzicht: () => void;
  reflectieTekst: string;
  onSaveReflectie: (tekst: string) => void;
}

export const StepPanel: React.FC<StepPanelProps> = ({
  stap,
  opdrachtGedaan,
  onCompleteOpdracht,
  onResetOpdracht,
  onToggleOpdracht,
  onSelectStap,
  onNaarOverzicht,
  reflectieTekst,
  onSaveReflectie
}) => {
  const [openInlines, setOpenInlines] = useState<Record<string, boolean>>({});
  const [lokaleReflectie, setLokaleReflectie] = useState(reflectieTekst);
  const [reflectieOpgeslagen, setReflectieOpgeslagen] = useState(false);
  const [showProfessionalisering, setShowProfessionalisering] = useState(false);

  const theme = stepThemes[stap.id];

  const toggleInline = (id: string) => {
    setOpenInlines((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReflectieOpslaan = () => {
    onSaveReflectie(lokaleReflectie);
    setReflectieOpgeslagen(true);
    setTimeout(() => setReflectieOpgeslagen(false), 2500);
  };

  const renderLink = (link: LinkItem | undefined, idKey: string) => {
    if (!link) return null;
    const isInlineOpen = !!openInlines[idKey];

    if (link.inline) {
      return (
        <div className="mt-2 text-xs md:text-sm">
          <button
            type="button"
            onClick={() => toggleInline(idKey)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs md:text-sm font-semibold cursor-pointer transition-all border shadow-2xs"
            style={{
              backgroundColor: isInlineOpen ? theme.badgeBg : '#ffffff',
              color: theme.labelColor,
              borderColor: isInlineOpen ? theme.primary : theme.border
            }}
          >
            {isInlineOpen ? (
              <ChevronUp className="w-3.5 h-3.5 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" />
            )}
            <span>{link.label}</span>
          </button>

          {isInlineOpen && (
            <div
              className="mt-2.5 p-4 rounded-lg border border-l-4 animate-in fade-in"
              style={{
                backgroundColor: theme.lightBg,
                borderLeftColor: theme.primary,
                borderColor: theme.border
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: link.inline }} />
            </div>
          )}
        </div>
      );
    }

    if (link.type === 'video' && link.videoId) {
      return (
        <div className="mt-2 text-xs md:text-sm">
          <button
            type="button"
            onClick={() => toggleInline(idKey)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs md:text-sm font-semibold cursor-pointer transition-all border shadow-2xs"
            style={{
              backgroundColor: isInlineOpen ? theme.badgeBg : '#ffffff',
              color: theme.labelColor,
              borderColor: isInlineOpen ? theme.primary : theme.border
            }}
          >
            <Play className="w-3.5 h-3.5 fill-current flex-shrink-0" />
            <span>{link.label}</span>
          </button>

          {isInlineOpen && (
            <div
              className="mt-2.5 p-3.5 rounded-lg border max-w-lg"
              style={{
                backgroundColor: theme.lightBg,
                borderColor: theme.border
              }}
            >
              <div className="relative pb-[56.25%] h-0 rounded-md overflow-hidden bg-black shadow-xs">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${link.videoId}`}
                  title={link.label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-[#7A756E] mt-2">
                Werkt de video niet?{' '}
                <a
                  href={`https://www.youtube.com/watch?v=${link.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A0DB] underline font-medium"
                >
                  Bekijk de video op YouTube
                </a>
              </p>
            </div>
          )}
        </div>
      );
    }

    if (link.type === 'komtnog') {
      return (
        <div className="mt-1.5 text-xs text-[#9A9A95] italic">
          <span>{link.label}</span>
        </div>
      );
    }

    if (link.url && link.url !== '#') {
      return (
        <div className="mt-1.5">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs md:text-sm font-medium text-[#00A0DB] hover:text-[#007BA8] hover:underline"
          >
            {link.type === 'download' ? (
              <Download className="w-3.5 h-3.5 flex-shrink-0" />
            ) : (
              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
            )}
            <span>{link.label}</span>
          </a>
        </div>
      );
    }

    return null;
  };

  const vorigeStap = stap.id > 1 ? bouwstenen.find((x) => x.id === stap.id - 1) : null;
  const volgendeStap = stap.id < bouwstenen.length ? bouwstenen.find((x) => x.id === stap.id + 1) : null;

  return (
    <div
      className="bg-white rounded-xl shadow-xs border mb-8 overflow-hidden animate-in fade-in duration-300"
      style={{ borderColor: theme.border }}
    >
      {/* Themed Top Header Banner - Compacter (Optie 4) met directe sluitknop */}
      <div
        className="px-4 py-3 sm:px-6 sm:py-3.5 border-b flex items-center justify-between gap-3"
        style={{
          background: `linear-gradient(135deg, ${theme.lightBg} 0%, #ffffff 100%)`,
          borderBottomColor: theme.border
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black text-sm sm:text-base flex-shrink-0 shadow-2xs border-2"
            style={{
              backgroundColor: theme.primary,
              borderColor: theme.border,
              color: stap.kleur === '#FCC200' ? '#003340' : '#ffffff'
            }}
          >
            {stap.id}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span
                className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                style={{
                  backgroundColor: theme.badgeBg,
                  color: theme.badgeText,
                  borderColor: theme.border
                }}
              >
                Stap {stap.id} van {bouwstenen.length}
              </span>
              <button
                type="button"
                onClick={() => onToggleOpdracht && onToggleOpdracht(stap.id)}
                className={`text-[9.5px] sm:text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 cursor-pointer transition-all border ${
                  opdrachtGedaan
                    ? 'bg-[#EDFAF9] text-[#217772] border-[#3AB7B0]/40 hover:bg-[#DCF5F3]'
                    : 'bg-white/60 text-[#7A756E] border-[#EDE6DA] hover:bg-white hover:text-[#003340]'
                }`}
                title="Klik om status 'Afgerond' handmatig aan of uit te vinken"
              >
                <CheckCircle2 className={`w-3 h-3 ${opdrachtGedaan ? 'text-[#3AB7B0]' : 'text-[#A0A09A]'}`} />
                <span>{opdrachtGedaan ? '✓ Afgerond' : 'Markeer als afgerond'}</span>
              </button>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-black text-[#003340] leading-snug">
              {stap.titel}
            </h2>
          </div>
        </div>

        {/* Directe sluitknop bovenaan in de header */}
        <button
          onClick={onNaarOverzicht}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D3104C] hover:bg-[#FDF3F6] border border-[#F0D6DE] px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors shrink-0"
          title="Sluit stap en ga terug naar het overzicht"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Naar overzicht</span>
          <span className="sm:hidden">Sluit</span>
        </button>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        {/* Tweekoloms grid op grotere schermen (Optie 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Linkerkolom: Inleiding & Verwachtingen (ca. 58% breedte) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4">
            {/* Themed Introduction Container - compacter */}
            <div
              className="p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm leading-relaxed"
              style={{
                backgroundColor: theme.lightBg,
                color: theme.labelColor
              }}
            >
              <p className="leading-relaxed font-medium">
                {stap.inleiding}
              </p>
            </div>

            {/* Expectations Section Label */}
            <div
              className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
              style={{ color: theme.labelColor }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: theme.primary }}
              />
              <span>Wat wordt er van jou als begeleider verwacht?</span>
            </div>

            {/* Expectations List */}
            <ul className="divide-y divide-[#F0EBE3]">
              {stap.verwachting.map((item, idx) => (
                <li key={idx} className="py-2.5 text-xs sm:text-sm leading-relaxed text-[#003340]">
                  <div dangerouslySetInnerHTML={{ __html: item.tekst }} />
                  {renderLink(item.link, `link-${stap.id}-${idx}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Rechterkolom: Interactieve oefening & Meer weten (ca. 42% breedte) */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-4 lg:sticky lg:top-4">
            {/* Embedded Interactive Assignment */}
            <div>
              {stap.id === 1 && (
                <OpdrachtMytheFeit
                  onComplete={() => onCompleteOpdracht(1)}
                  onReset={() => onResetOpdracht(1)}
                  isVoltooid={opdrachtGedaan}
                />
              )}
              {stap.id === 2 && (
                <OpdrachtSignaleerAudio
                  onComplete={() => onCompleteOpdracht(2)}
                  onReset={() => onResetOpdracht(2)}
                  isVoltooid={opdrachtGedaan}
                />
              )}
              {stap.id === 3 && (
                <OpdrachtGespreksvoering
                  onComplete={() => onCompleteOpdracht(3)}
                  onReset={() => onResetOpdracht(3)}
                  isVoltooid={opdrachtGedaan}
                />
              )}
              {stap.id === 4 && (
                <OpdrachtCasusKeuzes
                  onComplete={() => onCompleteOpdracht(4)}
                  onReset={() => onResetOpdracht(4)}
                  isVoltooid={opdrachtGedaan}
                />
              )}
              {stap.id === 5 && (
                <OpdrachtNazorgScenario
                  onComplete={() => onCompleteOpdracht(5)}
                  onReset={() => onResetOpdracht(5)}
                  isVoltooid={opdrachtGedaan}
                />
              )}
            </div>

            {/* "Meer weten / Verdiep je verder" rechts onder de oefening */}
            {stap.uitklaps && stap.uitklaps.length > 0 && (
              <div className="pt-3 border-t border-[#EDE6DA]">
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#7A756E] mb-2">
                  {stap.uitklaps.some((u) => u.type === 'academie') ? 'Verdiep je verder' : 'Meer weten'}
                </div>
                <div className="space-y-1.5">
                  {stap.uitklaps.map((u, uIdx) => (
                    <a
                      key={uIdx}
                      href={u.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 bg-[#FBF7F1] hover:bg-[#F7EFE3] border border-[#E8E4DA] rounded-lg text-xs text-[#003340] transition-all hover:border-[var(--hover-border)]"
                      style={{ '--hover-border': theme.primary } as React.CSSProperties}
                    >
                      <div className="text-[#00A0DB] shrink-0">
                        {u.type === 'academie' ? (
                          <BookOpen className="w-3.5 h-3.5" />
                        ) : u.type === 'tip' ? (
                          <Lightbulb className="w-3.5 h-3.5 text-[#D3104C]" />
                        ) : (
                          <ExternalLink className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold">{u.titel}</span>
                        {u.inhoud && (
                          <span className="text-[11px] text-[#5A5A55] block truncate mt-0.5">
                            {u.inhoud.replace(/<[^>]+>/g, '')}
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-[#7A756E] shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Step 5 Closing / Reflection Section (over de volle breedte onderaan stap 5) */}
        {stap.id === 5 && (
          <div className="mt-6 pt-5 border-t-2 border-[#D3104C] space-y-4">
            <div className="bg-[#003340] text-white p-5 md:p-6 rounded-xl shadow-md space-y-4 border border-[#004D60]">
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#FCC200] mb-1.5">
                  Elke student telt.
                </h3>
                <p className="text-xs md:text-sm text-[#C8D8DC] leading-relaxed">
                  Stagediscriminatie is geen incidentele uitzondering: het is een structureel vraagstuk dat zich afspeelt op de plekken waar onze studenten leren en werken. Studenten melden zelden uit eigen beweging. Jij bent vaak de eerste die het signaleert, hoort en een veilige haven biedt.
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#004D60]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FCC200] mb-1.5">
                  Reflectievraag
                </div>
                <p className="text-xs sm:text-sm text-[#F7EFE3] mb-1.5 font-semibold leading-snug">
                  Welk onderdeel van deze aanpak vraagt voor jou nog de meeste aandacht? Welke concrete eerste stap ga je zetten in je eigen begeleiding of richting je opleiding?
                </p>
                <p className="text-[10.5px] sm:text-[11px] text-[#A2B7BD] mb-2.5 leading-relaxed">
                  Je antwoorden worden nergens naar een server verstuurd en zijn voor niemand anders zichtbaar. Dit veld is puur bedoeld voor het noteren en ordenen van je eigen gedachten (lokaal bewaard in je eigen browser). Wil je je aantekeningen meenemen? Klik hieronder op <em>'Mail naar jezelf'</em> om ze direct in je eigen mailbox te ontvangen.
                </p>
                <textarea
                  value={lokaleReflectie}
                  onChange={(e) => setLokaleReflectie(e.target.value)}
                  placeholder="Schrijf hier je gedachten, voornemens of actiepunten op..."
                  className="w-full min-h-[85px] p-2.5 border border-[#004D60] bg-white rounded-md text-xs sm:text-sm text-[#003340] resize-y focus:outline-none focus:ring-2 focus:ring-[#3AB7B0]"
                />
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleReflectieOpslaan}
                    className="inline-flex items-center gap-1.5 bg-[#3AB7B0] hover:bg-[#2F9E98] text-white px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors shadow-xs"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Opslaan in browser</span>
                  </button>
                  <a
                    href={`mailto:?subject=${encodeURIComponent('Mijn reflectie & actiepunten stagediscriminatie')}&body=${encodeURIComponent(lokaleReflectie || 'Nog geen notities ingevuld.')}`}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-[#F7EFE3] border border-white/20 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#3AB7B0]" />
                    <span>Mail naar jezelf</span>
                  </a>
                  <button
                    onClick={() => setShowProfessionalisering(!showProfessionalisering)}
                    className="inline-flex items-center gap-1.5 bg-[#FCC200] hover:bg-[#E5B000] text-[#003340] px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer transition-colors shadow-xs"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-[#003340]" />
                    <span>Aanmelden professionalisering</span>
                    {showProfessionalisering ? <ChevronUp className="w-3.5 h-3.5 ml-0.5" /> : <ChevronDown className="w-3.5 h-3.5 ml-0.5" />}
                  </button>
                  {reflectieOpgeslagen && (
                    <span className="text-xs text-[#3AB7B0] font-medium flex items-center gap-1 ml-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Lokaal bewaard
                    </span>
                  )}
                </div>

                {showProfessionalisering && (
                  <div className="mt-3 p-3.5 bg-white text-[#003340] rounded-lg border border-white/20 shadow-md space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#EDE6DA] pb-1.5">
                      <span className="text-xs font-bold text-[#003340] uppercase tracking-wider flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-[#3AB7B0]" />
                        Professionalisering
                      </span>
                      <span className="text-[11px] text-[#7A756E]">Kies een workshop op HINT om direct aan te melden</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <a
                        href="https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/inclusieve-communicatie/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-md border border-[#EDE6DA] hover:border-[#3AB7B0] hover:bg-[#F9FCFC] transition-colors flex flex-col justify-between group"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#003340] group-hover:text-[#00A0DB] transition-colors flex items-center justify-between">
                            <span>Inclusieve communicatie</span>
                            <ExternalLink className="w-3 h-3 text-[#7A756E] group-hover:text-[#00A0DB]" />
                          </div>
                          <p className="text-[10.5px] text-[#5A5A55] mt-1 leading-snug">
                            Workshop over taal, aannames en inclusieve gespreksvoering.
                          </p>
                        </div>
                        <span className="text-[10px] font-semibold text-[#3AB7B0] mt-2 inline-block group-hover:underline">
                          Aanmelden via HINT →
                        </span>
                      </a>
                      <a
                        href="https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/meerwaarde-uit-diversiteit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-md border border-[#EDE6DA] hover:border-[#3AB7B0] hover:bg-[#F9FCFC] transition-colors flex flex-col justify-between group"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#003340] group-hover:text-[#00A0DB] transition-colors flex items-center justify-between">
                            <span>Meerwaarde uit diversiteit</span>
                            <ExternalLink className="w-3 h-3 text-[#7A756E] group-hover:text-[#00A0DB]" />
                          </div>
                          <p className="text-[10.5px] text-[#5A5A55] mt-1 leading-snug">
                            Workshop over het benutten van diversiteit en creëren van een veilige leercultuur.
                          </p>
                        </div>
                        <span className="text-[10px] font-semibold text-[#3AB7B0] mt-2 inline-block group-hover:underline">
                          Aanmelden via HINT →
                        </span>
                      </a>
                      <a
                        href="https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/ik-als-inclusief-leider/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-md border border-[#EDE6DA] hover:border-[#3AB7B0] hover:bg-[#F9FCFC] transition-colors flex flex-col justify-between group"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#003340] group-hover:text-[#00A0DB] transition-colors flex items-center justify-between">
                            <span>Ik als inclusief leider</span>
                            <ExternalLink className="w-3 h-3 text-[#7A756E] group-hover:text-[#00A0DB]" />
                          </div>
                          <p className="text-[10.5px] text-[#5A5A55] mt-1 leading-snug">
                            Onderzoek je eigen leiderschap, voorbeeldrol en inclusieve vaardigheden.
                          </p>
                        </div>
                        <span className="text-[10px] font-semibold text-[#3AB7B0] mt-2 inline-block group-hover:underline">
                          Aanmelden via HINT →
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons: Vorige | Overzicht | Volgende (compacter) */}
        <div className="mt-5 pt-3 border-t border-[#EDE6DA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="flex-1">
            {vorigeStap && (
              <button
                onClick={() => onSelectStap(vorigeStap.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#F7EFE3] hover:bg-[#EFE6D6] text-[#003340] px-3.5 py-1.5 rounded-md text-xs md:text-sm font-medium cursor-pointer transition-colors border border-[#E8E4DA]"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Vorige: {vorigeStap.titel}</span>
              </button>
            )}
          </div>

          <button
            onClick={onNaarOverzicht}
            className="inline-flex items-center justify-center gap-1.5 text-[#D3104C] hover:bg-[#FDF3F6] border border-[#F0D6DE] px-3 py-1.5 rounded-md text-xs md:text-sm font-medium cursor-pointer transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Naar overzicht</span>
          </button>

          <div className="flex-1 flex justify-end">
            {volgendeStap && (
              <button
                onClick={() => onSelectStap(volgendeStap.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs md:text-sm font-semibold cursor-pointer transition-all shadow-2xs hover:opacity-90"
                style={{
                  backgroundColor: stepThemes[volgendeStap.id].primary,
                  color: volgendeStap.kleur === '#FCC200' ? '#003340' : '#ffffff'
                }}
              >
                <span>Volgende: {volgendeStap.titel}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

