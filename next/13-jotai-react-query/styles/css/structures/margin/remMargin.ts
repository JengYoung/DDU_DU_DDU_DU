import { css } from 'styled-components';
import { MgType } from './types';

export const remMargin = (mg: number | MgType) => css`
  margin: ${typeof mg === 'number' ? mg : mg.join('px; ')}px;
`;
