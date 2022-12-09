import React from 'react';
import {
  alignCenter,
  flex,
  flexCenter,
  flexShrink,
  pxMargin,
  remMargin,
} from '@/styles/css/structures';
import { Block, FullWidth, HStack } from '@/styles/styled';
import { cssPipe } from '@/utils/cssPipe';
import Head from '@/components/Text/Head';
import { css } from 'styled-components';

const Styled = {
  Header: css`
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  `,
};
const Header = () => {
  return (
    <HStack center height="4rem" css={Styled.Header}>
      <Block width="200px" height="100%" css={cssPipe(flexShrink, flex, alignCenter)}>
        <Head tag="h4" css={pxMargin([0, 16, 0, 16])}>
          NextJS 13
        </Head>
      </Block>

      <HStack center css={pxMargin([0, 100, 0, 100])}>
        <FullWidth css={flexCenter}>Home</FullWidth>
        <FullWidth css={flexCenter}>Todo</FullWidth>
        <FullWidth css={flexCenter}>Write</FullWidth>
      </HStack>
    </HStack>
  );
};

export default Header;
