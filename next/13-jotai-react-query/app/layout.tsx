'use client';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from '../styles/css/global';
import { flex, flexCenter, flexShrink, pxMargin } from '../styles/css/structures';
import { alignCenter } from '../styles/css/structures/flex/alignCenter';
import { Block } from '../styles/styled/Block';
import { FullWidth } from '../styles/styled/FullWidth';
import { HStack } from '../styles/styled/HStack';
import { cssPipe } from '../utils/cssPipe';

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
              <HStack center height="4rem">
                <Block width="200px" height="100%" css={cssPipe(flexShrink, flex, alignCenter)}>
                  NEXT13
                </Block>

                <HStack center css={pxMargin([0, 100, 0, 100])}>
                  <FullWidth css={flexCenter}>2</FullWidth>
                  <FullWidth css={flexCenter}>3</FullWidth>
                  <FullWidth css={flexCenter}>4</FullWidth>
                </HStack>
              </HStack>
              {children}
            </>
          )}
        </body>
      </html>
    </ThemeProvider>
  );
}
