import { css, styled } from "styled-components";

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<{ isActive: boolean }>`
  display: flex;
    
  justify-content: center;
  width: 32px;

  transition: all 0.3s;
  opacity: 0;

  ${({ isActive }) => isActive && css`
    opacity: 1;
  `}
`