import { css } from 'styled-components';
import { PdType } from './types';

export const remPadding = (pd: number | PdType) => css`
  padding: ${typeof pd === 'number' ? pd : pd.join('px; ')}px;
`;
