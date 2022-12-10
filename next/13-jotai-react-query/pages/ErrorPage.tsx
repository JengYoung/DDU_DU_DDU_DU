import Head from '@/components/Text/Head';
import { flexCenter, pxMargin } from '@/styles/css/structures';
import { VStack } from '@/styles/styled';
import { Page } from '@/styles/styled/Page';
import React from 'react';
import { css, useTheme } from 'styled-components';

const Structures = {
  mainCopy: css`
    font-size: ${(props) => props.theme.fontSizes.mainCopy};
  `,
  headMargin: css`
    ${pxMargin(24, 'bottom')}
  `,
};

const Skins = {
  head: css`
    color: ${(props) => props.theme.colors.white};
  `,
};

const ErrorPage = () => {
  const theme = useTheme();

  return (
    <div>
      <Page bg={theme.colors.primary} css={[flexCenter]}>
        <VStack center>
          <Head tag="h1" css={[Structures.mainCopy, Structures.headMargin, Skins.head]}>
            404
          </Head>
          <Head tag="h1" css={[Skins.head, Structures.headMargin]}>
            서버에서 데이터를 가져올 수 없었어요. 😖
          </Head>
        </VStack>
      </Page>
    </div>
  );
};

export default ErrorPage;
