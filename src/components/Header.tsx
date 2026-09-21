import React, { useState } from 'react';
import { Printer, HelpCircle, X } from 'lucide-react';

interface HeaderProps {
  onPrint: () => void;
  onViewPrintPreview?: () => void;
  editMode?: boolean;
  onToggleEdit?: () => void;
  onDownloadHTML?: () => void;
  showEditControls?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onPrint }) => {
  const [showDef, setShowDef] = useState(false);

  return (
    <header className="flex justify-between items-center pb-4 border-b-2 border-[#D3104C] mb-6 gap-6 flex-wrap">
      <div className="min-w-[280px]">
        <h1 className="text-[#D3104C] text-2xl md:text-3xl font-bold leading-tight mb-1 flex items-center gap-2">
          <span>Aanpak gelijke stagekansen</span>
        </h1>
        <p className="text-sm md:text-base text-[#003340] font-normal">
          Samen tegen stagediscriminatie · Hogeschool Rotterdam
        </p>
      </div>

      <div className="flex items-center gap-2.5 relative">
        {/* Definitie Pilletje */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowDef((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-bold text-xs md:text-sm transition-all cursor-pointer border ${
              showDef
                ? 'bg-[#003340] text-white border-[#003340] shadow-sm'
                : 'bg-[#F7EFE3] hover:bg-[#EFE5D5] text-[#003340] border-[#E2D8C9]'
            }`}
            title="Klik voor de definitie: Wat is stagediscriminatie?"
          >
            <HelpCircle className="w-4 h-4 text-[#D3104C]" />
            <span>Wat is stagediscriminatie?</span>
          </button>

          {showDef && (
            <>
              {/* Klik buiten om te sluiten */}
              <div
                className="fixed inset-0 z-40 bg-black/10"
                onClick={() => setShowDef(false)}
              />

              {/* Definitie Popover Card */}
              <div className="absolute right-0 top-full mt-2.5 z-50 w-80 sm:w-[420px] bg-white border-2 border-[#D3104C] rounded-2xl p-4 sm:p-5 shadow-xl text-left animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-start justify-between gap-3 mb-2 pb-2 border-b border-[#EDE6DA]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D3104C]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#D3104C]">
                      Wat is stagediscriminatie?
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowDef(false)}
                    className="text-[#7A756E] hover:text-[#003340] p-1 rounded-md hover:bg-[#F7EFE3] transition-colors cursor-pointer"
                    title="Sluiten"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-[#003340] leading-relaxed font-medium">
                  Afwijzing, uitsluiting of ongelijke behandeling tijdens of het zoeken van de stage op basis van afkomst, kleur, gender, religie, seksuele oriëntatie of (on)zichtbare beperking.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Printen / PDF knop */}
        <button
          onClick={onPrint}
          className="inline-flex items-center gap-1.5 bg-[#D3104C] hover:bg-[#B41E4B] text-white px-3.5 py-2 rounded-md font-medium text-xs md:text-sm transition-colors shadow-none cursor-pointer"
          title="Print deze aanpak als A4-document (of sla op als PDF)"
        >
          <Printer className="w-4 h-4" />
          <span>Printen / PDF</span>
        </button>
      </div>
    </header>
  );
};

