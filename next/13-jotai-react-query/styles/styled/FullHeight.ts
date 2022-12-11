import styled from 'styled-components';
import { fullHeight } from '../css/structures';

export const FullHeight = styled.div<{ width?: string }>`
  width: ${({ width }) => width ?? '100%'};
  ${fullHeight}
`;
