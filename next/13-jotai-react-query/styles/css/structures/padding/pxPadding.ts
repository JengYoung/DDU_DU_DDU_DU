import { css } from 'styled-components';
import { PdType } from './types';

export const pxPadding = (
  pd: number | PdType,
  type: '' | 'top' | 'right' | 'bottom' | 'left' = ''
) => css`
  ${type
    ? `padding-${type}: ${typeof pd === 'number' ? pd : pd.join('px ')}px;`
    : `padding: ${typeof pd === 'number' ? pd : pd.join('px ')}px;`}
`;
