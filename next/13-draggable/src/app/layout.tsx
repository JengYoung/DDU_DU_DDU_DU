import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import StyledComponentsRegistry from '#/libs/registry'
import "#/styles/global.css"

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '연구주제 1. Draggable 구현',
  description: 'Draggable을 구현해봅니다 🙆🏻',
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
