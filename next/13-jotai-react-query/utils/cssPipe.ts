import { css, FlattenSimpleInterpolation } from 'styled-components';

export const cssPipe = (...args: FlattenSimpleInterpolation[]) => {
  return css`
    ${args.reduce((acc, cur) => `${acc}${cur}`, ``)}
  `;
};
