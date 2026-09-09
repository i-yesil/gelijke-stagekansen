export type LinkType = 'bron' | 'video' | 'zelfcheck' | 'download' | 'tip' | 'verdieping' | 'komtnog';

export interface LinkItem {
  label: string;
  url: string | null;
  type: LinkType;
  videoId?: string;
  inline?: string;
}

export interface VerwachtingItem {
  tekst: string;
  link?: LinkItem;
}

export interface VerwachtingGroep {
  kopje: string;
  items: VerwachtingItem[];
}

export interface UitklapItem {
  type: 'tip' | 'bron' | 'download' | 'zelfcheck' | 'academie' | 'verdieping';
  titel: string;
  url?: string;
  inhoud?: string;
}

export interface StepTheme {
  primary: string;
  lightBg: string;
  subtle: string;
  border: string;
  badgeBg: string;
  badgeText: string;
  labelColor: string;
}

export interface Bouwsteen {
  id: number;
  titel: string;
  kleur: string;
  inleiding: string;
  korteToelichting?: string;
  verwachting: VerwachtingItem[];
  verwachtingGroepen?: VerwachtingGroep[];
  uitklaps: UitklapItem[];
}

export interface SentenceTiming {
  start: number;
  end: number;
}

export interface SignaalFragment {
  naam: string;
  subtitel?: string;
  audioSrc?: string;
  stemType?: 'mannelijk' | 'vrouwelijk';
  stemLabel?: string;
  tekst: string;
  sentenceTimings?: SentenceTiming[];
  signalen: {
    fragment: string;
    uitleg: string;
  }[];
}

export interface MytheFeitStelling {
  stelling: string;
  antwoord: 'mythe' | 'feit';
  toelichting: string;
}

export interface DialoogReactie {
  tekst: string;
  effect: 'open' | 'sluit';
  uitleg: string;
}

export interface OMARegel {
  start: number;
  eind: number;
  principe: string;
  uitleg: string;
}

export interface CasusKeuze {
  tekst: string;
  valkuil: string | null;
  uitleg: string;
}

export interface NazorgOptie {
  letter: string;
  tekst: string;
  juist: boolean;
  uitleg: string;
}

export interface NazorgStudent {
  naam: string;
  verhaal: string;
  juistOptie: string;
  opties: NazorgOptie[];
}

export interface AppProgressState {
  actieveStap: number | null;
  geopend: Record<number, boolean>;
  opdrachtGedaan: Record<number, boolean>;
  reflectie: string;
}
