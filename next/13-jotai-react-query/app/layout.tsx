'use client';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/layout/Header';
import { globalTheme } from '../styles/css/global';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(() => true);
  }, []);

  return (
    <ThemeProvider theme={globalTheme}>
      <html>
        <body>
          {loading && (
            <>
              <Header />
              {children}
            </>
          )}
        </body>
      </html>
    </ThemeProvider>
  );
}
