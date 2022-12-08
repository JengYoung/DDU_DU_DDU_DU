'use client';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from '../styles/css/global';
import { flex, flexCenter, flexShrink } from '../styles/css/structures';
import { alignCenter } from '../styles/css/structures/flex/alignCenter';
import { Block } from '../styles/styled/Block';
import { FullWidth } from '../styles/styled/FullWidth';
import { HStack } from '../styles/styled/HStack';
import { cssPipe } from '../utils/cssPipe';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={globalTheme}>
      <html>
        <body>
          <HStack center height="4rem">
            <Block width="200px" height="100%" css={cssPipe(flexShrink, flex, alignCenter)}>
              NEXT13
            </Block>

            <FullWidth css={flexCenter}>2</FullWidth>
            <FullWidth css={flexCenter}>3</FullWidth>
            <FullWidth css={flexCenter}>4</FullWidth>
          </HStack>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
