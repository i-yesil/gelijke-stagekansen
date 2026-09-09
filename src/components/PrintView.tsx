import React from 'react';

export const PrintView: React.FC = () => {
  return (
    <div className="print-only hidden font-['Poppins',sans-serif] text-[#003340]">
      {/* =========================================================================
          PAGINA 1: INLEIDING & LEERMIDDELEN (PODCASTS & E-LEARNING)
          ========================================================================= */}
      <section className="print-page">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-2 border-b-2 border-[#D3104C] mb-4">
            <div>
              <span className="text-[11pt] font-black text-[#D3104C] tracking-tight">HOGESCHOOL ROTTERDAM</span>
              <span className="text-[8pt] text-[#5A5A55] block font-medium">Themagroep Studentgerichte Omgeving (TG-SO) · 2026</span>
            </div>
            <div className="text-right">
              <span className="text-[8pt] uppercase tracking-wider font-bold text-[#003340] bg-[#F7EFE3] px-2 py-0.5 rounded border border-[#EDE6DA]">
                Handreiking Stagebegeleiders
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="mb-3">
            <h1 className="text-[17pt] font-black text-[#003340] leading-tight mb-1">
              Aanpak gelijke stagekansen
            </h1>
            <p className="text-[10pt] font-semibold text-[#D3104C]">
              Samen tegen stagediscriminatie: voorkomen, signaleren, bespreken en opvolgen
            </p>
          </div>

          {/* Inleiding text */}
          <div className="bg-[#F7EFE3] p-3 rounded-lg border border-[#EDE6DA] mb-3 text-[8.5pt] leading-relaxed text-[#003340] space-y-1.5">
            <p>
              Gelijke stagekansen zijn een vanzelfsprekende norm binnen de hogeschool: elke student verdient dezelfde kans op een passende en veilige stageplek. Uit onderzoek (o.a. Hogeschool Inholland en Verwey-Jonker Instituut) blijkt echter dat stagediscriminatie een reëel en vaak onderschat probleem is. Het doet zich voor bij werving en selectie, tijdens sollicitatiegesprekken én op de werkvloer zelf.
            </p>
            <p>
              Studenten melden zelden uit eigen beweging door schaamte, angst voor vertraging of het gevoel dat melden niets uithaalt. Als stagebegeleider, docent of studieloopbaancoach ben jij vaak de eerste die signalen opvangt. Hogeschool Rotterdam ondertekende het landelijk <em>Manifest tegen stagediscriminatie</em> en biedt met deze handreiking een concreet 5-stappenkader met rugdekking voor iedere begeleider.
            </p>
          </div>

          {/* De 5 Stappen Overzicht */}
          <div className="mb-3">
            <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-[#003340] mb-1.5">
              De 5 stappen van de Rotterdamse aanpak
            </h2>
            <div className="grid grid-cols-5 gap-1.5 text-center text-[7.5pt]">
              <div className="p-1.5 rounded border border-[#00B0F0] bg-[#F0F9FD]">
                <span className="font-black text-[#00B0F0] block text-[9pt]">1</span>
                <span className="font-bold text-[#003340] block">Bewustwording</span>
                <span className="text-[#5A5A55] text-[7pt]">en preventie</span>
              </div>
              <div className="p-1.5 rounded border border-[#D3104C] bg-[#FDF2F5]">
                <span className="font-black text-[#D3104C] block text-[9pt]">2</span>
                <span className="font-bold text-[#003340] block">Signalering</span>
                <span className="text-[#5A5A55] text-[7pt]">en (h)erkennen</span>
              </div>
              <div className="p-1.5 rounded border border-[#003340] bg-[#EDF3F5]">
                <span className="font-black text-[#003340] block text-[9pt]">3</span>
                <span className="font-bold text-[#003340] block">Gesprek</span>
                <span className="text-[#5A5A55] text-[7pt]">veiligheid bieden</span>
              </div>
              <div className="p-1.5 rounded border border-[#FCC200] bg-[#FEFBEA]">
                <span className="font-black text-[#8A6400] block text-[9pt]">4</span>
                <span className="font-bold text-[#003340] block">Begeleiding</span>
                <span className="text-[#5A5A55] text-[7pt]">en handelen</span>
              </div>
              <div className="p-1.5 rounded border border-[#3AB7B0] bg-[#EDFAF9]">
                <span className="font-black text-[#1C6D68] block text-[9pt]">5</span>
                <span className="font-bold text-[#003340] block">(Na)zorg</span>
                <span className="text-[#5A5A55] text-[7pt]">en borging</span>
              </div>
            </div>
          </div>

          {/* Ondersteunende leermiddelen (podcasts & e-learning met volledige URL's) */}
          <div>
            <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-[#003340] mb-1.5">
              Ondersteunende leermiddelen &amp; podcasts (volledige weblinks)
            </h2>
            <div className="space-y-1.5 text-[8pt]">
              <div className="p-2 rounded border border-[#E8E4DA] bg-white">
                <div className="flex justify-between items-baseline mb-0.5">
                  <strong className="text-[#D3104C] text-[8.5pt]">Podcast: ECHO — Stagediscriminatie onder de loep</strong>
                  <span className="text-[7pt] text-[#7A756E] uppercase font-bold">5 Afleveringen</span>
                </div>
                <p className="text-[#5A5A55] mb-1">
                  Persoonlijke ervaringen van studenten, analyses van onderzoekers en praktische handvatten voor begeleiders in het hoger onderwijs.
                </p>
                <div className="font-mono text-[7.5pt] text-[#00A0DB] bg-[#F7FAFC] px-1.5 py-0.5 rounded border border-[#E2E8F0]">
                  https://echo-net.nl/stagediscriminatie-onder-de-loep/
                </div>
              </div>

              <div className="p-2 rounded border border-[#E8E4DA] bg-white">
                <div className="flex justify-between items-baseline mb-0.5">
                  <strong className="text-[#217772] text-[8.5pt]">E-learning: Anne Frank Stichting — Als begeleider van stagiairs</strong>
                  <span className="text-[7pt] text-[#7A756E] uppercase font-bold">Online Module</span>
                </div>
                <p className="text-[#5A5A55] mb-1">
                  Interactieve leermodule met audiofragmenten over vooroordelen, microagressies op de werkvloer en handelingsperspectieven voor docenten.
                </p>
                <div className="font-mono text-[7.5pt] text-[#00A0DB] bg-[#F7FAFC] px-1.5 py-0.5 rounded border border-[#E2E8F0]">
                  https://www.annefrank.org/nl/elearning/module/begeleider-van-stagiairs/
                </div>
              </div>

              <div className="p-2 rounded border border-[#E8E4DA] bg-white">
                <div className="flex justify-between items-baseline mb-0.5">
                  <strong className="text-[#003340] text-[8.5pt]">Onderzoeksrapport &amp; Documentaire: Urgentie van actie</strong>
                  <span className="text-[7pt] text-[#7A756E] uppercase font-bold">Verdieping</span>
                </div>
                <p className="text-[#5A5A55] mb-1">
                  <em>Rapport Stagediscriminatie onder de radar (2025):</em> https://open.overheid.nl/documenten/5d364320-c785-4a46-87b5-2652bd586f81/file<br />
                  <em>Documentaire WAAROM?! bestaat stagediscriminatie nog steeds?:</em> https://www.youtube.com/watch?v=_IMXbKP1qt8
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center">
          <span>Aanpak gelijke stagekansen · Hogeschool Rotterdam</span>
          <span className="font-bold">Pagina 1 van 7</span>
        </div>
      </section>

      {/* =========================================================================
          PAGINA 2: STAP 1 — BEWUSTWORDING EN PREVENTIE
          ========================================================================= */}
      <section className="print-page">
        <div>
          {/* Top bar */}
          <div className="flex justify-between items-center pb-1.5 border-b-2 border-[#00B0F0] mb-3">
            <div>
              <span className="text-[8pt] uppercase font-bold text-[#00B0F0] tracking-wider">Fase 1 · Preventie &amp; Voorbereiding</span>
              <h2 className="text-[14pt] font-black text-[#003340] leading-tight">
                Stap 1: Bewustwording en preventie
              </h2>
            </div>
            <span className="w-6 h-6 rounded-full bg-[#00B0F0] text-white flex items-center justify-center font-bold text-[10pt]">
              1
            </span>
          </div>

          {/* Inleiding */}
          <p className="text-[8.5pt] leading-relaxed text-[#003340] mb-3 bg-[#F0F9FD] p-2.5 rounded border border-[#B0E5F8]">
            <strong>Kerninzicht:</strong> Bewustwording en preventie vormen het fundament. Het begint bij het tijdig herkennen en erkennen van stagediscriminatie: weten hóe het zich voordoet bij studenten, stagebedrijven én bij jezelf. Preventie start met het doorbreken van de hardnekkige aanname dat 'het bij ons niet speelt'. Als begeleider speel je hierin een sleutelrol: je bereidt studenten tijdig voor en reflecteert op eigen blinde vlekken.
          </p>

          {/* Verwachtingen van de begeleider */}
          <div className="mb-3">
            <h3 className="text-[9pt] font-bold uppercase tracking-wider text-[#007AA8] mb-1.5">
              Wat wordt er van jou als begeleider verwacht?
            </h3>
            <ul className="space-y-1.5 text-[8pt] text-[#003340] list-disc pl-4 leading-relaxed">
              <li>
                <strong>Doorbreek de mythe van afwezigheid:</strong> Het ontbreken van formele klachten betekent niet dat er geen stagediscriminatie is. Studenten melden zelden uit zichzelf door schaamte, angst voor vertraging of het gevoel niet geloofd te worden.
              </li>
              <li>
                <strong>Ken de vier hoofdvormen:</strong>
                <div className="grid grid-cols-2 gap-1.5 mt-1 text-[7.5pt] pl-1">
                  <div className="p-1 rounded bg-[#FAF8F5] border border-[#EDE6DA]">
                    <strong>1. Directe discriminatie:</strong> Expliciete uitsluiting (bijv. afwijzing vanwege hoofddoek, afkomst of gender).
                  </div>
                  <div className="p-1 rounded bg-[#FAF8F5] border border-[#EDE6DA]">
                    <strong>2. Indirecte discriminatie:</strong> Schijnbaar neutrale regels die bepaalde groepen onevenredig benadelen.
                  </div>
                  <div className="p-1 rounded bg-[#FAF8F5] border border-[#EDE6DA]">
                    <strong>3. Microagressies:</strong> Subtiele denigrerende opmerkingen of 'grapjes' ("Wat spreek je goed Nederlands").
                  </div>
                  <div className="p-1 rounded bg-[#FAF8F5] border border-[#EDE6DA]">
                    <strong>4. Systemische uitsluiting:</strong> Vaste wervingspatronen waardoor bepaalde profielen structureel buiten de boot vallen.
                  </div>
                </div>
              </li>
              <li>
                <strong>Herken kwetsbare groepen:</strong> Bepaalde studenten lopen structureel meer risico: studenten van kleur, studenten met een functiebeperking (10% ervaart belemmeringen), islamitische studenten, en queer studenten.
              </li>
              <li>
                <strong>Reflecteer op eigen blinde vlekken:</strong> Iedere professional heeft onbewuste voorkeuren en 'klik'-gevoelens. Wees je bewust van je eigen aannames en hoe deze je adviezen aan studenten kunnen beïnvloeden.
              </li>
              <li>
                <strong>Bereid studenten vooraf voor in de klas:</strong> Bespreek stagediscriminatie en meldrechten vóórdat studenten gaan solliciteren. Dit verlaagt de melddrempel aanzienlijk en activeert medestudenten als bondgenoten op de werkvloer.
              </li>
            </ul>
          </div>

          {/* Handige instrumenten & links */}
          <div className="p-2.5 rounded border border-[#EDE6DA] bg-white space-y-1 text-[7.5pt]">
            <strong className="text-[#007AA8] uppercase tracking-wider block text-[8pt]">Relevante instrumenten &amp; bronnen:</strong>
            <p>
              • <em>Harvard Onbewuste Vooroordelen Test (IAT):</em> https://implicit.harvard.edu/implicit/netherlands/takeatest.html<br />
              • <em>Lespakket DOORBREKERS (School &amp; Veiligheid):</em> https://www.tlcenter.nl/wp-content/uploads/2025/12/Doorbrekers-Lespakket.pdf<br />
              • <em>Artikel 1 Grondwet (Gelijke behandeling):</em> https://www.denederlandsegrondwet.nl/artikel/1999/1-gelijke-behandeling-en-discriminatieverbod
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center">
          <span>Stap 1: Bewustwording en preventie · Hogeschool Rotterdam</span>
          <span className="font-bold">Pagina 2 van 7</span>
        </div>
      </section>

      {/* =========================================================================
          PAGINA 3: STAP 2 — SIGNALERING
          ========================================================================= */}
      <section className="print-page">
        <div>
          {/* Top bar */}
          <div className="flex justify-between items-center pb-1.5 border-b-2 border-[#D3104C] mb-3">
            <div>
              <span className="text-[8pt] uppercase font-bold text-[#D3104C] tracking-wider">Fase 2 · Oplettendheid &amp; Vroegsignalering</span>
              <h2 className="text-[14pt] font-black text-[#003340] leading-tight">
                Stap 2: Signalering
              </h2>
            </div>
            <span className="w-6 h-6 rounded-full bg-[#D3104C] text-white flex items-center justify-center font-bold text-[10pt]">
              2
            </span>
          </div>

          {/* Inleiding */}
          <p className="text-[8.5pt] leading-relaxed text-[#003340] mb-3 bg-[#FDF2F5] p-2.5 rounded border border-[#F4C2D1]">
            <strong>Kerninzicht:</strong> Signaleren gaat verder dan wachten tot een student zelf melding doet. De meeste studenten komen niet uit zichzelf, uit schaamte, angst voor studievertraging of omdat ze denken dat het 'erbij hoort'. Als begeleider heb jij de taak om actief te kijken en te luisteren in elke fase: tijdens het zoeken, bij sollicitaties én gedurende de stage.
          </p>

          {/* Verwachtingen van de begeleider */}
          <div className="mb-3">
            <h3 className="text-[9pt] font-bold uppercase tracking-wider text-[#B41E4B] mb-1.5">
              Wat wordt er van jou als begeleider verwacht?
            </h3>
            <ul className="space-y-1.5 text-[8pt] text-[#003340] list-disc pl-4 leading-relaxed">
              <li>
                <strong>Signaleer in de sollicitatiefase:</strong> Let op studenten die opvallend vaak worden afgewezen zonder duidelijke feedback, niet op gesprek mogen komen of geconfronteerd worden met oneigenlijke eisen (bijvoorbeeld verzoek om hoofddoek af te doen).
              </li>
              <li>
                <strong>Signaleer tijdens de stage:</strong> Let op signalen zoals uitsluiting bij lunches of borrels, overschakelen op vakjargon om iemand buiten te sluiten, niet serieus nemen van inbreng, en ongepaste grappen over culturele of persoonlijke achtergronden.
              </li>
              <li>
                <strong>Vraag actief en open door:</strong> Wacht niet af tot problemen escaleren. Vraag geregeld naar de sfeer en sociale veiligheid binnen het team.
              </li>
              <li>
                <strong>Herken meldingsdrempels:</strong> Studenten melden pas als er een vertrouwensrelatie is. Bouwen aan een veilige relatie waarin studenten open durven te zijn, is een van je belangrijkste preventieve taken.
              </li>
            </ul>
          </div>

          {/* Gespreksstarters tabel */}
          <div className="mb-3">
            <h3 className="text-[9pt] font-bold uppercase tracking-wider text-[#003340] mb-1.5">
              Praktische gespreksstarters voor de begeleider
            </h3>
            <div className="grid grid-cols-2 gap-2 text-[7.5pt]">
              <div className="p-2 rounded bg-white border border-[#EDE6DA]">
                <strong className="text-[#D3104C] block mb-1">In de sollicitatiefase:</strong>
                <p className="italic text-[#5A5A55] mb-1">"Je hebt al bij flink wat organisaties gesolliciteerd. Hoe verloopt dat contact inhoudelijk?"</p>
                <p className="italic text-[#5A5A55]">"Werd er tijdens de kennismaking iets gezegd of gevraagd waarvan je achteraf dacht: dit voelt vreemd?"</p>
              </div>
              <div className="p-2 rounded bg-white border border-[#EDE6DA]">
                <strong className="text-[#D3104C] block mb-1">Tijdens de stagewerkzaamheden:</strong>
                <p className="italic text-[#5A5A55] mb-1">"Hoe voel je je binnen het team? Voel je je gezien en serieus genomen door collega's?"</p>
                <p className="italic text-[#5A5A55]">"Is er de afgelopen periode iets gebeurd waardoor je je ongemakkelijk of buitengesloten voelde?"</p>
              </div>
            </div>
          </div>

          {/* Handige instrumenten & links */}
          <div className="p-2.5 rounded border border-[#EDE6DA] bg-white space-y-1 text-[7.5pt]">
            <strong className="text-[#B41E4B] uppercase tracking-wider block text-[8pt]">Relevante instrumenten &amp; bronnen:</strong>
            <p>
              • <em>Kennisplatform Inclusief Samenleven (KIS) - Beschermen tegen stagediscriminatie:</em> https://www.kis.nl/publicatie/studenten-beschermen-tegen-gevolgen-van-stagediscriminatie<br />
              • <em>TLC Stagediscriminatie herkennen en bespreekbaar maken:</em> https://www.tlcenter.nl/stagediscriminatie-herkennen/
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center">
          <span>Stap 2: Signalering · Hogeschool Rotterdam</span>
          <span className="font-bold">Pagina 3 van 7</span>
        </div>
      </section>

      {/* =========================================================================
          PAGINA 4: STAP 3 — GESPREKSVOERING
          ========================================================================= */}
      <section className="print-page">
        <div>
          {/* Top bar */}
          <div className="flex justify-between items-center pb-1.5 border-b-2 border-[#003340] mb-3">
            <div>
              <span className="text-[8pt] uppercase font-bold text-[#003340] tracking-wider">Fase 3 · Opvang &amp; Veilige Ruimte</span>
              <h2 className="text-[14pt] font-black text-[#003340] leading-tight">
                Stap 3: Gespreksvoering
              </h2>
            </div>
            <span className="w-6 h-6 rounded-full bg-[#003340] text-white flex items-center justify-center font-bold text-[10pt]">
              3
            </span>
          </div>

          {/* Inleiding */}
          <p className="text-[8.5pt] leading-relaxed text-[#003340] mb-3 bg-[#EDF3F5] p-2.5 rounded border border-[#C4D5DA]">
            <strong>Kerninzicht:</strong> Als een student stagediscriminatie deelt, bepaalt jouw eerste reactie of de student zich gesteund voelt of juist dichtklapt. Het uitgangspunt: een veilige ruimte creëren, onvoorwaardelijk luisteren zonder oordeel, en de ervaring niet bagatelliseren. De student houdt altijd de regie over het verhaal en eventuele vervolgstappen.
          </p>

          {/* Verwachtingen van de begeleider */}
          <div className="mb-3">
            <h3 className="text-[9pt] font-bold uppercase tracking-wider text-[#003340] mb-1.5">
              Wat wordt er van jou als begeleider verwacht?
            </h3>
            <ul className="space-y-1.5 text-[8pt] text-[#003340] list-disc pl-4 leading-relaxed">
              <li>
                <strong>Benader proactief en neem positie in:</strong> Wacht niet af. Spreek je duidelijk uit tegen discriminatie: het is nooit de schuld van de student en discriminatie hoeft niet 'professioneel geslikt' te worden.
              </li>
              <li>
                <strong>Laat OMA thuis (Oordeel, Mening, Advies):</strong> Schiet niet direct in de oplosmodus en ga niet oordelen. Te snel advies geven sluit het gesprek af; luister eerst naar de beleving en emoties.
              </li>
              <li>
                <strong>Pas NIVEA toe (Niet Invullen Voor Een Ander):</strong> Vul niet in wat de ander bedoelt of hoe het stagebedrijf het vast bedoeld zal hebben. Vraag door: <em>"Wat deed dat met jou?"</em>
              </li>
              <li>
                <strong>Vermijd de twee bekende valkuilen:</strong>
                <div className="mt-1 text-[7.5pt] space-y-1 pl-1">
                  <p>• <em>Valkuil 1:</em> De schuld bij de student leggen ("Je moet je ook wat weerbaarder opstellen").</p>
                  <p>• <em>Valkuil 2:</em> Waarheidsvinding boven empathie stellen ("Weet je wel zeker dat het zo bedoeld was?").</p>
                </div>
              </li>
              <li>
                <strong>Herken copingstrategieën van studenten:</strong> Studenten reageren verschillend: polariserend (boos), vermijdend (terugtrekkend), conformerend (overcompenseren) of verbindend (bruggen bouwen). Erken dit gedrag zonder te oordelen.
              </li>
            </ul>
          </div>

          {/* Zelfreflectie voor de docent */}
          <div className="p-2.5 rounded bg-[#FAF8F5] border border-[#EDE6DA] mb-3 text-[7.5pt]">
            <strong className="text-[#003340] block mb-1 text-[8pt]">Vragen aan jezelf voorafgaand aan het gesprek:</strong>
            <p className="text-[#5A5A55] leading-relaxed">
              • Ben ik in staat om het gevoel van achterstelling onvoorwaardelijk serieus te nemen en mijn eigen oordeel uit te stellen?<br />
              • Begrijp ik de kwetsbare afhankelijkheidspositie van de student ten opzichte van de stageplek en studievoortgang?
            </p>
          </div>

          {/* Handige instrumenten & links */}
          <div className="p-2.5 rounded border border-[#EDE6DA] bg-white space-y-1 text-[7.5pt]">
            <strong className="text-[#003340] uppercase tracking-wider block text-[8pt]">Relevante instrumenten &amp; bronnen:</strong>
            <p>
              • <em>Handreiking In gesprek over stagediscriminatie (School &amp; Veiligheid, 2020):</em> https://www.schoolenveiligheid.nl/wp-content/uploads/2020/09/In-gesprek-over-stagediscriminatie-School-Veiligheid.pdf<br />
              • <em>TLC Werkprogramma - Het gesprek aangaan met de student:</em> https://www.tlcenter.nl/wp-content/uploads/2025/11/Het-gesprek-aangaan-met-de-student-Werkprogramma-stagediscriminatie.pdf
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center">
          <span>Stap 3: Gespreksvoering · Hogeschool Rotterdam</span>
          <span className="font-bold">Pagina 4 van 7</span>
        </div>
      </section>

      {/* =========================================================================
          PAGINA 5: STAP 4 — BEGELEIDING & HANDELEN
          ========================================================================= */}
      <section className="print-page">
        <div>
          {/* Top bar */}
          <div className="flex justify-between items-center pb-1.5 border-b-2 border-[#FCC200] mb-3">
            <div>
              <span className="text-[8pt] uppercase font-bold text-[#8A6400] tracking-wider">Fase 4 · Handelingsperspectief &amp; Rugdekking</span>
              <h2 className="text-[14pt] font-black text-[#003340] leading-tight">
                Stap 4: Begeleiding
              </h2>
            </div>
            <span className="w-6 h-6 rounded-full bg-[#FCC200] text-[#003340] flex items-center justify-center font-bold text-[10pt]">
              4
            </span>
          </div>

          {/* Inleiding */}
          <p className="text-[8.5pt] leading-relaxed text-[#003340] mb-3 bg-[#FEFBEA] p-2.5 rounded border border-[#FCE88F]">
            <strong>Kerninzicht:</strong> Na het gesprek volgt de actie: wat is nu de beste vervolgstap? De student houdt de regie, en sociale veiligheid en welzijn staan altijd voorop. Als begeleider handel je niet alleen, maar met de volledige institutionele rugdekking van de opleiding, je manager en de gedragscode van Hogeschool Rotterdam.
          </p>

          {/* Verwachtingen van de begeleider */}
          <div className="mb-3">
            <h3 className="text-[9pt] font-bold uppercase tracking-wider text-[#8A6400] mb-1.5">
              Wat wordt er van jou als begeleider verwacht?
            </h3>
            <ul className="space-y-1.5 text-[8pt] text-[#003340] list-disc pl-4 leading-relaxed">
              <li>
                <strong>Weet dat het beleid achter je staat:</strong> De Gedrags- en integriteitscode van Hogeschool Rotterdam (Bijlage 2) stelt respect en gelijke behandeling verplicht. Dit geeft jou een stevig juridisch en professioneel fundament om grenzen te stellen richting werkgevers.
              </li>
              <li>
                <strong>Zoek ruggenspraak met stagecoördinator of manager:</strong> Deel de situatie tijdig met je team. Maakt de student zich zorgen om privacy of represailles? Bespreek de casus dan in eerste instantie <em>geanonimiseerd</em>.
              </li>
              <li>
                <strong>Bewaak je professionele onafhankelijkheid:</strong> Langdurige relaties met bedrijven of angst om stageplekken te verliezen mogen nóóit zwaarder wegen dan het belang en de veiligheid van de student.
              </li>
              <li>
                <strong>Drie mogelijke handelingsroutes (altijd in overleg met de student):</strong>
                <div className="grid grid-cols-3 gap-1.5 mt-1 text-[7.5pt]">
                  <div className="p-1.5 rounded bg-white border border-[#EDE6DA]">
                    <strong className="text-[#003340] block mb-0.5">Route A: Zelf bespreken</strong>
                    Student voert zelf het gesprek op de stageplek; docent helpt intensief bij voorbereiding.
                  </div>
                  <div className="p-1.5 rounded bg-white border border-[#EDE6DA]">
                    <strong className="text-[#003340] block mb-0.5">Route B: Bemiddeling</strong>
                    Driehoeksgesprek door de docent. Student kiest zelf of die wel of niet aansluit.
                  </div>
                  <div className="p-1.5 rounded bg-white border border-[#EDE6DA]">
                    <strong className="text-[#D3104C] block mb-0.5">Route C: Stage beëindigen</strong>
                    Bij onveiligheid stopt de stage per direct, met behoud van uren en herplaatsing.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Handige instrumenten & links */}
          <div className="p-2.5 rounded border border-[#EDE6DA] bg-white space-y-1 text-[7.5pt]">
            <strong className="text-[#8A6400] uppercase tracking-wider block text-[8pt]">Relevante instrumenten &amp; bronnen:</strong>
            <p>
              • <em>Gedrags- en integriteitscode (Hogeschoolgidsen HR):</em> https://hint.hr.nl/nl/HR/Studie/Publicaties/Hogeschoolgidsen/<br />
              • <em>Meldpunt Discriminatie Nederland:</em> https://www.discriminatie.nl/<br />
              • <em>College voor de Rechten van de Mens:</em> https://www.mensenrechten.nl
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center">
          <span>Stap 4: Begeleiding · Hogeschool Rotterdam</span>
          <span className="font-bold">Pagina 5 van 7</span>
        </div>
      </section>

      {/* =========================================================================
          PAGINA 6: STAP 5 — (NA)ZORG, BORGING & REFLECTIE
          ========================================================================= */}
      <section className="print-page">
        <div>
          {/* Top bar */}
          <div className="flex justify-between items-center pb-1.5 border-b-2 border-[#3AB7B0] mb-3">
            <div>
              <span className="text-[8pt] uppercase font-bold text-[#1C6D68] tracking-wider">Fase 5 · Zorg voor de Student &amp; Duurzame Kwaliteit</span>
              <h2 className="text-[14pt] font-black text-[#003340] leading-tight">
                Stap 5: (Na)zorg en borging
              </h2>
            </div>
            <span className="w-6 h-6 rounded-full bg-[#3AB7B0] text-white flex items-center justify-center font-bold text-[10pt]">
              5
            </span>
          </div>

          {/* Inleiding */}
          <p className="text-[8.5pt] leading-relaxed text-[#003340] mb-3 bg-[#EDFAF9] p-2.5 rounded border border-[#B6E8E5]">
            <strong>Kerninzicht:</strong> Met het oplossen of beëindigen van een incident is de zaak niet klaar. Discriminatie tast het zelfvertrouwen en de mentale gezondheid van studenten aan. Nazorg is daarom tweeledig: individuele nazorg voor déze student én structurele borging zodat volgende studenten beschermd worden en de opleiding als geheel leert.
          </p>

          {/* Verwachtingen van de begeleider */}
          <div className="mb-3">
            <h3 className="text-[9pt] font-bold uppercase tracking-wider text-[#1C6D68] mb-1.5">
              Wat wordt er van jou als begeleider verwacht?
            </h3>
            <ul className="space-y-1.5 text-[8pt] text-[#003340] list-disc pl-4 leading-relaxed">
              <li>
                <strong>Bied nazorg aan de student:</strong> Neem 2 à 3 weken na het incident opnieuw contact op. Hoe gaat het nu? Zijn er nabranders? Verwijs zo nodig door naar studentendecanen of studentenpsychologen.
              </li>
              <li>
                <strong>Koppel signalen terug naar het stagebureau en opleiding:</strong> Zonder centrale registratie blijft elk voorval een incident. Deel de casus geanonimiseerd om patronen bij stageorganisaties in beeld te krijgen.
              </li>
              <li>
                <strong>Evalueer de samenwerking met het bedrijf:</strong> Bij herhaalde signalen of onwil tot verbetering treedt de escalatieladder in werking. De opleiding kan besluiten het bedrijf uit het stagenetwerk te weren om studenten te beschermen.
              </li>
              <li>
                <strong>Leg afspraken vast in het stagedossier:</strong> Zorg voor zorgvuldige en feitelijke dossiervorming.
              </li>
            </ul>
          </div>

          {/* Reflectievraag & Contact */}
          <div className="p-3 rounded-lg bg-[#003340] text-white mb-3">
            <span className="text-[8pt] font-bold uppercase tracking-wider text-[#FCC200] block mb-1">
              Reflectie voor de begeleider
            </span>
            <p className="text-[8.5pt] font-medium text-[#F7EFE3] mb-2 leading-snug">
              "Welk onderdeel van deze aanpak vraagt voor jou nog de meeste aandacht? Welke concrete eerste stap ga je zetten in je eigen begeleiding of richting je opleiding?"
            </p>
            <div className="border-t border-[#004D60] pt-2 flex justify-between items-center text-[7.5pt] text-[#C8D8DC]">
              <span>Advies, sparren of professionalisering op maat:</span>
              <strong className="text-white font-mono">TG-SO-adviseurs@hr.nl</strong>
            </div>
          </div>

          {/* HR Academie workshopaanbod */}
          <div className="p-2.5 rounded border border-[#EDE6DA] bg-white space-y-1 text-[7.5pt]">
            <strong className="text-[#1C6D68] uppercase tracking-wider block text-[8pt]">Aanbod HR Academie (Aanmelden via HINT):</strong>
            <p>
              • <em>Inclusieve communicatie:</em> https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/inclusieve-communicatie/<br />
              • <em>Meerwaarde uit diversiteit:</em> https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/meerwaarde-uit-diversiteit/<br />
              • <em>Ik als inclusief leider:</em> https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/ik-als-inclusief-leider/
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center">
          <span>Stap 5: (Na)zorg en borging · Hogeschool Rotterdam</span>
          <span className="font-bold">Pagina 6 van 7</span>
        </div>
      </section>

      {/* =========================================================================
          PAGINA 7: BRONNENLIJST VOLGENS APA (7E EDITIE, ALFABETISCH OP VOLGORDE)
          ========================================================================= */}
      <section className="print-page">
        <div>
          {/* Top bar */}
          <div className="flex justify-between items-center pb-2 border-b-2 border-[#003340] mb-3">
            <div>
              <span className="text-[8pt] uppercase font-bold text-[#5A5A55] tracking-wider">Verantwoording &amp; Wetenschappelijke Kaders</span>
              <h2 className="text-[14pt] font-black text-[#003340] leading-tight">
                Bronnenlijst (APA 7de editie)
              </h2>
            </div>
            <span className="text-[8pt] text-[#5A5A55] font-semibold">Alfabetisch geordend</span>
          </div>

          {/* Intro text */}
          <p className="text-[8pt] text-[#5A5A55] mb-3 leading-relaxed">
            Onderstaande bronnen vormen het wetenschappelijke, juridische en beleidsmatige fundament van de Rotterdamse aanpak gelijke stagekansen.
          </p>

          {/* APA Reference List */}
          <div className="space-y-1.5 text-[7.5pt] text-[#003340] leading-relaxed">
            <p className="pl-4 -indent-4">
              Algemene wet gelijke behandeling (AWGB). (1994, 2 maart). <em>Geraadpleegd via wetten.overheid.nl</em>. https://wetten.overheid.nl/BWBR0006502/
            </p>
            <p className="pl-4 -indent-4">
              Anne Frank Stichting. (2022). <em>Als begeleider van stagiairs: E-learning over vooroordelen en discriminatie op de werkvloer</em>. https://www.annefrank.org/nl/elearning/module/begeleider-van-stagiairs/
            </p>
            <p className="pl-4 -indent-4">
              College voor de Rechten van de Mens. (2020). <em>Oordelen en aanbevelingen inzake stagediscriminatie in het beroepsonderwijs</em>. https://www.mensenrechten.nl
            </p>
            <p className="pl-4 -indent-4">
              De Grondwet voor het Koninkrijk der Nederlanden. (2023). <em>Artikel 1: Gelijke behandeling en discriminatieverbod</em>. https://www.denederlandsegrondwet.nl/artikel/1999/1-gelijke-behandeling-en-discriminatieverbod
            </p>
            <p className="pl-4 -indent-4">
              ECHO Expertisecentrum Diversiteitsbeleid. (2024). <em>Stagediscriminatie onder de loep</em> [Audiopodcastserie]. https://echo-net.nl/stagediscriminatie-onder-de-loep/
            </p>
            <p className="pl-4 -indent-4">
              Gemeente Den Haag &amp; Haagse Onderwijsinstellingen. (2022). <em>Handreiking stagediscriminatie voor onderwijsinstellingen en leerwerkbedrijven</em>. Haagse Aanpak. https://haagseaanpak.nl/
            </p>
            <p className="pl-4 -indent-4">
              Hogeschool Inholland. (2021). <em>Stagediscriminatie in het hbo: Een onderzoek naar ervaringen van studenten en handelingsperspectieven van opleidingen</em>. https://www.inholland.nl/onderzoek/publicaties/stagediscriminatie-in-het-hbo
            </p>
            <p className="pl-4 -indent-4">
              Hogeschool Rotterdam. (2023). <em>Gedrags- en integriteitscode (Hogeschoolgidsen, Bijlage 2)</em>. Hogeschool Rotterdam. https://hint.hr.nl/nl/HR/Studie/Publicaties/Hogeschoolgidsen/
            </p>
            <p className="pl-4 -indent-4">
              Hogeschool Rotterdam. (2024). <em>Onderwijs- en Examenregeling (OER): Richtlijnen stagebegeleiding en rechtsbescherming van studenten</em>. Rotterdam: Hogeschool Rotterdam.
            </p>
            <p className="pl-4 -indent-4">
              Kennisplatform Inclusief Samenleven (KIS). (2022). <em>Wat werkt bij het tegengaan van stagediscriminatie? Effectieve interventies voor onderwijs en stagebedrijven</em>. Verwey-Jonker Instituut. https://www.kis.nl/publicatie/studenten-beschermen-tegen-gevolgen-van-stagediscriminatie
            </p>
            <p className="pl-4 -indent-4">
              Ministerie van Onderwijs, Cultuur en Wetenschap. (2022, 13 juli). <em>Manifest ondertekend om stagediscriminatie tegen te gaan</em>. Rijksoverheid. https://www.rijksoverheid.nl/actueel/nieuws/2022/07/13/manifest-ondertekend-om-stagediscriminatie-tegen-te-gaan
            </p>
            <p className="pl-4 -indent-4">
              Ministerie van Onderwijs, Cultuur en Wetenschap. (2023). <em>Nationaal Stagepact mbo en hbo 2023-2027: Samen voor gelijke kansen op stage</em>. Ministerie van OCW.
            </p>
            <p className="pl-4 -indent-4">
              Movisie. (2023). <em>Discriminatie in het onderwijs: Feiten, cijfers en handelingsperspectieven voor docenten</em>. https://www.movisie.nl/
            </p>
            <p className="pl-4 -indent-4">
              Stichting School &amp; Veiligheid. (2020). <em>In gesprek over stagediscriminatie: Handreiking voor stagebegeleiders en docenten in het mbo en hbo</em>. https://www.schoolenveiligheid.nl/
            </p>
            <p className="pl-4 -indent-4">
              Teaching &amp; Learning Center (TLC). (2025). <em>DOORBREKERS: Lespakket stagediscriminatie en inclusief leerklimaat</em>. Hogeschool Rotterdam. https://www.tlcenter.nl/
            </p>
            <p className="pl-4 -indent-4">
              Verwey-Jonker Instituut. (2025). <em>Stagediscriminatie onder de radar: Onderzoek naar onzichtbare uitsluiting en meldingsdrempels bij studenten</em>. https://www.verwey-jonker.nl/publicatie/stagediscriminatie-onder-de-radar/
            </p>
            <p className="pl-4 -indent-4">
              Wet gelijke behandeling op grond van handicap of chronische ziekte (Wgb h/cz). (2003, 3 april). <em>Geraadpleegd via wetten.overheid.nl</em>. https://wetten.overheid.nl/BWBR0014915/
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[7.5pt] text-[#7A756E] border-t border-[#D8D8D4] pt-2 flex justify-between items-center">
          <span>Bronnenlijst (APA 7de editie) · Hogeschool Rotterdam</span>
          <span className="font-bold">Pagina 7 van 7</span>
        </div>
      </section>
    </div>
  );
};
