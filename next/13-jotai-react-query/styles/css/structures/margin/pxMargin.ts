import { css } from 'styled-components';
import { MgType } from './types';

export const pxMargin = (
  mg: number | MgType,
  type: '' | 'top' | 'right' | 'bottom' | 'left' = ''
) => css`
  ${type
    ? `margin-${type}: ${typeof mg === 'number' ? mg : mg.join('px; ')}px;`
    : `margin: ${typeof mg === 'number' ? mg : mg.join('px; ')}px;`}
`;
