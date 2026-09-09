import {
  Bouwsteen,
  StepTheme,
  MytheFeitStelling,
  SignaalFragment,
  DialoogReactie,
  OMARegel,
  CasusKeuze,
  NazorgStudent,
} from '../types';

export const STORAGE_KEY = 'elearning_sd_react_v1';

export const stepThemes: Record<number, StepTheme> = {
  1: {
    primary: '#00B0F0',
    lightBg: '#F0F9FD',
    subtle: 'rgba(0, 176, 240, 0.08)',
    border: '#B0E5F8',
    badgeBg: '#E0F4FD',
    badgeText: '#006C96',
    labelColor: '#007AA8'
  },
  2: {
    primary: '#D3104C',
    lightBg: '#FDF2F5',
    subtle: 'rgba(211, 16, 76, 0.06)',
    border: '#F4C2D1',
    badgeBg: '#FCE7EE',
    badgeText: '#B41E4B',
    labelColor: '#B41E4B'
  },
  3: {
    primary: '#003340',
    lightBg: '#EDF3F5',
    subtle: 'rgba(0, 51, 64, 0.06)',
    border: '#C4D5DA',
    badgeBg: '#DCE8EB',
    badgeText: '#003340',
    labelColor: '#003340'
  },
  4: {
    primary: '#FCC200',
    lightBg: '#FEFBEA',
    subtle: 'rgba(252, 194, 0, 0.12)',
    border: '#FCE88F',
    badgeBg: '#FEF4C4',
    badgeText: '#8A6400',
    labelColor: '#8A6400'
  },
  5: {
    primary: '#3AB7B0',
    lightBg: '#EDFAF9',
    subtle: 'rgba(58, 183, 176, 0.08)',
    border: '#B6E8E5',
    badgeBg: '#DAF4F2',
    badgeText: '#1C6D68',
    labelColor: '#1C6D68'
  }
};

