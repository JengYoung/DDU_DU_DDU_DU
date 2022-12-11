import { css } from 'styled-components';
import { MgType } from './types';

export const remMargin = (
  mg: number | MgType,
  type: '' | 'top' | 'right' | 'bottom' | 'left' = ''
) => css`
  ${type
    ? `margin-${type}: ${typeof mg === 'number' ? mg : mg.join('rem ')}rem;`
    : `margin: ${typeof mg === 'number' ? mg : mg.join('rem ')}rem;`}
`;
