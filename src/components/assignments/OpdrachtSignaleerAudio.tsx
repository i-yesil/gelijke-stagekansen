import React, { useState, useRef, useEffect } from 'react';
import { Target, Play, Pause, RotateCcw, AlertTriangle, CheckCircle2, ArrowRight, Volume2, Sparkles, Headphones } from 'lucide-react';
import { fragmenten } from '../../data/bouwstenen';

interface OpdrachtSignaleerAudioProps {
  onComplete: () => void;
  onReset: () => void;
  isVoltooid: boolean;
}

export const OpdrachtSignaleerAudio: React.FC<OpdrachtSignaleerAudioProps> = ({
  onComplete,
  onReset,
  isVoltooid
}) => {
  const [huidig, setHuidig] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [activeSentenceIdx, setActiveSentenceIdx] = useState<number>(-1);
  const [signalClicks, setSignalClicks] = useState<{ time: number; sentenceIdx: number }[]>([]);
  const [flaggedSentences, setFlaggedSentences] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [justSignaled, setJustSignaled] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerIntervalRef = useRef<number | null>(null);

  const currentFrag = fragmenten[huidig];

  // Split text into coherent full sentences taking punctuation into account
  const sentences = currentFrag
    ? currentFrag.tekst.split(/(?<=[.!?]["']?)\s+(?=[A-Z"'0-9])/).filter((s) => s.trim().length > 0)
    : [];

  const cleanupAudio = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.onloadedmetadata = null;
      audioRef.current.ontimeupdate = null;
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    // Reset state when switching fragments
    cleanupAudio();
    setCurrentTime(0);
    setDuration(0);
    setActiveSentenceIdx(-1);
    setSignalClicks([]);
    setFlaggedSentences([]);
    setShowFeedback(false);

    // Preload audio duration if audioSrc is available
    if (currentFrag?.audioSrc) {
      const audio = new Audio(currentFrag.audioSrc);
      audioRef.current = audio;
      audio.onloadedmetadata = () => {
        if (audio.duration && !isNaN(audio.duration)) {
          setDuration(audio.duration);
        }
      };
    }

    return () => {
      cleanupAudio();
    };
  }, [huidig]);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.pause();
      }
      setIsPlaying(false);
    } else {
      // Play or Resume
      startPlayback();
    }
  };

  const startPlayback = () => {
    if (!currentFrag) return;

    if (currentFrag.audioSrc) {
      let audio = audioRef.current;
      if (!audio || !audio.src.endsWith(currentFrag.audioSrc)) {
        audio = new Audio(currentFrag.audioSrc);
        audioRef.current = audio;
      }

      audio.onloadedmetadata = () => {
        if (audio.duration && !isNaN(audio.duration)) {
          setDuration(audio.duration);
        }
      };

      audio.ontimeupdate = () => {
        const cur = audio.currentTime;
        const dur = audio.duration || duration || 40;
        setCurrentTime(cur);

        if (currentFrag.sentenceTimings && currentFrag.sentenceTimings.length > 0) {
          const sIdx = currentFrag.sentenceTimings.findIndex(t => cur >= t.start && cur < t.end);
          if (sIdx !== -1) {
            setActiveSentenceIdx(sIdx);
          } else if (cur >= currentFrag.sentenceTimings[currentFrag.sentenceTimings.length - 1].end) {
            setActiveSentenceIdx(-1);
          }
        } else if (dur > 0) {
          const ratio = Math.min(cur / dur, 1);
          const sIdx = Math.min(Math.floor(ratio * sentences.length), sentences.length - 1);
          setActiveSentenceIdx(sIdx);
        }
      };

      audio.onended = () => {
        setIsPlaying(false);
        setActiveSentenceIdx(-1);
        setShowFeedback(true);
      };

      audio.onerror = () => {
        playSpeechFallback();
      };

      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          playSpeechFallback();
        });
    } else {
      playSpeechFallback();
    }
  };

  const playSpeechFallback = () => {
    if (!('speechSynthesis' in window)) {
      simulateAudio();
      return;
    }

    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(currentFrag.tekst);
    u.lang = 'nl-NL';
    u.rate = 1.04;

    // Stemkeuze afstemmen op aangevraagde 1e-jaars studentenstem (mannelijk voor queerfeest, vrouwelijk voor koptelefoon)
    if ('speechSynthesis' in window) {
      const voices = window.speechSynthesis.getVoices();
      const nlVoices = voices.filter(v => v.lang.startsWith('nl'));
      if (nlVoices.length > 0) {
        if (currentFrag.stemType === 'mannelijk') {
          const maleVoice = nlVoices.find(v => /male|man|maarten|bart|ruben|daan|thijs/i.test(v.name));
          if (maleVoice) u.voice = maleVoice;
          u.pitch = 1.08;
        } else {
          const femaleVoice = nlVoices.find(v => /female|vrouw|fenna|colette|lotte|claire|emma|noa/i.test(v.name));
          if (femaleVoice) u.voice = femaleVoice;
          u.pitch = 1.18;
        }
      }
    }
    speechUtteranceRef.current = u;

    const estDuration = currentFrag.sentenceTimings
      ? currentFrag.sentenceTimings[currentFrag.sentenceTimings.length - 1].end
      : currentFrag.tekst.length * 0.065;
    setDuration(estDuration);

    const t0 = performance.now() - (currentTime * 1000);
    setIsPlaying(true);

    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = window.setInterval(() => {
      const elapsed = (performance.now() - t0) / 1000;
      setCurrentTime(elapsed);

      if (currentFrag.sentenceTimings && currentFrag.sentenceTimings.length > 0) {
        const sIdx = currentFrag.sentenceTimings.findIndex(t => elapsed >= t.start && elapsed < t.end);
        if (sIdx !== -1) {
          setActiveSentenceIdx(sIdx);
        } else if (elapsed >= currentFrag.sentenceTimings[currentFrag.sentenceTimings.length - 1].end) {
          setActiveSentenceIdx(-1);
        }
      } else {
        const ratio = Math.min(elapsed / estDuration, 1);
        const sIdx = Math.min(Math.floor(ratio * sentences.length), sentences.length - 1);
        setActiveSentenceIdx(sIdx);
      }

      if (elapsed >= estDuration) {
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        setIsPlaying(false);
        setActiveSentenceIdx(-1);
        setShowFeedback(true);
      }
    }, 100);

    u.onend = () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setIsPlaying(false);
      setActiveSentenceIdx(-1);
      setShowFeedback(true);
    };

    window.speechSynthesis.speak(u);
  };

  const simulateAudio = () => {
    const simDuration = currentFrag?.sentenceTimings
      ? currentFrag.sentenceTimings[currentFrag.sentenceTimings.length - 1].end
      : 35;
    setDuration(simDuration);
    const t0 = performance.now() - (currentTime * 1000);
    setIsPlaying(true);

    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = window.setInterval(() => {
      const elapsed = (performance.now() - t0) / 1000;
      setCurrentTime(elapsed);

      if (currentFrag?.sentenceTimings && currentFrag.sentenceTimings.length > 0) {
        const sIdx = currentFrag.sentenceTimings.findIndex(t => elapsed >= t.start && elapsed < t.end);
        if (sIdx !== -1) {
          setActiveSentenceIdx(sIdx);
        } else if (elapsed >= currentFrag.sentenceTimings[currentFrag.sentenceTimings.length - 1].end) {
          setActiveSentenceIdx(-1);
        }
      } else {
        const ratio = Math.min(elapsed / simDuration, 1);
        const sIdx = Math.min(Math.floor(ratio * sentences.length), sentences.length - 1);
        setActiveSentenceIdx(sIdx);
      }

      if (elapsed >= simDuration) {
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        setIsPlaying(false);
        setActiveSentenceIdx(-1);
        setShowFeedback(true);
      }
    }, 100);
  };

  const handleSignaleerClick = () => {
    if (!isPlaying) return;

    setJustSignaled(true);
    setTimeout(() => setJustSignaled(false), 600);

    const clickTime = currentTime;
    setSignalClicks((prev) => [...prev, { time: clickTime, sentenceIdx: activeSentenceIdx }]);

    let targetIdx = activeSentenceIdx;
    if (targetIdx < 0 && currentFrag?.sentenceTimings) {
      targetIdx = currentFrag.sentenceTimings.findIndex(t => clickTime >= t.start - 0.5 && clickTime <= t.end + 0.8);
    }

    if (targetIdx >= 0 && !flaggedSentences.includes(targetIdx)) {
      setFlaggedSentences((prev) => [...prev, targetIdx]);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || duration <= 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = ratio * duration;

    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }

    if (currentFrag.sentenceTimings && currentFrag.sentenceTimings.length > 0) {
      const sIdx = currentFrag.sentenceTimings.findIndex(t => newTime >= t.start && newTime < t.end);
      setActiveSentenceIdx(sIdx);
    } else {
      const sIdx = Math.min(Math.floor(ratio * sentences.length), sentences.length - 1);
      setActiveSentenceIdx(sIdx);
    }
  };

  const handleSentenceClick = (idx: number) => {
    if (!currentFrag) return;
    let targetTime = 0;
    if (currentFrag.sentenceTimings && currentFrag.sentenceTimings[idx]) {
      targetTime = currentFrag.sentenceTimings[idx].start;
    } else if (duration > 0 && sentences.length > 0) {
      targetTime = (idx / sentences.length) * duration;
    }

    setCurrentTime(targetTime);
    setActiveSentenceIdx(idx);

    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
      if (!isPlaying) {
        startPlayback();
      }
    }
  };

  const handleHerstart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setCurrentTime(0);
    setActiveSentenceIdx(-1);
    setSignalClicks([]);
    setFlaggedSentences([]);
    setShowFeedback(false);
    startPlayback();
  };

  const handleVolgende = () => {
    cleanupAudio();
    const nextIdx = huidig + 1;
    if (nextIdx >= fragmenten.length) {
      onComplete();
    }
    setHuidig(nextIdx);
  };

  const handleOpnieuw = () => {
    cleanupAudio();
    setHuidig(0);
    onReset();
  };

  const progressPercent = duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;
  const isAfgerond = huidig >= fragmenten.length;

  return (
    <div className="bg-[#FBF7F1] border-2 border-[#F4C2D1] rounded-xl p-5 md:p-6 my-6 shadow-2xs">
      <div className="flex items-center gap-2.5 mb-2 text-[#003340]">
        <div className="w-6 h-6 rounded-full bg-[#D3104C] text-white flex items-center justify-center shadow-2xs">
          <Target className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-[#003340]">Train je signaleringsspier</h3>
      </div>
      <p className="text-sm text-[#5A5A55] mb-4">
        Luister naar de studentenervaring. Klik op ‘<strong>Signaleer</strong>’ telkens wanneer je een microagressie, subtiele uitsluiting of meldingsdrempel hoort.
      </p>

      {isAfgerond ? (
        <div className="p-5 bg-[#EDFAF9] border border-[#3AB7B0]/30 rounded-lg text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#3AB7B0]/20 text-[#3AB7B0] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-sm md:text-base font-bold text-[#003340]">
            Alle fragmenten succesvol doorlopen!
          </p>
          <p className="text-xs md:text-sm text-[#5A5A55] max-w-lg mx-auto">
            Signaleren is een vaardigheid die groeit door actief te luisteren naar wat er tussen de regels gezegd wordt.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-[#E8E4DA] rounded-lg p-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <div>
              <span className="font-bold text-base md:text-lg text-[#003340]">{currentFrag.naam}</span>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-center">
              <span className="text-xs font-semibold text-[#7A756E] bg-[#F7EFE3] px-2.5 py-1 rounded">
                Fragment {huidig + 1} van {fragmenten.length}
              </span>
            </div>
          </div>

          {/* Audio Player Controls & Progress */}
          <div className="bg-[#FAF6F0] border border-[#E8E4DA] rounded-lg p-3.5 mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleTogglePlay}
                id="btn-play-pause-audio"
                className="w-10 h-10 rounded-full bg-[#D3104C] hover:bg-[#B41E4B] text-white flex items-center justify-center cursor-pointer transition-transform active:scale-95 shadow-sm flex-shrink-0"
                aria-label={isPlaying ? 'Pauzeren' : 'Afspelen'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={handleHerstart}
                id="btn-herstart-audio"
                title="Herstart vanaf begin"
                className="w-8 h-8 rounded-full border border-[#D5D0C5] text-[#5A5A55] hover:text-[#003340] hover:bg-white flex items-center justify-center cursor-pointer transition-colors flex-shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Clickable Progress Bar */}
              <div
                ref={progressBarRef}
                onClick={handleProgressClick}
                className="relative flex-1 h-3 bg-[#E8E2D5] rounded-full overflow-hidden cursor-pointer group"
                title="Klik om te spoelen"
              >
                <div
                  className="h-full bg-[#D3104C] transition-all duration-100 relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-xs opacity-0 group-hover:opacity-100" />
                </div>
              </div>

              {/* Time display */}
              <div className="text-xs font-mono font-medium text-[#5A5A55] w-20 text-right flex-shrink-0">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
          </div>

          {/* Karaoke Transcript */}
          <div className="text-xs md:text-sm leading-relaxed p-4 bg-[#FBF7F1] rounded-lg border border-[#EDE6DA] mb-5">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-bold text-[#7A756E] mb-2.5">
              <div className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-[#D3104C]" />
                <span>Transcript meelezen</span>
              </div>
              <span className="text-[10px] lowercase text-[#7A756E] font-normal italic">
                (klik op een zin om direct daarnaartoe te springen)
              </span>
            </div>
            {sentences.map((sentence, idx) => {
              const isCurrent = activeSentenceIdx === idx;
              const isFlagged = flaggedSentences.includes(idx);

              return (
                <span
                  key={idx}
                  onClick={() => handleSentenceClick(idx)}
                  title="Klik om audio vanaf deze zin af te spelen"
                  className={`inline transition-all duration-200 px-1.5 py-0.5 rounded cursor-pointer ${
                    isFlagged
                      ? 'bg-[#FCC200]/35 border-b-2 border-[#E59800] font-semibold text-[#003340]'
                      : isCurrent
                      ? 'bg-[#D3104C]/20 border-b-2 border-[#D3104C] font-semibold text-[#003340] shadow-2xs'
                      : 'text-[#5A5A55] hover:bg-black/5 hover:text-[#003340]'
                  }`}
                >
                  {sentence.trim()}{' '}
                </span>
              );
            })}
          </div>

          {/* Large Interactive Signaleer Button */}
          <div className="flex flex-col items-center justify-center gap-2 mb-3">
            <button
              onClick={handleSignaleerClick}
              disabled={!isPlaying}
              id="btn-signaleer-moment"
              className={`px-8 py-3.5 rounded-xl font-bold text-base transition-all flex items-center gap-2 ${
                isPlaying
                  ? justSignaled
                    ? 'bg-[#FCC200] text-[#003340] scale-105 shadow-lg ring-4 ring-[#FCC200]/40'
                    : 'bg-[#B41E4B] hover:bg-[#D3104C] text-white shadow-md active:scale-95 cursor-pointer ring-4 ring-[#B41E4B]/20'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <AlertTriangle className="w-5 h-5" />
              <span>Signaleer ({signalClicks.length})</span>
            </button>
            <p className="text-xs text-[#7A756E] h-4 font-medium">
              {isPlaying
                ? signalClicks.length > 0
                  ? `✓ ${signalClicks.length} signaal/signalen gemarkeerd op dit tijdstip`
                  : 'Klik zodra je iets opvallends of uitsluitends hoort'
                : 'Klik eerst op de Start/Play knop hierboven om de audio te beluisteren'}
            </p>
          </div>

          {/* Feedback Section */}
          {showFeedback && (
            <div className="mt-5 p-4 bg-[#FBF7F1] border border-[#EDE6DA] rounded-lg text-sm leading-relaxed animate-in fade-in">
              <h4 className="font-bold text-[#003340] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D3104C]" />
                <span>Analyse van dit audiofragment</span>
              </h4>

              {flaggedSentences.length > 0 ? (
                <div className="mb-3 p-3 bg-white border border-[#EDE6DA] rounded text-xs text-[#003340]">
                  <span className="font-semibold text-[#00706B] flex items-center gap-1.5 mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Jij hebt tijdens het luisteren {flaggedSentences.length} moment(en) gemarkeerd:
                  </span>
                  <ul className="list-disc pl-4 space-y-1 italic text-[#333]">
                    {flaggedSentences.map((idx) => (
                      <li key={idx}>"{sentences[idx].trim()}"</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-xs text-[#7A756E] mb-3 p-2 bg-white rounded border border-[#EDE6DA]">
                  Je hebt tijdens het afspelen niet op Signaleer geklikt. Bekijk hieronder welke subtiele signalen in dit fragment verborgen zaten.
                </p>
              )}

              <div className="border-t border-[#E8E4DA] pt-3">
                <span className="text-xs font-bold text-[#003340] uppercase tracking-wider block mb-2">
                  Alle signalen in dit fragment ({currentFrag.signalen.length}):
                </span>
                <ul className="space-y-2 text-xs md:text-sm">
                  {currentFrag.signalen.map((sig, sIdx) => (
                    <li key={sIdx} className="bg-white p-2.5 rounded border border-[#EDE6DA]">
                      <span className="font-semibold text-[#D3104C]">"{sig.fragment}"</span>
                      <p className="text-xs text-[#5A5A55] mt-1">{sig.uitleg}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleVolgende}
                  id="btn-volgend-fragment"
                  className="inline-flex items-center gap-1.5 bg-[#003340] hover:bg-[#004558] text-white px-4 py-2 rounded-md text-xs font-semibold cursor-pointer transition-colors"
                >
                  <span>{huidig < fragmenten.length - 1 ? 'Volgend audiofragment' : 'Afronden'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleOpnieuw}
          className="inline-flex items-center gap-1 text-xs text-[#5A5A55] hover:text-[#003340] border border-[#C9C4B8] hover:bg-[#F7EFE3] px-2.5 py-1.5 rounded cursor-pointer transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Opnieuw doen</span>
        </button>

        {isVoltooid && (
          <span className="text-xs text-[#3AB7B0] font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Voltooid
          </span>
        )}
      </div>
    </div>
  );
};