export const bouwstenen: Bouwsteen[] = [
  {
    id: 1,
    titel: "Bewustwording en preventie",
    kleur: "#00B0F0",
    inleiding: "Bewustwording en preventie vormen het fundament. Het begint bij het tijdig herkennen en erkennen van stagediscriminatie: weten hóe het zich voordoet bij studenten, bij stagebedrijven én bij jezelf, nog vóórdat situaties escaleren. Preventie start met het doorbreken van de hardnekkige aanname dat 'het bij ons niet speelt'. Als begeleider speel je hierin een sleutelrol: je bereidt studenten voor en reflecteert op eigen blinde vlekken.",
    korteToelichting: "Bewustwording en preventie vormen het fundament. Herken tijdig de signalen van stagediscriminatie en wees alert op eigen aannames.",
    verwachting: [
      {
        tekst: "<strong>Doorbreek de mythe</strong> dat stagediscriminatie bij jouw opleiding of stagebedrijven niet voorkomt. Weet dat het ontbreken van meldingen niet betekent dat er geen probleem is. Studenten melden zelden uit eigen beweging.",
        link: {
          label: "Lees het rapport: Stagediscriminatie onder de radar",
          url: "https://www.verwey-jonker.nl/publicatie/stagediscriminatie-onder-de-radar/",
          type: "bron"
        }
      },
      {
        tekst: "<strong>Ken de vormen van stagediscriminatie.</strong> Er zijn vier hoofdvormen: <strong>directe discriminatie</strong> (bijv. een student wordt afgewezen omdat ze een hoofddoek draagt), <strong>indirecte discriminatie</strong> (een bedrijfsregel die 'geen zichtbare religieuze uitingen' voorschrijft raakt sommige groepen onevenredig hard), <strong>microagressies</strong> (bijv. 'Wat spreek jij goed Nederlands!' tegen iemand die hier geboren is), en <strong>systemische uitsluiting</strong> (stagebedrijven die structureel dezelfde profielen aannemen, ook zonder kwade opzet). Stagediscriminatie raakt aan een grondrecht: <a href='https://www.denederlandsegrondwet.nl/artikel/1999/1-gelijke-behandeling-en-discriminatieverbod' target='_blank' rel='noopener' class='text-[#00A0DB] underline'>Artikel 1 van de Grondwet</a>."
      },
      {
        tekst: "<strong>Herken microagressies.</strong> Verbale en non-verbale uitwisselingen waarin een dader, bewust of onbewust, schade toebrengt: uitsluiting, kwetsende opmerkingen, denigrerende grappen, en subtiele ongelijke behandeling.",
        link: {
          label: "Bekijk video over microagressies",
          url: "#",
          type: "video",
          videoId: "hDd3bzA7450"
        }
      },
      {
        tekst: "<strong>Herken risicogroepen.</strong> Bepaalde groepen studenten hebben structureel vaker met stagediscriminatie te maken: studenten van kleur, studenten met een ondersteuningsbehoefte, vrouwelijke studenten, queer studenten en <a href='https://www.moslimpeil.nl/wp-content/uploads/2025/03/Toolkit-Rapportage_NME-2025_DEF.pdf' target='_blank' rel='noopener' class='text-[#00A0DB] underline'>islamitische studenten</a>. Ook <a href='https://www.movisie.nl/artikel/discriminatie-onderwijs-cijfers-aanpakken-gemeenten' target='_blank' rel='noopener' class='text-[#00A0DB] underline'>10% van de studenten met een functiebeperking</a> ervaart dit."
      },
      {
        tekst: "<strong>Reflecteer op je eigen blinde vlekken.</strong> Iedereen heeft onbewuste aannames en voorkeuren. Wees je bewust van je eigen 'klik' of onderbuikgevoel, en weet dat die je oordeel kunnen kleuren.",
        link: {
          label: "Test je eigen onbewuste oordelen (Harvard IAT)",
          url: "https://implicit.harvard.edu/implicit/netherlands/takeatest.html",
          type: "zelfcheck"
        }
      },
      {
        tekst: "<strong>Bereid studenten voor in de klas.</strong> Preventie is een van de belangrijkste stappen: bespreek stagediscriminatie vóórdat studenten stage gaan lopen. Informeer hen over rechten, plichten en meldroutes, en versterk hun copingvaardigheden.",
        link: {
          label: "Handvatten voor preventie in de klas",
          url: "#",
          type: "tip",
          inline: `<div class="space-y-2.5 text-sm text-[#003340]">
            <p><strong>Veilige leeromgeving:</strong> Maak vooraf duidelijke gespreksregels (luisteren zonder oordeel, vertrouwelijkheid) zodat studenten zich vrij voelen ervaringen of twijfels te delen.</p>
            <p><strong>Relevant voor iedereen:</strong> Benader het als professionele beroepsvaardigheid en bondgenootschap. Ook studenten die zelf geen discriminatie ervaren, leren signalen herkennen en kunnen als collega op de werkvloer het verschil maken.</p>
            <p><strong>Doorbreek handelingsverlegenheid:</strong> Je hoeft geen pasklare oplossingen te hebben. Het onderwerp aankaarten en laten weten dat de opleiding achter hen staat, verlaagt direct de drempel.</p>
            <div class="pt-2 border-t border-[#003340]/10 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span class="text-[#5A5A55]">Praktische lesvormen:</span>
              <a href="https://www.tlcenter.nl/wp-content/uploads/2025/12/Doorbrekers-Lespakket.pdf" target="_blank" rel="noopener" class="text-[#00A0DB] hover:underline font-semibold inline-flex items-center gap-1">Download lespakket DOORBREKERS (PDF) &rarr;</a>
            </div>
          </div>`
        }
      }
    ],
    uitklaps: []
  },
  {
    id: 2,
    titel: "Signalering",
    kleur: "#D3104C",
    inleiding: "Signaleren gaat verder dan wachten tot een student iets meldt. De meeste studenten komen niet uit zichzelf, uit schaamte, angst voor studievertraging, of omdat ze denken dat het 'erbij hoort'. Als begeleider heb jij de taak om actief te kijken en te luisteren in elke fase: bij het zoeken naar een stage, tijdens de sollicitatieperiode en gedurende de stage zelf. Extra alertheid is nodig bij stille, minder mondige studenten en bij kwetsbare groepen.",
    korteToelichting: "Signaleren gaat verder dan wachten tot een student iets meldt. De meeste studenten komen niet uit zichzelf door schaamte of angst voor studievertraging.",
    verwachting: [
      {
        tekst: "<strong>Signaleer in de sollicitatiefase.</strong> Let op studenten die opvallend veel afwijzingen krijgen, niet op gesprek worden uitgenodigd, of geconfronteerd worden met onredelijke verzoeken (bijvoorbeeld de eis om een hoofddoek af te doen).",
        link: {
          label: "Gespreksstarters voor de sollicitatiefase",
          url: "#",
          type: "tip",
          inline: `<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1 text-sm text-[#003340]">
            <p>"Je hebt al bij best wat bedrijven gesolliciteerd. Hoe gaat dat voor je?"</p>
            <p>"Was er iets in de reacties die je kreeg, of juist niet kreeg, dat je opviel?"</p>
            <p>"Werd er iets gevraagd of gezegd tijdens het kennismakingsgesprek dat je raar vond?"</p>
            <p>"Zijn er momenten geweest dat je dacht: dit had een klasgenoot van mij anders ervaren?"</p>
          </div>`
        }
      },
      {
        tekst: "<strong>Signaleer tijdens de stage.</strong> Let op ongelijke behandeling, uitsluiting uit teamactiviteiten, ongepaste grappen en zogenaamd onschuldige opmerkingen over iemands achtergrond.",
        link: {
          label: "Gespreksstarters tijdens de stage",
          url: "#",
          type: "tip",
          inline: `<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1 text-sm text-[#003340]">
            <p>"Hoe voel je je in het team? Voel je je gezien en serieus genomen?"</p>
            <p>"Doe je mee met de dingen die collega's (buiten werktijd) doen?"</p>
            <p>"Is er iets gebeurd deze week waarvan je achteraf dacht: dat voelde niet goed?"</p>
            <p>"Wat zou jou nu het meeste helpen: erover praten, een aanpak of dat ik meega in een gesprek?"</p>
          </div>`
        }
      },
      {
        tekst: "<strong>Signaleer subtiele uitsluiting en microagressies</strong> op de werkvloer. Deze zijn vaak onzichtbaar voor wie er niet op let. Maak studenten hier ook bewust van.",
        link: {
          label: "Bekijk voorbeelden van subtiele uitsluiting",
          url: "#",
          type: "verdieping",
          inline: `<ul class="list-disc pl-4 space-y-1 text-sm text-[#003340]">
            <li>Naam verkeerd blijven uitspreken.</li>
            <li>Overschakelen op vakjargon die (nog) niet wordt beheerst, waardoor iemand niet kan deelnemen aan het gesprek.</li>
            <li>Niet uitgenodigd worden bij sociale activiteiten zoals lunch, koffiehalen of de vrijdagmiddagborrel.</li>
          </ul>`
        }
      },
      {
        tekst: "<strong>Vraag actief door.</strong> Stel vragen als 'Hoe voel je je in het team?' en 'Voel je je gezien?' Ook werkdruk, sfeer en sociale veiligheid horen bij dit gesprek."
      },
      {
        tekst: "<strong>Ken de meldingsdrempels.</strong> Studenten aarzelen om te melden vanwege angst voor studievertraging, schaamte of de gedachte dat hun melding tóch niet serieus wordt genomen. Ze melden eerder bij iemand die zij persoonlijk kennen en vertrouwen, die kennis heeft van stagediscriminatie en in wie zij zich kunnen herkennen. Voor jouw rol betekent dit: bouwen aan een vertrouwensrelatie is een preventieve handeling."
      }
    ],
    uitklaps: [
      {
        type: 'bron',
        titel: 'Stagediscriminatie herkennen',
        url: 'https://www.tlcenter.nl/stagediscriminatie-herkennen/',
        inhoud: 'Overzicht van vormen van stagediscriminatie en hoe je ze onderscheidt van kansenongelijkheid.'
      },
      {
        type: 'bron',
        titel: 'Stagediscriminatie bespreekbaar maken',
        url: 'https://www.kis.nl/publicatie/studenten-beschermen-tegen-gevolgen-van-stagediscriminatie',
        inhoud: 'Praktische handvatten om het gesprek over stagediscriminatie te openen met studenten en collega\'s.'
      }
    ]
  },
  {
    id: 3,
    titel: "Gespreksvoering",
    kleur: "#003340",
    inleiding: "Als een student stagediscriminatie ervaart, ben jij vaak het eerste aanspreekpunt. Hoe je dat gesprek voert, bepaalt of de student zich gehoord voelt of juist afhaakt. Het begint met het creëren van een veilige ruimte, luisteren zonder oordeel, zonder de ervaring te bagatelliseren en zonder direct naar bewijs te zoeken. De student houdt de regie: over het verhaal, over vervolgstappen, en over de vraag of er een formele melding wordt gedaan.",
    korteToelichting: "Als een student stagediscriminatie ervaart, ben jij vaak het eerste aanspreekpunt. Hoe je dat gesprek voert, bepaalt of de student zich gehoord voelt of juist afhaakt.",
    verwachting: [
      {
        tekst: "<strong>Benader proactief.</strong> Je wacht niet af. Bij een signaal neem jij het initiatief voor het gesprek, ook als de student een ervaring wegwuift, relativeert of als ongemakkelijk benoemt.",
        link: {
          label: "Bereid je voor op het gesprek",
          url: "https://www.tlcenter.nl/wp-content/uploads/2025/11/Het-gesprek-aangaan-met-de-student-Werkprogramma-stagediscriminatie.pdf",
          type: "download"
        }
      },
      {
        tekst: "<strong>Neem positie in.</strong> Spreek je uit tegen stagediscriminatie. Discriminatie is nooit de schuld van de student. De student hoeft het niet alleen 'professioneel' op te lossen."
      },
      {
        tekst: "<strong>Stel jezelf de juiste vragen vóór het gesprek.</strong> Het is goed om bewust te zijn van je eigen positie, ervaringen en aannames voordat je in gesprek gaat met de student.",
        link: {
          label: "Vragenlijst: bereid jezelf voor",
          url: "#",
          type: "zelfcheck",
          inline: `<ul class="list-disc pl-4 space-y-1.5 text-sm text-[#003340]">
            <li>Ben ik de aangewezen persoon om dit gesprek te voeren?</li>
            <li>Begrijp ik wat de student meemaakt wanneer het gaat om discriminatie?</li>
            <li>Kan ik spreken uit eigen ervaring, of heb ik deze ervaring niet?</li>
            <li>Heb ik al eerder meegemaakt dat een student is gediscrimineerd en hoe reageerde ik daarop?</li>
            <li>Ben ik in staat om het gevoel van achterstelling van de student serieus te nemen en kan ik mijn eigen oordeel uitstellen?</li>
            <li>Kan ik vanuit een open houding luisteren en de juiste vragen stellen?</li>
          </ul>
          <p class="text-xs text-[#7A756E] mt-2">Bron: <a href="https://www.schoolenveiligheid.nl/wp-content/uploads/2020/09/In-gesprek-over-stagediscriminatie-School-Veiligheid.pdf" target="_blank" rel="noopener" class="underline">School en Veiligheid (2020)</a></p>`
        }
      },
      {
        tekst: "<strong>Verken zonder oordeel.</strong> Creëer een veilige ruimte, luister, valideer wat de student vertelt. Benoem dat alles vertrouwelijk is binnen de hogeschoolkaders. De eerste stap hoeft geen formele melding te zijn."
      },
      {
        tekst: "<strong>Vermijd twee bekende valkuilen.</strong> Eén: de schuld bij de student leggen ('je moet je professioneler opstellen'). Twee: waarheidsvinding vóór empathie plaatsen ('wat is er precies gebeurd?')."
      },
      {
        tekst: "<strong>Beheers basale gesprekstechnieken.</strong> Pas principes als NIVEA, OMA thuislaten en doorvragen zonder oordeel toe.",
        link: {
          label: "Wat betekenen NIVEA en OMA? Bekijk voorbeelden",
          url: "#",
          type: "verdieping",
          inline: `<div class="space-y-2 text-sm text-[#003340]">
            <p><strong>NIVEA</strong>: <em>Niet Invullen Voor Een Ander</em>. Vul niet in wat de ander bedoelt, denkt of voelt. Vraag het na. <a href="https://gesprekstechnieken.com/nivea/" target="_blank" rel="noopener" class="text-[#00A0DB] underline">Meer uitleg</a>.</p>
            <p><strong>OMA thuislaten</strong>: <em>Oordeel, Mening en Advies</em> uitstellen. Eerst luisteren, dan pas positioneren. Advies te vroeg sluit het gesprek. <a href="https://tijdwinst.com/laat-oma-thuis/" target="_blank" rel="noopener" class="text-[#00A0DB] underline">Meer uitleg</a>.</p>
            <p><strong>Doorvragen zonder oordeel</strong>: "Hoe was dat voor jou?" opent; "Waarom heb je niks gezegd?" eist verantwoording.</p>
          </div>`
        }
      },
      {
        tekst: "<strong>Herken hoe de student reageert.</strong> Studenten die discriminatie ervaren reageren elk op hun eigen manier. Door de copingstrategie te herkennen, begrijp je beter wat er speelt en hoe je het gesprek het beste kunt starten.",
        link: {
          label: "Herken de copingstrategie van de student",
          url: "#",
          type: "verdieping",
          inline: `<div class="space-y-2 text-sm text-[#003340]">
            <p><strong>Polariserend</strong>: student confronteert scherp, vijandig, agressief. Signaal: boosheid of heftige reactie op kleine dingen.</p>
            <p><strong>Vermijdend</strong>: student gaat de confrontatie niet aan, trekt zich terug. Signaal: stilte, afhaken, steeds minder aanwezig.</p>
            <p><strong>Conformerend</strong>: student past zich aan, doet extra zijn best. Signaal: overcompenseren, zichzelf wegcijferen.</p>
            <p><strong>Verbindend</strong>: student probeert positief vooroordelen te ontkrachten, blijft rustig en duidelijk. Signaal: actief bruggen bouwen.</p>
            <p class="text-xs text-[#5A5A55] italic mb-2">Geen enkele strategie is de beste. Ze kunnen elkaar afwisselen. Jouw rol is herkennen, niet beoordelen.</p>
            <p class="text-xs text-[#7A756E] border-t border-[#E8E4DA] pt-1.5">Bron: <a href="https://www.schoolenveiligheid.nl/wp-content/uploads/2020/09/In-gesprek-over-stagediscriminatie-School-Veiligheid.pdf" target="_blank" rel="noopener" class="underline text-[#00A0DB] hover:text-[#007BA8]">School en Veiligheid (2020)</a></p>
          </div>`
        }
      },
      {
        tekst: "<strong>Herken de meldingsdrempels.</strong> Studenten aarzelen vaak om stagediscriminatie te melden door angst voor studievertraging, schaamte of de gedachte dat hun melding niet serieus wordt genomen. Ze melden pas als er een vertrouwensrelatie is; vraag actief naar deze drempels en verken samen wat de student nodig heeft om zich veilig te voelen.",
        link: {
          label: "Onderzoek: wat maakt een meldroute laagdrempelig?",
          url: "https://www.verwey-jonker.nl/publicatie/hoe-mbo-studenten-stagediscriminatie-willen-melden/",
          type: "bron"
        }
      }
    ],
    uitklaps: [
      {
        type: 'bron',
        titel: 'Anne Frank Stichting: Als begeleider van stagiairs',
        url: 'https://www.annefrank.org/nl/elearning/module/begeleider-van-stagiairs/',
        inhoud: 'In drie fragmenten vertellen studenten en docenten over discriminatie voorafgaand en tijdens de stage en wat dat voor hen betekent.'
      }
    ]
  },
  {
    id: 4,
    titel: "Begeleiding",
    kleur: "#FCC200",
    inleiding: "Als het gesprek met de student is gevoerd, volgt de vraag: wat is nu de beste vervolgstap? De student houdt de regie, en diens sociale veiligheid en welzijn staan altijd voorop. Als begeleider sta je er niet alleen voor: je handelt met de rugdekking van de hogeschool, je opleiding en je manager. Wil de student zelf in gesprek met de stageplek, gaan jullie samen, of wil de student liever dat jij eerst bemiddelt? Een driehoeksgesprek kan spannend zijn; de student mag er altijd voor kiezen om daar niet bij aanwezig te zijn.",
    korteToelichting: "Als het gesprek met de student is gevoerd, volgt de vraag: wat is nu de beste vervolgstap? De student houdt de regie, met actieve rugdekking vanuit de opleiding en de hogeschool.",
    verwachting: [
      {
        tekst: "<strong>Weet dat je rugdekking hebt: het beleid staat achter je.</strong> Je handelt als begeleider niet op persoonlijke titel, maar vanuit de gezamenlijke norm van de hogeschool. In de Gedrags- en integriteitscode (bijlage 2 van de hogeschoolgids van jouw opleiding) is respect en gelijke behandeling het uitgangspunt voor iedereen. Deze code geeft jou een stevig fundament om grenzen te stellen en signalen serieus op te pakken richting een stageorganisatie.",
        link: {
          label: "Gedrags- en integriteitscode in de hogeschoolgids (bijlage 2)",
          url: "https://hint.hr.nl/nl/HR/Studie/Publicaties/Hogeschoolgidsen/",
          type: "bron"
        }
      },
      {
        tekst: "<strong>Zoek gerust ruggenspraak met je stagecoördinator of opleidingsmanager.</strong> Het is aan te bevelen om de situatie tijdig te delen, zodat de opleiding op de hoogte is en met je mee kan denken. Maakt de student zich zorgen over vertrouwelijkheid of eventuele consequenties op de stageplek? Bespreek de casus dan <em>geanonimiseerd</em>. Zo waarborg je de privacy en het vertrouwen van de student, terwijl jij als begeleider rugdekking, advies en ruggespraak krijgt."
      },
      {
        tekst: "<strong>Bewaak je professionele onafhankelijkheid.</strong> Langdurige relaties met stageorganisaties of angst om stageplekken te verliezen mogen nóóit leiden tot het vergoelijken van signalen. Het belang van de student gaat vóór de relatie met het bedrijf."
      },
      {
        tekst: "<strong>Handel oplossingsgericht.</strong> Zorg dat de student zo min mogelijk de dupe is, ook als de stage niet gecontinueerd kan worden. Denk aan een nieuwe stageplek of een vervangende opdracht met behoud van al gelopen stageweken."
      },
      {
        tekst: "<strong>Verwijs door waar nodig.</strong> Je weet wanneer de stagebegeleider, -coördinator, de vertrouwenspersoon, het centrale meldpunt of een extern meldpunt aan de beurt is. De routekaart geeft overzicht van de stappen die je kunt zetten.",
        link: {
          label: "Routekaart en rollenindeling volgt",
          url: null,
          type: "komtnog"
        }
      },
      {
        tekst: "<strong>Bereid met de student het gesprek voor</strong> als de student het gesprek met degene die discrimineerde op de stageplek zelf wil voeren. Help met de voorbereiding en oefen het gesprek uitvoerig samen.",
        link: {
          label: "Tips voor de student om op de stageplek het gesprek te voeren",
          url: "#",
          type: "tip",
          inline: `<p class="text-sm text-[#5A5A55] mb-2">De persoon die de student aanspreekt is niet voorbereid. De boodschap kan onverwacht binnenkomen. Het is niet altijd opzettelijk. Oefen vooraf samen:</p>
          <ul class="list-disc pl-4 space-y-1 text-sm text-[#003340]">
            <li><strong>Vraag toestemming:</strong> "Ik zit ergens mee, kan ik dat met je bespreken?"</li>
            <li><strong>Kies één concreet voorval:</strong> Begin met wat er feitelijk is gebeurd, niet met interpretaties.</li>
            <li><strong>Gebruik de ik-boodschap:</strong> "Ik vond het gisteren vervelend om te horen dat…"</li>
            <li><strong>Geef aan wat het met je doet:</strong> "Toen ik dat hoorde/meemaakte, voelde ik…"</li>
            <li><strong>Wees niet bang voor stilte:</strong> Geef de ander ruimte om na te denken en een antwoord te formuleren.</li>
            <li><strong>Luister naar de reactie:</strong> Als je het niet begrijpt, zeg dat gerust. Herhaal wat je hebt gehoord.</li>
            <li><strong>Vraag om het gewenste gedrag:</strong> "Ik zou het prettig vinden wanneer je vanaf nu…"</li>
            <li><strong>Wacht de reactie af</strong> en rond het gesprek af: vraag of het oké was om dit te bespreken.</li>
          </ul>
          <p class="text-xs text-[#7A756E] mt-2">Bron: <a href="https://www.schoolenveiligheid.nl/wp-content/uploads/2020/09/In-gesprek-over-stagediscriminatie-School-Veiligheid.pdf" target="_blank" rel="noopener" class="underline text-[#00A0DB] hover:text-[#007BA8]">School en Veiligheid (2020)</a></p>`
        }
      },
      {
        tekst: "<strong>Bereid je eigen rol voor.</strong> Een gesprek met een stagebieder kan beladen zijn, zeker als belangen botsen. Bespreek je insteek en doelen vooraf kort met een collega of je manager. Zo bewaak je je professionele onafhankelijkheid en ga je met een heldere focus het gesprek in: als steun voor de student en bewaker van een veilig leerklimaat."
      },
      {
        tekst: "<strong>Voer een driehoeksgesprek alleen met instemming van de student.</strong> Je bent daarin procesbewaker en ondersteuner van de student, geen aanklager of verdediger van de stageplek. Houd je opleidingsmanager en stagecoördinator op de hoogte van de afspraken die worden gemaakt."
      }
    ],
    uitklaps: [
      {
        type: 'academie',
        titel: 'HR Academie: Inclusieve communicatie',
        url: 'https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/inclusieve-communicatie/',
        inhoud: 'Workshop over taal, aannames en inclusieve gespreksvoering.'
      },
      {
        type: 'academie',
        titel: 'HR Academie: Meerwaarde uit diversiteit',
        url: 'https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/meerwaarde-uit-diversiteit/',
        inhoud: 'Workshop over het benutten van diversiteit en creëren van een veilige leercultuur.'
      },
      {
        type: 'academie',
        titel: 'HR Academie: Ik als inclusief leider',
        url: 'https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/ik-als-inclusief-leider/',
        inhoud: 'Onderzoek je eigen leiderschap, voorbeeldrol en inclusieve vaardigheden.'
      },
      {
        type: 'bron',
        titel: 'Hogeschoolgids & Gedrags- en integriteitscode',
        url: 'https://hint.hr.nl/nl/HR/Studie/Publicaties/Hogeschoolgidsen/',
        inhoud: 'Bijlage 2 van de gids: iedereen in zijn waarde laten en gelijk behandelen (respect).'
      }
    ]
  },
  {
    id: 5,
    titel: "(Na)zorg",
    kleur: "#3AB7B0",
    inleiding: "Met het oplossen van een incident is de zaak niet afgerond. Studenten hebben vaak nabranders: emotioneel, praktisch, of in hun vertrouwen in de opleiding of het stagebedrijf. Daarnaast is elke casus ook informatie. Het is een signaal dat je terug moet koppelen zodat toekomstige studenten beter beschermd worden. Nazorg is dus tweeledig: individueel (voor déze student) en structureel (voor volgende studenten).",
    korteToelichting: "Met het oplossen van een incident is de zaak niet afgerond. Studenten hebben vaak nabranders: emotioneel, praktisch, of in hun vertrouwen in de opleiding of het stagebedrijf.",
    verwachting: [
      {
        tekst: "<strong>Bied nazorg aan de student.</strong> Binnen twee à drie weken na het incident neem je opnieuw contact op. Hoe gaat het nu? Zijn er nabranders? Is er aanvullende ondersteuning nodig (zoals via <a href='https://www.hogeschoolrotterdam.nl/voorlichting/begeleiding-en-voorzieningen/hulp-bij-studie/mijn-studie/studieondersteuners/decaan/' target='_blank' rel='noopener' class='text-[#00A0DB] underline'>het decanaat</a>)? <a href='https://www.kis.nl/artikel/discriminatie-en-de-gevolgen-voor-welzijn-en-gezondheid' target='_blank' rel='noopener' class='text-[#00A0DB] underline'>Discriminatie meemaken tast de gezondheid ernstig aan</a>, het effect is niet weg zodra het incident voorbij is.",
        link: {
          label: "Studenten weerbaarder maken tegen de gevolgen (KIS)",
          url: "https://www.kis.nl/publicatie/studenten-beschermen-tegen-gevolgen-van-stagediscriminatie",
          type: "bron"
        }
      },
      {
        tekst: "<strong>Koppel signalen terug naar het stagebureau en de opleiding.</strong> Deel wat er is voorgevallen en anonimiseer vertrouwelijke details van de student wanneer deze daarom vraagt. Zonder terugkoppeling blijft een incident geïsoleerd en leer je als organisatie niets."
      },
      {
        tekst: "<strong>Evalueer de samenwerking met het stagebedrijf.</strong> Bij ernstige of herhaalde signalen start eerst een escalatie waarin de onderwijsmanager of opleidingsdirecteur het gesprek aangaat met de directie van het bedrijf. Blijft verandering uit of spelen er meerdere casussen, dan kan de opleiding besluiten de samenwerking op te schorten of de organisatie op een 'rode lijst' te plaatsen om toekomstige studenten te beschermen."
      },
      {
        tekst: "<strong>Leg alles vast in het stagebureau-dossier.</strong> Wat niet wordt vastgelegd, wordt vergeten. Dit geldt ook voor 'kleine' signalen die op zichzelf lijken te staan, zodat een betrouwbare dossieropbouw ontstaat over stageorganisaties."
      }
    ],
    uitklaps: []
  }
];

