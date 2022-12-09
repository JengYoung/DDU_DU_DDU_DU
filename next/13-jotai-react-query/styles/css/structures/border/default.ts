import { css } from 'styled-components';

export const borderDefault = (type: 'left' | 'right' | 'up' | 'bottom') => css`
  ${type
    ? `
      border-width: 1px;
    `
    : `
      border-${type}-width: 1px;
    `}

  border-style: solid;
`;
