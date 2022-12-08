import styled from 'styled-components';
import { flexCenter } from '../css/structures';

console.log('hihi');
export const HStack = styled.div<{ center: true }>`
  width: 100%;
  display: flex;
  ${({ center }) => center && flexCenter}
`;