export const stellingenMF: MytheFeitStelling[] = [
  {
    stelling: '"Bij onze opleiding hebben we een heel open sfeer en krijgen we nooit klachten. Dus bij ons speelt dit probleem niet."',
    antwoord: 'mythe',
    toelichting: 'Uit het rapport Stagediscriminatie onder de radar blijkt dat veel signalen onder de oppervlakte blijven. Stilte betekent niet dat alles goed gaat. Onderzoek laat zien dat onderwijsprofessionals stagediscriminatie breed willen aanpakken, maar tegelijk vaak denken dat het probleem zich bij hen niet voordoet. Zonder erkenning van het probleem komt er geen sociale norm en geen beleid.'
  },
  {
    stelling: '"De gemiddelde hbo-student met een migratieachtergrond doet er langer over om een stage of baan te bemachtigen dan een hbo-student zonder migratieachtergrond."',
    antwoord: 'feit',
    toelichting: 'Dit is helaas een feit. Onderzoek toont dit structureel aan. Bepaalde groepen studenten lopen een meetbaar en statistisch significant hoger risico op afwijzing en vertraging.'
  },
  {
    stelling: '"Stagediscriminatie in de klas bespreken heeft vooral zin voor studenten die er zelf een verhoogd risico op lopen."',
    antwoord: 'mythe',
    toelichting: 'Preventie in de klas is van belang voor álle studenten. Studenten die er zelf minder snel mee te maken krijgen, leren signalen herkennen en kunnen als bondgenoot optreden op de werkvloer. Bovendien verlaagt een open gesprek in de hele groep de drempel om stagediscriminatie te melden.'
  }
];

