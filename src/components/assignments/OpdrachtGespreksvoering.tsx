import React, { useState } from 'react';
import { Target, CheckCircle2, RotateCcw, ArrowRight, AlertCircle, HelpCircle, Sparkles, MoveRight } from 'lucide-react';
import { opdracht3DialoogA, sleepKaartenGesprek, categorieDefinities, CategorieGesprek, SleepKaart } from '../../data/bouwstenen';

interface OpdrachtGespreksvoeringProps {
  onComplete: () => void;
  onReset: () => void;
  isVoltooid: boolean;
}

export const OpdrachtGespreksvoering: React.FC<OpdrachtGespreksvoeringProps> = ({
  onComplete,
  onReset,
  isVoltooid
}) => {
  const [fase, setFase] = useState<'deelA' | 'deelB'>('deelA');
  const [gekozenReactie, setGekozenReactie] = useState<number | null>(null);

  // State voor Deel 2: Categoriseer- / Sleepopdracht
  const [plaatsingen, setPlaatsingen] = useState<Record<string, CategorieGesprek>>({});
  const [geselecteerdeKaartId, setGeselecteerdeKaartId] = useState<string | null>(null);
  const [isGecontroleerd, setIsGecontroleerd] = useState<boolean>(false);
  const [dragOverZone, setDragOverZone] = useState<CategorieGesprek | 'pool' | null>(null);
  const [geselecteerdeUitleg, setGeselecteerdeUitleg] = useState<SleepKaart | null>(null);

  const handleKiesReactie = (idx: number) => {
    if (gekozenReactie !== null) return;
    setGekozenReactie(idx);
  };

  // Drag and Drop handlers
  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
    setGeselecteerdeKaartId(id);
  };

  const handleDragOver = (e: React.DragEvent, zone: CategorieGesprek | 'pool') => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverZone !== zone) {
      setDragOverZone(zone);
    }
  };

  const handleDragLeave = () => {
    setDragOverZone(null);
  };

  const handleDrop = (e: React.DragEvent, zone: CategorieGesprek | 'pool') => {
    e.preventDefault();
    setDragOverZone(null);
    const id = e.dataTransfer.getData('text/plain') || geselecteerdeKaartId;
    if (!id) return;

    if (zone === 'pool') {
      // Verwijder uit bak
      setPlaatsingen(prev => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    } else {
      // Plaats in categorie
      setPlaatsingen(prev => ({
        ...prev,
        [id]: zone
      }));
    }
    setGeselecteerdeKaartId(null);
    setIsGecontroleerd(false);
  };

  // Klik-interactie (geschikt voor mobiel/tablet)
  const handlePlaatsViaKlik = (zone: CategorieGesprek | 'pool') => {
    if (!geselecteerdeKaartId) return;

    if (zone === 'pool') {
      setPlaatsingen(prev => {
        const next = { ...prev };
        delete next[geselecteerdeKaartId];
        return next;
      });
    } else {
      setPlaatsingen(prev => ({
        ...prev,
        [geselecteerdeKaartId]: zone
      }));
    }
    setGeselecteerdeKaartId(null);
    setIsGecontroleerd(false);
  };

  const handleVerwijderPlaatsing = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setPlaatsingen(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    if (geselecteerdeKaartId === id) setGeselecteerdeKaartId(null);
    setIsGecontroleerd(false);
  };

  // Controleer antwoorden
  const handleControleer = () => {
    setIsGecontroleerd(true);
    const alleCorrect = sleepKaartenGesprek.every(kaart => plaatsingen[kaart.id] === kaart.categorie);
    if (alleCorrect) {
      onComplete();
    }
  };

  const handleOpnieuw = () => {
    setFase('deelA');
    setGekozenReactie(null);
    setPlaatsingen({});
    setGeselecteerdeKaartId(null);
    setIsGecontroleerd(false);
    setDragOverZone(null);
    setGeselecteerdeUitleg(null);
    onReset();
  };

  const handleOpnieuwDeelB = () => {
    setPlaatsingen({});
    setGeselecteerdeKaartId(null);
    setIsGecontroleerd(false);
    setDragOverZone(null);
    setGeselecteerdeUitleg(null);
  };

  // Afgeleide waarden
  const ongeplaatsteKaarten = sleepKaartenGesprek.filter(k => !plaatsingen[k.id]);
  const aantalGeplaatst = Object.keys(plaatsingen).length;
  const totaalKaarten = sleepKaartenGesprek.length;

  const getKaartenInCategorie = (cat: CategorieGesprek) => {
    return sleepKaartenGesprek.filter(k => plaatsingen[k.id] === cat);
  };

  const aantalCorrect = sleepKaartenGesprek.filter(k => plaatsingen[k.id] === k.categorie).length;
  const isAllesCorrect = isGecontroleerd && aantalCorrect === totaalKaarten;

  return (
    <div className="rounded-xl border-2 border-[#003340] overflow-hidden shadow-2xs bg-[#EDF3F5]">
      {/* Themed Header Bar matching tegel 3 */}
      <div className="bg-[#003340] text-white px-3.5 sm:px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-white shrink-0" />
          <h3 className="text-xs sm:text-[13.5px] font-bold text-white tracking-wide">
            Oefen het gesprek: Wat opent, wat sluit?
          </h3>
        </div>
        <span className="text-[9.5px] font-bold uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-full">
          Oefening Stap 3
        </span>
      </div>

      <div className="p-3.5 sm:p-4">
        <p className="text-xs text-[#003340]/80 mb-3">
          Oefen hoe jouw reactie het verschil maakt tussen een student die zich veilig voelt of dichtklapt.
        </p>

        {fase === 'deelA' ? (
          <div className="bg-white border border-[#E8E4DA] rounded-lg p-3.5 sm:p-4 shadow-2xs">
            <div className="flex justify-between items-center text-[11px] text-[#7A756E] mb-2.5">
              <span className="font-bold uppercase tracking-wider text-[#003340]">Oefening 1 van 2</span>
              <span>Kies jouw reactie</span>
            </div>

            <div className="bg-[#F7EFE3] p-3 rounded-lg border border-[#EDE6DA] mb-3 text-[#003340]">
              <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#7A756E] mb-1">De student vertelt:</p>
              <p className="italic text-xs sm:text-[13px] leading-relaxed">
                "{opdracht3DialoogA.studentTekst}"
              </p>
            </div>

            <p className="text-xs sm:text-[13px] font-semibold text-[#003340] mb-2.5">
              Hoe reageer jij als begeleider?
            </p>

            <div className="space-y-2 mb-3">
              {opdracht3DialoogA.reacties.map((r, i) => {
                const isSelected = gekozenReactie === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleKiesReactie(i)}
                    disabled={gekozenReactie !== null}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-lg border text-xs sm:text-[12.5px] leading-relaxed transition-all cursor-pointer ${
                      isSelected
                        ? r.effect === 'open'
                          ? 'bg-[#EDFAF9] border-[#3AB7B0] text-[#003340] ring-2 ring-[#3AB7B0]/20 font-medium'
                          : 'bg-[#FDEEF3] border-[#B41E4B] text-[#003340] ring-2 ring-[#B41E4B]/20 font-medium'
                        : gekozenReactie !== null
                        ? 'opacity-40 bg-gray-50 border-gray-200 cursor-not-allowed'
                        : 'bg-white hover:bg-[#F7EFE3] border-[#E8E4DA] text-[#003340]'
                    }`}
                  >
                    {r.tekst}
                  </button>
                );
              })}
            </div>

            {gekozenReactie !== null && (
              <div className="mt-3 p-3 bg-[#FBF7F1] border border-[#EDE6DA] rounded-lg text-xs leading-relaxed animate-in fade-in">
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  {opdracht3DialoogA.reacties[gekozenReactie].effect === 'open' ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3AB7B0]" />
                      <span className="text-[#3AB7B0]">Goede reactie: Empathie &amp; Erkenning</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 text-[#B41E4B]" />
                      <span className="text-[#B41E4B]">Valkuil: Oordeel (twijfel zaaien)</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-[#003340] mb-2.5 leading-relaxed">
                  {opdracht3DialoogA.reacties[gekozenReactie].uitleg}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setFase('deelB')}
                    className="inline-flex items-center gap-1 bg-[#003340] hover:bg-[#004558] text-white px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <span>Naar oefening 2: Categoriseer reacties</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* OEFENING 2: DE SLEEPOPDRACHT / CATEGORISEER-UITDAGING */
          <div className="bg-white border border-[#E8E4DA] rounded-lg p-3.5 sm:p-4 shadow-2xs">
            <div className="flex justify-between items-center text-[11px] text-[#7A756E] mb-2">
              <span className="font-bold uppercase tracking-wider text-[#003340]">Oefening 2 van 2: Categoriseer</span>
              <span>OMA, NIVEA of Goede reactie?</span>
            </div>

            <p className="text-xs text-[#5A5A55] mb-3 leading-relaxed">
              Sleep de reacties naar de juiste categorie, of klik op een kaart en kies een categorie.
            </p>

          {/* BRON-POOL: TE VERDELEN KAARTEN */}
          <div
            onDragOver={(e) => handleDragOver(e, 'pool')}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'pool')}
            className={`p-4 bg-[#FBF7F1] rounded-xl border-2 transition-all mb-5 ${
              dragOverZone === 'pool'
                ? 'border-[#003340] bg-[#F4EDE2]'
                : 'border-dashed border-[#C9C4B8]'
            }`}
          >
            <div className="flex justify-between items-center mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#003340] flex items-center gap-1.5">
                <span>Nog in te delen reacties ({ongeplaatsteKaarten.length})</span>
              </span>
              {ongeplaatsteKaarten.length > 0 && (
                <span className="text-[11px] text-[#7A756E] italic hidden sm:inline">
                  Sleep een kaart naar een categorie hieronder of klik om te selecteren
                </span>
              )}
            </div>

            {ongeplaatsteKaarten.length === 0 ? (
              <div className="p-3 text-center text-xs text-[#217772] font-medium bg-[#EDFAF9] rounded-lg border border-[#3AB7B0]/30">
                Alle reacties zijn verdeeld over de categorieën! Klik hieronder op <strong>Controleer indeling</strong>.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {ongeplaatsteKaarten.map((kaart) => {
                  const isGeselecteerd = geselecteerdeKaartId === kaart.id;
                  return (
                    <div
                      key={kaart.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, kaart.id)}
                      onClick={() => setGeselecteerdeKaartId(isGeselecteerd ? null : kaart.id)}
                      className={`p-3 bg-white rounded-lg border text-xs md:text-sm leading-relaxed cursor-grab active:cursor-grabbing transition-all select-none ${
                        isGeselecteerd
                          ? 'border-[#003340] ring-2 ring-[#003340] shadow-sm bg-[#FFFDF9]'
                          : 'border-[#EDE6DA] hover:border-[#003340]/40 hover:shadow-2xs'
                      }`}
                    >
                      <p className="italic text-[#003340] mb-2 font-normal">"{kaart.zin}"</p>

                      {/* Snelle knoppen voor mobiel & toegankelijkheid bij selectie */}
                      <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-[#F5EFE7] text-[11px]">
                        <span className="text-[#7A756E] text-[10px] font-medium mr-1">Plaats in:</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlaatsingen(prev => ({ ...prev, [kaart.id]: 'goede_reactie' }));
                              setGeselecteerdeKaartId(null);
                              setIsGecontroleerd(false);
                            }}
                            className="px-2 py-0.5 rounded bg-[#EDFAF9] text-[#217772] hover:bg-[#D7F5F3] font-medium transition-colors cursor-pointer border border-[#3AB7B0]/30"
                            title="Plaats in Goede reactie"
                          >
                            Goede reactie
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlaatsingen(prev => ({ ...prev, [kaart.id]: 'oma' }));
                              setGeselecteerdeKaartId(null);
                              setIsGecontroleerd(false);
                            }}
                            className="px-2 py-0.5 rounded bg-[#FDEEF3] text-[#B41E4B] hover:bg-[#FCD8E3] font-medium transition-colors cursor-pointer border border-[#D3104C]/30"
                            title="Plaats in OMA"
                          >
                            OMA
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlaatsingen(prev => ({ ...prev, [kaart.id]: 'nivea' }));
                              setGeselecteerdeKaartId(null);
                              setIsGecontroleerd(false);
                            }}
                            className="px-2 py-0.5 rounded bg-[#FFF6E5] text-[#C26A00] hover:bg-[#FFECC7] font-medium transition-colors cursor-pointer border border-[#FCC200]/40"
                            title="Plaats in NIVEA"
                          >
                            NIVEA
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* DE DRIE CATEGORIE-BAKKEN (DROP ZONES) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 mb-5">
            {(['goede_reactie', 'oma', 'nivea'] as CategorieGesprek[]).map((catKey) => {
              const def = categorieDefinities[catKey];
              const kaarten = getKaartenInCategorie(catKey);
              const isOver = dragOverZone === catKey;

              return (
                <div
                  key={catKey}
                  onDragOver={(e) => handleDragOver(e, catKey)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, catKey)}
                  onClick={() => {
                    if (geselecteerdeKaartId) {
                      handlePlaatsViaKlik(catKey);
                    }
                  }}
                  className={`flex flex-col rounded-xl border-2 transition-all min-h-[220px] p-3.5 ${
                    isOver
                      ? 'border-[#003340] ring-2 ring-[#003340]/20 scale-[1.01]'
                      : 'border-[#EDE6DA]'
                  } ${
                    catKey === 'goede_reactie'
                      ? 'bg-[#F9FCFC]'
                      : catKey === 'oma'
                      ? 'bg-[#FCF9FA]'
                      : 'bg-[#FCFAF5]'
                  } ${geselecteerdeKaartId ? 'cursor-pointer hover:border-[#003340]' : ''}`}
                >
                  {/* Categorie Header */}
                  <div className="mb-3 pb-2.5 border-b border-[#EDE6DA]">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: def.borderKleur }}
                        />
                        <h4 className="font-bold text-sm text-[#003340]">
                          {def.titel}
                        </h4>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style={{ backgroundColor: def.bgKleur, color: def.kleur }}>
                        {kaarten.length} {kaarten.length === 1 ? 'reactie' : 'reacties'}
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-[#7A756E] leading-tight">
                      {def.afkorting}
                    </p>
                    <p className="text-[11px] text-[#5A5A55] leading-snug mt-1">
                      {def.beschrijving}
                    </p>

                    {geselecteerdeKaartId && (
                      <div className="mt-2 text-center py-1 bg-white border border-dashed border-[#003340] rounded text-[11px] text-[#003340] font-semibold">
                        + Klik om hier te plaatsen
                      </div>
                    )}
                  </div>

                  {/* Kaarten in deze bak */}
                  <div className="flex-1 space-y-2">
                    {kaarten.length === 0 ? (
                      <div className="h-full min-h-[90px] flex items-center justify-center border-2 border-dashed border-[#E8E4DA] rounded-lg text-center p-3 text-[11px] text-[#9E9B95] italic">
                        Sleep een reactie hierheen
                      </div>
                    ) : (
                      kaarten.map((kaart) => {
                        const isCorrect = kaart.categorie === catKey;
                        return (
                          <div
                            key={kaart.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, kaart.id)}
                            className={`p-2.5 rounded-lg border text-xs leading-relaxed transition-all cursor-grab active:cursor-grabbing bg-white ${
                              isGecontroleerd
                                ? isCorrect
                                  ? 'border-[#3AB7B0] bg-[#F2FAF9]'
                                  : 'border-[#B41E4B] bg-[#FDEEF3]'
                                : 'border-[#EDE6DA] hover:border-[#C9C4B8] shadow-2xs'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-1.5 mb-1.5">
                              <p className="italic text-[#003340] font-normal leading-snug flex-1">
                                "{kaart.zin}"
                              </p>
                              <button
                                type="button"
                                onClick={(e) => handleVerwijderPlaatsing(e, kaart.id)}
                                className="text-[#7A756E] hover:text-[#B41E4B] p-0.5 rounded hover:bg-gray-100 cursor-pointer transition-colors"
                                title="Haal terug naar de stapel"
                              >
                                &times;
                              </button>
                            </div>

                            {/* Didactische toelichting na controle */}
                            {isGecontroleerd && (
                              <div className="mt-1.5 pt-1.5 border-t border-[#EDE6DA] text-[11px]">
                                {isCorrect ? (
                                  <div className="text-[#217772]">
                                    <div className="flex items-center gap-1 font-bold mb-0.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3AB7B0] flex-shrink-0" />
                                      <span>Correct: {kaart.label}</span>
                                    </div>
                                    <p className="text-[11px] leading-snug text-[#003340] opacity-90">
                                      {kaart.uitleg}
                                    </p>
                                  </div>
                                ) : (
                                  <div className="text-[#B41E4B]">
                                    <div className="flex items-center gap-1 font-bold mb-0.5">
                                      <AlertCircle className="w-3.5 h-3.5 text-[#B41E4B] flex-shrink-0" />
                                      <span>Nog niet juist</span>
                                    </div>
                                    <p className="text-[11px] leading-snug text-[#003340] opacity-90">
                                      Tip: past deze reactie beter onder {kaart.categorie === 'goede_reactie' ? 'Goede reactie' : kaart.categorie.toUpperCase()}? Sleep hem naar de juiste bak.
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* BEDIENING & CONTROLE */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#EDE6DA]">
            <div className="flex items-center gap-2 text-xs text-[#5A5A55]">
              <span className="font-semibold text-[#003340]">{aantalGeplaatst} van {totaalKaarten} reacties geplaatst</span>
              {aantalGeplaatst < totaalKaarten && (
                <span className="text-[#7A756E] italic">(deel alle reacties in om te controleren)</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleOpnieuwDeelB}
                className="px-3 py-1.5 rounded text-xs text-[#5A5A55] hover:text-[#003340] border border-[#C9C4B8] hover:bg-[#F7EFE3] transition-colors cursor-pointer"
              >
                Wis indeling
              </button>

              <button
                type="button"
                onClick={handleControleer}
                disabled={aantalGeplaatst === 0}
                className={`px-4 py-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  aantalGeplaatst === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#003340] hover:bg-[#004558] text-white shadow-2xs'
                }`}
              >
                <span>Controleer indeling</span>
                <MoveRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* VOLTOOID FEEDBACK */}
          {isAllesCorrect && (
            <div className="mt-4 p-4 bg-[#EDFAF9] border-2 border-[#3AB7B0] rounded-xl animate-in fade-in">
              <div className="flex items-center gap-2 font-bold text-sm md:text-base text-[#217772] mb-1">
                <CheckCircle2 className="w-5 h-5 text-[#3AB7B0] flex-shrink-0" />
                <span>Uitstekend gedaan! Alle reacties staan in de juiste categorie</span>
              </div>
              <p className="text-xs md:text-sm text-[#003340] leading-relaxed">
                Je hebt nu scherp zicht op hoe OMA (Oordeel, Mening, Advies) en NIVEA (Niet Invullen Voor Een Ander) het gesprek onbedoeld kunnen blokkeren, en hoe een open, empathische reactie de veiligheid en regie bij de student waarborgt.
              </p>
            </div>
          )}

          {isGecontroleerd && !isAllesCorrect && (
            <div className="mt-4 p-3.5 bg-[#FFF8E6] border border-[#FCC200] rounded-xl text-xs md:text-sm text-[#003340] animate-in fade-in flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-[#C26A00] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#C26A00] block mb-0.5">
                  Je hebt {aantalCorrect} van de {totaalKaarten} reacties goed geplaatst
                </span>
                <span>
                  Bekijk de tips bij de roodomrande kaarten. Je kunt de kaarten direct oppakken en naar de juiste categorie slepen, of op het kruisje klikken om ze terug te zetten.
                </span>
              </div>
            </div>
          )}
        </div>
      )}

        {/* FOOTER */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleOpnieuw}
            className="inline-flex items-center gap-1 text-xs text-[#5A5A55] hover:text-[#003340] border border-[#C9C4B8] hover:bg-[#F7EFE3] px-2.5 py-1.5 rounded cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Opnieuw doen vanaf Oefening 1</span>
          </button>

          {isVoltooid && (
            <span className="text-xs text-[#3AB7B0] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Voltooid
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
