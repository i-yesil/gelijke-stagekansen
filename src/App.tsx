import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { StepCardsOverview } from './components/StepCardsOverview';
import { StepPanel } from './components/StepPanel';
import { RedactieBar } from './components/RedactieBar';
import { PrintView } from './components/PrintView';
import { PrintModal } from './components/PrintModal';
import { ContactCard } from './components/ContactCard';
import { bouwstenen, STORAGE_KEY } from './data/bouwstenen';
import { AppProgressState } from './types';

export default function App() {
  const [actieveStap, setActieveStap] = useState<number | null>(null);
  const [geopend, setGeopend] = useState<Record<number, boolean>>({});
  const [opdrachtGedaan, setOpdrachtGedaan] = useState<Record<number, boolean>>({});
  const [reflectie, setReflectie] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);

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

  const handleToggleOpdracht = (stapId: number) => {
    setOpdrachtGedaan((prev) => ({
      ...prev,
      [stapId]: !prev[stapId]
    }));
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
    try {
      window.focus();
      window.print();
    } catch (e) {
      console.warn('Print blocked by iframe sandbox:', e);
      setShowPrintModal(true);
      return;
    }

    // In de ingesloten iframe preview van AI Studio wordt het systeempdf-venster vaak onderdrukt.
    // We openen in dat geval direct de modal zodat de gebruiker alle pagina's kan zien en in een nieuw tabblad kan openen.
    if (window.self !== window.top) {
      setShowPrintModal(true);
    }
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
      <div className="no-print max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <Header onPrint={handlePrint} />

        <Intro />

        {/* 5 Step Cards Overview Grid: Aanpak van stagediscriminatie */}
        <StepCardsOverview
          actieveStap={actieveStap}
          geopend={geopend}
          opdrachtGedaan={opdrachtGedaan}
          onSelectStap={handleSelectStap}
          onToggleOpdracht={handleToggleOpdracht}
        />

        {/* Selected Step Panel (opent direct onder de stappen zodra een bouwsteen geselecteerd is) */}
        <div id="stap-panel-container">
          {geselecteerdeBouwsteen && (
            <StepPanel
              stap={geselecteerdeBouwsteen}
              opdrachtGedaan={!!opdrachtGedaan[geselecteerdeBouwsteen.id]}
              onCompleteOpdracht={handleCompleteOpdracht}
              onResetOpdracht={handleResetOpdracht}
              onToggleOpdracht={handleToggleOpdracht}
              onSelectStap={handleSelectStap}
              onNaarOverzicht={handleNaarOverzicht}
              reflectieTekst={reflectie}
              onSaveReflectie={handleSaveReflectie}
            />
          )}
        </div>

        {/* Vaste, losgekoppelde contactkaart: Advies & ondersteuning TG-SO */}
        <ContactCard />

        {/* Footer met HR logo linksonder */}
        <footer className="pt-8 pb-6 mt-12 border-t border-[#E8E4DA] flex items-center text-xs md:text-sm text-[#7A756E]">
          <div className="flex items-center gap-3.5">
            <img
              src="/hr-logo.png"
              alt="Hogeschool Rotterdam Logo"
              className="h-10 md:h-12 w-auto object-contain shrink-0"
            />
            <div className="text-left not-italic">
              <p className="font-bold text-[#003340] text-xs md:text-sm leading-tight">Hogeschool Rotterdam</p>
              <p className="text-[11px] md:text-xs text-[#5A5A55]">Themagroep Studentgerichte Omgeving (TG-SO) 2026</p>
            </div>
          </div>
        </footer>
      </div>

      {/* A4 Printvoorvertoning Modal */}
      <PrintModal
        isOpen={showPrintModal}
        onClose={() => setShowPrintModal(false)}
        onTriggerPrint={() => {
          try {
            window.focus();
            window.print();
          } catch (e) {
            console.error('Print trigger failed:', e);
          }
        }}
      />
    </div>
  );
}