export const fragmenten: SignaalFragment[] = [
  {
    naam: 'Audio 1. Queer-feest',
    audioSrc: '/audio/fragment-1.mp3',
    stemType: 'mannelijk',
    tekst: 'De opdrachten zijn echt wel heel tof. Maar de sfeer tijdens de pauzes is soms wel lastig. Vorige week hadden we het over het weekend. Ik vertelde dat ik met mijn vriend naar een queer-feest was geweest. En toen, toen viel het ineens helemaal stil. En later hoorde ik ook een collega bij de koffieautomaat lachend zeggen: "Tegenwoordig moet dat soort types ook overal een podium krijgen hoor, doodvermoeiend." Ik dacht alleen maar: ja, laat maar, ach. Ze zullen het vast niet zo kwaad bedoelen. Ik houd me vanaf nu gewoon een beetje op de achtergrond. Ik wil hier gewoon mijn uren maken.',
    sentenceTimings: [
      { start: 0.0, end: 2.8 },
      { start: 2.8, end: 6.5 },
      { start: 6.5, end: 9.2 },
      { start: 9.2, end: 12.8 },
      { start: 12.8, end: 16.5 },
      { start: 16.5, end: 26.5 },
      { start: 26.5, end: 30.0 },
      { start: 30.0, end: 32.5 },
      { start: 32.5, end: 35.5 },
      { start: 35.5, end: 38.42 }
    ],
    signalen: [
      { fragment: 'toen, toen viel het ineens helemaal stil.', uitleg: 'Sociale uitsluiting: een plotselinge ijzige stilte na een uiting over seksuele geaardheid/identiteit geeft het signaal dat het onderwerp niet geaccepteerd wordt.' },
      { fragment: 'Tegenwoordig moet dat soort types ook overal een podium krijgen hoor, doodvermoeiend.', uitleg: 'Directe homofobe microagressie: het denigreren en afdoen van iemands identiteit als "doodvermoeiend" en ongewenst.' },
      { fragment: 'Ze zullen het vast niet zo kwaad bedoelen.', uitleg: 'Zelf-bagatellisering door de student: een bekende copingreactie en meldingsdrempel om de situatie leefbaar te houden.' },
      { fragment: 'Ik houd me vanaf nu gewoon een beetje op de achtergrond. Ik wil hier gewoon mijn uren maken.', uitleg: 'Vermijdende copingstrategie: de student trekt zich sociaal terug en voelt zich niet meer veilig om zichzelf te zijn.' }
    ]
  },
  {
    naam: 'Audio 2. Kantoortuin & ADHD',
    audioSrc: '/audio/fragment-2.mp3',
    stemType: 'vrouwelijk',
    tekst: 'Ja, die kantoortuin waar ik zit, is echt superdruk en chaotisch. Kijk, omdat ik ADHD heb, raak ik gewoon best snel overprikkeld. Dus ik heb aan mijn stagebegeleider gevraagd of ik met een koptelefoon mocht werken, of af en toe even in een stilteruimte mag zitten. Hij keek mij toen echt heel raar aan. Hij zei: "HBO\'ers horen gewoon stressbestendig te zijn hoor. Als je nu al dit soort aparte privileges nodig hebt, dan vraag ik me af of je dit niveau later in het echte werkveld wel aankunt." Nou, je kunt je voorstellen dat ik die koptelefoon dus echt niet meer durf op te zetten. En ik ben eigenlijk ook als de dood dat ze mijn stage vroegtijdig beëindigen, en dat ik dan studievertraging oploop.',
    sentenceTimings: [
      { start: 0.0, end: 5.5 },
      { start: 5.5, end: 10.5 },
      { start: 10.5, end: 17.5 },
      { start: 17.5, end: 21.0 },
      { start: 21.0, end: 25.5 },
      { start: 25.5, end: 34.0 },
      { start: 34.0, end: 39.5 },
      { start: 39.5, end: 46.72 }
    ],
    signalen: [
      { fragment: 'Hij keek mij toen echt heel raar aan.', uitleg: 'Non-verbale afkeuring en stigmatisering bij een hulpvraag over een functiebeperking.' },
      { fragment: 'HBO\'ers horen gewoon stressbestendig te zijn hoor.', uitleg: 'Miskenning van neurodiversiteit: overprikkeling verwarren met een gebrek aan HBO-geschiktheid of stressbestendigheid.' },
      { fragment: 'dit soort aparte privileges nodig hebt', uitleg: 'Framing van een wettelijk verplichte redelijke aanpassing als een "onverdiend privilege".' },
      { fragment: 'vraag ik me af of je dit niveau later in het echte werkveld wel aankunt.', uitleg: 'Discriminatoire twijfel zaaien over iemands capaciteiten en professionele toekomst puur op grond van een beperking.' },
      { fragment: 'die koptelefoon dus echt niet meer durf op te zetten.', uitleg: 'Zelfcensuur uit onveiligheid: de student durft een noodzakelijke voorziening niet meer te benutten.' },
      { fragment: 'als de dood dat ze mijn stage vroegtijdig beëindigen, en dat ik dan studievertraging oploop.', uitleg: 'De grootste meldingsdrempel: angst voor het verliezen van de stage en het oplopen van acute studievertraging.' }
    ]
  }
];

