import { css } from 'styled-components';

import { alignCenter } from './alignCenter';
import { justifyCenter } from './justifyCenter';

export const flexCenter = css`
  display: flex;

  ${justifyCenter}
  ${alignCenter}
`;
