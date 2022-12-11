import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components';

export const cssPipe = (
  ...args: (FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>)[]
) => {
  return css`
    ${args}
  `;
};
