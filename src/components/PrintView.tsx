import React from 'react';
import { ExternalLink, Mic, Headphones, Mail } from 'lucide-react';
import { bouwstenen, stepThemes } from '../data/bouwstenen';

interface PrintViewProps {
  forceDisplay?: boolean;
}

export const PrintView: React.FC<PrintViewProps> = ({ forceDisplay = false }) => {
  const containerClass = forceDisplay
    ? "space-y-8 text-[#003340] font-['Poppins',sans-serif]"
    : "print-only hidden print:block font-['Poppins',sans-serif] text-[#003340]";

  const pageClass = forceDisplay
    ? "bg-white px-10 py-9 md:px-12 md:py-10 rounded-sm shadow-2xl border border-neutral-300 min-h-[260mm] flex flex-col justify-between text-[8.5pt] leading-[1.4] font-['Poppins',sans-serif] mb-6"
    : "print-page font-['Poppins',sans-serif] text-[8.5pt] leading-[1.4]";

  return (
    <div className={containerClass}>
      {/* =========================================================================
          PAGINA 1: INLEIDING, ACHTERGROND & ROTTERDAMSE AANPAK
          ========================================================================= */}
      <section className={pageClass}>
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-2.5 border-b-2 border-[#D3104C] mb-3.5">
            <div className="flex items-center gap-2.5">
              <img src="/hr-logo.png" alt="HR Logo" className="h-8 w-auto object-contain" />
              <div>
                <span className="text-[12pt] font-black text-[#003340] tracking-tight block leading-none">
                  HOGESCHOOL ROTTERDAM
                </span>
                <span className="text-[8pt] text-[#5A5A55] block font-medium mt-0.5">
                  Themagroep Studentgerichte Omgeving (TG-SO) 2026
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[7.5pt] uppercase tracking-wider font-bold text-[#003340] bg-[#F7EFE3] px-2.5 py-1 rounded border border-[#EDE6DA]">
                Aanpak Stagediscriminatie
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="mb-3">
            <h1 className="text-[16pt] font-black text-[#003340] leading-tight mb-0.5">
              Aanpak gelijke stagekansen
            </h1>
            <p className="text-[9.5pt] font-semibold text-[#D3104C]">
              Samen tegen stagediscriminatie: voorkomen, signaleren, bespreken en opvolgen
            </p>
          </div>

          {/* Inleiding text conform webapplicatie */}
          <div className="bg-[#F7EFE3] p-3 rounded-lg border border-[#EDE6DA] mb-3 text-[8pt] leading-relaxed text-[#003340] space-y-1.5">
            <p>
              Gelijke stagekansen zijn een vanzelfsprekende norm binnen de hogeschool: elke student verdient dezelfde kans op een passende en veilige stage. Toch is stagediscriminatie een reëel en vaak onderschat probleem. Uit onderzoek blijkt dat het voorkomt bij het zoeken naar een stageplek, tijdens sollicitatiegesprekken én op de werkvloer zelf. Veel signalen blijven onder de radar omdat studenten zelden uit zichzelf melding maken door schaamte, twijfel of angst voor vertraging.
            </p>
            <p>
              Deze aanpak is er voor iedereen die met studenten werkt: onderwijsmanager, stagecoördinator, docent, studieloopbaancoach of stagebegeleider. Wie de student ook spreekt of begeleidt: jij maakt het cruciale verschil in veiligheid, opvang en rugdekking. Met het onderstaande 5-stappenkader heb je altijd duidelijke houvast in handen.
            </p>
            <div className="pt-1.5 border-t border-[#EDE6DA] text-[#003340]/90">
              <p>
                <strong>De Rotterdamse aanpak:</strong> Hogeschool Rotterdam ondertekende het landelijke <a href="https://www.rijksoverheid.nl/actueel/nieuws/2022/07/13/manifest-ondertekend-om-stagediscriminatie-tegen-te-gaan" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline font-semibold">Manifest tegen stagediscriminatie</a> en bouwt, in navolging van de Haagse aanpak, aan een eigen Rotterdamse aanpak. Het doel is helder: minder onderzoek en méér concrete actie in de onderwijspraktijk.
              </p>
            </div>
          </div>

          {/* Media & Verdieping: Podcast & E-learning */}
          <div className="grid grid-cols-2 gap-2.5 mb-3">
            <div className="p-2.5 rounded-lg border border-[#EDE6DA] bg-white">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[7pt] font-bold uppercase tracking-wider text-[#D3104C] bg-[#FDEEF3] px-1.5 py-0.5 rounded">
                  Podcast · ECHO
                </span>
              </div>
              <strong className="text-[8.5pt] text-[#003340] block mb-0.5">
                Stagediscriminatie onder de loep
              </strong>
              <p className="text-[7.5pt] text-[#5A5A55] leading-snug mb-1">
                5-delige audioserie over studentervaringen en praktische handvatten voor begeleiders.
              </p>
              <a
                href="https://echo-net.nl/stagediscriminatie-onder-de-loep/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[7.5pt] text-[#007AA8] underline font-medium"
              >
                echo-net.nl/stagediscriminatie-onder-de-loep/
              </a>
            </div>

            <div className="p-2.5 rounded-lg border border-[#EDE6DA] bg-white">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[7pt] font-bold uppercase tracking-wider text-[#217772] bg-[#EDFAF9] px-1.5 py-0.5 rounded">
                  E-learning · Anne Frank
                </span>
              </div>
              <strong className="text-[8.5pt] text-[#003340] block mb-0.5">
                Als begeleider van stagiairs
              </strong>
              <p className="text-[7.5pt] text-[#5A5A55] leading-snug mb-1">
                Interactieve online module over vooroordelen, discriminatie op de werkvloer en gespreksvoering.
              </p>
              <a
                href="https://www.annefrank.org/nl/elearning/module/begeleider-van-stagiairs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[7.5pt] text-[#007AA8] underline font-medium"
              >
                annefrank.org/nl/elearning/module/begeleider-van-stagiairs/
              </a>
            </div>
          </div>

          {/* Overzicht van de 5 Stappen */}
          <div className="mb-3">
            <h2 className="text-[9pt] font-bold uppercase tracking-wider text-[#003340] mb-1.5">
              De 5 stappen van de aanpak
            </h2>
            <div className="grid grid-cols-5 gap-1.5 text-center text-[7.5pt]">
              {bouwstenen.map((stap) => {
                const theme = stepThemes[stap.id];
                return (
                  <div
                    key={stap.id}
                    className="p-1.5 rounded border"
                    style={{
                      borderColor: theme.border,
                      backgroundColor: theme.lightBg
                    }}
                  >
                    <span
                      className="font-black block text-[9.5pt]"
                      style={{ color: theme.primary }}
                    >
                      {stap.id}
                    </span>
                    <strong className="text-[#003340] block text-[7.5pt] leading-tight">
                      {stap.titel}
                    </strong>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kernuitgangspunten voor onderwijsprofessionals */}
          <div className="p-2.5 rounded-lg border border-[#EDE6DA] bg-white text-[7.5pt] leading-relaxed text-[#003340]">
            <h3 className="text-[8.5pt] font-bold uppercase tracking-wider text-[#003340] mb-1">
              Kernuitgangspunten voor onderwijsprofessionals &amp; begeleiders
            </h3>
            <ul className="list-disc pl-3.5 space-y-0.5 text-[#5A5A55]">
              <li>
                <strong>Creëer een veilige relatie:</strong> Een student deelt uitsluiting en discriminatie pas wanneer er sprake is van vertrouwen en een oordeelvrij luisterend oor.
              </li>
              <li>
                <strong>De student houdt de regie:</strong> Er worden geen stappen ondernomen richting het stagebedrijf zonder uitdrukkelijke instemming van de student.
              </li>
              <li>
                <strong>Je staat er niet alleen voor:</strong> Je hebt te allen tijde rugdekking van je opleidingsteam, de examencommissie en het stappenplan van Hogeschool Rotterdam.
              </li>
              <li>
                <strong>Structurele borging:</strong> Naast individuele zorg worden signalen geborgd om het stagenetwerk veilig te houden voor toekomstige studenten.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center mt-2">
          <div className="flex items-center gap-1.5">
            <img src="/hr-logo.png" alt="HR" className="h-3.5 w-auto object-contain inline-block" />
            <span>Aanpak gelijke stagekansen · Hogeschool Rotterdam</span>
          </div>
          <span className="font-bold">Pagina 1 van 7</span>
        </div>
      </section>

      {/* =========================================================================
          PAGINA 2 T/M 6: DE 5 STAPPEN (CONFORM BOUWSTENEN.TS)
          ========================================================================= */}
      {bouwstenen.map((stap, index) => {
        const theme = stepThemes[stap.id];
        const pageNumber = index + 2;

        return (
          <section key={stap.id} className={pageClass}>
            <div>
              {/* Step Header */}
              <div
                className="flex justify-between items-center pb-2 border-b-2 mb-3"
                style={{ borderBottomColor: theme.primary }}
              >
                <div>
                  <span
                    className="text-[8pt] uppercase font-bold tracking-wider"
                    style={{ color: theme.labelColor }}
                  >
                    Stap {stap.id} van 5
                  </span>
                  <h2 className="text-[14pt] font-black text-[#003340] leading-tight">
                    {stap.titel}
                  </h2>
                </div>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10pt] text-white shadow-2xs"
                  style={{
                    backgroundColor: theme.primary,
                    color: stap.kleur === '#FCC200' ? '#003340' : '#ffffff'
                  }}
                >
                  {stap.id}
                </span>
              </div>

              {/* Inleiding van de stap (exact conform webapp) */}
              <div
                className="p-3 rounded-lg border mb-3 text-[8pt] leading-relaxed"
                style={{
                  backgroundColor: theme.lightBg,
                  borderColor: theme.border,
                  color: theme.labelColor
                }}
              >
                <p className="font-medium">{stap.inleiding}</p>
              </div>

              {/* Wat wordt er van jou als begeleider verwacht? */}
              <div className="mb-3">
                <h3
                  className="text-[9pt] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"
                  style={{ color: theme.labelColor }}
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <span>Wat wordt er van jou als begeleider verwacht?</span>
                </h3>

                <ul className="space-y-2 text-[8pt] text-[#003340] leading-relaxed">
                  {stap.verwachting.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="p-2 rounded-md bg-[#FAF8F5] border border-[#EDE6DA] print-avoid-break"
                    >
                      <div
                        className="text-[#003340]"
                        dangerouslySetInnerHTML={{ __html: item.tekst }}
                      />

                      {/* Uitgeklapte Inline Toelichting / Alternatieven / Handvatten */}
                      {item.link?.inline && (
                        <div
                          className="print-inline-box mt-2 p-2.5 rounded-md border text-[7.5pt] leading-relaxed bg-[#F7EFE3]"
                          style={{
                            borderLeftWidth: '3px',
                            borderLeftColor: theme.primary,
                            borderColor: '#E5DACB'
                          }}
                        >
                          <strong
                            className="block font-bold text-[7.5pt] mb-1 tracking-tight"
                            style={{ color: theme.labelColor }}
                          >
                            {item.link.label}:
                          </strong>
                          <div
                            dangerouslySetInnerHTML={{ __html: item.link.inline }}
                            className="print-inline-content space-y-1 text-[7.5pt]"
                          />
                        </div>
                      )}

                      {/* Externe link badge indien van toepassing */}
                      {item.link && !item.link.inline && item.link.url && (
                        <div className="mt-1.5 flex items-center gap-1 text-[7.5pt]">
                          <span className="text-[#5A5A55]">Link / Bron:</span>
                          <a
                            href={
                              item.link.type === 'video' && item.link.videoId
                                ? `https://www.youtube.com/watch?v=${item.link.videoId}`
                                : item.link.url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#007AA8] underline font-semibold break-all"
                          >
                            {item.link.label}
                          </a>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Uitklaps / Meer weten bij deze stap */}
              {stap.uitklaps && stap.uitklaps.length > 0 && (
                <div className="p-2.5 rounded-lg border border-[#EDE6DA] bg-white print-avoid-break mt-2">
                  <span className="text-[7.5pt] font-bold uppercase tracking-wider text-[#7A756E] block mb-1">
                    {stap.uitklaps.some((u) => u.type === 'academie')
                      ? 'Verdiep je verder (HR Academie & Kaders):'
                      : 'Meer weten & Verdieping:'}
                  </span>
                  <div className="space-y-1 text-[7.5pt]">
                    {stap.uitklaps.map((u, uIdx) => (
                      <div key={uIdx} className="text-[#003340]">
                        • <strong className="font-semibold">{u.titel}</strong>
                        {u.inhoud && (
                          <span className="text-[#5A5A55]"> — {u.inhoud}</span>
                        )}
                        {u.url && (
                          <a
                            href={u.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#007AA8] underline ml-1 font-medium break-all"
                          >
                            [Link]
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center mt-2">
              <div className="flex items-center gap-1.5">
                <img src="/hr-logo.png" alt="HR" className="h-3.5 w-auto object-contain inline-block" />
                <span>
                  Stap {stap.id}: {stap.titel} · Hogeschool Rotterdam
                </span>
              </div>
              <span className="font-bold">Pagina {pageNumber} van 7</span>
            </div>
          </section>
        );
      })}

      {/* =========================================================================
          PAGINA 7: ONDERSTEUNING & OFFICIËLE APA 7 BRONNENLIJST
          ========================================================================= */}
      <section className={pageClass}>
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-2.5 border-b-2 border-[#D3104C] mb-3">
            <div>
              <span className="text-[8pt] uppercase font-bold text-[#D3104C] tracking-wider">
                Verantwoording
              </span>
              <h2 className="text-[14pt] font-black text-[#003340] leading-tight">
                Bronnenlijst
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[7.5pt] uppercase font-bold text-[#003340] bg-[#F7EFE3] px-2.5 py-1 rounded border border-[#EDE6DA]">
                APA 7de Editie
              </span>
            </div>
          </div>

          {/* Contact & Advies TG-SO */}
          <div className="p-3 rounded-lg border border-[#002630] bg-[#003340] text-[8pt] leading-relaxed text-white mb-3 shadow-none">
            <p className="text-[#EDE6DA] mb-1.5 text-[7.5pt]">
              Heb je advies nodig of wil je voor jouw opleidingsteam een aanvraag doen voor professionalisering op maat? Neem contact op met de adviseurs van de Themagroep Studentgerichte Omgeving (TG-SO).
            </p>
            <p className="font-medium text-white text-[7.5pt]">
              E-mail: <a href="mailto:TG-SO-adviseurs@hr.nl" className="underline font-bold text-white">TG-SO-adviseurs@hr.nl</a>
            </p>
          </div>

          {/* APA Reference List */}
          <div className="space-y-1.5 text-[7.5pt] text-[#003340] leading-relaxed">
            <p className="pl-4 -indent-4">
              Algemene wet gelijke behandeling (AWGB). (1994, 2 maart). <em>Geraadpleegd via wetten.overheid.nl</em>. <a href="https://wetten.overheid.nl/BWBR0006502/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://wetten.overheid.nl/BWBR0006502/</a>
            </p>
            <p className="pl-4 -indent-4">
              Anne Frank Stichting. (2022). <em>Als begeleider van stagiairs: E-learning over vooroordelen en discriminatie op de werkvloer</em>. <a href="https://www.annefrank.org/nl/elearning/module/begeleider-van-stagiairs/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.annefrank.org/nl/elearning/module/begeleider-van-stagiairs/</a>
            </p>
            <p className="pl-4 -indent-4">
              College voor de Rechten van de Mens. (2020). <em>Oordelen en aanbevelingen inzake stagediscriminatie in het beroepsonderwijs</em>. <a href="https://www.mensenrechten.nl" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.mensenrechten.nl</a>
            </p>
            <p className="pl-4 -indent-4">
              De Grondwet voor het Koninkrijk der Nederlanden. (2023). <em>Artikel 1: Gelijke behandeling en discriminatieverbod</em>. <a href="https://www.denederlandsegrondwet.nl/artikel/1999/1-gelijke-behandeling-en-discriminatieverbod" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.denederlandsegrondwet.nl/artikel/1999/1-gelijke-behandeling-en-discriminatieverbod</a>
            </p>
            <p className="pl-4 -indent-4">
              ECHO Expertisecentrum Diversiteitsbeleid. (2024). <em>Stagediscriminatie onder de loep</em> [Audiopodcastserie]. <a href="https://echo-net.nl/stagediscriminatie-onder-de-loep/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://echo-net.nl/stagediscriminatie-onder-de-loep/</a>
            </p>
            <p className="pl-4 -indent-4">
              Gemeente Den Haag &amp; Haagse Onderwijsinstellingen. (2022). <em>Handreiking stagediscriminatie voor onderwijsinstellingen en leerwerkbedrijven</em>. Haagse Aanpak. <a href="https://haagseaanpak.nl/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://haagseaanpak.nl/</a>
            </p>
            <p className="pl-4 -indent-4">
              Hogeschool Inholland. (2021). <em>Stagediscriminatie in het hbo: Een onderzoek naar ervaringen van studenten en handelingsperspectieven van opleidingen</em>. <a href="https://www.inholland.nl/onderzoek/publicaties/stagediscriminatie-in-het-hbo" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.inholland.nl/onderzoek/publicaties/stagediscriminatie-in-het-hbo</a>
            </p>
            <p className="pl-4 -indent-4">
              Hogeschool Rotterdam. (2023). <em>Gedrags- en integriteitscode (Hogeschoolgidsen, Bijlage 2)</em>. Hogeschool Rotterdam. <a href="https://hint.hr.nl/nl/HR/Studie/Publicaties/Hogeschoolgidsen/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://hint.hr.nl/nl/HR/Studie/Publicaties/Hogeschoolgidsen/</a>
            </p>
            <p className="pl-4 -indent-4">
              Hogeschool Rotterdam. (2024). <em>Onderwijs- en Examenregeling (OER): Richtlijnen stagebegeleiding en rechtsbescherming van studenten</em>. Rotterdam: Hogeschool Rotterdam.
            </p>
            <p className="pl-4 -indent-4">
              Kennisplatform Inclusief Samenleven (KIS). (2022). <em>Wat werkt bij het tegengaan van stagediscriminatie? Effectieve interventies voor onderwijs en stagebedrijven</em>. Verwey-Jonker Instituut. <a href="https://www.kis.nl/publicatie/studenten-beschermen-tegen-gevolgen-van-stagediscriminatie" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.kis.nl/publicatie/studenten-beschermen-tegen-gevolgen-van-stagediscriminatie</a>
            </p>
            <p className="pl-4 -indent-4">
              Ministerie van Onderwijs, Cultuur en Wetenschap. (2022, 13 juli). <em>Manifest ondertekend om stagediscriminatie tegen te gaan</em>. Rijksoverheid. <a href="https://www.rijksoverheid.nl/actueel/nieuws/2022/07/13/manifest-ondertekend-om-stagediscriminatie-tegen-te-gaan" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.rijksoverheid.nl/actueel/nieuws/2022/07/13/manifest-ondertekend-om-stagediscriminatie-tegen-te-gaan</a>
            </p>
            <p className="pl-4 -indent-4">
              Ministerie van Onderwijs, Cultuur en Wetenschap. (2023). <em>Nationaal Stagepact mbo en hbo 2023-2027: Samen voor gelijke kansen op stage</em>. Ministerie van OCW.
            </p>
            <p className="pl-4 -indent-4">
              Movisie. (2023). <em>Discriminatie in het onderwijs: Feiten, cijfers en handelingsperspectieven voor docenten</em>. <a href="https://www.movisie.nl/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.movisie.nl/</a>
            </p>
            <p className="pl-4 -indent-4">
              Stichting School &amp; Veiligheid. (2020). <em>In gesprek over stagediscriminatie: Handreiking voor stagebegeleiders en docenten in het mbo en hbo</em>. <a href="https://www.schoolenveiligheid.nl/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.schoolenveiligheid.nl/</a>
            </p>
            <p className="pl-4 -indent-4">
              Teaching &amp; Learning Center (TLC). (2025). <em>DOORBREKERS: Lespakket stagediscriminatie en inclusief leerklimaat</em>. Hogeschool Rotterdam. <a href="https://www.tlcenter.nl/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.tlcenter.nl/</a>
            </p>
            <p className="pl-4 -indent-4">
              Verwey-Jonker Instituut. (2025). <em>Stagediscriminatie onder de radar: Onderzoek naar onzichtbare uitsluiting en meldingsdrempels bij studenten</em>. <a href="https://www.verwey-jonker.nl/publicatie/stagediscriminatie-onder-de-radar/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://www.verwey-jonker.nl/publicatie/stagediscriminatie-onder-de-radar/</a>
            </p>
            <p className="pl-4 -indent-4">
              Wet gelijke behandeling op grond van handicap of chronische ziekte (Wgb h/cz). (2003, 3 april). <em>Geraadpleegd via wetten.overheid.nl</em>. <a href="https://wetten.overheid.nl/BWBR0014915/" target="_blank" rel="noopener noreferrer" className="text-[#007AA8] underline break-all">https://wetten.overheid.nl/BWBR0014915/</a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center mt-2">
          <div className="flex items-center gap-1.5">
            <img src="/hr-logo.png" alt="HR" className="h-3.5 w-auto object-contain inline-block" />
            <span>Bronnenlijst (APA 7de editie) · Hogeschool Rotterdam</span>
          </div>
          <span className="font-bold">Pagina 7 van 7</span>
        </div>
      </section>
    </div>
  );
};
