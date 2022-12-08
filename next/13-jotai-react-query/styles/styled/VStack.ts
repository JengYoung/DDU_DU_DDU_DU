import styled from 'styled-components';
import { flexCenter } from '../css/structures';

export const VStack = styled.div<{ center: true; width?: string }>`
  display: flex;
  flex-direction: column;

  ${({ center }) => center && flexCenter}
  width: ${({ width }) => width ?? '100%'}
`;