export const opdracht3DialoogA = {
  studentTekst: 'Ik heb geen zin meer om te gaan. Elke keer als ik iets voorstel in de teamvergadering praat mijn stagebegeleider er dwars doorheen, terwijl hij naar Mark wel luistert. Vorige week zei hij: "Ah, dat is toch niet echt jouw ding, hè, dat cijferwerk." Ik weet niet of het discriminatie is, maar het voelt gewoon rot.',
  reacties: [
    {
      tekst: 'Weet je zeker dat het aan discriminatie ligt? Misschien vindt hij Mark gewoon beter in cijfers. Zou het niet aan iets anders kunnen liggen?',
      effect: 'sluit' as const,
      uitleg: 'De student klapt dicht. Waarheidsvinding wordt vóór empathie geplaatst. De student voelt zich niet geloofd en zal minder snel opnieuw komen praten.'
    },
    {
      tekst: 'Wat vervelend dat je dat zo ervaart. Vertel eens meer: wat gebeurde er precies, en hoe ging het bij jou vanbinnen?',
      effect: 'open' as const,
      uitleg: 'De student voelt zich gehoord. Erkenning gaat vóór bewijs. Door open door te vragen krijg je ook meer feiten op tafel, en houdt de student de regie.'
    }
  ]
};

export type CategorieGesprek = 'goede_reactie' | 'oma' | 'nivea';

