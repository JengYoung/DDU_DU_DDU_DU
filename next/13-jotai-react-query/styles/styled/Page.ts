import styled from 'styled-components';
import { flexFull } from '../css/structures';

export const Page = styled.section<{ bg?: string }>`
  ${flexFull}
  background-color: ${(props) => props.bg ?? props.theme.colors.page};
`;
