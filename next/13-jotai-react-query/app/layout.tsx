'use client';
import { css } from 'styled-components';
import { HStack } from '../styles/styled/HStack';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <HStack center>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </HStack>
        {children}
      </body>
    </html>
  );
}