export interface SleepKaart {
  id: string;
  zin: string;
  categorie: CategorieGesprek;
  valkuilType?: string;
  label: string;
  uitleg: string;
}

export const categorieDefinities: Record<CategorieGesprek, { titel: string; afkorting: string; beschrijving: string; kleur: string; bgKleur: string; borderKleur: string }> = {
  goede_reactie: {
    titel: 'Goede reactie',
    afkorting: 'Open & Empathisch',
    beschrijving: 'Valideert het gevoel, stelt open vragen en laat de regie bij de student.',
    kleur: '#217772',
    bgKleur: '#EDFAF9',
    borderKleur: '#3AB7B0'
  },
  oma: {
    titel: 'OMA',
    afkorting: 'Oordeel, Mening, Advies',
    beschrijving: 'Zaait twijfel, oordeelt, ventileert eigen meningen of geeft te snel ongevraagd advies.',
    kleur: '#B41E4B',
    bgKleur: '#FDEEF3',
    borderKleur: '#D3104C'
  },
  nivea: {
    titel: 'NIVEA',
    afkorting: 'Niet Invullen Voor Een Ander',
    beschrijving: 'Vult intenties of aannames in voor een ander, of neemt overhaast de regie over.',
    kleur: '#C26A00',
    bgKleur: '#FFF6E5',
    borderKleur: '#FCC200'
  }
};

