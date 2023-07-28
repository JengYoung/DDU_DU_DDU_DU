import { css, styled } from "styled-components";
import { TReceiverProps } from "./Receiver.types";

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<Pick<TReceiverProps, 'width' | 'height' | 'isActive' | 'reversed'>>`
  display: flex;
    
  justify-content: center;
  align-items: center;

  transition: all 0.3s;
  opacity: 0;

  ${({ isActive }) => isActive && css`
    opacity: 1;
  `}

  width: ${props => !props.reversed ? props.width : props.height};
  height: ${props => !props.reversed ? props.height : props.width};
`