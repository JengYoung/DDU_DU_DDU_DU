import { css } from 'styled-components';

export const borderWidth = (type?: 'left' | 'right' | 'up' | 'bottom') => css`
  ${type
    ? `
      border-${type}-width: 1px;
    `
    : `
      border-width: 1px;
    `}

  border-style: solid;
`;
