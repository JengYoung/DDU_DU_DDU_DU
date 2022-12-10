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
  colors: {
    page: '#f7f7f7',
    primary: '#752bed',
    borderColor: '#ddd',
    white: '#fff',
    text: '#222',
  },
  layout: {
    header: {
      height: '4rem',
    },
  },
} as const;

export type GlobalThemeType = typeof globalTheme;
