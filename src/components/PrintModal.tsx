import React from 'react';
import { X, Printer, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PrintView } from './PrintView';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerPrint: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({
  isOpen,
  onClose,
  onTriggerPrint,
}) => {
  if (!isOpen) return null;

  const handleOpenInNewTab = () => {
    window.open(window.location.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/70 backdrop-blur-xs overflow-hidden animate-in fade-in">
      {/* Top action bar */}
      <div className="bg-[#003340] text-white px-4 md:px-6 py-3.5 flex items-center justify-between gap-4 border-b border-[#004A5E] shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#D3104C] flex items-center justify-center text-white shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm md:text-base font-bold text-white leading-tight">
              A4 Printvoorvertoning (7 pagina&apos;s)
            </h2>
            <p className="text-[11px] text-[#A2C7D1] hidden sm:block">
              Exacte weergave conform de Hogeschool Rotterdam huisstijl &middot; Zonder oefeningen of knoppen
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onTriggerPrint}
            className="inline-flex items-center gap-1.5 bg-[#D3104C] hover:bg-[#B41E4B] text-white px-3.5 py-2 rounded-md font-medium text-xs md:text-sm transition-colors cursor-pointer shadow-xs"
            title="Start het browser-printvenster"
          >
            <Printer className="w-4 h-4" />
            <span>Printopdracht starten</span>
          </button>

          <button
            onClick={handleOpenInNewTab}
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3.5 py-2 rounded-md font-medium text-xs md:text-sm transition-colors cursor-pointer"
            title="Open in een eigen venster (buiten de iframe preview)"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Open in nieuw tabblad</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer ml-1"
            title="Sluiten"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Info notification about iframe printing */}
      <div className="bg-[#FFF4E5] border-b border-[#FFE2B8] px-4 md:px-6 py-2.5 text-xs text-[#663C00] flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs bg-[#FF9800] text-white px-1.5 py-0.5 rounded">TIP</span>
          <span>
            Alle links (inclusief podcasts, e-learning en APA-bronnenlijst) zijn <strong>volledig actief en klikbaar in de gegenereerde PDF</strong>. Print of kies &quot;Opslaan als PDF&quot; in het printvenster.
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#8C5300] shrink-0 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>7 A4-pagina&apos;s inclusief actieve links</span>
        </div>
      </div>

      {/* Scrollable document viewer background */}
      <div className="flex-1 overflow-y-auto bg-[#525659] p-4 md:p-8">
        <div className="max-w-[215mm] mx-auto">
          <PrintView forceDisplay={true} />
        </div>
      </div>
    </div>
  );
};
