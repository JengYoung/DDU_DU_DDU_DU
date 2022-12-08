import { css } from 'styled-components';
import { PdType } from './types';

export const remPadding = (
  pd: number | PdType,
  type: '' | 'top' | 'right' | 'bottom' | 'left' = ''
) => css`
  ${type
    ? `padding-${type}: ${typeof pd === 'number' ? pd : pd.join('rem ')}rem;`
    : `padding: ${typeof pd === 'number' ? pd : pd.join('rem ')}rem;`}
`;
