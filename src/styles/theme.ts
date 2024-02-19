const size = {
  XS: '0.5rem',
  S: '1rem',
  M: '1.5rem',
  L: '2rem',
  XL: '2.5rem',
  XXL: '3rem',
  full: '100%',
  half: '50%',
  none: '0',
};

const borderRadius = {
  circle: '50%',
  round: '0.5rem',
  square: '0',
};

const device = {
  mobile: `(max-width: 420px)`,
  tablet: `(max-width: 768px)`,
  laptop: `(max-width: 1024px)`,
};

const fontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

const color = {
  black_primary: '#2c2c2c',
  white_primary: '#FFFFFF',
  gray_50: '#909090',
  gray_30: '#B3B3B3',
  gray_20: '#E3E3E3',
  gray_10: '#EFEFEF',
};

export const theme = {
  color,
  size,
  borderRadius,
  fontWeight,
  device,
};

export type ThemeType = typeof theme;
