export type GlobalThemeType = typeof globalTheme;

export const globalTheme = {
  fontSizes: {
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
  },
  layout: {
    header: {
      height: '4rem',
    },
  },
} as const;
