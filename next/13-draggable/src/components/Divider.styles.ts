"use client";

import { styled } from 'styled-components'
import { TDividerProps } from './Divider.types'

export const Container = styled.div<TDividerProps>`
  width: ${props => !props.reverse ? props.width : props.height};
  height: ${props => !props.reverse ? props.height : props.width};
  background-color: ${props => props.backgroundColor};
`