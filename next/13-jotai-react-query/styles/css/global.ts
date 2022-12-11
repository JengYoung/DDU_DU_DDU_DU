import { css } from 'styled-components';

export const globalTheme = {
  fontSizes: {
    mainCopy: '100px',
    xxl: '2rem',
    xl: '1.5rem',
    lg: '1.25rem',
    default: '1rem',
    sm: '0.875rem',
    xs: '0.75rem',
  },
  fontWeights: {
    light: 400,
    bold: 700,
    extrabold: 900,
  },
  colors: {
    page: '#f7f7f7',
    primary100: '#EAD4FE',
    primary200: '#D3AAFD',
    primary300: '#B77FF9',
    primary400: '#9D5EF4',
    primary: '#752bed',
    borderColor: '#ddd',
    white: '#fff',
    text: '#222',
    transparent: 'transparent',
    errorBg: '#000',
    loadingBg: 'rgba(0,0,0,0.75)',
  },
  layout: {
    header: {
      height: '4rem',
    },
  },
  effect: {
    transition: 'all 0.3s',
  },
} as const;

export type GlobalThemeType = typeof globalTheme;
