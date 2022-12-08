import styled from 'styled-components';
import { fullWidth } from '../css/structures';

export const FullWidth = styled.div<{ height?: string }>`
  height: ${({ height }) => height ?? '100%'};
  ${fullWidth}
`;
