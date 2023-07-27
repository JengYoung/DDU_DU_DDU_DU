import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '#/libs/registry'
import { Main } from '#/layouts/Main';
import { Body } from '#/layouts/Body';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '연구주제 1. Draggable 구현',
  description: 'Draggable을 구현해봅니다 🙆🏻',
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Body>
        <StyledComponentsRegistry>
          <Main>
            {children}
          </Main>
        </StyledComponentsRegistry>
      </Body>
    </html>
  );
}
