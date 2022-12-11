import { css } from 'styled-components';
import { MgType } from '../margin/types';

export const borderRadius = (
  mg: number | MgType,
  type: '' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = ''
) => css`
  ${type
    ? `border-${type}-radius: ${typeof mg === 'number' ? mg : mg.join('px ')}px;`
    : `border-radius: ${typeof mg === 'number' ? mg : mg.join('px ')}px;`}
`;
