import Head from '@/components/Text/Head';
import { flexCenter, fullHeight, fullWidth, pxMargin } from '@/styles/css/structures';
import { absoluteFull } from '@/styles/css/structures/position/absoluteFull';
import { relative } from '@/styles/css/structures/position/relative';
import { zIndex } from '@/styles/css/structures/position/zIndex';
import { VStack } from '@/styles/styled';
import { Page } from '@/styles/styled/Page';
import Image from 'next/image';
import React from 'react';
import { css, useTheme } from 'styled-components';
import errorBg from '@/public/error-bg.jpg';

const Structures = {
  page: css`
    ${relative}
    ${flexCenter}
    ${fullWidth}
    ${fullHeight}
  `,
  backgroundDim: css`
    filter: brightness(0.5);
    ${absoluteFull}
    ${zIndex(1)};
    ${flexCenter}
    ${fullWidth}
  `,
  mainCopy: css`
    font-size: ${(props) => props.theme.fontSizes.mainCopy};
  `,
  headMargin: css`
    ${pxMargin(12, 'top')}
  `,
};

const Skins = {
  page: css`
    background-color: ${(props) => props.theme.colors.errorBg};
  `,
  backgroundDim: css`
    filter: brightness(0.5);
    ${zIndex(1)};
  `,
  head: css`
    color: ${(props) => props.theme.colors.white};
  `,
};

const ErrorPage = ({ children }: { children?: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <Page bg={theme.colors.transparent} css={flexCenter}>
      <div css={[Structures.page, Skins.page]}>
        <div css={[absoluteFull, Skins.backgroundDim, flexCenter]}>
          <Image css={[flexCenter, pxMargin(0), fullHeight]} src={errorBg} alt="error background" />
        </div>

        <VStack center css={[zIndex(2), fullHeight]}>
          <Head tag="h1" css={[Structures.mainCopy, Structures.headMargin, Skins.head]}>
            404
          </Head>
          <Head tag="h1" css={[Structures.headMargin, Skins.head]}>
            서버에서 데이터를 가져올 수 없었어요. 😖
          </Head>
          <span css={[Structures.headMargin, pxMargin(24, 'bottom'), Skins.head]}>
            연속적인 서버 불러오기 실패 시 네트워크를 확인해주세요.
          </span>
          {children}
        </VStack>
      </div>
    </Page>
  );
};

export default ErrorPage;
