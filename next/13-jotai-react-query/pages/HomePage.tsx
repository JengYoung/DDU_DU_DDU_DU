'use client';

import React from 'react';

import { flexFull, fullHeight } from '@/styles/css/structures';
import '@/styles/globals.css';
import styled from 'styled-components';

const StyledPage = styled.section`
  ${fullHeight}
  ${flexFull};
  background-color: ${(props) => props.theme.colors.page};
`;

const HomePage = () => {
  return <StyledPage>pages</StyledPage>;
};

export default HomePage;
