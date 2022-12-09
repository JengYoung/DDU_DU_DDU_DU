import { textCenter } from '@/styles/css/structures';
import React from 'react';
import styled from 'styled-components';

interface HeadPropsInterface {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  center?: boolean;
  children: React.ReactNode;
}

const StyledHead = styled.div<{ center: boolean }>`
  ${({ center }) => center && textCenter}
`;

const Head = ({ tag, center = false, children, ...props }: HeadPropsInterface) => {
  return (
    <StyledHead {...props} center={center} as={tag}>
      {children}
    </StyledHead>
  );
};

export default Head;
