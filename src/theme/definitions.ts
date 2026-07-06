export interface Theme {
  name: string;
  body: string;
  base: string;
  filler: string;
  header: string;
  textTitle: string;
  textNormal: string;
  textMuted: string;
  border: string;
  selected: string;
  hover: string;
  focus: string;
  link: string;
}

export const THEMES: Record<string, { light: Theme; dark: Theme }> = {
  paper: {
    light: {
      name: '🌾 Paper / 纸墨',
      body: '#F4F0E6',
      base: '#FDFBF7',
      filler: '#EFECE1',
      header: '#F1E8D7',
      textTitle: '#2B2B2B',
      textNormal: '#3D3D3D',
      textMuted: '#6B6258',
      border: '#D5D1C4',
      selected: '#E3DEC9',
      hover: '#F0EDE1',
      focus: '#9E8055',
      link: '#1A73E8',
    },
    dark: {
      name: '🌾 Paper Dark / 暗纸墨',
      body: '#2D2924',
      base: '#24211D',
      filler: '#35302A',
      header: '#3A342E',
      textTitle: '#E5E1D5',
      textNormal: '#C8C4B9',
      textMuted: '#9B968B',
      border: '#4F473E',
      selected: '#473F36',
      hover: '#38322B',
      focus: '#B39669',
      link: '#4DA5FF',
    }
  },

  mint: {
    light: {
      name: '🌿 Mint / 薄荷',
      body: '#EAF1EC',
      base: '#F0F4F1',
      filler: '#E2ECE5',
      header: '#DDEBE1',
      textTitle: '#1C2D22',
      textNormal: '#263B2D',
      textMuted: '#607268',
      border: '#BFD2C3',
      selected: '#D4E6D8',
      hover: '#E6F0E9',
      focus: '#4F7C5F',
      link: '#1769E0',
    },
    dark: {
      name: '🌿 Mint Dark / 暗薄荷',
      body: '#1C2621',
      base: '#171F1B',
      filler: '#222E28',
      header: '#28362F',
      textTitle: '#D6E5DB',
      textNormal: '#B6CCBE',
      textMuted: '#849E8F',
      border: '#3F574A',
      selected: '#374D41',
      hover: '#25342C',
      focus: '#6CA983',
      link: '#4DA5FF',
    }
  },

  silver: {
    light: {
      name: '☁️ Silver / 云灰',
      body: '#EEF2F5',
      base: '#F8FAFC',
      filler: '#E8EEF4',
      header: '#E5EBF1',
      textTitle: '#2C3440',
      textNormal: '#364152',
      textMuted: '#6B7788',
      border: '#CDD6DF',
      selected: '#DDE7F3',
      hover: '#EDF3F8',
      focus: '#4C7FB8',
      link: '#1769E0',
    },
    dark: {
      name: '☁️ Silver Dark / 暗云灰',
      body: '#23272C',
      base: '#1E2226',
      filler: '#2B3138',
      header: '#323942',
      textTitle: '#E0E7F0',
      textNormal: '#B5C1CF',
      textMuted: '#8A97A6',
      border: '#475363',
      selected: '#3B4553',
      hover: '#29303A',
      focus: '#6496D4',
      link: '#4DA5FF',
    }
  },
};

export const DEFAULT_THEME = 'paper';
