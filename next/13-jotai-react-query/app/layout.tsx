'use client';

import '@/styles/globals.css';
import { fullHeight } from '@/styles/css/structures';
import { VStack } from '@/styles/styled';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '@/components/layout/Header';
import { globalTheme } from '@/styles/css/global';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(() => true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={globalTheme}>
        <html>
          <body className={roboto.className}>
            {isMounted && (
              <VStack css={fullHeight}>
                <Header />
                {children}
              </VStack>
            )}
          </body>
        </html>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
