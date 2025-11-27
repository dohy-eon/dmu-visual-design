export const theme = {
  colors: {
    bgDark: '#050A14',
    bgNavy: '#0A192F',
    accentBlue: '#0047FF',
    accentCyan: '#00F0FF',
    textWhite: '#FFFFFF',
    textGray: '#8892B0',
    glassBg: 'rgba(255, 255, 255, 0.03)',
    glassBorder: 'rgba(255, 255, 255, 0.08)',
  },
  fonts: {
    primary: "'Noto Sans KR', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  spacing: {
    sectionPadding: 'clamp(4rem, 8vh, 8rem) clamp(2rem, 5vw, 4rem)',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '900px',
  },
};

export type Theme = typeof theme;

