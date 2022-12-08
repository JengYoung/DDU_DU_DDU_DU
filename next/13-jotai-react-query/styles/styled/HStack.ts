import styled from 'styled-components';
import { flex, flexCenter } from '../css/structures';

export const HStack = styled.div<{ center: true; height?: string }>`
  width: 100%;
  height: ${({ height }) => height ?? 'auto'};
  ${flex}

  ${({ center }) => center && flexCenter}
`;