export const sleepKaartenGesprek: SleepKaart[] = [
  {
    id: 'k1',
    zin: 'Wat vervelend dat je dit zo ervaart. Vertel eens, wat gebeurde er precies?',
    categorie: 'goede_reactie',
    label: 'Empathie & Erkenning',
    uitleg: 'De begeleider valideert direct het gevoel van de student zonder te oordelen of in te vullen. De open vraag geeft de student ruimte om haar verhaal te doen.'
  },
  {
    id: 'k2',
    zin: 'Maar weet je zeker dat het zo bedoeld was?',
    categorie: 'oma',
    valkuilType: 'Oordeel (twijfel zaaien)',
    label: 'Oordeel (OMA)',
    uitleg: 'Twijfel zaaien over de ervaring van de student. Dit legt de bewijslast bij de student en bagatelliseert de situatie, waardoor de student direct dichtklapt.'
  },
  {
    id: 'k3',
    zin: 'Ik ken je stagebegeleider al jaren, dat is echt een aardige vent.',
    categorie: 'oma',
    valkuilType: 'Mening als tegenbewijs',
    label: 'Mening (OMA)',
    uitleg: 'Een persoonlijke mening als tegenbewijs gebruiken ondermijnt het verhaal van de student en plaatst de relatie met het bedrijf boven de veiligheid van de student.'
  },
  {
    id: 'k4',
    zin: 'Volgens mij moet je je gewoon iets professioneler opstellen, dan lost dit zich vanzelf op.',
    categorie: 'oma',
    valkuilType: 'Ongevraagd advies',
    label: 'Ongevraagd advies (OMA)',
    uitleg: 'Ongevraagd advies dat de schuld bij de student legt ("je moet je professioneler opstellen"). De student voelt zich niet serieus genomen.'
  },
  {
    id: 'k5',
    zin: 'Weet je wat, ik bel morgen direct even met hem, dan is het opgelost.',
    categorie: 'nivea',
    valkuilType: 'Overnemen zonder overleg',
    label: 'Invullen & overnemen (NIVEA)',
    uitleg: 'Niet Invullen Voor Een Ander: de begeleider neemt overhaast de regie over zonder de student te vragen wat zij zelf wil. De student verliest de controle over haar eigen proces.'
  },
  {
    id: 'k6',
    zin: 'Hij bedoelt het vast als een grapje hoor, trek het je niet zo aan.',
    categorie: 'nivea',
    valkuilType: 'Aanname doen over intentie',
    label: 'Invullen van intentie (NIVEA)',
    uitleg: 'Invullen voor de ander: de begeleider vult in wat de intentie van de ander was en vraagt de student haar gevoel te negeren.'
  }
];

export const opdracht3OMA = {
  zinnen: [
    {
      zin: 'Wat vervelend dat je dit zo ervaart.',
      isValkuil: false,
      principe: 'Empathie & Erkenning',
      uitleg: 'Goed opgemerkt: dit is juist een effectieve, open reactie. De begeleider valideert het gevoel van de student zonder te oordelen of in te vullen. Hierdoor voelt de student zich gehoord en durft door te praten.'
    },
    {
      zin: 'Maar weet je zeker dat het zo bedoeld was?',
      isValkuil: true,
      principe: 'Oordeel (OMA)',
      uitleg: 'Twijfel zaaien over de ervaring van de student. Dit legt de bewijslast bij de student en bagatelliseert de situatie, waardoor de student direct dichtklapt.'
    },
    {
      zin: 'Ik ken je stagebegeleider al jaren, dat is echt een aardige vent.',
      isValkuil: true,
      principe: 'Mening (OMA)',
      uitleg: 'Een persoonlijke mening als tegenbewijs gebruiken ondermijnt het verhaal van de student en plaatst de relatie met het bedrijf boven de veiligheid van de student.'
    },
    {
      zin: 'Volgens mij moet je je gewoon iets professioneler opstellen, dan lost dit zich vanzelf op.',
      isValkuil: true,
      principe: 'Ongevraagd advies (OMA)',
      uitleg: 'Ongevraagd advies dat de schuld bij de student legt ("je moet je professioneler opstellen"). De student voelt zich niet serieus genomen.'
    },
    {
      zin: 'Weet je wat, ik bel morgen even met hem, dan is het opgelost.',
      isValkuil: true,
      principe: 'Invullen & overnemen (NIVEA)',
      uitleg: 'Niet Invullen Voor Een Ander: de begeleider neemt overhaast de regie over zonder de student te vragen wat zij zelf wil. De student verliest de controle over haar eigen proces.'
    }
  ]
};

