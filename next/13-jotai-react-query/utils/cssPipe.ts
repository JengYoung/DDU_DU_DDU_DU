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
  // console.log('res', args.reduce((acc, cur) => {
  //   console.log('acc: ', acc)
  //   console.log('cur: ', cur)
  //   return css`
  //     ${acc}
  //     ${cur}
  //   `
  // }, ``))
  console.log(args.join('\n').replaceAll(',', ''));
  return css`
    ${args}
  `;
};
