import { css } from 'styled-components';

import { flex } from './flex';
import { alignCenter } from './alignCenter';
import { justifyCenter } from './justifyCenter';

export const flexCenter = css`
  ${flex}
  ${justifyCenter}
  ${alignCenter}
`;
