"use client";

import { styled } from 'styled-components'
import { TDividerProps } from './Divider.types'

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['backgroundColor'].includes(prop),
})<TDividerProps>`
  width: ${props => !props.reversed ? props.width : props.height};
  height: ${props => !props.reversed ? props.height : props.width};

  background-color: ${props => props.backgroundColor};
`