export const casus4 = {
  situatie: 'Een student meldt bij jou dat haar stagebegeleider herhaaldelijk opmerkingen maakt over haar hoofddoek: "Zou je die niet af kunnen doen voor onze klanten?" en "Het staat ook zo streng." Het bedrijf is al jaren een belangrijke stagepartner voor jouw opleiding. De student is halverwege haar stage en werkt hard aan een grote opdracht.',
  keuzes: [
    {
      tekst: 'Ik suggereer aan de student dat het waarschijnlijk niet zo bedoeld is en dat ze het misschien even laat rusten.',
      valkuil: 'Bagatelliseren',
      uitleg: 'Dit is een klassieke valkuil: de intentie van de ander boven de ervaring van de student plaatsen. De student voelt zich niet geloofd en zal minder snel opnieuw signaleren. Bovendien blijft het probleem in stand.'
    },
    {
      tekst: 'Ik bel zelf even met de stagebegeleider om de situatie te sussen, zonder de student erbij te betrekken.',
      valkuil: 'Regie van de student wegnemen',
      uitleg: 'Goed bedoeld, maar de student verliest de regie over haar eigen situatie. Bovendien weet zij niet wat er is besproken en met welke uitkomst. Dit vergroot haar gevoel van machteloosheid.'
    },
    {
      tekst: 'Ik bespreek samen met de student haar opties: doorpraten met bedrijf, driehoeksgesprek, melding, of een andere stageplek zoeken. Zij bepaalt de volgende stap.',
      valkuil: null,
      uitleg: 'Dit is de aanbevolen aanpak. De student houdt regie, en jij bent transparant over de opties en hun consequenties. Je bewaart je professionele onafhankelijkheid: de relatie met het bedrijf mag niet zwaarder wegen dan het belang van de student.'
    },
    {
      tekst: 'Ik schakel direct de opleidingsmanager in en start een formeel traject.',
      valkuil: 'Opschalen zonder overleg',
      uitleg: 'Opschalen zonder overleg slaat haar regie over. Bovendien is dit meestal niet nodig als eerste stap; er zijn eerst constructievere opties (gesprek, driehoeksgesprek).'
    }
  ]
};

export const nazorgStudenten: NazorgStudent[] = [
  {
    naam: 'Aisha',
    verhaal: 'Het gaat op zich prima, maar ik heb sinds die tijd wel moeite met slapen. Ik lig \'s nachts vaak te piekeren over of ik nu wél de goede dingen zeg op stage.',
    juistOptie: 'C',
    opties: [
      {
        letter: 'A',
        tekst: 'Complimenteer haar dat het goed gaat en spreek af elkaar over twee maanden weer te zien.',
        juist: false,
        uitleg: '"Op zich prima" is niet hetzelfde als goed. De slaapklachten en piekergedachten zijn een signaal dat de impact nog niet verwerkt is.'
      },
      {
        letter: 'B',
        tekst: 'Adviseer haar om zich sterker op te stellen op stage.',
        juist: false,
        uitleg: 'Dit legt de last opnieuw bij de student. Slaapproblemen zijn een impact van wat haar overkomen is: niet een probleem van houding.'
      },
      {
        letter: 'C',
        tekst: 'Erken de impact ("dit klinkt zwaarder dan je zelf laat zien"), vraag door en overweeg doorverwijzing naar het decanaat.',
        juist: true,
        uitleg: 'Slaapklachten en aanhoudende piekergedachten zijn signalen die om professionele ondersteuning kunnen vragen. Het decanaat kan hier passende steun bieden.'
      }
    ]
  },
  {
    naam: 'Jonas',
    verhaal: 'Weet je, ik heb er niet meer zoveel last van. Maar de opmerkingen gaan wel gewoon door. Ik heb het maar geaccepteerd.',
    juistOptie: 'B',
    opties: [
      {
        letter: 'A',
        tekst: 'Neem het bericht op, benoem dat het goed gaat en sluit het dossier.',
        juist: false,
        uitleg: '"Er geen last meer van hebben" en "opmerkingen gaan door" zijn niet met elkaar te rijmen. Dit is een signaal van berusting, niet van herstel.'
      },
      {
        letter: 'B',
        tekst: 'Benoem dat "acceptatie" ook een signaal is en koppel deze casus terug naar het stagebureau, de opmerkingen zijn niet opgelost.',
        juist: true,
        uitleg: 'Berusting is een copingstrategie, geen oplossing. Terugkoppeling naar het stagebureau zorgt dat het bedrijf gemarkeerd wordt voor volgende studenten, ook als Jonas zelf geen actie meer wil.'
      },
      {
        letter: 'C',
        tekst: 'Adviseer Jonas om zich te verzetten en de opmerkingen aan te kaarten.',
        juist: false,
        uitleg: 'De student bepaalt zelf welke coping past. Advies "verzet je" is een oordeel over zijn strategie en past niet bij zijn autonomie. Wél belangrijk: koppel de casus intern terug.'
      }
    ]
  },
  {
    naam: 'Fatima',
    verhaal: 'Ik ben blij dat het is opgelost. Kunnen we volgende studenten die daar stage lopen niet even waarschuwen dat dit soort dingen kunnen gebeuren?',
    juistOptie: 'A',
    opties: [
      {
        letter: 'A',
        tekst: 'Vertel dat je de casus vastlegt in het bedrijfsdossier en dat toekomstige plaatsingen zorgvuldiger worden afgewogen. Bespreek dat een "waarschuwing vooraf" tricky ligt.',
        juist: true,
        uitleg: 'Fatima\'s verzoek raakt aan structurele nazorg. Vastleggen in het dossier is de juiste weg, dat beschermt volgende studenten zonder dat het bedrijf publiekelijk wordt gebrandmerkt op basis van één casus. Als er meer meldingen komen, kan de opleiding maatregelen nemen (bv. rode lijst).'
      },
      {
        letter: 'B',
        tekst: 'Stuur een mailtje naar alle stagestudenten met de waarschuwing.',
        juist: false,
        uitleg: 'Dit maakt Fatima\'s privécasus openbaar en kan juridische gevolgen hebben. Terugkoppelen doe je intern, niet publiek.'
      },
      {
        letter: 'C',
        tekst: 'Zeg dat het bedrijf zijn beloftes heeft nagekomen en dat er geen reden meer is voor actie.',
        juist: false,
        uitleg: 'Dat een casus is "opgelost" betekent niet dat er niets vastgelegd hoeft te worden. Elk signaal telt voor het bedrijfsdossier, dat is de kern van structurele nazorg.'
      }
    ]
  }
];
