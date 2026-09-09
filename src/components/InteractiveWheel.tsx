import React from 'react';
import { bouwstenen } from '../data/bouwstenen';

interface InteractiveWheelProps {
  actiefId: number | null | 'all';
  onSelectStap: (id: number) => void;
  formaat?: number;
  className?: string;
}

export const InteractiveWheel: React.FC<InteractiveWheelProps> = ({
  actiefId,
  onSelectStap,
  formaat = 400,
  className = ''
}) => {
  const startA = -Math.PI / 2;
  const N = bouwstenen.length;
  const cx = 210;
  const cy = 210;
  const rOut = 200;
  const rIn = 74;

  function pol(r: number, a: number) {
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }

  function segPad(i: number) {
    const a1 = startA + i * ((2 * Math.PI) / N);
    const a2 = a1 + (2 * Math.PI) / N;
    const p1 = pol(rOut, a1);
    const p2 = pol(rOut, a2);
    const p3 = pol(rIn, a2);
    const p4 = pol(rIn, a1);
    const lg = a2 - a1 > Math.PI ? 1 : 0;
    return `M ${p1.x} ${p1.y} A ${rOut} ${rOut} 0 ${lg} 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${rIn} ${rIn} 0 ${lg} 0 ${p4.x} ${p4.y} Z`;
  }

  function labPos(i: number, r?: number) {
    const a = startA + (i + 0.5) * ((2 * Math.PI) / N);
    return pol(r || (rOut + rIn) / 2, a);
  }

  function split(t: string) {
    const w = t.split(' ');
    if (w.length <= 2) return [t];
    const m = Math.ceil(w.length / 2);
    return [w.slice(0, m).join(' '), w.slice(m).join(' ')];
  }

  const GRIJS = '#D8D8D4';
  const highlightMode = actiefId != null && actiefId !== 'all';

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 420 420"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[380px] md:max-w-[420px] h-auto drop-shadow-sm select-none"
        style={{ width: '100%', maxWidth: `${formaat}px` }}
      >
        {bouwstenen.map((b, i) => {
          const isActief = b.id === actiefId || actiefId === 'all';
          const dim = highlightMode && !isActief;
          const segKleur = dim ? GRIJS : b.kleur;
          const txtKleur = dim ? '#9A9A95' : b.kleur === '#FCC200' ? '#003340' : '#ffffff';
          const lp = labPos(i);
          const parts = split(b.titel);
          const np = labPos(i, rIn + 16);

          return (
            <g
              key={b.id}
              className="transition-transform duration-200 cursor-pointer hover:opacity-90"
              onClick={() => onSelectStap(b.id)}
            >
              <path
                d={segPad(i)}
                fill={segKleur}
                stroke="#ffffff"
                strokeWidth={isActief && highlightMode ? '5' : '3.5'}
                className="transition-all duration-200"
              />
              <text
                x={lp.x}
                y={lp.y + (parts[1] ? -4 : 4)}
                textAnchor="middle"
                fontFamily="Poppins, Arial, sans-serif"
                fontSize="12.5"
                fontWeight="600"
                fill={txtKleur}
                className="pointer-events-none"
              >
                {parts[0]}
              </text>
              {parts[1] && (
                <text
                  x={lp.x}
                  y={lp.y + 13}
                  textAnchor="middle"
                  fontFamily="Poppins, Arial, sans-serif"
                  fontSize="12.5"
                  fontWeight="600"
                  fill={txtKleur}
                  className="pointer-events-none"
                >
                  {parts[1]}
                </text>
              )}
              <circle
                cx={np.x}
                cy={np.y}
                r="11.5"
                fill="#ffffff"
                className="pointer-events-none shadow-sm"
              />
              <text
                x={np.x}
                y={np.y + 4.5}
                textAnchor="middle"
                fontFamily="Poppins, Arial, sans-serif"
                fontSize="13"
                fontWeight="700"
                fill={dim ? '#9A9A95' : b.kleur === '#FCC200' ? '#003340' : b.kleur}
                className="pointer-events-none"
              >
                {b.id}
              </text>
            </g>
          );
        })}

        {/* Center Hub */}
        <circle cx={cx} cy={cy} r="62" fill="#ffffff" stroke="#3D3D3A" strokeWidth="3" />
        <circle cx={cx} cy={cy} r="49" fill="#003340" />
        <text
          x={cx}
          y={cy - 7}
          textAnchor="middle"
          fontFamily="Poppins, Arial, sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="#ffffff"
          className="pointer-events-none"
        >
          Gelijke
        </text>
        <text
          x={cx}
          y={cy + 11}
          textAnchor="middle"
          fontFamily="Poppins, Arial, sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="#ffffff"
          className="pointer-events-none"
        >
          stagekansen
        </text>
      </svg>
      <p className="text-xs text-[#7A756E] italic text-center max-w-[380px]">
        Klik op een van de vijf bouwstenen of gebruik de stappenbalk hierboven om een onderdeel te openen.
      </p>
    </div>
  );
};
