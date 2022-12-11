'use client';

import React from 'react';
import { Page } from '@/styles/styled/Page';

import { css, useTheme } from 'styled-components';
import Head from '@/components/Text/Head';
import { flexCenter } from '@/styles/css/structures';

const Structures = {
  head: css`
    font-size: ${(props) => props.theme.fontSizes.mainCopy};
  `,
};

const Skins = {
  page: {
    color: css`
      color: ${(props) => props.theme.colors.white};
    `,
  },
};

const HomePage = () => {
  const theme = useTheme();

  return (
    <Page bg={theme.colors.primary} css={[flexCenter, Skins.page.color]}>
      <Head tag="h1" css={Structures.head}>
        JengYoung&apos;s TODOLIST 🙆🏻
      </Head>
    </Page>
  );
};

export default HomePage;
