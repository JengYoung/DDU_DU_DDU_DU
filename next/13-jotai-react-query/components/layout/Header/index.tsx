'use client';
import React, { useEffect, useRef, useState } from 'react';
import { alignCenter, flex, flexShrink, pxMargin, pxPadding } from '@/styles/css/structures';
import { Block, FullWidth, HStack } from '@/styles/styled';
import Head from '@/components/Text/Head';
import { css, useTheme } from 'styled-components';
import Link from 'next/link';
import { borderWidth } from '@/styles/css/structures/border/width';
import { usePathname, useRouter } from 'next/navigation';

const Skins = {
  header: css`
    border-color: ${(props) => props.theme.colors.borderColor};
  `,
};

interface LinkInterface {
  id: string;
  href: string;
  name: string;
}

const Header = () => {
  const theme = useTheme();
  const Links: readonly LinkInterface[] = [
    { id: 'link-home', href: '/', name: 'HOME' },
    { id: 'link-todos', href: '/todos', name: 'TODOS' },
    { id: 'link-write', href: '/write', name: 'WRITE' },
  ];

  return (
    <HStack
      center
      height={theme.layout.header.height}
      css={[flexShrink, pxPadding([0, 16, 0, 16]), borderWidth('bottom'), Skins.header]}
    >
      <Block width="200px" height="100%" css={[flexShrink, flex, alignCenter]}>
        <Link href={Links[0].href}>
          <Head tag="h4">NextJS 13</Head>
        </Link>
      </Block>

      <HStack center css={pxMargin([0, 100, 0, 100])}>
        {Links.map((link) => (
          <FullWidth key={link.id}>
            <Link href={link.href}>{link.name}</Link>
          </FullWidth>
        ))}
      </HStack>
    </HStack>
  );
};

export default Header;
