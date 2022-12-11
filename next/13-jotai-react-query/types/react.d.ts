import { CSSProp, DefaultTheme } from 'styled-components';
import { GlobalThemeType } from '@/styles/css/global';
import 'styled-components';

interface MyTheme extends GlobalThemeType {}

declare module 'styled-components' {
  interface DefaultTheme extends MyTheme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
