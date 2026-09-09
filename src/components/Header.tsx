import React from 'react';
import { Printer, Edit3, Download, Sparkles } from 'lucide-react';

interface HeaderProps {
  onPrint: () => void;
  editMode: boolean;
  onToggleEdit: () => void;
  onDownloadHTML?: () => void;
  showEditControls?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onPrint,
  editMode,
  onToggleEdit,
  onDownloadHTML,
  showEditControls = true
}) => {
  return (
    <header className="flex justify-between items-start pb-4 border-b-2 border-[#D3104C] mb-6 gap-6 flex-wrap">
      <div className="flex-1 min-w-[280px]">
        <h1 className="text-[#D3104C] text-2xl md:text-3xl font-bold leading-tight mb-1 flex items-center gap-2">
          <span>Aanpak gelijke stagekansen</span>
        </h1>
        <p className="text-base text-[#003340] font-normal">
          Samen tegen stagediscriminatie · Hogeschool Rotterdam
        </p>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap">
        <button
          onClick={onPrint}
          className="inline-flex items-center gap-1.5 bg-[#D3104C] hover:bg-[#B41E4B] text-white px-4 py-2 rounded-md font-medium text-xs md:text-sm transition-colors shadow-sm cursor-pointer"
          title="Print deze aanpak als document"
        >
          <Printer className="w-4 h-4" />
          <span>Printen</span>
        </button>

        {showEditControls && (
          <>
            <button
              onClick={onToggleEdit}
              className={`inline-flex items-center gap-1.5 border px-3.5 py-2 rounded-md font-medium text-xs md:text-sm transition-colors cursor-pointer ${
                editMode
                  ? 'bg-[#003340] text-white border-[#003340]'
                  : 'bg-white hover:bg-[#F7EFE3] text-[#003340] border-[#003340]/40'
              }`}
              title="Schakel bewerkmodus in of uit"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{editMode ? 'Bewerken actief' : 'Bewerken'}</span>
            </button>

            {onDownloadHTML && (
              <button
                onClick={onDownloadHTML}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-[#F7EFE3] text-[#003340] border border-[#003340]/40 px-3.5 py-2 rounded-md font-medium text-xs md:text-sm transition-colors cursor-pointer"
                title="Exporteer naar stand-alone HTML bestand"
              >
                <Download className="w-3.5 h-3.5" />
                <span>HTML</span>
              </button>
            )}
          </>
        )}
      </div>
    </header>
  );
};
