"use client";

import { styled } from "styled-components";

export const List = styled.ul<{ vertical?: boolean }>`
  display: flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  align-items: center;
`