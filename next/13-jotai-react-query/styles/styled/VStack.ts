import styled from 'styled-components';
import { flexCenter } from '../css/structures';

export const VStack = styled.div<{ center?: boolean; width?: string }>`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => width ?? '100%'};

  ${({ center }) => center && flexCenter}
`;
