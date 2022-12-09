import styled from 'styled-components';
import { flexCenter } from '../css/structures';

export const VStack = styled.div<{ center: true; width?: string }>`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => width ?? '100%'};

  ${({ center }) => center && flexCenter}
`;
