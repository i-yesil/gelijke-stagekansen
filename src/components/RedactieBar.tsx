import React from 'react';
import { Edit3, CheckCircle2, Download } from 'lucide-react';

interface RedactieBarProps {
  editMode: boolean;
  onDownloadHTML?: () => void;
}

export const RedactieBar: React.FC<RedactieBarProps> = ({ editMode, onDownloadHTML }) => {
  if (!editMode) return null;

  return (
    <div className="bg-[#F7EFE3] border-2 border-dashed border-[#D3104C] p-3.5 px-4 rounded-lg mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm text-[#003340] animate-in fade-in">
      <div className="flex items-center gap-2">
        <Edit3 className="w-4 h-4 text-[#D3104C] flex-shrink-0" />
        <div>
          <strong className="text-[#B41E4B]">Redactie-modus actief:</strong>
          <span className="ml-1 text-[#5A5A55]">
            Je kunt teksten en stappen direct bewerken. Wijzigingen blijven bewaard in deze browser.
          </span>
        </div>
      </div>

      {onDownloadHTML && (
        <button
          onClick={onDownloadHTML}
          className="inline-flex items-center gap-1.5 bg-[#D3104C] hover:bg-[#B41E4B] text-white px-3 py-1.5 rounded-md font-medium text-xs whitespace-nowrap cursor-pointer transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download definitieve versie</span>
        </button>
      )}
    </div>
  );
};
