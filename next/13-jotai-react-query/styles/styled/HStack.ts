import styled, { DefaultTheme, ThemedCssFunction } from 'styled-components';
import { flexCenter } from '../css/structures';

export const HStack = styled.div<{ center: true; height?: string }>`
  width: 100%;
  display: flex;

  ${({ center }) => center && flexCenter}
  height: ${({ height }) => height ?? 'auto'};
`;
