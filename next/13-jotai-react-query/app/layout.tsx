'use client';

import { fullHeight } from '@/styles/css/structures';
import { VStack } from '@/styles/styled';
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
            <VStack css={fullHeight}>
              <Header />
              {children}
            </VStack>
          )}
        </body>
      </html>
    </ThemeProvider>
  );
}
