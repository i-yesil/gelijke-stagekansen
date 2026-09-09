import React from 'react';
import { Printer } from 'lucide-react';

interface HeaderProps {
  onPrint: () => void;
  onViewPrintPreview?: () => void;
  editMode?: boolean;
  onToggleEdit?: () => void;
  onDownloadHTML?: () => void;
  showEditControls?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onPrint }) => {
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

      <div className="flex items-center gap-2.5">
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

