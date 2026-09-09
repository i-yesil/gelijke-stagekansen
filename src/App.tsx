import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { StepCardsOverview } from './components/StepCardsOverview';
import { StepPanel } from './components/StepPanel';
import { RedactieBar } from './components/RedactieBar';
import { PrintView } from './components/PrintView';
import { bouwstenen, STORAGE_KEY } from './data/bouwstenen';
import { AppProgressState } from './types';

export default function App() {
  const [actieveStap, setActieveStap] = useState<number | null>(null);
  const [geopend, setGeopend] = useState<Record<number, boolean>>({});
  const [opdrachtGedaan, setOpdrachtGedaan] = useState<Record<number, boolean>>({});
  const [reflectie, setReflectie] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: AppProgressState = JSON.parse(saved);
        if (parsed.geopend) setGeopend(parsed.geopend);
        if (parsed.opdrachtGedaan) setOpdrachtGedaan(parsed.opdrachtGedaan);
        if (parsed.actieveStap) setActieveStap(parsed.actieveStap);
        if (parsed.reflectie) setReflectie(parsed.reflectie);
      }
      const savedReflectie = localStorage.getItem(STORAGE_KEY + '_reflectie');
      if (savedReflectie) {
        setReflectie(savedReflectie);
      }
    } catch (e) {
      console.warn('Could not load saved state from localStorage');
    }

    // Check url param ?redactie=redactie2026
    const params = new URLSearchParams(window.location.search);
    if (params.get('redactie') === 'redactie2026') {
      setEditMode(true);
    }
  }, []);

  // Save state on updates
  useEffect(() => {
    try {
      const stateToSave: AppProgressState = {
        actieveStap,
        geopend,
        opdrachtGedaan,
        reflectie
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.warn('Could not save state to localStorage');
    }
  }, [actieveStap, geopend, opdrachtGedaan, reflectie]);

  const handleSelectStap = (id: number) => {
    setActieveStap(id);
    setGeopend((prev) => ({ ...prev, [id]: true }));

    // Smooth scroll to panel container
    setTimeout(() => {
      const panelEl = document.getElementById('stap-panel-container');
      if (panelEl) {
        panelEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleCompleteOpdracht = (stapId: number) => {
    setOpdrachtGedaan((prev) => ({ ...prev, [stapId]: true }));
  };

  const handleResetOpdracht = (stapId: number) => {
    setOpdrachtGedaan((prev) => {
      const copy = { ...prev };
      delete copy[stapId];
      return copy;
    });
  };

  const handleSaveReflectie = (tekst: string) => {
    setReflectie(tekst);
    try {
      localStorage.setItem(STORAGE_KEY + '_reflectie', tekst);
    } catch (e) {}
  };

  const handleNaarOverzicht = () => {
    const el = document.getElementById('aanpak-bouwstenen');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadHTML = () => {
    const jsonBlob = new Blob([
      JSON.stringify({
        datum: new Date().toISOString(),
        bouwstenen,
        geopend,
        opdrachtGedaan,
        reflectie
      }, null, 2)
    ], { type: 'application/json' });

    const url = URL.createObjectURL(jsonBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'elearning-gelijke-stagekansen-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const geselecteerdeBouwsteen = actieveStap ? bouwstenen.find((b) => b.id === actieveStap) : null;

  return (
    <div className="min-h-screen bg-[#FBF7F1] text-[#003340] font-['Poppins',sans-serif]">
      {/* Printable Report Output */}
      <PrintView />

      {/* Screen App Container */}
      <div className="no-print max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-8">
        <Header
          onPrint={handlePrint}
          editMode={editMode}
          onToggleEdit={() => setEditMode(!editMode)}
          onDownloadHTML={handleDownloadHTML}
          showEditControls={editMode}
        />

        <RedactieBar
          editMode={editMode}
          onDownloadHTML={handleDownloadHTML}
        />

        <Intro />

        {/* 5 Step Cards Overview Grid: Aanpak van stagediscriminatie */}
        <StepCardsOverview
          actieveStap={actieveStap}
          geopend={geopend}
          opdrachtGedaan={opdrachtGedaan}
          onSelectStap={handleSelectStap}
        />

        {/* Selected Step Panel */}
        <div id="stap-panel-container">
          {geselecteerdeBouwsteen ? (
            <StepPanel
              stap={geselecteerdeBouwsteen}
              opdrachtGedaan={!!opdrachtGedaan[geselecteerdeBouwsteen.id]}
              onCompleteOpdracht={handleCompleteOpdracht}
              onResetOpdracht={handleResetOpdracht}
              onSelectStap={handleSelectStap}
              onNaarOverzicht={handleNaarOverzicht}
              reflectieTekst={reflectie}
              onSaveReflectie={handleSaveReflectie}
            />
          ) : (
            <div className="p-8 text-center bg-white rounded-xl border border-[#EDE6DA] mb-8 shadow-xs">
              <h3 className="text-lg font-bold text-[#003340] mb-2">
                Kies een van de bouwstenen hierboven om te starten
              </h3>
              <p className="text-sm text-[#5A5A55] max-w-md mx-auto mb-5">
                Ontdek hoe je als stagebegeleider stagediscriminatie voorkomt, herkent, bespreekt en opvolgt binnen Hogeschool Rotterdam.
              </p>
              <div className="flex justify-center gap-2.5 flex-wrap">
                {bouwstenen.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleSelectStap(b.id)}
                    className="px-4 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all duration-150 hover:opacity-95 hover:scale-102 cursor-pointer shadow-xs border"
                    style={{
                      backgroundColor: b.kleur,
                      borderColor: b.kleur,
                      color: b.kleur === '#FCC200' ? '#003340' : '#ffffff'
                    }}
                  >
                    {b.id}. {b.titel}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="pt-8 mt-12 border-t border-[#E8E4DA] text-center text-xs md:text-sm text-[#7A756E] italic">
          <p>Hogeschool Rotterdam · Themagroep Studentgerichte Omgeving - 2026</p>
        </footer>
      </div>
    </div>
  );
}
