'use client';

import { fullHeight, pxMargin } from '@/styles/css/structures';
import { VStack } from '@/styles/styled';
import React from 'react';
import { css } from 'styled-components';
import { RiTodoFill } from 'react-icons/ri';
import Head from '@/components/Text/Head';

const Structures = {
  todoListIcon: css`
    font-size: ${(props) => props.theme.fontSizes.mainCopy};
    ${pxMargin(16, 'bottom')}
  `,
  loading: css`
    ${fullHeight};
  `,
};

const Skins = {
  todoListIcon: css`
    color: ${(props) => props.theme.colors.primary100};
  `,
  loading: css`
    background-color: ${(props) => props.theme.colors.loadingBg};
    color: ${(props) => props.theme.colors.white};
  `,
};

const Loading = () => {
  return (
    <VStack center css={[Structures.loading, Skins.loading]}>
      <RiTodoFill css={[Structures.todoListIcon, Skins.todoListIcon]} />
      <Head tag="h3">서버에서 선택하신 할 일을 불러오고 있어요. 🙇🏻‍♂️</Head>
    </VStack>
  );
};

export default Loading;
